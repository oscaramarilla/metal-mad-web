"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/",            label: "Inicio" },
  { href: "/Mobiliario",  label: "Mobiliario" },
  { href: "/catalogo",    label: "Catálogo" },
  { href: "/MoviAula",    label: "MoviAula" },
  { href: "/blog",        label: "Blog" },
  { href: "/Nosotros",    label: "Nosotros" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-zinc-200 px-6 py-4 sticky top-0 z-40 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Corporativo */}
        <Link href="/" className="text-3xl font-black text-blue-600 tracking-tighter flex items-center">
          MM<span className="text-orange-500">.</span>
          <span className="hidden sm:inline text-xs ml-2 text-zinc-400 font-bold uppercase tracking-widest border-l pl-2 border-zinc-200">
            Metal Mad
          </span>
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

        {/* Menú Escritorio */}
        <div className="hidden md:flex gap-1 font-semibold text-zinc-600 items-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors text-sm lg:text-base"
            >
              {l.label}
            </Link>
          ))}
          
          {/* BOTÓN MAESTRO: COTIZADOR DUAL */}
          <Link
            href="/cotizador"
            className="ml-4 bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-black text-sm hover:bg-yellow-500 transition-all shadow-md hover:scale-105"
          >
            📊 Cotizador 2026
          </Link>

          <a
            href="https://wa.me/595982451828?text=Hola,%20vengo%20de%20la%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-[#25D366] text-white p-2 rounded-full hover:bg-green-600 transition-colors shadow-sm"
            title="Contactar por WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.165 1.237 8.407 3.483 2.245 2.244 3.481 5.232 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.001 0-3.963-.505-5.698-1.467l-6.291 1.688zm5.918-4.505c1.616.96 3.204 1.488 4.912 1.488 5.485 0 9.948-4.463 9.948-9.948 0-2.652-1.033-5.147-2.908-7.022-1.875-1.875-4.37-2.907-7.04-2.907-5.485 0-9.948 4.463-9.948 9.948 0 1.944.57 3.657 1.651 5.204l-.999 3.647 3.734-.96zm11.367-7.312c-.301-.15-1.781-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775 1.012-.95 1.212-.175.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.777-1.659-2.077-.175-.3-.018-.462.13-.611.134-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.492-.507-.675-.516-.174-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.23 5.125 4.535.716.311 1.275.498 1.708.636.72.23 1.375.196 1.892.119.576-.087 1.781-.727 2.031-1.429.25-.701.25-1.3.175-1.429-.075-.13-.275-.205-.575-.355z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-1 bg-white border-t border-zinc-100 pt-3">
          <Link
             href="/cotizador"
             onClick={() => setOpen(false)}
             className="mx-4 mb-3 bg-yellow-400 text-blue-900 px-4 py-4 rounded-xl font-black text-center shadow-lg"
          >
            📊 Cotizador 2026 (Proyectos y Plásticos)
          </Link>
          
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
          
          <a
            href="https://wa.me/595982451828?text=Hola,%20vengo%20de%20la%20web"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mx-4 mt-2 mb-4 bg-[#25D366] text-white px-4 py-3 rounded-lg font-bold text-center hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <span>📱 Contactar por WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}
