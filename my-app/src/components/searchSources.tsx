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

export function SearchSources({ externalSites, telegramBots }: SearchSourcesProps) {
  return (
    <aside className="w-full lg:w-96 flex flex-col gap-3">
      <h2 className="font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-2 border-b-2 border-yellow-400 pb-1">
        Fuentes de búsqueda
      </h2>

      {/* Renderizado de Sitios Web */}
      <SourceSection title="Sitios Web" items={externalSites} />

      {/* Renderizado de Bots de Telegram */}
      <SourceSection title="Bots de Telegram" items={telegramBots} />
    </aside>
  );
}

// Sub-componente interno para no repetir código de los Links
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