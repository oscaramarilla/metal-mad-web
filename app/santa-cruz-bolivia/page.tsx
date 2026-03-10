import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobiliario Escolar para Santa Cruz, Bolivia | Exportación Metal Mad",
  description: "Guía para directores e inversionistas educativos en Santa Cruz de la Sierra. Descubre cómo importar pupitres inyectados y mesas escolares desde Paraguay.",
};

export default function SantaCruzBlog() {
  return (
    <article className="min-h-screen bg-zinc-50 font-sans pb-20 pt-10">
      <div className="max-w-3xl mx-auto px-6">
        
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Expansión Internacional</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-6">
            Equipando el futuro de Santa Cruz: Mobiliario escolar de alta ingeniería
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            El auge educativo en Santa Cruz de la Sierra exige infraestructura de primer nivel. Conoce por qué importar mobiliario desde Paraguay es la estrategia más rentable para tu institución.
          </p>
        </header>

        <div className="prose prose-lg prose-zinc max-w-none">
          <p>
            Santa Cruz de la Sierra es el motor económico de Bolivia y su crecimiento demográfico ha impulsado la construcción de nuevos y modernos centros educativos. Sin embargo, al momento de equipar las aulas, los administradores enfrentan un mercado local saturado de opciones de madera tradicional que no soportan el clima tropical ni el uso intensivo.
          </p>

          <h3 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">La ventaja logística Paraguay - Bolivia</h3>
          <p>
            En <strong>Metal Mad E.A.S.</strong>, hemos optimizado nuestra línea de producción industrial en Asunción para abastecer la creciente demanda del mercado cruceño. Importar pupitres, mesas y sillas desde Paraguay ofrece ventajas estratégicas inigualables:
          </p>
          <ul className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm my-6">
            <li><strong>Beneficios del MERCOSUR:</strong> Aranceles preferenciales que hacen que la importación directa de fábrica sea más económica que comprar a revendedores locales.</li>
            <li><strong>Proximidad Terrestre:</strong> Tiempos de tránsito terrestre cortos y seguros a través del Chaco, garantizando entregas rápidas para inicios de ciclo lectivo.</li>
            <li><strong>Tecnología Inyectada:</strong> Llevamos a Bolivia la resistencia del polipropileno inyectado de <strong>ORIPLAST</strong>, el cual no se astilla, no se hincha con la humedad y tiene una vida útil superior a los 10 años.</li>
          </ul>

          <h3 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">Nuestro catálogo para exportación</h3>
          <p>
            Diseñamos mobiliario que se adapta a las nuevas metodologías de enseñanza activa en Bolivia. Desde nuestro reconocido sistema modular <strong>MoviAula</strong> para trabajos grupales, hasta pupitres universitarios con estructuras metálicas de alta densidad.
          </p>
          
          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 my-8">
            <h4 className="text-blue-900 font-black text-xl mb-4">Trato directo B2B (Fábrica a Colegio)</h4>
            <p className="text-blue-800 text-sm mb-0">
              No trabajamos con intermediarios. Ofrecemos a las instituciones cruceñas un canal corporativo directo, desde el diseño del plano hasta el despacho aduanero, garantizando precios de origen.
            </p>
          </div>

          <p>
            Si estás planificando la apertura de un nuevo pabellón, colegio o universidad en Santa Cruz, es momento de elevar el estándar.
          </p>

          <div className="mt-12 bg-zinc-900 text-white p-8 rounded-3xl text-center shadow-2xl">
            <h3 className="text-2xl font-black mb-4">¿Listo para equipar tu institución en Bolivia?</h3>
            <p className="text-zinc-400 mb-6 text-sm">
              Contacta directamente con nuestra dirección comercial para obtener tarifas de exportación FOB/CIF y descubre cómo optimizar tu presupuesto institucional.
            </p>
            <a 
              href="https://wa.me/595982451828?text=Hola,%20les%20escribo%20desde%20Santa%20Cruz,%20Bolivia.%20Deseo%20información%20sobre%20importación%20de%20mobiliario." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-black px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              SOLICITAR ASESORÍA DE EXPORTACIÓN
            </a>
          </div>

        </div>
      </div>
    </article>
  );
}
