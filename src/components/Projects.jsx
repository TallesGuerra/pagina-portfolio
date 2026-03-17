const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label"><span>02</span> · Projetos</div>
        <h2 className="section-title reveal">O que já <em>construí</em></h2>

        {/* Featured */}
        <div className="project-featured reveal">
          <div className="project-featured-body">
            <div className="project-badge badge-featured">★ Projeto destaque</div>
            <div className="project-num">01 ——</div>
            <div className="project-name" style={{ fontFamily: "'Fraunces',serif", fontSize: '1.55rem', marginBottom: '.7rem' }}>
              Pocket Finances
            </div>
            <div className="project-desc" style={{ maxWidth: 400 }}>
              App de controle de finanças pessoais Android. Rastreamento de receitas e despesas com saldo em tempo real e histórico completo. Arquitetura MVVM + Clean Architecture numa stack profissional.
            </div>
            <div className="project-tech" style={{ marginBottom: '1.4rem' }}>
              {['Kotlin','Jetpack Compose','MVVM','Clean Architecture','Coroutines','StateFlow','Room'].map(t => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="https://github.com/TallesGuerra" target="_blank" rel="noreferrer" className="project-link">
                <GitHubIcon /> Ver no GitHub
              </a>
            </div>
          </div>
          <div className="project-featured-preview">
            <img
              src={`${import.meta.env.BASE_URL}financas-preview.png`}
              alt="Pocket Finances preview"
              className="phone-mockup"
              style={{ width: '160px', height: 'auto' }}
            />
          </div>
        </div>

        {/* Secondary cards */}
        <div className="projects-secondary reveal">
          {/* To Do List */}
          <div className="project-card">
            <div className="project-num">02 ——</div>
            <div className="project-name">Lista de Tarefas</div>
            <div className="mini-preview" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src={`${import.meta.env.BASE_URL}toDoList-preview.png`}
                alt="Lista de Tarefas preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="project-desc">App de gestão de tarefas com Compose. Estado reativo, adicionar e remover tarefas com layout responsivo.</div>
            <div className="project-tech">
              {['Kotlin','Jetpack Compose','Material 3'].map(t => <span key={t} className="tech-chip">{t}</span>)}
            </div>
            <div className="project-links">
              <a href="https://github.com/TallesGuerra/ListaDeTarefas" target="_blank" rel="noreferrer" className="project-link">
                <GitHubIcon /> GitHub
              </a>
            </div>
          </div>

          {/* Barbearia Cruz */}
          <div className="project-card">
            <div className="project-badge badge-client">● Cliente real</div>
            <div className="project-num">03 ——</div>
            <div className="project-name">Barber Shop</div>
            <div className="mini-preview" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src={`${import.meta.env.BASE_URL}barbearia-preview.png`}
                alt="Barber Shop preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="project-desc">Sistema de agendamento para cliente real em Portugal com integração ao Google Calendar e design mobile-first.</div>
            <div className="project-tech">
              {['JavaScript','Google Calendar API','Vercel'].map(t => <span key={t} className="tech-chip">{t}</span>)}
            </div>
            <div className="project-links">
              <a href="https://barbearia-cruz.vercel.app" target="_blank" rel="noreferrer" className="project-link">
                <ExternalIcon /> Ver online
              </a>
            </div>
          </div>

          {/* Quiz App */}
          <div className="project-card">
            <div className="project-num">04 ——</div>
            <div className="project-name">Quiz App</div>
            <div className="mini-preview" style={{ background: 'linear-gradient(135deg,#f5f0ff,#ede8ff)' }}>
              <svg viewBox="0 0 100 110" width="80" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="2" width="92" height="106" rx="10" fill="#1a1714"/>
                <rect x="7" y="5" width="86" height="100" rx="8" fill="#1e1b4b"/>
                <text x="50" y="22" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#e0e7ff" textAnchor="middle">Quiz Android</text>
                <text x="50" y="32" fontFamily="sans-serif" fontSize="6" fill="#818cf8" textAnchor="middle">Pergunta 3 de 10</text>
                <rect x="12" y="36" width="76" height="28" rx="4" fill="#312e81"/>
                <text x="50" y="47" fontFamily="sans-serif" fontSize="5.5" fill="#c7d2fe" textAnchor="middle">Qual linguagem é usada no</text>
                <text x="50" y="57" fontFamily="sans-serif" fontSize="5.5" fill="#c7d2fe" textAnchor="middle">Android nativo moderno?</text>
                <rect x="12" y="70" width="34" height="13" rx="3" fill="#4c1d95"/>
                <text x="29" y="80" fontFamily="sans-serif" fontSize="6" fill="#ddd6fe" textAnchor="middle">Java</text>
                <rect x="54" y="70" width="34" height="13" rx="3" fill="#059669"/>
                <text x="71" y="80" fontFamily="sans-serif" fontSize="6" fill="#fff" textAnchor="middle">Kotlin ✓</text>
                <rect x="12" y="88" width="34" height="13" rx="3" fill="#4c1d95"/>
                <text x="29" y="98" fontFamily="sans-serif" fontSize="6" fill="#ddd6fe" textAnchor="middle">Swift</text>
                <rect x="54" y="88" width="34" height="13" rx="3" fill="#4c1d95"/>
                <text x="71" y="98" fontFamily="sans-serif" fontSize="6" fill="#ddd6fe" textAnchor="middle">Python</text>
              </svg>
            </div>
            <div className="project-desc">Quiz Android com Compose. Interface dinâmica com feedback visual, background customizado e navegação entre telas.</div>
            <div className="project-tech">
              {['Kotlin','Jetpack Compose','Android SDK'].map(t => <span key={t} className="tech-chip">{t}</span>)}
            </div>
            <div className="project-links">
              <a href="https://github.com/TallesGuerra" target="_blank" rel="noreferrer" className="project-link">
                <GitHubIcon /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
