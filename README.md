# Handoff: Brutalist CV / Resume Page

## Overview
A single-page, print-ready CV (resume) for Francesc Altes, senior software engineer. Brutalist/monospace-accented aesthetic: sharp edges, no rounded corners, offset "shadow" photo treatment, dense two-column layout (sidebar + main content), fixed to A4 page proportions so it can be printed/exported to PDF as one page.

## About the Design Files
The bundled file (`cv-alternatives-v4.dc.html`) is a **design reference built in HTML** — a high-fidelity prototype showing exact layout, type, color, and spacing. It is not production code to copy directly. The task is to **recreate this design in the target codebase's environment** (React, Vue, plain static site, etc.) using its existing patterns and libraries — or, if no environment exists yet, pick the simplest appropriate stack (e.g. a static HTML/CSS page, since this is a one-page personal CV with no interactivity or state) and implement the design there.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Recreate pixel-perfectly.

## Page / Layout

Single page, fixed to **A4 dimensions: 794×1123px** (96dpi equivalent — scale up for print at higher dpi, keeping the same 1:1.414 aspect ratio). White background, 2px solid black (`#0a0a0a`) border around the whole page. `overflow: hidden` — content must not exceed this box.

Two-column flex layout, no gap between columns (aside has its own right border):
- **Sidebar (`aside`)**: fixed width 260px, background `#c3b5fd` (light purple/lavender), 2px solid black right border, padding `36px 24px`.
- **Main column**: flexible width (fills remaining ~534px), padding `36px 32px 28px`.

## Sidebar Contents (top to bottom)

1. **Photo** — 120×120px square photo, centered horizontally, `margin: 0 auto 24px`. Brutalist "offset shadow" effect: a solid black square (`#0a0a0a`, same 120×120 size) positioned 8px down and 8px right behind the photo (`position: absolute; top: 8px; left: 8px`), photo itself has a 3px solid black border and `object-fit: cover`.

2. **[ CONTACT ]** section label (see "Section Labels" below), then 6 contact rows, each: a 13×13px black-stroke SVG icon + text, `display: flex; align-items: center; gap: 8px`, font Space Mono 11px, line-height 1.5, rows stacked with `gap: 8px`, block `margin-bottom: 20px`:
   - envelope icon — `fran.altes@gmail.com`
   - globe icon — `fran-altes.com`
   - LinkedIn glyph (filled) — `francesc-altes`
   - GitHub glyph (filled) — `suki60`
   - map-pin icon — `barcelona`
   - phone icon — `+34 600 000 000`
   (Exact SVG paths are in the source file — copy verbatim.)

3. **[ SKILLS ]** label, then 6 categories, each: category name in Space Mono 9px uppercase, opacity 0.6, then items in Inter 12px, line-height 1.5, comma-separated. `margin-bottom: 10px` per category.
   - languages: typescript, javascript, go, node, graphql, ruby
   - libraries & frameworks: react, next.js, tailwind, react query, zustand, router v7
   - testing & tooling: vitest, playwright, testing library, git, vite, webpack
   - cloud & devops: aws, vercel, ci/cd pipelines, kubernetes, terraform, datadog
   - ai: claude code, llm apis, prompt eng., rag, agents, mcp
   - architecture: system design, scalable web apps, microservices, code review, design patterns, a11y

4. **[ EDUCATION ]** label (`margin: 18px 0 8px`), then 2 entries, each `margin-bottom: 10px`:
   - Title: Inter 700 12px lowercase. Org/time line: Space Mono 9px opacity 0.6 (format `org / time`). Description: Inter 11px opacity 0.75 line-height 1.4, `margin-top: 3px`.
   - "java web developer bootcamp" — ubiqum / 2017 — "intensive full-time program in java, sql and oop fundamentals"
   - "mechanical engineering degree" — eseiaat / 2013 - 2016 — "core engineering, mechanics and product design fundamentals"

5. **[ LANGUAGES ]** label (`margin: 18px 0 8px`), then 4 rows, each `display: flex; justify-content: space-between`, gap 6px between rows: name in Inter 12px, proficiency in Space Mono 9px uppercase opacity 0.55.
   - catalan — native
   - spanish — native
   - english — fluent
   - japanese — basic

### Section Labels (used throughout, both columns)
Format: `[ label text ]` (literal square brackets with spaces), font Space Mono 10px, letter-spacing 0.08em, opacity 0.55, uppercase text-transform.

## Main Column Contents (top to bottom)

1. **Header block** — fixed height 100px, centered content (flex column, center/center, text-align center), `margin-bottom: 20px`:
   - Name "francesc altes": Inter 900 (black weight), 48px, line-height 0.92, letter-spacing -0.03em, lowercase, `margin: 0 0 8px`.
   - Title "senior software engineer": Space Mono 13px, uppercase, letter-spacing 0.06em.

2. **[ PROFILE ]** label (`margin-bottom: 8px`), then one paragraph, Inter 12px, line-height 1.5, `margin: 0 0 16px`:
   > "i have always been a builder at heart, which naturally drew me to study mechanical engineering. 8 years ago, i took my passion for building into the digital realm to become a software engineer. the vibrant tech community and the endless possibilities of software have kept me hooked ever since. today, i'm combining my engineering mindset with the superpowers of ai to push the boundaries of what i can build with code."

3. **[ EXPERIENCE ]** label (`margin-bottom: 2px`), then 6 entries stacked, each entry `padding: 9px 0`, with a `1px solid rgba(10,10,10,0.15)` top border (except the first entry, which has no border). Each entry:
   - Row: role title (Inter 700 13px lowercase) left, time range (Space Mono 10px opacity 0.5) right — `display: flex; justify-content: space-between; align-items: baseline`.
   - Org/location line: Space Mono 10px opacity 0.55, format `org / location`, `margin-bottom: 4px`.
   - Bullet list: each bullet is `display: flex; gap: 7px`, a 4×4px solid black square marker (`margin-top: 5px` to align with text baseline) + bullet text in Inter 11.5px, line-height 1.45, opacity 0.85. `margin-bottom: 2px` between bullets.

   **Entries (in order):**
   1. **sabbatical year — study, build, ride** / self-directed / barcelona / japan / 2026
      - 530+ hours across 14 master.dev learning paths, 12 at 100%: ai engineering, coding with ai, code architecture, cloud & devops, react & next.js, typescript, node.js
      - built projects to put the studies into practice: an ai agent with tool calling, a rag-powered docs assistant and an agentic pr reviewer (claude api / mcp / next.js / aws)
      - crossed all of japan by bicycle — long-route planning and self-reliance, far from help
   2. **senior software engineer** / gartner / barcelona / 2024 - 2025
      - owned vendor portal end-to-end (react router v7 / ts)
      - built partner portal from scratch, cutting release cycle from weeks to days (vercel / github actions / cypress)
      - led app router, server components and actions migrations, improving page load times (next.js)
   3. **software engineer** / gartner / barcelona / 2022 - 2024
      - maintained and scaled capterra.com (next.js / ts)
      - migrated microfrontends into a unified monorepo, cutting build/deploy overhead (aws -> vercel)
      - set up observability integrations, reducing incident detection time (datadog / newrelic)
   4. **associate software engineer** / gartner / barcelona / 2018 - 2022
      - maintained getapp.com (sintra / ruby)
      - migrated getapp frontend from jquery to react, improving maintainability
      - built and managed sem landing pages driving +10m eur/year revenue
   5. **junior software engineer** / gartner / barcelona / 2018
      - completed 6 months of intensive tech training at the company
      - shipped apps to consolidate skills (ruby / mysql / jquery)
      - offered permanent job as 1 of 3 successful candidates (out of 6)
   6. **mechanical engineer** / demola project / tampere / 2017
      - designed a specialized drone capable of taking soil samples
      - modeled structure and internal mechanisms (solidworks)
      - won 2nd place out of 30 projects at demola spring 2017

## Interactions & Behavior
None — this is a static, non-interactive document. No hover/click/loading states. No responsive breakpoints required (it's a fixed-size printable page); if the target app needs the CV viewable on mobile web too, ask before adding a responsive variant rather than assuming one.

## State Management
None. All content is static copy — no data fetching, no dynamic state. If the target app wants this data-driven (e.g. from a CMS or JSON), the shape is straightforward: `profile: string`, `experience: [{role, org, loc, time, bullets: string[]}]`, `skills: [{cat, items: string[]}]`, `education: [{title, org, time, desc}]`, `languages: [{name, level}]`.

## Design Tokens

**Colors**
- Black / ink: `#0a0a0a` (text, borders, icons, bullet markers, shadow offset)
- Sidebar background: `#c3b5fd` (light purple)
- Page background (behind the page, canvas only — not part of the CV itself): `#e9e9e9`
- White: `#ffffff` (page/main background)

**Typography**
- Display/heading font: **Inter** (weights 300, 400, 500, 700, 800, 900 loaded) — `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&family=Space+Mono:wght@400;700&display=swap`
- Monospace/label font: **Space Mono** (weights 400, 700)
- Name: Inter 900, 48px
- Section labels: Space Mono 10px, uppercase, letter-spacing 0.08em, opacity 0.55
- Body/bullets: Inter 11.5–13px
- Meta (org/time/proficiency): Space Mono 9–10px, opacity 0.5–0.6

**Spacing**
- Page: 794×1123px, 2px black border
- Sidebar width: 260px, padding 36px 24px
- Main column padding: 36px 32px 28px
- Section gaps in sidebar: 18px between major sections (education, languages), 8-10px after labels
- Experience entries: 9px vertical padding each, 1px hairline border between (rgba(10,10,10,0.15))

**Borders / shapes**
- No border-radius anywhere — everything is hard-edged (brutalist).
- Photo: 3px solid black border, offset black square shadow (8px right/down).
- Bullet markers: 4×4px solid black squares (not round bullets).

## Assets
- Profile photo: `assets/fa-square.jpg` (120×120px square crop, headshot). Placeholder/personal photo — replace with the real asset path in the target codebase.
- Icons: inline SVGs (envelope, globe, LinkedIn, GitHub, map pin, phone) — paths are in the source file, copy verbatim or swap for an icon library already used in the target codebase (e.g. lucide, heroicons) matched to the same visual weight (1.6px stroke, 13×13px).

## Files
- `cv-alternatives-v4.dc.html` — full design source (contains all exact inline styles, copy, and SVG icon markup referenced above)
- `assets/fa-square.jpg` — profile photo
