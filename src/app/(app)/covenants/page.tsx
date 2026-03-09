"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { COVENANTS } from "@/data/covenants";

export default function CovenantsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Biblical Covenants Map"
        subtitle="The progressive unfolding of God's plan through covenant"
        icon="📖"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-6">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-stone-800" />

            <div className="space-y-0">
              {COVENANTS.map((c, index) => (
                <div key={c.name} className="relative pl-12">
                  {/* Dot on the line */}
                  <div className="absolute left-3 top-4 h-3 w-3 rounded-full border-2 border-amber-600 bg-stone-950" />

                  {/* Connector from dot to card */}
                  <div className="absolute left-[19px] top-[22px] h-px w-5 bg-stone-800" />

                  <div className="mb-4 rounded-xl border border-stone-800 transition-colors hover:border-stone-700">
                    <button
                      onClick={() =>
                        setExpanded(expanded === c.name ? null : c.name)
                      }
                      className="w-full px-4 py-3 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-medium text-amber-600">
                            {index + 1} of {COVENANTS.length}
                          </span>
                          <h3 className="font-semibold text-sm text-stone-200">
                            {c.name}
                          </h3>
                        </div>
                        <span className="text-stone-600 text-xs">
                          {expanded === c.name ? "−" : "+"}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-3 text-xs text-stone-500">
                        <span>Mediator: {c.mediator}</span>
                        <span className="text-stone-700">&bull;</span>
                        <span>Sign: {c.sign}</span>
                      </div>
                    </button>
                    {expanded === c.name && (
                      <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div>
                            <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                              Mediator
                            </h4>
                            <p className="text-sm text-stone-300">
                              {c.mediator}
                            </p>
                          </div>
                          <div>
                            <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                              Sign
                            </h4>
                            <p className="text-sm text-stone-300">{c.sign}</p>
                          </div>
                          <div>
                            <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                              Promise
                            </h4>
                            <p className="text-sm text-stone-300">
                              {c.promise}
                            </p>
                          </div>
                          <div>
                            <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                              Scope
                            </h4>
                            <p className="text-sm text-stone-300">{c.scope}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                            Scripture
                          </h4>
                          <p className="text-sm text-stone-400">
                            {c.scripture}
                          </p>
                        </div>
                        <div>
                          <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                            Fulfillment in Christ
                          </h4>
                          <p className="text-sm text-stone-300">
                            {c.fulfillment}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
