"use client";

import React, { useState } from 'react';

// 🛠️ SUB-COMPONENTE DE CTO: Fila Copiable (Tap-to-Copy)
const FilaCopiable = ({ etiqueta, valor, esMono = true }: { etiqueta: string, valor: string, esMono?: boolean }) => {
  const [copiado, setCopiado] = useState(false);

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(valor);
    setCopiado(true);
    // Vuelve al ícono normal después de 2 segundos
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div 
      onClick={copiarAlPortapapeles}
      className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-1.5 -mx-1.5 rounded-md transition-colors"
      title="Haz clic para copiar"
    >
      <p className="text-sm text-zinc-300">
        {etiqueta}: <span className={`${esMono ? 'font-mono' : 'font-medium'} text-white`}>{valor}</span>
      </p>
      
      {/* Botón de Feedback Visual */}
      <button className="flex-shrink-0 ml-2 focus:outline-none">
        {copiado ? (
          <span className="text-green-400 text-xs font-bold flex items-center gap-1 animate-pulse">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Copiado
          </span>
        ) : (
          <svg className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};


export default function PagoSeguroFlotante() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 font-sans">
      
      {isOpen && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-2xl w-[320px] md:w-[360px] transform transition-all duration-300 ease-out animate-fade-in-up">
          
          <div className="flex items-center gap-3 mb-5 border-b border-zinc-800 pb-3">
            <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <h3 className="text-lg font-black text-white">Medios de Pago</h3>
          </div>

          <div className="space-y-4 mb-4">
            
            {/* Datos Generales con Función de Copiar */}
            <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">Datos Facturación</p>
              <FilaCopiable etiqueta="Titular" valor="Metal Mad E.A.S." esMono={false} />
              <FilaCopiable etiqueta="RUC" valor="80135751-9" />
            </div>

            {/* Banco Ueno */}
            <div className="bg-blue-950/20 p-3 rounded-lg border border-blue-500/30">
              <p className="text-sm font-black text-blue-400 mb-2">🏦 Ueno Bank</p>
              <FilaCopiable etiqueta="Cta. Ahorro" valor="20588348" />
            </div>

            {/* Banco Interfisa */}
            <div className="bg-orange-950/20 p-3 rounded-lg border border-orange-500/30">
              <p className="text-sm font-black text-orange-400 mb-2">🏦 Banco Interfisa</p>
              <FilaCopiable etiqueta="Cta. Ahorro" valor="259080186" />
            </div>

          </div>

          <div className="bg-red-950/40 border border-red-500/50 p-3 rounded-xl flex items-start gap-2">
            <span className="text-lg">⚠️</span>
            <p className="text-xs text-red-200 leading-tight">
              Toca cualquier dato para copiarlo. Únicos medios oficiales autorizados.
            </p>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-5 py-3 rounded-full font-black text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 group 
          ${isOpen 
            ? 'bg-zinc-700 hover:bg-zinc-600' 
            : 'bg-green-600 hover:bg-green-500 shadow-[0_4px_15px_rgba(34,197,94,0.4)]'
          }`}
        aria-label="Información de pago seguro"
      >
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
        <span className="text-sm lg:text-base">
          {isOpen ? 'Cerrar' : 'Pago Seguro'}
        </span>
      </button>

      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.3s ease-out; }
      `}</style>
    </div>
  );
}
