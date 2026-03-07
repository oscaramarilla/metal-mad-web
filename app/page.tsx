import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center mt-10 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tight">
          Mesas y Sillas para <span className="text-blue-600">Alumnos</span>
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Proveemos soluciones de mobiliario escolar duraderas y ergonómicas. 
          Producción escalable exclusiva para pedidos corporativos en Paraguay.
        </p>
      </div>

      <div className="flex gap-4">
        <Link 
          href="/catalogo" 
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          Ver Catálogo
        </Link>
        <a 
          href="https://wa.me/595982451828" 
          className="bg-white border-2 border-zinc-200 text-zinc-900 px-8 py-4 rounded-xl font-bold hover:bg-zinc-50 transition-all"
        >
          Solicitar Cotización B2B
        </a>
      </div>

      <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
        <img 
          src="/assets/hero-image.jpg" 
          alt="Mobiliario Escolar MetalMadeas" 
          className="w-full object-cover h-[500px]"
        />
      </div>
    </section>
  );
}
