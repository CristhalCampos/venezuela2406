"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, Loader2 } from "lucide-react";
import { searchPerson, Person } from "@/services/personService";
import { PersonCard } from "@/components/personCard";
import { SearchSources } from "@/components/searchSources";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Person[]>([]);
  const [hospitals, setHospitals] = useState<string[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  // 1. Cargar lista de hospitales (solo una vez)
  useEffect(() => {
    fetch('https://911.ubica.me/public/data/hospitales.json')
      .then(res => res.json())
      .then(data => {
        const hospitalRegex = /^hospital/i;
        const names = Array.from(new Set(
          data.filter((i: any) => hospitalRegex.test(i.last_known_location))
              .map((i: any) => i.last_known_location)
        )) as string[];
        setHospitals(names.sort());
      });
  }, []);
  
  // 2. Lógica de carga (Paginada o Filtrada)
  const loadData = useCallback(async (isNewSearch: boolean = false) => {
    if (selectedHospital) {
      // Si hay hospital, traemos todo (sin paginación compleja)
      setLoading(true);
      const res = await fetch('https://911.ubica.me/public/data/hospitales.json');
      const data = await res.json();
      const filtered = data
        .filter((i: any) => i.last_known_location === selectedHospital)
        .map((i: any) => ({
          id: i.id || Math.random(),
          full_name: i.full_name,
          id_number: i.id_number || "N/A",
          age: i.age || 0,
          sex: 'M',
          status: 'encontrado',
          current_location: i.last_known_location,
          date: i.source_date,
          reported_by: "ubica.me"
        }));
      setResults(filtered);
      setHasMore(false); // Desactivamos paginación en filtro
      setLoading(false);
    } else {
      // Búsqueda paginada normal
      if (isNewSearch) setLoading(true);
      else setIsFetchingMore(true);

      const data = await searchPerson(query, isNewSearch ? 0 : page);
      setResults(prev => isNewSearch ? data : [...prev, ...data]);
      setHasMore(data.length === 10);
      setLoading(false);
      setIsFetchingMore(false);
    }
  }, [query, page, selectedHospital]);

  // Efectos de búsqueda y paginación
  useEffect(() => {
    if (selectedHospital) {
      loadData(true);
    } else {
      const delay = setTimeout(() => { setPage(0); loadData(true); }, 500);
      return () => clearTimeout(delay);
    }
  }, [query, selectedHospital]);

  useEffect(() => {
    if (page > 0 && !selectedHospital) loadData(false);
  }, [page]);

  // Referencia para el scroll infinito
  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) setPage(prev => prev + 1);
    });
    if (node) observer.current.observe(node);
  }, [hasMore]);

  const externalSites = [
    { name: "Venezuela te busca", url: "https://venezuelatebusca.com" },
    { name: "Desaparecidos Terremoto Venezuela", url: "https://desaparecidosterremotovenezuela.com" },
    { name: "Encuéntralos", url: "https://encuentralos.tecnosoft.dev" },
    { name: "Red de emergencia", url: "https://redayudavenezuela.com" },
    { name: "venezuelareporta...", url: "https://venezuelareporta.org/buscar" },
    { name: "terremotovenezuela.app", url: "https://terremotovenezuela.app/#desaparecidas" },
    { name: "Centro Nacional de Localización de Personas", url: "https://localizapacientes.com" },
    { name: "Localizados VE", url: "https://localizadosvenezuela.com" },
  ];
  const telegramBots = [
    { name: "Personas encontradas VE", url: "https://t.me/encontrados_ve_bot" },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full p-4 md:p-6 gap-8">
      <SearchSources externalSites={externalSites} telegramBots={telegramBots} />

      <section className="flex-1 w-full">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Búsqueda centralizada
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 mb-6">
            Selecciona un hospital
          </p>
          <div className="flex flex-wrap gap-2 mb-6 pb-2">
            <button
              onClick={() => setSelectedHospital(null)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                !selectedHospital ? 'bg-blue-600 text-white' : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-600'
              }`}
            >
              Todos
            </button>
            
            {hospitals.map(h => (
              <button
                key={h}
                onClick={() => setSelectedHospital(h)}
                className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
                  selectedHospital === h
                    ? 'bg-green-800 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-green-500'
                }`}
              >
                {h}
              </button>
            ))}
          </div>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 mb-6">
            Ó ingresa el nombre, apellido o CI de la persona para buscar en nuestras fuentes.
          </p>

          <div className="relative flex items-center">
            <Search className="absolute left-3 text-blue-600" size={20} />
            <input
              type="text"
              placeholder="Ej: Juan Pérez..."
              className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg outline-none transition-all
                ${!!selectedHospital
                  ? 'bg-zinc-200 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 opacity-50 cursor-not-allowed'
                  : 'bg-zinc-300 dark:bg-zinc-800 border-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                }`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={!!selectedHospital}
            />
          </div>

          <div className="mt-6">
            {loading && (
              <div className="flex justify-center p-10">
                <Loader2 className="animate-spin text-blue-600" size={32} />
              </div>
            )}

            {!loading && results.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {results.map((p, i) => (
                  <div key={p.id} ref={i === results.length - 1 ? lastElementRef : null}>
                    <PersonCard person={p} />
                  </div>
                ))}
              </div>
            )}

            {isFetchingMore && (
              <p className="text-center mt-4 text-blue-500 flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" /> Cargando más...
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
