// Shared tokens, data, and primitives for the brutalist projects-page explorations.
// Exports to window: PROJECTS, Navbar, Thumb, PageMark, fmtIndex

const INK = '#0a0a0a'
const PAPER = '#ffffff'
const VIOLET = '#c3b5fd'

// Brand-consistent project list: real two + three believable placeholders.
const PROJECTS = [
  {
    n: 'portfolio',
    desc: 'personal portfolio',
    year: '2024',
    role: 'design + dev',
    stack: 'next.js / tailwind',
    tag: 'site',
  },
  {
    n: 'whitepepper',
    desc: 'simulates white paper',
    year: '2023',
    role: 'solo build',
    stack: 'react / canvas',
    tag: 'experiment',
  },
  {
    n: 'ledger',
    desc: 'a stupidly minimal expense tracker',
    year: '2024',
    role: 'design + dev',
    stack: 'next.js / sqlite',
    tag: 'tool',
  },
  {
    n: 'frame',
    desc: 'photo grid + contact-sheet generator',
    year: '2023',
    role: 'weekend hack',
    stack: 'svelte / wasm',
    tag: 'tool',
  },
  {
    n: 'monospace',
    desc: 'type specimen playground for mono fonts',
    year: '2022',
    role: 'experiment',
    stack: 'vanilla js',
    tag: 'experiment',
  },
]

const fmtIndex = i => String(i + 1).padStart(2, '0')

// Striped placeholder thumbnail with a monospace explainer label.
function Thumb({ w = '100%', h = 160, label = 'thumbnail', dark = false, accent = false }) {
  const base = dark ? INK : PAPER
  const lineCol = dark ? 'rgba(255,255,255,0.16)' : 'rgba(10,10,10,0.10)'
  const fg = dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.55)'
  return (
    <div
      style={{
        width: w,
        height: h,
        background: accent ? VIOLET : base,
        backgroundImage: `repeating-linear-gradient(45deg, ${lineCol} 0, ${lineCol} 1px, transparent 1px, transparent 9px)`,
        border: `2px solid ${INK}`,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          letterSpacing: '0.04em',
          color: accent ? INK : fg,
          padding: '6px 8px',
          textTransform: 'lowercase',
        }}
      >
        [ {label} ]
      </span>
    </div>
  )
}

// Navbar matching the existing site (lowercase, line-through active, résumé button).
function Navbar({ border = true, active = 'projects' }) {
  const link = isActive => ({
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 16,
    color: INK,
    textDecoration: isActive ? 'line-through' : 'none',
    pointerEvents: isActive ? 'none' : 'auto',
    opacity: isActive ? 0.55 : 1,
  })
  return (
    <div
      style={{
        height: 88,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        borderBottom: border ? `2px solid ${INK}` : 'none',
        boxSizing: 'border-box',
      }}
    >
      <img src="assets/logo.svg" alt="logo" width={46} height={46} style={{ display: 'block' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <span style={link(active === 'home')}>home</span>
        <span style={link(active === 'contact')}>contact</span>
        <span style={link(active === 'projects')}>projects</span>
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 15,
            color: INK,
            border: `2px solid ${INK}`,
            padding: '4px 12px',
          }}
        >
          résumé
        </span>
      </div>
    </div>
  )
}

// Big lowercase page heading used across layouts.
function PageMark({ children = 'projects', sub, count }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
      <h1
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 900,
          fontSize: 92,
          lineHeight: 0.88,
          letterSpacing: '-0.045em',
          margin: 0,
          color: INK,
          textTransform: 'lowercase',
        }}
      >
        {children}
      </h1>
      {(sub || count != null) && (
        <div style={{ textAlign: 'right', fontFamily: "'Space Mono', monospace", fontSize: 12, color: INK, lineHeight: 1.6, paddingBottom: 8 }}>
          {count != null && <div>[ {fmtIndex(count - 1)} entries ]</div>}
          {sub && <div style={{ opacity: 0.6 }}>{sub}</div>}
        </div>
      )}
    </div>
  )
}

Object.assign(window, { PROJECTS, Navbar, Thumb, PageMark, fmtIndex, INK, PAPER, VIOLET })
