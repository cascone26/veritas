/**
 * Citation parser — converts raw text citations into clickable links.
 *
 * Supported patterns:
 *   ST I, q.2, a.3        → /summa?search=q.2
 *   ST I-II, q.94, a.2    → /summa?search=q.94
 *   ST II-II, q.23, a.1   → /summa?search=q.23
 *   ST III, q.60, a.1     → /summa?search=q.60
 *   SCG I, c.13           → /summa?search=SCG+I+c.13
 *   CCC 1234              → Vatican CCC online
 *   CCC 1234-1240         → Vatican CCC online
 *   John 6:51             → BibleGateway RSVCE
 *   1 Cor 15:3-4          → BibleGateway RSVCE
 *   Gen 1:1               → BibleGateway RSVCE
 */

const LINK_CLASS = "text-amber-500 hover:underline";

// Book abbreviations that can start with a number (1/2/3)
const NUMBERED_BOOKS =
  "Cor|Thess|Tim|Pet|John|Jn|Sam|Kgs|Kings|Chr|Chron|Macc|Esd";

// All recognisable Bible book names / abbreviations
const BIBLE_BOOKS = [
  // Old Testament
  "Genesis",
  "Gen",
  "Exodus",
  "Ex",
  "Exod",
  "Leviticus",
  "Lev",
  "Numbers",
  "Num",
  "Deuteronomy",
  "Deut",
  "Dt",
  "Joshua",
  "Josh",
  "Judges",
  "Judg",
  "Ruth",
  "1 Samuel",
  "1 Sam",
  "2 Samuel",
  "2 Sam",
  "1 Kings",
  "1 Kgs",
  "2 Kings",
  "2 Kgs",
  "1 Chronicles",
  "1 Chr",
  "2 Chronicles",
  "2 Chr",
  "Ezra",
  "Nehemiah",
  "Neh",
  "Tobit",
  "Tob",
  "Judith",
  "Jdt",
  "Esther",
  "Esth",
  "1 Maccabees",
  "1 Macc",
  "2 Maccabees",
  "2 Macc",
  "Job",
  "Psalms",
  "Psalm",
  "Ps",
  "Proverbs",
  "Prov",
  "Ecclesiastes",
  "Eccles",
  "Eccl",
  "Song of Solomon",
  "Song",
  "Sg",
  "Wisdom",
  "Wis",
  "Sirach",
  "Sir",
  "Isaiah",
  "Isa",
  "Is",
  "Jeremiah",
  "Jer",
  "Lamentations",
  "Lam",
  "Baruch",
  "Bar",
  "Ezekiel",
  "Ezek",
  "Ez",
  "Daniel",
  "Dan",
  "Dn",
  "Hosea",
  "Hos",
  "Joel",
  "Amos",
  "Am",
  "Obadiah",
  "Obad",
  "Ob",
  "Jonah",
  "Jon",
  "Micah",
  "Mic",
  "Nahum",
  "Nah",
  "Habakkuk",
  "Hab",
  "Zephaniah",
  "Zeph",
  "Haggai",
  "Hag",
  "Zechariah",
  "Zech",
  "Malachi",
  "Mal",
  // New Testament
  "Matthew",
  "Matt",
  "Mt",
  "Mark",
  "Mk",
  "Luke",
  "Lk",
  "John",
  "Jn",
  "Acts",
  "Romans",
  "Rom",
  "1 Corinthians",
  "1 Cor",
  "2 Corinthians",
  "2 Cor",
  "Galatians",
  "Gal",
  "Ephesians",
  "Eph",
  "Philippians",
  "Phil",
  "Colossians",
  "Col",
  "1 Thessalonians",
  "1 Thess",
  "2 Thessalonians",
  "2 Thess",
  "1 Timothy",
  "1 Tim",
  "2 Timothy",
  "2 Tim",
  "Titus",
  "Tit",
  "Philemon",
  "Phlm",
  "Hebrews",
  "Heb",
  "James",
  "Jas",
  "1 Peter",
  "1 Pet",
  "2 Peter",
  "2 Pet",
  "1 John",
  "1 Jn",
  "2 John",
  "2 Jn",
  "3 John",
  "3 Jn",
  "Jude",
  "Revelation",
  "Rev",
  "Apocalypse",
  "Apoc",
].join("|");

// ── Helpers ──────────────────────────────────────────────────────────

function internalLink(href: string, text: string): string {
  return `<a href="${href}" class="${LINK_CLASS}">${text}</a>`;
}

function externalLink(href: string, text: string): string {
  return `<a href="${href}" class="${LINK_CLASS}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

function bibleGatewayUrl(ref: string): string {
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=RSVCE`;
}

const VATICAN_CCC =
  "https://www.vatican.va/archive/ENG0015/_INDEX.HTM";

// ── Main function ────────────────────────────────────────────────────

export function linkCitations(text: string): string {
  let result = text;

  // 1) Summa Theologiae — ST I, q.2, a.3  /  ST I-II, q.94, a.2  etc.
  //    Matches with or without the article part (a.X)
  result = result.replace(
    /\bST\s+(I{1,3}(?:-I{1,2})?),?\s*q\.?\s*(\d+)(?:,?\s*a\.?\s*(\d+))?\b/g,
    (match, _part, question) => {
      const href = `/summa?search=q.${question}`;
      return internalLink(href, match);
    }
  );

  // 2) Summa Contra Gentiles — SCG I, c.13  /  SCG II, c.15 etc.
  result = result.replace(
    /\bSCG\s+(I{1,4}|[1-4]),?\s*c\.?\s*(\d+)\b/g,
    (match, book, chapter) => {
      const href = `/summa?search=SCG+${encodeURIComponent(book)}+c.${chapter}`;
      return internalLink(href, match);
    }
  );

  // 3) CCC paragraph references — CCC 1234 or CCC 1234-1240
  result = result.replace(
    /\bCCC\s+(\d{1,4}(?:\s*[-–]\s*\d{1,4})?)\b/g,
    (match) => {
      return externalLink(VATICAN_CCC, match);
    }
  );

  // 4) Scripture references
  //    Pattern: optional number prefix + book name + chapter:verse(-verse)
  //    e.g. "John 6:51", "1 Cor 15:3-4", "Genesis 1:1-3", "Rom 5:12-21"
  const scripturePattern = new RegExp(
    `\\b((?:[123]\\s+)?(?:${BIBLE_BOOKS}))\\s+(\\d{1,3}):(\\d{1,3}(?:\\s*[-–]\\s*\\d{1,3})?)\\b`,
    "g"
  );

  result = result.replace(scripturePattern, (match, book, chapter, verses) => {
    const ref = `${book} ${chapter}:${verses}`;
    return externalLink(bibleGatewayUrl(ref), match);
  });

  return result;
}

/**
 * Escape HTML special characters in user-supplied text before linkifying.
 * Use this on raw AI response text BEFORE passing to linkCitations
 * so that angle brackets in the response don't create unexpected tags.
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
