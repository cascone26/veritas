"use client";

import Link from "next/link";
import { parseCitations, type ParsedCitation } from "@/lib/citations";

interface CitationLinkProps {
  text: string;
  className?: string;
}

/**
 * Renders a text string with citation patterns converted to clickable
 * amber-colored links. Non-citation text renders as normal spans.
 */
export default function CitationLink({ text, className }: CitationLinkProps) {
  const citations = parseCitations(text);

  if (citations.length === 0) {
    return <span className={className}>{text}</span>;
  }

  const parts: React.ReactNode[] = [];
  let cursor = 0;

  citations.forEach((c: ParsedCitation, i: number) => {
    // Text before this citation
    if (c.start > cursor) {
      parts.push(
        <span key={`t-${i}`}>{text.slice(cursor, c.start)}</span>
      );
    }
    // The citation link
    parts.push(
      <Link
        key={`c-${i}`}
        href={c.href}
        className="text-amber-500 hover:text-amber-400 hover:underline transition-colors"
      >
        {c.text}
      </Link>
    );
    cursor = c.end;
  });

  // Trailing text
  if (cursor < text.length) {
    parts.push(<span key="tail">{text.slice(cursor)}</span>);
  }

  return <span className={className}>{parts}</span>;
}
