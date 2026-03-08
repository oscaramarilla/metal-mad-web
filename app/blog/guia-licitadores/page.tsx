import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guía para Licitadores: Cómo evitar el rechazo de tu oferta de mobiliario",
  description: "Conoce las normativas de propiedad intelectual (Ley 7021/2022) que la DNCP exige para la provisión de mobiliario escolar en Paraguay.",
};

export default function GuiaLicitadoresBlog() {
  return (
    <article className="min-h-screen bg-zinc-50 font-sans pb-20 pt-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Cabecera del Artículo */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-zinc-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Contrataciones Públicas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-6">
            Guía para Licitadores: Evita que tu oferta de mobiliario sea rechazada
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Preparar una oferta para el Estado lleva semanas de trabajo. No permitas que una falta de autorización de marca te deje fuera del juego en la etapa de evaluación.
          </p>
        </header>

        {/* Contenido Estratégico */}
        <div className="prose prose-lg prose-zinc max-w-none">
          <p>
            El mercado de provisión de mobiliario escolar para instituciones públicas en Paraguay es altamente competitivo. Sin embargo, muchos fabricantes y proveedores cometen un error crítico que les cuesta adjudicaciones millonarias: <strong>ignorar las normativas de propiedad intelectual y representación de marca.</strong>
          </p>

          <h3 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">El filtro de la Ley 7021/2022</h3>
          <p>
            La actual Ley de Suministro y Contrataciones Públicas es muy clara respecto a la formalidad de los productos ofrecidos. El <strong>Artículo 21, inciso p)</strong> establece expresamente la prohibición de participar en licitaciones a quienes pretendan contratar sin contar con la autorización legal para el uso de derechos de propiedad intelectual o marcas.
          </p>
          <p>
            Esto significa que si incluyes en tu oferta componentes plásticos importados de marcas reconocidas internacionalmente (como <strong>ORIPLAST</strong>) sin la carta de autorización del representante exclusivo en Paraguay, tu oferta será declarada inadmisible.
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-xl">
            <h3 className="text-lg font-bold text-red-900 mb-2">El Riesgo de la Falsificación</h3>
            <p className="text-red-800 text-sm m-0">
              Intentar ingresar plásticos de contrabando o utilizar copias de matrices no solo es un delito penalizado por la <strong>Ley de Marcas (Nº 1294/1998)</strong>, sino que la calidad inferior de estos materiales provocará rechazos en la etapa de recepción de bienes por parte de las instituciones educativas.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">La Solución: Licita con Respaldo Legal</h3>
          <p>
            Para asegurar el éxito de tu oferta, necesitas aliarte con el representante oficial. En <strong>METAL MAD E.A.S.</strong>, somos los únicos distribuidores y representantes autorizados de <Link href="/oriplastpy" className="text-blue-600 font-bold hover:underline">ORIPLAST en la República del Paraguay</Link>.
          </p>
          <p>
            Ofrecemos a las metalúrgicas y licitadores un modelo de suministro B2B que incluye:
          </p>
          <ul>
            <li><strong>Kits Completos:</strong> Asiento, respaldo, tapa (tampo), porta libros y todos los accesorios necesarios para el ensamblaje.</li>
            <li><strong>Garantía de Fábrica:</strong> Certificados de origen e inyección en polipropileno de alta ingeniería.</li>
            <li><strong>Autorización Expresa:</strong> Emitimos la carta de autorización oficial a tu nombre para que la incluyas en tu carpeta de licitación ante la DNCP, blindando tu oferta.</li>
          </ul>

          {/* INTERNAL LINKBUILDING: Hacia el Cotizador B2B */}
          <div className="mt-12 bg-[#111111] text-white p-8 rounded-3xl text-center shadow-2xl border border-zinc-800">
            <h3 className="text-2xl font-black mb-4">Blinda tu próxima licitación</h3>
            <p className="text-zinc-400 mb-6 text-sm">
              Accede a nuestro cotizador industrial B2B, obtén precios mayoristas de fábrica y solicita tu autorización legal de representación para competir de forma segura.
            </p>
            <Link href="/cotizador" className="inline-block bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105">
              ACCEDER AL COTIZADOR B2B
            </Link>
          </div>

        </div>
      </div>
    </article>
  );
}
