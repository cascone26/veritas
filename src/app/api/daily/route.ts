import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function GET() {
  try {
    const today = new Date().toISOString().split("T")[0];

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: `You are a Catholic theology daily question generator grounded in St. Thomas Aquinas, the Summa Theologica, Sacred Scripture, and the Catechism of the Catholic Church. Generate one thought-provoking theology question for the day. Return ONLY valid JSON with this exact structure: {"question": "string", "hint": "string", "answer": "string", "citation": "string", "relatedTopics": ["string", "string", "string"]}. No markdown, no explanation, just the JSON object. The question should challenge the reader to think deeply. The hint should nudge toward the answer without giving it away. The citation should reference Aquinas, Scripture, or the Catechism. Include 3-5 related topics.`,
      messages: [
        {
          role: "user",
          content: `Generate a Catholic theology question for ${today}. Make it substantial — something worth meditating on.`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    const daily = JSON.parse(text);

    return new Response(JSON.stringify(daily), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Daily API error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate daily question" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
