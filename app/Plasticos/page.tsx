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
  // El precio de la matriz (60-69) es el precio con el 35% de descuento ya aplicado.
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
  
  // Cálculo del ahorro real comparado con el precio de lista (100%)
  const ahorroRealMoneda = (valorMercadoTotal - totalUSDT) * tasaActual;
  
  const monedaSimbolo = metodoPago === "crypto" ? "USDT" : metodoPago === "pyg" ? "Gs." : metodoPago === "brl" ? "R$" : "Bs.";

  const obtenerPlazoEntrega = (cant: number) => {
    if (cant > 300) return "Consultar Planta";
    if (cant > 200) return "Hasta 30 días";
    if (cant > 50) return "21 días hábiles";
    if (cant > 5) return "14 días hábiles";
    return "7 días hábiles";
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
                {Object.keys(tasas).map((key) => (
                  <button key={key} onClick={() => {setMetodoPago(key); setMostrarPago(false);}}
                    className={`p-3 rounded-xl text-xs font-black border-2 transition-all ${metodoPago === key ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-500 border-zinc-100 hover:border-zinc-300"}`}>
                    {key === 'crypto' ? 'USDT (35% OFF)' : key.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black uppercase text-sm tracking-tight">Estado de Cotización</h3>
                <span className="text-[10px] bg-zinc-200 px-2 py-1 rounded font-bold">{obtenerPlazoEntrega(cantidad)}</span>
              </div>

              {/* HOOK: El cuadro de ahorro en verde */}
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
                {/* Decoración visual de fondo */}
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

            {!mostrarPago ? (
              <button onClick={() => setMostrarPago(true)} className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 uppercase text-xs tracking-widest">
                Confirmar Orden y Pagar
              </button>
            ) : metodoPago === "crypto" && (
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
                    className="w-full bg-zinc-900 text-white py-2 rounded-lg text-[10px] font-black uppercase">Copiar Billetera</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-center text-[10px] text-zinc-400 mt-6 font-bold uppercase tracking-widest">Metal Mad EAS © 2026 - Paraguay</p>
    </div>
  );
}
