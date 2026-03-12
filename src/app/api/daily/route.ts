import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "ANTHROPIC_API_KEY not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    const anthropic = new Anthropic({ apiKey });
    const today = new Date().toISOString().split("T")[0];

    const weakTopic = request.nextUrl.searchParams.get("weakTopic");

    const topicInstruction = weakTopic
      ? ` The question MUST focus on the topic "${weakTopic}" — this is an area the user is weak in and needs practice with. Frame the question to test understanding of this specific area.`
      : "";

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: `You are a Catholic theology daily question generator grounded in St. Thomas Aquinas, the Summa Theologica, Sacred Scripture, and the Catechism of the Catholic Church. Generate one thought-provoking theology question for the day. Return ONLY valid JSON with this exact structure: {"question": "string", "hint": "string", "answer": "string", "citation": "string", "relatedTopics": ["string", "string", "string"]}. No markdown, no explanation, just the JSON object. The question should challenge the reader to think deeply. The hint should nudge toward the answer without giving it away. The citation should reference Aquinas, Scripture, or the Catechism. Include 3-5 related topics.${topicInstruction}`,
      messages: [
        {
          role: "user",
          content: `Generate a Catholic theology question for ${today}.${weakTopic ? ` Focus on: ${weakTopic}.` : ""} Make it substantial — something worth meditating on.`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    const daily = JSON.parse(text);

    return new Response(JSON.stringify(daily), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Daily API error:", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
