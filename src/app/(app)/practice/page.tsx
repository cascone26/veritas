"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import SilentSit from "@/components/SilentSit";
import { readingForDate, MORNING_READINGS, type MorningReading } from "@/data/morning-readings";
import { argumentBySlug, type GroundingArgument } from "@/data/grounding-arguments";
import Link from "next/link";

type Stage = "reading" | "argument" | "sit" | "done";

export default function PracticePage() {
  const [stage, setStage] = useState<Stage>("reading");
  const [reading, setReading] = useState<MorningReading | null>(null);
  const [argument, setArgument] = useState<GroundingArgument | null>(null);
  const [streak, setStreak] = useState<number>(0);

  useEffect(() => {
    const r = readingForDate();
    setReading(r);
    setArgument(argumentBySlug(r.argumentRef) || null);
    loadStreak();
  }, []);

  function loadStreak() {
    try {
      const raw = localStorage.getItem("veritas-practice-log") || "[]";
      const log: string[] = JSON.parse(raw);
      const today = new Date().toISOString().slice(0, 10);
      // Count consecutive days ending yesterday or today.
      let s = 0;
      const daySet = new Set(log);
      let cursor = new Date();
      for (let i = 0; i < 365; i++) {
        const d = cursor.toISOString().slice(0, 10);
        if (daySet.has(d)) {
          s++;
          cursor.setDate(cursor.getDate() - 1);
        } else if (i === 0 && d === today) {
          cursor.setDate(cursor.getDate() - 1);
        } else {
          break;
        }
      }
      setStreak(s);
    } catch {}
  }

  function markComplete() {
    try {
      const raw = localStorage.getItem("veritas-practice-log") || "[]";
      const log: string[] = JSON.parse(raw);
      const today = new Date().toISOString().slice(0, 10);
      if (!log.includes(today)) log.push(today);
      localStorage.setItem("veritas-practice-log", JSON.stringify(log.slice(-400)));
      loadStreak();
    } catch {}
    setStage("done");
  }

  if (!reading) {
    return (
      <div className="p-8 text-stone-500">Loading today&apos;s reading…</div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <PageHeader
        title="Morning Practice"
        subtitle="15 minutes. Non-negotiable. Read, ground, sit."
      />

      <div className="mb-8 flex items-center gap-4 text-xs text-stone-500">
        <span>
          Day {reading.day} of {MORNING_READINGS.length}
        </span>
        <span className="text-stone-700">·</span>
        <span>
          Streak: <span className="text-amber-500">{streak}</span> day
          {streak === 1 ? "" : "s"}
        </span>
        <span className="text-stone-700">·</span>
        <div className="flex gap-1">
          {(["reading", "argument", "sit"] as Stage[]).map((s, i) => (
            <div
              key={s}
              className={`h-1 w-6 rounded-full ${
                stage === s ||
                (stage === "done" && true) ||
                (stage === "argument" && i <= 0) ||
                (stage === "sit" && i <= 1)
                  ? "bg-amber-500"
                  : "bg-stone-800"
              }`}
            />
          ))}
        </div>
      </div>

      {stage === "reading" && (
        <div className="space-y-6">
          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
              Step 1 · Reading
            </div>
            <h2 className="text-2xl font-bold text-stone-100">{reading.title}</h2>
            <p className="mt-1 text-xs text-stone-500">
              {reading.source} · <span className="italic">{reading.era}</span>
            </p>
          </div>

          <blockquote className="border-l-2 border-amber-500/40 bg-stone-900/30 px-6 py-5 text-[15px] leading-relaxed text-stone-200">
            {reading.passage}
          </blockquote>

          <div className="rounded-lg border border-stone-800 bg-stone-900/40 p-5">
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              What to notice
            </div>
            <p className="text-sm leading-relaxed text-stone-300">
              {reading.reflection}
            </p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setStage("argument")}
              className="rounded-full border border-amber-500/40 bg-amber-500/10 px-6 py-2.5 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/20"
            >
              Next: the argument &rarr;
            </button>
          </div>
        </div>
      )}

      {stage === "argument" && argument && (
        <div className="space-y-6">
          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
              Step 2 · Ground
            </div>
            <h2 className="text-2xl font-bold text-stone-100">{argument.title}</h2>
            <p className="mt-2 text-sm italic text-stone-400">{argument.oneLine}</p>
          </div>

          <div className="space-y-4 text-[15px] leading-relaxed text-stone-300">
            {argument.theCase.slice(0, 4).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <Link
            href={`/grounding?slug=${argument.slug}`}
            className="text-xs text-amber-500 hover:text-amber-400"
          >
            Full argument with objections &rarr;
          </Link>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStage("reading")}
              className="text-sm text-stone-500 hover:text-stone-400"
            >
              &larr; Back
            </button>
            <button
              onClick={() => setStage("sit")}
              className="rounded-full border border-amber-500/40 bg-amber-500/10 px-6 py-2.5 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/20"
            >
              Next: sit in silence &rarr;
            </button>
          </div>
        </div>
      )}

      {stage === "sit" && (
        <div className="space-y-6">
          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
              Step 3 · Sit
            </div>
            <h2 className="text-2xl font-bold text-stone-100">Silent sit</h2>
          </div>

          <SilentSit prompt={reading.sitPrompt} defaultMinutes={5} />

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStage("argument")}
              className="text-sm text-stone-500 hover:text-stone-400"
            >
              &larr; Back
            </button>
            <button
              onClick={markComplete}
              className="rounded-full border border-amber-500/40 bg-amber-500/10 px-6 py-2.5 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/20"
            >
              Done for today
            </button>
          </div>
        </div>
      )}

      {stage === "done" && (
        <div className="space-y-6 text-center py-12">
          <div className="text-5xl">✓</div>
          <h2 className="text-2xl font-bold text-stone-100">
            You showed up today.
          </h2>
          <p className="max-w-md mx-auto text-sm leading-relaxed text-stone-400 italic">
            &ldquo;Faith is not a feeling. It is the will to trust when feeling is gone.
            You exercised it. That is the whole thing.&rdquo;
          </p>
          <p className="text-xs text-stone-500">
            Streak:{" "}
            <span className="text-amber-500 font-bold">{streak}</span> day
            {streak === 1 ? "" : "s"}
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <Link
              href="/doubt"
              className="text-xs text-stone-500 hover:text-stone-300"
            >
              Struggling with something specific? &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
