"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/",            label: "Inicio" },
  { href: "/Mobiliario",  label: "Mobiliario" },
  { href: "/Calculadora", label: "Calculadora" },
  { href: "/catalogo",    label: "Catálogo" },
  { href: "/MoviAula",    label: "MoviAula" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-zinc-200 px-6 py-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-3xl font-black text-blue-600 tracking-tighter">
          MM<span className="text-orange-500">.</span>
        </Link>

        {/* Hamburguesa móvil */}
        <button
          className="md:hidden text-zinc-600 p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links escritorio */}
        <div className="hidden md:flex gap-2 font-semibold text-zinc-600 items-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          
          {/* SOLUCIÓN 1: Se agregó el <a inicial y se cerró con > */}
          <a
            href="https://wa.me/595982451828?text=Hola,%20vengo%20de%20la%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors"
          >
            📱 WhatsApp
          </a>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-1 bg-white border-t border-zinc-100 pt-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg font-semibold text-zinc-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          
          {/* SOLUCIÓN 2: Se agregó el <a inicial y se cerró con > */}
          <a
            href="https://wa.me/595982451828?text=Hola,%20vengo%20de%20la%20web"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mx-4 mt-2 mb-1 bg-[#25D366] text-white px-4 py-3 rounded-lg font-bold text-center hover:bg-green-600 transition-colors"
          >
            📱 Contactar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
