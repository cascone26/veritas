"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { TIMELINE_EVENTS, TimelineEvent } from "@/data/timeline";
import TimelineControls from "@/components/timeline/TimelineControls";
import TimelineCard from "@/components/timeline/TimelineCard";
import EraMarker, { getEra } from "@/components/timeline/EraMarker";
import { formatYear } from "@/components/timeline/TimelineCard";

const ALL_CATEGORIES = new Set(
  TIMELINE_EVENTS.map((e) => e.category)
);

function matchesSearch(event: TimelineEvent, query: string): boolean {
  if (!query) return false;
  const q = query.toLowerCase().trim();

  // Handle "BC" search — convert to negative year matching
  const bcMatch = q.match(/^(\d+)\s*bc$/i);
  if (bcMatch) {
    const bcYear = -parseInt(bcMatch[1], 10);
    return event.year === bcYear;
  }

  // Year match
  const yearStr = formatYear(event.year).toLowerCase();
  if (yearStr.includes(q)) return true;

  // Text fields
  if (event.title.toLowerCase().includes(q)) return true;
  if (event.description.toLowerCase().includes(q)) return true;
  if (event.connection?.toLowerCase().includes(q)) return true;
  if (event.tags?.some((t) => t.toLowerCase().includes(q))) return true;

  return false;
}

export default function TimelinePage() {
  const [zoomLevel, setZoomLevel] = useState<number>(2);
  const [search, setSearch] = useState("");
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    () => new Set(ALL_CATEGORIES)
  );
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const setCardRef = useCallback(
    (index: number, el: HTMLDivElement | null) => {
      if (el) {
        cardRefs.current.set(index, el);
      } else {
        cardRefs.current.delete(index);
      }
    },
    []
  );

  // Filter by tier and categories
  const filteredEvents = useMemo(() => {
    return TIMELINE_EVENTS.filter((e) => {
      if (e.tier > zoomLevel) return false;
      if (!activeCategories.has(e.category)) return false;
      return true;
    });
  }, [zoomLevel, activeCategories]);

  // Find search matches
  const matchIndices = useMemo(() => {
    if (!search) return [];
    const indices: number[] = [];
    filteredEvents.forEach((e, i) => {
      if (matchesSearch(e, search)) indices.push(i);
    });
    return indices;
  }, [filteredEvents, search]);

  // Auto-expand zoom to show search results
  useEffect(() => {
    if (!search) return;
    // Check if there are matches at higher zoom levels
    const allCatFiltered = TIMELINE_EVENTS.filter((e) =>
      activeCategories.has(e.category)
    );
    const matchesAtAnyZoom = allCatFiltered.some((e) =>
      matchesSearch(e, search)
    );
    if (matchesAtAnyZoom && matchIndices.length === 0) {
      // Expand zoom to find results
      if (zoomLevel < 3) setZoomLevel(3);
    }
  }, [search, matchIndices.length, activeCategories, zoomLevel]);

  // Reset match index when search changes
  useEffect(() => {
    setCurrentMatchIndex(0);
  }, [search]);

  // Scroll to current match
  useEffect(() => {
    if (matchIndices.length === 0) return;
    const targetIdx = matchIndices[currentMatchIndex];
    if (targetIdx == null) return;
    const el = cardRefs.current.get(targetIdx);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentMatchIndex, matchIndices]);

  const handleToggleCategory = useCallback((cat: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }, []);

  const handlePrevResult = useCallback(() => {
    setCurrentMatchIndex((prev) =>
      prev <= 0 ? matchIndices.length - 1 : prev - 1
    );
  }, [matchIndices.length]);

  const handleNextResult = useCallback(() => {
    setCurrentMatchIndex((prev) =>
      prev >= matchIndices.length - 1 ? 0 : prev + 1
    );
  }, [matchIndices.length]);

  // Build rendered items with era markers and gap indicators
  const renderedItems = useMemo(() => {
    const items: Array<
      | { type: "era"; era: string; key: string }
      | { type: "gap"; fromYear: number; toYear: number; key: string }
      | { type: "event"; event: TimelineEvent; index: number; key: string }
    > = [];

    let lastEra = "";
    let lastYear: number | null = null;

    filteredEvents.forEach((event, index) => {
      const era = getEra(event.year);

      // Insert era marker on era change
      if (era !== lastEra) {
        items.push({ type: "era", era, key: `era-${era}` });
        lastEra = era;
      }

      // Insert gap indicator for >100 year gaps
      if (lastYear !== null && event.year - lastYear > 100) {
        items.push({
          type: "gap",
          fromYear: lastYear,
          toYear: event.year,
          key: `gap-${lastYear}-${event.year}`,
        });
      }

      items.push({
        type: "event",
        event,
        index,
        key: `event-${event.year}-${event.title}-${index}`,
      });

      lastYear = event.year;
    });

    return items;
  }, [filteredEvents]);

  const matchSet = useMemo(() => new Set(matchIndices), [matchIndices]);

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Historical Timeline"
        subtitle="Key events in Catholic intellectual history"
        icon="📅"
      />
      <div className="flex-1 overflow-y-auto">
        <TimelineControls
          search={search}
          onSearchChange={setSearch}
          zoomLevel={zoomLevel}
          onZoomChange={setZoomLevel}
          activeCategories={activeCategories}
          onToggleCategory={handleToggleCategory}
          resultCount={matchIndices.length}
          currentResult={currentMatchIndex}
          onPrevResult={handlePrevResult}
          onNextResult={handleNextResult}
          totalEvents={TIMELINE_EVENTS.length}
          visibleEvents={filteredEvents.length}
        />

        <div className="px-6 py-6">
          <div className="relative ml-4 border-l-2 border-stone-800 pl-8">
            {renderedItems.map((item) => {
              if (item.type === "era") {
                return <EraMarker key={item.key} era={item.era} />;
              }

              if (item.type === "gap") {
                return (
                  <div
                    key={item.key}
                    className="relative flex items-center gap-2 py-3"
                  >
                    {/* Dot on line for gap */}
                    <div className="absolute -left-[37px] top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-stone-700" />
                    <div className="flex-1 border-t border-dashed border-stone-700/50" />
                    <span className="text-[10px] text-stone-600 font-mono shrink-0">
                      {formatYear(item.fromYear)} &mdash;{" "}
                      {formatYear(item.toYear)}
                    </span>
                    <div className="flex-1 border-t border-dashed border-stone-700/50" />
                  </div>
                );
              }

              // Event
              const isMatch = matchSet.has(item.index);
              const isCurrentMatch =
                matchIndices[currentMatchIndex] === item.index;
              const isDimmed = search.length > 0 && !isMatch;

              return (
                <div
                  key={item.key}
                  ref={(el) => setCardRef(item.index, el)}
                  className={`transition-all duration-300 ${
                    zoomLevel <= 2 ? "mb-4" : "mb-2"
                  } animate-in fade-in`}
                >
                  <TimelineCard
                    event={item.event}
                    isHighlighted={isCurrentMatch}
                    isDimmed={isDimmed}
                    tier={item.event.tier}
                  />
                </div>
              );
            })}

            {filteredEvents.length === 0 && (
              <p className="py-12 text-center text-sm text-stone-600">
                No events match your filters. Try adjusting categories or zoom
                level.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
