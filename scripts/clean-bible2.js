#!/usr/bin/env node
// Second pass cleanup - remove all remaining navigation junk
const fs = require('fs');
const path = require('path');

const BIBLE_DIR = path.join(__dirname, '..', 'public', 'bible');
const files = fs.readdirSync(BIBLE_DIR).filter(f => f.endsWith('.md'));

let totalCleaned = 0;

for (const file of files) {
  const filePath = path.join(BIBLE_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Universal approach: on verse lines, cut everything from "next >" or "< prev" backwards
  // to the last sentence-ending punctuation
  const lines = content.split('\n');
  const cleanedLines = lines.map(line => {
    if (!line.startsWith('**')) return line;

    // Check if line has navigation junk
    if (!line.includes('next >') && !line.includes('< prev') && !line.includes('TOP OF PAGE') && !line.includes('sc_project')) {
      return line;
    }

    // Find where the junk starts by looking for " next >" and walking back
    // to find the book/chapter name that precedes it
    // The pattern is always: "...verse text. BookName next > Chapter N next > TOP OF PAGE..."
    // or: "...verse text. BookName < prev Chapter N next > TOP OF PAGE..."

    // Strategy: find "next >" then find the last period/punctuation before the first
    // occurrence of "next >" or "< prev", then cut there

    let idx = line.indexOf(' next >');
    if (idx === -1) idx = line.indexOf('< prev');
    if (idx === -1) idx = line.indexOf('TOP OF PAGE');
    if (idx === -1) return line;

    // Walk backwards from idx to find where nav text starts
    // The nav text starts with the book name, which comes after the last verse punctuation
    const before = line.substring(0, idx);

    // Find the last sentence-ending punctuation followed by a space and capital letter
    // that starts the book name
    let cutAt = -1;
    for (let i = before.length - 1; i >= 0; i--) {
      if ('.?!:;,'.includes(before[i]) && i + 2 < before.length && before[i + 1] === ' ') {
        // Check if what follows looks like a book name (not verse text)
        const rest = before.substring(i + 2);
        // If the rest + "next >" is navigation, cut here
        if (rest.includes('Paralipomenon') || rest.includes('Chronicles') ||
            rest.includes('Ecclesiastes') || rest.includes('Psalm') ||
            /^[0-9A-Z]/.test(rest)) {
          cutAt = i + 1;
          break;
        }
      }
    }

    if (cutAt > -1) {
      return line.substring(0, cutAt).trim();
    }

    // Nuclear option: use regex to strip everything from the book reference onward
    // Match: space + optional number + word chars + optional parens + "next >" or "< prev"
    const cleaned = line.replace(/\s+\d?\s*\w[\w\s()]*(?:next >|< prev)[\s\S]*$/, '');
    if (cleaned !== line) return cleaned.trim();

    return line;
  });

  content = cleanedLines.join('\n');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    totalCleaned++;
    const changedCount = lines.filter((l, i) => l !== cleanedLines[i]).length;
    console.log(`Cleaned ${file}: ${changedCount} lines`);
  }
}

console.log(`\nCleaned ${totalCleaned} files`);
