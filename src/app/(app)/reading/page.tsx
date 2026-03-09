"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

interface ReadingSection {
  id: string;
  title: string;
  items: { id: string; name: string }[];
}

const READING_LIST: ReadingSection[] = [
  {
    id: "summa-theologica",
    title: "Summa Theologica",
    items: [
      { id: "st-i", name: "Prima Pars (First Part) — God, Trinity, Creation, Angels, Man" },
      { id: "st-i-ii", name: "Prima Secundae (First of the Second Part) — Happiness, Human Acts, Virtues, Law, Grace" },
      { id: "st-ii-ii", name: "Secunda Secundae (Second of the Second Part) — Faith, Hope, Charity, Justice, Fortitude, Temperance" },
      { id: "st-iii", name: "Tertia Pars (Third Part) — Christ, Sacraments" },
    ],
  },
  {
    id: "summa-contra-gentiles",
    title: "Summa Contra Gentiles",
    items: [
      { id: "scg-i", name: "Book I — God" },
      { id: "scg-ii", name: "Book II — Creation" },
      { id: "scg-iii", name: "Book III — Providence" },
      { id: "scg-iv", name: "Book IV — Salvation" },
    ],
  },
  {
    id: "catechism",
    title: "Catechism of the Catholic Church",
    items: [
      { id: "ccc-i", name: "Part I — The Profession of Faith (The Creed)" },
      { id: "ccc-ii", name: "Part II — The Celebration of the Christian Mystery (Sacraments)" },
      { id: "ccc-iii", name: "Part III — Life in Christ (Morality)" },
      { id: "ccc-iv", name: "Part IV — Christian Prayer" },
    ],
  },
  {
    id: "scripture-ot",
    title: "Old Testament",
    items: [
      { id: "gen", name: "Genesis" }, { id: "exod", name: "Exodus" }, { id: "lev", name: "Leviticus" },
      { id: "num", name: "Numbers" }, { id: "deut", name: "Deuteronomy" }, { id: "josh", name: "Joshua" },
      { id: "judg", name: "Judges" }, { id: "ruth", name: "Ruth" }, { id: "1sam", name: "1 Samuel" },
      { id: "2sam", name: "2 Samuel" }, { id: "1kgs", name: "1 Kings" }, { id: "2kgs", name: "2 Kings" },
      { id: "1chr", name: "1 Chronicles" }, { id: "2chr", name: "2 Chronicles" }, { id: "ezra", name: "Ezra" },
      { id: "neh", name: "Nehemiah" }, { id: "tob", name: "Tobit" }, { id: "jdt", name: "Judith" },
      { id: "esth", name: "Esther" }, { id: "1macc", name: "1 Maccabees" }, { id: "2macc", name: "2 Maccabees" },
      { id: "job", name: "Job" }, { id: "ps", name: "Psalms" }, { id: "prov", name: "Proverbs" },
      { id: "eccl", name: "Ecclesiastes" }, { id: "song", name: "Song of Songs" }, { id: "wis", name: "Wisdom" },
      { id: "sir", name: "Sirach" }, { id: "isa", name: "Isaiah" }, { id: "jer", name: "Jeremiah" },
      { id: "lam", name: "Lamentations" }, { id: "bar", name: "Baruch" }, { id: "ezek", name: "Ezekiel" },
      { id: "dan", name: "Daniel" }, { id: "hos", name: "Hosea" }, { id: "joel", name: "Joel" },
      { id: "amos", name: "Amos" }, { id: "obad", name: "Obadiah" }, { id: "jonah", name: "Jonah" },
      { id: "mic", name: "Micah" }, { id: "nah", name: "Nahum" }, { id: "hab", name: "Habakkuk" },
      { id: "zeph", name: "Zephaniah" }, { id: "hag", name: "Haggai" }, { id: "zech", name: "Zechariah" },
      { id: "mal", name: "Malachi" },
    ],
  },
  {
    id: "scripture-nt",
    title: "New Testament",
    items: [
      { id: "matt", name: "Matthew" }, { id: "mark", name: "Mark" }, { id: "luke", name: "Luke" },
      { id: "john", name: "John" }, { id: "acts", name: "Acts" }, { id: "rom", name: "Romans" },
      { id: "1cor", name: "1 Corinthians" }, { id: "2cor", name: "2 Corinthians" }, { id: "gal", name: "Galatians" },
      { id: "eph", name: "Ephesians" }, { id: "phil", name: "Philippians" }, { id: "col", name: "Colossians" },
      { id: "1thess", name: "1 Thessalonians" }, { id: "2thess", name: "2 Thessalonians" }, { id: "1tim", name: "1 Timothy" },
      { id: "2tim", name: "2 Timothy" }, { id: "titus", name: "Titus" }, { id: "phlm", name: "Philemon" },
      { id: "heb", name: "Hebrews" }, { id: "jas", name: "James" }, { id: "1pet", name: "1 Peter" },
      { id: "2pet", name: "2 Peter" }, { id: "1john", name: "1 John" }, { id: "2john", name: "2 John" },
      { id: "3john", name: "3 John" }, { id: "jude", name: "Jude" }, { id: "rev", name: "Revelation" },
    ],
  },
];

export default function ReadingPage() {
  const [completion, setCompletion] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const stored = localStorage.getItem("veritas-reading");
    if (stored) {
      try {
        setCompletion(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const toggle = (id: string) => {
    const updated = { ...completion, [id]: !completion[id] };
    setCompletion(updated);
    localStorage.setItem("veritas-reading", JSON.stringify(updated));
  };

  const totalItems = READING_LIST.reduce((acc, s) => acc + s.items.length, 0);
  const completedItems = Object.values(completion).filter(Boolean).length;

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Reading Tracker"
        subtitle="Track your progress through the great works"
        icon="📖"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-stone-400">
              {completedItems} of {totalItems} completed
            </p>
            <p className="text-xs text-amber-500 font-medium">
              {totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0}%
            </p>
          </div>
          <div className="mt-2 h-2 rounded-full bg-stone-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-amber-600 transition-all duration-300"
              style={{ width: `${totalItems > 0 ? (completedItems / totalItems) * 100 : 0}%` }}
            />
          </div>
        </div>
        <div className="px-6 py-4 space-y-6">
          {READING_LIST.map((section) => {
            const sectionCompleted = section.items.filter(
              (i) => completion[i.id]
            ).length;
            const sectionTotal = section.items.length;
            const pct = sectionTotal > 0 ? (sectionCompleted / sectionTotal) * 100 : 0;

            return (
              <div key={section.id}>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm font-semibold text-amber-500">
                    {section.title}
                  </h2>
                  <span className="text-[10px] text-stone-600">
                    {sectionCompleted}/{sectionTotal}
                  </span>
                </div>
                <div className="mb-3 h-1.5 rounded-full bg-stone-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-700 transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-stone-900/50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={!!completion[item.id]}
                        onChange={() => toggle(item.id)}
                        className="h-4 w-4 rounded border-stone-700 bg-stone-900 text-amber-600 focus:ring-amber-600 focus:ring-offset-0 accent-amber-600"
                      />
                      <span
                        className={`text-sm transition-colors ${
                          completion[item.id]
                            ? "text-stone-600 line-through"
                            : "text-stone-300"
                        }`}
                      >
                        {item.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
