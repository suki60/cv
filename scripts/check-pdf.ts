// Extracts the CV PDF text the way many ATS parsers do (pdf.js, content
// stream order, a space between text runs), prints it, and fails if any key
// term comes out split, e.g. "py t hon" instead of "python".
import { readFile } from 'node:fs/promises';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const PDF_FILE = new URL('../public/francesc-altes-cv.pdf', import.meta.url)
  .pathname;

const TERMS = [
  'francesc altes',
  'senior software engineer',
  'gartner',
  'python',
  'react',
  'next.js',
  'tailwind',
  'vitest',
  'playwright',
  'postgres',
  'github actions',
  'server components',
];

// Each job must read title → dates → company → first bullet, and jobs in CV
// order, so an agent can tell which parts belong together.
const JOBS = [
  [
    'sabbatical year',
    '2026',
    'independent / barcelona & japan',
    'built offwik',
  ],
  [
    'senior software engineer',
    '2024 - 2025',
    'gartner / barcelona',
    'architected and led',
  ],
  [
    'software engineer',
    '2022 - 2024',
    'gartner / barcelona',
    'led the rollout',
  ],
  [
    'junior software engineer',
    '2018 - 2022',
    'gartner / barcelona',
    'built and managed',
  ],
  [
    'trainee software engineer',
    '2018',
    'gartner / barcelona',
    'completed 6 months',
  ],
  ['mechanical engineer', '2017', 'demola project / tampere', 'designed a'],
];

const data = new Uint8Array(await readFile(PDF_FILE));
const pdf = await getDocument({ data }).promise;
let text = '';

for (let i = 1; i <= pdf.numPages; i++) {
  const page = await pdf.getPage(i);
  const { items } = await page.getTextContent();

  for (const item of items) {
    if (!('str' in item)) continue;
    text += item.str + (item.hasEOL ? '\n' : ' ');
  }
}

console.log(text);
console.log('─'.repeat(60));

const flat = text.toLowerCase().replace(/\s+/g, ' ');
const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// The term with optional spaces between letters: catches the broken copies.
const loose = (term: string) =>
  new RegExp([...term].map(escapeRegex).join(' ?'), 'g');

let failed = false;

for (const term of TERMS) {
  const matches = [...flat.matchAll(loose(term))].map((m) => m[0]);
  const broken = matches.filter((m) => m !== term);

  if (matches.length === 0) {
    console.log(`✗ ${term}  (not found)`);
    failed = true;
  } else if (broken.length > 0) {
    console.log(`✗ ${term}  → ${broken.map((b) => `"${b}"`).join(', ')}`);
    failed = true;
  } else {
    console.log(`✓ ${term}  ×${matches.length}`);
  }
}

// Parsers take the first line as the candidate's name.
if (flat.trimStart().startsWith('francesc altes')) {
  console.log('✓ order: name first');
} else {
  console.log(`✗ order: text starts with "${flat.trimStart().slice(0, 30)}"`);
  failed = true;
}

let cursor = 0;
let previous = 'start of text';
let orderBroken = false;

for (const job of JOBS) {
  if (orderBroken) break;

  for (const part of job) {
    const at = flat.indexOf(part, cursor);

    if (at === -1) {
      console.log(`✗ order: "${part}" not found after "${previous}"`);
      orderBroken = true;
      break;
    }

    cursor = at + part.length;
    previous = part;
  }

  if (!orderBroken) console.log(`✓ order: ${job[0]}`);
}

if (failed || orderBroken) process.exitCode = 1;
