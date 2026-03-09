"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { AQUINAS_LIFE, AQUINAS_COMPLETE_WORKS } from "@/data/aquinas-life";

const WORK_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "summa", label: "Summae" },
  { id: "disputed", label: "Disputed Questions" },
  { id: "commentary-aristotle", label: "Aristotle Commentaries" },
  { id: "commentary-scripture", label: "Scripture Commentaries" },
  { id: "opuscula", label: "Opuscula" },
  { id: "quodlibetal", label: "Quodlibetals" },
  { id: "liturgical", label: "Liturgical" },
  { id: "other", label: "Other" },
];

type Tab = "life" | "works";

export default function AquinasLifePage() {
  const [tab, setTab] = useState<Tab>("life");
  const [search, setSearch] = useState("");
  const [workCategory, setWorkCategory] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filteredWorks = AQUINAS_COMPLETE_WORKS.filter((w) => {
    if (workCategory !== "all" && w.category !== workCategory) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        w.title.toLowerCase().includes(s) ||
        (w.latinTitle && w.latinTitle.toLowerCase().includes(s)) ||
        w.description.toLowerCase().includes(s)
      );
    }
    return true;
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Aquinas: Life & Complete Works"
        subtitle="The Angelic Doctor's biography and complete literary corpus"
        icon="📚"
      />
      <div className="flex-1 overflow-y-auto">
        {/* Tab Switcher */}
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <div className="flex gap-2">
            <button
              onClick={() => setTab("life")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                tab === "life"
                  ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                  : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
              }`}
            >
              Life
            </button>
            <button
              onClick={() => setTab("works")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                tab === "works"
                  ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                  : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
              }`}
            >
              Complete Works
            </button>
          </div>

          {tab === "works" && (
            <>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search works..."
                className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
              />
              <div className="flex flex-wrap gap-2">
                {WORK_CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setWorkCategory(c.id)}
                    className={`rounded-full px-3 py-1 text-xs transition-colors ${
                      workCategory === c.id
                        ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                        : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-stone-600">
                {filteredWorks.length} works
              </p>
            </>
          )}
        </div>

        {/* Life Tab */}
        {tab === "life" && (
          <div className="px-6 py-6">
            <div className="relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-stone-800" />
              <div className="space-y-0">
                {AQUINAS_LIFE.map((event, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-3 top-4 h-3 w-3 rounded-full border-2 border-amber-600 bg-stone-950" />
                    <div className="absolute left-[19px] top-[22px] h-px w-5 bg-stone-800" />
                    <div className="mb-4 rounded-xl border border-stone-800 p-4 transition-colors hover:border-stone-700">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-stone-900 px-2 py-0.5 text-[10px] font-bold text-amber-500 border border-stone-800">
                          {event.year}
                        </span>
                        <h3 className="font-semibold text-sm text-stone-200">
                          {event.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                        {event.description}
                      </p>
                      {event.significance && (
                        <p className="mt-2 text-xs italic text-stone-500">
                          {event.significance}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Works Tab */}
        {tab === "works" && (
          <div className="px-6 py-4 space-y-2">
            {filteredWorks.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
              >
                <button
                  onClick={() =>
                    setExpanded(expanded === w.title ? null : w.title)
                  }
                  className="w-full px-4 py-3 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-sm text-stone-200">
                        {w.title}
                      </span>
                      {w.latinTitle && (
                        <span className="ml-2 text-xs italic text-stone-500">
                          ({w.latinTitle})
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] border ${
                        w.status === "complete"
                          ? "text-emerald-400 border-emerald-800 bg-emerald-900/30"
                          : w.status === "incomplete"
                          ? "text-amber-400 border-amber-800 bg-amber-900/30"
                          : "text-stone-500 border-stone-700 bg-stone-900"
                      }`}>
                        {w.status}
                      </span>
                      <span className="rounded-full bg-stone-900 px-2 py-0.5 text-[10px] text-stone-500 border border-stone-800">
                        {w.category}
                      </span>
                    </div>
                  </div>
                </button>
                {expanded === w.title && (
                  <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Description
                      </h4>
                      <p className="text-sm text-stone-300">{w.description}</p>
                    </div>
                    {w.dateWritten && (
                      <div>
                        <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                          Date Written
                        </h4>
                        <p className="text-sm text-stone-400">
                          {w.dateWritten}
                        </p>
                      </div>
                    )}
                    {w.significance && (
                      <div>
                        <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                          Significance
                        </h4>
                        <p className="text-sm text-stone-400">
                          {w.significance}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
