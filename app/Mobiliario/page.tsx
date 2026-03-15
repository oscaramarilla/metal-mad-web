"use client";

import Link from "next/link";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

export default function MobiliarioPage() {
  // Conectamos con nuestro backend mágico
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll para que el chat siempre muestre el último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20 pt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <header className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Catálogo y Presupuestos
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
            Líneas de Mobiliario Escolar
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Navega por nuestras líneas inyectadas y conversa con nuestro asesor inteligente para asesoría inmediata.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Catálogo Estático */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Más Vendido</span>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Línea Iso ORIPLAST</h3>
              <p className="text-zinc-600 mb-4">Pupitre ergonómico inyectado. Máxima resistencia para alto tránsito con estructura metálica tratada.</p>
              <div className="text-xl font-black text-zinc-900">Gs. 285.000 <span className="text-sm text-zinc-500 font-normal">/ unid.</span></div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">PREMIUM</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Conjuntos STUDENT</h3>
              <p className="text-zinc-600 mb-4">Mesas y sillas separadas segmentadas por Nivel. Disponibles en tapas de MDF, Polipropileno y ABS.</p>
            </div>

            <Link href="/MoviAula" className="text-blue-600 font-bold hover:underline flex items-center gap-2 mt-4">
              🧮 Ir a la Calculadora Avanzada MoviAula →
            </Link>
          </div>

          {/* COLUMNA DERECHA: El Cerebro IA en Acción */}
          <div className="bg-zinc-900 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden flex flex-col h-[500px]">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500"></div>
            
            <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-6">
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-2xl shadow-inner">🤖</div>
              <div>
                <h3 className="font-bold text-white text-lg">Asesor IA (Gemini)</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  En línea y analizando
                </p>
              </div>
            </div>

            {/* Ventana de Chat Dinámica */}
            <div className="flex-1 bg-zinc-950 rounded-xl p-4 overflow-y-auto mb-4 border border-zinc-800 flex flex-col gap-4">
              {/* Mensaje de bienvenida estático */}
              <div className="bg-zinc-800 text-zinc-200 p-4 rounded-2xl rounded-tl-sm w-5/6 text-sm self-start">
                ¡Hola! Soy la IA comercial de Metal Mad. ¿De qué institución nos escribes y qué tipo de mobiliario buscas hoy?
              </div>
              
              {/* Mapeo de mensajes reales de la IA y el Usuario */}
              {messages.map((m) => (
                <div key={m.id} className={`p-4 rounded-2xl text-sm max-w-[85%] ${m.role === 'user' ? 'bg-blue-600 text-white self-end rounded-tr-sm' : 'bg-zinc-800 text-zinc-200 self-start rounded-tl-sm'}`}>
                  {m.content}
                </div>
              ))}
              
              {isLoading && (
                <div className="bg-zinc-800 text-zinc-400 p-4 rounded-2xl rounded-tl-sm w-1/2 text-xs self-start animate-pulse">
                  Escribiendo...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input interactivo conectado al motor */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input 
                value={input}
                onChange={handleInputChange}
                type="text" 
                placeholder="Escribe tu consulta aquí..." 
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading || !input} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-colors disabled:opacity-50">
                Enviar
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
