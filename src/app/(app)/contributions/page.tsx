"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { CONTRIBUTIONS } from "@/data/contributions";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "science", label: "Science" },
  { id: "education", label: "Education" },
  { id: "art", label: "Art" },
  { id: "law", label: "Law" },
  { id: "charity", label: "Charity" },
  { id: "philosophy", label: "Philosophy" },
  { id: "music", label: "Music" },
];

export default function ContributionsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = CONTRIBUTIONS.filter((c) => {
    if (category !== "all" && c.category !== category) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        c.title.toLowerCase().includes(s) ||
        c.description.toLowerCase().includes(s) ||
        c.keyFigures.some((f) => f.toLowerCase().includes(s))
      );
    }
    return true;
  });

  const categoryIcon = (cat: string) => {
    switch (cat) {
      case "science": return "🔬";
      case "education": return "🎓";
      case "art": return "🎨";
      case "law": return "⚖️";
      case "charity": return "❤️";
      case "philosophy": return "🤔";
      case "music": return "🎵";
      default: return "📌";
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Catholic Contributions"
        subtitle="How the Church built Western civilization"
        icon="🏛️"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contributions..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  category === c.id
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-stone-600">
            {filtered.length} contributions
          </p>
        </div>
        <div className="px-6 py-4 grid gap-3 sm:grid-cols-2">
          {filtered.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-stone-800 p-4 transition-colors hover:border-stone-700"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">{categoryIcon(c.category)}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm text-stone-200">
                      {c.title}
                    </h3>
                    {c.dates && (
                      <span className="text-[10px] text-stone-600">
                        {c.dates}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-stone-400">
                    {c.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {c.keyFigures.map((f, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-stone-900 px-2 py-0.5 text-[10px] text-amber-500 border border-stone-800"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
