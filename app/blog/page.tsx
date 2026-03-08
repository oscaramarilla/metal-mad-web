import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centro de Innovación Educativa | Metal Mad",
  description: "Noticias oficiales, guías de licitación y recursos sobre mobiliario escolar de alta ingeniería en Paraguay.",
};

// 🧠 AQUÍ ESTÁ LA MAGIA: Tu Mini Base de Datos SEO
// Cuando crees un nuevo artículo, solo agregas un bloque aquí y aparecerá automáticamente.
const blogPosts = [
  {
    slug: "comunicado-oriplast",
    tag: "Comunicado Oficial",
    tagColor: "bg-red-600 text-white",
    bgColor: "bg-zinc-900",
    title: "Representación Exclusiva de ORIPLAST en Paraguay",
    description: "Anuncio oficial sobre la distribución de componentes plásticos y las normativas legales (Ley 7021/2022) para licitaciones en el país.",
    size: "normal" // Ocupa 1 columna
  },
  {
    slug: "adios-madera",
    tag: "Tecnología de Aula",
    tagColor: "bg-yellow-400 text-blue-900",
    bgColor: "bg-blue-900",
    title: "Adiós a la madera: El futuro del aula es inyectado",
    description: "Descubre por qué las instituciones líderes están reemplazando los pupitres tradicionales por polipropileno de alta ingeniería.",
    size: "normal" // Ocupa 1 columna
  },
  {
    slug: "guia-licitadores",
    tag: "DNCP y Licitaciones",
    tagColor: "bg-yellow-400 text-zinc-900",
    bgColor: "bg-[#111111]",
    title: "Guía para Licitadores: Evita el rechazo de tu oferta",
    description: "Conoce por qué las normativas de propiedad intelectual de la nueva Ley de Contrataciones son el principal filtro para proveedores del Estado y cómo asegurar tu adjudicación.",
    size: "grande" // Ocupa 2 columnas
  },
  {
    slug: "inversion-vs-gasto",
    tag: "Finanzas Educativas",
    tagColor: "bg-white text-green-900",
    bgColor: "bg-green-900",
    title: "Inversión vs. Gasto: La verdadera vida útil del mobiliario",
    description: "Aprende a calcular el Retorno de Inversión (ROI) al equipar tu colegio. Descubre matemáticamente por qué comprar muebles baratos de madera termina siendo un agujero financiero.",
    size: "grande" // Ocupa 2 columnas
  }
];

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

        {/* El código "lee" tu base de datos de arriba y dibuja las tarjetas automáticamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`} 
              className={`group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300 flex flex-col ${post.size === 'grande' ? 'md:col-span-2' : ''}`}
            >
              <div className={`h-48 ${post.bgColor} relative p-6 flex items-end`}>
                <div className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${post.tagColor}`}>
                  {post.tag}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{post.title}</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <p className="text-zinc-600 mb-6">{post.description}</p>
                <span className="text-blue-600 font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Leer artículo completo →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
