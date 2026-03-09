"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { ANALOGIES } from "@/data/analogies";

export default function AnalogiesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const doctrines = [...new Set(ANALOGIES.map((a) => a.doctrine))];

  const filtered = ANALOGIES.filter((a) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      a.doctrine.toLowerCase().includes(s) ||
      a.analogy.toLowerCase().includes(s) ||
      a.source.toLowerCase().includes(s)
    );
  });

  const grouped = doctrines
    .map((d) => ({
      doctrine: d,
      analogies: filtered.filter((a) => a.doctrine === d),
    }))
    .filter((g) => g.analogies.length > 0);

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Analogy Bank"
        subtitle="Analogies for every major doctrine — with heresy warnings"
        icon="💡"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search analogies..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <p className="mt-1 text-[10px] text-stone-600">
            {filtered.length} analogies across {grouped.length} doctrines
          </p>
        </div>
        <div className="px-6 py-4 space-y-6">
          {grouped.map((group) => (
            <div key={group.doctrine}>
              <h2 className="mb-3 text-sm font-semibold text-amber-500 uppercase tracking-wider">
                {group.doctrine}
              </h2>
              <div className="space-y-2">
                {group.analogies.map((a, i) => {
                  const globalIndex = ANALOGIES.indexOf(a);
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border transition-colors hover:border-stone-700 ${
                        a.heresyWarning
                          ? "border-red-900/50"
                          : "border-stone-800"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setExpanded(
                            expanded === globalIndex ? null : globalIndex
                          )
                        }
                        className="w-full px-4 py-3 text-left"
                      >
                        <p className="text-sm text-stone-200">{a.analogy}</p>
                        <p className="mt-1 text-[10px] text-stone-600">
                          — {a.source}
                        </p>
                        {a.heresyWarning && (
                          <span className="mt-1 inline-block rounded bg-red-900/30 px-2 py-0.5 text-[10px] text-red-400">
                            Heresy Warning
                          </span>
                        )}
                      </button>
                      {expanded === globalIndex && (
                        <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                          <div>
                            <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                              Strengths
                            </h4>
                            <ul className="space-y-1">
                              {a.strengths.map((s, j) => (
                                <li
                                  key={j}
                                  className="text-sm text-stone-400"
                                >
                                  • {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-yellow-500">
                              Limitations
                            </h4>
                            <ul className="space-y-1">
                              {a.limitations.map((l, j) => (
                                <li
                                  key={j}
                                  className="text-sm text-stone-400"
                                >
                                  • {l}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {a.heresyWarning && (
                            <div className="rounded-lg border border-red-900/50 bg-red-950/30 p-3">
                              <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                                Heresy Warning
                              </h4>
                              <p className="text-sm text-red-300">
                                {a.heresyWarning}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
