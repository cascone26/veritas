"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { DOCTORS } from "@/data/saints";

export default function SaintsPage() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = DOCTORS.filter((d) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      d.name.toLowerCase().includes(s) ||
      d.title.toLowerCase().includes(s) ||
      d.theologicalContribution.toLowerCase().includes(s) ||
      d.majorWorks.some((w) => w.toLowerCase().includes(s))
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Doctors of the Church"
        subtitle="All 37 Doctors — their lives, works, and connection to Aquinas"
        icon="👑"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, title, or work..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <p className="mt-1 text-[10px] text-stone-600">
            {filtered.length} of {DOCTORS.length} Doctors
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((d) => (
            <div
              key={d.name}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() => setExpanded(expanded === d.name ? null : d.name)}
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-stone-200">
                    {d.name}
                  </span>
                  <span className="text-[10px] text-stone-600">{d.lived}</span>
                </div>
                <p className="mt-0.5 text-xs text-amber-600">{d.title}</p>
              </button>
              {expanded === d.name && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Major Works
                    </h4>
                    <ul className="space-y-1">
                      {d.majorWorks.map((w, i) => (
                        <li key={i} className="text-sm text-stone-400">
                          • {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Theological Contribution
                    </h4>
                    <p className="text-sm text-stone-400">
                      {d.theologicalContribution}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Connection to Aquinas
                    </h4>
                    <p className="text-sm text-stone-300">
                      {d.aquinasConnection}
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
