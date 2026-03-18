"use client";

import React, { useState } from 'react';

export default function PagoSeguroFlotante() {
  // Estado para controlar si el panel de datos está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Contenedor principal con posicionamiento fijo
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 font-sans">
      
      {/* 2. El Panel de Datos Bancarios (Solo se muestra si isOpen es true) */}
      {isOpen && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-2xl w-[320px] md:w-[360px] transform transition-all duration-300 ease-out animate-fade-in-up">
          
          {/* Encabezado del panel */}
          <div className="flex items-center gap-3 mb-5 border-b border-zinc-800 pb-3">
            <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <h3 className="text-lg font-black text-white">Medios de Pago</h3>
          </div>

          {/* Información Bancaria (Formato Compacto) */}
          <div className="space-y-4 mb-4">
            
            {/* Titular y RUC Común */}
            <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Titular Oficial</p>
              <p className="text-sm font-medium text-white mb-1">Metal Mad E.A.S.</p>
              <p className="text-xs font-mono text-zinc-400">RUC 80135751-9</p>
            </div>

            {/* Cuenta UENO */}
            <div className="bg-blue-950/20 p-3 rounded-lg border border-blue-500/30">
              <p className="text-sm font-black text-blue-400 mb-1">🏦 Ueno Bank</p>
              <p className="text-xs text-zinc-300">Caja de Ahorro: <span className="font-mono text-white">20588348</span></p>
            </div>

            {/* Cuenta INTERFISA */}
            <div className="bg-orange-950/20 p-3 rounded-lg border border-orange-500/30">
              <p className="text-sm font-black text-orange-400 mb-1">🏦 Banco Interfisa</p>
              <p className="text-xs text-zinc-300">Caja de Ahorro: <span className="font-mono text-white">259080186</span></p>
            </div>

          </div>

          {/* Advertencia Legal */}
          <div className="bg-red-950/40 border border-red-500/50 p-3 rounded-xl flex items-start gap-2">
            <span className="text-lg">⚠️</span>
            <p className="text-xs text-red-200 leading-tight">
              Únicos medios oficiales. Solo transferencias a la cuenta de la empresa Metal Mad E.A.S.
            </p>
          </div>
        </div>
      )}

      {/* 1. El Botón Flotante (Siempre visible) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-5 py-3 rounded-full font-black text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 group 
          ${isOpen 
            ? 'bg-zinc-700 hover:bg-zinc-600' 
            : 'bg-green-600 hover:bg-green-500 shadow-[0_4px_15px_rgba(34,197,94,0.4)]'
          }`}
        aria-label="Información de pago seguro"
      >
        {/* Ícono de Escudo (SVG) */}
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
        
        {/* Texto del Botón (Cambia si está abierto) */}
        <span className="text-sm lg:text-base">
          {isOpen ? 'Cerrar' : 'Pago Seguro'}
        </span>
      </button>

      {/* Estilo para la animación de entrada (Solo para el panel) */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.4s ease-out; }
      `}</style>
    </div>
  );
}
