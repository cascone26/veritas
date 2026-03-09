"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { PROPHECIES } from "@/data/prophecies";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "birth", label: "Birth" },
  { id: "ministry", label: "Ministry" },
  { id: "passion", label: "Passion" },
  { id: "resurrection", label: "Resurrection" },
  { id: "messianic-identity", label: "Messianic Identity" },
  { id: "kingdom", label: "Kingdom" },
];

export default function PropheciesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = PROPHECIES.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        p.prophecy.toLowerCase().includes(s) ||
        p.otReference.toLowerCase().includes(s) ||
        p.ntFulfillment.toLowerCase().includes(s)
      );
    }
    return true;
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Prophecy Fulfillment"
        subtitle="Old Testament prophecies fulfilled in Christ"
        icon="📜"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search prophecies..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  category === c.id
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-stone-600">
            {filtered.length} prophecies
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((p) => (
            <div
              key={p.prophecy}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === p.prophecy ? null : p.prophecy)
                }
                className="w-full px-4 py-3 text-left"
              >
                <p className="font-semibold text-sm text-stone-200">
                  {p.prophecy}
                </p>
                <div className="mt-1 flex items-center gap-3">
                  <span className="text-xs text-amber-500">
                    {p.otReference}
                  </span>
                  <span className="text-stone-600">→</span>
                  <span className="text-xs text-emerald-400">
                    {p.ntFulfillment}
                  </span>
                  <span className="ml-auto rounded-full bg-stone-900 px-2 py-0.5 text-[10px] text-stone-500 border border-stone-800">
                    {p.category}
                  </span>
                </div>
              </button>
              {expanded === p.prophecy && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-stone-900 p-3">
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Old Testament Text
                      </h4>
                      <p className="text-sm italic text-stone-300">
                        &ldquo;{p.otText}&rdquo;
                      </p>
                      <p className="mt-1 text-[10px] text-stone-500">
                        {p.otReference}
                      </p>
                    </div>
                    <div className="rounded-lg bg-stone-900 p-3">
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                        New Testament Fulfillment
                      </h4>
                      <p className="text-sm italic text-stone-300">
                        &ldquo;{p.ntText}&rdquo;
                      </p>
                      <p className="mt-1 text-[10px] text-stone-500">
                        {p.ntFulfillment}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Significance
                    </h4>
                    <p className="text-sm text-stone-400">{p.significance}</p>
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
