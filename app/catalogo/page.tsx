import { Metadata } from "next";

// 🧠 CEREBRO SEO: Búsquedas de modelos y catálogos
export const metadata: Metadata = {
  title: "Catálogo de Pupitres Escolares y Mobiliario para Aulas",
  description: "Explora y descarga nuestro catálogo completo de pupitres escolares, mesas y sillas para estudiantes. Fabricación directa en Paraguay.",
  keywords: ["catálogo pupitres escolares", "modelos de pupitres", "muebles escolares modernos", "descargar catálogo mobiliario escolar"],
};

export default function CatalogoPage() {
  return (
    <div className="flex flex-col items-center font-sans w-full bg-zinc-100 min-h-screen text-zinc-900 pb-20">
      
      <header className="w-full max-w-3xl px-6 pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-blue-800 mb-6">
          Nuestro Catálogo Institucional
        </h1>
        <p className="text-lg text-zinc-700 mb-10">
          Explora todos nuestros modelos de sillas, conjuntos bipersonales, pupitres universitarios y estanterías. Diseñados para brindar durabilidad y confort a tu institución.
        </p>

        {/* 📥 BOTÓN DE DESCARGA PDF */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-zinc-200 flex flex-col items-center">
          <svg className="w-16 h-16 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          <h2 className="text-2xl font-bold text-zinc-900 mb-2">Catálogo B2B 2026</h2>
          <p className="text-zinc-600 mb-6">Archivo PDF con medidas, modelos y especificaciones técnicas.</p>
          
          {/* OJO: Aquí le corregimos el nombre para que busque "catalogo.pdf" */}
          <a 
            href="/catalogo.pdf" 
            download="Catalogo_MetalMadeas.pdf"
            className="rounded-md bg-yellow-400 px-8 py-4 font-bold text-blue-900 shadow-lg transition-transform hover:bg-yellow-500 hover:scale-105 flex items-center gap-2"
          >
            Descargar Catálogo (PDF)
          </a>
        </div>
      </header>

      {/* Aquí abajo luego podemos agregar una galería de fotos de los productos */}
      
    </div>
  );
}
