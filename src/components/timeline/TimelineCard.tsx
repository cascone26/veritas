"use client";

import { useState } from "react";
import { TimelineEvent } from "@/data/timeline";

const DOT_COLORS: Record<string, string> = {
  aquinas: "bg-amber-500",
  council: "bg-blue-500",
  heresy: "bg-red-500",
  philosophy: "bg-purple-500",
  church: "bg-emerald-500",
  papacy: "bg-yellow-500",
  scripture: "bg-cyan-500",
  encyclical: "bg-rose-500",
};

const TEXT_COLORS: Record<string, string> = {
  aquinas: "text-amber-400",
  council: "text-blue-400",
  heresy: "text-red-400",
  philosophy: "text-purple-400",
  church: "text-emerald-400",
  papacy: "text-yellow-400",
  scripture: "text-cyan-400",
  encyclical: "text-rose-400",
};

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BC`;
  if (year < 100) return `AD ${year}`;
  return String(year);
}

interface TimelineCardProps {
  event: TimelineEvent;
  isHighlighted: boolean;
  isDimmed: boolean;
  tier: 1 | 2 | 3;
}

export default function TimelineCard({
  event,
  isHighlighted,
  isDimmed,
  tier,
}: TimelineCardProps) {
  const [expanded, setExpanded] = useState(false);

  const dotColor = DOT_COLORS[event.category] || "bg-stone-500";
  const textColor = TEXT_COLORS[event.category] || "text-stone-400";

  const showDescription = tier <= 2 || expanded;
  const showConnection = tier === 1 || expanded;
  const showTags = expanded;
  const isClickable = tier >= 2;

  return (
    <div
      className={`relative transition-all duration-300 ${
        isDimmed ? "opacity-40" : "opacity-100"
      } ${isHighlighted ? "ring-2 ring-amber-500/50 rounded-lg" : ""}`}
    >
      {/* Category dot on the timeline */}
      <div
        className={`absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-stone-950 ${dotColor}`}
      />

      <div
        className={`${isClickable ? "cursor-pointer" : ""} ${
          tier === 1 ? "py-1" : "py-0.5"
        }`}
        onClick={isClickable ? () => setExpanded(!expanded) : undefined}
      >
        {/* Year + category label */}
        <div className="flex items-baseline gap-3">
          <span
            className={`font-mono text-stone-600 min-w-[3.5rem] ${
              tier === 1 ? "text-sm" : "text-xs"
            }`}
          >
            {formatYear(event.year)}
          </span>
          <span
            className={`font-medium uppercase ${textColor} ${
              tier === 1 ? "text-[11px]" : "text-[10px]"
            }`}
          >
            {event.category}
          </span>
          {tier === 3 && !expanded && (
            <span className="text-stone-700 text-[10px]">+</span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`mt-0.5 text-stone-200 ${
            tier === 1
              ? "text-base font-bold"
              : tier === 2
              ? "text-sm font-semibold"
              : "text-xs font-medium"
          }`}
        >
          {event.title}
        </h3>

        {/* Description */}
        {showDescription && (
          <p
            className={`mt-0.5 text-stone-400 ${
              tier === 1 ? "text-sm" : "text-xs"
            }`}
          >
            {event.description}
          </p>
        )}

        {/* Connection */}
        {showConnection && event.connection && (
          <p className="mt-1 text-xs italic text-stone-500">
            {event.connection}
          </p>
        )}

        {/* Tags */}
        {showTags && event.tags && event.tags.length > 0 && (
          <div className="mt-1.5 flex flex-wrap gap-1">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-stone-800/80 px-1.5 py-0.5 text-[9px] text-stone-500 border border-stone-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { formatYear };
