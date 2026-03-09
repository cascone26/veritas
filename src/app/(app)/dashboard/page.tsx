"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

interface ReadingProgress {
  slug: string;
  chapter: number;
  totalChapters: number;
  lastRead: string;
}

const QUICK_LINKS = [
  { name: "Ask Aquinas", href: "/ask", desc: "AI theology chat", color: "amber" },
  { name: "Summa Browser", href: "/summa", desc: "512 questions", color: "amber" },
  { name: "SCG Browser", href: "/scg", desc: "463 chapters", color: "amber" },
  { name: "Library", href: "/spiritual-reading", desc: "100+ books", color: "emerald" },
  { name: "Objection Handler", href: "/objection", desc: "Refute arguments", color: "red" },
  { name: "Debate Simulator", href: "/simulator", desc: "Practice debates", color: "blue" },
  { name: "Glossary", href: "/glossary", desc: "342 terms", color: "violet" },
  { name: "Timeline", href: "/timeline", desc: "349 events", color: "orange" },
];

const DAILY_QUOTES = [
  { text: "Grace does not destroy nature but perfects it.", ref: "ST I, q.1, a.8, ad 2" },
  { text: "To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.", ref: "Attributed to St. Thomas Aquinas" },
  { text: "The things that we love tell us what we are.", ref: "St. Thomas Aquinas" },
  { text: "Better to illuminate than merely to shine.", ref: "ST II-II, q.188, a.6" },
  { text: "There is nothing on this earth more to be prized than true friendship.", ref: "St. Thomas Aquinas" },
  { text: "Beware of the person of one book.", ref: "St. Thomas Aquinas" },
  { text: "To convert somebody, go and take them by the hand and guide them.", ref: "St. Thomas Aquinas" },
  { text: "The soul is like an uninhabited world that comes to life only when God lays His head against us.", ref: "St. Thomas Aquinas" },
  { text: "Wonder is the desire for knowledge.", ref: "ST I-II, q.32, a.8" },
  { text: "Friendship is the source of the greatest pleasures, and without friends even the most agreeable pursuits become tedious.", ref: "St. Thomas Aquinas" },
];

export default function DashboardPage() {
  const [quote, setQuote] = useState(DAILY_QUOTES[0]);
  const [recentReadings, setRecentReadings] = useState<ReadingProgress[]>([]);
  const [stats, setStats] = useState({ notes: 0, saved: 0, flashcards: 0 });

  useEffect(() => {
    // Daily quote based on day of year
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    );
    setQuote(DAILY_QUOTES[dayOfYear % DAILY_QUOTES.length]);

    // Load reading progress from localStorage
    try {
      const progress: ReadingProgress[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith("reading-progress-")) {
          const slug = key.replace("reading-progress-", "");
          const data = JSON.parse(localStorage.getItem(key) || "{}");
          if (data.chapter !== undefined) {
            progress.push({
              slug,
              chapter: data.chapter,
              totalChapters: data.totalChapters || 0,
              lastRead: data.lastRead || "",
            });
          }
        }
      }
      progress.sort((a, b) => (b.lastRead || "").localeCompare(a.lastRead || ""));
      setRecentReadings(progress.slice(0, 5));

      // Count personal items
      const notes = JSON.parse(localStorage.getItem("veritas-notes") || "[]");
      const saved = JSON.parse(localStorage.getItem("veritas-saved") || "[]");
      const flashcards = JSON.parse(localStorage.getItem("veritas-flashcards") || "[]");
      setStats({
        notes: notes.length,
        saved: saved.length,
        flashcards: flashcards.length,
      });
    } catch {
      // localStorage not available
    }
  }, []);

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Veritas"
        subtitle="Catholic Theology & Apologetics"
        icon="+"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-6 space-y-6">
          {/* Daily Quote */}
          <div className="rounded-xl border border-stone-800 bg-stone-900/30 p-5">
            <p className="text-sm italic leading-relaxed text-stone-300">
              &ldquo;{quote.text}&rdquo;
            </p>
            <p className="mt-2 text-xs text-amber-600">{quote.ref}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Quick Access
            </h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 transition-colors hover:border-stone-700 hover:bg-stone-900/60"
                >
                  <p className="text-sm font-semibold text-stone-200">
                    {link.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-stone-500">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3">
            <Link
              href="/notes"
              className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center transition-colors hover:border-stone-700"
            >
              <p className="text-2xl font-bold text-amber-500">{stats.notes}</p>
              <p className="text-[11px] text-stone-500">Notes</p>
            </Link>
            <Link
              href="/saved"
              className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center transition-colors hover:border-stone-700"
            >
              <p className="text-2xl font-bold text-amber-500">{stats.saved}</p>
              <p className="text-[11px] text-stone-500">Saved Arguments</p>
            </Link>
            <Link
              href="/flashcards"
              className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center transition-colors hover:border-stone-700"
            >
              <p className="text-2xl font-bold text-amber-500">{stats.flashcards}</p>
              <p className="text-[11px] text-stone-500">Flashcards</p>
            </Link>
          </div>

          {/* Recent Reading */}
          {recentReadings.length > 0 && (
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
                Continue Reading
              </h2>
              <div className="space-y-2">
                {recentReadings.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/spiritual-reading/${r.slug}`}
                    className="flex items-center justify-between rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 transition-colors hover:border-stone-700"
                  >
                    <div>
                      <p className="text-sm font-medium text-stone-200">
                        {r.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Chapter {r.chapter + 1}
                        {r.totalChapters ? ` of ${r.totalChapters}` : ""}
                      </p>
                    </div>
                    {r.totalChapters > 0 && (
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-20 rounded-full bg-stone-800">
                          <div
                            className="h-1.5 rounded-full bg-amber-600"
                            style={{
                              width: `${Math.round(((r.chapter + 1) / r.totalChapters) * 100)}%`,
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-stone-600">
                          {Math.round(((r.chapter + 1) / r.totalChapters) * 100)}%
                        </span>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Library Stats */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Your Library
            </h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <div className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center">
                <p className="text-xl font-bold text-stone-200">611</p>
                <p className="text-[11px] text-stone-500">Summa Questions</p>
              </div>
              <div className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center">
                <p className="text-xl font-bold text-stone-200">462</p>
                <p className="text-[11px] text-stone-500">SCG Chapters</p>
              </div>
              <div className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center">
                <p className="text-xl font-bold text-stone-200">100+</p>
                <p className="text-[11px] text-stone-500">Books on Site</p>
              </div>
              <div className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center">
                <p className="text-xl font-bold text-stone-200">342</p>
                <p className="text-[11px] text-stone-500">Glossary Terms</p>
              </div>
            </div>
          </div>

          {/* Daily Question link */}
          <Link
            href="/daily"
            className="block rounded-xl border border-amber-900/50 bg-amber-950/20 px-5 py-4 transition-colors hover:border-amber-800/50 hover:bg-amber-950/30"
          >
            <h2 className="text-sm font-semibold text-amber-400">
              Daily Question
            </h2>
            <p className="mt-1 text-xs text-stone-400">
              Test your theology knowledge with today&apos;s question
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
