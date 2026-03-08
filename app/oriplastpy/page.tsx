import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portal Oficial Oriplast Paraguay | Metal Mad E.A.S.",
  description: "Únicos representantes y distribuidores exclusivos de la marca Oriplast en la República del Paraguay.",
};

export default function OriplastOficial() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200 font-sans pb-20">
      
      {/* CABECERA CORPORATIVA */}
      <header className="bg-red-700 w-full pt-16 pb-12 px-6 text-center border-b-8 border-red-900">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">ORIPLAST</span>
            <span className="text-2xl text-red-300">|</span>
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter">METAL MAD <span className="text-blue-300">E.A.S</span></span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-red-100 uppercase tracking-widest leading-tight">
            Representación y Distribución Exclusiva <br/> República del Paraguay
          </h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12 space-y-12">
        
        {/* EL COMUNICADO OFICIAL */}
        <section className="bg-[#111111] border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
          <h2 className="text-sm font-black text-zinc-500 uppercase tracking-widest mb-2">A Quien Interese</h2>
          <h3 className="text-3xl font-bold text-white mb-8">Comunicado Oficial de Exclusividad</h3>
          
          <div className="prose prose-invert prose-lg max-w-none text-zinc-400">
            <p className="leading-relaxed">
              Por medio del presente portal público, se certifica que <strong>METAL MAD E.A.S. (RUC: 80135751-9)</strong> es la única y exclusiva entidad representante y distribuidora de los productos y de la marca <strong>ORIPLAST</strong> (asientos, encostos, tampos y accesorios escolares inyectados en polipropileno) en todo el territorio de la República del Paraguay.
            </p>
            <p className="leading-relaxed mt-4">
              Esta exclusividad está avalada por el <em>"Contrato de Representação e Exclusividade"</em> firmado con ORIPLAST INDÚSTRIA DE PLÁSTICOS LTDA. (Palotina, PR - Brasil) el 12 de julio de 2024, con vigencia actual y firmas debidamente notarizadas por el Serviço Notarial de Palotina-PR.
            </p>
          </div>
        </section>

        {/* EL ESCUDO LEGAL (ADVERTENCIA A LICITADORES) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-950/20 border border-red-900/50 rounded-3xl p-8">
            <div className="text-red-500 text-4xl mb-4">⚖️</div>
            <h4 className="text-xl font-bold text-red-400 mb-4">Ley de Contrataciones (Nº 7021/2022)</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              El Artículo 21, inciso p) de la Ley Paraguaya N° 7021/2022 prohíbe terminantemente la participación en licitaciones públicas a quienes pretendan contratar <strong>sin autorización explícita para el uso de derechos de propiedad intelectual</strong>.
            </p>
          </div>

          <div className="bg-red-950/20 border border-red-900/50 rounded-3xl p-8">
            <div className="text-red-500 text-4xl mb-4">🛡️</div>
            <h4 className="text-xl font-bold text-red-400 mb-4">Ley de Marcas (Nº 1294/1998)</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              El Artículo 15 de la Ley Paraguaya N° 1294/1998 concede al titular de una marca registrada el <strong>derecho exclusivo de uso</strong>. Cualquier oferta o venta de productos ORIPLAST realizada sin la autorización escrita de METAL MAD E.A.S. infringe derechos de marca y será motivo inmediato de inadmisibilidad.
            </p>
          </div>
        </section>

        {/* LA SOLUCIÓN (VENTA B2B) */}
        <section className="bg-gradient-to-br from-zinc-900 to-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">¿Desea incluir ORIPLAST en su proyecto o licitación?</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Evite la descalificación técnica y legal de su oferta. METAL MAD E.A.S. es la <strong>única entidad autorizada para otorgar permisos a terceros</strong> y suministrar los kits de plástico por volumen a fabricantes locales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/cotizador" 
              className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
            >
              COTIZAR SUMINISTRO MAYORISTA
            </Link>
            <a 
              href="https://wa.me/595982451828?text=Hola,%20solicito%20autorización%20formal%20y%20precios%20para%20licitar%20con%20plásticos%20Oriplast." 
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold border border-zinc-600 px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2"
              target="_blank" 
              rel="noreferrer"
            >
              <span>Solicitar Autorización Vía WhatsApp</span>
            </a>
          </div>
        </section>

        {/* DATOS DE CONTACTO DE LA REPRESENTACIÓN */}
        <footer className="text-center pt-8 border-t border-zinc-800 text-sm text-zinc-500">
          <p className="font-bold text-zinc-400 mb-2">Contacto Directo Representación Paraguay:</p>
          <p>Sres. Edgar Amarilla / Oscar Amarilla</p>
          <p>RUC: 80135751-9 | Email: metalmadeas@gmail.com</p>
          <p className="mt-4 text-xs opacity-50">Documentación de respaldo disponible en el Registro Notarial de Palotina-PR, Brasil.</p>
        </footer>

      </main>
    </div>
  );
}
