import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Representación Exclusiva ORIPLAST en Paraguay | Metal Mad",
  description: "Comunicado oficial sobre la distribución de componentes plásticos inyectados para mobiliario escolar bajo la Ley 7021/2022.",
};

export default function OriplastBlog() {
  return (
    <article className="min-h-screen bg-zinc-50 font-sans pb-20 pt-10">
      <div className="max-w-3xl mx-auto px-6">
        
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Comunicado Oficial</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-6">
            Representación Exclusiva de ORIPLAST en Paraguay
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Metal Mad E.A.S. anuncia oficialmente su alianza estratégica como representante y distribuidor exclusivo de la marca brasileña ORIPLAST en territorio paraguayo.
          </p>
        </header>

        <div className="prose prose-lg prose-zinc max-w-none">
          <p>
            Ante la creciente demanda de modernización en la infraestructura educativa del país, y en estricto cumplimiento con la nueva <strong>Ley de Suministro y Contrataciones Públicas (Ley 7021/2022)</strong>, hemos asegurado la provisión constante de componentes de alta ingeniería para el mercado nacional.
          </p>

          <h3 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">Garantía Legal para Licitadores (DNCP)</h3>
          <p>
            Un problema recurrente en las licitaciones de la DNCP es el rechazo de ofertas por falta de certificados de origen y cartas de representación válidas. Al adquirir los tampos (tapas), asientos y respaldos inyectados a través de Metal Mad, las metalúrgicas y proveedores B2B aliados obtienen:
          </p>
          <ul className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm my-6">
            <li><strong>Respaldo Jurídico:</strong> Carta oficial de representación que blinda la oferta frente a protestas de la competencia.</li>
            <li><strong>Calidad Certificada:</strong> Componentes de polipropileno inyectado que superan las exigencias de durabilidad del MEC.</li>
            <li><strong>Stock Inmediato:</strong> Capacidad industrial de respuesta sin demoras de importación de terceros.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
