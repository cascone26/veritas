"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getStreakData, getCalendarData, isActiveToday } from "@/lib/streaks";

interface ReadingProgress {
  slug: string;
  chapter: number;
  totalChapters: number;
  lastRead: string;
}

interface WeakArea {
  id: string;
  topic: string;
  confidence: number;
  lastReviewed: string;
  notes: string;
}

interface Flashcard {
  id: string;
  front: string;
  back: string;
  nextReview: number;
  interval: number;
  ease: number;
}

const QUICK_LINKS = [
  { name: "Ask", href: "/ask", icon: "\u{1F4AC}" },
  { name: "Summa", href: "/summa", icon: "\u{1F4D6}" },
  { name: "Bible", href: "/bible", icon: "\u{1F4DC}" },
  { name: "Courses", href: "/courses", icon: "\u{1F5FA}\uFE0F" },
  { name: "Flashcards", href: "/flashcards", icon: "\u{1F0CF}" },
  { name: "Objections", href: "/objection", icon: "\u{1F6E1}\uFE0F" },
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
  const [streakData, setStreakData] = useState({ currentStreak: 0, longestStreak: 0 });
  const [calendarCells, setCalendarCells] = useState<{ date: string; active: boolean }[]>([]);
  const [activeToday, setActiveToday] = useState(false);
  const [flashcardsDue, setFlashcardsDue] = useState(0);
  const [totalFlashcards, setTotalFlashcards] = useState(0);
  const [courseProgress, setCourseProgress] = useState<{ started: number; lessons: number }>({ started: 0, lessons: 0 });
  const [weakAreas, setWeakAreas] = useState<WeakArea[]>([]);

  useEffect(() => {
    // Daily quote
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    );
    setQuote(DAILY_QUOTES[dayOfYear % DAILY_QUOTES.length]);

    try {
      // Streak data
      const sd = getStreakData();
      setStreakData({ currentStreak: sd.currentStreak, longestStreak: sd.longestStreak });
      setActiveToday(isActiveToday());

      // Calendar — last 12 weeks (84 days)
      const allDays = getCalendarData(3);
      // Take last 84 days
      const last84 = allDays.slice(-84);
      setCalendarCells(last84);

      // Flashcards due today
      const flashcardsRaw = localStorage.getItem("veritas-flashcards");
      if (flashcardsRaw) {
        const cards: Flashcard[] = JSON.parse(flashcardsRaw);
        setTotalFlashcards(cards.length);
        const now = Date.now();
        setFlashcardsDue(cards.filter((c) => c.nextReview <= now).length);
      }

      // Course progress
      const lessonProgressRaw = localStorage.getItem("veritas-lesson-progress");
      if (lessonProgressRaw) {
        const lp: Record<string, number[]> = JSON.parse(lessonProgressRaw);
        const courseIds = Object.keys(lp);
        const totalLessons = Object.values(lp).reduce((sum, arr) => sum + arr.length, 0);
        setCourseProgress({ started: courseIds.length, lessons: totalLessons });
      }

      // Reading progress
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
      setRecentReadings(progress.slice(0, 3));

      // Weak areas — lowest confidence
      const weaknessRaw = localStorage.getItem("veritas-weakness");
      if (weaknessRaw) {
        const all: WeakArea[] = JSON.parse(weaknessRaw);
        const sorted = [...all].sort((a, b) => a.confidence - b.confidence);
        setWeakAreas(sorted.slice(0, 3));
      }
    } catch {
      // localStorage not available
    }
  }, []);

  // Build 7-row grid for calendar (Mon-Sun rows, 12 columns for weeks)
  // Cells are filled column-first (each column = 1 week)
  const calendarGrid = (() => {
    // Pad to exactly 84 cells
    const cells = calendarCells.length >= 84 ? calendarCells : [
      ...Array(84 - calendarCells.length).fill({ date: "", active: false }),
      ...calendarCells,
    ];
    // Arrange into 12 columns of 7 rows
    const grid: { date: string; active: boolean }[][] = Array.from({ length: 7 }, () => []);
    for (let col = 0; col < 12; col++) {
      for (let row = 0; row < 7; row++) {
        const idx = col * 7 + row;
        grid[row].push(cells[idx] || { date: "", active: false });
      }
    }
    return grid;
  })();

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Veritas"
        subtitle="Catholic Theology & Apologetics"
        icon="+"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-6 space-y-6">

          {/* Streak + Calendar */}
          <div className="rounded-xl border border-stone-800 bg-stone-900/30 p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-baseline gap-6">
                <div>
                  <p className="text-4xl font-bold text-amber-500">{streakData.currentStreak}</p>
                  <p className="text-xs text-stone-500 mt-1">
                    day{streakData.currentStreak !== 1 ? "s" : ""} streak
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-stone-400">{streakData.longestStreak}</p>
                  <p className="text-[11px] text-stone-600">longest</p>
                </div>
                <div>
                  <p className={`text-sm font-medium ${activeToday ? "text-emerald-400" : "text-stone-500"}`}>
                    {activeToday ? "Active today" : "Not yet today"}
                  </p>
                </div>
              </div>
            </div>

            {/* Activity calendar grid */}
            <div className="mt-4">
              <div className="flex gap-[3px]">
                {/* Day labels */}
                <div className="flex flex-col gap-[3px] mr-1">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <div key={i} className="h-[13px] w-3 text-[9px] text-stone-600 flex items-center justify-end">
                      {i % 2 === 0 ? d : ""}
                    </div>
                  ))}
                </div>
                {/* Grid columns (weeks) */}
                {Array.from({ length: 12 }).map((_, col) => (
                  <div key={col} className="flex flex-col gap-[3px]">
                    {calendarGrid.map((row, rowIdx) => {
                      const cell = row[col];
                      return (
                        <div
                          key={rowIdx}
                          className={`h-[13px] w-[13px] rounded-[2px] ${
                            !cell?.date
                              ? "bg-stone-900"
                              : cell.active
                              ? "bg-emerald-600"
                              : "bg-stone-800/60"
                          }`}
                          title={cell?.date || ""}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Summary */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Today
            </h2>
            <div className="grid grid-cols-3 gap-2">
              <Link
                href="/flashcards"
                className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center transition-colors hover:border-stone-700"
              >
                <p className={`text-2xl font-bold ${flashcardsDue > 0 ? "text-amber-500" : "text-stone-400"}`}>
                  {flashcardsDue}
                </p>
                <p className="text-[11px] text-stone-500">
                  cards due{totalFlashcards > 0 ? ` / ${totalFlashcards}` : ""}
                </p>
              </Link>
              <Link
                href="/courses"
                className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center transition-colors hover:border-stone-700"
              >
                <p className="text-2xl font-bold text-stone-300">{courseProgress.started}</p>
                <p className="text-[11px] text-stone-500">
                  course{courseProgress.started !== 1 ? "s" : ""} active
                </p>
              </Link>
              <Link
                href="/daily"
                className="rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 text-center transition-colors hover:border-stone-700"
              >
                <p className="text-2xl font-bold text-stone-300">?</p>
                <p className="text-[11px] text-stone-500">daily question</p>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-2">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-2.5 transition-colors hover:border-stone-700 hover:bg-stone-900/60"
              >
                <span className="text-base">{link.icon}</span>
                <span className="text-sm font-medium text-stone-300">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Continue Reading */}
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

          {/* Weak Areas */}
          {weakAreas.length > 0 && (
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
                Weak Areas
              </h2>
              <div className="space-y-2">
                {weakAreas.map((w) => (
                  <Link
                    key={w.id}
                    href="/weakness"
                    className="flex items-center justify-between rounded-xl border border-stone-800 bg-stone-900/30 px-4 py-3 transition-colors hover:border-stone-700"
                  >
                    <div>
                      <p className="text-sm font-medium text-stone-200">{w.topic}</p>
                      {w.notes && (
                        <p className="text-[11px] text-stone-500 line-clamp-1">{w.notes}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`h-2 w-2 rounded-full ${
                            level <= w.confidence ? "bg-amber-600" : "bg-stone-700"
                          }`}
                        />
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Daily Quote */}
          <div className="rounded-xl border border-stone-800/50 bg-stone-900/20 px-5 py-4">
            <p className="text-xs italic leading-relaxed text-stone-400">
              &ldquo;{quote.text}&rdquo;
            </p>
            <p className="mt-1.5 text-[10px] text-amber-700">{quote.ref}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
