const fs = require('fs');
const path = require('path');

const DIR = '/Users/scones/projects/veritas/public/summa/II-II';

// Process each file to fix titles and clean nav cruft
for (let i = 91; i <= 189; i++) {
  const file = path.join(DIR, `q${i}.md`);
  if (!fs.existsSync(file)) continue;

  let content = fs.readFileSync(file, 'utf8');

  // Extract the question title from the nav breadcrumb that leaked in
  // Pattern: "Question N. TITLE" in the breadcrumb text
  const navMatch = content.match(/Question\s+\d+\.\s+([A-Z][^\n]*?)(?:\s+Is\s|\s+Whether\s|\s+Article\s|\s+Should\s|\s+Are\s|\s+Does\s|\s+Do\s|\s+May\s|\s+Can\s|\s+Has\s|\s+Of\s)/);

  // Better: look for the pattern "Question NNN. Title" in the first few lines
  const lines = content.split('\n');
  let title = '';

  // Find the breadcrumb line that contains the full question info
  for (const line of lines.slice(0, 10)) {
    // Look for "Question N. Title Is/Whether/Article"
    const m = line.match(/Question\s+\d+[\.\s]+([A-Z][^?]*?)(?:\s+(?:Is|Whether|Article|Should|Are|Does|Do|May|Can|Has)\s)/);
    if (m) {
      title = m[1].trim();
      // Clean trailing "of" or similar
      title = title.replace(/\s+$/, '');
      break;
    }
    // Alternate: the whole breadcrumb has "Question N. Title"
    const m2 = line.match(/Question\s+\d+[\.\s]+((?:[A-Z][\w]*(?:\s+|$)){1,15}?)(?:\s*(?:Is|Whether|Article|Should|Are|Does|Do|May|Can|Has)\b)/);
    if (m2 && !title) {
      title = m2[1].trim();
      break;
    }
  }

  if (!title) {
    // Try another approach - look for text between "Question N" and first list of sub-questions
    for (const line of lines.slice(0, 10)) {
      const m = line.match(/Question\s+\d+\.\s+(.+?)(?:\s+(?:Is|Whether|Article|Should|Are|Does|Do|May|Can|Has)\s)/i);
      if (m) {
        title = m[1].trim();
        break;
      }
    }
  }

  // Fix the first line - replace "# Question N: " with proper title
  content = content.replace(/^# Question \d+:\s*.*$/m, `# Question ${i}: ${title}`);

  // Remove the navigation/breadcrumb cruft line
  content = content.replace(/^Search:.*$/m, '');
  content = content.replace(/^.*Submit Search Home Encyclopedia.*$/m, '');
  content = content.replace(/^.*Home > Summa Theologiae.*$/m, '');

  // Remove any line that's just nav text
  const cleanLines = content.split('\n').filter(line => {
    if (line.match(/^Search:\s/)) return false;
    if (line.match(/Submit Search Home/)) return false;
    if (line.match(/Home > Summa/)) return false;
    if (line.match(/^A B C D E F G H/)) return false;
    if (line.match(/SEARCH Encyclopedia/)) return false;
    return true;
  });

  content = cleanLines.join('\n');

  // Clean up excessive blank lines
  content = content.replace(/\n{4,}/g, '\n\n\n');

  // Remove the sub-question list that appears after the title (e.g., "Is drunkenness a sin? Is it a mortal sin?")
  // These appear on the same line or right after the title
  // They show up as a block of questions before the first Article heading
  const titleLineIdx = content.split('\n').findIndex(l => l.startsWith('# Question'));
  if (titleLineIdx >= 0) {
    const afterTitle = content.split('\n').slice(titleLineIdx + 1);
    const firstArticleIdx = afterTitle.findIndex(l => l.startsWith('## Article') || l.startsWith('### Objection'));
    if (firstArticleIdx > 0) {
      // Check if lines between title and first article are just question summaries
      const betweenLines = afterTitle.slice(0, firstArticleIdx);
      const allQuestions = betweenLines.every(l => {
        const trimmed = l.trim();
        return trimmed === '' ||
               trimmed.match(/^(Is|Whether|Should|Are|Does|Do|May|Can|Has|Of)\s/i) ||
               trimmed.match(/\?$/) ||
               trimmed.match(/^Question\s+\d+/) ||
               trimmed.match(/^Article\s+\d+/);
      });
      if (allQuestions) {
        const before = content.split('\n').slice(0, titleLineIdx + 1);
        const after = afterTitle.slice(firstArticleIdx);
        content = [...before, '', ...after].join('\n');
      }
    }
  }

  // Final cleanup
  content = content.replace(/\n{3,}/g, '\n\n');
  content = content.trim() + '\n';

  fs.writeFileSync(file, content);
  console.log(`Fixed q${i}: "${title}"`);
}
