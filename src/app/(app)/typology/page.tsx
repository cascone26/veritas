"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { TYPOLOGIES } from "@/data/typology";

export default function TypologyPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = TYPOLOGIES.filter((t) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      t.otType.toLowerCase().includes(s) ||
      t.ntAntitype.toLowerCase().includes(s) ||
      t.explanation.toLowerCase().includes(s)
    );
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Typology Index"
        subtitle="Old Testament types fulfilled in the New Testament"
        icon="🔗"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search types and antitypes..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <p className="mt-2 text-[10px] text-stone-600">
            {filtered.length} typologies
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((t) => (
            <div
              key={t.otType}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === t.otType ? null : t.otType)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-600">
                      OT Type
                    </span>
                    <p className="text-sm font-semibold text-amber-500">
                      {t.otType}
                    </p>
                    <p className="text-[10px] text-stone-500">
                      {t.otPassages[0]}
                    </p>
                  </div>
                  <div className="text-stone-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-600">
                      NT Antitype
                    </span>
                    <p className="text-sm font-semibold text-emerald-400">
                      {t.ntAntitype}
                    </p>
                    <p className="text-[10px] text-stone-500">
                      {t.ntPassages[0]}
                    </p>
                  </div>
                </div>
              </button>
              {expanded === t.otType && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Explanation
                    </h4>
                    <p className="text-sm text-stone-300">{t.explanation}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Apologetic Use
                    </h4>
                    <p className="text-sm text-stone-400">
                      {t.apologeticUse}
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
