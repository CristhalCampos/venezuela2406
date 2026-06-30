'use server'

import { createClient } from '@supabase/supabase-js';

// 1. Definición de la interfaz solicitada
export interface Person {
  id: number | string; // Permitimos string por si el ID de la API externa no es numérico
  full_name: string;
  id_number?: string;
  age?: number;
  sex?: 'M' | 'F';
  status: 'encontrado' | 'desaparecido';
  origin?: string;
  last_location?: string;
  reported_by?: string;
  is_minor?: string;
  photo_url?: string;
  date?: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Función auxiliar para normalizar datos de la API externa
function mapExternalToPerson(item: any): Person {
  const info = item.relevantInfo || "";
  
  // Dividimos el texto por el separador '·'
  const parts = info.split('·').map((p: string) => p.trim());

  // Función para extraer valores basada en clave:valor (para campos posteriores)
  const extractInfo = (key: string) => {
    const regex = new RegExp(`${key}:\\s*([^·]+)`);
    const match = info.match(regex);
    return match ? match[1].trim() : undefined;
  };

  return {
    id: item.id,
    full_name: item.fullName || "Sin nombre",
    id_number: item.documentId || undefined,
    age: extractInfo('edad') || undefined,
    sex: undefined,
    status: 'encontrado',
    reported_by: extractInfo('localizado por') || parts.length > 0 ? parts[0] : undefined,
    current_location: extractInfo('ubicación') || extractInfo('lugar'),
    date: extractInfo('fecha') || undefined,
  };
}

export async function searchPerson(query: string, page: number = 0): Promise<Person[]> {
  try {
    // A. Búsqueda en Supabase
    let queryBuilder = supabase.from('persons').select('*');
    if (query && query.trim().length >= 3) {
      const term = `%${query.trim()}%`;
      queryBuilder = queryBuilder.or(`full_name.ilike.${term},id_number.ilike.${term}`);
    }
    const { data: supabaseData, error } = await queryBuilder.order('id', { ascending: false }).limit(20);

    // B. Búsqueda en API externa
    const externalUrl = `https://bot-production-ed0b.up.railway.app/api/v1/found-people?q=${encodeURIComponent(query)}`;
    const extResponse = await fetch(externalUrl);
    const extJson = await extResponse.json();
    const externalData: Person[] = (extJson.data || []).map(mapExternalToPerson);

    // C. Combinar y eliminar duplicados (usando id_number como referencia)
    const allPeople: Person[] = [...(supabaseData || []), ...externalData];
    const uniquePeople = Array.from(
      new Map(allPeople.map(p => [p.id_number || p.full_name, p])).values()
    );

    return uniquePeople;
  } catch (err) {
    console.error("Error en búsqueda combinada:", err);
    return [];
  }
}