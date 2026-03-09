"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { CHURCH_FATHERS } from "@/data/fathers";

const TRADITIONS = [
  { id: "all", label: "All" },
  { id: "latin", label: "Latin" },
  { id: "greek", label: "Greek" },
  { id: "syriac", label: "Syriac" },
];

export default function FathersPage() {
  const [tradition, setTradition] = useState("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = CHURCH_FATHERS.filter((f) => {
    if (tradition !== "all" && f.tradition !== tradition) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        f.name.toLowerCase().includes(s) ||
        f.majorWorks.some((w) => w.toLowerCase().includes(s)) ||
        f.keyContributions.some((c) => c.toLowerCase().includes(s))
      );
    }
    return true;
  });

  const traditionColor = (t: string) => {
    switch (t) {
      case "latin": return "text-blue-400";
      case "greek": return "text-emerald-400";
      case "syriac": return "text-orange-400";
      default: return "text-stone-400";
    }
  };

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Church Fathers"
        subtitle="The great theologians of the first millennium"
        icon="📜"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Fathers..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <div className="flex gap-2">
            {TRADITIONS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTradition(t.id)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  tradition === t.id
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-stone-600">
            {filtered.length} Fathers
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((f) => (
            <div
              key={f.name}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() => setExpanded(expanded === f.name ? null : f.name)}
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-stone-200">
                    {f.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-medium uppercase ${traditionColor(f.tradition)}`}>
                      {f.tradition}
                    </span>
                    <span className="text-[10px] text-stone-600">{f.lived}</span>
                  </div>
                </div>
              </button>
              {expanded === f.name && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Major Works
                    </h4>
                    <ul className="space-y-1">
                      {f.majorWorks.map((w, i) => (
                        <li key={i} className="text-sm text-stone-400">• {w}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Key Contributions
                    </h4>
                    <ul className="space-y-1">
                      {f.keyContributions.map((c, i) => (
                        <li key={i} className="text-sm text-stone-400">• {c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Best Quote
                    </h4>
                    <p className="text-sm italic text-stone-300">
                      &ldquo;{f.bestQuote}&rdquo;
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
