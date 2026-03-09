"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { CRITIC_THINKERS } from "@/data/critics";

const CATEGORIES = [
  { id: "all", label: "All", match: "" },
  { id: "new-atheist", label: "New Atheist", match: "New Atheism" },
  { id: "philosopher", label: "Philosopher", match: "Philosophy" },
  { id: "biblical-critic", label: "Biblical Critic", match: "criticism" },
  { id: "existentialist", label: "Existentialist", match: "existentialism" },
  { id: "marxist", label: "Marxist", match: "Political economy" },
];

export default function CriticsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = CRITIC_THINKERS.filter((c) => {
    if (category !== "all") {
      const cat = CATEGORIES.find((ct) => ct.id === category);
      if (cat && !c.field.toLowerCase().includes(cat.match.toLowerCase())) return false;
    }
    if (search) {
      const s = search.toLowerCase();
      return (
        c.name.toLowerCase().includes(s) ||
        c.keyWorks.some((w) => w.toLowerCase().includes(s)) ||
        c.coreArguments.some((a) => a.toLowerCase().includes(s))
      );
    }
    return true;
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Modern Critics Index"
        subtitle="Know the opposition, answer with charity and precision"
        icon="⚔️"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search critics, works, or arguments..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  category === cat.id
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-stone-600">
            {filtered.length} critics
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === c.name ? null : c.name)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-stone-200">
                    {c.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-stone-900 px-2 py-0.5 text-[10px] text-stone-500 border border-stone-800">
                      {c.field}
                    </span>
                    <span className="text-[10px] text-stone-600">
                      {c.dates}
                    </span>
                  </div>
                </div>
              </button>
              {expanded === c.name && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Key Works
                    </h4>
                    <ul className="space-y-1">
                      {c.keyWorks.map((w, i) => (
                        <li key={i} className="text-sm italic text-stone-400">
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Core Arguments
                    </h4>
                    <ul className="space-y-1">
                      {c.coreArguments.map((a, i) => (
                        <li key={i} className="text-sm text-stone-400">
                          &bull; {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Weaknesses
                    </h4>
                    <ul className="space-y-1">
                      {c.weaknesses.map((w, i) => (
                        <li key={i} className="text-sm text-stone-300">
                          &bull; {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Catholic Response
                    </h4>
                    <ul className="space-y-1">
                      {c.catholicResponses.map((r, i) => (
                        <li key={i} className="text-sm text-stone-300">
                          &bull; {r}
                        </li>
                      ))}
                    </ul>
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
