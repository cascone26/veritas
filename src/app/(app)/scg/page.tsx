"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

interface Chapter {
  number: number;
  title: string;
}

const BOOKS = [
  { id: 1, name: "Book 1: God", chapters: 102, description: "The existence and nature of God, divine attributes, the Trinity" },
  { id: 2, name: "Book 2: Creation", chapters: 101, description: "Creation, angels, the human soul, the union of soul and body" },
  { id: 3, name: "Book 3: Providence", chapters: 163, description: "Divine providence, evil, human happiness, grace, miracles" },
  { id: 4, name: "Book 4: Salvation", chapters: 97, description: "The Trinity, Incarnation, sacraments, resurrection, last things" },
];

export default function SCGBrowser() {
  const [selectedBook, setSelectedBook] = useState(1);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [chapterContent, setChapterContent] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const book = BOOKS.find((b) => b.id === selectedBook)!;

  // Parse chapter titles from the book file
  useEffect(() => {
    fetch(`/scg/book${selectedBook}.md`)
      .then((r) => r.text())
      .then((text) => {
        const chapterMatches = text.matchAll(/^## Chapter (\d+)[:\s]*(.+)$/gm);
        const parsed: Chapter[] = [];
        for (const match of chapterMatches) {
          parsed.push({
            number: parseInt(match[1]),
            title: match[2].trim(),
          });
        }
        setChapters(parsed);
        setSelectedChapter(null);
        setChapterContent("");
      })
      .catch(() => setChapters([]));
  }, [selectedBook]);

  // Load chapter content
  useEffect(() => {
    if (selectedChapter === null) return;
    setLoading(true);
    fetch(`/scg/book${selectedBook}.md`)
      .then((r) => r.text())
      .then((text) => {
        const chapterRegex = new RegExp(
          `## Chapter ${selectedChapter}[:\\s][^\\n]+\\n([\\s\\S]*?)(?=\\n## Chapter \\d|$)`
        );
        const match = text.match(chapterRegex);
        setChapterContent(match ? match[1].trim() : "Chapter not found.");
        setLoading(false);
      })
      .catch(() => {
        setChapterContent("Error loading chapter.");
        setLoading(false);
      });
  }, [selectedBook, selectedChapter]);

  const filtered = chapters.filter((c) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      c.title.toLowerCase().includes(s) ||
      `chapter ${c.number}`.includes(s.toLowerCase()) ||
      `c.${c.number}`.includes(s)
    );
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Summa Contra Gentiles"
        subtitle="4 books, 463 chapters — Aquinas's philosophical defense of the faith"
        icon="📖"
      />
      <div className="flex-1 overflow-y-auto">
        {/* Book selector */}
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {BOOKS.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedBook(b.id);
                  setSearch("");
                }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedBook === b.id
                    ? "bg-amber-600/20 text-amber-400"
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search chapters..."
            className="mt-2 w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
        </div>

        {/* Book info */}
        <div className="border-b border-stone-800 bg-stone-900/30 px-6 py-4">
          <h2 className="text-base font-semibold text-stone-200">{book.name}</h2>
          <p className="mt-1 text-xs text-stone-500">{book.description}</p>
          <p className="mt-1 text-xs text-amber-600">
            {chapters.length} chapters
          </p>
        </div>

        {/* Chapter reading view */}
        {selectedChapter !== null ? (
          <div className="px-6 py-4">
            <button
              onClick={() => {
                setSelectedChapter(null);
                setChapterContent("");
              }}
              className="mb-4 text-xs text-amber-500 hover:text-amber-400 transition-colors"
            >
              &larr; Back to chapter list
            </button>
            <h2 className="mb-1 text-lg font-semibold text-stone-200">
              Chapter {selectedChapter}
            </h2>
            <p className="mb-4 text-sm text-amber-600">
              {chapters.find((c) => c.number === selectedChapter)?.title}
            </p>
            {loading ? (
              <p className="text-sm text-stone-500">Loading...</p>
            ) : (
              <div className="prose prose-invert prose-stone max-w-none">
                {chapterContent.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="mb-4 text-sm leading-relaxed text-stone-300"
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}
            {/* Prev / Next */}
            <div className="mt-8 flex items-center justify-between border-t border-stone-800 pt-4">
              {selectedChapter > 1 ? (
                <button
                  onClick={() => setSelectedChapter(selectedChapter - 1)}
                  className="text-xs text-amber-500 hover:text-amber-400"
                >
                  &larr; Chapter {selectedChapter - 1}
                </button>
              ) : (
                <div />
              )}
              {selectedChapter < chapters.length ? (
                <button
                  onClick={() => setSelectedChapter(selectedChapter + 1)}
                  className="text-xs text-amber-500 hover:text-amber-400"
                >
                  Chapter {selectedChapter + 1} &rarr;
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        ) : (
          /* Chapter list */
          <div className="px-6 py-4">
            <div className="space-y-1">
              {filtered.map((c) => (
                <button
                  key={c.number}
                  onClick={() => setSelectedChapter(c.number)}
                  className="flex w-full items-center justify-between rounded-lg border border-stone-800/50 px-4 py-2.5 text-left transition-colors hover:border-stone-700 hover:bg-stone-900/50"
                >
                  <div>
                    <span className="mr-2 text-xs font-mono text-amber-600">
                      c.{c.number}
                    </span>
                    <span className="text-sm text-stone-300">{c.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
