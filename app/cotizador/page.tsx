"use client";

import { useState } from "react";

export default function CotizadorVolumen() {
  // Estados para las cantidades de cada nivel
  const [cantInicial, setCantInicial] = useState(0);
  const [cantPrimer, setCantPrimer] = useState(60);
  const [cantSegundo, setCantSegundo] = useState(90);
  const [cantTercer, setCantTercer] = useState(90);

  // Precios base según tu imagen
  const pInicial = 450000;
  const pPrimer = 490000;
  const pSegundo = 530000;
  const pTercer = 570000;

  const totalFinal = (cantInicial * pInicial) + (cantPrimer * pPrimer) + (cantSegundo * pSegundo) + (cantTercer * pTercer);
  const cantidadTotal = cantInicial + cantPrimer + cantSegundo + cantTercer;

  const generarWhatsApp = () => {
    const texto = `*Hola Metal Mad!* 🧮 Usé el Cotizador por Volumen y deseo un presupuesto para ${cantidadTotal} unidades en total:\n\n` +
      `- Nivel Inicial: ${cantInicial} unid.\n` +
      `- Primer Ciclo: ${cantPrimer} unid.\n` +
      `- Segundo Ciclo: ${cantSegundo} unid.\n` +
      `- Tercer Ciclo: ${cantTercer} unid.\n\n` +
      `*Monto Base Estimado:* Gs. ${totalFinal.toLocaleString('es-PY')}\n\n` +
      `Deseo conocer la bonificación aplicable por este volumen de compra.`;
    return `https://wa.me/595982451828?text=${encodeURIComponent(texto)}`;
  };

  // Componente reutilizable para cada fila
  const FilaNivel = ({ titulo, precio, cantidad, setCantidad }: { titulo: string, precio: number, cantidad: number, setCantidad: (v: number) => void }) => (
    <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-zinc-800 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-bold text-lg">{titulo}</h3>
        <span className="text-zinc-500 text-sm">Gs. {precio.toLocaleString('es-PY')}</span>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <button onClick={() => setCantidad(Math.max(0, cantidad - 5))} className="w-10 h-10 rounded-full bg-zinc-800 text-white font-black hover:bg-zinc-700">-</button>
        <input 
          type="number" 
          value={cantidad} 
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="bg-transparent text-yellow-500 font-black text-4xl w-24 text-center focus:outline-none"
        />
        <button onClick={() => setCantidad(cantidad + 5)} className="w-10 h-10 rounded-full bg-zinc-800 text-white font-black hover:bg-zinc-700">+</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black font-sans pb-32 pt-10">
      <div className="max-w-md mx-auto px-6">
        
        <header className="text-center mb-8">
          <h1 className="text-3xl font-black text-white mb-2">Cotizador por Volumen</h1>
          <p className="text-zinc-400 text-sm">Calcula el presupuesto base de tu institución rápidamente.</p>
        </header>

        <div className="flex flex-col gap-4">
          <FilaNivel titulo="Nivel Inicial" precio={pInicial} cantidad={cantInicial} setCantidad={setCantInicial} />
          <FilaNivel titulo="Primer Ciclo" precio={pPrimer} cantidad={cantPrimer} setCantidad={setCantPrimer} />
          <FilaNivel titulo="Segundo Ciclo" precio={pSegundo} cantidad={cantSegundo} setCantidad={setCantSegundo} />
          <FilaNivel titulo="Tercer Ciclo" precio={pTercer} cantidad={cantTercer} setCantidad={setCantTercer} />
        </div>

        <p className="text-center text-zinc-500 text-xs italic mt-6">
          A mayor cantidad, mayor es el porcentaje de bonificación aplicado.
        </p>

      </div>

      {/* Barra Fija Inferior */}
      <div className="fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-800 p-6 z-40">
        <div className="max-w-md mx-auto flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <span className="text-zinc-400 font-bold text-sm">Total Estimado:</span>
            <span className="text-yellow-400 font-black text-2xl">Gs. {totalFinal.toLocaleString('es-PY')}</span>
          </div>
          <a 
            href={generarWhatsApp()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 rounded-xl text-center transition-colors"
          >
            Solicitar Bonificación
          </a>
        </div>
      </div>
    </div>
  );
}
