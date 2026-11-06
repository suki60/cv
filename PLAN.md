# CV PDF fix plan

Goal: optimise the CV for agents (ATS and LLM screeners) while keeping it
appealing to human readers. The PDF sent to companies must parse cleanly in
the text extractors those pipelines use (pdf.js, pdfminer, PyMuPDF, pypdf)
and still look the same to a recruiter.
Every step ends with `npm run generate-pdf` + the check script from step 1.

## Phase 1 — Make the text layer readable ✅

Done 2026-11-06. Inter text only splits in macOS PDFKit (`py|t|hon`,
`francesc alt|es`). pdf.js, pdfminer, PyMuPDF and pypdf, the extractors agent
pipelines use, all extract every word whole, so no font fix is needed.

- [x] 1. Add `scripts/check-pdf.ts`: extract the PDF text with `pdfjs-dist`
      (stream order), print it, fail if a key term is split, and check each
      job reads title → dates → company → first bullet, in CV order.
- [x] 2–4. Skipped: kerning/ligature CSS, static Inter, body font swap. Not
      needed for agent extractors.

## Phase 2 — Reading order

- [ ] 5. In `src/App.jsx`, put `<main>` before `<aside>` in the DOM and keep the
      sidebar on the left with `flex-row-reverse` (or `order-first`), so the
      text layer starts with name, title, profile, experience.
- [ ] 6. Check the visual layout is unchanged (web + PDF).

## Phase 3 — Contact block (`src/data.jsx`)

- [ ] 7. `francesc-altes` → `linkedin.com/in/francesc-altes`
- [ ] 8. `suki60` → `github.com/suki60`
- [ ] 9. `barcelona` → `barcelona, spain`
- [ ] 10. Website: write it as a full domain or URL (`fran-altes.com` is fine;
      optionally add the `https://` prefix).

## Phase 4 — Keywords (`src/data.jsx` skills)

- [ ] 11. `js, ts` → `javascript, typescript`
- [ ] 12. `node` → `node.js`
- [ ] 13. `router v7` → `react router v7`
- [ ] 14. Add missing common terms: `html`, `css`, `ssr`, `web performance /
      core web vitals`, `accessibility`, `rest`, `llm`, `microfrontends`,
      `webgpu`. Keep the sidebar fitting on one page.

## Phase 5 — Content

- [ ] 15. Latest role: `sabbatical year / independent` → e.g.
      `ai engineer (independent)` with offwik first; keep the learning paths
      and the japan bullet below.
- [ ] 16. Profile: open with a keyword line, e.g. "senior frontend /
      full-stack engineer, 7+ yrs with react, next.js, typescript; now building
      llm agents (rag, mcp, evals)", then the personal part.
- [ ] 17. Metrics: replace "drastic performance and conversion gains" with real
      numbers (conversion %, lcp ms); add scale to the app router migration
      and the monorepo bullets (pages, apps, build/deploy time).
- [ ] 18. "first official frontend engineer at the company" → "at getapp".

## Phase 6 — Capitalization (optional, decide together)

- [ ] 19. Use normal casing in `src/data.jsx` (Francesc Altes, Gartner, React,
      Next.js, AWS) so parsers detect names, companies and titles. Remove the
      `lowercase` classes in `App.jsx` or keep them for the web look only.

## Phase 7 — Final check

- [ ] 20. `npm run generate-pdf`, run the check script: all terms whole, name
      first, no sidebar text inside a job.
- [ ] 21. Manual check: open the PDF in Preview, ⌘A ⌘C, paste into a text
      editor, read it top to bottom.
- [ ] 22. Visual check: one A4 page, nothing cut off.
- [ ] 23. Commit `src/`, `scripts/` and `public/francesc-altes-cv.pdf`.
