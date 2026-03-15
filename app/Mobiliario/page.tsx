import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 🧠 SEO DE AUTORIDAD B2B: Posicionándonos por encima de la competencia de madera
export const metadata: Metadata = {
  title: "Mobiliario Escolar Inyectado MEC | Catálogo Directo de Fábrica | Metal Mad",
  description: "Explora nuestra línea de pupitres escolares inyectados y conjuntos Student. Diseño ergonómico, cero mantenimiento y durabilidad certificada industria nacional. Cotización directa vía WhatsApp.",
  keywords: ["pupitres escolares paraguay", "mobiliario escolar inyectado", "sillas mecanicas mec", "conjunto student metal mad", "fabrica muebles colegios paraguay"],
};

export default function MobiliarioPage() {
  // Datos de los productos maestros para el catálogo
  const productos = [
    {
      id: 1,
      nombre: "Pupitre Iso ORIPLAST (Línea MEC)",
      badge: "El Nuevo Estándar",
      descripcion: "El favorito de las licitaciones. Asiento y respaldo inyectados en polipropileno de alto impacto. Cero mantenimiento, anti-astillas y resistente a la humedad. Estructura metálica reforzada con tratamiento epoxi.",
      precio: "285.000",
      imagen: "/productos/1.webp", // FOTOS REALES DE TU SHOWROOM
      waMsg: "Hola Metal Mad, quiero cotizar el Pupitre Iso Oriplast (Línea MEC)."
    },
    {
      id: 2,
      nombre: "Conjunto STUDENT (Nivel Medio/Superior)",
      badge: "Premium B2B",
      descripcion: "Diseño moderno y ergonómico. Mesa individual y silla separada. Estructura metálica ovalada de alta resistencia. Tapas inyectadas con porta-lápices integrado y cantos redondeados de seguridad.",
      precio: "Precio Especial Volumen",
      imagen: "/productos/2.webp",
      waMsg: "Hola Metal Mad, me interesa cotizar el Conjunto STUDENT B2B."
    },
    // Añade aquí más productos inyectados si tienes fotos limpias
  ];

  return (
    <div className="min-h-screen bg-zinc-50 pb-24 pt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🍞 Migas de pan para el SEO */}
        <nav className="text-sm text-zinc-500 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-600">Inicio</Link> &gt; 
          <span className="text-zinc-900 ml-2">Catálogo de Mobiliario</span>
        </nav>

        {/* 🎯 HEADER DE AUTORIDAD */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <span className="bg-blue-100 text-blue-800 font-black tracking-widest uppercase text-xs px-4 py-2 rounded-full mb-6 inline-block">
            Industria Nacional B2B
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
            Mobiliario Escolar Inyectado: <br className="hidden sm:block" /> El Nuevo <span className="text-blue-600">Estándar</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Elimina el mantenimiento costoso y las astillas peligrosas de la madera. Nuestra línea de polipropileno inyectado ofrece ergonomía certificada, durabilidad extrema y diseño moderno para instituciones educativas de primer nivel en todo Paraguay.
          </p>
        </header>

        {/* 📦 GRILLA DE CATÁLOGO MAESTRO (Web Responsive Perfecto) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {productos.map((prod) => (
            <div key={prod.id} className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200 flex flex-col group overflow-hidden">
              
              {/* Contenedor de la Imagen con Aspect Ratio Perfecto */}
              <div className="relative aspect-[4/3] w-full mb-8 rounded-2xl overflow-hidden border border-zinc-100 shadow-inner bg-zinc-100">
                <Image 
                  src={prod.imagen} 
                  alt={`Metal Mad - ${prod.nombre}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={prod.id === 1} // Prioridad de carga para el primer producto (SEO)
                />
                <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-950 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                  {prod.badge}
                </span>
              </div>

              {/* Detalles Técnicos */}
              <h2 className="text-2xl font-black text-blue-950 mb-3">{prod.nombre}</h2>
              <p className="text-zinc-600 text-sm mb-6 flex-1 leading-relaxed">
                {prod.descripcion}
              </p>

              {/* Sección de Precio y CTA Directo */}
              <div className="border-t border-zinc-100 pt-6 mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-3xl font-black text-zinc-900">
                  {prod.precio.includes('.') ? (
                    <>
                      <span className="text-base text-zinc-500 font-normal">Gs.</span> {prod.precio}
                    </>
                  ) : (
                    <span className="text-2xl">{prod.precio}</span>
                  )}
                </div>
                
                {/* 🔥 LLAMADA A LA ACCIÓN (CTA) AGRESIVA: Cotizar directo al WhatsApp con mensaje pre-armado */}
                <a 
                  href={`https://wa.me/595982451828?text=${encodeURIComponent(prod.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all text-center flex items-center justify-center gap-2 active:scale-95 shadow-lg group-hover:shadow-blue-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.5-27.5-16.4-14.7-27.5-32.8-30.7-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z"/>
                  </svg>
                  Cotizar Directo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🛡️ BANNER DE CIERRE: Por qué Metal Mad Inyectado */}
        <section className="bg-white rounded-[2rem] p-10 md:p-16 text-center text-blue-950 border border-zinc-200 shadow-lg mt-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 rounded-full -mr-20 -mt-20 opacity-30"></div>
          <h2 className="text-3xl font-black mb-8 relative z-10">La Ventaja del Polipropileno de Alta Resistencia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
            {[
              { titulo: "Cero Mantenimiento", desc: "No requiere lijado, pintura ni barniz. Se limpia fácilmente con agua y jabón." },
              { titulo: "Seguridad Anti-Astillas", desc: "La madera se astilla y lastima. El plástico inyectado tiene bordes suaves y seguros." },
              { titulo: "Resistencia Extrema", desc: "Impermeable a la humedad, resiste golpes de alto impacto y el trato escolar diario." },
            ].map((beneficio, i) => (
              <div key={i} className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <div className="text-blue-600 font-bold mb-3 text-lg">{beneficio.titulo}</div>
                <p className="text-zinc-600 text-sm leading-relaxed">{beneficio.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔗 ENLACE A CALCULADORA MOVIAULA: Como herramienta complementaria */}
        <div className="text-center mt-16">
          <p className="text-zinc-600 mb-4">¿Necesitas un presupuesto rápido para varias aulas?</p>
          <Link href="/MoviAula" className="text-blue-600 font-black hover:underline group flex items-center justify-center gap-2">
            🧮 Usar la Calculadora MoviAula →
          </Link>
        </div>

      </div>
    </div>
  );
}
