const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = '/Users/scones/projects/veritas/public/summa/II-II';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&lsquo;/g, '\u2018')
    .replace(/&rsquo;/g, '\u2019')
    .replace(/&ldquo;/g, '\u201C')
    .replace(/&rdquo;/g, '\u201D')
    .replace(/&hellip;/g, '...')
    .replace(/&eacute;/g, 'e')
    .replace(/&#\d+;/g, (m) => {
      const code = parseInt(m.slice(2, -1));
      return String.fromCharCode(code);
    });
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, '')).trim();
}

function parseQuestion(html) {
  // Get the title - look for the main heading
  let title = '';

  // Try to find the question title from the page
  // New Advent uses <H2> or <h2> or sometimes <FONT> for the title
  let titleMatch = html.match(/<b>([^<]*QUESTION[^<]*)<\/b>/i) ||
                   html.match(/<B>([^<]*QUESTION[^<]*)<\/B>/i);

  if (!titleMatch) {
    // Try another pattern - sometimes it's in an h2 or similar
    titleMatch = html.match(/<h2[^>]*>([^<]*)<\/h2>/i);
  }

  // Extract question number and title text
  let questionNum = '';
  let questionTitle = '';

  if (titleMatch) {
    const raw = stripTags(titleMatch[1]);
    const numMatch = raw.match(/QUESTION\s+(\d+)/i);
    if (numMatch) questionNum = numMatch[1];
    // Title is usually on the next line or after a break
  }

  // Better approach: find the title after "QUESTION N" text
  // The structure is typically: QUESTION N (heading) then the topic in parens or separate line
  const fullText = stripTags(html);

  // Find question number from URL context - we'll pass it in
  // For now, find the title block
  let titleBlock = html.match(/QUESTION\s+(\d+)\s*[\.\-\:]*\s*(.*?)(?:<\/(?:b|B|h\d|H\d|FONT|font)>)/si);
  if (!titleBlock) {
    titleBlock = html.match(/QUESTION\s+(\d+)/i);
  }

  // Extract all content between <p> or text blocks
  // New Advent has a specific structure - let's parse more carefully

  // Get everything in the body
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) return null;

  const body = bodyMatch[1];

  // Split into paragraphs/sections
  // The structure uses <P> tags and <B> for headers like "Article 1", "Objection 1", etc.
  // Also uses <A NAME="..."> anchors

  let md = '';

  // Find question title - usually in a centered/bold block near the top
  const qMatch = body.match(/QUESTION\s+(\d+)/i);
  if (qMatch) questionNum = qMatch[1];

  // Find the subtitle/topic - usually follows the QUESTION N heading
  // Look for text between the question heading and the first article
  const afterQuestion = body.split(/QUESTION\s+\d+/i)[1];
  if (afterQuestion) {
    const beforeArticle = afterQuestion.split(/Article\s+1/i)[0];
    if (beforeArticle) {
      // Extract meaningful title text
      const titleText = stripTags(beforeArticle)
        .replace(/\s+/g, ' ')
        .trim()
        .split('\n')[0]
        .trim();
      // Clean up - remove leading/trailing punctuation
      questionTitle = titleText
        .replace(/^[\s\.\-\:\(\)]+/, '')
        .replace(/[\s\.\-\:\(\)]+$/, '')
        .trim();
      // Take first meaningful line
      if (questionTitle.length > 200) {
        questionTitle = questionTitle.substring(0, 200);
      }
    }
  }

  // Now parse articles
  // Split by article markers
  const articlePattern = /<A\s+NAME="\d+"[^>]*>/gi;

  // Better: parse line by line looking for structure markers
  // Key markers in bold: "Article N", "Objection N", "On the contrary", "I answer that", "Reply to Objection N"

  // Extract all text blocks with their formatting
  const blocks = [];
  // Split on <P> or <p> tags
  const parts = body.split(/<\/?[Pp](?:\s[^>]*)?\s*>/);

  for (const part of parts) {
    const text = stripTags(part).replace(/\s+/g, ' ').trim();
    if (!text) continue;

    // Check if this contains a structural marker
    const hasBold = /<[Bb]>/.test(part);
    blocks.push({ text, hasBold, raw: part });
  }

  // Build markdown from blocks
  md = `# Question ${questionNum}: ${questionTitle}\n\n`;

  for (const block of blocks) {
    const t = block.text;

    // Skip navigation and header cruft
    if (t.match(/^(HOME|ENCYCLOPEDIAS|ENCYCLOPAEDIA|ENCYCLOP|ENCYCLOPED|New Advent|ENCYCLOP)/i)) continue;
    if (t.match(/^(Kevin Knight|Copyright|Dedicated|ENCYCLOP|New Advent|HOME)/i)) continue;
    if (t.match(/ENCYCLOPEDIAS|ENCYCLOPAEDIA|Encyclopedias/)) continue;
    if (t.match(/^(Encyclopedias|HOME|Index|ENCYCLOP)/i)) continue;
    if (t.match(/ENCYCLOPEDIAS/)) continue;
    if (t.match(/^ENCYCLOP/i)) continue;
    if (t.match(/ENCYCLOPEDIA/i) && t.length < 100) continue;
    if (t.match(/New Advent/i) && t.length < 50) continue;
    if (t.match(/Kevin Knight/i)) continue;
    if (t.match(/ENCYCLOPEDIAS|ENCYCLOPAEDIA|Encyclopedias|HOME \| ENCYCLOPEDIAS/i)) continue;
    if (t.match(/^HOME/)) continue;
    if (t.match(/QUESTION\s+\d+/i) && t.length < 80) continue;
    if (t === questionTitle) continue;

    // Check for structural headings
    if (t.match(/^Article\s+(\d+)\.\s*(.*)/i)) {
      const m = t.match(/^Article\s+(\d+)\.\s*(.*)/i);
      md += `\n## Article ${m[1]}: ${m[2]}\n\n`;
    } else if (t.match(/^Whether\s/i) && blocks.indexOf(block) > 0) {
      // This is an article title that comes after "Article N"
      // Check if previous was an article header
      const lastLine = md.trimEnd().split('\n').pop();
      if (lastLine && lastLine.startsWith('## Article')) {
        // Append to article header
        md = md.trimEnd() + ' ' + t + '\n\n';
      } else {
        md += t + '\n\n';
      }
    } else if (t.match(/^Objection\s+(\d+)\.\s*/i)) {
      const m = t.match(/^Objection\s+(\d+)\.\s*([\s\S]*)/i);
      md += `### Objection ${m[1]}\n\n${m[2]}\n\n`;
    } else if (t.match(/^On the contrary/i)) {
      const content = t.replace(/^On the contrary[,\s]*/i, '').trim();
      md += `### On the Contrary\n\n${content}\n\n`;
    } else if (t.match(/^I answer that/i)) {
      const content = t.replace(/^I answer that[,\s]*/i, '').trim();
      md += `### I Answer That\n\n${content}\n\n`;
    } else if (t.match(/^Reply to Objection\s+(\d+)\.\s*/i)) {
      const m = t.match(/^Reply to Objection\s+(\d+)\.\s*([\s\S]*)/i);
      md += `### Reply to Objection ${m[1]}\n\n${m[2]}\n\n`;
    } else {
      // Regular paragraph - append to previous section
      md += t + '\n\n';
    }
  }

  return md.trim() + '\n';
}

async function fetchAndSave(num) {
  const padded = String(num).padStart(3, '0');
  const url = `https://www.newadvent.org/summa/3${padded}.htm`;
  const outFile = path.join(OUTPUT_DIR, `q${num}.md`);

  // Skip if already exists and has content
  if (fs.existsSync(outFile)) {
    const existing = fs.readFileSync(outFile, 'utf8');
    if (existing.length > 500) {
      console.log(`SKIP q${num} (already exists)`);
      return true;
    }
  }

  try {
    const html = await fetchPage(url);
    const md = parseQuestion(html);
    if (md && md.length > 100) {
      fs.writeFileSync(outFile, md);
      console.log(`OK   q${num} (${md.length} chars)`);
      return true;
    } else {
      console.log(`WARN q${num} - parsed content too short`);
      return false;
    }
  } catch (err) {
    console.log(`FAIL q${num}: ${err.message}`);
    return false;
  }
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = { ok: 0, fail: 0, skip: 0 };

  // Process in batches of 10
  for (let start = 91; start <= 189; start += 10) {
    const end = Math.min(start + 9, 189);
    const promises = [];
    for (let i = start; i <= end; i++) {
      promises.push(fetchAndSave(i));
    }
    const batchResults = await Promise.all(promises);
    batchResults.forEach(r => r ? results.ok++ : results.fail++);
    // Small delay between batches
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\nDone: ${results.ok} ok, ${results.fail} failed`);
}

main();
