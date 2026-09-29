import { Metadata } from "next";
import Link from "next/link";
import DiagnosticoForm from "./DiagnosticoForm";

const URL = "https://metalmadeas.com/pinturaelectro";

export const metadata: Metadata = {
  title: "Recuperación de Mobiliario Metálico por Lotes en Paraguay | PinturaElectro",
  description:
    "Reparamos y repintamos con pintura electrostática lotes de 30 a 500 sillas, mesas y estructuras metálicas. Entregas por tandas para empresas e instituciones de Paraguay. Solicite el diagnóstico de su lote.",
  keywords: [
    "pintura electrostática paraguay",
    "restauración de sillas metálicas",
    "pintura en polvo asunción",
    "recuperación de mobiliario escolar",
    "reparación de mobiliario metálico",
    "renovar mobiliario empresa",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Recuperamos mobiliario metálico por lotes | PinturaElectro",
    description: "Reparación, pintura electrostática y entregas programadas para empresas e instituciones de Paraguay.",
    url: URL,
    siteName: "Metal Mad E.A.S.",
    locale: "es_PY",
    type: "website",
  },
};

const PASOS = [
  ["Clasificación", "Cada pieza se clasifica como recuperable, reparable o reemplazable antes de cotizar."],
  ["Muestra de color", "Aprobación de una muestra en blanco, negro o el color seleccionado."],
  ["Reparación metalúrgica", "Soldadura, enderezado y normalización de estructuras."],
  ["Preparación superficial", "Limpieza, remoción de óxido y fosfatizado."],
  ["Pintura electrostática", "Aplicación de pintura en polvo con carga electrostática."],
  ["Curado en horno", "Horneado a 180 °C para máxima adherencia y dureza."],
  ["Control de calidad", "Revisión de espesor, adherencia y terminación por tanda."],
  ["Entregas por tandas", "El cliente sigue operando mientras se procesa el resto del lote."],
  ["Informe fotográfico", "Registro del antes y después de cada tanda entregada."],
  ["Garantía escrita", "Garantía de adherencia de la pintura por escrito."],
];

const NIVELES = [
  ["Electro", "Preparación superficial y pintura electrostática de la estructura."],
  ["Renova", "Pintura más reparaciones y normalización metalúrgica."],
  ["Integral", "Metalurgia, pintura, carpintería, tapizado y logística."],
];

const TIPOS = [
  "Sillas y mesas de comedor, cantina o evento",
  "Pupitres y mobiliario escolar",
  "Sillas y escritorios de oficina",
  "Estanterías y racks metálicos",
  "Mobiliario de hospitales y clínicas",
  "Estructuras y piezas industriales",
];

const FAQ = [
  [
    "¿Cuál es el lote mínimo?",
    "Trabajamos por lotes a partir de 30 piezas. Para cantidades menores evaluamos la viabilidad caso por caso.",
  ],
  [
    "¿Pintar la estructura incluye restaurar todo el mueble?",
    "No. La pintura cubre la estructura metálica. Soldaduras, enderezado, sustitución de piezas, tapas, tapizado y logística se cotizan por separado según el diagnóstico.",
  ],
  [
    "¿Tengo que detener mi operación?",
    "No. Programamos entregas por tandas para que su empresa o institución siga funcionando mientras procesamos el resto del lote.",
  ],
  [
    "¿Cómo se paga?",
    "50% de anticipo para iniciar y el saldo proporcional contra cada tanda terminada. El plazo corre desde el anticipo, la aprobación del color y la recepción del material.",
  ],
  [
    "¿Qué es el Lote Cero?",
    "Un lote piloto pagado para validar color, terminación y proceso. Su costo se descuenta si aprueba el proyecto completo.",
  ],
];

export default function PinturaElectro() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${URL}#renovalote`,
        name: "RenovaLote: recuperación de mobiliario metálico por lotes",
        serviceType: "Reparación y pintura electrostática de mobiliario metálico",
        url: URL,
        areaServed: { "@type": "Country", name: "Paraguay" },
        provider: {
          "@type": "Organization",
          name: "PinturaElectro",
          parentOrganization: { "@type": "LocalBusiness", "@id": "https://metalmadeas.com", name: "Metal Mad E.A.S." },
          telephone: "+595982451828",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="-mx-6 -my-12 min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. HERO */}
      <section className="bg-zinc-950 px-6 pt-20 pb-16 text-white lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            PinturaElectro · Unidad de recuperación de Metal Mad
          </div>
          <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight lg:text-6xl">
            Recuperamos mobiliario metálico <span className="text-amber-400">por lotes</span>
          </h1>
          <p className="mb-4 max-w-3xl text-lg text-zinc-300 lg:text-xl">
            Reparación, pintura electrostática y entregas programadas para empresas e instituciones de Paraguay.
          </p>
          <p className="mb-10 max-w-3xl text-lg font-bold text-white">
            Renueve entre 30 y 500 sillas, mesas o estructuras sin comprar mobiliario nuevo ni detener su operación.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#diagnostico" className="rounded-xl bg-amber-500 px-8 py-4 text-center text-lg font-black text-zinc-950 shadow-lg transition-all hover:bg-amber-400 active:scale-95">
              Cotizar mi lote
            </a>
            <a href="#caso" className="rounded-xl border border-zinc-600 px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:border-amber-400 hover:text-amber-400">
              Ver caso de 400 sillas
            </a>
          </div>
        </div>
      </section>

      {/* 2. BARRA DE PRUEBA */}
      <section className="border-b border-zinc-200 bg-white px-6 py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center lg:grid-cols-4">
          {[
            ["+500", "piezas en un solo proyecto"],
            ["Por tandas", "sin detener su operación"],
            ["180 °C", "curado en horno"],
            ["Garantía", "escrita de adherencia"],
          ].map(([n, t]) => (
            <div key={n}>
              <p className="text-2xl font-black text-zinc-950 lg:text-3xl">{n}</p>
              <p className="text-sm text-zinc-500">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CASO PRINCIPAL */}
      <section id="caso" className="scroll-mt-24 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-amber-600">Caso principal</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight lg:text-4xl">
            Cómo recuperamos cientos de muebles sin detener la operación del cliente
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["Volumen", "Hasta aproximadamente 400 sillas y 110 mesas en un mismo proyecto."],
              ["Proceso", "Clasificación, reparación, fosfatizado, pintura electrostática y curado en horno."],
              ["Entrega", "Tandas programadas para que el cliente siguiera operando durante todo el trabajo."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-black">{t}</h3>
                <p className="text-zinc-600">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-zinc-600">
            También procesamos lotes de más de 110 estructuras solo con pintura metálica, y atendemos a clientes industriales de forma recurrente con corte, soldadura, fosfatizado, pintura y horno.
          </p>
        </div>
      </section>

      {/* 4. CÓMO FUNCIONA RENOVALOTE */}
      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-amber-600">Sistema RenovaLote™</p>
          <h2 className="mb-10 text-3xl font-black tracking-tight lg:text-4xl">Un proceso industrial, no una pintura suelta</h2>
          <ol className="grid gap-4 sm:grid-cols-2">
            {PASOS.map(([t, d], i) => (
              <li key={t} className="flex gap-4 rounded-2xl border border-zinc-200 p-5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-950 font-black text-amber-400">{i + 1}</span>
                <div>
                  <h3 className="font-black">{t}</h3>
                  <p className="text-sm text-zinc-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. LOTE CERO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-amber-500 p-8 text-zinc-950 lg:p-12">
          <h2 className="mb-4 text-3xl font-black tracking-tight">Empiece con el Lote Cero</h2>
          <p className="mb-6 max-w-3xl text-lg">
            Un lote piloto para validar color, terminación y proceso con sus propias piezas. Si aprueba el proyecto completo, el costo del Lote Cero se descuenta del total.
          </p>
          <a href="#diagnostico" className="inline-block rounded-xl bg-zinc-950 px-8 py-4 font-black text-white transition-colors hover:bg-zinc-800">
            Cotizar mi lote
          </a>
        </div>
      </section>

      {/* 6. NIVELES DE INTERVENCIÓN */}
      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-black tracking-tight lg:text-4xl">Niveles de intervención</h2>
          <p className="mb-10 max-w-3xl text-zinc-600">
            El nivel se define después del diagnóstico. Pintar una estructura no equivale a restaurar el producto completo: soldaduras, enderezado, sustitución de piezas, tapas, tapizado y logística se cotizan por separado.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {NIVELES.map(([t, d]) => (
              <div key={t} className="rounded-2xl border-2 border-zinc-200 p-6">
                <h3 className="mb-2 text-2xl font-black">{t}</h3>
                <p className="text-zinc-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIPOS Y 8. RESTAURAR VS REEMPLAZAR */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-black tracking-tight">Mobiliario que recuperamos</h2>
            <ul className="space-y-3">
              {TIPOS.map((t) => (
                <li key={t} className="flex gap-3 text-zinc-700">
                  <span className="font-black text-amber-600">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-black tracking-tight">Restaurar frente a reemplazar</h2>
            <ul className="space-y-4 text-zinc-700">
              <li><strong className="text-zinc-950">Menor inversión:</strong> se conserva la estructura metálica, que es la parte más costosa del mueble.</li>
              <li><strong className="text-zinc-950">Sin esperas de importación:</strong> el mobiliario vuelve por tandas, sin depender de stock nuevo.</li>
              <li><strong className="text-zinc-950">Más años de vida útil:</strong> la pintura en polvo curada en horno protege contra óxido y rayones.</li>
              <li><strong className="text-zinc-950">Decisión con datos:</strong> el diagnóstico compara el costo de restaurar contra el de reponer cada tipo de pieza.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. PROCESO TÉCNICO Y 10. CONDICIONES */}
      <section className="bg-zinc-950 px-6 py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-black tracking-tight">Proceso técnico y garantía</h2>
            <p className="text-zinc-300">
              Pintura electrostática en polvo termoconvertible, aplicada sobre superficie fosfatizada y curada en horno a 180 °C para máxima adherencia. Cada tanda pasa control de calidad y se entrega con informe fotográfico y garantía escrita de adherencia.
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-black tracking-tight">Condiciones comerciales</h2>
            <ul className="space-y-2 text-zinc-300">
              <li>50% de anticipo para iniciar.</li>
              <li>Saldo proporcional contra cada tanda terminada.</li>
              <li>Color aprobado antes de producir.</li>
              <li>Plazo contado desde anticipo, aprobación y recepción del material.</li>
              <li>Reparaciones no visibles se cotizan como adicionales.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11. FORMULARIO DE DIAGNÓSTICO */}
      <section id="diagnostico" className="scroll-mt-24 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl sm:p-10">
          <h2 className="mb-2 text-3xl font-black tracking-tight">Solicitar diagnóstico de mi lote</h2>
          <p className="mb-8 text-zinc-600">Complete los datos y le respondemos con una estimación para comparar restauración frente a reposición.</p>
          <DiagnosticoForm />
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-black tracking-tight">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {FAQ.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-zinc-200 p-5">
                <summary className="cursor-pointer font-black">{q}</summary>
                <p className="mt-3 text-zinc-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. RESPALDO METAL MAD */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight">Respaldo industrial de Metal Mad</h2>
          <p className="mx-auto mb-8 max-w-3xl text-zinc-600">
            PinturaElectro es la unidad de recuperación de Metal Mad E.A.S., fábrica paraguaya de mobiliario escolar y administrativo con experiencia en proyectos institucionales de gran volumen.
          </p>
          <Link href="/" className="font-bold text-blue-700 underline-offset-4 hover:underline">
            Conocer Metal Mad
          </Link>
        </div>
      </section>
    </div>
  );
}
