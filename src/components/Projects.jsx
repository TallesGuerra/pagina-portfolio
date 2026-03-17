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
            <svg className="phone-mockup" viewBox="0 0 160 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="4" width="144" height="292" rx="22" fill="#1a1714"/>
              <rect x="12" y="8" width="136" height="284" rx="19" fill="#f8f9fa"/>
              <rect x="12" y="8" width="136" height="36" rx="19" fill="#f8f9fa"/>
              <rect x="12" y="36" width="136" height="8" fill="#f8f9fa"/>
              <rect x="52" y="12" width="56" height="14" rx="7" fill="#1a1714"/>
              <rect x="20" y="52" width="120" height="54" rx="8" fill="#1a1714"/>
              <text x="80" y="70" fontFamily="sans-serif" fontSize="8" fill="#9ca3af" textAnchor="middle">Saldo total</text>
              <text x="80" y="90" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#ffffff" textAnchor="middle">€ 1.840,00</text>
              <rect x="20" y="114" width="56" height="38" rx="6" fill="#e8f5f0"/>
              <text x="48" y="128" fontFamily="sans-serif" fontSize="6.5" fill="#059669" textAnchor="middle">Receitas</text>
              <text x="48" y="143" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#059669" textAnchor="middle">+€2.400</text>
              <rect x="84" y="114" width="56" height="38" rx="6" fill="#fef0ea"/>
              <text x="112" y="128" fontFamily="sans-serif" fontSize="6.5" fill="#e8440a" textAnchor="middle">Despesas</text>
              <text x="112" y="143" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#e8440a" textAnchor="middle">-€560</text>
              <line x1="20" y1="160" x2="140" y2="160" stroke="#e5e7eb" strokeWidth="1"/>
              <circle cx="26" cy="173" r="5" fill="#e8f5f0"/>
              <text x="36" y="177" fontFamily="sans-serif" fontSize="7.5" fill="#374151">Supermercado</text>
              <text x="138" y="177" fontFamily="sans-serif" fontSize="7.5" fill="#e8440a" textAnchor="end">-€42</text>
              <line x1="20" y1="185" x2="140" y2="185" stroke="#e5e7eb" strokeWidth="1"/>
              <circle cx="26" cy="198" r="5" fill="#e8f5f0"/>
              <text x="36" y="202" fontFamily="sans-serif" fontSize="7.5" fill="#374151">Salário</text>
              <text x="138" y="202" fontFamily="sans-serif" fontSize="7.5" fill="#059669" textAnchor="end">+€1.200</text>
              <line x1="20" y1="210" x2="140" y2="210" stroke="#e5e7eb" strokeWidth="1"/>
              <circle cx="26" cy="223" r="5" fill="#fef0ea"/>
              <text x="36" y="227" fontFamily="sans-serif" fontSize="7.5" fill="#374151">Restaurante</text>
              <text x="138" y="227" fontFamily="sans-serif" fontSize="7.5" fill="#e8440a" textAnchor="end">-€28</text>
              <rect x="12" y="256" width="136" height="36" fill="#fff"/>
              <circle cx="48" cy="274" r="7" fill="#1a1714"/>
              <circle cx="80" cy="274" r="7" fill="#e5e7eb"/>
              <circle cx="112" cy="274" r="7" fill="#e5e7eb"/>
              <rect x="55" y="288" width="50" height="3" rx="1.5" fill="#d1d5db"/>
            </svg>
          </div>
        </div>

        {/* Secondary cards */}
        <div className="projects-secondary reveal">
          {/* To Do List */}
          <div className="project-card">
            <div className="project-num">02 ——</div>
            <div className="project-name">Lista de Tarefas</div>
            <div className="mini-preview" style={{ background: 'linear-gradient(135deg,#eff6ff,#e0e7ff)' }}>
              <svg viewBox="0 0 100 110" width="80" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="2" width="92" height="106" rx="10" fill="#1e293b"/>
                <rect x="7" y="5" width="86" height="100" rx="8" fill="#f8fafc"/>
                <text x="50" y="22" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#1e293b" textAnchor="middle">Minhas Tarefas</text>
                <rect x="12" y="28" width="76" height="12" rx="3" fill="#2563eb"/>
                <text x="50" y="38" fontFamily="sans-serif" fontSize="7" fill="#fff" textAnchor="middle">+ Adicionar tarefa</text>
                <rect x="8" y="46" width="4" height="9" rx="1" fill="#2563eb"/>
                <text x="18" y="54" fontFamily="sans-serif" fontSize="7" fill="#374151">Estudar Coroutines</text>
                <rect x="8" y="60" width="4" height="9" rx="1" fill="#2563eb"/>
                <text x="18" y="68" fontFamily="sans-serif" fontSize="7" fill="#374151">Criar novo projeto</text>
                <rect x="8" y="74" width="4" height="9" rx="1" fill="#059669"/>
                <line x1="18" y1="79" x2="75" y2="79" stroke="#a7f3d0" strokeWidth="1.5"/>
                <text x="18" y="82" fontFamily="sans-serif" fontSize="7" fill="#9ca3af" textDecoration="line-through">Ler docs Material 3</text>
                <rect x="8" y="88" width="4" height="9" rx="1" fill="#059669"/>
                <line x1="18" y1="93" x2="65" y2="93" stroke="#a7f3d0" strokeWidth="1.5"/>
                <text x="18" y="96" fontFamily="sans-serif" fontSize="7" fill="#9ca3af">Push no GitHub</text>
              </svg>
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
            <div className="project-name">Barbearia Cruz</div>
            <div className="mini-preview" style={{ background: 'linear-gradient(135deg,#fff7ed,#fef3ee)' }}>
              <svg viewBox="0 0 180 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="180" height="100" rx="5" fill="#fff"/>
                <rect width="180" height="20" rx="5" fill="#f3f4f6"/>
                <rect y="15" width="180" height="5" fill="#f3f4f6"/>
                <circle cx="12" cy="10" r="3.5" fill="#ef4444"/>
                <circle cx="22" cy="10" r="3.5" fill="#f59e0b"/>
                <circle cx="32" cy="10" r="3.5" fill="#10b981"/>
                <rect x="42" y="5" width="96" height="10" rx="3" fill="#e5e7eb"/>
                <text x="90" y="13" fontFamily="sans-serif" fontSize="5.5" fill="#9ca3af" textAnchor="middle">barbearia-cruz.vercel.app</text>
                <rect x="8" y="27" width="164" height="22" rx="3" fill="#1a1714"/>
                <text x="90" y="41" fontFamily="sans-serif" fontSize="8.5" fontWeight="bold" fill="#fff" textAnchor="middle">BARBEARIA CRUZ</text>
                <text x="90" y="57" fontFamily="sans-serif" fontSize="6" fill="#6b7280" textAnchor="middle">Agende o seu corte online · Lisboa</text>
                <rect x="60" y="62" width="60" height="12" rx="2" fill="#e8440a"/>
                <text x="90" y="71" fontFamily="sans-serif" fontSize="6" fill="#fff" textAnchor="middle">Agendar agora →</text>
                <rect x="8" y="80" width="50" height="14" rx="2" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="0.5"/>
                <text x="33" y="90" fontFamily="sans-serif" fontSize="5.5" fill="#374151" textAnchor="middle">Corte simples</text>
                <rect x="65" y="80" width="50" height="14" rx="2" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="0.5"/>
                <text x="90" y="90" fontFamily="sans-serif" fontSize="5.5" fill="#374151" textAnchor="middle">Barba</text>
                <rect x="122" y="80" width="50" height="14" rx="2" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="0.5"/>
                <text x="147" y="90" fontFamily="sans-serif" fontSize="5.5" fill="#374151" textAnchor="middle">Corte + Barba</text>
              </svg>
            </div>
            <div className="project-desc">Sistema de agendamento para cliente real em Portugal com integração ao Google Calendar e design mobile-first.</div>
            <div className="project-tech">
              {['JavaScript','Google Calendar API','Vercel'].map(t => <span key={t} className="tech-chip">{t}</span>)}
            </div>
            <div className="project-links">
              <a href="https://barbearia-cruz.vercel.app" target="_blank" rel="noreferrer" className="project-link">
                <ExternalIcon /> Ver live
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
