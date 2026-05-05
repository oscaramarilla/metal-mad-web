'use client';

import { useState } from 'react';
import Head from 'next/head';
// Asumiendo que tenés componentes de UI reutilizables
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

// --- ESTRATEGIA DE PRECIOS IDEALES (Rentabilidad Garantizada) ---
// Precios definidos para modelo 120x120cm base.
// 1 Gs = ~0.00013 USD (aprox 2026).
const PRECIOS = {
  K_WOOD: {
    nombre: 'Modular K-Wood (Edición Carpintería)',
    precio: 3800000, // Gs (Rentable entrada)
    resumen: 'Bastidor de madera densa, terciada 6mm sellada, aislación de piso incluida.',
  },
  K_PIR: {
    nombre: 'Modular K-PIR (Premium Industrial)',
    precio: 6500000, // Gs (Margen alto, producto estrella)
    resumen: 'Steel Framing, Panel Sándwich PIR de 50mm, Aislación Térmica Total.',
  },
  B2B: {
    nombre: 'Alianza Partner / B2B',
    precio: 0, // Variable por volumen
    resumen: 'Precios especiales para Veterinarias, Criadores y Tiendas. Consultar volumen.',
  },
};

const formatGs = (amount: number) => {
  return new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG' }).format(amount);
};

export default function ModularKFunnelPage() {
  const [selectedTier, setSelectedTier] = useState<'K_WOOD' | 'K_PIR' | 'B2B'>('K_PIR');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleTierSelect = (tier: 'K_WOOD' | 'K_PIR' | 'B2B') => {
    setSelectedTier(tier);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Head>
        <title>Arquitectura Modular para Mascotas K | Metal Made E.A.S.</title>
        <meta name="description" content="Infraestructura de Confort Térmico Total. Búnkeres contra el calor y frío para razas grandes. Steel Framing y Tecnología PIR. Asunción, Paraguay." />
      </Head>

      <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
        {/* --- HERO SECTION: EL EFECTO TERMO --- */}
        <section className="relative bg-neutral-950 text-white py-20 px-4 md:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold uppercase tracking-widest text-neutral-400">by Metal Made E.A.S.</span>
                <span className="w-10 h-px bg-neutral-700"></span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Arquitectura <span className="text-sky-400">Térmica</span> Total.
              </h1>
              <p className="text-xl text-neutral-300 max-w-lg">
                No compre plástico ni madera barata. Ofrezca un búnker modular diseñado en Paraguay para neutralizar 42°C de calor y bloquear 5°C de humedad helada.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#precios" className="bg-sky-500 hover:bg-sky-600 text-neutral-950 px-8 py-3 rounded-md font-semibold text-lg transition-colors">Ver Modelos y Precios</a>
                <a href="#contacto" className="bg-transparent border border-neutral-700 hover:border-neutral-500 px-8 py-3 rounded-md font-semibold text-lg transition-colors">Contacto B2B / Partners</a>
              </div>
            </div>

            {/* --- UBICACIÓN ESTRATÉGICA DE LA IMAGEN JGP (image_2.png) --- */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-neutral-900/50 border border-neutral-800">
              {/* Esta imagen debe ser image_2.jpg (convertida a webp) */}
              <img 
                src="/modulo-k.webp" 
                alt="Demostración visual del Efecto Termo del Modular K con cámara térmica"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/80 to-transparent p-4">
                <p className="text-sm text-neutral-300 font-medium text-center">Tecnología de Aislación PIR: Verano 42°C vs Interior 24°C | Invierno 5°C vs Interior 20°C</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 2: EL PROBLEMA MÉDICO Y CLIMÁTICO --- */}
        <section className="py-24 px-4 md:px-8 bg-neutral-100">
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-4xl font-bold tracking-tight text-center">La realidad paraguaya: El estrés térmico es crueldad.</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-4 border border-neutral-200">
                <span className="text-5xl">☀️</span>
                <h3 className="text-2xl font-semibold">42°C de Calor Extremo</h3>
                <p className="text-neutral-700">Las cuchas de plástico o madera estándar se convierten en hornos. Provocan golpes de calor y deshidratación.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-4 border border-neutral-200">
                <span className="text-5xl">💧</span>
                <h3 className="text-2xl font-semibold">Humedad y Frío de 5°C</h3>
                <p className="text-neutral-700">El invierno paraguayo es traicionero. El suelo helado sin aislación provoca artrosis y problemas de cadera en razas grandes.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-4 border border-neutral-200">
                <span className="text-5xl">🛡️</span>
                <h3 className="text-2xl font-semibold">La Solución Industrial K</h3>
                <p className="text-neutral-700">Un módulo sellado, con Steel Framing y Panel PIR inyectado, crea un microclima estable todo el año.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 3: ESPECIFICACIONES TÉCNICAS Y SEGMENTOS --- */}
        <section className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">Ingeniería para el Ser Querido.</h2>
              <ul className="space-y-5 text-lg text-neutral-700">
                <li className="flex items-start gap-3"><span className="text-sky-500 font-bold">✓</span> **Estructura Steel Framing:** Acero galvanizado, máxima rigidez estructural para razas de 40kg+.</li>
                <li className="flex items-start gap-3"><span className="text-sky-500 font-bold">✓</span> **Panel Sándwich PIR 50mm:** El mismo material usado en cámaras frigoríficas industriales. Aislación total.</li>
                <li className="flex items-start gap-3"><span className="text-sky-500 font-bold">✓</span> **Piso Técnico Aislado:** Base de chapa (Metal Made) + Barrera de Vapor + PIR + Fenólico + Vinilo de alto tránsito. Cero contacto con el frío del suelo.</li>
                <li className="flex items-start gap-3"><span className="text-sky-500 font-bold">✓</span> **Ventilación Pasiva Cruzada:** Rejillas altas y bajas para disipar calor corporal y humedad.</li>
                <li className="flex items-start gap-3"><span className="text-sky-500 font-bold">✓</span> **Cero Mantenimiento Externo:** Paneles de acero pre-pintado resistentes a la intemperie.</li>
              </ul>
            </div>
            <div className="bg-neutral-900 p-10 rounded-2xl text-white space-y-6">
              <h3 className="text-3xl font-bold">¿Para quién es Modular K?</h3>
              <p className="text-neutral-400">Nuestros módulos están diseñados para una amplia red de Alianzas y Clientes Finales:</p>
              <div className="grid grid-cols-2 gap-5 text-sm">
                <div className="bg-neutral-800 p-4 rounded-md">Veterinarias Premium</div>
                <div className="bg-neutral-800 p-4 rounded-md">Criadores de Razas Grandes</div>
                <div className="bg-neutral-800 p-4 rounded-md">Pet Shops y Tiendas Especializadas</div>
                <div className="bg-neutral-800 p-4 rounded-md">Amos Exigentes (Huskies, Bulldogs)</div>
                <div className="bg-neutral-800 p-4 rounded-md">Gente buscando Calidad de Vida AI</div>
                <div className="bg-neutral-800 p-4 rounded-md">Hoteles y Guarderías Caninas</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 4: TABLA DE PRECIOS Y MODELOS --- */}
        <section id="precios" className="py-24 px-4 md:px-8 bg-neutral-100">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-bold tracking-tight">Opciones y Precios Ideales.</h2>
              <p className="text-xl text-neutral-600">Modelos base 120x120cm. Rentabilidad asegurada para el fabricante y calidad para la mascota.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 items-start">
              {[PRECIOS.K_WOOD, PRECIOS.K_PIR, PRECIOS.B2B].map((tier, index) => {
                const isPIR = index === 1;
                const isB2B = index === 2;
                return (
                  <div key={index} className={`bg-white p-10 rounded-2xl shadow-xl flex flex-col h-full border ${isPIR ? 'border-sky-500 ring-2 ring-sky-100' : 'border-neutral-200'}`}>
                    {isPIR && <span className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-sky-500 text-neutral-950 text-xs font-bold px-3 py-1 rounded-full uppercase">Estrella</span>}
                    <h3 className="text-2xl font-bold">{tier.nombre}</h3>
                    <p className="text-neutral-600 mt-2 flex-grow">{tier.resumen}</p>
                    {isB2B ? (
                      <div className="mt-8 mb-4 text-center">
                        <p className="text-4xl font-extrabold text-neutral-900">Custom</p>
                        <p className="text-neutral-500 text-sm mt-1">Precios por Volumen</p>
                      </div>
                    ) : (
                      <div className="mt-8 mb-4 text-center">
                        <p className="text-5xl font-extrabold text-neutral-900">{formatGs(tier.precio)}</p>
                        <p className="text-neutral-500 text-sm mt-1">IVA Incluido / Retiro en Fábrica</p>
                      </div>
                    )}
                    <button 
                      onClick={() => handleTierSelect(isPIR ? 'K_PIR' : isB2B ? 'B2B' : 'K_WOOD')}
                      className={`w-full mt-8 py-3 rounded-md font-semibold text-center transition-colors ${isPIR ? 'bg-sky-500 hover:bg-sky-600 text-neutral-950' : isB2B ? 'bg-neutral-900 hover:bg-neutral-950 text-white' : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900'}`}
                    >
                      {isB2B ? 'Contactar para Alianza' : 'Solicitar Presupuesto'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 5: CAPTACIÓN DE LEADS / FORMULARIO --- */}
        <section id="contacto" className="py-24 px-4 md:px-8 bg-neutral-950 text-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight">Hablemos de Confort y Negocio.</h2>
              <p className="text-xl text-neutral-300">
                Ya sea para su compañero o para integrarlo a su red de venta veterinaria, complete el formulario. Nos pondremos en contacto para coordinar detalles técnicos o acuerdos comerciales.
              </p>
              <div className="pt-6 space-y-3 text-neutral-400">
                <p>📍 Fábrica Metal Made E.A.S. - Lambaré</p>
                <p>📞 +595 9XX XXX XXX (Atención Comercial)</p>
                <p>✉️ comercial@metalmadeas.com</p>
              </div>
            </div>

            <form className="bg-white p-10 rounded-xl shadow-2xl text-neutral-900 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Nombre / Empresa</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">Teléfono</label>
                  <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Mensaje / Interés (Indicar si es B2B)</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleInputChange} className="mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 p-3" />
              </div>
              <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-neutral-950 px-8 py-3 rounded-md font-semibold text-lg transition-colors">Enviar Solicitud</button>
            </form>
          </div>
        </section>

        {/* --- FOOTER: TRANSFERENCIA DE AUTORIDAD --- */}
        <footer className="py-12 px-4 md:px-8 bg-neutral-900 text-neutral-500 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p>&copy; 2026 Metal Made E.A.S. - Todos los derechos reservados.</p>
            <p className="text-sm">Infraestructura Industrial y Arquitectura para Mascotas - Lambaré, Paraguay.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
