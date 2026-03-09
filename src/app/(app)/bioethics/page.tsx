"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { BIOETHICS } from "@/data/bioethics";

export default function BioethicsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = BIOETHICS.filter((b) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      b.topic.toLowerCase().includes(s) ||
      b.catholicPosition.toLowerCase().includes(s) ||
      b.naturalLawArgument.toLowerCase().includes(s)
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Bioethics Reference"
        subtitle="Catholic moral theology applied to life issues"
        icon="🧬"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search bioethics topics..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <p className="mt-2 text-[10px] text-stone-600">
            {filtered.length} topics
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((b) => (
            <div
              key={b.topic}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === b.topic ? null : b.topic)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-stone-200">
                    {b.topic}
                  </span>
                  <span className="text-stone-600 text-xs">
                    {expanded === b.topic ? "−" : "+"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-stone-500 line-clamp-1">
                  {b.catholicPosition}
                </p>
              </button>
              {expanded === b.topic && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Catholic Position
                    </h4>
                    <p className="text-sm text-stone-300">
                      {b.catholicPosition}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Natural Law Argument
                    </h4>
                    <p className="text-sm text-stone-400">
                      {b.naturalLawArgument}
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        CCC Reference
                      </h4>
                      <p className="text-sm text-stone-400">{b.cccReference}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Aquinas Reference
                      </h4>
                      <p className="text-sm text-stone-400">
                        {b.aquinasRef}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Encyclical
                      </h4>
                      <p className="text-sm text-stone-400">
                        {b.encyclicalRef}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-stone-900 p-3">
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                      Common Objection
                    </h4>
                    <p className="text-sm italic text-stone-400">
                      &ldquo;{b.commonObjection}&rdquo;
                    </p>
                    <h4 className="mb-1 mt-2 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                      Response
                    </h4>
                    <p className="text-sm text-stone-300">{b.response}</p>
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
