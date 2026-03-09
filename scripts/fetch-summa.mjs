#!/usr/bin/env node
// Fetch Summa Theologica Tertia Pars + Supplement from New Advent
// and convert to clean markdown

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const BASE = '/Users/scones/projects/veritas/public/summa';
const CONCURRENCY = 5;
const DELAY = 500;

mkdirSync(join(BASE, 'III'), { recursive: true });
mkdirSync(join(BASE, 'supplement'), { recursive: true });

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function decodeEntities(text) {
  return text
    .replace(/&#8212;/g, '---')
    .replace(/&#8211;/g, '--')
    .replace(/&#8230;/g, '...')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8221;/g, '"')
    .replace(/&#8220;/g, '"')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&mdash;/gi, '---')
    .replace(/&ndash;/gi, '--')
    .replace(/&hellip;/gi, '...')
    .replace(/&rsquo;/gi, "'")
    .replace(/&lsquo;/gi, "'")
    .replace(/&rdquo;/gi, '"')
    .replace(/&ldquo;/gi, '"')
    .replace(/&eacute;/gi, 'e')
    .replace(/&aelig;/gi, 'ae')
    .replace(/&oelig;/gi, 'oe')
    .replace(/&auml;/gi, 'a')
    .replace(/&ouml;/gi, 'o')
    .replace(/&uuml;/gi, 'u')
    .replace(/&#\d+;/g, '');
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, '');
}

function htmlToMarkdown(html, questionNum) {
  // Extract the question title from <h1>
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  let questionTitle = 'Untitled';
  if (h1Match) {
    let raw = stripTags(h1Match[1]).trim();
    raw = decodeEntities(raw);
    // Remove "Question N. " prefix
    raw = raw.replace(/^Question\s+\d+\.\s*/i, '');
    questionTitle = raw;
  }

  // Extract the content div (id="springfield2")
  let content = html;
  const contentMatch = html.match(/<div\s+id="springfield2">([\s\S]*?)(?:<div\s+id=|<\/body>)/i);
  if (contentMatch) {
    content = contentMatch[1];
  }

  // Remove ad divs
  content = content.replace(/<div[^>]*class=['"]catholicadnet[^"']*['"][^>]*>[\s\S]*?<\/div>/gi, '');
  // Remove the <ol> table of contents
  content = content.replace(/<ol>[\s\S]*?<\/ol>/gi, '');

  let result = `# Question ${questionNum}: ${questionTitle}\n\n`;

  // Process article by article using <h2>
  const articleSplits = content.split(/<h2[^>]*>/i);

  for (let i = 1; i < articleSplits.length; i++) {
    const articleBlock = articleSplits[i];

    // Extract article title from the h2 content
    const h2End = articleBlock.indexOf('</h2>');
    let articleTitleRaw = h2End >= 0 ? articleBlock.substring(0, h2End) : '';
    articleTitleRaw = stripTags(articleTitleRaw).trim();
    articleTitleRaw = decodeEntities(articleTitleRaw);
    // Remove "Article N. " prefix
    const artNumMatch = articleTitleRaw.match(/^Article\s+(\d+)\.\s*(.*)/i);
    const artNum = artNumMatch ? artNumMatch[1] : i;
    const artTitle = artNumMatch ? artNumMatch[2] : articleTitleRaw;

    result += `## Article ${artNum}: ${artTitle}\n\n`;

    // Get article body (after </h2>)
    const articleBody = h2End >= 0 ? articleBlock.substring(h2End + 5) : articleBlock;

    // Split into paragraphs by <p> tags
    const paragraphs = articleBody.split(/<p[^>]*>/i);

    for (let j = 1; j < paragraphs.length; j++) {
      let para = paragraphs[j];
      // Cut at </p>
      const pEnd = para.indexOf('</p>');
      if (pEnd >= 0) para = para.substring(0, pEnd);

      // Convert <strong>/<b> and <em>/<i>
      para = para.replace(/<strong>/gi, '**');
      para = para.replace(/<\/strong>/gi, '**');
      para = para.replace(/<b>/gi, '**');
      para = para.replace(/<\/b>/gi, '**');
      para = para.replace(/<em>/gi, '*');
      para = para.replace(/<\/em>/gi, '*');
      para = para.replace(/<i>/gi, '*');
      para = para.replace(/<\/i>/gi, '*');
      para = para.replace(/<br\s*\/?>/gi, '\n');

      // Strip remaining tags
      para = stripTags(para);
      para = decodeEntities(para);
      para = para.replace(/\s+/g, ' ').trim();

      if (!para) continue;

      // Detect section headings
      const objMatch = para.match(/^\*\*Objection\s+(\d+)\.\*\*\s*(.*)/i);
      if (objMatch) {
        result += `### Objection ${objMatch[1]}\n\n${objMatch[2]}\n\n`;
        continue;
      }

      const contraryMatch = para.match(/^\*\*On the contrary,\*\*\s*(.*)/i);
      if (contraryMatch) {
        result += `### On the Contrary\n\n${contraryMatch[1]}\n\n`;
        continue;
      }

      const answerMatch = para.match(/^\*\*I answer that,\*\*\s*(.*)/i);
      if (answerMatch) {
        result += `### I Answer That\n\n${answerMatch[1]}\n\n`;
        continue;
      }

      const replyMatch = para.match(/^\*\*Reply to Objection\s+(\d+)\.\*\*\s*(.*)/i);
      if (replyMatch) {
        result += `### Reply to Objection ${replyMatch[1]}\n\n${replyMatch[2]}\n\n`;
        continue;
      }

      // Check for "Whether..." preamble that's just the article intro, skip
      // Regular paragraph
      result += para + '\n\n';
    }
  }

  // Clean up
  result = result.replace(/\n{3,}/g, '\n\n');
  return result.trim() + '\n';
}

async function fetchQuestion(partCode, questionNum) {
  const paddedNum = String(questionNum).padStart(3, '0');
  const url = `https://www.newadvent.org/summa/${partCode}${paddedNum}.htm`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });

    if (!res.ok) {
      console.error(`  SKIP ${url} - HTTP ${res.status}`);
      return null;
    }

    const html = await res.text();
    const part = partCode === '4' ? 'III' : 'supplement';
    const md = htmlToMarkdown(html, questionNum);

    const outDir = join(BASE, part);
    const outFile = join(outDir, `q${questionNum}.md`);
    writeFileSync(outFile, md);
    console.log(`  OK q${questionNum}`);
    return true;
  } catch (err) {
    console.error(`  FAIL ${url}: ${err.message}`);
    return null;
  }
}

async function processBatch(partCode, questions) {
  const label = partCode === '4' ? 'Tertia Pars' : 'Supplement';
  console.log(`\nFetching ${label} (${questions.length} questions)...`);

  for (let i = 0; i < questions.length; i += CONCURRENCY) {
    const batch = questions.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(q => fetchQuestion(partCode, q)));
    if (i + CONCURRENCY < questions.length) {
      await sleep(DELAY);
    }
  }
}

async function main() {
  const tertia = Array.from({ length: 90 }, (_, i) => i + 1);
  const supplement = Array.from({ length: 99 }, (_, i) => i + 1);

  await processBatch('4', tertia);
  await processBatch('5', supplement);

  console.log('\nDone!');
}

main().catch(console.error);
