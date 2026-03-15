import type { Metadata } from "next";
import "./globals.css"; // ¡ESTA LÍNEA ES VITAL PARA LOS ESTILOS!
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"; // <-- Medidor de velocidad de Vercel
import { GoogleAnalytics } from '@next/third-parties/google'; // <-- 1. IMPORTAMOS ANALYTICS
import { Analytics } from "@vercel/analytics/react"; // <-- IMPORTAMOS VERCEL WEB ANALYTICS

// 🧠 AQUÍ ESTÁ LA LLAVE DE GOOGLE SEARCH CONSOLE
export const metadata: Metadata = {
  title: "MetalMadeas | Mobiliario Escolar",
  description: "Fabricación Nacional - Calidad Industrial",
  verification: {
    google: "ZYNVby0FFvKH1CsUb-ZKOZ3Oa7v1Wsd9zWPK_Gcpo2M",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
    <html lang="es">
      {/* Aplicamos el fondo gris plata metálico y blindamos contra el modo oscuro */}
      <body className="bg-zinc-200 text-zinc-900 antialiased">
        <Navbar />

        {/* 🧠 SEO TÉCNICO AVANZADO: Datos Estructurados para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Metal Mad E.A.S.",
              "image": "https://metalmadeas.com/icon.webp",
              "@id": "https://metalmadeas.com",
              "url": "https://metalmadeas.com",
              "telephone": "+595982451828",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lambaré",
                "addressLocality": "Asunción",
                "addressRegion": "Central",
                "addressCountry": "PY"
              },
              "description": "Fábrica de pupitres inyectados y mobiliario escolar en Paraguay. Especialistas en licitaciones y equipamiento B2B para colegios.",
              "sameAs": [
                "https://wa.me/595982451828"
              ]
            })
          }}
        />

        {/* Agregamos padding superior para que el Navbar fijo no tape el contenido */}
        <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
          {children}
        </main>

        {/* BOTÓN FLOTANTE DE WHATSAPP (Cierre de Ventas Global) */}
        <a 
          href="https://wa.me/595982451828?text=Hola%20Metal%20Mad,%20estoy%20visitando%20su%20página%20web%20y%20deseo%20asesoría%20comercial."
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 z-[9999] flex items-center justify-center group"
          title="Contactar a Ventas"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
          <span className="absolute right-16 bg-zinc-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ¡Cotiza ahora!
          </span>
        </a>
      </body>
    </html>
  );
}
