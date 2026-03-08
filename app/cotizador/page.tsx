"use client";
import { useState } from "react";

export default function CentroDeCotizacion() {
  const [tab, setTab] = useState("ayc");
  const [cantidad, setCantidad] = useState(50); 

  const [cantInicial, setCantInicial] = useState(0);
  const [cantPrimer, setCantPrimer] = useState(0);
  const [cantSegundo, setCantSegundo] = useState(0);
  const [cantTercer, setCantTercer] = useState(0);

  const metalMesa = 180000;
  const metalSilla = 65000;
  const costoArmadoLogistica = 28000;

  const plasticoMesada = 90000;
  const plasticoAsiento = 30000;
  const plasticoRespaldo = 15000;
  const plasticoPortaLibros = 65000;
  const plasticoAccesorios = 20000; 
  const costoBasePlastico = plasticoMesada + plasticoAsiento + plasticoRespaldo + plasticoPortaLibros + plasticoAccesorios; 
  
  const margenPlastico = 1.35; 
  const precioVentaPlastico = costoBasePlastico * margenPlastico; 

  const totalUnidadCompleta = metalMesa + metalSilla + precioVentaPlastico + costoArmadoLogistica; 
  const totalProyectoCompleto = cantidad * totalUnidadCompleta;
  const totalProyectoPlasticos = cantidad * precioVentaPlastico;

  const precioInicial = 450000;
  const precioPrimer = 490000;
  const precioSegundo = 530000;
  const precioTercer = 570000; 

  const subtotalInicial = cantInicial * precioInicial;
  const subtotalPrimer = cantPrimer * precioPrimer;
  const subtotalSegundo = cantSegundo * precioSegundo;
  const subtotalTercer = cantTercer * precioTercer;

  const totalUnidadesAyC = cantInicial + cantPrimer + cantSegundo + cantTercer;
  const valuacionMercadoAyC = subtotalInicial + subtotalPrimer + subtotalSegundo + subtotalTercer;
  const descuentoAyC = valuacionMercadoAyC * 0.05; 
  const totalNetoAyC = valuacionMercadoAyC - descuentoAyC;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20">
      
      <div className="bg-blue-900 pt-12 pb-10 text-center px-4 shadow-inner">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
          Centro de Cotización 2026
        </h1>
        <div className="inline-flex flex-wrap justify-center bg-blue-950 p-1.5 rounded-2xl border border-blue-800 gap-2 max-w-4xl">
          <button onClick={() => setTab("completo")} className={`px-4 py-3 rounded-xl font-bold text-sm transition-all ${tab === 'completo' ? 'bg-yellow-400 text-blue-900 shadow-lg' : 'text-blue-300 hover:text-white'}`}>
            🏢 Desglose Institucional
          </button>
          <button onClick={() => setTab("plasticos")} className={`px-4 py-3 rounded-xl font-bold text-sm transition-all ${tab === 'plasticos' ? 'bg-red-600 text-white shadow-lg' : 'text-blue-300 hover:text-white'}`}>
            📦 Suministro Plásticos B2B
          </button>
          <button onClick={() => setTab("ayc")} className={`px-4 py-3 rounded-xl font-bold text-sm transition-all ${tab === 'ayc' ? 'bg-zinc-900 text-green-400 shadow-lg border border-green-500' : 'text-blue-300 hover:text-white'}`}>
            🚀 Calculadora AyC (Envío Gratis)
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 mt-8">
        
        {/* PESTAÑA 1 */}
        {tab === "completo" && (
          <div className="animate-in fade-in duration-500">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 mb-8 max-w-xl mx-auto text-center">
              <label className="block text-sm font-black text-zinc-500 uppercase mb-4">¿Cuántos conjuntos necesitas?</label>
              <input type="number" min="1" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} className="w-32 text-center p-3 text-3xl font-black border-2 border-zinc-200 rounded-xl focus:border-blue-600 outline-none text-blue-900" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
                <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-zinc-100 pb-4 mb-6">Desglose por Conjunto</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-3">1. Estructura Metálica</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-zinc-700"><span>• Mesa (Caño reforzado)</span><span className="font-semibold">Gs. {metalMesa.toLocaleString('es-PY')}</span></div>
                      <div className="flex justify-between text-zinc-700"><span>• Silla (Caño reforzado)</span><span className="font-semibold">Gs. {metalSilla.toLocaleString('es-PY')}</span></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-zinc-100">
                    <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-3">2. Componentes Inyectados</h3>
                    <div className="space-y-2 text-zinc-700">
                      <div className="flex justify-between"><span>• Kit completo (Mesa, Asiento, Respaldo, Porta libros)</span><span className="font-semibold text-zinc-400">Incluido</span></div>
                      <div className="flex justify-between text-sm text-zinc-500 ml-4"><span>+ 2 punteras, 4 conteras/pernos, 4 zapatas</span></div>
                      <div className="flex justify-between font-bold pt-2 text-blue-800"><span>Subtotal Plásticos</span><span>Gs. {precioVentaPlastico.toLocaleString('es-PY')}</span></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-zinc-100">
                    <div className="flex justify-between text-zinc-700 font-bold"><span>3. Armado y Embalaje</span><span>Gs. {costoArmadoLogistica.toLocaleString('es-PY')}</span></div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 p-8 rounded-3xl text-white shadow-2xl sticky top-24">
                <div className="text-yellow-400 text-sm font-bold uppercase mb-2 tracking-widest text-center">Proyecto Llave en Mano</div>
                <div className="flex justify-between items-center border-b border-zinc-700 pb-4 mb-4 mt-8"><span className="text-lg">Precio Unitario:</span><span className="text-2xl font-bold">Gs. {totalUnidadCompleta.toLocaleString('es-PY')}</span></div>
                <div className="flex justify-between items-end mb-8"><span className="text-xl text-zinc-400">Total por {cantidad} unid.</span><span className="text-4xl lg:text-5xl font-black text-yellow-400">Gs. {totalProyectoCompleto.toLocaleString('es-PY')}</span></div>
                <a href={`https://wa.me/595982451828?text=Hola,%20solicito%20presupuesto%20Metal%20Mad%20por%20${cantidad}%20conjuntos.`} className="block w-full py-4 bg-yellow-400 text-blue-900 font-black text-center rounded-xl hover:bg-yellow-500 transition-colors" target="_blank" rel="noreferrer">SOLICITAR FACTURA</a>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA 2 */}
        {tab === "plasticos" && (
          <div className="animate-in fade-in duration-500">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 mb-8 max-w-xl mx-auto text-center">
              <label className="block text-sm font-black text-zinc-500 uppercase mb-4">¿Cuántos Kits Plásticos B2B necesitas?</label>
              <input type="number" min="1" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} className="w-32 text-center p-3 text-3xl font-black border-2 border-zinc-200 rounded-xl focus:border-red-600 outline-none text-red-700" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-zinc-100 pb-4">
                  <span className="bg-red-100 text-red-600 p-2 rounded-lg font-black text-xl">B2B</span><h2 className="text-2xl font-bold text-zinc-900">Kit Mayorista de Plásticos</h2>
                </div>
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 space-y-4">
                  <h3 className="font-bold text-zinc-800 mb-2">Contenido de 1 Kit completo:</h3>
                  <ul className="space-y-3 text-zinc-700 text-sm">
                    <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 1x Mesada con travesaño, 1x Asiento, 1x Respaldo</li>
                    <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> 1x Porta libros</li>
                    <li className="flex gap-3"><span className="text-red-500 font-bold">✓</span> Accesorios (2 punteras, 4 conteras, 4 zapatas)</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-zinc-200 flex justify-between items-center"><span className="font-bold text-zinc-500">Valor (por Kit):</span><span className="text-xl font-black text-red-600">Gs. {precioVentaPlastico.toLocaleString('es-PY')}</span></div>
                </div>
              </div>

              <div className="bg-red-700 p-8 rounded-3xl text-white shadow-2xl sticky top-24">
                <div className="text-red-200 text-sm font-bold uppercase mb-2 tracking-widest text-center">Importación Exclusiva</div>
                <div className="flex justify-between items-end mb-8 mt-10"><span className="text-xl text-red-200">Total {cantidad} Kits</span><span className="text-4xl lg:text-5xl font-black text-white">Gs. {totalProyectoPlasticos.toLocaleString('es-PY')}</span></div>
                <a href={`https://wa.me/595982451828?text=Cotización%20Oriplast%20por%20${cantidad}%20Kits`} className="block w-full py-4 bg-white text-red-700 font-black text-center rounded-xl hover:scale-105 transition-colors" target="_blank" rel="noreferrer">SOLICITAR IMPORTACIÓN</a>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA 3 */}
        {tab === "ayc" && (
          <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="bg-[#111111] rounded-[2rem] shadow-2xl overflow-hidden border border-zinc-800 text-zinc-200">
              
              <div className="p-8 border-b border-zinc-800 text-center">
                <h2 className="text-3xl font-black text-white tracking-tighter">METAL MAD <span className="text-blue-500">E.A.S</span></h2>
                <p className="text-zinc-500 font-bold tracking-widest text-xs uppercase mt-2">Cotizador Industrial B2B</p>
                <div className="mt-4 inline-block bg-blue-900 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full">PRECIOS DE FÁBRICA DIRECTOS</div>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-zinc-400 mb-4">1. NIVELES DE EQUIPAMIENTO</h3>
                  
                  <div className="bg-[#1a1a1a] p-4 rounded-xl border border-zinc-800 focus-within:border-yellow-500 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">Nivel Inicial</span>
                      <span className="text-xs text-zinc-500">Gs. {precioInicial.toLocaleString('es-PY')}</span>
                    </div>
                    <input type="number" min="0" value={cantInicial === 0 ? '' : cantInicial} placeholder="0" onChange={(e) => setCantInicial(Number(e.target.value))} className="w-full bg-transparent text-2xl font-bold text-yellow-500 outline-none" />
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-xl border border-zinc-800 focus-within:border-yellow-500 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">Primer Ciclo</span>
                      <span className="text-xs text-zinc-500">Gs. {precioPrimer.toLocaleString('es-PY')}</span>
                    </div>
                    <input type="number" min="0" value={cantPrimer === 0 ? '' : cantPrimer} placeholder="0" onChange={(e) => setCantPrimer(Number(e.target.value))} className="w-full bg-transparent text-2xl font-bold text-yellow-500 outline-none" />
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-xl border border-zinc-800 focus-within:border-yellow-500 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">Segundo Ciclo</span>
                      <span className="text-xs text-zinc-500">Gs. {precioSegundo.toLocaleString('es-PY')}</span>
                    </div>
                    <input type="number" min="0" value={cantSegundo === 0 ? '' : cantSegundo} placeholder="0" onChange={(e) => setCantSegundo(Number(e.target.value))} className="w-full bg-transparent text-2xl font-bold text-yellow-500 outline-none" />
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-xl border border-zinc-800 focus-within:border-yellow-500 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">Tercer Ciclo</span>
                      <span className="text-xs text-zinc-500">Gs. {precioTercer.toLocaleString('es-PY')}</span>
                    </div>
                    <input type="number" min="0" value={cantTercer === 0 ? '' : cantTercer} placeholder="0" onChange={(e) => setCantTercer(Number(e.target.value))} className="w-full bg-transparent text-2xl font-bold text-yellow-500 outline-none" />
                  </div>
                  
                  <p className="text-xs text-zinc-500 italic">A mayor cantidad, mayor es el porcentaje de bonificación aplicado.</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#1a1a1a] rounded-2xl border border-zinc-800 p-6">
                    <h3 className="text-xs font-bold text-zinc-500 tracking-widest uppercase mb-4">Detalle de Costos</h3>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-3xl font-black text-white block">Gs. {totalUnidadesAyC > 0 ? Math.round(valuacionMercadoAyC / totalUnidadesAyC).toLocaleString('es-PY') : 0}</span>
                        <span className="text-xs text-zinc-500 font-bold">PRECIO PROMEDIO UNIT.</span>
                      </div>
                      <div className="bg-green-900/30 border border-green-800 text-green-400 px-3 py-1.5 rounded-lg text-xs font-bold text-right">
                        🚚 ENTREGA GRATUITA<br/><span className="text-[10px] text-green-600">PUERTA A PUERTA</span>
                      </div>
                    </div>

                    <div className="bg-[#111111] p-4 rounded-xl border border-green-900/50 relative overflow-hidden mb-6">
                      <div className="absolute right-0 bottom-0 opacity-10 text-6xl">🏷️</div>
                      <span className="text-xs text-green-500 font-bold block mb-1">BONIFICACIÓN TOTAL</span>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-black text-green-400">Gs. {descuentoAyC.toLocaleString('es-PY')}</span>
                        <span className="text-sm font-bold text-green-600 mb-1">(-5%)</span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-zinc-400 mb-2">
                      <span>Valuación de Mercado:</span>
                      <span className="line-through">Gs. {valuacionMercadoAyC.toLocaleString('es-PY')}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-zinc-800">
                      <span className="text-lg font-bold text-white">Total Neto:</span>
                      <span className="text-2xl font-black text-blue-400">Gs. {totalNetoAyC.toLocaleString('es-PY')}</span>
                    </div>
                  </div>

                  <div className="border border-zinc-800 rounded-2xl p-6 relative">
                    <h3 className="text-xs text-center font-bold text-white mb-6">TRANSFERENCIA BANCARIA (PARAGUAY)</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <span className="text-blue-400 font-bold block text-sm">UENO BANK</span>
                        <span className="text-zinc-400 text-sm">Caja de ahorro No. 20588348</span>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <span className="text-blue-400 font-bold block text-sm">BANCO INTERFISA</span>
                        <span className="text-zinc-400 text-sm">Caja de ahorro Nº: 259080186</span>
                      </div>
                      <div className="text-xs text-zinc-500 leading-relaxed px-2">
                        <strong className="text-zinc-300">Titular:</strong> Metal mad e.a.s<br/>
                        <strong className="text-zinc-300">RUC:</strong> 80135751-9
                      </div>
                    </div>

                    <a 
                      href={`https://wa.me/595982451828?text=Hola,%20confirmo%20mi%20orden%20AyC%20por%20${totalUnidadesAyC}%20unidades.%20Total%20Neto:%20Gs.%20${totalNetoAyC.toLocaleString('es-PY')}`}
                      className="flex items-center justify-center gap-2 w-full bg-[#1c5c2b] hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors"
                      target="_blank" rel="noreferrer"
                    >
                      <span>ENVIAR COMPROBANTE</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
