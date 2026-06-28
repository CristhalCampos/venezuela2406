'use server'

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function searchPerson(query: string, page: number = 0) {
  const pageSize = 10;
  const from = page * pageSize;
  const to = from + pageSize - 1;

  try {
    let queryBuilder = supabase
      .from('persons')
      .select('*', { count: 'exact' });

    if (query && query.trim().length >= 3) {
      const term = `%${query.trim()}%`;
      queryBuilder = queryBuilder.or(
        `full_name.ilike.${term},origin.ilike.${term},current_location.ilike.${term}`
      );
    }

    const { data, error } = await queryBuilder
      .order('id', { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Error técnico del SDK:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Error inesperado:", err);
    return [];
  }
}