"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

const PARTS = [
  { id: 1, name: "Part 1: The Profession of Faith", file: "part1.md", description: "The Creed — God, creation, Christ, the Holy Spirit, the Church, communion of saints, resurrection" },
  { id: 2, name: "Part 2: The Celebration of the Christian Mystery", file: "part2.md", description: "The sacraments — Baptism, Confirmation, Eucharist, Penance, Anointing, Holy Orders, Matrimony" },
  { id: 3, name: "Part 3: Life in Christ", file: "part3.md", description: "Moral theology — the human vocation, the Ten Commandments, virtue, sin, grace, law" },
  { id: 4, name: "Part 4: Christian Prayer", file: "part4.md", description: "Prayer — the Our Father, forms of prayer, the life of prayer, contemplation" },
];

interface Section {
  title: string;
  startParagraph: number;
}

export default function CCCBrowser() {
  const [selectedPart, setSelectedPart] = useState(1);
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [sectionContent, setSectionContent] = useState("");
  const [fullText, setFullText] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const part = PARTS.find((p) => p.id === selectedPart)!;

  // Load part text
  useEffect(() => {
    setLoading(true);
    fetch(`/ccc/${part.file}`)
      .then((r) => r.text())
      .then((text) => {
        setFullText(text);
        // Parse section headings (## lines)
        const matches = text.matchAll(/^## (.+)$/gm);
        const parsed: Section[] = [];
        for (const m of matches) {
          // Find the first paragraph number after this heading
          const idx = m.index! + m[0].length;
          const afterHeading = text.slice(idx, idx + 500);
          const paraMatch = afterHeading.match(/\*\*(\d+)\.\*\*/);
          parsed.push({
            title: m[1].trim(),
            startParagraph: paraMatch ? parseInt(paraMatch[1]) : 0,
          });
        }
        setSections(parsed);
        setSelectedSection(null);
        setSectionContent("");
        setLoading(false);
      })
      .catch(() => {
        setSections([]);
        setLoading(false);
      });
  }, [selectedPart, part.file]);

  // Load section content
  useEffect(() => {
    if (!selectedSection || !fullText) return;
    const escaped = selectedSection.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(
      `## ${escaped}\\n([\\s\\S]*?)(?=\\n## |$)`
    );
    const match = fullText.match(regex);
    setSectionContent(match ? match[1].trim() : "Section not found.");
  }, [selectedSection, fullText]);

  const filtered = sections.filter((s) => {
    if (!search) return true;
    return s.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Catechism of the Catholic Church"
        subtitle="4 parts, 2,865 paragraphs — the definitive summary of Catholic doctrine"
        icon="✝️"
      />
      <div className="flex-1 overflow-y-auto">
        {/* Part selector */}
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {PARTS.map((p) => (
              <button
                key={p.id}
                onClick={() => { setSelectedPart(p.id); setSearch(""); }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedPart === p.id
                    ? "bg-amber-600/20 text-amber-400"
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                Part {p.id}
              </button>
            ))}
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sections..."
            className="mt-2 w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
        </div>

        {/* Part info */}
        <div className="border-b border-stone-800 bg-stone-900/30 px-6 py-4">
          <h2 className="text-base font-semibold text-stone-200">{part.name}</h2>
          <p className="mt-1 text-xs text-stone-500">{part.description}</p>
          <p className="mt-1 text-xs text-amber-600">{sections.length} sections</p>
        </div>

        {/* Section reading view */}
        {selectedSection ? (
          <div className="px-6 py-4">
            <button
              onClick={() => { setSelectedSection(null); setSectionContent(""); }}
              className="mb-4 text-xs text-amber-500 hover:text-amber-400 transition-colors"
            >
              &larr; Back to section list
            </button>
            <h2 className="mb-4 text-lg font-semibold text-stone-200">
              {selectedSection}
            </h2>
            {loading ? (
              <p className="text-sm text-stone-500">Loading...</p>
            ) : (
              <div className="prose prose-invert prose-stone max-w-none">
                {sectionContent.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-3 text-sm leading-relaxed text-stone-300" dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*(\d+)\.\*\*/g, '<strong class="text-amber-600 font-mono text-xs">$1.</strong>')
                  }} />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Section list */
          <div className="px-6 py-4">
            {loading ? (
              <p className="text-sm text-stone-500">Loading...</p>
            ) : (
              <div className="space-y-1">
                {filtered.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSection(s.title)}
                    className="flex w-full items-center justify-between rounded-lg border border-stone-800/50 px-4 py-2.5 text-left transition-colors hover:border-stone-700 hover:bg-stone-900/50"
                  >
                    <span className="text-sm text-stone-300">{s.title}</span>
                    {s.startParagraph > 0 && (
                      <span className="text-xs font-mono text-amber-600 shrink-0 ml-2">
                        §{s.startParagraph}
                      </span>
                    )}
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
