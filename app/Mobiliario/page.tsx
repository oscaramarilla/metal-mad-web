import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pupitres Escolares y Mesas para Aula en Paraguay | Metal Mad",
  description: "Fabricamos mobiliario escolar ultrarresistente. Pupitres, sillas y mesas con estructura metálica y plástico inyectado Oriplast. Cotiza online.",
};
export default function MobiliarioPage() {
  return (
    <div className="p-10 bg-white min-h-screen text-black py-16">
      <h1 className="text-4xl font-black text-blue-600 mb-4">Mobiliario Educativo</h1>
      <p className="text-xl text-zinc-600 mb-10 max-w-2xl">
        Fabricación de sillas y mesas ergonómicas y duraderas. Transformamos los espacios de estudio en todo Paraguay con estructuras metálicas de alta resistencia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-zinc-800 mb-2">Pupitre Unipersonal</h3>
          <p className="text-zinc-600">Estructura metálica reforzada con asiento y respaldo en polipropileno. Ideal para colegios.</p>
        </div>
        
        <div className="p-6 border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-zinc-800 mb-2">Mesa Universitaria</h3>
          <p className="text-zinc-600">Superficie amplia y resistente, diseñada para el máximo rendimiento del alumno.</p>
        </div>

        <div className="p-6 border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-zinc-800 mb-2">Sillas Apilables</h3>
          <p className="text-zinc-600">Optimizan el espacio de las aulas. Ligeras pero extremadamente duraderas.</p>
        </div>
      </div>
      {/* SECCIÓN SEO: El motor de búsqueda leerá esto para posicionarte */}
      <section className="mt-20 bg-white p-10 md:p-16 rounded-3xl border border-zinc-200 shadow-sm">
        <h2 className="text-3xl font-black text-blue-900 mb-6">Mobiliario Escolar en Paraguay: Calidad que transforma el aula</h2>
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-4">
          <p>
            Al momento de equipar instituciones educativas, la elección del <strong>mobiliario escolar en Paraguay</strong> define no solo la comodidad del alumno, sino la rentabilidad de la inversión a largo plazo. En Metal Mad E.A.S., somos especialistas como fabricantes y <strong>proveedor de mobiliario escolar</strong>, enfocados en erradicar los problemas comunes de la madera tradicional.
          </p>
          <p>
            Nuestros <strong>pupitres escolares, mesas y sillas para alumnos</strong> están diseñados bajo estrictas normas de ergonomía. Utilizamos estructuras metálicas reforzadas, soldadas con precisión milimétrica, que garantizan la máxima estabilidad en el día a día del entorno académico. 
          </p>
          <h3 className="text-2xl font-bold text-zinc-800 mt-8 mb-4">¿Por qué elegir nuestros muebles para aulas?</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Durabilidad Extrema:</strong> Al ser los representantes exclusivos de la marca brasileña <strong>ORIPLAST</strong> en el país, ensamblamos nuestras estructuras con asientos, respaldos y tampos (tapas) de polipropileno inyectado de alta ingeniería.</li>
            <li><strong>Seguridad para el Alumno:</strong> Cero astillas, cero bordes filosos. El plástico inyectado protege la integridad física y los uniformes de los estudiantes.</li>
            <li><strong>Higiene y Mantenimiento:</strong> Superficies no porosas que permiten una limpieza rápida, ideal para mantener protocolos de salud en los colegios.</li>
            <li><strong>Cumplimiento para Licitaciones:</strong> Nuestro suministro cumple con todas las normativas legales (Ley 7021/2022 y Ley 1294/1998) de Contrataciones Públicas (DNCP), asegurando que tu compra institucional tenga un respaldo jurídico absoluto.</li>
          </ul>
          <p>
            Ya sea que busques renovar un colegio privado, equipar una universidad o participar en licitaciones del Estado, nuestro catálogo de <strong>pupitres escolares en Paraguay</strong> ofrece la mejor relación costo-beneficio del mercado. Transforma tus aulas hoy mismo y dile adiós al gasto constante en reparaciones.
          </p>
        </div>
      </section>
    </div>
  );
}


