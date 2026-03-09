"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { HERESIES } from "@/data/heresies";

export default function HeresyIndex() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = HERESIES.filter((h) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return h.name.toLowerCase().includes(s) || h.coreClaim.toLowerCase().includes(s) || h.founder.toLowerCase().includes(s);
  });

  return (
    <div className="flex h-screen flex-col">
      <PageHeader title="Heresy Index" subtitle="Every major heresy — what it claims, why it's wrong, where Aquinas refutes it" icon="🔥" />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search heresies..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700" />
          <p className="mt-1 text-[10px] text-stone-600">{filtered.length} heresies catalogued</p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((h) => (
            <div key={h.name} className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700">
              <button onClick={() => setExpanded(expanded === h.name ? null : h.name)} className="w-full px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-stone-200">{h.name}</span>
                  <span className="text-[10px] text-stone-600">{h.period}</span>
                </div>
                <p className="mt-1 text-xs text-stone-500">Founded by {h.founder}</p>
                {expanded !== h.name && <p className="mt-1 text-xs text-stone-500 line-clamp-1">{h.coreClaim}</p>}
              </button>
              {expanded === h.name && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400">Core Claim</h4>
                    <p className="text-sm text-stone-400">{h.coreClaim}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">Refutation</h4>
                    <p className="text-sm leading-relaxed text-stone-300">{h.refutation}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-[11px]">
                    <span className="text-amber-600">Aquinas: {h.aquinasRef}</span>
                    {h.councilResponse && <span className="text-stone-500">Council: {h.councilResponse}</span>}
                  </div>
                  {h.modernEchoes && (
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-stone-600">Modern Echoes</h4>
                      <p className="text-xs text-stone-500">{h.modernEchoes}</p>
                    </div>
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
