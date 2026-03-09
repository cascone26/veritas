"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { SACRAMENTS } from "@/data/sacraments";

export default function SacramentsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Sacrament Deep Dives"
        subtitle="The seven sacraments — matter, form, effects, and defense"
        icon="✝️"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-4 space-y-2">
          {SACRAMENTS.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === s.name ? null : s.name)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm text-stone-200">
                      {s.name}
                    </span>
                  </div>
                  <span className="text-stone-600 text-xs">
                    {expanded === s.name ? "−" : "+"}
                  </span>
                </div>
              </button>
              {expanded === s.name && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Matter
                      </h4>
                      <p className="text-sm text-stone-400">{s.matter}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Form
                      </h4>
                      <p className="text-sm text-stone-400">{s.form}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Minister
                      </h4>
                      <p className="text-sm text-stone-400">{s.minister}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Effects
                      </h4>
                      <ul className="space-y-1">
                        {s.effects.map((e, i) => (
                          <li key={i} className="text-sm text-stone-400">
                            &bull; {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Scriptural Basis
                    </h4>
                    <ul className="space-y-1">
                      {s.scriptualBasis.map((ref, i) => (
                        <li key={i} className="text-sm text-stone-400">
                          &bull; {ref}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Aquinas Reference
                      </h4>
                      <p className="text-sm text-stone-400">
                        {s.aquinasRef}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        CCC Reference
                      </h4>
                      <p className="text-sm text-stone-400">{s.cccRef}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        Instituted by Christ
                      </h4>
                      <p className="text-sm text-stone-400">
                        {s.institution}
                      </p>
                    </div>
                  </div>
                  {s.commonObjections && s.commonObjections.length > 0 && (
                    <div>
                      <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                        Common Objections & Responses
                      </h4>
                      <div className="space-y-2">
                        {s.commonObjections.map((obj, i) => (
                          <div
                            key={i}
                            className="rounded-lg bg-stone-900 p-3"
                          >
                            <p className="text-sm italic text-stone-400">
                              &ldquo;{obj.objection}&rdquo;
                            </p>
                            <p className="mt-1 text-sm text-stone-300">
                              {obj.response}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
