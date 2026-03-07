import { Metadata } from "next";
import Image from "next/image";

// 🧠 CEREBRO SEO: Ultra-optimizado para la búsqueda exacta del producto
export const metadata: Metadata = {
  title: "Pupitre Escolar Metálico en Paraguay | Precio de Fábrica",
  description: "Ficha técnica de pupitre escolar metálico. Estructura de acero reforzado, pintura electrostática y tablero de alta resistencia. Venta directa a colegios en Paraguay.",
  keywords: ["pupitre escolar metálico paraguay", "mesa y silla escolar", "fabricante de pupitres", "precio pupitre escolar", "mobiliario educativo metalico"],
};

export default function PupitreEscolarPage() {
  return (
    <div className="flex flex-col items-center font-sans w-full bg-zinc-100 min-h-screen text-zinc-900 pb-20">
      
      {/* 📍 Migas de pan (Breadcrumbs) - Excelente para que Google entienda la estructura */}
      <div className="w-full max-w-5xl px-6 pt-8 pb-4 text-sm text-zinc-500">
        <a href="/" className="hover:text-blue-700 underline">Inicio</a> {'>'} 
        <a href="/Mobiliario" className="hover:text-blue-700 underline ml-2">Mobiliario</a> {'>'} 
        <span className="text-zinc-800 font-semibold ml-2">Pupitre Escolar Metálico</span>
      </div>

      <main className="w-full max-w-5xl px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* COLUMNA IZQUIERDA: Imagen y Ficha Técnica */}
        <div className="flex flex-col gap-8">
          {/* Imagen del Producto */}
          <div className="relative w-full aspect-[4/3] bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
            {/* Reutilizamos tu foto real que ya sabemos que funciona perfecto */}
            <Image
              src="/productos/pupitre.jpg"
              alt="Pupitre escolar metálico fabricado en Paraguay por MetalMadeas"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Ficha Técnica Pura (Lo que pidió el consultor) */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-zinc-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-2">Especificaciones Técnicas</h3>
            <ul className="space-y-4 text-zinc-700">
              <li className="flex justify-between border-b border-zinc-100 pb-2">
                <span className="font-semibold text-zinc-900">Estructura:</span> 
                <span>Caño de acero reforzado (Calibre industrial)</span>
              </li>
              <li className="flex justify-between border-b border-zinc-100 pb-2">
                <span className="font-semibold text-zinc-900">Pintura:</span> 
                <span>Electrostática (Antirrayones y antioxidante)</span>
              </li>
              <li className="flex justify-between border-b border-zinc-100 pb-2">
                <span className="font-semibold text-zinc-900">Tablero / Asiento:</span> 
                <span>MDF de alta densidad / Resina de alto impacto</span>
              </li>
              <li className="flex justify-between border-b border-zinc-100 pb-2">
                <span className="font-semibold text-zinc-900">Ergonomía:</span> 
                <span>Medidas estándar internacionales (Mineduc)</span>
              </li>
              <li className="flex justify-between border-b border-zinc-100 pb-2">
                <span className="font-semibold text-zinc-900">Garantía:</span> 
                <span>Garantía de fábrica contra defectos de soldadura</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COLUMNA DERECHA: Textos SEO y Botón de Venta */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-bold tracking-wider text-red-600 uppercase mb-2">
            Modelo Institucional B2B
          </span>
          
          {/* H1 OBLIGATORIO PARA GOOGLE */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-zinc-900 mb-6">
            Pupitre Escolar Metálico Reforzado
          </h1>
          
          <div className="prose prose-zinc max-w-none text-lg leading-relaxed text-zinc-700 mb-8">
            <p className="mb-4">
              Equipar un aula moderna requiere mobiliario que soporte el uso intenso y continuo. Nuestro <strong>pupitre escolar metálico</strong> está diseñado y fabricado en Paraguay pensando específicamente en las necesidades de escuelas, colegios privados y universidades.
            </p>
            <p className="mb-4">
              A diferencia de las opciones importadas genéricas, nosotros utilizamos estructuras de acero soldadas a nivel industrial. Esto significa cero tambaleos, cero roturas a mitad de año y una <strong>vida útil que maximiza la inversión de tu institución</strong>. 
            </p>
            <p>
              Ya sea que necesites renovar un aula o equipar un pabellón entero, contamos con la capacidad de producción para entregar lotes completos con precios directos de fábrica, sin intermediarios.
            </p>
          </div>

          {/* BOTÓN DE COTIZACIÓN DIRECTA (Aumenta la conversión un 300% como dijo el consultor) */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-4">
            <h4 className="text-lg font-bold text-blue-900 mb-2">¿Necesitas equipar tu colegio?</h4>
            <p className="text-sm text-blue-800 mb-4">Atención exclusiva para compras mayoristas e institucionales. Respuesta en menos de 24 horas.</p>
            <a 
              href="https://wa.me/595982451828?text=Hola,%20vi%20la%20ficha%20técnica%20del%20Pupitre%20Escolar%20Metálico%20en%20su%20web%20y%20deseo%20solicitar%20una%20cotización%20por%20mayor." 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-md bg-yellow-400 px-6 py-4 text-center font-bold text-blue-900 shadow-md transition-transform hover:bg-yellow-500 hover:scale-105"
            >
              Cotizar Pupitres por WhatsApp
            </a>
          </div>

        </div>

      </main>
    </div>
  );
}
