import Image from "next/image";
import { Metadata } from "next";

// 🧠 1. EL CEREBRO SEO: Esto es lo que lee Google antes de mostrar la página
export const metadata: Metadata = {
  title: "Fábrica de Mobiliario Escolar en Paraguay | Pupitres y Mesas",
  description: "Fabricantes directos de pupitres escolares, mesas y sillas para alumnos en Paraguay. Capacidad industrial exclusiva para colegios y licitaciones.",
  keywords: ["mobiliario escolar paraguay", "pupitre escolar", "mesas y sillas para alumnos", "muebles para colegio", "fábrica mobiliario B2B"],
};

export default function Home() {
  return (
    <div className="flex flex-col items-center font-sans w-full bg-zinc-100 min-h-screen text-zinc-900">
      
      <main className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-between py-10 lg:py-20 gap-12 px-6">
        
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left lg:w-1/2">
          
          <span className="text-sm font-bold tracking-wider text-red-600 uppercase">
            Fabricación Nacional - Calidad Industrial
          </span>
          
          {/* 🎯 2. EL H1 (TÍTULO PRINCIPAL): La frase más importante para posicionar */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-blue-800">
            Fábrica de Mobiliario Escolar en Paraguay
          </h1>
          
          {/* 🛡️ 3. FILTRO B2B: Atrae colegios, aleja compras de 1 sola silla */}
          <p className="max-w-md text-lg sm:text-xl leading-8 text-zinc-700">
            Diseñamos y fabricamos pupitres, mesas y sillas para alumnos. Producción industrial escalable orientada exclusivamente a equipar colegios, universidades e instituciones.
          </p>
          
          <div className="flex w-full flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            {/* 🤖 4. BOTÓN INTELIGENTE: Visiblemente limpio, pero con SEO oculto (aria-label y title) */}
            <a 
              href="https://wa.me/595982451828?text=Hola,%20represento%20a%20una%20institución%20y%20deseo%20cotizar%20mesas%20y%20sillas%20para%20alumnos." 
              target="_blank"
              rel="noopener noreferrer"
              title="Cotizar mobiliario escolar por WhatsApp"
              aria-label="Solicitar información sobre pupitres escolares al por mayor"
              className="rounded-md bg-yellow-400 px-8 py-4 text-center font-bold text-blue-900 shadow-lg transition-colors hover:bg-yellow-500 hover:scale-105"
            >
              Solicitar Cotización B2B
            </a>
          </div>
        </div>

        {/* Imagen Principal */}
        <div className="lg:w-1/2 flex justify-center w-full">
          <div className="relative w-full max-w-md aspect-[4/3]">
            <Image
              src="/productos/pupitre.jpg"
              alt="Pupitre escolar y silla para alumno fabricado por MetalMadeas en Asunción"
              fill
              className="rounded-xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>

      </main>

      {/* Sección Inferior de Beneficios */}
      <section className="w-full max-w-5xl py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-zinc-300 mt-10 px-6">
        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-2">Resistencia Estructural</h2>
          <p className="text-zinc-700">Estructuras metálicas reforzadas diseñadas para el uso diario e intenso en aulas y colegios.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-2">Capacidad Industrial</h2>
          <p className="text-zinc-700">Volumen de producción escalable para abastecer desde pequeñas remodelaciones hasta licitaciones enteras.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-2">Precios de Fábrica</h2>
          <p className="text-zinc-700">Trato directo sin intermediarios, optimizando el presupuesto de tu institución educativa.</p>
        </div>
      </section>
    </div>
  );
}
