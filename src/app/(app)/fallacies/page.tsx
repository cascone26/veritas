"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { FALLACIES } from "@/data/fallacies";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "formal", label: "Formal" },
  { id: "informal", label: "Informal" },
  { id: "relevance", label: "Relevance" },
  { id: "ambiguity", label: "Ambiguity" },
  { id: "presumption", label: "Presumption" },
];

export default function FallaciesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = FALLACIES.filter((f) => {
    if (category !== "all" && f.category !== category) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        f.name.toLowerCase().includes(s) ||
        (f.latin && f.latin.toLowerCase().includes(s)) ||
        f.definition.toLowerCase().includes(s)
      );
    }
    return true;
  });

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Logical Fallacy Index"
        subtitle="Identify and counter bad reasoning"
        icon="🧠"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fallacies..."
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
            {filtered.length} fallacies
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((f) => (
            <div
              key={f.name}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === f.name ? null : f.name)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-sm text-stone-200">
                      {f.name}
                    </span>
                    {f.latin && (
                      <span className="ml-2 text-xs italic text-stone-500">
                        ({f.latin})
                      </span>
                    )}
                  </div>
                  <span className="rounded-full bg-stone-900 px-2 py-0.5 text-[10px] text-stone-500 border border-stone-800">
                    {f.category}
                  </span>
                </div>
                <p className="mt-1 text-xs text-stone-400 line-clamp-1">
                  {f.definition}
                </p>
              </button>
              {expanded === f.name && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Definition
                    </h4>
                    <p className="text-sm text-stone-400">{f.definition}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Theological Example
                    </h4>
                    <p className="text-sm text-stone-300">
                      {f.example}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      How to Counter
                    </h4>
                    <p className="text-sm text-stone-300">{f.howToCounter}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
