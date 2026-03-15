import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 🧠 SEO DE AUTORIDAD: Para que Google sepa que aquí hay pruebas reales
export const metadata: Metadata = {
  title: "Showroom y Trabajos Entregados | Metal Mad Paraguay",
  description: "Explora nuestra galería de pupitres escolares y mobiliario inyectado entregado a colegios e instituciones en todo Paraguay. Capacidad industrial demostrada.",
  keywords: ["showroom mobiliario escolar", "entregas de pupitres paraguay", "trabajos metal mad", "colegios equipados", "fábrica de sillas escolares"],
};

export default function Showroom() {
  // ⚙️ TRUCO CTO: Cambia este número según la cantidad de fotos que subas a public/showroom/
  const cantidadDeFotos = 19; 
  
  // Genera automáticamente las rutas: /showroom/1.webp, /showroom/2.webp...
  const fotos = Array.from({ length: cantidadDeFotos }, (_, i) => `/showroom/${i + 1}.webp`);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🍞 Migas de pan */}
        <nav className="text-sm text-zinc-500 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-600">Inicio</Link> &gt; 
          <span className="text-zinc-900 ml-2">Showroom y Entregas</span>
        </nav>

        {/* 🎯 HEADER DE LA GALERÍA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-800 font-black tracking-widest uppercase text-xs px-4 py-2 rounded-full mb-6 inline-block">
            Nuestra Trayectoria
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-6 leading-tight">
            Nuestros Muebles en <span className="text-blue-600">Acción</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Más de una década equipando instituciones. Detrás de cada pupitre inyectado hay logística, capacidad industrial y el compromiso de transformar las aulas del país.
          </p>
        </div>

        {/* 📸 GRILLA MASONRY DE FOTOS (Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {fotos.map((src, index) => (
            <div 
              key={index} 
              className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-200 border border-zinc-200 shadow-sm group"
            >
              <Image 
                src={src}
                alt={`Entrega de mobiliario escolar Metal Mad - Foto ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={index < 4} // Da prioridad de carga solo a las primeras 4 fotos
              />
              {/* Overlay oscuro al pasar el mouse */}
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* 🛡️ BANNER CALL TO ACTION */}
        <div className="bg-zinc-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
          <h2 className="text-3xl font-black mb-6">¿Quieres ver esta calidad en tu institución?</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto text-lg">
            Nuestra fábrica tiene la capacidad operativa para producir, ensamblar y despachar grandes volúmenes a cualquier punto del país. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/595982451828?text=Hola%20Metal%20Mad,%20estuve%20viendo%20el%20showroom%20de%20entregas%20en%20la%20web%20y%20quiero%20cotizar%20un%20proyecto%20institucional." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black py-4 px-8 rounded-xl transition-transform hover:scale-105 shadow-lg"
            >
              Cotizar mi Proyecto
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
