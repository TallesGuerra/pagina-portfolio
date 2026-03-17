import t from '../i18n'

const dates = ['2026\natual', '2025', '2024\n2025']

export default function Experience({ lang }) {
  const tr = t[lang].experience

  return (
    <section id="experience">
      <div className="container">
        <div className="section-label"><span>03</span> · {tr.label}</div>
        <h2 className="section-title reveal">{tr.title1}<em>{tr.titleEm}</em></h2>
        <div className="timeline reveal">
          {tr.items.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-date" style={{ whiteSpace: 'pre-line' }}>{dates[i]}</div>
              <div className="timeline-body">
                <div className="timeline-dot" />
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-company">{item.company}</div>
                <div className="timeline-desc">{item.desc}</div>
                <div className="timeline-tags">
                  {item.tags.map(tag => <span key={tag} className="timeline-tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
