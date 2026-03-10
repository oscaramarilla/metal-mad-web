import type { Metadata } from "next";
import "./globals.css"; // ¡ESTA LÍNEA ES VITAL PARA LOS ESTILOS!
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"; // <-- Medidor de velocidad de Vercel
import { GoogleAnalytics } from '@next/third-parties/google'; // <-- 1. IMPORTAMOS ANALYTICS

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
      {/* Aplicamos el fondo gris plata metálico (zinc-200) y blindamos contra el modo oscuro */}
      <body className="bg-zinc-200 text-zinc-900 antialiased">
        <Navbar />
        
        {/* Agregamos padding superior para que el Navbar fijo no tape el contenido */}
        <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen"> 
          {children} 
        </main>

        {/* MINI BOTÓN FLOTANTE IZQUIERDO */}
        <a 
          href="/MoviAula" 
          className="fixed left-0 bottom-10 bg-blue-800 text-white p-3 sm:px-4 sm:py-3 rounded-r-xl shadow-2xl z-50 flex items-center gap-2 hover:bg-blue-700 hover:pr-6 transition-all border-y border-r border-blue-600 group"
          title="Calculadora de Presupuestos"
        >
          <span className="text-2xl">🧮</span>
          <span className="font-bold hidden sm:block text-sm group-hover:block">Calculadora</span>
        </a>

        {/* Analíticas de rendimiento de Vercel activadas */}
        <SpeedInsights />

        {/* 2. AQUÍ INYECTAMOS TU CÓDIGO DE GOOGLE ANALYTICS */}
        <GoogleAnalytics gaId="G-Z60DLHYCHP" />

        {/* Botón flotante de WhatsApp mejorado */}
        <a 
          href="https://wa.me/595982451828?text=Hola,%20vengo%20de%20la%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.196.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
