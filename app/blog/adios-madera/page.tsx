import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Por qué los directores están cambiando la madera por plástico inyectado",
  description: "Descubre cómo el polipropileno de alta ingeniería está salvando el presupuesto de los colegios paraguayos.",
};

export default function AdiosMaderaBlog() {
  return (
    <article className="min-h-screen bg-zinc-50 font-sans pb-20 pt-10">
      <div className="max-w-3xl mx-auto px-6">
        
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Innovación Educativa</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-6">
            Adiós a la madera: El futuro del aula paraguaya es inyectado
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed italic">
            "La madera tradicional cumple un ciclo muy corto. En pocos años, los depósitos de los colegios se llenan de pupitres astillados."
          </p>
        </header>

        <div className="prose prose-lg prose-zinc max-w-none">
          <p>
            Durante décadas, el mobiliario escolar en Paraguay se fabricó de una sola manera: caño soldado y placas de madera. Sin embargo, el desgaste diario, la humedad y el uso intensivo provocan que la madera se astille rápidamente, convirtiéndose en un riesgo para los alumnos y un gasto recurrente para las instituciones.
          </p>

          <h3 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">La solución: Polipropileno de Alta Ingeniería</h3>
          <p>
            En <strong>Metal Mad</strong> decidimos evolucionar. Al fusionar nuestras sólidas estructuras de acero con componentes inyectados de Brasil, logramos un pupitre virtualmente indestructible.
          </p>
          
          <ul className="space-y-4 my-6">
            <li><strong>Ergonomía perfecta:</strong> A diferencia de la madera plana, el plástico se inyecta con formas anatómicas que cuidan la postura del estudiante.</li>
            <li><strong>Higiene total:</strong> Superficies no porosas que permiten una desinfección rápida y profunda.</li>
            <li><strong>Cero astillas:</strong> Máxima seguridad para la vestimenta y la integridad física de los alumnos.</li>
          </ul>

          <div className="mt-10 bg-blue-900 text-white p-8 rounded-3xl text-center shadow-xl">
            <h3 className="text-2xl font-black mb-4">Renueva tus aulas inteligentemente</h3>
            <p className="text-blue-200 mb-6">Calcula la inversión exacta para tu colegio con nuestra herramienta de presupuesto transparente.</p>
            <Link href="/cotizador" className="inline-block bg-white text-blue-900 font-black px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105">
              CALCULAR PRESUPUESTO
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
