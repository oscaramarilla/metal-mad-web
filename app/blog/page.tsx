import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inversión vs. Gasto: La vida útil del mobiliario escolar | Metal Mad",
  description: "Aprende a calcular el Retorno de Inversión (ROI) al equipar tu colegio. Descubre por qué lo barato sale caro en mobiliario educativo.",
};

export default function InversionVsGastoBlog() {
  return (
    <article className="min-h-screen bg-zinc-50 font-sans pb-20 pt-10">
      <div className="max-w-3xl mx-auto px-6">
        
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Finanzas Educativas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-6">
            Inversión vs. Gasto: Calculando la verdadera vida útil del mobiliario escolar
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Comprar barato hoy puede significar un agujero financiero para tu colegio mañana. Te mostramos cómo los administradores inteligentes evalúan sus compras.
          </p>
        </header>

        <div className="prose prose-lg prose-zinc max-w-none">
          <p>
            Llega la temporada de renovar aulas y la mesa directiva se enfrenta al mismo dilema de siempre: ¿Buscamos el presupuesto más bajo o invertimos en calidad? En el rubro del mobiliario escolar, la diferencia entre un "gasto" y una "inversión" se mide en años de durabilidad.
          </p>

          <h3 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">La trampa del "Pupitre Económico"</h3>
          <p>
            Es común ver instituciones adquiriendo pupitres de madera tradicional por su bajo costo inicial. Sin embargo, la matemática a mediano plazo es implacable:
          </p>
          <ul className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm my-6">
            <li><strong>Año 1:</strong> El mobiliario luce bien.</li>
            <li><strong>Año 2:</strong> Las tapas de madera comienzan a astillarse por la humedad y el uso. Los cantos se despegan.</li>
            <li><strong>Año 3:</strong> Un 30% del lote debe ser reparado o reemplazado por seguridad de los alumnos (riesgo de cortes o enganches en uniformes).</li>
          </ul>
          <p>
            En un periodo de 5 años, el colegio termina pagando casi el doble por mantenimiento y reposición. Esto es un <strong>gasto constante</strong>.
          </p>

          <h3 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">El ROI del Polipropileno Inyectado</h3>
          <p>
            En <strong>Metal Mad E.A.S.</strong>, cambiamos la ecuación. Al combinar las estructuras metálicas ultrarresistentes forjadas bajo la maestría de Edgar Amarilla, con los componentes plásticos inyectados de <strong>ORIPLAST</strong> (nuestra representación exclusiva), el colegio realiza una <strong>inversión a largo plazo</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="text-blue-900 font-bold mb-2">Madera Tradicional</h4>
              <p className="text-sm text-blue-800">Vida útil promedio: 2 a 3 años. Alto costo de mantenimiento anual.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h4 className="text-green-900 font-bold mb-2">Inyectado Oriplast</h4>
              <p className="text-sm text-green-800">Vida útil promedio: 10+ años. Cero mantenimiento, fácil limpieza.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">Toma decisiones basadas en datos</h3>
          <p>
            No dejes que el presupuesto de este año comprometa las finanzas de la próxima década. Un colegio que no gasta en reparaciones es un colegio que puede invertir más en tecnología y educación.
          </p>

          <div className="mt-12 bg-zinc-900 text-white p-8 rounded-3xl text-center shadow-2xl">
            <h3 className="text-2xl font-black mb-4">Calcula tu Inversión Real</h3>
            <p className="text-zinc-400 mb-6 text-sm">
              Usa nuestro cotizador transparente. Desglosamos el costo de la estructura metálica y los componentes plásticos para que sepas exactamente qué estás pagando.
            </p>
            <Link href="/cotizador" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-black px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105">
              USAR COTIZADOR INSTITUCIONAL
            </Link>
          </div>

        </div>
      </div>
    </article>
  );
}


