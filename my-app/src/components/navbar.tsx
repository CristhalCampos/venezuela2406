"use client";

import { useState } from "react";
import { Menu, X, Search, BarChart, HelpCircle, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full h-20 px-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-600 relative">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Venezuela2406
        </span>
      </div>

      {/* Menú Desktop */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-blue-600">
            <Search size={20} />
            Busqueda
          </Link>
        </li>
        <li>
          <Link href="/statistics" className="flex items-center gap-2 text-zinc-500 hover:text-blue-600">
            <BarChart size={20} />
            Estadísticas
          </Link>
        </li>
        <li>
          <Link href="/help" className="flex items-center gap-2 text-zinc-500 hover:text-blue-600">
            <HelpCircle size={20} />
            Ayuda
          </Link>
        </li>
        <li>
          <Link href="/report" className="flex items-center gap-2 text-zinc-300 bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
            <Plus size={20} />
            Reportar
          </Link>
        </li>
      </ul>

      {/* Botón Hamburguesa */}
      <button
        className="md:hidden text-zinc-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-zinc-800 border-b border-zinc-200 md:hidden p-4 flex flex-col space-y-4 shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Search size={20} className="inline-block mr-2" />
            Busqueda
          </Link>
          <Link href="/analytics" onClick={() => setIsOpen(false)}>
            <BarChart size={20} className="inline-block mr-2" />
            Estadísticas
          </Link>
          <Link href="/help" onClick={() => setIsOpen(false)}>
            <HelpCircle size={20} className="inline-block mr-2" />
            Ayuda
          </Link>
          <Link href="/report" onClick={() => setIsOpen(false)}>
            <Plus size={20} className="inline-block mr-2" />
            Reportar
          </Link>
        </div>
      )}
    </nav>
  );
}