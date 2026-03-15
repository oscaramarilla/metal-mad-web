"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 🧠 Base de datos de tus enlaces. ¡Catálogo y Nosotros han vuelto!
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Mobiliario", href: "/Mobiliario" },
    { name: "Catálogo", href: "/catalogo" }, // <-- Recuperado
    { name: "MoviAula", href: "/MoviAula" },
    { name: "Cotizador Rápido", href: "/cotizador" },
    { name: "Blog", href: "/blog" },
    { name: "Nosotros", href: "/Nosotros" }, // <-- Recuperado
    { name: "Impacto Social", href: "/impacto-social", special: true },
  ];

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
         {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
              {/* Aquí le damos la orden de colgar el cuadro de tu depósito */}
              <Image 
                src="/icon.webp" 
                alt="Logo Metal Mad" 
                width={50} 
                height={50} 
                className="w-12 h-12 object-contain"
                priority
              />
              <span className="text-xl font-black text-blue-900 tracking-tighter hidden sm:block">
                METAL MAD
              </span>
            </Link>
          </div> 

          {/* Menú para Computadoras (Desktop) */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm lg:text-base font-bold transition-colors ${
                  pathname === link.href ? "text-blue-600" : "text-zinc-600 hover:text-blue-600"
                } ${link.special ? "text-red-600 hover:text-red-700" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/MoviAula"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-full transition-transform hover:scale-105 flex items-center gap-2 shadow-sm text-sm lg:text-base"
            >
              <span>🧮</span> Cotizador
            </Link>
          </div>

          {/* Botón "Hamburguesa" para Celulares (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Abrir menú"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable para Celulares (Con Scroll automático si es muy largo) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 shadow-2xl absolute w-full max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                className={`block px-4 py-3 rounded-xl text-lg font-bold ${
                  pathname === link.href ? "bg-blue-50 text-blue-600" : "text-zinc-600 hover:bg-zinc-50"
                } ${link.special ? "text-red-600" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-2">
              <Link
                href="/MoviAula"
                onClick={() => setIsOpen(false)}
                className="flex justify-center w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-4 rounded-xl shadow-md text-center text-lg"
              >
                🧮 Ir al Cotizador
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

