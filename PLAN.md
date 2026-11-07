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

All four extractors read the PDF stream in paint order: first everything
without `opacity-*`, then everything with it. Job titles come out together,
far from their dates, companies and bullets.

- [x] 5a. In `src/App.jsx`, replace `opacity-*` on text with colour alpha
      (`opacity-85` → `text-ink/85`, etc.) so the look stays the same and the
      text paints in DOM order. Rebuild + check (order checks must pass).
- [x] 5. In `src/App.jsx`, put `<main>` before `<aside>` in the DOM and place
      them with a grid (`col-start-*`), so the text layer starts with name,
      title, profile, experience. `flex-row-reverse` didn't work: Chrome
      paints reversed flex items in visual order.
- [x] 6. Check the visual layout is unchanged: PDF rendered at 150 dpi,
      0 pixels differ from the previous version.

## Phase 3 — Contact block (`src/data.jsx`)

- [x] 7–8. LinkedIn and GitHub keep the short labels (`francesc-altes`,
      `suki60`); the full URL wouldn't fit on one line. Every contact row is
      now a link (`href` in `contact`), so the PDF has clickable link
      annotations with the full URLs. Text-only readers still see the short
      label.
- [x] 9. `barcelona` → `barcelona, spain`
- [x] 10. Website: `fran-altes.com` stays, linked to `https://fran-altes.com`.

## Phase 4 — Keywords (`src/data.jsx` skills)

- [x] 11–14. Skills are now 6 sections × 6, worded the way job ads write
      them: `javascript`, `typescript`, `node.js`, `html/css`, `react router
      v7`, `tailwind css`, `react testing library`, `postgresql`, `rest apis`,
      `ci/cd (github actions)`, `ai agents`, `llm apps`. Dropped `go`,
      `drizzle`, `agent harness`, `claude code`. `webgpu`, `llm` and
      `microfrontends` are already in experience bullets; `ssr`, `core web
      vitals` and `accessibility` move to Phase 5 bullets (only if true).

## Phase 5 — Content

- [x] 15. Latest role: `sabbatical year / independent` → `ai engineer` /
      `independent (sabbatical year)`, so agents read a current role title
      and the japan bullet still makes sense. Offwik stays first.
- [x] 16. Skipped: the profile keeps its original, personal wording. Role,
      years, stack and ai focus are already in the header, job titles, dates,
      skills and bullets; a keyword line cost more voice than it gained.
- [x] 17. No real numbers available, so no metrics. Bullets made specific
      instead: filters "full page reloads → instant spa, improving page speed
      and lead conversion"; app router migration "of capterra.com"; monorepo
      "turborepo, aws → vercel, no per-app deploy pipelines". Add real
      numbers later if found (slack, hackathon slides, datadog, git history).
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
