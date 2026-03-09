"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { SCRIPTURE_ENTRIES } from "@/data/scripture";

const CATEGORIES = [
  "all", "sola-scriptura", "sola-fide", "eucharist", "mary",
  "papacy", "purgatory", "saints", "salvation", "authority",
];

export default function ScriptureIndex() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = SCRIPTURE_ENTRIES.filter((e) => {
    if (category !== "all" && e.category !== category) return false;
    if (search) {
      const s = search.toLowerCase();
      return e.reference.toLowerCase().includes(s) || e.text.toLowerCase().includes(s);
    }
    return true;
  });

  return (
    <div className="flex h-screen flex-col">
      <PageHeader title="Scripture Index" subtitle="Contested verses with Catholic interpretation and Thomistic defense" icon="📜" />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCategory(c)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${category === c ? "bg-amber-600/20 text-amber-400" : "text-stone-500 hover:text-stone-300"}`}
              >{c.replace("-", " ")}</button>
            ))}
          </div>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search verses..."
            className="mt-2 w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700" />
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((entry) => (
            <div key={entry.reference} className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700">
              <button onClick={() => setExpanded(expanded === entry.reference ? null : entry.reference)}
                className="w-full px-4 py-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-500">{entry.reference}</span>
                  <span className="rounded-md bg-stone-800 px-1.5 py-0.5 text-[10px] uppercase text-stone-500">{entry.category.replace("-", " ")}</span>
                </div>
                <p className="mt-1 text-sm italic text-stone-400">&ldquo;{entry.text}&rdquo;</p>
              </button>
              {expanded === entry.reference && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400">Protestant Claim</h4>
                    <p className="text-sm text-stone-400">{entry.protestantClaim}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">Catholic Response</h4>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-stone-300">{entry.catholicResponse}</p>
                  </div>
                  {entry.aquinasRef && (
                    <p className="text-[11px] text-amber-600">Aquinas: {entry.aquinasRef}</p>
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
