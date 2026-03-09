"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { DENOMINATIONS } from "@/data/denominations";

export default function DenominationMap() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="flex h-app flex-col">
      <PageHeader title="Denominational Map" subtitle="What each denomination believes — and how to engage them" icon="🗂️" />
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-2">
          {DENOMINATIONS.map((d) => (
            <div key={d.name} className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700">
              <button onClick={() => setExpanded(expanded === d.name ? null : d.name)} className="w-full px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-stone-200">{d.name}</span>
                  <span className="text-[10px] text-stone-600">{d.founded}</span>
                </div>
                <p className="mt-0.5 text-xs text-stone-500">Founded by {d.founder}</p>
              </button>
              {expanded === d.name && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">Key Beliefs</h4>
                    <ul className="space-y-1">{d.keyBeliefs.map((b, i) => <li key={i} className="text-sm text-stone-400">• {b}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400">Differences from Catholic</h4>
                    <ul className="space-y-1">{d.differencesFromCatholic.map((d2, i) => <li key={i} className="text-sm text-stone-400">• {d2}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-green-400">Best Approach</h4>
                    <p className="text-sm text-stone-300">{d.bestApproach}</p>
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
