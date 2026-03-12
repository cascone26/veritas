"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { NAV_SECTIONS } from "@/lib/constants";
import { COURSES } from "@/data/courses";
import { SPIRITUAL_BOOKS } from "@/data/spiritual-reading";
import { GLOSSARY_ENTRIES } from "@/data/glossary";
import { SUMMA_STRUCTURE } from "@/data/summa";

interface SearchResult {
  category: string;
  title: string;
  subtitle?: string;
  href: string;
}

const RECENT_KEY = "veritas-recent-searches";
const MAX_RECENT = 5;
const MAX_PER_CATEGORY = 8;
const MAX_TOTAL = 20;

function getRecentSearches(): string[] {
  try {
    const stored = localStorage.getItem(RECENT_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(query: string) {
  const recent = getRecentSearches().filter((r) => r !== query);
  recent.unshift(query);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)));
}

function searchAll(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];
  const grouped: Record<string, SearchResult[]> = {};

  const addResult = (category: string, result: SearchResult) => {
    if (!grouped[category]) grouped[category] = [];
    if (grouped[category].length < MAX_PER_CATEGORY) {
      grouped[category].push(result);
    }
  };

  // Nav items
  for (const section of NAV_SECTIONS) {
    for (const item of section.items) {
      if (item.name.toLowerCase().includes(q)) {
        addResult("Navigation", {
          category: "Navigation",
          title: item.name,
          subtitle: section.title,
          href: item.href,
        });
      }
    }
  }

  // Summa questions
  for (const part of SUMMA_STRUCTURE) {
    for (const question of part.questions) {
      if (question.title.toLowerCase().includes(q)) {
        addResult("Summa Theologica", {
          category: "Summa Theologica",
          title: `Q.${question.number}: ${question.title}`,
          subtitle: `${part.name} (${question.articles} articles)`,
          href: `/summa?part=${part.id === "prima-pars" ? "I" : part.id === "prima-secundae" ? "I-II" : part.id === "secunda-secundae" ? "II-II" : "III"}&q=${question.number}`,
        });
      }
    }
  }

  // Glossary terms
  for (const entry of GLOSSARY_ENTRIES) {
    if (
      entry.term.toLowerCase().includes(q) ||
      entry.definition.toLowerCase().includes(q)
    ) {
      addResult("Glossary", {
        category: "Glossary",
        title: entry.term,
        subtitle: entry.latin || entry.category,
        href: `/glossary?term=${encodeURIComponent(entry.term)}`,
      });
    }
  }

  // Courses
  for (const course of COURSES) {
    if (
      course.title.toLowerCase().includes(q) ||
      course.subtitle.toLowerCase().includes(q) ||
      course.topics.some((t) => t.toLowerCase().includes(q))
    ) {
      addResult("Courses", {
        category: "Courses",
        title: course.title,
        subtitle: `${course.difficulty} - ${course.duration}`,
        href: `/courses/${course.id}`,
      });
    }
  }

  // Spiritual reading books
  for (const book of SPIRITUAL_BOOKS) {
    if (
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q) ||
      book.covers.toLowerCase().includes(q)
    ) {
      addResult("Library", {
        category: "Library",
        title: book.title,
        subtitle: book.author,
        href: `/spiritual-reading/${book.slug}`,
      });
    }
  }

  // Flatten grouped results respecting MAX_TOTAL
  const categoryOrder = [
    "Navigation",
    "Summa Theologica",
    "Glossary",
    "Courses",
    "Library",
  ];
  let total = 0;
  for (const cat of categoryOrder) {
    if (grouped[cat]) {
      for (const r of grouped[cat]) {
        if (total >= MAX_TOTAL) break;
        results.push(r);
        total++;
      }
    }
    if (total >= MAX_TOTAL) break;
  }

  return results;
}

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Open/close with cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
      setRecentSearches(getRecentSearches());
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Search on query change
  useEffect(() => {
    const r = searchAll(query);
    setResults(r);
    setSelectedIndex(0);
  }, [query]);

  const navigateTo = useCallback(
    (href: string, searchQuery?: string) => {
      if (searchQuery) saveRecentSearch(searchQuery);
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      navigateTo(results[selectedIndex].href, query);
    }
  };

  if (!open) return null;

  // Group results by category for display
  const grouped: { category: string; items: SearchResult[] }[] = [];
  const seen = new Set<string>();
  for (const r of results) {
    if (!seen.has(r.category)) {
      seen.add(r.category);
      grouped.push({
        category: r.category,
        items: results.filter((x) => x.category === r.category),
      });
    }
  }

  let flatIndex = 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-xl rounded-xl border border-stone-800 bg-stone-950 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center border-b border-stone-800 px-4 py-3">
          <svg
            className="mr-3 h-4 w-4 text-stone-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search Veritas..."
            className="flex-1 bg-transparent text-sm text-stone-200 placeholder-stone-600 outline-none"
          />
          <kbd className="ml-2 rounded border border-stone-700 bg-stone-900 px-1.5 py-0.5 text-[10px] text-stone-500">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto px-2 py-2">
          {query.trim() === "" && recentSearches.length > 0 && (
            <div className="px-2 pb-2">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-stone-600">
                Recent Searches
              </p>
              {recentSearches.map((recent) => (
                <button
                  key={recent}
                  onClick={() => setQuery(recent)}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-stone-400 hover:bg-stone-900 hover:text-stone-200 transition-colors"
                >
                  {recent}
                </button>
              ))}
            </div>
          )}

          {query.trim() !== "" && results.length === 0 && (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-stone-500">No results found</p>
              <p className="mt-1 text-xs text-stone-600">
                Try a different search term
              </p>
            </div>
          )}

          {grouped.map((group) => (
            <div key={group.category} className="mb-2">
              <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-stone-600">
                {group.category}
              </p>
              {group.items.map((result) => {
                const idx = flatIndex++;
                return (
                  <button
                    key={`${result.category}-${result.href}-${idx}`}
                    onClick={() => navigateTo(result.href, query)}
                    className={`flex w-full items-center rounded-lg px-3 py-2 text-left transition-colors ${
                      idx === selectedIndex
                        ? "bg-amber-900/30 text-amber-400"
                        : "text-stone-300 hover:bg-stone-900"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm">{result.title}</p>
                      {result.subtitle && (
                        <p className="truncate text-xs text-stone-600">
                          {result.subtitle}
                        </p>
                      )}
                    </div>
                    {idx === selectedIndex && (
                      <kbd className="ml-2 shrink-0 rounded border border-stone-700 bg-stone-900 px-1.5 py-0.5 text-[10px] text-stone-500">
                        Enter
                      </kbd>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-stone-800 px-4 py-2">
          <div className="flex gap-3 text-[10px] text-stone-600">
            <span>
              <kbd className="rounded border border-stone-700 bg-stone-900 px-1 py-0.5">
                ↑↓
              </kbd>{" "}
              navigate
            </span>
            <span>
              <kbd className="rounded border border-stone-700 bg-stone-900 px-1 py-0.5">
                ↵
              </kbd>{" "}
              open
            </span>
            <span>
              <kbd className="rounded border border-stone-700 bg-stone-900 px-1 py-0.5">
                esc
              </kbd>{" "}
              close
            </span>
          </div>
          <p className="text-[10px] text-stone-700">
            <kbd className="rounded border border-stone-700 bg-stone-900 px-1 py-0.5">
              ⌘K
            </kbd>
          </p>
        </div>
      </div>
    </div>
  );
}
