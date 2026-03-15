import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 🧠 SEO LÁSER: Optimizado para quien busca exactamente este producto
export const metadata: Metadata = {
  title: "Pupitre Escolar Metálico con Tapa Inyectada | Metal Mad Paraguay",
  description: "Fábrica de pupitres escolares metálicos reforzados en Paraguay. Estructura de acero y tapas de polipropileno inyectado de alta durabilidad. Cotiza por volumen.",
  keywords: ["pupitre escolar metálico", "pupitres inyectados Paraguay", "fábrica de sillas escolares", "pupitres para colegio asunción", "mobiliario escolar resistente"],
};

export default function PupitreEscolarMetalico() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 🍞 Breadcrumbs (Migas de pan para el SEO de Google) */}
        <nav className="text-sm text-zinc-500 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-600">Inicio</Link> &gt; 
          <Link href="/Mobiliario" className="hover:text-blue-600 mx-2">Mobiliario</Link> &gt; 
          <span className="text-zinc-900 ml-2">Pupitre Escolar Metálico Inyectado</span>
        </nav>

        {/* 🎯 SECCIÓN HERO (Lo primero que ve el cliente) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Columna Izquierda: Fotos */}
          <div className="bg-white p-6 rounded-3xl shadow-md border border-zinc-200 flex justify-center items-center aspect-square relative">
            {/* Aquí usamos la imagen que ya tienes subida */}
            <Image 
              src="/productos/pupitre.webp" 
              alt="Pupitre Escolar Metálico con Tapa Inyectada Metal Mad" 
              fill
              className="object-contain p-4"
              priority
            />
            <div className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Stock Disponible
            </div>
          </div>

          {/* Columna Derecha: Ventas y Especificaciones */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-4 leading-tight">
              Pupitre Escolar Metálico <span className="text-blue-600">Línea Inyectada</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              El estándar definitivo para aulas de alto tránsito. Olvídate de la madera astillada; combina una estructura de acero reforzado con tapas ergonómicas de polipropileno 100% virgen.
            </p>

            {/* Ficha Técnica Rápida */}
            <ul className="space-y-4 mb-8 w-full bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm text-zinc-700">
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> <strong>Estructura:</strong> Caño de acero estructural con soldadura MIG.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> <strong>Tapa y Asiento:</strong> Polipropileno inyectado (Representación ORIPLAST).
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> <strong>Terminación:</strong> Pintura epoxi horneada anticorrosiva.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> <strong>Ergonomía:</strong> Diseño anatómico que mejora la postura del estudiante.
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href="https://wa.me/595982451828?text=Hola%20Metal%20Mad,%20estoy%20viendo%20el%20Pupitre%20Escolar%20Metálico%20en%20la%20web%20y%20deseo%20una%20cotización%20B2B." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-center font-black py-4 px-6 rounded-xl transition-transform hover:scale-105 shadow-md"
              >
                Cotizar por WhatsApp
              </a>
              <Link 
                href="/MoviAula"
                className="flex-1 bg-blue-900 hover:bg-blue-800 text-white text-center font-bold py-4 px-6 rounded-xl transition-colors shadow-md"
              >
                Calculadora MoviAula
              </Link>
            </div>
          </div>
        </div>

        {/* 🛡️ SECCIÓN DE CONFIANZA: ¿Por qué elegir este modelo? */}
        <div className="bg-zinc-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl my-16">
          <h2 className="text-3xl font-black mb-12">Diseñado para la rentabilidad de tu institución</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-8 rounded-3xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">ROI Superior</h3>
              <p className="text-zinc-400 text-sm">Su vida útil triplica a la de un pupitre tradicional de MDF, reduciendo a cero los costos de mantenimiento anual.</p>
            </div>
            <div className="bg-zinc-800 p-8 rounded-3xl">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Anti-Vandalismo</h3>
              <p className="text-zinc-400 text-sm">Materiales ultra resistentes al rayado, golpes y a la humedad del clima paraguayo.</p>
            </div>
            <div className="bg-zinc-800 p-8 rounded-3xl">
              <div className="text-4xl mb-4">🇵🇾</div>
              <h3 className="text-xl font-bold mb-2">Repuestos Locales</h3>
              <p className="text-zinc-400 text-sm">Al ser fabricantes e inyectar en Paraguay, garantizamos stock de componentes de repuesto los 365 días del año.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
