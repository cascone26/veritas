"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SPIRITUAL_BOOKS, type SpiritualBook } from "@/data/spiritual-reading";

type Difficulty = SpiritualBook["difficulty"];

const DIFFICULTIES: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export default function SpiritualReadingPage() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = SPIRITUAL_BOOKS.filter((b) => {
    if (difficulty !== "all" && b.difficulty !== difficulty) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        b.title.toLowerCase().includes(s) ||
        b.author.toLowerCase().includes(s) ||
        b.covers.toLowerCase().includes(s)
      );
    }
    return true;
  });

  const difficultyColor = (d: Difficulty) => {
    switch (d) {
      case "beginner": return "text-emerald-400 border-emerald-800 bg-emerald-900/30";
      case "intermediate": return "text-amber-400 border-amber-800 bg-amber-900/30";
      case "advanced": return "text-red-400 border-red-800 bg-red-900/30";
    }
  };

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Spiritual Reading Guide"
        subtitle="Essential Catholic books for every stage of the journey"
        icon="📖"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, author, or topic..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <div className="flex gap-2">
            {DIFFICULTIES.map((d) => (
              <button
                key={d.id}
                onClick={() => setDifficulty(d.id)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  difficulty === d.id
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-stone-600">
            {filtered.length} books
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((b) => (
            <div
              key={b.slug}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === b.slug ? null : b.slug)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-stone-200">
                      {b.title}
                    </span>
                    <span className="text-xs text-stone-500">
                      — {b.author}
                    </span>
                    {b.availableOnSite && (
                      <span className="rounded-full bg-emerald-900/40 border border-emerald-800 px-2 py-0.5 text-[10px] text-emerald-400">
                        Read on Site
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] border ${difficultyColor(b.difficulty)}`}>
                      {b.difficulty}
                    </span>
                    <span className="text-[10px] text-stone-600">
                      {b.period}
                    </span>
                  </div>
                </div>
              </button>
              {expanded === b.slug && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div className="flex flex-wrap gap-3 text-[11px] text-stone-500">
                    <span>{b.chapters} chapters</span>
                    <span className="text-stone-700">|</span>
                    <span>{b.wordCount}</span>
                    <span className="text-stone-700">|</span>
                    <span>{b.readingDays}</span>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      What It Covers
                    </h4>
                    <p className="text-sm text-stone-300">{b.covers}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Best For
                    </h4>
                    <p className="text-sm text-stone-400">{b.bestFor}</p>
                  </div>
                  <div className="rounded-lg bg-stone-900 p-3">
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Key Insight
                    </h4>
                    <p className="text-sm italic text-stone-300">
                      {b.keyInsight}
                    </p>
                  </div>
                  {b.availableOnSite ? (
                    <Link
                      href={`/spiritual-reading/${b.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-900/30 border border-emerald-800 px-4 py-2 text-sm text-emerald-400 transition-colors hover:bg-emerald-900/50"
                    >
                      Read Full Text
                      <span className="text-xs">→</span>
                    </Link>
                  ) : (
                    <p className="text-xs text-stone-600 italic">
                      {b.purchaseNote}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
