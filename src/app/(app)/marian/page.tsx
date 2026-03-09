"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { MARIAN_DOGMAS, MARIAN_TITLES } from "@/data/marian";

export default function MarianPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredTitles = MARIAN_TITLES.filter((t) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      t.title.toLowerCase().includes(s) ||
      t.meaning.toLowerCase().includes(s)
    );
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Marian Encyclopedia"
        subtitle="Dogmas, titles, and theology of the Blessed Virgin Mary"
        icon="👑"
      />
      <div className="flex-1 overflow-y-auto">
        {/* Dogmas Section */}
        <div className="border-b border-stone-800 px-6 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-3">
            The Four Marian Dogmas
          </h2>
          <div className="space-y-2">
            {MARIAN_DOGMAS.map((d) => (
              <div
                key={d.name}
                className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
              >
                <button
                  onClick={() =>
                    setExpanded(expanded === d.name ? null : d.name)
                  }
                  className="w-full px-4 py-3 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-stone-200">
                      {d.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-stone-600">
                        Defined {d.yearDefined}
                      </span>
                      <span className="text-stone-600 text-xs">
                        {expanded === d.name ? "−" : "+"}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-stone-500 line-clamp-1">
                    {d.definition}
                  </p>
                </button>
                {expanded === d.name && (
                  <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Formal Definition
                      </h4>
                      <p className="text-sm text-stone-300">{d.definition}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Scriptural Basis
                      </h4>
                      <ul className="space-y-1">
                        {d.scripturalBasis.map((s, i) => (
                          <li key={i} className="text-sm text-stone-400">
                            &bull; {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Patristic Witness
                      </h4>
                      <p className="text-sm text-stone-400">
                        {d.patristicWitness}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Aquinas on This Dogma
                      </h4>
                      <p className="text-sm text-stone-400">
                        {d.aquinasTeaching}
                      </p>
                    </div>
                    <div className="rounded-lg bg-stone-900 p-3">
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                        Common Objection
                      </h4>
                      <p className="text-sm italic text-stone-400">
                        &ldquo;{d.commonObjection}&rdquo;
                      </p>
                      <h4 className="mb-1 mt-2 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                        Response
                      </h4>
                      <p className="text-sm text-stone-300">{d.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Titles Section */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Marian Titles
            </h2>
            <span className="text-[10px] text-stone-600">
              {filteredTitles.length} titles
            </span>
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search titles..."
            className="mb-3 w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTitles.map((t) => (
              <div
                key={t.title}
                className="rounded-lg border border-stone-800 px-3 py-2 transition-colors hover:border-stone-700"
              >
                <p className="text-sm font-medium text-stone-200">
                  {t.title}
                </p>
                <p className="text-xs text-stone-500">{t.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
