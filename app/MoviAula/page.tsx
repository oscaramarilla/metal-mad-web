"use client";

import { useState } from "react";

export default function MoviAulaPage() {
  // --- ESTADOS DE LA CALCULADORA ---
  const [linea, setLinea] = useState<"estrella" | "conjunto">("estrella");
  const [cantidad, setCantidad] = useState(30);
  
  // Estados para Conjuntos
  const [modelo, setModelo] = useState<"pro" | "smart" | "basic">("pro");
  const [nivel, setNivel] = useState<0 | 1 | 2 | 3>(3); // 0: Inicial, 1: 1er, 2: 2do, 3: 3er Ciclo
  const [colorPlastico, setColorPlastico] = useState("Azul");
  const [colorMetal, setColorMetal] = useState("Gris");
  
  // Extras
  const [mesaProfesor, setMesaProfesor] = useState(false);

  // --- MATRIZ DE PRECIOS ---
  const precioEstrella = 285000;
  const precioMesaProfesor = 850000;

  // Matriz: [Inicial, 1er Ciclo, 2do Ciclo, 3er Ciclo]
  const matrizPrecios = {
    pro: [774000, 798000, 828000, 858000],
    smart: [740000, 760000, 790000, 810000], // Valores estimados para Smart basados en tu Nivel Inicial
    basic: [390000, 410000, 430000, 440000],
  };

  const nivelesNombres = ["Nivel Inicial", "1er Ciclo", "2do Ciclo", "3er Ciclo"];
  const coloresPlasticoOpts = ["Naranja", "Amarillo", "Rojo", "Azul", "Verde", "Gris"];
  const coloresMetalOpts = ["Gris", "Negro"];

  // --- LÓGICA DE CÁLCULO ---
  const precioUnitario = linea === "estrella" ? precioEstrella : matrizPrecios[modelo][nivel];
  const totalMobiliario = cantidad * precioUnitario;
  const totalFinal = totalMobiliario + (mesaProfesor ? precioMesaProfesor : 0);

  // --- GENERADOR DE WHATSAPP ---
  const generarTextoWhatsApp = () => {
    let texto = `*Hola Metal Mad!* 🚀 Usé su Cotizador Inteligente y deseo formalizar un presupuesto:\n\n`;
    if (linea === "estrella") {
      texto += `*Producto:* Pupitre Estrella (Modelo Iso ORIPLAST)\n`;
    } else {
      texto += `*Producto:* Conjunto Escolar STUDENT ${modelo.toUpperCase()}\n`;
      texto += `*Nivel Ergonómico:* ${nivelesNombres[nivel]}\n`;
      texto += `*Personalización:* Plástico ${colorPlastico} / Estructura ${colorMetal}\n`;
    }
    texto += `*Cantidad:* ${cantidad} unidades\n`;
    if (mesaProfesor) texto += `*Extras:* Incluye 1 Conjunto para Profesor\n`;
    texto += `\n*Inversión Total Estimada:* Gs. ${totalFinal.toLocaleString('es-PY')}\n\n`;
    texto += `Por favor, confírmenme plazos de entrega.`;
    
    return `https://wa.me/595982451828?text=${encodeURIComponent(texto)}`;
  };

  return (
    <div className="flex flex-col items-center font-sans w-full bg-zinc-50 min-h-screen text-zinc-900 pb-20">
      
      {/* 1. CABECERA: Psicología de Ventas (Estatus y Seguridad) */}
      <header className="w-full max-w-5xl px-6 pt-12 lg:pt-20 pb-12 text-center">
        <span className="text-sm font-bold tracking-widest text-green-600 uppercase mb-4 block">
          Calculadora de Inversión Institucional
        </span>
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-blue-900 mb-6">
          Equipa tu colegio con tecnología inyectada
        </h1>
        <p className="text-lg leading-8 text-zinc-600 max-w-3xl mx-auto">
          Las decisiones de compra educativa no son un gasto, son una inversión en durabilidad y prestigio. Selecciona la línea que mejor se adapte a tu proyecto y obtén un presupuesto transparente, directo de fábrica.
        </p>
      </header>

      {/* 2. LA CALCULADORA */}
      <main className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* PANEL IZQUIERDO: Controles (Ocupa 7 columnas en desktop) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Selector de Línea Principal */}
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-zinc-200 flex flex-col sm:flex-row gap-2">
            <button 
              onClick={() => setLinea("estrella")}
              className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all ${linea === "estrella" ? 'bg-blue-900 text-white shadow-md' : 'text-zinc-500 hover:bg-zinc-100'}`}
            >
              ⭐ Pupitre Estrella (Iso)
            </button>
            <button 
              onClick={() => setLinea("conjunto")}
              className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all ${linea === "conjunto" ? 'bg-blue-900 text-white shadow-md' : 'text-zinc-500 hover:bg-zinc-100'}`}
            >
              🏫 Conjuntos Escolares
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
            
            {/* --- RUTA A: PRODUCTO ESTRELLA --- */}
            {linea === "estrella" && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-black text-blue-900 mb-2">Pupitre Modelo Iso ORIPLAST</h2>
                <p className="text-zinc-600 mb-6">El producto más vendido del país. Resistencia extrema con la ventaja de la triple E (Económico, Ergonómico, Eterno).</p>
                <div className="bg-green-50 text-green-800 p-4 rounded-xl border border-green-200 font-medium mb-8 text-sm">
                  ✓ Estructura de caño de alta calidad con pintura electrostática.<br/>
                  ✓ Cero mantenimiento. Ideal para alto tránsito.
                </div>
              </div>
            )}

            {/* --- RUTA B: CONJUNTOS ESCOLARES (LA MATRIZ) --- */}
            {linea === "conjunto" && (
              <div className="animate-fade-in space-y-8">
                
                {/* 1. Selección de Modelo */}
                <div>
                  <h3 className="font-bold text-zinc-800 mb-3">1. Nivel de Inversión (Modelo)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button onClick={() => setModelo("basic")} className={`p-4 rounded-xl border-2 text-left transition-all ${modelo === "basic" ? 'border-blue-600 bg-blue-50' : 'border-zinc-200 hover:border-blue-300'}`}>
                      <div className="font-black text-zinc-900">Student BASIC</div>
                      <div className="text-xs text-zinc-500 mt-1">Tapa MDF Laminado. La opción más económica.</div>
                    </button>
                    <button onClick={() => setModelo("smart")} className={`p-4 rounded-xl border-2 text-left transition-all ${modelo === "smart" ? 'border-blue-600 bg-blue-50' : 'border-zinc-200 hover:border-blue-300'}`}>
                      <div className="font-black text-zinc-900">Student SMART</div>
                      <div className="text-xs text-zinc-500 mt-1">Tapa Polipropileno. Equilibrio costo/durabilidad.</div>
                    </button>
                    <button onClick={() => setModelo("pro")} className={`p-4 rounded-xl border-2 text-left transition-all ${modelo === "pro" ? 'border-blue-600 bg-blue-50 relative overflow-hidden' : 'border-zinc-200 hover:border-blue-300 relative overflow-hidden'}`}>
                      {modelo === "pro" && <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">PREMIUM</div>}
                      <div className="font-black text-zinc-900">Student PRO</div>
                      <div className="text-xs text-zinc-500 mt-1">Tapa ABS Alta Densidad. Máxima durabilidad.</div>
                    </button>
                  </div>
                </div>

                {/* 2. Selección de Nivel Ergonómico */}
                <div>
                  <h3 className="font-bold text-zinc-800 mb-3">2. Segmento Ergonómico</h3>
                  <div className="flex flex-wrap gap-2">
                    {nivelesNombres.map((nom, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setNivel(idx as 0|1|2|3)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${nivel === idx ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-300 hover:bg-zinc-100'}`}
                      >
                        {nom}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Personalización de Colores */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                  <div>
                    <h3 className="font-bold text-zinc-800 mb-3 text-sm">Color de Plásticos</h3>
                    <select 
                      value={colorPlastico} 
                      onChange={(e) => setColorPlastico(e.target.value)}
                      className="w-full p-3 rounded-lg border border-zinc-300 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {coloresPlasticoOpts.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-800 mb-3 text-sm">Estructura Metálica</h3>
                    <select 
                      value={colorMetal} 
                      onChange={(e) => setColorMetal(e.target.value)}
                      className="w-full p-3 rounded-lg border border-zinc-300 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {coloresMetalOpts.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

              </div>
            )}

            {/* --- CONTROLES UNIVERSALES (Cantidad y Extras) --- */}
            <div className="mt-8 pt-8 border-t border-zinc-100 space-y-6">
              <div>
                <label className="font-black text-zinc-800 flex justify-between mb-4">
                  <span>¿Cuántas unidades necesitas?</span>
                  <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-md">{cantidad} unid.</span>
                </label>
                <input 
                  type="range" min="10" max="300" step="5"
                  value={cantidad} 
                  onChange={(e) => setCantidad(Number(e.target.value))}
                  className="w-full cursor-pointer accent-blue-700 h-2 bg-zinc-200 rounded-lg appearance-none"
                />
              </div>

              <label className="flex items-center gap-3 cursor-pointer p-4 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={mesaProfesor} 
                  onChange={(e) => setMesaProfesor(e.target.checked)}
                  className="w-5 h-5 accent-blue-600 rounded"
                />
                <span className="font-bold text-zinc-700">Añadir 1 Conjunto de Mesa y Silla para Docente</span>
              </label>
            </div>

          </div>
        </div>

        {/* PANEL DERECHO: El Ticket / Cierre de Ventas (Ocupa 5 columnas) */}
        <div className="lg:col-span-5 relative">
          <div className="bg-zinc-900 p-8 rounded-3xl shadow-2xl text-white sticky top-24">
            
            <div className="mb-6">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Presupuesto Oficial
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-start border-b border-zinc-700 pb-4">
                <div>
                  <div className="font-bold text-zinc-100">{cantidad}x {linea === "estrella" ? 'Pupitre Iso' : `Student ${modelo.toUpperCase()}`}</div>
                  {linea === "conjunto" && <div className="text-sm text-zinc-400">{nivelesNombres[nivel]}</div>}
                </div>
                <div className="font-bold text-right">Gs. {totalMobiliario.toLocaleString('es-PY')}</div>
              </div>
              
              {mesaProfesor && (
                <div className="flex justify-between items-center border-b border-zinc-700 pb-4">
                  <div className="text-zinc-300">1x Conjunto Docente</div>
                  <div className="font-bold">Gs. {precioMesaProfesor.toLocaleString('es-PY')}</div>
                </div>
              )}
            </div>

            <div className="bg-black/30 p-6 rounded-2xl mb-8 border border-zinc-700 text-center">
              <div className="text-zinc-400 text-sm mb-2 uppercase tracking-widest font-bold">Inversión Total Estimada</div>
              <div className="text-4xl lg:text-5xl font-black text-yellow-400">
                Gs. {totalFinal.toLocaleString('es-PY')}
              </div>
            </div>

            <a 
              href={generarTextoWhatsApp()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] px-6 py-5 text-center font-black text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:scale-[1.02]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.196.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Solicitar Cotización Formal
            </a>

            {/* Reducción de Riesgo (Garantías Operativas) */}
            <div className="mt-6 border-t border-zinc-700 pt-6 text-xs text-zinc-400 space-y-2">
              <p className="flex items-center gap-2">⏱️ <strong>Tiempo de entrega:</strong> 25 días (hasta 300 unid.)</p>
              <p className="flex items-center gap-2">💰 <strong>Condiciones:</strong> 50% Anticipo / 50% Contra entrega</p>
              <p className="flex items-center gap-2">🚚 <strong>Logística:</strong> Flete sin costo dentro de Asunción.</p>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
