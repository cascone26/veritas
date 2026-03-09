#!/usr/bin/env node
// Fetch Douay-Rheims Bible from drbo.org and save as markdown files

const https = require('https');
const fs = require('fs');
const path = require('path');

const BIBLE_DIR = path.join(__dirname, '..', 'public', 'bible');
const DELAY_MS = 300; // Be respectful to the server

// Book definitions: [drbo_number, slug, display_name, chapter_count]
const BOOKS = [
  // NEW TESTAMENT (47-73)
  [47, 'matthew', 'Matthew', 28],
  [48, 'mark', 'Mark', 16],
  [49, 'luke', 'Luke', 24],
  [50, 'john', 'John', 21],
  [51, 'acts', 'Acts of the Apostles', 28],
  [52, 'romans', 'Romans', 16],
  [53, '1-corinthians', '1 Corinthians', 16],
  [54, '2-corinthians', '2 Corinthians', 13],
  [55, 'galatians', 'Galatians', 6],
  [56, 'ephesians', 'Ephesians', 6],
  [57, 'philippians', 'Philippians', 4],
  [58, 'colossians', 'Colossians', 4],
  [59, '1-thessalonians', '1 Thessalonians', 5],
  [60, '2-thessalonians', '2 Thessalonians', 3],
  [61, '1-timothy', '1 Timothy', 6],
  [62, '2-timothy', '2 Timothy', 4],
  [63, 'titus', 'Titus', 3],
  [64, 'philemon', 'Philemon', 1],
  [65, 'hebrews', 'Hebrews', 13],
  [66, 'james', 'James', 5],
  [67, '1-peter', '1 Peter', 5],
  [68, '2-peter', '2 Peter', 3],
  [69, '1-john', '1 John', 5],
  [70, '2-john', '2 John', 1],
  [71, '3-john', '3 John', 1],
  [72, 'jude', 'Jude', 1],
  [73, 'apocalypse', 'Apocalypse (Revelation)', 22],
  // OLD TESTAMENT (01-46)
  [1, 'genesis', 'Genesis', 50],
  [2, 'exodus', 'Exodus', 40],
  [3, 'leviticus', 'Leviticus', 27],
  [4, 'numbers', 'Numbers', 36],
  [5, 'deuteronomy', 'Deuteronomy', 34],
  [6, 'josue', 'Josue (Joshua)', 24],
  [7, 'judges', 'Judges', 21],
  [8, 'ruth', 'Ruth', 4],
  [9, '1-kings', '1 Kings (1 Samuel)', 31],
  [10, '2-kings', '2 Kings (2 Samuel)', 24],
  [11, '3-kings', '3 Kings (1 Kings)', 22],
  [12, '4-kings', '4 Kings (2 Kings)', 25],
  [13, '1-paralipomenon', '1 Paralipomenon (1 Chronicles)', 29],
  [14, '2-paralipomenon', '2 Paralipomenon (2 Chronicles)', 36],
  [15, '1-esdras', '1 Esdras (Ezra)', 10],
  [16, '2-esdras', '2 Esdras (Nehemiah)', 13],
  [17, 'tobias', 'Tobias (Tobit)', 14],
  [18, 'judith', 'Judith', 16],
  [19, 'esther', 'Esther', 16],
  [20, 'job', 'Job', 42],
  [21, 'psalms', 'Psalms', 150],
  [22, 'proverbs', 'Proverbs', 31],
  [23, 'ecclesiastes', 'Ecclesiastes', 12],
  [24, 'canticle-of-canticles', 'Canticle of Canticles (Song of Solomon)', 8],
  [25, 'wisdom', 'Wisdom', 19],
  [26, 'ecclesiasticus', 'Ecclesiasticus (Sirach)', 51],
  [27, 'isaias', 'Isaias (Isaiah)', 66],
  [28, 'jeremias', 'Jeremias (Jeremiah)', 52],
  [29, 'lamentations', 'Lamentations', 5],
  [30, 'baruch', 'Baruch', 6],
  [31, 'ezechiel', 'Ezechiel (Ezekiel)', 48],
  [32, 'daniel', 'Daniel', 14],
  [33, 'osee', 'Osee (Hosea)', 14],
  [34, 'joel', 'Joel', 3],
  [35, 'amos', 'Amos', 9],
  [36, 'abdias', 'Abdias (Obadiah)', 1],
  [37, 'jonas', 'Jonas (Jonah)', 4],
  [38, 'micheas', 'Micheas (Micah)', 7],
  [39, 'nahum', 'Nahum', 3],
  [40, 'habacuc', 'Habacuc (Habakkuk)', 3],
  [41, 'sophonias', 'Sophonias (Zephaniah)', 3],
  [42, 'aggeus', 'Aggeus (Haggai)', 2],
  [43, 'zacharias', 'Zacharias (Zechariah)', 14],
  [44, 'malachias', 'Malachias (Malachi)', 4],
  [45, '1-machabees', '1 Machabees (1 Maccabees)', 16],
  [46, '2-machabees', '2 Machabees (2 Maccabees)', 15],
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Bible text fetch)' } }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function parseChapter(html, bookNum, chapterNum) {
  // Extract verses from the HTML
  // Pattern: <a class=vn href="..."> NN </a>Text of verse
  const verses = [];

  // Split by verse anchor tags
  const parts = html.split(/<a class=vn[^>]*>/);

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    // Extract verse number - may contain &nbsp; entities
    const vnMatch = part.match(/^(?:&nbsp;|\s)*(\d+)(?:&nbsp;|\s)*<\/a>([\s\S]*?)(?=$)/);
    if (vnMatch) {
      const verseNum = parseInt(vnMatch[1]);
      let text = vnMatch[2];

      // Clean HTML tags but keep the text
      text = text
        .replace(/<p class=note>[\s\S]*?<\/p>/g, '') // Remove notes
        .replace(/<p[^>]*>/g, '') // Remove <p> tags
        .replace(/<\/p>/g, '')
        .replace(/<br\s*\/?>/g, ' ')
        .replace(/<\/?u>/g, '')
        .replace(/<\/?i>/g, '*')
        .replace(/<\/?b>/g, '')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')
        .trim();

      if (text) {
        verses.push({ num: verseNum, text });
      }
    }
  }

  return verses;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchBook(bookNum, slug, displayName, chapterCount) {
  const filePath = path.join(BIBLE_DIR, `${slug}.md`);

  // Check if already done
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Check if it has the last chapter
    if (content.includes(`## Chapter ${chapterCount}`)) {
      console.log(`  SKIP ${displayName} (already complete)`);
      return true;
    }
  }

  let md = `# ${displayName}\n`;
  let totalVerses = 0;

  for (let ch = 1; ch <= chapterCount; ch++) {
    const paddedBook = String(bookNum).padStart(2, '0');
    const paddedChapter = String(ch).padStart(3, '0');
    const url = `https://www.drbo.org/chapter/${paddedBook}${paddedChapter}.htm`;

    try {
      const html = await fetch(url);
      const verses = parseChapter(html, bookNum, ch);

      if (verses.length === 0) {
        console.error(`  WARNING: No verses found for ${displayName} ch ${ch}`);
      }

      md += `\n## Chapter ${ch}\n\n`;
      for (const v of verses) {
        md += `**${ch}:${v.num}** ${v.text}\n\n`;
        totalVerses++;
      }

      if (ch % 10 === 0) {
        process.stdout.write(`  ${displayName}: ${ch}/${chapterCount} chapters...\r`);
      }

      await sleep(DELAY_MS);
    } catch (err) {
      console.error(`  ERROR: ${displayName} ch ${ch}: ${err.message}`);
      // Save what we have so far
      fs.writeFileSync(filePath, md);
      return false;
    }
  }

  fs.writeFileSync(filePath, md);
  console.log(`  DONE ${displayName}: ${chapterCount} chapters, ${totalVerses} verses`);
  return true;
}

async function main() {
  fs.mkdirSync(BIBLE_DIR, { recursive: true });

  // Allow resuming from a specific book
  const startFrom = process.argv[2] || null;
  let started = !startFrom;

  console.log(`Fetching Douay-Rheims Bible from drbo.org...`);
  console.log(`Output: ${BIBLE_DIR}`);
  console.log(`Books: ${BOOKS.length}\n`);

  let completed = 0;
  let failed = 0;

  for (const [bookNum, slug, displayName, chapters] of BOOKS) {
    if (!started) {
      if (slug === startFrom) started = true;
      else continue;
    }

    const success = await fetchBook(bookNum, slug, displayName, chapters);
    if (success) completed++;
    else failed++;
  }

  console.log(`\nComplete: ${completed} books, ${failed} failures`);
}

main().catch(console.error);
