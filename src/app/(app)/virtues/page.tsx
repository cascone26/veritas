"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { VIRTUES } from "@/data/virtues";

const GROUPS = [
  { id: "all", label: "All" },
  { id: "theological", label: "Theological Virtues" },
  { id: "cardinal", label: "Cardinal Virtues" },
  { id: "capital-sin", label: "Capital Sins" },
  { id: "gift", label: "Gifts of the Spirit" },
  { id: "fruit", label: "Fruits of the Spirit" },
  { id: "beatitude", label: "Beatitudes" },
];

export default function VirtuesPage() {
  const [group, setGroup] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = VIRTUES.filter((v) => {
    if (group === "all") return true;
    return v.type === group;
  });

  const typeColor = (type: string) => {
    switch (type) {
      case "theological": return "text-blue-400";
      case "cardinal": return "text-amber-400";
      case "capital-sin": return "text-red-400";
      case "gift": return "text-purple-400";
      case "fruit": return "text-emerald-400";
      case "beatitude": return "text-cyan-400";
      default: return "text-stone-400";
    }
  };

  const grouped = filtered.reduce<Record<string, typeof VIRTUES>>(
    (acc, item) => {
      if (!acc[item.type]) acc[item.type] = [];
      acc[item.type].push(item);
      return acc;
    },
    {}
  );

  const groupLabel = (type: string) => {
    const g = GROUPS.find((gr) => gr.id === type);
    return g ? g.label : type;
  };

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Virtue & Vice Catalog"
        subtitle="Virtues, vices, gifts, fruits, and beatitudes"
        icon="⭐"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex flex-wrap gap-2">
            {GROUPS.map((g) => (
              <button
                key={g.id}
                onClick={() => setGroup(g.id)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  group === g.id
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-stone-600">
            {filtered.length} items
          </p>
        </div>
        <div className="px-6 py-4 space-y-6">
          {Object.entries(grouped).map(([type, items]) => (
            <div key={type}>
              <h3 className={`mb-2 text-xs font-semibold uppercase tracking-wider ${typeColor(type)}`}>
                {groupLabel(type)}
              </h3>
              <div className="space-y-2">
                {items.map((v) => (
                  <div
                    key={v.name}
                    className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
                  >
                    <button
                      onClick={() =>
                        setExpanded(expanded === v.name ? null : v.name)
                      }
                      className="w-full px-4 py-3 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-stone-200">
                          {v.name}
                        </span>
                        {v.opposingVice && (
                          <span className="text-[10px] text-red-400/70">
                            vs. {v.opposingVice}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-stone-500 line-clamp-1">
                        {v.description}
                      </p>
                    </button>
                    {expanded === v.name && (
                      <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                        <div>
                          <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                            Description
                          </h4>
                          <p className="text-sm text-stone-300">
                            {v.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                            Aquinas Reference
                          </h4>
                          <p className="text-sm text-stone-400">
                            {v.aquinasRef}
                          </p>
                        </div>
                        {v.opposingVice && (
                          <div>
                            <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                              Opposing Vice
                            </h4>
                            <p className="text-sm text-stone-400">
                              {v.opposingVice}
                            </p>
                          </div>
                        )}
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
