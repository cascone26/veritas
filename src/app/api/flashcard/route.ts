import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { topic, difficulty } = await req.json();

    if (!topic || typeof topic !== "string") {
      return new Response(JSON.stringify({ error: "topic string is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const difficultyLevel = difficulty || "intermediate";

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: `You are a Catholic theology flashcard generator grounded in St. Thomas Aquinas and the Catechism. Generate exactly 5 flashcards in JSON format. Each flashcard must have: question (string), answer (string), citation (string — e.g. "ST I, q.2, a.3" or "CCC 1234"), and difficulty (string — "beginner", "intermediate", or "advanced"). Return ONLY valid JSON — an array of 5 objects. No markdown, no explanation, just the JSON array.`,
      messages: [
        {
          role: "user",
          content: `Generate 5 ${difficultyLevel}-level flashcards on the topic: ${topic}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    const flashcards = JSON.parse(text);

    return new Response(JSON.stringify({ flashcards }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Flashcard API error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate flashcards" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
