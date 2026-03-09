"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { SOCIAL_PRINCIPLES } from "@/data/socialteaching";

export default function SocialTeachingPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = SOCIAL_PRINCIPLES.filter((p) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      p.principle.toLowerCase().includes(s) ||
      p.definition.toLowerCase().includes(s) ||
      p.modernApplication.toLowerCase().includes(s)
    );
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Catholic Social Teaching"
        subtitle="The Church's wisdom on justice, dignity, and the common good"
        icon="⚖️"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search principles..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <p className="mt-2 text-[10px] text-stone-600">
            {filtered.length} principles
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((p) => (
            <div
              key={p.principle}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === p.principle ? null : p.principle)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-stone-200">
                    {p.principle}
                  </span>
                  <span className="text-stone-600 text-xs">
                    {expanded === p.principle ? "−" : "+"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-stone-500 line-clamp-1">
                  {p.definition}
                </p>
              </button>
              {expanded === p.principle && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Definition
                    </h4>
                    <p className="text-sm text-stone-300">{p.definition}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Key Encyclicals
                    </h4>
                    <ul className="space-y-1">
                      {p.keyEncyclicals.map((e, i) => (
                        <li key={i} className="text-sm italic text-stone-400">
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Aquinas Foundation
                    </h4>
                    <p className="text-sm text-stone-400">
                      {p.aquinasFoundation}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Modern Application
                    </h4>
                    <p className="text-sm text-stone-300">
                      {p.modernApplication}
                    </p>
                  </div>
                  <div className="rounded-lg bg-stone-900 p-3">
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Key Quote
                    </h4>
                    <p className="text-sm italic text-stone-300">
                      &ldquo;{p.keyQuote}&rdquo;
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
