"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface SearchLink {
  name: string;
  url: string;
}

interface SearchSourcesProps {
  externalSites: SearchLink[];
  telegramBots: SearchLink[];
}

export default function SourcesPage() {
  const externalSites = [
    { name: "Venezuela te busca", url: "https://venezuelatebusca.com" },
    { name: "Desaparecidos Terremoto Venezuela", url: "https://desaparecidosterremotovenezuela.com" },
    { name: "Encuéntralos", url: "https://encuentralos.tecnosoft.dev" },
    { name: "Red de emergencia", url: "https://redayudavenezuela.com" },
    { name: "venezuelareporta...", url: "https://venezuelareporta.org/buscar" },
    { name: "UBICA.ME - VENEZUELA UNIDA", url: "https://911.ubica.me/" },
    { name: "terremotovenezuela.app", url: "https://terremotovenezuela.app/#desaparecidas" },
    { name: "Centro Nacional de Localización de Personas", url: "https://localizapacientes.com" },
    { name: "Localizados VE", url: "https://localizadosvenezuela.com" },
    { name: "Registro de Rescatados", url: "https://rescatadosvzla.com/" },
  ];

  const telegramBots = [
    { name: "Personas encontradas VE", url: "https://t.me/encontrados_ve_bot" },
    { name: "PALMédico AI", url: "https://t.me/Palmedicoai_bot" },
  ];

  const whatsappBots = [
    { name: "FlowBot", url: "https://wa.me/17826234061" },
    { name: "Encuentrame VE", url: "https://wa.me/19542871519" },
  ];
  
  return (
    <div className="flex flex-col p-4 md:p-6 gap-8">
      <section className="w-full flex flex-col items-center gap-3">
        <h2 className="font-bold text-3xl text-zinc-900 dark:text-zinc-100 mb-2 pb-1">
          Fuentes de búsqueda
        </h2>
        <div className="w-2/3">
          {/* Renderizado de Sitios Web */}
          <SourceSection title="Sitios Web" items={externalSites} />
          {/* Renderizado de Bots de Telegram */}
          <SourceSection title="Bots de Telegram" items={telegramBots} />
          {/* Renderizado de Bots de Whatsapp */}
          <SourceSection title="Bots de Whatsapp" items={whatsappBots} />
        </div>
      </section>
    </div>
  );
}

function SourceSection({ title, items }: { title: string; items: SearchLink[] }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-2">{title}</h3>
      {items.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors border-l-3 border-blue-500"
        >
          {item.name}
          <ExternalLink size={16} />
        </Link>
      ))}
    </div>
  );
}