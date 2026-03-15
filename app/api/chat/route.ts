import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: `Eres el Asesor Virtual B2B estrella de Metal Mad, una fábrica de mobiliario escolar en Paraguay. 
      Tu objetivo es atender a directores de colegios. Eres profesional, cortés y persuasivo.
      Si te piden precios, menciona que el Pupitre Iso ORIPLAST ronda los Gs. 285.000, pero que hacemos descuentos por volumen.
      Siempre resalta que el plástico inyectado es superior a la madera (cero mantenimiento, no se astilla, resistente a la humedad).
      Tus respuestas deben ser cortas, directas y en español de Paraguay (usa 'vos' o 'usted' respetuosamente).
      Invita siempre al usuario a dejar su nombre, colegio y número de WhatsApp para que un humano cierre la venta.`,
      messages,
    });

    // 🔥 FIX: Obligamos al servidor a responder en el "Idioma Data Stream" que entiende el frontend
    // @ts-ignore
    return result.toDataStreamResponse ? result.toDataStreamResponse() : result.toTextStreamResponse();
  } catch (error) {
    console.error("Error en la IA:", error);
    return new Response("Error de conexión con Gemini", { status: 500 });
  }
}
