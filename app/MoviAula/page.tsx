import { Metadata } from "next";

// 🧠 CEREBRO SEO: MoviAula y aulas modernas
export const metadata: Metadata = {
  title: "MoviAula | Sistema Inteligente de Mobiliario Escolar",
  description: "MoviAula es nuestro concepto de aula moderna. Integramos mobiliario escolar ergonómico y dinámico para mejorar la concentración y el aprendizaje en Paraguay.",
  keywords: ["MoviAula", "sistema inteligente de mobiliario", "aula moderna", "muebles escolares dinámicos", "innovación educativa Paraguay"],
};

export default function MoviAulaPage() {
  return (
    <div className="flex flex-col items-center font-sans w-full bg-zinc-100 min-h-screen text-zinc-900 pb-20">
      
      <header className="w-full max-w-4xl px-6 pt-12 lg:pt-20 pb-12 text-center">
        <span className="text-sm font-bold tracking-wider text-red-600 uppercase mb-4 block">
          Innovación Educativa
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-blue-800 mb-6">
          MoviAula: El Aula en Movimiento
        </h1>
        <p className="text-lg sm:text-xl leading-8 text-zinc-700 max-w-3xl mx-auto">
          La educación cambió, y los muebles rígidos quedaron en el pasado. MoviAula es nuestro sistema inteligente de mobiliario escolar diseñado para crear espacios de aprendizaje dinámicos, colaborativos y altamente funcionales.
        </p>
      </header>

      <section className="w-full max-w-5xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Trabajo Colaborativo</h3>
          <p className="text-zinc-600">Mesas y sillas modulares que se agrupan fácilmente para trabajos en equipo o debates, adaptándose a la metodología del profesor.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Ergonomía Activa</h3>
          <p className="text-zinc-600">Mobiliario que permite a los estudiantes mantener una postura saludable, reduciendo la fatiga durante largas jornadas de estudio.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Optimización de Espacio</h3>
          <p className="text-zinc-600">Diseños apilables y ligeros (sin perder la resistencia del metal) para despejar el aula en minutos cuando sea necesario.</p>
        </div>
      </section>

      <section className="mt-10">
        <a 
          href="https://wa.me/595982451828?text=Hola,%20me%20interesa%20implementar%20el%20sistema%20MoviAula%20en%20mi%20institución." 
          target="_blank"
          rel="noopener noreferrer"
          title="Cotizar sistema MoviAula"
          className="rounded-md bg-blue-700 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-blue-800"
        >
          Asesoramiento para Colegios
        </a>
      </section>
    </div>
  );
}
