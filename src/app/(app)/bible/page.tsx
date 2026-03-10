"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

const OT_BOOKS = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
  "Josue", "Judges", "Ruth", "1 Kings", "2 Kings", "3 Kings", "4 Kings",
  "1 Paralipomenon", "2 Paralipomenon", "1 Esdras", "2 Esdras",
  "Tobias", "Judith", "Esther", "Job", "Psalms", "Proverbs",
  "Ecclesiastes", "Canticle of Canticles", "Wisdom", "Ecclesiasticus",
  "Isaias", "Jeremias", "Lamentations", "Baruch", "Ezechiel", "Daniel",
  "Osee", "Joel", "Amos", "Abdias", "Jonas", "Micheas", "Nahum",
  "Habacuc", "Sophonias", "Aggeus", "Zacharias", "Malachias",
  "1 Machabees", "2 Machabees",
];

const NT_BOOKS = [
  "Matthew", "Mark", "Luke", "John", "Acts",
  "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
  "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
  "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews",
  "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John",
  "Jude", "Apocalypse",
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/ /g, "-");
}

interface ChapterInfo {
  number: number;
}

export default function BibleBrowser() {
  const [testament, setTestament] = useState<"ot" | "nt">("ot");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [chapters, setChapters] = useState<ChapterInfo[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [chapterContent, setChapterContent] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const books = testament === "ot" ? OT_BOOKS : NT_BOOKS;

  // Parse chapters when a book is selected
  useEffect(() => {
    if (!selectedBook) return;
    setLoading(true);
    fetch(`/bible/${toSlug(selectedBook)}.md`)
      .then((r) => r.text())
      .then((text) => {
        const matches = text.matchAll(/^## Chapter (\d+)/gm);
        const parsed: ChapterInfo[] = [];
        for (const m of matches) {
          parsed.push({ number: parseInt(m[1]) });
        }
        setChapters(parsed);
        setSelectedChapter(null);
        setChapterContent("");
        setLoading(false);
      })
      .catch(() => {
        setChapters([]);
        setLoading(false);
      });
  }, [selectedBook]);

  // Load chapter content
  useEffect(() => {
    if (!selectedBook || selectedChapter === null) return;
    setLoading(true);
    fetch(`/bible/${toSlug(selectedBook)}.md`)
      .then((r) => r.text())
      .then((text) => {
        const regex = new RegExp(
          `## Chapter ${selectedChapter}\\n([\\s\\S]*?)(?=\\n## Chapter \\d|$)`
        );
        const match = text.match(regex);
        setChapterContent(match ? match[1].trim() : "Chapter not found.");
        setLoading(false);
      })
      .catch(() => {
        setChapterContent("Error loading chapter.");
        setLoading(false);
      });
  }, [selectedBook, selectedChapter]);

  const filteredBooks = books.filter((b) => {
    if (!search) return true;
    return b.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Douay-Rheims Bible"
        subtitle="73 books — the traditional Catholic English Bible"
        icon="📜"
      />
      <div className="flex-1 overflow-y-auto">
        {/* Testament selector + search */}
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={() => { setTestament("ot"); setSelectedBook(null); setSearch(""); }}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                testament === "ot" ? "bg-amber-600/20 text-amber-400" : "text-stone-500 hover:text-stone-300"
              }`}
            >
              Old Testament ({OT_BOOKS.length})
            </button>
            <button
              onClick={() => { setTestament("nt"); setSelectedBook(null); setSearch(""); }}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                testament === "nt" ? "bg-amber-600/20 text-amber-400" : "text-stone-500 hover:text-stone-300"
              }`}
            >
              New Testament ({NT_BOOKS.length})
            </button>
          </div>
          {!selectedBook && (
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search books..."
              className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
            />
          )}
        </div>

        {/* Reading view */}
        {selectedBook && selectedChapter !== null ? (
          <div className="px-6 py-4">
            <button
              onClick={() => { setSelectedChapter(null); setChapterContent(""); }}
              className="mb-4 text-xs text-amber-500 hover:text-amber-400 transition-colors"
            >
              &larr; Back to {selectedBook}
            </button>
            <h2 className="mb-4 text-lg font-semibold text-stone-200">
              {selectedBook} — Chapter {selectedChapter}
            </h2>
            {loading ? (
              <p className="text-sm text-stone-500">Loading...</p>
            ) : (
              <div className="prose prose-invert prose-stone max-w-none">
                {chapterContent.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-3 text-sm leading-relaxed text-stone-300" dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*(\d+:\d+)\*\*/g, '<strong class="text-amber-600 font-mono text-xs">$1</strong>')
                  }} />
                ))}
              </div>
            )}
            <div className="mt-8 flex items-center justify-between border-t border-stone-800 pt-4">
              {selectedChapter > 1 ? (
                <button
                  onClick={() => setSelectedChapter(selectedChapter - 1)}
                  className="text-xs text-amber-500 hover:text-amber-400"
                >
                  &larr; Chapter {selectedChapter - 1}
                </button>
              ) : <div />}
              {selectedChapter < chapters.length ? (
                <button
                  onClick={() => setSelectedChapter(selectedChapter + 1)}
                  className="text-xs text-amber-500 hover:text-amber-400"
                >
                  Chapter {selectedChapter + 1} &rarr;
                </button>
              ) : <div />}
            </div>
          </div>
        ) : selectedBook ? (
          /* Chapter list */
          <div className="px-6 py-4">
            <button
              onClick={() => { setSelectedBook(null); setChapters([]); }}
              className="mb-4 text-xs text-amber-500 hover:text-amber-400 transition-colors"
            >
              &larr; Back to book list
            </button>
            <h2 className="mb-1 text-base font-semibold text-stone-200">{selectedBook}</h2>
            <p className="mb-4 text-xs text-amber-600">{chapters.length} chapters</p>
            {loading ? (
              <p className="text-sm text-stone-500">Loading...</p>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
                {chapters.map((c) => (
                  <button
                    key={c.number}
                    onClick={() => setSelectedChapter(c.number)}
                    className="rounded-lg border border-stone-800/50 px-3 py-2.5 text-center text-sm font-mono text-stone-300 transition-colors hover:border-stone-700 hover:bg-stone-900/50"
                  >
                    {c.number}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Book list */
          <div className="px-6 py-4">
            <div className="space-y-1">
              {filteredBooks.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBook(b)}
                  className="flex w-full items-center rounded-lg border border-stone-800/50 px-4 py-2.5 text-left transition-colors hover:border-stone-700 hover:bg-stone-900/50"
                >
                  <span className="text-sm text-stone-300">{b}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
