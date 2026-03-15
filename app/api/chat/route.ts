import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    messages,
    system: `Eres el Asesor Virtual de Metal Mad en Paraguay. Responde de forma muy corta y profesional. Usa el 'vos' paraguayo.`,
  });

  // Usamos la respuesta de texto simple que tu versión de la librería exige
  return result.toTextStreamResponse();
}
