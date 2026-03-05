export default function AycPage() {
  return (
    <div className="p-10 bg-white min-h-screen text-black">
      {/* Encabezado */}
      <header className="mb-10 border-b pb-5">
        <h1 className="text-4xl font-extrabold text-zinc-900">METAL MAD EAS - Soluciones Integrales</h1>
        <p className="text-zinc-500 text-lg">Innovación en Mobiliario y Transformación Digital para Paraguay</p>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Fila 1: Mobiliario Educativo */}
        <section className="p-6 border rounded-xl shadow-sm bg-zinc-50 flex flex-col">
          <h2 className="text-2xl font-bold text-zinc-800 mb-2">Mobiliario Educativo</h2>
          <p className="text-zinc-700 font-medium mb-4">Equipamiento integral para instituciones:</p>
          <ul className="space-y-2 text-sm text-zinc-600 mb-6">
            <li>✅ Conjuntos de Mesa y Silla (Alumno)</li>
            <li>✅ Sets de Escritorio y Silla (Profesor)</li>
            <li>✅ Pizarras (Acrílicas y Magnéticas)</li>
            <li>✅ Armarios y Estanterías de alta carga</li>
            <li>✨ <strong>Pedidos Personalizados:</strong> Diseños a medida.</li>
          </ul>
          <div className="mt-auto pt-4 border-t border-zinc-200">
            <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold">Estándares MEC / Internacionales</p>
          </div>
        </section>

        {/* Fila 2: Plásticos */}
        <section className="p-6 border rounded-xl shadow-sm bg-zinc-50 flex flex-col">
          <h2 className="text-2xl font-bold text-zinc-800 mb-2">Inyección de Plásticos</h2>
          <p className="text-zinc-700 font-medium mb-4">Componentes en Polipropileno:</p>
          <ul className="space-y-2 text-sm text-zinc-600 mb-6">
            <li>✅ Regatones, Asientos y Respaldos</li>
            <li>✅ Mesadas, Porta Libros y Punteras</li>
            <li>✅ Zapatas Mayor y Menor</li>
            <li>✅ Línea Práctica, Vidriería y Agro</li>
          </ul>
          <div className="mt-auto pt-4 border-t border-zinc-200">
            <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold">Matricería Propia</p>
          </div>
        </section>

        {/* Fila 3: Servicios Digitales */}
        <section className="p-6 border-2 border-blue-600 rounded-xl shadow-md bg-blue-50 flex flex-col">
          <div className="mb-4">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">Nuevo</span>
            <h2 className="text-2xl font-bold text-blue-900 mt-2">Servicios Digitales</h2>
          </div>
          <p className="text-zinc-700 font-medium mb-4">Automatización & Contratos:</p>
          <ul className="space-y-2 text-sm text-zinc-600 mb-6">
            <li>✅ Agentes de WhatsApp (Chatbots IA)</li>
            <li>✅ Contratos Digitales para PYMES</li>
            <li>✅ Desarrollo de Webs de Alto Impacto</li>
          </ul>
          <div className="mt-auto pt-4 border-t border-blue-200">
            <p className="text-[11px] uppercase tracking-wider text-blue-600 font-bold">Transformación Digital</p>
          </div>
        </section>

      </main>
    </div>
  );
}