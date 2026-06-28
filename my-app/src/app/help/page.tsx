export default function HelpPage() {
  const psychologicalSupport = [
    {
      organization: "Grupo Social CESAP - UNIANDES",
      phones: ["0416-6119284", "0412-2668716", "0416-6119283", "0424-7481889", "0414-7513969", "0424-1350179"],
      schedule: "8:00am a 5:00pm"
    },
    {
      organization: "PsicoLínea",
      phones: ["0414-1217882", "0424-1723981"],
      schedule: "8:00am a 5:00pm"
    },
    {
      organization: "Tinta Violeta",
      phones: ["0412-6924062", "0412-6924073"],
      schedule: "Atención remota"
    },
    {
      organization: "Federación de Psicólogos de Venezuela",
      phones: ["0212-4163116", "0212-41631118", "0424-2907338"],
      schedule: ""
    },
    {
      organization: "Psicólogos Sin Fronteras",
      phones: ["0412-9270304", "0414-7225080"],
      schedule: ""
    },
    {
      organization: "ODISEF",
      phones: ["0422-0209179"],
      schedule: ""
    },
    {
      organization: "FUNDANA",
      phones: ["0422-1257897", "0424-2643825", "0414-1553540", "0412-3529560", "0424-2381669", "0412-3211028", "0412-3135556", "0414-2891425", "0416-9012751", "0412-9046710", "0412-8211400", "0414-9203585", "0424-2517618"],
      schedule: "Apoyo y gestoría"
    },
  ];

  const shelters = [
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

  return (
    <div className="flex flex-col flex-1 p-4 md:p-6 gap-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Ayuda</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">Aquí puedes encontrar información y recursos de ayuda.</p>
      </div>

      {/* Sección de Refugios */}
      <section>
        <h3 className="text-xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-4">Diversos espacios públicos e instituciones como refugios, centros de acopio y puntos de ayuda</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shelters.map((s, i) => (
            <div key={i} className="p-4 border rounded shadow-sm bg-white dark:bg-zinc-800">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{s.name}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full uppercase font-bold text-center inline-block min-w-22 truncate ${
                  s.type === 'refugio'
                    ? 'bg-blue-100 text-blue-700'
                    : s.type === 'centro de acopio'
                      ? 'bg-green-100 text-green-700'
                      : s.type === 'punto de ayuda'
                        ? 'bg-amber-100 text-amber-700' // Color para punto de ayuda
                        : 'bg-gray-100 text-gray-700'    // Color por defecto si no coincide ninguno
                }`}
                  title={s.type} // El title ayuda a ver el texto completo si se corta por el truncate
                >
                  {s.type}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{s.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Psicología */}
      <section>
        <h3 className="text-xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-4">Atención psicológica</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {psychologicalSupport.map((item, index) => (
            <div key={index} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">{item.organization}</h3>
              <p className="text-sm text-zinc-500 mb-4 font-medium">{item.schedule}</p>
              <div className="grid grid-cols-2 gap-2">
                {item.phones.map((phone, i) => (
                  <span key={i} className="text-xs bg-zinc-100 dark:bg-zinc-700 p-2 rounded text-center">
                    {phone}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}