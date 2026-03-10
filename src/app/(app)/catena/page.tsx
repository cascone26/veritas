"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

const GOSPELS = [
  { id: "matthew", name: "Matthew", chapters: 28 },
  { id: "mark", name: "Mark", chapters: 16 },
  { id: "luke", name: "Luke", chapters: 24 },
  { id: "john", name: "John", chapters: 21 },
];

interface VerseSection {
  title: string;
  raw: string;
}

export default function CatenaBrowser() {
  const [selectedGospel, setSelectedGospel] = useState("matthew");
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [verseSections, setVerseSections] = useState<VerseSection[]>([]);
  const [selectedVerse, setSelectedVerse] = useState<string | null>(null);
  const [verseContent, setVerseContent] = useState("");
  const [fullText, setFullText] = useState("");
  const [loading, setLoading] = useState(false);

  const gospel = GOSPELS.find((g) => g.id === selectedGospel)!;

  // Load gospel text
  useEffect(() => {
    setLoading(true);
    fetch(`/catena/${selectedGospel}.md`)
      .then((r) => r.text())
      .then((text) => {
        setFullText(text);
        setSelectedChapter(null);
        setVerseSections([]);
        setSelectedVerse(null);
        setVerseContent("");
        setLoading(false);
      })
      .catch(() => {
        setFullText("");
        setLoading(false);
      });
  }, [selectedGospel]);

  // Parse verse sections when chapter is selected
  useEffect(() => {
    if (selectedChapter === null || !fullText) return;
    // Find the chapter section
    const chapterRegex = new RegExp(
      `## Chapter ${selectedChapter}\\n([\\s\\S]*?)(?=\\n## Chapter \\d|$)`
    );
    const chapterMatch = fullText.match(chapterRegex);
    if (!chapterMatch) {
      setVerseSections([]);
      return;
    }
    const chapterText = chapterMatch[1];
    // Parse ### verse headings
    const verseMatches = chapterText.matchAll(/^### (.+)$/gm);
    const parsed: VerseSection[] = [];
    let lastIdx = 0;
    let lastName = "";
    const indices: { name: string; start: number }[] = [];
    for (const m of verseMatches) {
      indices.push({ name: m[1].trim(), start: m.index! });
    }
    for (let i = 0; i < indices.length; i++) {
      const contentStart = indices[i].start + indices[i].name.length + 5; // ### + \n
      const contentEnd = i + 1 < indices.length ? indices[i + 1].start : chapterText.length;
      parsed.push({
        title: indices[i].name,
        raw: chapterText.slice(contentStart, contentEnd).trim(),
      });
    }
    setVerseSections(parsed);
    setSelectedVerse(null);
    setVerseContent("");
  }, [selectedChapter, fullText]);

  // Load verse content
  useEffect(() => {
    if (!selectedVerse) return;
    const section = verseSections.find((v) => v.title === selectedVerse);
    setVerseContent(section ? section.raw : "Section not found.");
  }, [selectedVerse, verseSections]);

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Catena Aurea"
        subtitle="Aquinas's golden chain of Church Father commentaries on the Gospels"
        icon="⛓️"
      />
      <div className="flex-1 overflow-y-auto">
        {/* Gospel selector */}
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {GOSPELS.map((g) => (
              <button
                key={g.id}
                onClick={() => { setSelectedGospel(g.id); }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedGospel === g.id
                    ? "bg-amber-600/20 text-amber-400"
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                {g.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gospel info */}
        <div className="border-b border-stone-800 bg-stone-900/30 px-6 py-4">
          <h2 className="text-base font-semibold text-stone-200">Gospel of {gospel.name}</h2>
          <p className="mt-1 text-xs text-stone-500">
            Patristic commentary compiled by St. Thomas Aquinas from 80+ Church Fathers and Doctors
          </p>
          <p className="mt-1 text-xs text-amber-600">{gospel.chapters} chapters</p>
        </div>

        {/* Verse commentary view */}
        {selectedVerse ? (
          <div className="px-6 py-4">
            <button
              onClick={() => { setSelectedVerse(null); setVerseContent(""); }}
              className="mb-4 text-xs text-amber-500 hover:text-amber-400 transition-colors"
            >
              &larr; Back to {gospel.name} {selectedChapter}
            </button>
            <h2 className="mb-4 text-lg font-semibold text-stone-200">
              {selectedVerse}
            </h2>
            <div className="prose prose-invert prose-stone max-w-none">
              {verseContent.split("\n\n").map((para, i) => (
                <p key={i} className="mb-3 text-sm leading-relaxed text-stone-300" dangerouslySetInnerHTML={{
                  __html: para
                    .replace(/\*\*([A-Z][A-Z\s.]+)\*\*/g, '<strong class="text-amber-500">$1</strong>')
                    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                }} />
              ))}
            </div>
          </div>
        ) : selectedChapter !== null ? (
          /* Verse section list */
          <div className="px-6 py-4">
            <button
              onClick={() => { setSelectedChapter(null); setVerseSections([]); }}
              className="mb-4 text-xs text-amber-500 hover:text-amber-400 transition-colors"
            >
              &larr; Back to chapters
            </button>
            <h2 className="mb-1 text-base font-semibold text-stone-200">
              {gospel.name} — Chapter {selectedChapter}
            </h2>
            <p className="mb-4 text-xs text-amber-600">{verseSections.length} verse sections</p>
            {loading ? (
              <p className="text-sm text-stone-500">Loading...</p>
            ) : (
              <div className="space-y-1">
                {verseSections.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVerse(v.title)}
                    className="flex w-full items-center rounded-lg border border-stone-800/50 px-4 py-2.5 text-left transition-colors hover:border-stone-700 hover:bg-stone-900/50"
                  >
                    <span className="text-sm text-stone-300">{v.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Chapter grid */
          <div className="px-6 py-4">
            {loading ? (
              <p className="text-sm text-stone-500">Loading...</p>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
                {Array.from({ length: gospel.chapters }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setSelectedChapter(n)}
                    className="rounded-lg border border-stone-800/50 px-3 py-2.5 text-center text-sm font-mono text-stone-300 transition-colors hover:border-stone-700 hover:bg-stone-900/50"
                  >
                    {n}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
