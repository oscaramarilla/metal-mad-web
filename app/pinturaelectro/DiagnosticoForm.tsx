"use client";

import { useState } from "react";

const WHATSAPP = "595982451828";

const TIPOS = [
  "Sillas",
  "Mesas",
  "Pupitres escolares",
  "Estanterías",
  "Mobiliario de oficina",
  "Estructuras industriales",
];

const REPARACIONES = [
  "Óxido",
  "Soldaduras rotas",
  "Estructuras dobladas",
  "Piezas faltantes",
  "Tapas o tapizado",
];

const CANTIDADES = ["Menos de 30", "30 a 100", "100 a 250", "250 a 500", "Más de 500"];

export default function DiagnosticoForm() {
  const [tipos, setTipos] = useState<string[]>([]);
  const [reparaciones, setReparaciones] = useState<string[]>([]);
  const [cantidad, setCantidad] = useState("");

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lineas = [
      "Hola PinturaElectro, solicito el diagnóstico de mi lote (RenovaLote).",
      "",
      `Empresa: ${data.get("empresa")}`,
      `Ubicación: ${data.get("ubicacion")}`,
      `Contacto: ${data.get("contacto")}`,
      `Tipo de mobiliario: ${tipos.join(", ") || "Sin especificar"}`,
      `Cantidad aproximada: ${cantidad}`,
      `Reparaciones visibles: ${reparaciones.join(", ") || "Ninguna indicada"}`,
      `Color deseado: ${data.get("color")}`,
      `Plazo: ${data.get("plazo") || "Flexible"}`,
      `Retiro y entrega: ${data.get("logistica")}`,
      "",
      "Envío las fotografías del lote a continuación.",
    ];
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  const input =
    "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200";
  const chip = (active: boolean) =>
    `cursor-pointer rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
      active ? "border-amber-500 bg-amber-500 text-zinc-950" : "border-zinc-300 bg-white text-zinc-700 hover:border-amber-400"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-bold text-zinc-700">Empresa o institución *</span>
          <input name="empresa" required className={input} placeholder="Ej: Colegio San José" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-bold text-zinc-700">Ciudad *</span>
          <input name="ubicacion" required className={input} placeholder="Ej: Asunción" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-bold text-zinc-700">Nombre y teléfono de contacto *</span>
          <input name="contacto" required className={input} placeholder="Ej: María López, 0981 000 000" />
        </label>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-bold text-zinc-700">Tipo de mobiliario</legend>
        <div className="flex flex-wrap gap-2">
          {TIPOS.map((t) => (
            <button type="button" key={t} aria-pressed={tipos.includes(t)} onClick={() => toggle(tipos, setTipos, t)} className={chip(tipos.includes(t))}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-bold text-zinc-700">Cantidad aproximada de piezas *</legend>
        <div className="flex flex-wrap gap-2">
          {CANTIDADES.map((c) => (
            <label key={c} className={chip(cantidad === c)}>
              <input type="radio" name="cantidad" value={c} required checked={cantidad === c} onChange={() => setCantidad(c)} className="sr-only" />
              {c}
            </label>
          ))}
        </div>
        {cantidad === "Menos de 30" && (
          <p className="mt-2 text-sm text-amber-700">
            Trabajamos por lotes. Para menos de 30 piezas evaluamos la viabilidad caso por caso.
          </p>
        )}
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-bold text-zinc-700">Reparaciones visibles</legend>
        <div className="flex flex-wrap gap-2">
          {REPARACIONES.map((r) => (
            <button type="button" key={r} aria-pressed={reparaciones.includes(r)} onClick={() => toggle(reparaciones, setReparaciones, r)} className={chip(reparaciones.includes(r))}>
              {r}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1 block text-sm font-bold text-zinc-700">Color deseado</span>
          <select name="color" className={input} defaultValue="Negro">
            <option>Negro</option>
            <option>Blanco</option>
            <option>Gris</option>
            <option>Otro color (RAL a definir)</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-bold text-zinc-700">Plazo requerido</span>
          <input name="plazo" type="date" className={input} />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-bold text-zinc-700">¿Necesita retiro y entrega?</span>
          <select name="logistica" className={input} defaultValue="Sí">
            <option>Sí</option>
            <option>No, lo llevamos nosotros</option>
          </select>
        </label>
      </div>

      <p className="text-sm text-zinc-500">
        Al enviar se abre WhatsApp con sus datos completos. Adjunte ahí de 3 a 5 fotografías del mobiliario para acelerar el diagnóstico.
      </p>

      <button type="submit" className="w-full rounded-xl bg-amber-500 px-8 py-4 text-lg font-black text-zinc-950 shadow-lg transition-all hover:bg-amber-400 active:scale-95 sm:w-auto">
        Solicitar diagnóstico de mi lote
      </button>
    </form>
  );
}
