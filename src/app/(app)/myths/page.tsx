"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { MYTHS } from "@/data/myths";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "history", label: "History" },
  { id: "doctrine", label: "Doctrine" },
  { id: "bible", label: "Bible" },
  { id: "practice", label: "Practice" },
  { id: "science", label: "Science" },
];

export default function MythsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = MYTHS.filter((m) => {
    if (category !== "all" && m.category !== category) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        m.myth.toLowerCase().includes(s) ||
        m.correction.toLowerCase().includes(s)
      );
    }
    return true;
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Anti-Catholic Myth Buster"
        subtitle="Common myths demolished with facts and sources"
        icon="💥"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search myths..."
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
            {filtered.length} myths busted
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((m) => (
            <div
              key={m.myth}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === m.myth ? null : m.myth)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-500 text-xs font-bold">
                      MYTH
                    </span>
                    <span className="font-semibold text-sm text-red-400">
                      &ldquo;{m.myth}&rdquo;
                    </span>
                  </div>
                  <span className="shrink-0 rounded-full bg-stone-900 px-2 py-0.5 text-[10px] text-stone-500 border border-stone-800">
                    {m.category}
                  </span>
                </div>
              </button>
              {expanded === m.myth && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                      The Truth
                    </h4>
                    <p className="text-sm text-stone-300">{m.correction}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Key Sources
                    </h4>
                    <ul className="space-y-1">
                      {m.keySources.map((s, i) => (
                        <li key={i} className="text-sm text-stone-400">
                          &bull; {s}
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
