# Handoff: CV / Résumé Page

## Overview
A brutalist-style CV/résumé page matching the visual system of the existing portfolio site (home/contact/projects). Displays Francesc Altes's profile, work experience, skills, education, and languages in a two-column layout with a violet sidebar.

## About the Design Files
The files in this bundle are **design references created in HTML** (React via in-browser Babel, no build step) — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, etc.) using its established components/patterns — or, if this is a fresh project, set up a standard React app (e.g. Vite) and implement it there.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and layout are locked. Recreate pixel-perfectly.

## Screens / Views
Single screen: **CV / Résumé**

**Layout**: Full-bleed white page, 900px design width (letter-portrait proportions), 2px solid black (`#0a0a0a`) border around the whole page. Flex row: fixed 300px sidebar (left) + flexible main column (right).

### Sidebar (300px, violet background `#c3b5fd`, 2px right border `#0a0a0a`, padding 40px 32px)
- Circular photo, 160px, with a violet circle offset 10px down-right behind it (drop-shadow effect), 3px black border on the photo itself, object-fit cover.
- Name: Inter 900, 40px, line-height 0.95, letter-spacing -0.03em, lowercase, margin-bottom 6px.
- Title "senior software engineer": Space Mono 12px, uppercase, letter-spacing 0.06em, margin-bottom 32px.
- Section label pattern used throughout: Space Mono 11px, uppercase, letter-spacing 0.08em, 55% opacity black, format `[ label ]`, margin-bottom 10px.
- Contact block: Space Mono 12px, line-height 2 (email, site, github, handle).
- Skills block: grouped by category (languages, libraries, frameworks, tools, cloud), category label 10px mono uppercase 60% opacity, items Inter 13px comma-separated.
- Education block: title Inter 700 13px lowercase, org/time line Space Mono 10px 60% opacity.
- Languages: Inter 13px, comma-separated.

### Main column (flex 1, padding 40px 36px)
- Profile paragraph: Inter 15px, line-height 1.55, margin-bottom 28px.
- Experience list: each entry has a top border (1px, black 15% opacity) except the first; padding 14px vertical.
  - Row: role (Inter 700 16px lowercase) left, time range (Space Mono 11px, 50% opacity) right, flex space-between.
  - Org/location line: Space Mono 11px, 55% opacity, margin-bottom 6px.
  - Bullets: Inter 13px, line-height 1.5, 85% opacity, prefixed with an em dash "— ".

## Interactions & Behavior
Static document, no interactive states. Intended primarily for on-screen viewing and print-to-PDF export (no print-specific CSS was added — a real implementation should add `@media print` rules sized to Letter/A4 if PDF export is a requirement).

## State Management
None — static content component. If wired to a CMS/data source later, model as one `person` object matching the Content section below.

## Design Tokens
- Ink (text/border): `#0a0a0a`
- Paper (background): `#ffffff`
- Violet (accent): `#c3b5fd`
- Sans font: Inter (weights 300/400/700/800/900), Google Fonts
- Mono font: Space Mono (weights 400/700), Google Fonts
- Border: 2px solid ink (page/panel dividers), 1px solid ink at 15% opacity (list dividers), 3px solid ink (photo ring)

## Content
```
Name: Francesc Altes
Title: Senior Software Engineer
Profile: "i have always been a builder at heart, which naturally drew me to study
mechanical engineering. 8 years ago, i took my passion for building into the digital
realm to become a software engineer. the vibrant tech community and the endless
possibilities of software have kept me hooked ever since. today, i'm combining my
engineering mindset with the superpowers of AI to push the boundaries of what i can
build with code."

Contact: fran.altes@gmail.com · fran-altes.com · francesc-altes (github) · suki60

Experience:
1. Senior Software Engineer — Gartner, Barcelona, 2024-2025
   - supported vendor portal (react router v7 / ts)
   - built partner portal from scratch (vercel / github actions / cypress)
   - led app router, server components and actions migrations (next.js)
2. Software Engineer — Gartner, Barcelona, 2022-2024
   - supported capterra.com (next.js / ts)
   - migrated microfrontends into unified monorepo (aws -> vercel)
   - managed observability integrations (datadog / newrelic)
3. Associate Software Engineer — Gartner, Barcelona, 2018-2022
   - supported getapp.com (sintra / ruby)
   - migrated getapp frontend (jquery -> react)
   - managed SEM landing pages (+10M €/year revenue)
4. Junior Software Engineer — Gartner, Barcelona, 2018
   - completed 6 months of intensive tech training at the company
   - built apps to consolidate skills (ruby / mysql / jquery)
   - offered permanent job as 1 of 3 successful candidates (out of 6)
5. Mechanical Engineer — Demola Project, Tampere, 2017
   - designed a specialized drone capable of taking soil samples
   - modeled structure and internal mechanisms (solidworks)
   - won 2nd place out of 30 projects at demola spring 2017

Skills:
- Languages: TypeScript, Node, GraphQL, Ruby
- Libraries: React, Tailwind, Zustand, Testing Library
- Frameworks: Next.js, Router v7, Vitest, Playwright
- Tools: Git, Vite, MySQL, Docker
- Cloud: AWS, Vercel, Actions, Datadog

Education:
- Java Web Developer Bootcamp — Ubiqum, Barcelona, 2017
- Mechanical Engineering Degree — ESEIAAT, Terrassa, 2013-2016

Languages spoken: Catalan, Spanish, English, Japanese
```

## Assets
- `assets/fa-square.jpg` — Francesc's photo (square crop, used circular with CSS `border-radius: 50%`)
- `assets/logo.svg` — site logo (not used on this screen, included for reference/consistency with rest of portfolio)

## Files
Implemented as a Vite + React app in `src/` (`src/components/CV.jsx`/`CV.css`, `src/data/resume.js`, `src/tokens.js`). The original in-browser Babel/HTML prototype (`CV.html`, `cv-layouts.jsx`, `portfolio-shared.jsx`) has been removed now that the real implementation exists.

The page is scaled to fit a DIN A4 sheet (210×297mm) — see `.cv-sheet`/`.cv-page` in `src/components/CV.css`. Print/PDF export targets A4 via `@page { size: A4 }`.
