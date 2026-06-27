"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [query, setQuery] = useState("");
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
    <div className="flex flex-col flex-1 items-center justify-center p-4 md:p-6 gap-4">
      <h2 className="font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-2 border-b-2 border-yellow-400 pb-1">
        Fuentes de búsqueda
      </h2>

      <div className="flex flex-col items-center gap-1">
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mt-2 mb-2">Sitios Web</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {externalSites.map((site) => (
            <Link
              key={site.url}
              href={site.url}
              target="_blank"
              className="flex items-center justify-between py-6 px-3 gap-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-zinc-700 transition-colors border-l-3 border-blue-500"
            >
              {site.name}
              <ExternalLink size={16} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-2">Bots de Telegram</h3>
        {telegramBots.map((bot) => (
          <Link
            key={bot.url}
            href={bot.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-6 px-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors border-l-3 border-blue-500"
          >
            {bot.name}
            <ExternalLink size={16} className="text-zinc-500 ml-10" />
          </Link>
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-64px)] p-4 md:p-6 gap-8">
  //     {/* Fuentes */}
  //     <aside className="w-full md:w-96 flex flex-col gap-3">
  //       <h2 className="font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-2 border-b-2 border-yellow-400 pb-1">
  //         Fuentes de búsqueda
  //       </h2>

  //       <div className="flex flex-col gap-1">
  //         <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mt-2 mb-2">Sitios Web</h3>
  //         {externalSites.map((site) => (
  //           <Link
  //             key={site.url}
  //             href={site.url}
  //             target="_blank"
  //             className="flex items-center justify-between p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors border-l-3 border-blue-500"
  //           >
  //             {site.name}
  //             <ExternalLink size={16} />
  //           </Link>
  //         ))}
  //       </div>

  //       <div className="flex flex-col gap-1">
  //         <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-2">Bots de Telegram</h3>
  //         {telegramBots.map((bot) => (
  //           <Link
  //             key={bot.url}
  //             href={bot.url}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="flex items-center justify-between p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors border-l-3 border-blue-500"
  //           >
  //             {bot.name}
  //             <ExternalLink size={16} className="text-zinc-500" />
  //           </Link>
  //         ))}
  //       </div>
  //     </aside>

  //     {/* Sección de busqueda */}
  //     <section className="flex-1">
  //       <div className="max-w-2xl">
  //         <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
  //           Búsqueda centralizada
  //         </h1>
  //         <p className="mt-2 text-zinc-600 dark:text-zinc-400 mb-6">
  //           Ingresa el nombre, apellido o lugar de residencia de la persona para buscar en nuestra fuente.
  //         </p>

  //         <div className="relative flex items-center">
  //           <Search className="absolute left-3 text-blue-600" size={20} />
  //           <input
  //             type="text"
  //             placeholder="Ej: Juan Pérez..."
  //             className="w-full pl-10 pr-4 py-3 border-2 border-zinc-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all dark:bg-zinc-800"
  //             value={query}
  //             onChange={(e) => setQuery(e.target.value)}
  //           />
  //         </div>

  //         <div className="mt-6 p-6 border-2 border-dashed border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-lg text-center text-zinc-600 dark:text-zinc-400">
  //           Los resultados aparecerán aquí próximamente.
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
}
