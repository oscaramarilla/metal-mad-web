// @ts-nocheck
"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function MobiliarioPage() {
  // 🧠 USAMOS "onResponse" para detectar si el servidor contestó
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    onResponse: (response) => {
      console.log("Servidor respondió con estatus:", response.status);
    },
    onError: (err) => {
      console.error("Error detectado en el chat:", err);
    }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-zinc-50 pb-20 pt-16 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="flex flex-col gap-6">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-2 font-black italic">Metal Mad E.A.S.</h3>
              <p className="text-zinc-600">Fabricación nacional de alta calidad.</p>
            </div>
            <Link href="/MoviAula" className="text-blue-600 font-bold hover:underline">← Volver a Calculadora</Link>
          </div>

          <div className="bg-zinc-900 rounded-[2.5rem] p-6 shadow-2xl flex flex-col h-[550px] border-4 border-zinc-800">
            {/* VENTANA DE MENSAJES */}
            <div className="flex-1 bg-zinc-950 rounded-2xl p-4 overflow-y-auto mb-4 flex flex-col gap-4 shadow-inner">
              {messages.length === 0 && (
                <div className="bg-zinc-800 text-zinc-200 p-4 rounded-2xl text-sm self-start max-w-[80%]">
                  ¡Hola! Soy la IA de Metal Mad. ¿Qué institución querés cotizar hoy? 🤖
                </div>
              )}
              
              {messages.map((m: any) => (
                <div key={m.id} className={`p-4 rounded-2xl text-sm max-w-[85%] ${m.role === 'user' ? 'bg-blue-600 text-white self-end' : 'bg-zinc-800 text-zinc-200 self-start'}`}>
                  {m.content}
                </div>
              ))}
              
              {isLoading && <div className="text-blue-400 text-xs animate-pulse font-mono">Generando respuesta...</div>}
              
              {error && (
                <div className="text-red-400 text-xs p-3 bg-red-900/30 rounded-xl border border-red-500/50">
                  ⚠️ Error: {error.message}. <br/> Revisá los Logs de Vercel.
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* FORMULARIO */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input 
                value={input}
                onChange={handleInputChange}
                placeholder="Escribí tu mensaje aquí..." 
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50"
              >
                {isLoading ? "..." : "Enviar"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
