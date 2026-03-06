"use client";

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <html lang="es">
      <body className="relative min-h-screen bg-zinc-50">

        {/* 🔵 MENÚ DE NAVEGACIÓN 🔵 */}
        <nav className="bg-white shadow-sm border-b border-zinc-200 px-6 py-4 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            
            {/* Logo a la izquierda */}
            <Link href="/ayc" className="text-3xl font-black text-blue-600 tracking-tighter">
              MM<span className="text-orange-500">.</span>
            </Link>

            {/* 📱 BOTÓN HAMBURGUESA (Solo visible en celulares) */}
            <button
              className="md:hidden text-zinc-600 p-2 focus:outline-none"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label="Abrir menú"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuAbierto ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* 💻 ENLACES VERSIÓN ESCRITORIO */}
            <div className="hidden md:flex gap-6 font-semibold text-zinc-600">
              <Link href="/ayc" className="hover:text-blue-600 transition-colors">Inicio</Link>
              <Link href="/Mobiliario" className="hover:text-blue-600 transition-colors">Mobiliario</Link>
              <Link href="/Calculadora" className="hover:text-blue-600 transition-colors">Calculadora</Link>
              <Link href="/catalogo" className="hover:text-blue-600 transition-colors">Catálogo</Link>
              <Link href="/MoviAula" className="hover:text-blue-600 transition-colors">MoviAula</Link>
            </div>
          </div>

          {/* 📱 MENÚ DESPLEGABLE VERSIÓN CELULAR */}
          {menuAbierto && (
            <div className="md:hidden mt-4 flex flex-col gap-4 font-semibold text-zinc-600 bg-white pb-4 border-t border-zinc-100 pt-4 shadow-lg absolute w-full left-0 px-6">
              <Link href="/ayc" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-blue-600">Inicio</Link>
              <Link href="/Mobiliario" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-blue-600">Mobiliario</Link>
              <Link href="/Calculadora" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-blue-600">Calculadora</Link>
              <Link href="/catalogo" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-blue-600">Catálogo</Link>
              <Link href="/MoviAula" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-blue-600">MoviAula</Link>
            </div>
          )}
        </nav>

        {/* Aquí se inyectan tus páginas */}
        <main className="max-w-7xl mx-auto">
          {children}
        </main>

        {/* 🟢 BOTÓN FLOTANTE DE WHATSAPP 🟢 */}
        <a
          href="https://wa.me/595982451828?text=Hola,%20vengo%20de%20la%20web%20y%20me%20gustaría%20más%20información."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>

      </body>
    </html>
  );
}
