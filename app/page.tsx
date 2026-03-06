import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fábrica de Mesas y Sillas para Alumnos en Paraguay | Venta B2B</title>
        <meta
          name="description"
          content="Fabricantes directos de mesas y sillas para alumnos en Paraguay. Producción industrial escalable para colegios e instituciones. Calidad garantizada."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
        {/* SECCIÓN HERO (La primera impresión) */}
        <main className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-between py-20 px-6 sm:px-16">
          
          {/* Textos y Llamado a la Acción */}
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left lg:w-1/2">
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Fabricación Nacional - Calidad Industrial
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-black dark:text-zinc-50">
              Mesas y Sillas para Alumnos
            </h1>
            <p className="max-w-md text-lg sm:text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              Proveemos soluciones de mobiliario escolar duraderas y ergonómicas. Producción escalable exclusiva para pedidos corporativos e institucionales en Paraguay.
            </p>
            
            {/* Botón B2B Principal */}
            <div className="flex w-full flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <a 
                href="#cotizar" 
                className="rounded-md bg-blue-600 px-8 py-4 text-center font-bold text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                Solicitar Cotización B2B
              </a>
            </div>
          </div>

          {/* Imagen Principal de Alta Calidad */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Nota: Asegúrate de reemplazar "/assets/images.jpg" con la foto de tu mejor conjunto de mesa y silla */}
              <Image
                src="/assets/images.jpg"
                alt="Conjunto de mesa y silla para alumno fabricado en Paraguay"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>

        </main>

        {/* SECCIÓN DE BENEFICIOS (Por qué elegirte para negocios) */}
        <section className="w-full max-w-5xl px-6 py-16 sm:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-zinc-200 dark:border-zinc-800 mt-10">
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Alta Durabilidad</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Estructuras metálicas reforzadas diseñadas para el uso intenso diario en aulas.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Volumen Escalable</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Capacidad de producción industrial para abastecer a instituciones de cualquier tamaño.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Precios de Fábrica</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Trato directo sin intermediarios, garantizando el mejor margen para tu inversión escolar.</p>
          </div>
        </section>
      </div>
    </>
  );
}
