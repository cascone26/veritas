const https = require('https');
const fs = require('fs');
const path = require('path');

const DIR = '/Users/scones/projects/veritas/public/summa/II-II';

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

function stripTags(html) {
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').trim();
}

async function main() {
  for (let i = 91; i <= 189; i++) {
    const padded = String(i).padStart(3, '0');
    const url = `https://www.newadvent.org/summa/3${padded}.htm`;

    try {
      const html = await fetchPage(url);

      // The title is in <TITLE> tag: "SUMMA THEOLOGIAE: Title (Secunda Secundae Partis, Q. N)"
      const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
      let title = '';
      if (titleMatch) {
        const raw = stripTags(titleMatch[1]);
        // Extract: "SUMMA THEOLOGIAE: The Title Text (Secunda..."
        const m = raw.match(/SUMMA THEOLOGIAE:\s*(.*?)\s*\(Secunda/i) ||
                  raw.match(/SUMMA THEOLOGIAE:\s*(.*?)\s*\(/i);
        if (m) {
          title = m[1].trim();
          // Remove trailing period or dash
          title = title.replace(/[\.\-\s]+$/, '');
        }
      }

      if (!title) {
        console.log(`SKIP q${i} - no title found in <title>`);
        continue;
      }

      const file = path.join(DIR, `q${i}.md`);
      if (!fs.existsSync(file)) {
        console.log(`SKIP q${i} - file doesn't exist`);
        continue;
      }

      let content = fs.readFileSync(file, 'utf8');

      // Replace the first heading line
      content = content.replace(/^# Question \d+:.*$/m, `# Question ${i}: ${title}`);

      // Also remove any remaining nav cruft lines near the top
      const lines = content.split('\n');
      const cleaned = lines.filter(line => {
        if (line.match(/^Question\s+\d+\.\s/)) return false;
        if (line.match(/Submit Search/)) return false;
        if (line.match(/Home > Summa/)) return false;
        if (line.match(/^A B C D E F/)) return false;
        if (line.match(/SEARCH Encyclopedia/)) return false;
        if (line.match(/^Search:/)) return false;
        return true;
      });

      content = cleaned.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';

      fs.writeFileSync(file, content);
      console.log(`OK   q${i}: "${title}"`);
    } catch (err) {
      console.log(`FAIL q${i}: ${err.message}`);
    }

    // Small delay
    if (i % 20 === 0) await new Promise(r => setTimeout(r, 300));
  }
}

main();
