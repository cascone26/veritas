"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { GROUNDING_ARGUMENTS, argumentBySlug } from "@/data/grounding-arguments";

export default function GroundingPage() {
  return (
    <Suspense fallback={<div className="p-8 text-stone-500">Loading…</div>}>
      <GroundingInner />
    </Suspense>
  );
}

function GroundingInner() {
  const searchParams = useSearchParams();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const slug = searchParams.get("slug");
    if (slug && argumentBySlug(slug)) {
      setActiveSlug(slug);
      setTimeout(() => {
        const el = document.getElementById(`arg-${slug}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [searchParams]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <PageHeader
        title="Ground to stand on"
        subtitle="The arguments you stand on when the feelings are gone."
      />

      <div className="mt-4 mb-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 text-sm leading-relaxed text-stone-300">
        <p className="mb-2">
          When faith is dry and feeling is absent, the question is not &ldquo;how do I
          feel certain&rdquo; — it is &ldquo;what do I know, and on what
          ground do I stand.&rdquo;
        </p>
        <p className="text-stone-400">
          These are the arguments that do not require a feeling. They work from
          reason, history, and evidence. Return to them when the weather is
          bad.
        </p>
      </div>

      <div className="space-y-3">
        {GROUNDING_ARGUMENTS.map((a) => {
          const open = activeSlug === a.slug;
          return (
            <article
              key={a.slug}
              id={`arg-${a.slug}`}
              className={`rounded-xl border transition-colors ${
                open
                  ? "border-amber-500/40 bg-stone-900/60"
                  : "border-stone-800 bg-stone-900/30"
              }`}
            >
              <button
                onClick={() => setActiveSlug(open ? null : a.slug)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left"
              >
                <div>
                  <div className="text-sm font-semibold text-stone-100">
                    {a.title}
                  </div>
                  <p className="mt-1 text-xs italic leading-relaxed text-stone-400">
                    {a.oneLine}
                  </p>
                </div>
                <span className="text-stone-600 text-xl leading-none">
                  {open ? "−" : "+"}
                </span>
              </button>

              {open && (
                <div className="border-t border-stone-800 px-5 py-6 space-y-6">
                  <section>
                    <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
                      Why it matters
                    </h4>
                    <p className="text-sm leading-relaxed text-stone-300">
                      {a.whyItMatters}
                    </p>
                  </section>

                  <section>
                    <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
                      The case
                    </h4>
                    <div className="space-y-3 text-sm leading-relaxed text-stone-300">
                      {a.theCase.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
                      Objections
                    </h4>
                    <div className="space-y-4">
                      {a.objections.map((o, i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-stone-800 bg-stone-950/50 p-4"
                        >
                          <p className="mb-2 text-sm font-semibold text-stone-200">
                            Q: {o.q}
                          </p>
                          <p className="text-sm leading-relaxed text-stone-400">
                            A: {o.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
                      Sources
                    </h4>
                    <ul className="space-y-1 text-xs text-stone-500">
                      {a.sources.map((s, i) => (
                        <li key={i}>· {s}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
