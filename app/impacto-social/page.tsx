import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programa de Impacto Social | Metal Mad",
  description: "Subsidio del 40% en mobiliario escolar para ONGs, fundaciones y donaciones solidarias en Paraguay.",
};

export default function ImpactoSocialPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20 pt-16">
      <div className="max-w-4xl mx-auto px-6">
        
        <header className="text-center mb-16">
          <span className="bg-green-100 text-green-800 font-black tracking-widest uppercase text-xs px-4 py-2 rounded-full mb-6 inline-block">
            Programa de Apoyo Educativo
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
            Equipando sueños juntos: <span className="text-blue-600">40% de Subsidio</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Creemos que todos los niños merecen infraestructura de calidad. Si estás comprando pupitres para donar a una escuela vulnerable o representas a una ONG, Metal Mad asume casi la mitad del costo.
          </p>
        </header>

        <div className="bg-white rounded-[2rem] shadow-xl border border-zinc-200 overflow-hidden">
          {/* Banner Superior */}
          <div className="bg-blue-900 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">¿Cómo activar tu descuento solidario?</h2>
            <p className="text-blue-200">Sigue estos 3 simples pasos para aplicar al subsidio directo de fábrica.</p>
          </div>

          {/* Los 3 Pasos */}
          <div className="p-8 md:p-12 space-y-12">
            
            {/* Paso 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Valida tu noble causa</h3>
                <p className="text-zinc-600">Este beneficio es exclusivo para compras sin fines de lucro: donaciones a escuelas públicas, iglesias, fundaciones (ONGs) o regalos solidarios. Te pediremos un comprobante o foto del destino final de los muebles.</p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0">2</div>
              <div className="w-full">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Déjanos 5 Estrellas en Google</h3>
                <p className="text-zinc-600 mb-4">Como fábrica, tu recomendación pública nos ayuda a seguir creciendo para mantener este programa. Déjanos una reseña positiva en nuestro perfil oficial de Google Maps.</p>
                <a 
                  href="https://maps.app.goo.gl/3bQ63r2fQrx9MNNX9" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm"
                >
                  ⭐ Dejar Reseña en Google Maps
                </a>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-100 text-green-700 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Paga con facilidad (Fiat o Cripto)</h3>
                <p className="text-zinc-600">
                  Una vez validada tu reseña, aplicaremos el 40% de descuento directo a tu factura. Puedes abonar en <strong>Guaraníes (Gs.)</strong> mediante transferencia bancaria, o utilizando <strong>Criptomonedas (USDT/Bitcoin)</strong> si los fondos de donación provienen del extranjero.
                </p>
              </div>
            </div>

          </div>

          {/* Call to Action Final */}
          <div className="bg-zinc-50 border-t border-zinc-200 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-black text-zinc-900 mb-4">¿Ya dejaste tu reseña?</h3>
            <p className="text-zinc-600 mb-6">Contáctanos por WhatsApp enviando la captura de tu reseña de 5 estrellas y los datos de tu donación para generar el presupuesto con el 40% OFF.</p>
            <a 
              href="https://wa.me/595982451828?text=Hola%20Metal%20Mad!%20Acabo%20de%20dejar%20mi%20reseña%20de%205%20estrellas%20en%20Google.%20Quiero%20aplicar%20al%20descuento%20del%2040%25%20para%20una%20donación." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] hover:bg-[#20bd5a] text-white font-black px-8 py-4 rounded-xl transition-transform hover:scale-105 shadow-lg"
            >
              Reclamar Subsidio por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
