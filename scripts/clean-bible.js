#!/usr/bin/env node
// Clean trailing navigation junk from Bible markdown files
const fs = require('fs');
const path = require('path');

const BIBLE_DIR = path.join(__dirname, '..', 'public', 'bible');
const files = fs.readdirSync(BIBLE_DIR).filter(f => f.endsWith('.md'));

// Pattern: navigation junk that appears at end of last verse of each chapter
// Example: "...barley harvest. Book of Ruth next > Chapter 1 next > TOP OF PAGE side_ads..."
// We need to cut from the book name reference onwards

const JUNK_PATTERN = / (?:Book of |(?:Gospel According to |Epistle of |Acts of the |Prophecy of |First |Second |Third |The )?(?:Saint )?\w[\w ]*(?:next >|< prev)[\s\S]*?(?:sc_security = "[^"]*";))/g;

// More robust: cut everything after "TOP OF PAGE" pattern or "side_ads" or "sc_project"
// The junk always contains "next >" or "< prev" followed by book/chapter navigation

let totalCleaned = 0;

for (const file of files) {
  const filePath = path.join(BIBLE_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Split into lines and clean each one
  const lines = content.split('\n');
  const cleanedLines = lines.map(line => {
    // Only process verse lines (start with **)
    if (!line.startsWith('**')) return line;

    // Find and remove trailing navigation junk
    // The junk pattern contains these distinctive markers
    const markers = [
      'TOP OF PAGE',
      'side_ads(',
      'sc_project',
      'sc_invisible',
      'sc_security',
      'next >',
      '< prev',
    ];

    // Find the earliest occurrence of navigation text
    // Navigation always follows a pattern like "Book of XXX" or chapter name

    // Strategy: find "next >" or "< prev" and cut from the word before it
    // that starts the nav section
    let cutIndex = -1;

    // Look for " Book of " or similar book name reference before "next >"
    const nextIdx = line.indexOf('next >');
    const prevIdx = line.indexOf('< prev');
    const topIdx = line.indexOf('TOP OF PAGE');
    const sideIdx = line.indexOf('side_ads');

    if (nextIdx === -1 && prevIdx === -1 && topIdx === -1 && sideIdx === -1) {
      return line;
    }

    // Find the earliest marker
    const indices = [nextIdx, prevIdx, topIdx, sideIdx].filter(i => i > -1);
    const earliestMarker = Math.min(...indices);

    // Walk backwards from the earliest marker to find where the nav text starts
    // It typically starts after the last sentence-ending punctuation
    const beforeMarker = line.substring(0, earliestMarker);

    // Find the last sentence-ending character before the nav
    // Look for .) or ." or just . or ? or ! or : followed by space and then nav text
    const lastSentenceEnd = beforeMarker.search(/[.?!:;]\s+[A-Z][^.]*$/);

    if (lastSentenceEnd > -1) {
      // Cut after the punctuation
      const puncEnd = beforeMarker.indexOf(' ', lastSentenceEnd + 1);
      if (puncEnd > -1) {
        return line.substring(0, puncEnd).trim();
      }
    }

    // Fallback: just cut at the first "< prev" or look for common book name patterns
    const bookPatterns = [
      / Book of \w/,
      / Gospel According/,
      / Epistle of/,
      / Acts of the/,
      / Prophecy of/,
      / First Epistle/,
      / Second Epistle/,
      / Third Epistle/,
      / Epistle to/,
      / Epistle (?:General )?of/,
      / (?:First|Second) Book/,
    ];

    for (const pat of bookPatterns) {
      const match = line.search(pat);
      if (match > -1) {
        return line.substring(0, match).trim();
      }
    }

    // Last resort: cut right before "< prev" or before the word before "next >"
    if (prevIdx > -1) {
      return line.substring(0, prevIdx).trim();
    }

    return line;
  });

  content = cleanedLines.join('\n');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    totalCleaned++;
    // Count how many lines changed
    const changedCount = lines.filter((l, i) => l !== cleanedLines[i]).length;
    console.log(`Cleaned ${file}: ${changedCount} lines`);
  }
}

console.log(`\nCleaned ${totalCleaned} files`);
