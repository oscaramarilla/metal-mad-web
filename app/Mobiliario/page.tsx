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
    </div>
  );
}