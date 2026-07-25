import { person } from '../data/resume'
import './CV.css'

function Label({ children }) {
  return <div className="cv-label">[ {children} ]</div>
}

export default function CV() {
  return (
    <div className="cv-sheet">
      <div className="cv-page">
        <div className="cv-body">
          <aside className="cv-sidebar">
            <div className="cv-photo-wrap">
              <div className="cv-photo-halo" />
              <img className="cv-photo" src={person.photo} alt={person.name} />
            </div>
            <h1 className="cv-name">{person.name}</h1>
            <div className="cv-title">{person.title}</div>

            <Label>contact</Label>
            <div className="cv-contact">
              {person.contact.map(([k, v]) => (
                <div key={k}>{v}</div>
              ))}
            </div>

            <Label>skills</Label>
            {person.skills.map((s) => (
              <div key={s.cat} className="cv-skill-group">
                <div className="cv-skill-cat">{s.cat}</div>
                <div className="cv-skill-items">{s.items.join(', ')}</div>
              </div>
            ))}

            <Label>education</Label>
            {person.education.map((ed, i) => (
              <div key={i} className="cv-edu-item">
                <div className="cv-edu-title">{ed.title}</div>
                <div className="cv-edu-meta">
                  {ed.org} / {ed.time}
                </div>
              </div>
            ))}

            <Label>languages</Label>
            <div className="cv-langs">{person.languages.join(', ')}</div>
          </aside>

          <main className="cv-main">
            <Label>profile</Label>
            <p className="cv-profile">{person.profile}</p>

            <Label>experience</Label>
            {person.experience.map((e, i) => (
              <div key={i} className={`cv-exp-item${i ? ' cv-exp-item--divided' : ''}`}>
                <div className="cv-exp-row">
                  <div className="cv-exp-role">{e.role}</div>
                  <div className="cv-exp-time">{e.time}</div>
                </div>
                <div className="cv-exp-meta">
                  {e.org} / {e.loc}
                </div>
                {e.bullets.map((b, j) => (
                  <div key={j} className="cv-exp-bullet">
                    — {b}
                  </div>
                ))}
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}
