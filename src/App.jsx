import {
  contact,
  education,
  experience,
  languages,
  profile,
  skills,
} from './data';

function SectionLabel({ children, className = 'mb-2' }) {
  return (
    <div
      className={`font-mono text-[10px] tracking-[0.08em] opacity-55 uppercase ${className}`}
    >
      [ {children} ]
    </div>
  );
}

function ContactIcon({ icon, filled }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill={filled ? '#0a0a0a' : 'none'}
      stroke={filled ? undefined : '#0a0a0a'}
      strokeWidth={filled ? undefined : 1.6}
      className="shrink-0"
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
}

function App() {
  return (
    <div className="p-4 bg-canvas print:p-0 print:bg-white">
      <div className="cv-scale-wrapper">
        <div className="cv-page w-[794px] h-[1123px] bg-white text-ink border-2 border-ink box-border flex overflow-hidden font-sans print:border-0">
          <aside className="w-[260px] shrink-0 bg-lavender border-r-2 border-ink py-9 px-6 box-border">
            <div className="relative w-[120px] mx-auto mb-6">
              <div className="absolute top-2 left-2 w-full h-[120px] bg-ink" />
              <img
                className="relative block w-[120px] h-[120px] border-[3px] border-ink object-cover"
                src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                alt="francesc altes"
              />
            </div>

            <SectionLabel>contact</SectionLabel>
            <div className="font-mono text-[11px] leading-[1.5] mb-5 flex flex-col gap-2">
              {contact.map((c) => (
                <div className="flex items-center gap-2" key={c.label}>
                  <ContactIcon icon={c.icon} filled={c.filled} />
                  <span>{c.label}</span>
                </div>
              ))}
            </div>

            <SectionLabel>skills</SectionLabel>
            {skills.map((s) => (
              <div className="mb-[10px]" key={s.cat}>
                <div className="font-mono text-[9px] opacity-60 uppercase">
                  {s.cat}
                </div>
                <div className="font-sans text-xs leading-[1.5]">
                  {s.items.join(', ')}
                </div>
              </div>
            ))}

            <SectionLabel className="mt-[18px] mb-2">education</SectionLabel>
            {education.map((ed) => (
              <div className="mb-[10px]" key={ed.title}>
                <div className="font-sans font-bold text-xs lowercase">
                  {ed.title}
                </div>
                <div className="font-mono text-[9px] opacity-60">
                  {ed.org} / {ed.time}
                </div>
                <div className="font-sans text-[11px] opacity-75 leading-[1.4] mt-[3px]">
                  {ed.desc}
                </div>
              </div>
            ))}

            <SectionLabel className="mt-[18px] mb-2">languages</SectionLabel>
            <div className="flex flex-col gap-[6px]">
              {languages.map((l) => (
                <div
                  className="flex justify-between font-sans text-xs"
                  key={l.name}
                >
                  <span>{l.name}</span>
                  <span className="font-mono text-[9px] opacity-55 uppercase">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          <main className="flex-1 pt-9 px-8 pb-7 box-border min-w-0">
            <div className="h-[120px] mb-6 flex flex-col items-center justify-center text-center">
              <h1 className="font-sans font-black text-[40px] leading-[0.92] tracking-[-0.03em] mb-2 lowercase">
                francesc altes
              </h1>
              <div className="font-mono text-[13px] uppercase tracking-[0.06em]">
                senior software engineer
              </div>
            </div>

            <SectionLabel>profile</SectionLabel>
            <p className="font-sans text-xs leading-[1.4] mb-5">{profile}</p>

            <SectionLabel className="mb-[2px]">experience</SectionLabel>
            {experience.map((e, i) => (
              <div
                className={`py-[6px] ${i === 0 ? 'border-t-0' : 'border-t border-ink/15'}`}
                key={e.role + e.time}
              >
                <div className="flex justify-between items-baseline">
                  <div className="font-sans font-bold text-[12.5px] lowercase">
                    {e.role}
                  </div>
                  <div className="font-mono text-[9.5px] opacity-50">
                    {e.time}
                  </div>
                </div>
                <div className="font-mono text-[9.5px] opacity-55 mb-[3px]">
                  {e.org} / {e.loc}
                </div>
                {e.bullets.map((b) => (
                  <div className="flex gap-[6px] mb-[1px]" key={b}>
                    <div className="shrink-0 w-1 h-1 bg-ink mt-[4px]" />
                    <div className="font-sans text-[11px] leading-[1.35] opacity-85">
                      {b}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </main>
        </div>
      </div>

      <a
        href={`${import.meta.env.BASE_URL}francesc-altes-cv.pdf`}
        download
        className="block w-max mx-auto mt-4 bg-ink text-white font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-2 hover:opacity-80 cursor-pointer print:hidden"
      >
        download pdf
      </a>
    </div>
  );
}

export default App;
