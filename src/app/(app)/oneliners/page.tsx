"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { ONE_LINERS } from "@/data/oneliners";

export default function OneLinersPage() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const topics = ["all", ...Array.from(new Set(ONE_LINERS.map((o) => o.topic)))];

  const filtered = ONE_LINERS.filter((o) => {
    if (topic !== "all" && o.topic !== topic) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        o.line.toLowerCase().includes(s) ||
        o.topic.toLowerCase().includes(s)
      );
    }
    return true;
  });

  const grouped = filtered.reduce<Record<string, typeof ONE_LINERS>>(
    (acc, item) => {
      if (!acc[item.topic]) acc[item.topic] = [];
      acc[item.topic].push(item);
      return acc;
    },
    {}
  );

  const copyToClipboard = (line: string, id: string) => {
    navigator.clipboard.writeText(line);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="One-Liner Arsenal"
        subtitle="Quick responses for common objections — click to copy"
        icon="⚡"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search one-liners..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  topic === t
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                {t === "all" ? "All" : t}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-stone-600">
            {filtered.length} one-liners
          </p>
        </div>
        <div className="px-6 py-4 space-y-6">
          {Object.entries(grouped).map(([topicName, lines]) => (
            <div key={topicName}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                {topicName}
              </h3>
              <div className="space-y-2">
                {lines.map((o, i) => {
                  const id = `${topicName}-${i}`;
                  return (
                    <button
                      key={id}
                      onClick={() => copyToClipboard(o.line, id)}
                      className="w-full rounded-xl border border-stone-800 px-4 py-3 text-left transition-colors hover:border-amber-700/50 hover:bg-stone-900/50"
                    >
                      <p className="text-sm font-medium text-stone-200 leading-relaxed">
                        &ldquo;{o.line}&rdquo;
                      </p>
                      <div className="mt-1 flex items-center justify-between">
                        {o.source && (
                          <span className="text-[10px] text-stone-500">
                            — {o.source}
                          </span>
                        )}
                        <span className="text-[10px] text-stone-600">
                          {copiedId === id ? "Copied!" : "Click to copy"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
