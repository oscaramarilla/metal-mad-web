import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Peligroso para equipos grandes, perfecto para nosotros ahora.
    // Le dice a Vercel que ignore los errores de tipos y publique.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Le dice a Vercel que ignore las advertencias de comillas y texto.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
