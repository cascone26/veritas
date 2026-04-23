"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SilentSit from "@/components/SilentSit";
import { DOUBT_TRACKS, trackBySlug, type DoubtType } from "@/data/doubt-tracks";
import { argumentBySlug } from "@/data/grounding-arguments";
import Link from "next/link";

export default function DoubtPage() {
  const [selected, setSelected] = useState<DoubtType | null>(null);
  const [showSit, setShowSit] = useState(false);

  const track = selected ? trackBySlug(selected) : null;

  if (!selected) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-8">
        <PageHeader
          title="What are you struggling with?"
          subtitle="Pick the honest answer. This routes you to the right reading, argument, and practice."
        />

        <div className="mt-4 mb-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 text-sm leading-relaxed text-stone-300">
          <p className="mb-2">
            Doubt is not a defect in the Christian life. It is the normal
            weather. Every saint documented it. The question is not whether to
            feel it — the question is what to do with it.
          </p>
          <p className="text-stone-400">
            Tell the page what kind of struggle is live right now. You can come
            back and pick a different one tomorrow.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {DOUBT_TRACKS.map((t) => (
            <button
              key={t.slug}
              onClick={() => setSelected(t.slug)}
              className="group rounded-xl border border-stone-800 bg-stone-900/40 p-5 text-left transition-all hover:border-amber-500/40 hover:bg-stone-900/70"
            >
              <div className="mb-1 text-sm font-semibold text-stone-100 group-hover:text-amber-400">
                {t.label}
              </div>
              <p className="text-xs text-stone-500">{t.description}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!track) return null;

  const args = track.argumentSlugs
    .map((s) => argumentBySlug(s))
    .filter((a) => a);

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <button
        onClick={() => {
          setSelected(null);
          setShowSit(false);
        }}
        className="mb-6 text-xs text-stone-500 hover:text-stone-300"
      >
        &larr; Pick a different struggle
      </button>

      <PageHeader title={track.label} subtitle={track.description} />

      {/* Opening response */}
      <div className="mb-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-500">
          Hold this first
        </div>
        <p className="text-[15px] leading-relaxed text-stone-200">
          {track.opening}
        </p>
      </div>

      {/* Saint */}
      <div className="mb-8 rounded-xl border border-stone-800 bg-stone-900/40 p-5">
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
          Someone who walked this
        </div>
        <div className="text-sm font-semibold text-stone-100">
          {track.saint.name}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-stone-400">
          {track.saint.why}
        </p>
      </div>

      {/* Scripture */}
      <section className="mb-8">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
          Scripture
        </h3>
        <ul className="space-y-2">
          {track.scripture.map((v, i) => (
            <li
              key={i}
              className="rounded-lg border border-stone-800 bg-stone-900/30 px-4 py-3 text-sm leading-relaxed text-stone-300"
            >
              {v}
            </li>
          ))}
        </ul>
      </section>

      {/* Arguments */}
      {args.length > 0 && (
        <section className="mb-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
            Ground to stand on
          </h3>
          <div className="space-y-3">
            {args.map((a) =>
              a ? (
                <div
                  key={a.slug}
                  className="rounded-lg border border-stone-800 bg-stone-900/30 p-5"
                >
                  <div className="mb-1 text-sm font-semibold text-stone-100">
                    {a.title}
                  </div>
                  <p className="text-sm italic leading-relaxed text-stone-400">
                    {a.oneLine}
                  </p>
                  <Link
                    href={`/grounding?slug=${a.slug}`}
                    className="mt-2 inline-block text-xs text-amber-500 hover:text-amber-400"
                  >
                    Read the full case &rarr;
                  </Link>
                </div>
              ) : null,
            )}
          </div>
        </section>
      )}

      {/* Readings */}
      <section className="mb-8">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
          Read this when you can
        </h3>
        <ul className="space-y-2">
          {track.readings.map((r, i) => (
            <li
              key={i}
              className="rounded-lg border border-stone-800 bg-stone-900/30 px-4 py-3 text-sm text-stone-300"
            >
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Practice */}
      <section className="mb-8">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
          Do this now
        </h3>
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
          <p className="text-[15px] leading-relaxed text-stone-200">
            {track.practice}
          </p>
          {!showSit && (
            <button
              onClick={() => setShowSit(true)}
              className="mt-4 rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2 text-xs font-medium text-amber-400 transition-colors hover:bg-amber-500/20"
            >
              Sit now &rarr;
            </button>
          )}
        </div>
      </section>

      {showSit && (
        <div className="mb-8">
          <SilentSit
            prompt="Be here. You don't have to fix the struggle. You have to show up in it."
            defaultMinutes={5}
          />
        </div>
      )}
    </div>
  );
}
