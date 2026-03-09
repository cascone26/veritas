"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { TIMELINE_EVENTS } from "@/data/timeline";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "aquinas", label: "Aquinas", color: "bg-amber-500" },
  { id: "council", label: "Councils", color: "bg-blue-500" },
  { id: "heresy", label: "Heresies", color: "bg-red-500" },
  { id: "philosophy", label: "Philosophy", color: "bg-purple-500" },
  { id: "church", label: "Church", color: "bg-emerald-500" },
  { id: "papacy", label: "Papacy", color: "bg-yellow-500" },
];

const dotColor = (category: string) => {
  switch (category) {
    case "aquinas": return "bg-amber-500";
    case "council": return "bg-blue-500";
    case "heresy": return "bg-red-500";
    case "philosophy": return "bg-purple-500";
    case "church": return "bg-emerald-500";
    case "papacy": return "bg-yellow-500";
    default: return "bg-stone-500";
  }
};

const textColor = (category: string) => {
  switch (category) {
    case "aquinas": return "text-amber-400";
    case "council": return "text-blue-400";
    case "heresy": return "text-red-400";
    case "philosophy": return "text-purple-400";
    case "church": return "text-emerald-400";
    case "papacy": return "text-yellow-400";
    default: return "text-stone-400";
  }
};

export default function TimelinePage() {
  const [filter, setFilter] = useState("all");

  const filtered = TIMELINE_EVENTS.filter(
    (e) => filter === "all" || e.category === filter
  );

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Historical Timeline"
        subtitle="Key events in Catholic intellectual history"
        icon="📅"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs transition-colors ${
                  filter === c.id
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                {c.id !== "all" && (
                  <span className={`inline-block h-2 w-2 rounded-full ${c.color}`} />
                )}
                {c.label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-stone-600">
            {filtered.length} events
          </p>
        </div>
        <div className="px-6 py-6">
          <div className="relative ml-4 border-l-2 border-stone-800 pl-8 space-y-6">
            {filtered.map((e, i) => (
              <div key={`${e.year}-${e.title}-${i}`} className="relative">
                <div
                  className={`absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-stone-950 ${dotColor(e.category)}`}
                />
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-stone-600 min-w-[3rem]">
                    {e.year < 0 ? `${Math.abs(e.year)} BC` : e.year < 100 ? `AD ${e.year}` : e.year}
                  </span>
                  <span className={`text-[10px] font-medium uppercase ${textColor(e.category)}`}>
                    {e.category}
                  </span>
                </div>
                <h3 className="mt-1 text-sm font-semibold text-stone-200">
                  {e.title}
                </h3>
                <p className="mt-0.5 text-sm text-stone-400">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
