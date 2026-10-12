import t from '../i18n'

export default function Hero({ lang }) {
  const tr = t[lang].hero

  return (
    <section id="hero">
      <div className="hero-glow" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-label">
          <span className="hero-label-accent">// 00_</span>init
        </div>
        <div className="hero-avail" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
          <span className="hero-avail-dot" />
          {tr.eyebrow}
        </div>
        <h1 className="hero-h1">
          {tr.h1Line1}<br />
          <em>{tr.h1Line2.split('+')[0]}<span className="hero-plus">+</span></em><br />
          <span className="hero-ul">{tr.h1Line3}</span>
        </h1>
        <p className="hero-desc" dangerouslySetInnerHTML={{ __html: tr.desc }} />
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            {tr.cta}{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">{tr.ctaGhost}</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-val">8+</div>
            <div className="hero-stat-lab">{tr.statProjects}</div>
          </div>
          <div>
            <div className="hero-stat-val">5+</div>
            <div className="hero-stat-lab">{tr.statClient}</div>
          </div>
          <div>
            <div className="hero-stat-val">PT</div>
            <div className="hero-stat-lab">Lisboa</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="avatar-card">
          <div className="avatar-card-header">
            <span className="win-dot red" />
            <span className="win-dot yellow" />
            <span className="win-dot green" />
            <span className="win-dot-gap" />
            talles_guerra.kt
          </div>
          <div className="avatar-top">
            <div className="avatar-img">
              <img
                src={`${import.meta.env.BASE_URL}perfilGithub.png`}
                alt="Talles Guerra"
                style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <div className="avatar-name">Talles Guerra</div>
            <div className="avatar-role">Android Dev · Kotlin · Compose</div>
          </div>
          <div className="avatar-body">
            <div className="avatar-stat-row">
              <div className="avatar-stat">
                <div className="avatar-stat-val">8+</div>
                <div className="avatar-stat-lab">{tr.statProjects}</div>
              </div>
              <div className="avatar-stat">
                <div className="avatar-stat-val">5+</div>
                <div className="avatar-stat-lab">{tr.statClient}</div>
              </div>
              <div className="avatar-stat">
                <div className="avatar-stat-val">PT</div>
                <div className="avatar-stat-lab">Lisboa</div>
              </div>
            </div>
            <div className="avatar-tags">
              <span className="avatar-tag green">{tr.available}</span>
              <span className="avatar-tag">Kotlin</span>
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
