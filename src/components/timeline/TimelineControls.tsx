"use client";

import { useEffect, useRef, useState } from "react";

const CATEGORIES = [
  { id: "aquinas", label: "Aquinas", color: "bg-amber-500" },
  { id: "council", label: "Councils", color: "bg-blue-500" },
  { id: "heresy", label: "Heresies", color: "bg-red-500" },
  { id: "philosophy", label: "Philosophy", color: "bg-purple-500" },
  { id: "church", label: "Church", color: "bg-emerald-500" },
  { id: "papacy", label: "Papacy", color: "bg-yellow-500" },
  { id: "scripture", label: "Scripture", color: "bg-cyan-500" },
  { id: "encyclical", label: "Encyclical", color: "bg-rose-500" },
] as const;

const ZOOM_LABELS = ["Overview", "Detailed", "Everything"] as const;

interface TimelineControlsProps {
  search: string;
  onSearchChange: (s: string) => void;
  zoomLevel: number;
  onZoomChange: (z: number) => void;
  activeCategories: Set<string>;
  onToggleCategory: (cat: string) => void;
  resultCount: number;
  currentResult: number;
  onPrevResult: () => void;
  onNextResult: () => void;
  totalEvents: number;
  visibleEvents: number;
}

export default function TimelineControls({
  search,
  onSearchChange,
  zoomLevel,
  onZoomChange,
  activeCategories,
  onToggleCategory,
  resultCount,
  currentResult,
  onPrevResult,
  onNextResult,
  totalEvents,
  visibleEvents,
}: TimelineControlsProps) {
  const [localSearch, setLocalSearch] = useState(search);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearchChange(localSearch);
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [localSearch, onSearchChange]);

  // Sync external search changes
  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  return (
    <div className="sticky top-0 z-20 border-b border-stone-800 bg-stone-950/95 backdrop-blur-sm px-6 py-3 space-y-3">
      {/* Search + Zoom row */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Search events, years, tags..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-1.5 text-sm text-stone-200 placeholder:text-stone-600 focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700/50"
          />
          {localSearch && (
            <button
              onClick={() => {
                setLocalSearch("");
                onSearchChange("");
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-600 hover:text-stone-400 text-xs"
            >
              &times;
            </button>
          )}
        </div>

        {/* Search navigation */}
        {search && resultCount > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevResult}
              className="rounded border border-stone-700 bg-stone-900 px-2 py-1 text-xs text-stone-400 hover:border-stone-600 hover:text-stone-300 transition-colors"
            >
              Prev
            </button>
            <span className="text-xs text-stone-500 tabular-nums min-w-[4rem] text-center">
              {currentResult + 1} / {resultCount}
            </span>
            <button
              onClick={onNextResult}
              className="rounded border border-stone-700 bg-stone-900 px-2 py-1 text-xs text-stone-400 hover:border-stone-600 hover:text-stone-300 transition-colors"
            >
              Next
            </button>
          </div>
        )}
        {search && resultCount === 0 && (
          <span className="text-xs text-stone-600">No matches</span>
        )}

        {/* Zoom slider */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-[10px] text-stone-600 min-w-[4.5rem] text-right">
            {ZOOM_LABELS[zoomLevel - 1]}
          </span>
          <input
            type="range"
            min={1}
            max={3}
            step={1}
            value={zoomLevel}
            onChange={(e) => onZoomChange(Number(e.target.value))}
            className="w-20 accent-amber-500"
          />
        </div>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-1.5">
        {CATEGORIES.map((c) => {
          const active = activeCategories.has(c.id);
          return (
            <button
              key={c.id}
              onClick={() => onToggleCategory(c.id)}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] transition-colors ${
                active
                  ? "bg-stone-800 text-stone-200 border border-stone-700"
                  : "bg-stone-900/50 text-stone-600 border border-stone-800/50 hover:border-stone-700"
              }`}
            >
              <span
                className={`inline-block h-2 w-2 rounded-full ${c.color} ${
                  active ? "opacity-100" : "opacity-30"
                }`}
              />
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Event count */}
      <p className="text-[10px] text-stone-600">
        {visibleEvents} of {totalEvents} events
        {search && resultCount > 0 && ` · ${resultCount} matches`}
      </p>
    </div>
  );
}

export { CATEGORIES };
