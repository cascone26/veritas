import Anthropic from "@anthropic-ai/sdk";
import { DEBATE_PREP_PROMPT } from "@/lib/constants";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "ANTHROPIC_API_KEY not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    const anthropic = new Anthropic({ apiKey });

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
          const errMsg = err instanceof Error ? err.message : "Stream error";
          controller.enqueue(new TextEncoder().encode(`\n[Error: ${errMsg}]`));
          controller.close();
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
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Debate API error:", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
