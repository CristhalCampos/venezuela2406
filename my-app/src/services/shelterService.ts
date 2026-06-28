// src/services/shelterService.ts

export interface Shelter {
  name: string;
  location: string;
  type: 'refugio' | 'centro de acopio' | 'punto de ayuda';
}

const LOCAL_SHELTERS: Shelter[] = [
  // Refugios
  { name: "Complejo Cultural y Deportivo Guayana Esequiba", location: "Parroquia San Bernardino", type: "refugio" },
  { name: "Estadio Chato Candela", location: "Parroquia 23 de Enero", type: "refugio" },
  { name: "Sede del Instituto Nacional de Deportes (IND)", location: "Parroquia El Paraíso", type: "refugio" },
  { name: "Sede de Ipostel (Centro Postal de Caracas)", location: "Parroquia San Juan", type: "refugio" },
  { name: "Liceo Andrés Bello", location: "Centro de Caracas", type: "refugio" },
  { name: "Parque Alí Primera", location: "Catia", type: "refugio" },
  { name: "Parque Generalísimo Francisco de Miranda", location: "Municipio Sucre", type: "refugio" },
  { name: "Plaza Altamira", location: "Municipio Chacao", type: "refugio" },
  { name: "Plaza Bolívar de Chacao", location: "Municipio Chacao", type: "refugio" },
  { name: "Coliseo de La Urbina", location: "Refugio temporal", type: "refugio" },
  // Centros de acopio
  { name: "Centro de Acopio Activo El Remanso", location: "San Diego, Carabobo", type: "centro de acopio" },
  { name: "Mujeres de San Diego en Vanguardia", location: "San Diego, Carabobo", type: "centro de acopio" },
  { name: "Sede de los Bomberos Municipales / Alcaldía Socialista de Puerto Cabello", location: "Puerto Cabello, Carabobo", type: "centro de acopio" },
  { name: "colegio Cristo rey", location: "Valencia, Carabobo", type: "centro de acopio" },
  { name: "Sede de Rotary Puerto la Cruz", location: "Lechería, Anzoátegui", type: "centro de acopio" },
  { name: "Primo Cafe", location: "Naguanagua, Carabobo", type: "centro de acopio" },
  { name: "Hotel Manantial", location: "Naguanagua, Carabobo", type: "centro de acopio" },
  { name: "Sistema Integrado", location: "Valencia, Carabobo", type: "centro de acopio" },
  { name: "MRW 1150 ALTAMIRA", location: "Caracas, Miranda", type: "centro de acopio" },
  { name: "MRW 5170 MARACAY LA ROMANA", location: "Maracay, Aragua", type: "centro de acopio" },
  { name: "MRW 5140 MARACAY LA COOPERATIVA", location: "Maracay, Aragua", type: "centro de acopio" },
  { name: "MRW 5111 SANTA RITA", location: "Santa Rita, Aragua", type: "centro de acopio" },
  { name: "MRW 5110 TURMERO ZONA INDUSTRIAL", location: "Turmero, Aragua", type: "centro de acopio" },
  { name: "MRW 5100 MARACAY LA DEMOCRACIA", location: "Maracay, Aragua", type: "centro de acopio" },
  { name: "MRW 3000 BARCELONA", location: "Barcelona, Anzoátegui", type: "centro de acopio" },
  { name: "MRW 1450 CAPITOLIO", location: "Caracas, Distrito Capital", type: "centro de acopio" },
  { name: "MRW 1430 ANDRÉS BELLO", location: "Caracas, Distrito Capital", type: "centro de acopio" },
  { name: "MRW 1470 LA CASTELLANA", location: "Caracas, Miranda", type: "centro de acopio" },
  { name: "MRW 1420 EL VALLE", location: "Caracas, Distrito Capital", type: "centro de acopio" },
  { name: "MRW 1280 CATIA", location: "Caracas, Distrito Capital", type: "centro de acopio" },
  { name: "MRW 1410 AV. CASANOVA", location: "Caracas, Distrito Capital", type: "centro de acopio" },
  { name: "MRW 1300 SANTA MONICA", location: "Caracas, Distrito Capital", type: "centro de acopio" },
  { name: "MRW 1270 BOLEÍTA", location: "Caracas, Miranda", type: "centro de acopio" },
  { name: "MRW 1260 EL CEMENTERIO", location: "Caracas, Distrito Capital", type: "centro de acopio" },
  { name: "MRW 1250 EL HATILLO", location: "El Hatillo, Miranda", type: "centro de acopio" },
  { name: "Cáritas Barquisimeto", location: "Barquisimeto, Lara", type: "centro de acopio" },
  { name: "Plaza de Puerto Príncipe", location: "Puerto Píritu, Anzoátegui", type: "centro de acopio" },
  { name: "Centro de Acopio por Venezuela - Madrid", location: "Madrid, España", type: "centro de acopio" },
  { name: "Bomberos Guacara", location: "Guacara, Carabobo", type: "centro de acopio" },
  { name: "CC Forum Plaza - Lechería", location: "Lechería, Anzoátegui", type: "centro de acopio" },
  { name: "Metalmecanica del centro II, C.A", location: "Valencia, Carabobo", type: "centro de acopio" },
  { name: "Fitness Factory West", location: "Barquisimeto, Lara", type: "centro de acopio" },
  { name: "Fitness Factory Cabudare", location: "Cabudare, Lara", type: "centro de acopio" },
  { name: "Ecocamping / Protección Civil Maturín", location: "Maturín, Monagas", type: "centro de acopio" },
  { name: "Base de Operaciones Tu Gruero", location: "Caracas, Distrito Capital", type: "centro de acopio" },
  { name: "JCI Carabobo - Beval C.A.", location: "Valencia, Carabobo", type: "centro de acopio" },
  { name: "JCI Carabobo - CC Doña Rosa (Aire Valencia)", location: "Valencia, Carabobo", type: "centro de acopio" },
  // Puntos de ayuda
  { name: "Res. Los Corsarios, Playa Grande, cerca del hotel Marriott", location: "Maiquetía, La Guaira", type: "punto de ayuda" },
  { name: "Residencias Los monjes, calle 3, Catia la Mar 1112", location: "Catia La Mar, La Guaira", type: "punto de ayuda" },
  { name: "Oasis Beach", location: "Maiquetía, La Guaira", type: "punto de ayuda" },
  { name: "La Mar Suites, Tucacas, Carabobo", location: "Tucacas, Falcón", type: "punto de ayuda" },
  { name: "Palma Sola, Morón, Centro de Morón", location: "Morón, Carabobo", type: "punto de ayuda" },
  { name: "Apartamentos Club Bahía Mar", location: "Caraballeda, La Guaira", type: "punto de ayuda" },
  { name: "Edificio Cambural", location: "Catia La Mar, La Guaira", type: "punto de ayuda" },
  { name: "Conjunto Residencial Belo Horizonte", location: "Catia La Mar, La Guaira", type: "punto de ayuda" },
  { name: "Hotel Eduard", location: "Maiquetía, La Guaira", type: "punto de ayuda" },
  { name: "Hotel Chipi", location: "Catia La Mar, La Guaira", type: "punto de ayuda" },
  { name: "Edificio frente a Altamira Suites", location: "Caracas, Distrito Capital", type: "punto de ayuda" },
  { name: "Conjunto Bosque Lindo", location: "Turmero, Aragua", type: "punto de ayuda" },
  { name: "Hotel La Mar Suites", location: "Tucacas, Falcón", type: "punto de ayuda" },
  { name: "Universidad Marítima del Caribe", location: "Catia La Mar, La Guaira", type: "punto de ayuda" },
  { name: "Academia Militar de la Armada Bolivariana", location: "Catia La Mar, La Guaira", type: "punto de ayuda" },
  { name: "Edificio San Judas Tadeo", location: "Caracas, Distrito Capital", type: "punto de ayuda" },
  { name: "Edificio Tahiti", location: "Caraballeda, La Guaira", type: "punto de ayuda" },
  { name: "Hotel La Gabarra del Caribe", location: "Caraballeda, La Guaira", type: "punto de ayuda" },
  { name: "Residencias Mar de Leva", location: "Caraballeda, La Guaira", type: "punto de ayuda" },
  { name: "Residencias Vista al Mar", location: "Caraballeda, La Guaira", type: "punto de ayuda" },
  { name: "Hospital José Gregorio Hernandez", location: "Caracas, Distrito Capital", type: "punto de ayuda" },
  { name: "Iglesia San Bernardino de Siena", location: "Caracas, Distrito Capital", type: "punto de ayuda" },
];

export async function getMergedShelters(): Promise<Shelter[]> {
  try {
    // Ejemplo de fetch a una API externa
    const response = await fetch('https://api.tu-fuente-de-datos.com/lugares');
    const externalPlaces: Shelter[] = await response.json();

    const normalize = (str: string) => str.toLowerCase().trim();

    // Filtramos duplicados comparando nombre y tipo
    const merged = [...LOCAL_SHELTERS];

    externalPlaces.forEach(ext => {
      const isDuplicate = merged.some(
        local => normalize(local.name) === normalize(ext.name) && local.type === ext.type
      );

      if (!isDuplicate) {
        merged.push(ext);
      }
    });

    return merged;
  } catch (error) {
    console.error("Error obteniendo datos externos, retornando locales:", error);
    return LOCAL_SHELTERS;
  }
}