import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centro de Innovación Educativa | Metal Mad",
  description: "Noticias oficiales, guías de licitación y recursos sobre mobiliario escolar de alta ingeniería en Paraguay.",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20 pt-16">
      <div className="max-w-5xl mx-auto px-6">
        
        <header className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Centro de Recursos</span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">Noticias e Innovación Educativa</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            El espacio definitivo para directores de colegios y fabricantes de Paraguay. Descubre normativas, tendencias y tecnología de materiales.
          </p>
        </header>

        {/* CONTENEDOR DE LA GRILLA: Todos los artículos van acá adentro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* ARTÍCULO 1: El Escudo Legal (Linkbuilding hacia Oriplast) */}
          <Link href="/blog/comunicado-oriplast" className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 bg-zinc-900 relative p-6 flex items-end">
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Comunicado Oficial</div>
              <h3 className="text-2xl font-bold text-white leading-tight">Representación Exclusiva de ORIPLAST en Paraguay</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <p className="text-zinc-600 mb-6">Anuncio oficial sobre la distribución de componentes plásticos y las normativas legales (Ley 7021/2022) para licitaciones en el país.</p>
              <span className="text-blue-600 font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                Leer comunicado oficial →
              </span>
            </div>
          </Link>

          {/* ARTÍCULO 2: El Rompe-mercado (Linkbuilding hacia Metal Mad) */}
          <Link href="/blog/adios-madera" className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 bg-blue-900 relative p-6 flex items-end">
              <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Tecnología de Aula</div>
              <h3 className="text-2xl font-bold text-white leading-tight">Adiós a la madera: El futuro del aula es inyectado</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <p className="text-zinc-600 mb-6">Descubre por qué las instituciones líderes están reemplazando los pupitres tradicionales por polipropileno de alta ingeniería.</p>
              <span className="text-blue-600 font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                Leer el artículo completo →
              </span>
            </div>
          </Link>

          {/* ARTÍCULO 3: Guía Licitadores (Linkbuilding B2B) */}
          <Link href="/blog/guia-licitadores" className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300 flex flex-col md:col-span-2">
            <div className="h-48 bg-[#111111] relative p-6 flex items-end">
              <div className="absolute top-4 left-4 bg-yellow-400 text-zinc-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">DNCP y Licitaciones</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">Guía para Licitadores: Evita el rechazo de tu oferta</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <p className="text-zinc-600 mb-6">Conoce por qué las normativas de propiedad intelectual de la nueva Ley de Contrataciones son el principal filtro para proveedores del Estado y cómo asegurar tu adjudicación.</p>
              <span className="text-blue-600 font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                Leer la guía completa →
              </span>
            </div>
          </Link>

          {/* ARTÍCULO 4: Finanzas y ROI (Linkbuilding B2C/Directores) */}
          <Link href="/blog/inversion-vs-gasto" className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300 flex flex-col md:col-span-2">
            <div className="h-48 bg-green-900 relative p-6 flex items-end">
              <div className="absolute top-4 left-4 bg-white text-green-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Finanzas Educativas</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">Inversión vs. Gasto: La verdadera vida útil del mobiliario</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <p className="text-zinc-600 mb-6">Aprende a calcular el Retorno de Inversión (ROI) al equipar tu colegio. Descubre matemáticamente por qué comprar muebles baratos de madera termina siendo un agujero financiero.</p>
              <span className="text-green-600 font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                Aprender a calcular el ROI →
              </span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}



