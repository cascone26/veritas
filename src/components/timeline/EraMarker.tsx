"use client";

export interface Era {
  name: string;
  startYear: number;
}

export const ERAS: Era[] = [
  { name: "Ancient Philosophy", startYear: -Infinity },
  { name: "Apostolic & Early Church", startYear: 0 },
  { name: "Imperial Church & Councils", startYear: 313 },
  { name: "Early Medieval", startYear: 600 },
  { name: "High Medieval & Scholasticism", startYear: 1000 },
  { name: "Renaissance & Reformation", startYear: 1400 },
  { name: "Counter-Reformation & Early Modern", startYear: 1600 },
  { name: "Modern Era", startYear: 1800 },
];

export function getEra(year: number): string {
  for (let i = ERAS.length - 1; i >= 0; i--) {
    if (year >= ERAS[i].startYear) return ERAS[i].name;
  }
  return ERAS[0].name;
}

interface EraMarkerProps {
  era: string;
}

export default function EraMarker({ era }: EraMarkerProps) {
  return (
    <div className="sticky top-[7.5rem] z-10 -ml-4 flex items-center gap-3 py-3">
      <div className="h-px flex-1 bg-gradient-to-r from-amber-700/60 via-amber-700/30 to-transparent" />
      <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-amber-600">
        {era}
      </span>
      <div className="h-px w-8 bg-amber-700/30" />
    </div>
  );
}
