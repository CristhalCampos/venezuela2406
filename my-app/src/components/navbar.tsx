"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Activity, HelpCircle, Plus, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Busqueda", href: "/", icon: Search },
    // { name: "Estadísticas", href: "/statistics", icon: BarChart },
    { name: "Ayuda", href: "/help", icon: HelpCircle },
    { name: "Sismos", href: "/earthquakes", icon: Activity },
  ];

  return (
    <nav className="flex items-center justify-between w-full h-20 px-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-600 relative">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full" />
        <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Venezuela2406</span>
      </div>

      {/* Menú Desktop */}
      <ul className="hidden md:flex items-center space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="flex items-center gap-2 text-zinc-500 hover:text-blue-600">
              <link.icon size={20} />
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/map" className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition-colors">
            <Plus size={20} /> Mapa
          </Link>
        </li>
      </ul>

      {/* Menú Móvil */}
      <button className="md:hidden text-zinc-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-zinc-800 border-b border-zinc-200 md:hidden p-4 flex flex-col space-y-4 shadow-lg z-50">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <link.icon size={20} /> {link.name}
            </Link>
          ))}
          <Link href="/map" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-white bg-red-600 px-3 py-2 rounded">
            <Plus size={20} /> Mapa
          </Link>
        </div>
      )}
    </nav>
  );
}