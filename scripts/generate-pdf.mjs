// Renders the CV page with a real headless browser and exports it as a
// single-page A4 PDF. Mobile print engines (iOS Safari/Chrome) turned out to
// be too inconsistent across `transform`, `zoom`, and margin handling to get
// a reliable print-to-PDF from the client, and Vercel's build image is
// missing the shared libs headless Chromium needs, so this isn't wired into
// `npm run build` — run it manually (`npm run generate-pdf`) whenever the CV
// content changes and commit the result in public/, like any other asset.
import { spawn, spawnSync } from 'node:child_process';
import { chromium } from 'playwright';

const PORT = 4173;
const BASE = '/cv/';
const OUT_FILE = new URL('../public/francesc-altes-cv.pdf', import.meta.url).pathname;

function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryFetch = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        // server not up yet
      }
      if (Date.now() - start > timeoutMs) {
        return reject(new Error(`Timed out waiting for ${url}`));
      }
      setTimeout(tryFetch, 200);
    };
    tryFetch();
  });
}

const build = spawnSync('npx', ['vite', 'build'], { stdio: 'inherit' });
if (build.status !== 0) process.exit(build.status ?? 1);

const preview = spawn(
  'npx',
  ['vite', 'preview', '--port', String(PORT), '--strictPort'],
  { stdio: 'inherit' },
);

try {
  const url = `http://localhost:${PORT}${BASE}`;
  await waitForServer(url);

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.pdf({
    path: OUT_FILE,
    // Explicit mm width/height instead of `format: 'A4'`: Playwright's
    // built-in A4 constant is a hair larger than true A4, which leaves a
    // sub-mm gap against the card's CSS (sized to exact 210mm/297mm).
    width: '210mm',
    height: '297mm',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  await browser.close();

  console.log(`✓ wrote ${OUT_FILE}`);
  console.log('  commit public/francesc-altes-cv.pdf and rerun `npm run build`');
} finally {
  preview.kill();
}
