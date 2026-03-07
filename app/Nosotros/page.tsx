import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Historia | Innovación y Tradición en Metal Mad",
  description: "Conoce cómo evolucionamos del mobiliario tradicional de madera a ser los pioneros en aulas de metal y plástico inyectado en Paraguay.",
  keywords: ["historia Metal Mad", "evolución mobiliario escolar", "Oscar Amarilla", "Edgar Amarilla", "innovación educativa Paraguay"],
};

export default function NosotrosPage() {
  return (
    <div className="flex flex-col items-center font-sans w-full bg-zinc-50 min-h-screen text-zinc-900 pb-20">
      
      {/* CABECERA: La resiliencia y la evolución */}
      <header className="w-full max-w-4xl px-6 pt-16 pb-12 text-center">
        <span className="text-sm font-bold tracking-wider text-red-600 uppercase mb-4 block">
          Tradición y Resiliencia
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-blue-900 mb-6">
          La Evolución del Mobiliario Escolar
        </h1>
        <p className="text-lg text-zinc-700 max-w-2xl mx-auto font-medium">
          Sobrevivimos a los cambios de la industria para traerte algo mejor. Fusionamos décadas de maestría metalúrgica con la tecnología del plástico internacional.
        </p>
      </header>

      <main className="w-full max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* COLUMNA PRINCIPAL: La Historia Real */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          <section className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-zinc-200">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">El Renacer de Nuestra Fábrica</h2>
            <div className="prose prose-zinc max-w-none text-lg text-zinc-700 leading-relaxed">
              <p>
                Hubo un tiempo en que el mercado del mueble escolar en Paraguay dependía exclusivamente de la madera y el metal tradicional. Pero la industria cambió drásticamente, y los modelos antiguos dejaron de ser viables y duraderos para el ritmo de los colegios modernos.
              </p>
              <p>
                En lugar de rendirnos ante la crisis del sector, decidimos evolucionar. La clave para mantener a flote nuestro legado familiar fue dar un salto tecnológico. Dejamos atrás la fragilidad de la madera tradicional para dar paso a la importación y representación directa de <strong>plásticos de alta ingeniería</strong>, combinados con las estructuras de acero más fuertes del país.
              </p>
              
              <div className="mt-8 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">El Equipo Detrás del Cambio</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <div className="bg-zinc-200 text-zinc-700 p-3 rounded-lg font-bold">EA</div>
                    <div>
                      <strong className="text-zinc-900 block text-lg">Edgar Amarilla - El Maestro Fundador</strong>
                      <span className="text-base text-zinc-600">El creador de la infraestructura metalúrgica. Su experiencia de toda una vida forjando metal es el cimiento de nuestra fábrica. Él garantiza que la estructura base de cada producto sea absolutamente indestructible.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg font-bold">OA</div>
                    <div>
                      <strong className="text-zinc-900 block text-lg">Oscar Amarilla - Innovación y Estrategia</strong>
                      <span className="text-base text-zinc-600">La nueva generación. Lideró la modernización tecnológica de la empresa, rompió las barreras internacionales para negociar representaciones exclusivas, y hoy dirige la estrategia corporativa, logística y digital de la firma.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* BARRA LATERAL: La Alianza Internacional que lo cambió todo */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">La Alianza que Cambió el Juego</h3>
            <p className="text-blue-50 text-sm leading-relaxed mb-6">
              Nuestra transformación no hubiera sido posible sin la tecnología adecuada. Gestionamos y obtuvimos la representación exclusiva de la industria brasileña <strong>ORIPLAST</strong> para Paraguay.
            </p>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                Traspasamos la barrera del idioma para traer la mejor matriz a nuestro país.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                Integración de asientos y respaldos de plástico inyectado de altísima durabilidad.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                Únicos distribuidores autorizados para licitaciones públicas en Paraguay.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
            <strong className="block text-zinc-900 text-lg mb-2">Una Garantía Personal</strong>
            <p className="text-zinc-600 text-sm italic">
              "Trabajamos codo a codo, padre e hijo, combinando la fuerza de la experiencia con la agilidad de la tecnología. Cuando compras en Metal Mad, estás apoyando a una industria que se negó a estancarse."
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}
