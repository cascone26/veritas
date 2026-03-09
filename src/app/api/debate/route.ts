import Anthropic from "@anthropic-ai/sdk";
import { DEBATE_PREP_PROMPT } from "@/lib/constants";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { topic, opponent } = await req.json();

    if (!topic || typeof topic !== "string") {
      return new Response(JSON.stringify({ error: "topic string is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!opponent || typeof opponent !== "string") {
      return new Response(JSON.stringify({ error: "opponent string is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: DEBATE_PREP_PROMPT,
      messages: [{ role: "user", content: `Topic: ${topic}\nOpponent: ${opponent}` }],
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(new TextEncoder().encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Debate API error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
