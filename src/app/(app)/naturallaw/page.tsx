"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { NATURAL_LAW_TOPICS } from "@/data/naturallaw";

export default function NaturalLawPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = NATURAL_LAW_TOPICS.filter((t) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      t.topic.toLowerCase().includes(s) ||
      t.naturalLawArgument.toLowerCase().includes(s) ||
      t.modernApplication.toLowerCase().includes(s)
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Natural Law Toolkit"
        subtitle="Arguments, applications, objections, and responses"
        icon="⚖️"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search topics..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <p className="mt-1 text-[10px] text-stone-600">
            {filtered.length} topics
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((t, i) => {
            const globalIndex = NATURAL_LAW_TOPICS.indexOf(t);
            const isExpanded = expanded === globalIndex;
            return (
              <div
                key={i}
                className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
              >
                <button
                  onClick={() =>
                    setExpanded(isExpanded ? null : globalIndex)
                  }
                  className="w-full px-4 py-3 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-sm text-stone-200">
                    {t.topic}
                  </span>
                  <span className="text-stone-600 text-lg">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>
                {isExpanded && (
                  <div className="border-t border-stone-800 px-4 py-4 space-y-4">
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Natural Law Argument
                      </h4>
                      <p className="text-sm text-stone-300">
                        {t.naturalLawArgument}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Aquinas Reference
                      </h4>
                      <p className="text-sm text-stone-400 font-mono text-xs">
                        {t.aquinasReference}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Modern Application
                      </h4>
                      <p className="text-sm text-stone-400">
                        {t.modernApplication}
                      </p>
                    </div>
                    <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-3">
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                        Common Objection
                      </h4>
                      <p className="text-sm italic text-stone-400">
                        &ldquo;{t.commonObjection}&rdquo;
                      </p>
                    </div>
                    <div className="rounded-lg border border-amber-900/30 bg-amber-950/20 p-3">
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-500">
                        Response
                      </h4>
                      <p className="text-sm text-stone-300">{t.response}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
