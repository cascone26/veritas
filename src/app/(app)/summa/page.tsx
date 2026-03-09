"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SUMMA_STRUCTURE } from "@/data/summa";

const PART_ID_TO_URL: Record<string, string> = {
  "prima-pars": "I",
  "prima-secundae": "I-II",
  "secunda-secundae": "II-II",
  "tertia-pars": "III",
  supplement: "supplement",
};

export default function SummaBrowser() {
  const [selectedPart, setSelectedPart] = useState<string>("prima-pars");
  const [search, setSearch] = useState("");
  const [expandedQ, setExpandedQ] = useState<string | null>(null);

  const part = SUMMA_STRUCTURE.find((p) => p.id === selectedPart);
  const urlPart = PART_ID_TO_URL[selectedPart] || selectedPart;
  const filtered = part?.questions.filter(
    (q) =>
      !search ||
      q.title.toLowerCase().includes(search.toLowerCase()) ||
      `q.${q.number}`.includes(search) ||
      `question ${q.number}`.includes(search.toLowerCase())
  );

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Summa Browser"
        subtitle="512 questions, 2,669 articles — searchable and cross-referenced"
        icon="📖"
      />
      <div className="flex-1 overflow-y-auto">
        {/* Part selector */}
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {SUMMA_STRUCTURE.map((p) => (
              <button
                key={p.id}
                onClick={() => { setSelectedPart(p.id); setSearch(""); }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedPart === p.id
                    ? "bg-amber-600/20 text-amber-400"
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="mt-2 w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
        </div>

        {/* Part info */}
        {part && (
          <div className="border-b border-stone-800 bg-stone-900/30 px-6 py-4">
            <h2 className="text-base font-semibold text-stone-200">{part.fullName}</h2>
            <p className="mt-1 text-xs text-stone-500">{part.description}</p>
            <p className="mt-1 text-xs text-amber-600">
              {part.questions.length} questions
            </p>
          </div>
        )}

        {/* Questions */}
        <div className="px-6 py-4">
          <div className="space-y-1">
            {filtered?.map((q) => {
              const key = `${selectedPart}-${q.number}`;
              const isExpanded = expandedQ === key;
              return (
                <div
                  key={key}
                  className="rounded-lg border border-stone-800/50 transition-colors hover:border-stone-700 hover:bg-stone-900/50"
                >
                  <div className="flex items-center">
                    <Link
                      href={`/summa/${urlPart}/${q.number}`}
                      className="flex flex-1 items-center justify-between px-4 py-2.5"
                    >
                      <div>
                        <span className="mr-2 text-xs font-mono text-amber-600">
                          Q.{q.number}
                        </span>
                        <span className="text-sm text-stone-300">{q.title}</span>
                      </div>
                      <span className="text-[10px] text-stone-600">
                        {q.articles} art.
                      </span>
                    </Link>
                    <button
                      onClick={() => setExpandedQ(isExpanded ? null : key)}
                      className="px-3 py-2.5 text-stone-600 transition-colors hover:text-stone-400"
                      aria-label="Toggle details"
                    >
                      <svg
                        className={`h-3.5 w-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="border-t border-stone-800 px-4 py-2 text-xs text-stone-500">
                      <p>ST {urlPart}, q.{q.number} — {q.articles} articles</p>
                      <p className="mt-1">
                        Use Ask Aquinas to explore: &ldquo;Explain ST {urlPart}, q.{q.number}&rdquo;
                      </p>
                      <Link
                        href={`/summa/${urlPart}/${q.number}`}
                        className="mt-2 inline-block text-amber-500 transition-colors hover:text-amber-400"
                      >
                        Read full text &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
