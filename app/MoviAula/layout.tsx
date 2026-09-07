import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cotizador de Mobiliario Escolar | Metal Mad",
  description:
    "Estima la inversión en mobiliario escolar inyectado y solicita una cotización formal de Metal Mad.",
};

export default function MoviAulaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
