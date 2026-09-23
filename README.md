# Francesc Altes — CV

A single-page, print-ready CV/resume for Francesc Altes, senior software engineer. Brutalist/monospace-accented design: sharp edges, offset "shadow" photo treatment, dense two-column layout (sidebar + main content), fixed to A4 proportions so it prints/exports to PDF as one page.

## Stack

- **React 19** + **Vite** — build tooling and dev server
- **Tailwind CSS 4** (via `@tailwindcss/vite`) — styling, utility classes
- **Biome** — linting and formatting

## Project Structure

```
src/
  App.jsx        # page layout & markup (sidebar + main column)
  cvData.jsx      # all CV content: contact, skills, education, languages, experience, icons
  index.css       # global styles, print rules, custom tokens (colors, canvas scaling)
  main.jsx        # React entry point
assets/           # source images (profile photo)
public/assets/    # static assets served as-is (referenced by App.jsx)
index.html        # Vite HTML entry
cv-alternatives-v4.dc.html  # original high-fidelity design reference (superseded by the React implementation)
```

## Development

```
npm install
npm run dev       # start Vite dev server
npm run build      # production build
npm run preview    # preview the production build
npm run check       # biome lint + format (writes fixes)
```

## Content

All CV copy (contact info, skills, education, languages, experience entries) lives in `src/cvData.jsx` as plain data — edit there to update the CV without touching layout code.

## Print / Export

The page is fixed to A4 dimensions (794×1123px @ 96dpi) with print-specific CSS (`index.css`) so it renders as one clean page. A "download pdf" button in the UI triggers `window.print()`.

## Design Reference

`cv-alternatives-v4.dc.html` is the original static HTML prototype the React app was built from — kept for reference, not used at runtime.
