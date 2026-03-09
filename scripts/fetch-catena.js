#!/usr/bin/env node
/**
 * Fetch the complete Catena Aurea from ecatholic2000.com
 * and save as markdown files.
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'catena');

// URL mappings from the ecatholic2000 index page
const GOSPELS = {
  matthew: {
    title: 'Gospel of Matthew',
    chapters: 28,
    // untitled-08 through untitled-35
    startPage: 8,
  },
  mark: {
    title: 'Gospel of Mark',
    chapters: 16,
    // untitled-41 through untitled-56
    startPage: 41,
  },
  luke: {
    title: 'Gospel of Luke',
    chapters: 24,
    // untitled-62 through untitled-85
    startPage: 62,
  },
  john: {
    title: 'Gospel of John',
    chapters: 21,
    // untitled-89 through untitled-109
    startPage: 89,
  },
};

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const makeRequest = (reqUrl, redirectCount = 0) => {
      if (redirectCount > 5) return reject(new Error('Too many redirects'));
      const c = reqUrl.startsWith('https') ? https : http;
      c.get(reqUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let loc = res.headers.location;
          if (loc.startsWith('/')) {
            const u = new URL(reqUrl);
            loc = `${u.protocol}//${u.host}${loc}`;
          }
          return makeRequest(loc, redirectCount + 1);
        }
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${reqUrl}`));
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
        res.on('error', reject);
      }).on('error', reject);
    };
    makeRequest(url);
  });
}

function htmlToMarkdown(html) {
  // Extract the main content area
  // Content is between the catena_nav div and the end
  let content = html;

  // Try to extract just the main content
  const mainStart = content.indexOf('<div class="catena_nav">');
  if (mainStart !== -1) {
    content = content.substring(mainStart);
  }

  // Remove the nav div itself
  content = content.replace(/<div class="catena_nav">.*?<\/div>/gs, '');

  // Remove script tags
  content = content.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Remove style tags
  content = content.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Convert h2 to ## (chapter headers)
  content = content.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (match, inner) => {
    const text = stripTags(inner).trim();
    return `\n## ${text}\n`;
  });

  // Convert h3 to ### (verse headers)
  content = content.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (match, inner) => {
    const text = stripTags(inner).trim();
    return `\n### ${text}\n`;
  });

  // Convert <strong> to **bold**
  content = content.replace(/<strong>([\s\S]*?)<\/strong>/gi, (match, inner) => {
    const text = inner.trim();
    if (!text) return '';
    return `**${text}**`;
  });

  // Convert <em> and <i> to *italic*
  content = content.replace(/<em>([\s\S]*?)<\/em>/gi, (match, inner) => `*${inner.trim()}*`);
  content = content.replace(/<i>([\s\S]*?)<\/i>/gi, (match, inner) => `*${inner.trim()}*`);

  // Handle paragraphs - extract text and add double newline
  content = content.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (match, inner) => {
    const text = stripTags(inner).trim();
    if (!text) return '';
    return text + '\n\n';
  });

  // Remove remaining HTML tags
  content = stripTags(content);

  // Decode HTML entities
  content = decodeEntities(content);

  // Clean up whitespace
  content = content.replace(/\n{3,}/g, '\n\n');
  content = content.trim();

  return content;
}

function stripTags(html) {
  // Replace <br> with newline
  let text = html.replace(/<br\s*\/?>/gi, '\n');
  // Replace block elements with newlines
  text = text.replace(/<\/?(div|table|tr|td|tbody|thead)[^>]*>/gi, '\n');
  // Remove all remaining tags but preserve bold/italic markers we already converted
  text = text.replace(/<[^>]+>/g, '');
  return text;
}

function decodeEntities(text) {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
    '&mdash;': '—',
    '&ndash;': '–',
    '&lsquo;': '\u2018',
    '&rsquo;': '\u2019',
    '&ldquo;': '\u201C',
    '&rdquo;': '\u201D',
    '&hellip;': '…',
    '&eacute;': 'e',
    '&aelig;': 'ae',
    '&oelig;': 'oe',
    '&aacute;': 'a',
    '&oacute;': 'o',
    '&uacute;': 'u',
    '&icirc;': 'i',
    '&egrave;': 'e',
    '&agrave;': 'a',
    '&ccedil;': 'c',
    '&sect;': '§',
    '&dagger;': '†',
  };

  let result = text;
  for (const [entity, replacement] of Object.entries(entities)) {
    result = result.split(entity).join(replacement);
  }

  // Handle numeric entities
  result = result.replace(/&#(\d+);/g, (match, num) => String.fromCharCode(parseInt(num)));
  result = result.replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));

  return result;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchGospel(name, config) {
  const { title, chapters, startPage } = config;
  let markdown = `# Catena Aurea — ${title}\n\n`;

  for (let ch = 0; ch < chapters; ch++) {
    const pageNum = startPage + ch;
    const url = `http://www.ecatholic2000.com/catena/untitled-${pageNum}.shtml`;
    const chapterNum = ch + 1;

    process.stdout.write(`  Fetching ${name} chapter ${chapterNum}/${chapters} (page ${pageNum})...`);

    try {
      const html = await fetchPage(url);
      const content = htmlToMarkdown(html);

      // Check if chapter header is already in the content
      if (!content.includes(`## CHAP. ${chapterNum}`) && !content.includes(`## Chapter ${chapterNum}`)) {
        markdown += `\n## Chapter ${chapterNum}\n\n`;
      }

      markdown += content + '\n\n';
      console.log(' done');
    } catch (err) {
      console.log(` ERROR: ${err.message}`);
      markdown += `\n## Chapter ${chapterNum}\n\n[Error fetching this chapter: ${err.message}]\n\n`;
    }

    // Be polite to the server
    await sleep(500);
  }

  return markdown;
}

async function main() {
  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const [name, config] of Object.entries(GOSPELS)) {
    console.log(`\nFetching ${config.title}...`);
    const markdown = await fetchGospel(name, config);

    const outPath = path.join(OUTPUT_DIR, `${name}.md`);
    fs.writeFileSync(outPath, markdown, 'utf-8');

    const size = (Buffer.byteLength(markdown) / 1024 / 1024).toFixed(2);
    console.log(`  Saved ${outPath} (${size} MB)`);
  }

  console.log('\nDone!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
