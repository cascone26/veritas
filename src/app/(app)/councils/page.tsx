"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { COUNCILS } from "@/data/councils";

export default function CouncilsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = COUNCILS.filter((c) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(s) ||
      c.location.toLowerCase().includes(s) ||
      c.issue.toLowerCase().includes(s) ||
      (c.pope && c.pope.toLowerCase().includes(s))
    );
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Ecumenical Councils"
        subtitle="All 21 ecumenical councils of the Catholic Church"
        icon="🏛️"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search councils..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <p className="mt-2 text-[10px] text-stone-600">
            {filtered.length} councils
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((c, index) => (
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
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-900 text-[10px] font-bold text-amber-500 border border-stone-800">
                      {index + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-sm text-stone-200">
                        {c.name}
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-amber-600">
                          {c.year}
                        </span>
                        <span className="text-[10px] text-stone-700">
                          &bull;
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {c.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-stone-600 text-xs">
                    {expanded === c.name ? "−" : "+"}
                  </span>
                </div>
              </button>
              {expanded === c.name && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Year
                      </h4>
                      <p className="text-sm text-stone-300">{c.year}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Location
                      </h4>
                      <p className="text-sm text-stone-300">{c.location}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Pope
                      </h4>
                      <p className="text-sm text-stone-300">
                        {c.pope || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Central Issue
                    </h4>
                    <p className="text-sm text-stone-300">{c.issue}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Key Definitions
                    </h4>
                    <ul className="space-y-1">
                      {c.keyDefinitions.map((d, i) => (
                        <li key={i} className="text-sm text-stone-400">
                          &bull; {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Significance
                    </h4>
                    <p className="text-sm text-stone-400">{c.significance}</p>
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
