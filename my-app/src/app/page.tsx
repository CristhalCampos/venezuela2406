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
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadData = useCallback(async (isNewSearch: boolean = false) => {
    if (isNewSearch) setLoading(true);
    else setIsFetchingMore(true); // Solo activamos este si es paginación

    try {
      const currentPage = isNewSearch ? 0 : page;
      const data = await searchPerson(query, currentPage);
      
      setResults(prev => isNewSearch ? data : [...prev, ...data]);
      setHasMore(data.length === 10);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  }, [query, page]);

  // Efecto para búsqueda
  useEffect(() => {
    const delay = setTimeout(() => {
      setPage(0);
      loadData(true);
    }, 500);
    return () => clearTimeout(delay);
  }, [query]);

  // Efecto para paginación (cuando cambia la página)
  useEffect(() => {
    if (page > 0) loadData(false);
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
    <div className="flex flex-col md:flex-row w-full p-4 md:p-6 gap-8">
      <SearchSources externalSites={externalSites} telegramBots={telegramBots} />

      <section className="flex-1 w-full">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Búsqueda centralizada
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 mb-6">
            Ingresa el nombre, apellido o lugar de residencia de la persona para buscar en nuestra fuente.
          </p>

          <div className="relative flex items-center">
            <Search className="absolute left-3 text-blue-600" size={20} />
            <input
              type="text"
              placeholder="Ej: Juan Pérez..."
              className="w-full pl-10 pr-4 py-3 border-2 border-zinc-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-zinc-800"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="mt-6">
            {loading && (
              <div className="flex justify-center p-10">
                <Loader2 className="animate-spin text-blue-600" size={32} />
              </div>
            )}

            {!loading && results.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
