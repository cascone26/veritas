"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ObjectionHandler() {
  const [objection, setObjection] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!objection.trim() || loading) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/objection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ objection: objection.trim() }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let content = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          content += decoder.decode(value);
          setResponse(content);
        }
      }
    } catch {
      setResponse("Error generating response. Check your API key.");
    } finally {
      setLoading(false);
    }
  };

  const examples = [
    "Catholics worship Mary and the saints",
    "The Bible never mentions purgatory",
    "If God is good, why does evil exist?",
    "The Crusades prove religion is violent",
    "Sola Scriptura — the Bible is the only authority",
    "Science has disproven God",
    "The Trinity is polytheism",
    "Priestly celibacy is unbiblical",
  ];

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Objection Handler"
        subtitle="Paste any anti-Catholic argument. Get a structured Thomistic response."
        icon="🛡️"
      />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-2xl">
          {/* Input */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-stone-300">
              The Objection
            </label>
            <textarea
              value={objection}
              onChange={(e) => setObjection(e.target.value)}
              placeholder="Paste or type the argument against the Catholic faith..."
              rows={4}
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-600"
            />
            <button
              onClick={handleSubmit}
              disabled={loading || !objection.trim()}
              className="mt-3 rounded-xl bg-amber-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-500 disabled:opacity-40"
            >
              {loading ? "Generating Response..." : "Handle This Objection"}
            </button>
          </div>

          {/* Examples */}
          {!response && (
            <div className="mb-8">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-600">
                Common Objections — Click to Load
              </h3>
              <div className="flex flex-wrap gap-2">
                {examples.map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setObjection(ex)}
                    className="rounded-lg border border-stone-800 bg-stone-900 px-3 py-1.5 text-xs text-stone-400 transition-colors hover:border-amber-700 hover:text-amber-400"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Response */}
          {response && (
            <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-6">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                Thomistic Response
              </div>
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-stone-300">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
