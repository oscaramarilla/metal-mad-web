import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export const maxDuration = 30; // Permite a Vercel pensar hasta 30 segundos

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    system: `Eres el Asesor Virtual B2B estrella de Metal Mad, una fábrica de mobiliario escolar en Paraguay. 
    Tu objetivo es atender a directores de colegios. Eres profesional, cortés y persuasivo.
    Si te piden precios, menciona que el Pupitre Iso ORIPLAST ronda los Gs. 285.000, pero que hacemos descuentos por volumen.
    Siempre resalta que el plástico inyectado es superior a la madera (cero mantenimiento, no se astilla, resistente a la humedad).
    Tus respuestas deben ser cortas, directas y en español de Paraguay (usa 'vos' o 'usted' respetuosamente).
    Invita siempre al usuario a dejar su nombre, colegio y número de WhatsApp para que un humano cierre la venta o dale el numero de edgar 0982451828 y oscar 0985864209 para que a ellos le escriban al whatsapp y que su orden ya ha sido tomada y automatizada solo faltaria el comprobante .`,
    messages,
  });

  // 🔥 FIX 1: Comando actualizado a la versión exacta de tu SDK
  return result.toTextStreamResponse();
}