"use client";

import { useState } from "react";

export default function CalculadoraPage() {
  const [nivel, setNivel] = useState(60);
  const [cantidad, setCantidad] = useState(1);
  const [metodoPago, setMetodoPago] = useState("crypto");
  const [mostrarPago, setMostrarPago] = useState(false);

  const preciosCripto = {
    60: "Nivel Inicial",
    63: "Primer Ciclo",
    66: "Segundo Ciclo",
    69: "Tercer Ciclo",
  };

  const tasas = { 
    crypto: 1, 
    pyg: 7300, 
    brl: 5.05, 
    ves: 36.2 
  };

  // --- LÓGICA DE PRECIOS Y AHORRO ---
  const precioOriginalUnitario = nivel / (1 - 0.35); 
  const valorMercadoTotal = precioOriginalUnitario * cantidad;

  let porcentajeDescuentoAplicado = 0;
  let precioFinalUnitarioUSDT = 0;

  if (metodoPago === "crypto") {
    precioFinalUnitarioUSDT = nivel;
    porcentajeDescuentoAplicado = 35;
  } else {
    if (cantidad > 300) {
      porcentajeDescuentoAplicado = 0; 
    } else if (cantidad >= 241) porcentajeDescuentoAplicado = 40;
    else if (cantidad >= 121) porcentajeDescuentoAplicado = 30;
    else if (cantidad >= 61) porcentajeDescuentoAplicado = 20;
    else if (cantidad >= 31) porcentajeDescuentoAplicado = 15;
    else if (cantidad >= 6) porcentajeDescuentoAplicado = 10;
    else porcentajeDescuentoAplicado = 5;

    precioFinalUnitarioUSDT = precioOriginalUnitario * (1 - (porcentajeDescuentoAplicado / 100));
  }

  const totalUSDT = precioFinalUnitarioUSDT * cantidad;
  const tasaActual = tasas[metodoPago as keyof typeof tasas];
  const totalFinalMoneda = totalUSDT * tasaActual;
  const precioFinalUnitarioMoneda = precioFinalUnitarioUSDT * tasaActual;
  const ahorroRealMoneda = (valorMercadoTotal - totalUSDT) * tasaActual;
  
  const monedaSimbolo = metodoPago === "crypto" ? "USDT" : metodoPago === "pyg" ? "Gs." : metodoPago === "brl" ? "R$" : "Bs.";

  const obtenerPlazoEntrega = (cant: number) => {
    if (cant > 300) return "Consultar Planta";
    if (cant > 200) return "Hasta 30 días";
    if (cant > 50) return "21 días hábiles";
    if (cant > 5) return "14 días hábiles";
    return "7 días hábiles";
  };

  // --- NUEVA FUNCIÓN: Generador de Mensaje de WhatsApp ---
  const getWhatsAppLink = () => {
    const nombreNivel = preciosCripto[nivel as keyof typeof preciosCripto];
    const totalFormateado = `${monedaSimbolo} ${totalFinalMoneda.toLocaleString('es-PY', { maximumFractionDigits: 0 })}`;
    
    const texto = `¡Hola Metal Mad! 👋\n\nQuiero confirmar mi orden de mobiliario escolar:\n\n` +
                  `📦 Nivel: ${nombreNivel}\n` +
                  `🔢 Cantidad: ${cantidad} unidades\n` +
                  `💰 Total Neto: ${totalFormateado}\n` +
                  `💳 Método de Pago: ${metodoPago.toUpperCase()}\n\n` +
                  `Adjunto mi comprobante de pago para procesar la orden.`;
                  
    return `https://wa.me/595982451828?text=${encodeURIComponent(texto)}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-4 md:p-12 font-sans text-black">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-200">
        
        <div className="bg-zinc-900 p-8 text-white flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-black tracking-tighter italic">METAL MAD <span className="text-blue-500">E.A.S</span></h1>
            <p className="text-zinc-400 text-xs uppercase font-bold tracking-widest mt-1">Cotizador Industrial B2B</p>
          </div>
          <div className="mt-4 md:mt-0 bg-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase animate-pulse">
            Precios de Fábrica Directos
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-zinc-500 uppercase mb-2">1. Nivel de Equipamiento</label>
              <select className="w-full p-4 bg-zinc-100 border-none rounded-xl font-bold focus:ring-2 focus:ring-blue-500 transition-all" 
                value={nivel} onChange={(e) => setNivel(Number(e.target.value))}>
                {Object.entries(preciosCripto).map(([val, name]) => (
                  <option key={val} value={val}>{name} ({val} USDT)</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-zinc-500 uppercase mb-2">2. Volumen del Pedido</label>
              <input type="number" min="1" className="w-full p-4 bg-zinc-100 border-none rounded-xl font-bold focus:ring-2 focus:ring-blue-500"
                value={cantidad} onChange={(e) => {setCantidad(Number(e.target.value)); setMostrarPago(false);}} />
              <p className="text-[10px] text-zinc-400 mt-2 font-medium italic">A mayor cantidad, mayor es el porcentaje de bonificación aplicado.</p>
            </div>

            <div>
              <label className="block text-xs font-black text-zinc-500 uppercase mb-2">3. Método de Liquidación</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(tasas).map((key) => {
                  let subtexto = "";
                  if (key === 'crypto') subtexto = "Red TRC20 Confirmada";
                  else if (key === 'pyg') subtexto = "Transferencia / QR Bancario";
                  else subtexto = "Transferencia Internacional";

                  return (
                    <button key={key} onClick={() => {setMetodoPago(key); setMostrarPago(false);}}
                      className={`p-3 rounded-xl text-left border-2 transition-all flex flex-col justify-center ${metodoPago === key ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-500 border-zinc-100 hover:border-zinc-300"}`}>
                      <span className="text-xs font-black">{key === 'crypto' ? 'USDT (35% OFF)' : key.toUpperCase()}</span>
                      <span className={`text-[9px] uppercase mt-0.5 ${metodoPago === key ? "text-zinc-300" : key === 'crypto' ? "text-blue-600 font-bold" : "text-zinc-400"}`}>
                        {subtexto}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Precio Unitario y Entrega Gratuita */}
            <div className="mt-4 p-4 bg-zinc-100 rounded-xl border border-zinc-200">
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-2">Detalle de Costos</p>
              <div className="flex justify-between items-end">
                <div>
                  <span className="block text-2xl font-black text-zinc-900">
                    {monedaSimbolo} {precioFinalUnitarioMoneda.toLocaleString('es-PY', { maximumFractionDigits: 0 })}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Precio Unitario</span>
                </div>
                
                {cantidad > 1 && (
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-green-200 text-green-800 text-[10px] font-black uppercase animate-pulse">
                      🚚 Entrega Gratuita
                    </span>
                    <p className="text-[9px] text-zinc-500 mt-1 uppercase font-bold">Puerta a puerta incluido</p>
                  </div>
                )}
              </div>
            </div>

          </div>

          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black uppercase text-sm tracking-tight">Estado de Cotización</h3>
                <span className="text-[10px] bg-zinc-200 px-2 py-1 rounded font-bold">{obtenerPlazoEntrega(cantidad)}</span>
              </div>

              <div className="bg-green-100 border-2 border-green-200 p-4 rounded-xl mb-6 shadow-sm overflow-hidden relative">
                <div className="relative z-10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black text-green-700 uppercase tracking-widest">Bonificación Total</p>
                      <p className="text-2xl font-black text-green-800">
                        {monedaSimbolo} {ahorroRealMoneda.toLocaleString('es-PY', { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-green-700 uppercase">Ahorro</p>
                      <p className="text-xl font-black text-green-800">-{porcentajeDescuentoAplicado}%</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 text-green-200 opacity-50 transform rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8.139a4.5 4.5 0 0 0-5 7.859V15a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V1a1 1 0 0 1 1-1"/>
                  </svg>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase">
                  <span>Valuación de Mercado:</span>
                  <span className="line-through">{monedaSimbolo} {(valorMercadoTotal * tasaActual).toLocaleString('es-PY', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between text-sm font-black">
                  <span>Total Neto:</span>
                  <span className="text-blue-600">{monedaSimbolo} {totalFinalMoneda.toLocaleString('es-PY', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>

            {/* SECCIÓN DE BOTONES DE PAGO CONDICIONALES */}
            {!mostrarPago ? (
              <button onClick={() => setMostrarPago(true)} className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 uppercase text-xs tracking-widest">
                Confirmar Orden y Pagar
              </button>
            ) : (
              <>
                {/* 1. VISTA PAGO CRIPTO (USDT) */}
                {metodoPago === "crypto" && (
                  <div className="bg-white border-2 border-zinc-900 p-4 rounded-xl animate-in slide-in-from-bottom-4 duration-300">
                    <div className="text-center">
                      <p className="text-[10px] font-black uppercase mb-3 tracking-tighter">Liquidación USDT <span className="text-zinc-400">(Tron TRC20)</span></p>
                      <div className="flex justify-center mb-4">
                        <img src="/qr-pago.png" alt="QR" className="w-28 h-28 border p-1 rounded" />
                      </div>
                      <div className="bg-zinc-100 p-2 rounded text-[9px] font-mono break-all mb-3 text-zinc-500 border border-dashed border-zinc-300">
                        TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ
                      </div>
                      <button onClick={() => {navigator.clipboard.writeText("TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ"); alert("Copiado");}} 
                        className="w-full bg-zinc-900 text-white py-2 rounded-lg text-[10px] font-black uppercase hover:bg-zinc-800 transition-colors">
                        Copiar Billetera
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. VISTA PAGO GUARANÍES (PYG) CON DATOS BANCARIOS */}
                {metodoPago === "pyg" && (
                  <div className="bg-white border-2 border-zinc-900 p-4 rounded-xl animate-in slide-in-from-bottom-4 duration-300">
                    <div className="text-center">
                      <p className="text-[10px] font-black uppercase mb-3 tracking-tighter">Transferencia Bancaria <span className="text-zinc-400">(Paraguay)</span></p>
                      
                      {/* ESPACIO PARA EL QR DEL BANCO */}
                      <div className="flex justify-center mb-4">
                        <div className="w-28 h-28 border-2 border-dashed border-zinc-300 rounded bg-zinc-50 flex items-center justify-center">
                          {/* NOTA: Cuando tengas la imagen, reemplaza este <span> por la etiqueta <img src="/qr-banco.png" /> */}
                          <span className="text-[10px] font-bold text-zinc-400 text-center uppercase p-2">Espacio para QR Bancario</span>
                        </div>
                      </div>

                      {/* DATOS BANCARIOS */}
                      <div className="bg-zinc-100 p-3 rounded text-[10px] font-mono mb-4 text-zinc-700 text-left border border-zinc-200">
                        <div className="mb-2">
                          <p className="font-black text-blue-700 uppercase">Ueno Bank</p>
                          <p>Caja de ahorro No. 20588348</p>
                        </div>
                        <div className="border-t border-zinc-200 pt-2 mb-2">
                          <p className="font-black text-blue-700 uppercase">Banco Interfisa</p>
                          <p>Caja de ahorro Nº: 259080186</p>
                        </div>
                        <div className="border-t border-zinc-200 pt-2 text-[9px]">
                          <p><span className="font-bold">Titular:</span> Metal mad e.a.s</p>
                          <p><span className="font-bold">RUC:</span> 80135751-9</p>
                        </div>
                      </div>

                      {/* BOTÓN WHATSAPP DINÁMICO */}
                      <a 
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] text-white py-3 rounded-lg text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-lg"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.196.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        Enviar Comprobante
                      </a>
                    </div>
                  </div>
                )}

                {/* 3. VISTA PAGO INTERNACIONAL (BRL o VES) */}
                {(metodoPago === "brl" || metodoPago === "ves") && (
                   <div className="bg-white border-2 border-zinc-900 p-4 rounded-xl animate-in slide-in-from-bottom-4 duration-300">
                     <div className="text-center">
                       <p className="text-[10px] font-black uppercase mb-3 tracking-tighter">Liquidación Internacional</p>
                       <p className="text-xs text-zinc-500 mb-4 font-medium">Por favor, contáctate con uno de nuestros asesores para coordinar los datos de transferencia SWIFT o métodos locales en tu país.</p>
                       <a 
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#25D366] text-white py-3 rounded-lg text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                        >
                          Contactar a un Asesor
                        </a>
                     </div>
                   </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <p className="text-center text-[10px] text-zinc-400 mt-6 font-bold uppercase tracking-widest">Metal Mad EAS © 2026 - Paraguay</p>
    </div>
  );
}
