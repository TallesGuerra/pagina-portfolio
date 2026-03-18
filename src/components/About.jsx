import t from '../i18n'

const skillTags = [
  [
    { label: 'Kotlin', highlight: true },
    { label: 'Jetpack Compose', highlight: true },
    { label: 'Android SDK' },
    { label: 'Material Design 3' },
    { label: 'Navigation Compose' },
  ],
  [
    { label: 'MVVM', highlight: true },
    { label: 'Clean Architecture' },
    { label: 'StateFlow' },
    { label: 'ViewModel' },
    { label: 'Use Cases' },
    { label: 'Coroutines' },
  ],
  [
    { label: 'Room Database' },
    { label: 'Repository Pattern' },
    { label: 'DAO' },
  ],
  [
    { label: 'Android Studio' },
    { label: 'Git / GitHub' },
    { label: 'Scrum' },
  ],
]

export default function About({ lang }) {
  const tr = t[lang].about

  return (
    <section id="about">
      <div className="container">
        <div className="section-label"><span>01</span> · {tr.label}</div>
        <h2 className="section-title reveal">
          {tr.title1}<br />{tr.title2}<em>{tr.titleEm}</em>
        </h2>
        <div className="about-grid">
          <div className="reveal">
            <div className="about-text">
              <p dangerouslySetInnerHTML={{ __html: tr.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: tr.p2 }} />
              <p dangerouslySetInnerHTML={{ __html: tr.p3 }} />
            </div>
            <div className="about-philosophy">
              <p>{tr.quote}</p>
            </div>
          </div>
          <div className="skills-block reveal">
            {tr.skillCats.map((cat, i) => (
              <div key={cat.name} className="skill-category">
                <div className="skill-cat-name">{cat.name}</div>
                <div className="skill-tags">
                  {skillTags[i].map((tag) => (
                    <span key={tag.label} className={`skill-tag${tag.highlight ? ' highlight' : ''}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
