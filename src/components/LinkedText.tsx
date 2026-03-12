"use client";

import CitationLink from "./CitationLink";

interface LinkedTextProps {
  children: string;
  className?: string;
  as?: "p" | "span" | "div";
}

/**
 * Utility wrapper that auto-links citations in any text content.
 * Drop it into any page to get clickable citation links.
 *
 * Usage:
 *   <LinkedText>According to ST I, q.2, a.3 and John 6:35...</LinkedText>
 *   <LinkedText as="p" className="text-sm">CCC 1373 teaches...</LinkedText>
 */
export default function LinkedText({
  children,
  className,
  as: Tag = "span",
}: LinkedTextProps) {
  return (
    <Tag className={className}>
      <CitationLink text={children} />
    </Tag>
  );
}
