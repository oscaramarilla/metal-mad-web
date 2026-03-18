import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 🧠 EL CEREBRO SEO OPTIMIZADO: Para Google Ads y Búsqueda Orgánica
export const metadata: Metadata = {
  title: "Fábrica de Mobiliario Escolar Inyectado en Paraguay | Metal Mad",
  description: "Fábrica directa de pupitres escolares inyectados y mesas en Paraguay. Capacidad industrial para colegios, universidades y licitaciones. Representantes exclusivos Oriplast.",
  keywords: ["mobiliario escolar paraguay", "pupitre escolar", "mesas y sillas para alumnos", "muebles para colegio", "fábrica mobiliario escolar", "licitaciones MEC"],
  openGraph: {
    title: "Fábrica de Mobiliario Escolar en Paraguay | Metal Mad",
    description: "Equipamiento industrial para colegios e instituciones en Paraguay con capacidad de entrega en volumen.",
    url: "https://metalmadeas.com",
    siteName: "Metal Mad E.A.S.",
    images: [
      {
        url: "https://metalmadeas.com/productos/pupitre.webp",
        width: 1200,
        height: 630,
        alt: "Pupitre escolar inyectado de alta resistencia fabricado por Metal Mad",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
};

export default function Home() {
  const whatsappMsg = "Hola Metal Mad. Vengo de su página web y necesito solicitar un presupuesto corporativo/licitación para mi institución.";

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20">
      
      {/* 🚀 1. HERO SECTION: El Martillazo de Autoridad (Fábrica Real) */}
      <section className="relative bg-white pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Fabricación Nacional - Calidad Industrial
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-blue-950 leading-[1.1] mb-6 tracking-tight">
              Infraestructura Educativa de <span className="text-blue-600">Alto Rendimiento</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-zinc-600 mb-8 leading-relaxed max-w-xl">
              Somos la fábrica líder en mobiliario inyectado. <strong className="text-zinc-900">Capacidad de producción para grandes volúmenes</strong>, entrega inmediata en líneas estándar y cumplimiento estricto de las fichas técnicas del MEC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/595982451828?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-black py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-yellow-400/50 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
                </svg>
                Solicitar Presupuesto Corporativo
              </a>
              <Link href="/Mobiliario" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center text-lg text-center">
                Ver Catálogo Técnico
              </Link>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-zinc-500">
              <span className="flex items-center gap-1">✅ Stock Permanente</span>
              <span className="flex items-center gap-1">✅ Garantía de Fábrica</span>
              <span className="flex items-center gap-1">✅ Envíos a todo el país</span>
            </div>
          </div>

          {/* Imagen Hero - Demostrando el producto real */}
          <div className="relative z-10 w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-zinc-100">
             <Image 
                src="/productos/pupitre.webp" 
                alt="Fábrica de Pupitres Escolares en Paraguay - Metal Mad"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white">
                <p className="text-xs font-bold text-blue-900 uppercase">Línea Iso ORIPLAST</p>
                <p className="text-[10px] text-zinc-500 font-medium">Inyectado de Alto Impacto</p>
              </div>
          </div>

        </div>
        {/* Elemento de diseño de fondo */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 -z-10"></div>
      </section>

      {/* 🏭 2. LOS 4 PILARES DE AUTORIDAD (Volumen y Capacidad) */}
      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-lg font-black text-blue-950 mb-2">Planta Industrial Propia</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Capacidad de respuesta ágil para licitaciones y pedidos de 100 a 5,000 unidades.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <div className="text-3xl mb-4">🚚</div>
              <h3 className="text-lg font-black text-blue-950 mb-2">Logística Integrada</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Servicio de entrega, distribución y armado en instituciones educativas de todo el país.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-black text-blue-950 mb-2">Normas Oficiales MEC</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Dimensiones y estructuras diseñadas bajo las especificaciones técnicas oficiales del Ministerio.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-950 text-[10px] font-black px-2 py-1 rounded-bl-lg">CLAVE</div>
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-lg font-black text-blue-950 mb-2">Cero Mantenimiento</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Polipropileno virgen de alta densidad. Se acabaron las astillas, el lijado y el barniz.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ⚙️ 3. FICHA TÉCNICA REAL (El lenguaje que busca el que compra) */}
      <section className="py-20 bg-zinc-900 text-zinc-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-black text-yellow-400 uppercase tracking-widest mb-3">Especificaciones de Fabricación</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">Construidos para resistir el trato escolar extremo.</h3>
            <p className="text-zinc-400 mb-8 text-lg">
              No vendemos simples sillas. Fabricamos herramientas educativas diseñadas para durar décadas sin generar gastos operativos a la institución.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg mt-1"><span className="w-2 h-2 block bg-blue-500 rounded-full"></span></div>
                <div>
                  <h4 className="text-white font-bold text-lg">Estructura Metálica Reforzada</h4>
                  <p className="text-sm text-zinc-400">Tubo de acero de 7/8" con pared de 1.2mm. Soldadura MIG perimetral de alta penetración.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg mt-1"><span className="w-2 h-2 block bg-blue-500 rounded-full"></span></div>
                <div>
                  <h4 className="text-white font-bold text-lg">Tratamiento Anticorrosivo</h4>
                  <p className="text-sm text-zinc-400">Pintura electrostática en polvo (epoxi) termoconvertible, horneada a 180°C para máxima adherencia.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg mt-1"><span className="w-2 h-2 block bg-blue-500 rounded-full"></span></div>
                <div>
                  <h4 className="text-white font-bold text-lg">Inyección Plástica Premium</h4>
                  <p className="text-sm text-zinc-400">Asiento y respaldo anatómicos inyectados en resina plástica con protección UV. Diseño antipánico sin bordes filosos.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden bg-zinc-800 border border-zinc-700">
             {/* Aquí puedes usar la misma imagen o si tienes otra como un detalle técnico */}
             <Image 
                src="/productos/pupitre.webp" 
                alt="Detalle técnico de pupitre Metal Mad"
                fill
                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
          </div>

        </div>
      </section>

      {/* 💼 4. CALL TO ACTION FINAL B2B */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-6">¿Listo para equipar tu institución?</h2>
          <p className="text-xl text-zinc-600 mb-10">
            Hablemos de volúmenes, plazos de entrega y precios preferenciales de fábrica para tu colegio o universidad.
          </p>
          <a 
            href={`https://wa.me/595982451828?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-blue-600 hover:bg-blue-700 text-white font-black py-5 px-10 rounded-2xl transition-all items-center justify-center gap-3 text-xl shadow-xl hover:shadow-blue-600/30 active:scale-95"
          >
            Cotizar por Volumen Ahora
          </a>
        </div>
      </section>

    </div>
  );
}
