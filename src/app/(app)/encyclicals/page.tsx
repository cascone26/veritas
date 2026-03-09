"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { ENCYCLICALS } from "@/data/encyclicals";

type SortOrder = "newest" | "oldest";

export default function EncyclicalsPage() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = ENCYCLICALS.filter((e) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      e.title.toLowerCase().includes(s) ||
      e.pope.toLowerCase().includes(s) ||
      e.topic.toLowerCase().includes(s) ||
      e.summary.toLowerCase().includes(s)
    );
  }).sort((a, b) =>
    sortOrder === "newest" ? b.year - a.year : a.year - b.year
  );

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Papal Encyclicals"
        subtitle="Major encyclicals with Thomistic connections"
        icon="📋"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, pope, or topic..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-stone-600">
              {filtered.length} encyclicals
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setSortOrder("newest")}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  sortOrder === "newest"
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                Newest First
              </button>
              <button
                onClick={() => setSortOrder("oldest")}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  sortOrder === "oldest"
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                Oldest First
              </button>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((e) => (
            <div
              key={e.title}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === e.title ? null : e.title)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-stone-200">
                    {e.title}
                  </span>
                  <span className="text-[10px] text-stone-600">{e.year}</span>
                </div>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="text-xs text-amber-600">{e.pope}</span>
                  <span className="text-[10px] text-stone-600">•</span>
                  <span className="text-xs text-stone-500">{e.topic}</span>
                </div>
              </button>
              {expanded === e.title && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Summary
                    </h4>
                    <p className="text-sm text-stone-400">{e.summary}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Key Quotes
                    </h4>
                    <ul className="space-y-2">
                      {e.keyQuotes.map((q, i) => (
                        <li key={i} className="text-sm italic text-stone-300">
                          &ldquo;{q}&rdquo;
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Thomistic Connection
                    </h4>
                    <p className="text-sm text-stone-300">
                      {e.thomisticConnection}
                    </p>
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
