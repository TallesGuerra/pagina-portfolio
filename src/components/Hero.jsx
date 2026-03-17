import t from '../i18n'

export default function Hero({ lang }) {
  const tr = t[lang].hero

  return (
    <section id="hero">
      <div className="hero-bg-shape" />
      <div className="hero-bg-dots" />
      <div>
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          {tr.eyebrow}
        </div>
        <h1 className="hero-h1">
          {tr.h1Line1}<br />
          <em>{tr.h1Line2}</em><br />
          <span className="ul">{tr.h1Line3}</span>
        </h1>
        <p className="hero-desc" dangerouslySetInnerHTML={{ __html: tr.desc }} />
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            {tr.cta}{' '}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">{tr.ctaGhost}</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="avatar-card">
          <div className="avatar-top">
            <div className="avatar-img">
              <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" width="88" height="88">
                <rect width="88" height="88" fill="#e8dfd0" />
                <ellipse cx="44" cy="76" rx="28" ry="18" fill="#c5b99e" />
                <circle cx="44" cy="35" r="20" fill="#c8956c" />
                <path d="M24 28 Q44 8 64 28 L64 20 Q44 4 24 20Z" fill="#2d1f14" />
                <ellipse cx="44" cy="21" rx="21" ry="11" fill="#2d1f14" />
              </svg>
            </div>
            <div className="avatar-name">Talles Guerra</div>
            <div className="avatar-role">Android Dev · Kotlin · Compose</div>
          </div>
          <div className="avatar-body">
            <div className="avatar-stat-row">
              <div className="avatar-stat">
                <div className="avatar-stat-val">4+</div>
                <div className="avatar-stat-lab">{tr.statProjects}</div>
              </div>
              <div className="avatar-stat">
                <div className="avatar-stat-val">1</div>
                <div className="avatar-stat-lab">{tr.statClient}</div>
              </div>
              <div className="avatar-stat">
                <div className="avatar-stat-val">PT</div>
                <div className="avatar-stat-lab">Lisboa</div>
              </div>
            </div>
            <div className="avatar-tags">
              <span className="avatar-tag green">{tr.available}</span>
              <span className="avatar-tag red">Kotlin</span>
              <span className="avatar-tag">Jetpack Compose</span>
              <span className="avatar-tag">MVVM</span>
              <span className="avatar-tag">Jr Dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
