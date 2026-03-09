"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { PRAYERS } from "@/data/prayers";

export default function PrayersPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const occasions = [...new Set(PRAYERS.map((p) => p.occasion))];

  const filtered = PRAYERS.filter((p) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(s) ||
      p.author.toLowerCase().includes(s) ||
      p.occasion.toLowerCase().includes(s) ||
      p.relatedTopics.some((t) => t.toLowerCase().includes(s))
    );
  });

  const grouped = occasions
    .map((o) => ({
      occasion: o,
      prayers: filtered.filter((p) => p.occasion === o),
    }))
    .filter((g) => g.prayers.length > 0);

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Prayer Corner"
        subtitle="Prayers from Aquinas, the Saints, and the Catholic tradition"
        icon="🙏"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search prayers..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <p className="mt-1 text-[10px] text-stone-600">
            {filtered.length} prayers
          </p>
        </div>
        <div className="px-6 py-4 space-y-6">
          {grouped.map((group) => (
            <div key={group.occasion}>
              <h2 className="mb-3 text-sm font-semibold text-amber-500 uppercase tracking-wider">
                {group.occasion}
              </h2>
              <div className="space-y-2">
                {group.prayers.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
                  >
                    <button
                      onClick={() =>
                        setExpanded(expanded === p.title ? null : p.title)
                      }
                      className="w-full px-4 py-3 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-stone-200">
                          {p.title}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-stone-500">
                        {p.author}
                      </p>
                    </button>
                    {expanded === p.title && (
                      <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                        <div className="whitespace-pre-line text-sm leading-relaxed text-stone-300">
                          {p.text}
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {p.relatedTopics.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-stone-900 px-2 py-0.5 text-[10px] text-stone-500 border border-stone-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
