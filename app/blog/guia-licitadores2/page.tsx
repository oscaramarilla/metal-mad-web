import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo ganar licitaciones del MEC con mobiliario inyectado | Metal Mad",
  description: "Guía estratégica para contratistas del Estado. Aprende a cumplir con la Ley 7021/2022 proveyendo pupitres de polipropileno inyectado en Paraguay.",
  keywords: ["licitaciones MEC", "mobiliario escolar Paraguay", "pupitres inyectados", "Ley 7021/2022", "fábrica de muebles escolares", "contrataciones públicas Paraguay"],
};

export default function ArticuloLicitadores() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20 pt-16">
      <article className="max-w-3xl mx-auto px-6">
        
        {/* Cabecera del Artículo */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-yellow-400 text-zinc-900 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Guía B2B
            </span>
            <span className="text-zinc-500 text-sm font-medium">Contrataciones Públicas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-6">
            Guía para Licitadores: Cómo ganar contratos del MEC con mobiliario inyectado
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            El paradigma de las compras públicas en Paraguay ha cambiado. Descubre por qué la madera está quedando obsoleta y cómo la nueva Ley 7021/2022 exige estándares de durabilidad que solo el polipropileno puede cumplir.
          </p>
        </header>

        {/* Contenido Principal */}
        <div className="prose prose-lg prose-zinc max-w-none text-zinc-700 space-y-8">
          
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4">1. El fin de la era de la madera en las aulas paraguayas</h2>
          <p>
            Durante décadas, las licitaciones de mobiliario escolar en Paraguay estuvieron dominadas por pupitres de madera y fórmica. Sin embargo, el alto costo de mantenimiento, la rápida degradación por humedad y el vandalismo escolar demostraron que lo "barato" sale caro para el Estado. Hoy, los pliegos de bases y condiciones del <strong>Ministerio de Educación y Ciencias (MEC)</strong> priorizan materiales de alta ingeniería.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4">2. La Ley 7021/2022: Durabilidad como factor de adjudicación</h2>
          <p>
            Con la implementación de la nueva Ley de Suministro y Contrataciones Públicas, el Estado Paraguayo penaliza la obsolescencia programada. Los evaluadores de la DNCP ahora exigen certificados de calidad y garantías extendidas. 
          </p>
          <p>
            Presentar una oferta con <strong>pupitres inyectados de polipropileno</strong> o sillas de ABS no solo te pone un paso por delante de tu competencia, sino que te asegura el cumplimiento del criterio de "Valor por Dinero", blindando tu oferta contra protestas y rechazos técnicos.
          </p>

          <div className="bg-zinc-100 p-8 rounded-2xl border border-zinc-200 my-10">
            <h3 className="text-xl font-bold text-zinc-900 mb-4">💡 Las 3 claves técnicas que revisan los evaluadores:</h3>
            <ul className="list-disc pl-5 space-y-3 text-zinc-700">
              <li><strong>Ergonomía certificada:</strong> Curvaturas anatómicas que la madera no puede lograr.</li>
              <li><strong>Estructura reforzada:</strong> Soldaduras MIG y pintura epoxi horneada anticorrosiva.</li>
              <li><strong>Propiedad Intelectual:</strong> Uso de matrices registradas para evitar falsificaciones.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4">3. La Alianza Estratégica: Tu pase directo a la adjudicación</h2>
          <p>
            El mayor riesgo para un contratista es ganar una licitación y que su fabricante le falle con los tiempos de entrega. Aquí es donde entra en juego la capacidad industrial.
          </p>
          <p>
            <strong>Metal Mad</strong>, como representante exclusivo de <strong>ORIPLAST</strong> en Paraguay, garantiza a los contratistas un suministro ininterrumpido de componentes plásticos inyectados (tapas, asientos y respaldos). Al cotizar tu licitación con nosotros, obtienes precios directos de fábrica y la seguridad jurídica de contar con repuestos estandarizados.
          </p>

        </div>

        {/* Call to Action Final */}
        <div className="mt-16 bg-blue-900 text-white rounded-3xl p-10 text-center shadow-2xl">
          <h3 className="text-3xl font-black mb-4">¿Preparando tu próxima oferta para la DNCP?</h3>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            No dejes tu adjudicación al azar. Utiliza nuestra herramienta B2B para generar tu presupuesto oficial en PDF al instante, o contáctanos para alianzas estratégicas por volumen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/MoviAula"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-xl transition-transform hover:scale-105"
            >
              Ir al Cotizador MoviAula
            </Link>
            <a 
              href="https://wa.me/595982451828?text=Hola%20Metal%20Mad,%20leí%20su%20artículo%20sobre%20licitaciones.%20Deseo%20cotizar%20pupitres%20inyectados%20para%20un%20proyecto." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Asesoría por WhatsApp
            </a>
          </div>
        </div>

      </article>
    </div>
  );
}
