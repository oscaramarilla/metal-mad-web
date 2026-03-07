"use client"; // Enciende el "cerebro" interactivo

import { useState } from "react";

export default function MoviAulaPage() {
  const [cantidad, setCantidad] = useState(30);
  const [tipo, setTipo] = useState(250000);
  const [mesaProfesor, setMesaProfesor] = useState(false);

  const precioMesaProfesor = 850000;
  const totalPupitres = cantidad * tipo;
  const totalFinal = totalPupitres + (mesaProfesor ? precioMesaProfesor : 0);

  const nombreTipo = tipo === 250000 ? "Estándar Bipersonal" : "Universitario Reforzado";
  const textoWhatsApp = `Hola MetalMad! Usé la calculadora MoviAula. Necesito equipar un aula con ${cantidad} pupitres modelo ${nombreTipo}${mesaProfesor ? ' y 1 Mesa para Profesor' : ''}. El estimado dio Gs. ${totalFinal.toLocaleString('es-PY')}. Solicito presupuesto oficial.`;
  const linkWhatsApp = `https://wa.me/595982451828?text=${encodeURIComponent(textoWhatsApp)}`;

  return (
    <div className="flex flex-col items-center font-sans w-full bg-zinc-100 min-h-screen text-zinc-900 pb-20">
      
      {/* 1. CABECERA: El concepto MoviAula */}
      <header className="w-full max-w-4xl px-6 pt-12 lg:pt-20 pb-12 text-center">
        <span className="text-sm font-bold tracking-wider text-red-600 uppercase mb-4 block">
          Innovación Educativa
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-blue-800 mb-6">
          MoviAula: Calcula tu Aula del Futuro
        </h1>
        <p className="text-lg sm:text-xl leading-8 text-zinc-700 max-w-3xl mx-auto">
          La educación cambió. Diseñamos espacios colaborativos y ergonómicos. Usa nuestra herramienta para estimar la inversión de tu próxima aula inteligente.
        </p>
      </header>

      {/* 2. LA CALCULADORA */}
      <main className="w-full max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Panel de Controles */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-zinc-200 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-zinc-900 border-b pb-4">Configura tu Espacio</h2>
          
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-zinc-700">1. ¿Para cuántos alumnos es el aula?</label>
            <div className="flex items-center gap-4">
              <input 
                type="range" min="10" max="100" step="5"
                value={cantidad} 
                onChange={(e) => setCantidad(Number(e.target.value))}
                className="w-full cursor-pointer accent-blue-700"
              />
              <span className="font-bold text-xl text-blue-800 w-16 text-center bg-blue-50 py-1 rounded-lg">
                {cantidad}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <label className="font-semibold text-zinc-700">2. Selecciona el mobiliario:</label>
            <label className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${tipo === 250000 ? 'border-blue-600 bg-blue-50' : 'border-zinc-200'}`}>
              <div className="flex items-center gap-3">
                <input type="radio" name="tipo" value={250000} checked={tipo === 250000} onChange={() => setTipo(250000)} className="w-5 h-5 accent-blue-600" />
                <div>
                  <div className="font-bold text-zinc-900">Pupitre Estándar</div>
                  <div className="text-sm text-zinc-500">Estructura metálica, tapa de MDF.</div>
                </div>
              </div>
            </label>
            <label className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${tipo === 350000 ? 'border-blue-600 bg-blue-50' : 'border-zinc-200'}`}>
              <div className="flex items-center gap-3">
                <input type="radio" name="tipo" value={350000} checked={tipo === 350000} onChange={() => setTipo(350000)} className="w-5 h-5 accent-blue-600" />
                <div>
                  <div className="font-bold text-zinc-900">Universitario Reforzado</div>
                  <div className="text-sm text-zinc-500">Súper resistente al uso intenso.</div>
                </div>
              </div>
            </label>
          </div>

          <div className="flex flex-col gap-2 mt-2 border-t pt-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={mesaProfesor} 
                onChange={(e) => setMesaProfesor(e.target.checked)}
                className="w-5 h-5 accent-blue-600 rounded"
              />
              <span className="font-semibold text-zinc-700">Incluir 1 Mesa y Silla para Profesor</span>
            </label>
          </div>
        </div>

        {/* Panel de Resultado (Ticket) */}
        <div className="bg-blue-900 p-8 rounded-2xl shadow-xl text-white sticky top-10">
          <h2 className="text-2xl font-bold mb-6 text-blue-100">Presupuesto Estimado</h2>
          
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex justify-between items-center border-b border-blue-800 pb-2">
              <span className="text-blue-200">{cantidad}x Pupitres</span>
              <span className="font-semibold">Gs. {totalPupitres.toLocaleString('es-PY')}</span>
            </div>
            {mesaProfesor && (
              <div className="flex justify-between items-center border-b border-blue-800 pb-2">
                <span className="text-blue-200">1x Conjunto Docente</span>
                <span className="font-semibold">Gs. {precioMesaProfesor.toLocaleString('es-PY')}</span>
              </div>
            )}
          </div>

          <div className="bg-blue-950 p-4 rounded-xl mb-6 text-center">
            <div className="text-blue-300 text-sm mb-1">Inversión Total Estimada</div>
            <div className="text-4xl font-extrabold text-yellow-400">
              Gs. {totalFinal.toLocaleString('es-PY')}
            </div>
          </div>

          <a 
            href={linkWhatsApp} target="_blank" rel="noopener noreferrer"
            className="block w-full rounded-lg bg-yellow-400 px-6 py-4 text-center font-bold text-blue-900 shadow-md transition-transform hover:bg-yellow-500 hover:scale-105"
          >
            Enviar este cálculo por WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
