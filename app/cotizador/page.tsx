"use client";
import { useState } from "react";

export default function CotizadorAvanzado() {
  const [tab, setTab] = useState("completo"); // 'completo' (Metal Mad) o 'plasticos' (Oriplast)
  const [cantidad, setCantidad] = useState(50);

  // --- COSTOS METAL MAD ---
  const metalMesa = 180000;
  const metalSilla = 65000;
  const costoArmadoLogistica = 28000; // Para llegar a los 570k de tu presupuesto oficial

  // --- COSTOS ORIPLAST (BASE) ---
  const plasticoMesada = 90000;
  const plasticoAsiento = 30000;
  const plasticoRespaldo = 15000;
  const plasticoPortaLibros = 65000;
  const plasticoAccesorios = 20000; // 2 punteras, 4 conteras, 4 zapatas
  
  const costoBasePlastico = plasticoMesada + plasticoAsiento + plasticoRespaldo + plasticoPortaLibros + plasticoAccesorios; // Gs. 220.000
  
  // --- MARGEN B2B (35%) ---
  const margenPlastico = 1.35; 
  const precioVentaPlastico = costoBasePlastico * margenPlastico; // Gs. 297.000

  // --- TOTALES ---
  const totalUnidadCompleta = metalMesa + metalSilla + precioVentaPlastico + costoArmadoLogistica; // Gs. 570.000
  const totalProyectoCompleto = cantidad * totalUnidadCompleta;
  const totalProyectoPlasticos = cantidad * precioVentaPlastico;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20">
      
      {/* CABECERA Y SELECTOR */}
      <div className="bg-blue-900 pt-16 pb-12 text-center px-6 shadow-inner">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
          Cotizador Desglosado
        </h1>
        <div className="inline-flex flex-col sm:flex-row bg-blue-950 p-1.5 rounded-2xl border border-blue-800 gap-1">
          <button 
            onClick={() => setTab("completo")}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${tab === 'completo' ? 'bg-yellow-400 text-blue-900 shadow-lg' : 'text-blue-300 hover:text-white'}`}
          >
            🏢 Proyecto Completo (Metal Mad)
          </button>
          <button 
            onClick={() => setTab("plasticos")}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${tab === 'plasticos' ? 'bg-red-600 text-white shadow-lg' : 'text-blue-300 hover:text-white'}`}
          >
            📦 Suministro Plásticos (Oriplast B2B)
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 mt-10">
        
        {/* INPUT DE CANTIDAD (Compartido) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 mb-8 max-w-xl mx-auto text-center">
          <label className="block text-sm font-black text-zinc-500 uppercase mb-4">
            {tab === "completo" ? "¿Cuántos conjuntos escolares necesitas?" : "¿Cuántos Kits de Plástico necesitas?"}
          </label>
          <div className="flex items-center justify-center gap-4">
            <input 
              type="number" 
              min="1"
              value={cantidad} 
              onChange={(e) => setCantidad(Number(e.target.value))}
              className="w-32 text-center p-3 text-3xl font-black border-2 border-zinc-200 rounded-xl focus:border-blue-600 outline-none text-blue-900"
            />
            <span className="text-xl font-bold text-zinc-400">unidades</span>
          </div>
        </div>

        {/* ========================================== */}
        {/* ESCENARIO A: METAL MAD (MUEBLE TERMINADO) */}
        {/* ========================================== */}
        {tab === "completo" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start animate-in fade-in duration-500">
            
            {/* Panel Izquierdo: El Desglose */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-zinc-100 pb-4 mb-6">Desglose por Conjunto</h2>
              
              <div className="space-y-6">
                {/* Estructura Metálica */}
                <div>
                  <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-3">1. Estructura Metálica</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-zinc-700">
                      <span>• Estructura de Mesa (Caño reforzado)</span>
                      <span className="font-semibold">Gs. {metalMesa.toLocaleString('es-PY')}</span>
                    </div>
                    <div className="flex justify-between text-zinc-700">
                      <span>• Estructura de Silla (Caño reforzado)</span>
                      <span className="font-semibold">Gs. {metalSilla.toLocaleString('es-PY')}</span>
                    </div>
                  </div>
                </div>

                {/* Componentes Plásticos */}
                <div className="pt-4 border-t border-zinc-100">
                  <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-3">2. Componentes Inyectados</h3>
                  <div className="space-y-2 text-zinc-700">
                    <div className="flex justify-between">
                      <span>• 1x Mesada con travesaño</span>
                      <span className="font-semibold text-zinc-400">Incluido</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 1x Asiento y 1x Respaldo anatómico</span>
                      <span className="font-semibold text-zinc-400">Incluido</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 1x Porta libros</span>
                      <span className="font-semibold text-zinc-400">Incluido</span>
                    </div>
                    <div className="flex justify-between text-sm text-zinc-500 ml-4">
                      <span>+ Accesorios: 2 punteras, 4 conteras/pernos, 4 zapatas</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 text-blue-800">
                      <span>Subtotal Plásticos (Kit Completo)</span>
                      <span>Gs. {precioVentaPlastico.toLocaleString('es-PY')}</span>
                    </div>
                  </div>
                </div>

                {/* Montaje */}
                <div className="pt-4 border-t border-zinc-100">
                  <div className="flex justify-between text-zinc-700 font-bold">
                    <span>3. Armado, Tornillería y Embalaje</span>
                    <span>Gs. {costoArmadoLogistica.toLocaleString('es-PY')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Derecho: Total Metal Mad */}
            <div className="bg-zinc-900 p-8 rounded-3xl text-white shadow-2xl sticky top-24">
              <div className="text-yellow-400 text-sm font-bold uppercase mb-2 tracking-widest text-center">Proyecto Llave en Mano</div>
              <p className="text-center text-zinc-400 mb-8 text-sm">Listo para uso en aulas. Incluye garantía de fábrica Metal Mad.</p>
              
              <div className="flex justify-between items-center border-b border-zinc-700 pb-4 mb-4">
                <span className="text-lg">Precio Unitario:</span>
                <span className="text-2xl font-bold">Gs. {totalUnidadCompleta.toLocaleString('es-PY')}</span>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-xl text-zinc-400">Total por {cantidad} unid.</span>
                <span className="text-4xl lg:text-5xl font-black text-yellow-400">Gs. {totalProyectoCompleto.toLocaleString('es-PY')}</span>
              </div>
              
              <a 
                href={`https://wa.me/595982451828?text=Hola,%20solicito%20presupuesto%20formal%20Metal%20Mad%20por%20${cantidad}%20conjuntos.%20Total%20estimado:%20Gs.%20${totalProyectoCompleto.toLocaleString('es-PY')}`} 
                className="block w-full py-4 bg-yellow-400 text-blue-900 font-black text-center rounded-xl hover:bg-yellow-500 transition-colors"
                target="_blank" rel="noreferrer"
              >
                SOLICITAR FACTURA PROFORMA
              </a>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* ESCENARIO B: ORIPLAST (SOLO PLÁSTICOS B2B) */}
        {/* ========================================== */}
        {tab === "plasticos" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start animate-in fade-in duration-500">
            
            {/* Panel Izquierdo: El Desglose del Kit */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <div className="flex items-center gap-3 mb-6 border-b-2 border-zinc-100 pb-4">
                <span className="bg-red-100 text-red-600 p-2 rounded-lg font-black text-xl">B2B</span>
                <h2 className="text-2xl font-bold text-zinc-900">Kit de Suministro Mayorista</h2>
              </div>
              
              <p className="text-zinc-600 mb-6 text-sm">
                Venta exclusiva para fabricantes. Cada "Kit" incluye absolutamente todo lo necesario para ensamblar 1 conjunto escolar de polipropileno de alta ingeniería.
              </p>
              
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 space-y-4">
                <h3 className="font-bold text-zinc-800 mb-2">Contenido exacto de 1 Kit:</h3>
                <ul className="space-y-3 text-zinc-700 text-sm">
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 1x Mesada con travesaño</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 1x Asiento anatómico</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 1x Respaldo anatómico</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 1x Porta libros resistente</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 2x Punteras superiores para mesa</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 4x Conteras y pernos expansores</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 2x Zapatas frontales</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 2x Zapatas posteriores</li>
                </ul>
                <div className="mt-6 pt-4 border-t border-zinc-200 flex justify-between items-center">
                  <span className="font-bold text-zinc-500">Valor Mayorista (por Kit):</span>
                  <span className="text-xl font-black text-red-600">Gs. {precioVentaPlastico.toLocaleString('es-PY')}</span>
                </div>
              </div>
            </div>

            {/* Panel Derecho: Total Oriplast */}
            <div className="bg-red-700 p-8 rounded-3xl text-white shadow-2xl sticky top-24">
              <div className="text-red-200 text-sm font-bold uppercase mb-2 tracking-widest text-center">Importación y Distribución</div>
              <p className="text-center text-red-100 mb-8 text-sm">Representación exclusiva Oriplast en Paraguay. Despacho incluido.</p>
              
              <div className="flex justify-between items-center border-b border-red-600 pb-4 mb-4">
                <span className="text-lg">Cantidad solicitada:</span>
                <span className="text-2xl font-bold">{cantidad} Kits</span>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-xl text-red-200">Total B2B</span>
                <span className="text-4xl lg:text-5xl font-black text-white">Gs. {totalProyectoPlasticos.toLocaleString('es-PY')}</span>
              </div>
              
              <a 
                href={`https://wa.me/595982451828?text=Hola,%20solicito%20cotización%20Oriplast%20Mayorista%20por%20${cantidad}%20Kits%20completos.%20Total%20estimado:%20Gs.%20${totalProyectoPlasticos.toLocaleString('es-PY')}`} 
                className="block w-full py-4 bg-white text-red-700 font-black text-center rounded-xl hover:scale-105 transition-colors shadow-lg"
                target="_blank" rel="noreferrer"
              >
                SOLICITAR SUMINISTRO
              </a>
              <p className="text-center text-xs text-red-300 mt-4">* No incluye estructuras metálicas.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
