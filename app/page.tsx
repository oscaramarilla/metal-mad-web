import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fábrica de Mesas y Sillas para Alumnos en Paraguay | Venta B2B</title>
        <meta
          name="description"
          content="Fabricantes directos de mesas y sillas para alumnos en Paraguay. Producción industrial escalable para colegios e instituciones."
        />
      </Head>

      {/* 1. FONDO GRIS MÁS CLARO FORZADO (bg-zinc-100) */}
      <div className="flex flex-col items-center font-sans w-full bg-zinc-100 min-h-screen text-zinc-900">
        
        <main className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-between py-10 lg:py-20 gap-12 px-6">
          
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left lg:w-1/2">
            {/* 2. TEXTO ROJO (Para resaltar la fabricación nacional) */}
            <span className="text-sm font-bold tracking-wider text-red-600 uppercase">
              Fabricación Nacional - Calidad Industrial
            </span>
            
            {/* 3. TÍTULO AZUL (El color de la confianza B2B) */}
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-blue-800">
              Mesas y Sillas para Alumnos
            </h1>
            
            <p className="max-w-md text-lg sm:text-xl leading-8 text-zinc-700">
              Proveemos soluciones de mobiliario escolar duraderas y ergonómicas. Producción escalable exclusiva para pedidos corporativos e institucionales en Paraguay.
            </p>
            
            {/* 4. BOTÓN AMARILLO (Llamativo para que hagan clic) con texto oscuro */}
            <div className="flex w-full flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/595982451828?text=Hola,%20represento%20a%20una%20institución%20y%20deseo%20cotizar%20mesas%20y%20sillas%20para%20alumnos." 
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-yellow-400 px-8 py-4 text-center font-bold text-blue-900 shadow-lg transition-colors hover:bg-yellow-500 hover:scale-105"
              >
                Solicitar Cotización B2B
              </a>
            </div>
          </div>

          {/* Imagen Principal */}
          <div className="lg:w-1/2 flex justify-center w-full">
            <div className="relative w-full max-w-md aspect-[4/3]">
              {/* Recuerda: La foto debe estar en public/productos/pupitre.jpg */}
              <Image
                src="/productos/pupitre.jpg"
                alt="Conjunto de mesa y silla para alumno fabricado en Paraguay"
                fill
                className="rounded-xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>

        </main>

        {/* Sección Inferior (Opcional, con toques azules) */}
        <section className="w-full max-w-5xl py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-zinc-300 mt-10 px-6">
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Alta Durabilidad</h3>
            <p className="text-zinc-700">Estructuras metálicas reforzadas diseñadas para el uso intenso diario en aulas.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Volumen Escalable</h3>
            <p className="text-zinc-700">Capacidad de producción industrial para abastecer a instituciones de cualquier tamaño.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Precios de Fábrica</h3>
            <p className="text-zinc-700">Trato directo sin intermediarios, garantizando el mejor margen para tu inversión escolar.</p>
          </div>
        </section>
      </div>
    </>
  );
}
