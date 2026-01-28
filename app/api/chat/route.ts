import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { NIGERIAN_REAL_ESTATE_SYSTEM_PROMPT } from '@/lib/prompts/real-estate';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: google('gemini-2.0-flash'),
      system: NIGERIAN_REAL_ESTATE_SYSTEM_PROMPT,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
