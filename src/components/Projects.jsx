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
            <svg className="phone-mockup" viewBox="0 0 160 320" xmlns="http://www.w3.org/2000/svg">
              {/* Phone shell */}
              <rect x="6" y="2" width="148" height="316" rx="24" fill="#111"/>
              <rect x="10" y="6" width="140" height="308" rx="21" fill="#eeeaf8"/>

              {/* Notch */}
              <rect x="50" y="10" width="60" height="13" rx="6.5" fill="#111"/>

              {/* Header */}
              <text x="18" y="38" fontFamily="sans-serif" fontSize="8.5" fontWeight="bold" fill="#0f0c29">Finanças no Bolso</text>
              <text x="142" y="38" fontFamily="sans-serif" fontSize="6.5" fill="#3b3bd4" textAnchor="end">Ver tudo →</text>

              {/* Balance card */}
              <rect x="14" y="44" width="132" height="72" rx="12" fill="#2e2ea8"/>

              {/* Saldo atual label */}
              <text x="24" y="59" fontFamily="sans-serif" fontSize="6.5" fill="#b8b8f0">Saldo atual</text>

              {/* Balance amount */}
              <text x="24" y="78" fontFamily="sans-serif" fontSize="17" fontWeight="bold" fill="#ffffff">3 800,00 €</text>

              {/* Divider inside card */}
              <line x1="24" y1="87" x2="136" y2="87" stroke="#4a4ac0" strokeWidth="0.8"/>

              {/* Receitas */}
              <text x="24" y="99" fontFamily="sans-serif" fontSize="6" fill="#86efac">▲ Receitas</text>
              <text x="24" y="109" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#4ade80">5 000,00 €</text>

              {/* Despesas */}
              <text x="88" y="99" fontFamily="sans-serif" fontSize="6" fill="#fca5a5">▼ Despesas</text>
              <text x="88" y="109" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#f87171">1 200,00 €</text>

              {/* Transactions label */}
              <text x="18" y="132" fontFamily="sans-serif" fontSize="7.5" fontWeight="bold" fill="#0f0c29">Transações recentes</text>

              {/* Transaction 1 – Salário */}
              <rect x="14" y="139" width="132" height="34" rx="8" fill="#ddd9f0"/>
              <circle cx="31" cy="156" r="8" fill="#bbf7d0"/>
              <text x="31" y="159.5" fontFamily="sans-serif" fontSize="9" fill="#166534" textAnchor="middle">↑</text>
              <text x="45" y="152" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#1a1a2e">Salário</text>
              <text x="45" y="163" fontFamily="sans-serif" fontSize="6" fill="#6b7280">Trabalho · Hoje</text>
              <text x="140" y="157" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#16a34a" textAnchor="end">+5 000,00 €</text>

              {/* Transaction 2 – Aluguel */}
              <rect x="14" y="179" width="132" height="34" rx="8" fill="#ddd9f0"/>
              <circle cx="31" cy="196" r="8" fill="#fee2e2"/>
              <text x="31" y="199.5" fontFamily="sans-serif" fontSize="9" fill="#991b1b" textAnchor="middle">↓</text>
              <text x="45" y="192" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#1a1a2e">Aluguel</text>
              <text x="45" y="203" fontFamily="sans-serif" fontSize="6" fill="#6b7280">Moradia · Ontem</text>
              <text x="140" y="197" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#dc2626" textAnchor="end">-1 200,00 €</text>

              {/* FAB button */}
              <rect x="113" y="276" width="30" height="30" rx="10" fill="#2e2ea8"/>
              <text x="128" y="295" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#fff" textAnchor="middle">+</text>

              {/* Home bar */}
              <rect x="55" y="308" width="50" height="3" rx="1.5" fill="#9994c0"/>
            </svg>
          </div>
        </div>

        {/* Secondary cards */}
        <div className="projects-secondary reveal">
          {/* To Do List */}
          <div className="project-card">
            <div className="project-num">02 ——</div>
            <div className="project-name">Lista de Tarefas</div>
            <div className="mini-preview" style={{ background: '#0d0d0d', padding: '0.5rem', minHeight: '220px' }}>
              <svg viewBox="0 0 90 180" width="90" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="todoGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
                {/* Phone shell */}
                <rect x="2" y="1" width="86" height="178" rx="12" fill="#111"/>
                {/* Screen with gradient */}
                <rect x="5" y="4" width="80" height="172" rx="10" fill="url(#todoGrad)"/>
                {/* Notch */}
                <rect x="30" y="7" width="30" height="6" rx="3" fill="#111"/>
                {/* Status bar icons */}
                <text x="10" y="13" fontFamily="sans-serif" fontSize="4" fill="rgba(255,255,255,0.7)">7:53</text>
                <rect x="68" y="9" width="12" height="5" rx="1.5" fill="rgba(255,255,255,0.5)"/>
                <rect x="69" y="10" width="10" height="3" rx="1" fill="#fff"/>
                {/* Title */}
                <text x="10" y="28" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#fff">Lista de Tarefas</text>
                {/* Input field */}
                <rect x="8" y="33" width="52" height="14" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8"/>
                <text x="12" y="43" fontFamily="sans-serif" fontSize="5.5" fill="rgba(255,255,255,0.55)">Nova tarefa</text>
                {/* Add button */}
                <rect x="64" y="33" width="18" height="14" rx="7" fill="#fff"/>
                <text x="73" y="43" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#7c3aed" textAnchor="middle">Add</text>
                {/* Task card 1 */}
                <rect x="8" y="53" width="74" height="16" rx="5" fill="rgba(255,255,255,0.88)"/>
                <text x="14" y="64" fontFamily="sans-serif" fontSize="6" fill="#1a1a2e">Iniciar novo projeto</text>
                <rect x="73" y="57" width="6" height="8" rx="1" fill="#ef4444"/>
                <text x="76" y="64" fontFamily="sans-serif" fontSize="5.5" fill="#fff" textAnchor="middle">🗑</text>
                {/* Task card 2 */}
                <rect x="8" y="73" width="74" height="16" rx="5" fill="rgba(255,255,255,0.88)"/>
                <text x="14" y="84" fontFamily="sans-serif" fontSize="6" fill="#1a1a2e">Fazer compras da semana</text>
                <rect x="73" y="77" width="6" height="8" rx="1" fill="#ef4444"/>
                <text x="76" y="84" fontFamily="sans-serif" fontSize="5.5" fill="#fff" textAnchor="middle">🗑</text>
                {/* Home bar */}
                <rect x="30" y="169" width="30" height="2.5" rx="1.25" fill="rgba(255,255,255,0.4)"/>
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
            <div className="mini-preview" style={{ background: '#111', padding: '0', overflow: 'hidden', borderRadius: '6px' }}>
              <svg viewBox="0 0 200 130" width="100%" xmlns="http://www.w3.org/2000/svg">
                {/* Background dark */}
                <rect width="200" height="130" fill="#1a1714"/>
                {/* Navbar */}
                <rect width="200" height="18" fill="#111"/>
                <circle cx="9" cy="9" r="3" fill="#333"/>
                <text x="14" y="12.5" fontFamily="sans-serif" fontSize="5" fontWeight="bold" fill="#f5c518">Barber Shop</text>
                <text x="105" y="12.5" fontFamily="sans-serif" fontSize="4.5" fill="#ccc" textAnchor="middle">Início</text>
                <text x="130" y="12.5" fontFamily="sans-serif" fontSize="4.5" fill="#ccc" textAnchor="middle">Serviços</text>
                <text x="156" y="12.5" fontFamily="sans-serif" fontSize="4.5" fill="#ccc" textAnchor="middle">Agendar</text>
                <text x="182" y="12.5" fontFamily="sans-serif" fontSize="4.5" fill="#ccc" textAnchor="middle">Contacto</text>
                {/* Hero overlay dark */}
                <rect y="18" width="200" height="112" fill="rgba(0,0,0,0.65)"/>
                {/* Barber tools silhouette hints */}
                <ellipse cx="160" cy="80" rx="28" ry="28" fill="rgba(255,255,255,0.04)"/>
                <ellipse cx="40" cy="100" rx="22" ry="15" fill="rgba(255,255,255,0.04)"/>
                {/* Center badge circle */}
                <circle cx="100" cy="62" r="18" fill="rgba(150,150,150,0.3)"/>
                <text x="100" y="65" fontFamily="sans-serif" fontSize="6" fill="#f5c518" textAnchor="middle" fontStyle="italic">Barber Shop</text>
                {/* Main title */}
                <text x="100" y="86" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#fff" textAnchor="middle">Barber</text>
                <text x="142" y="86" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#f5c518" textAnchor="start"> Shop</text>
                {/* Subtitle */}
                <text x="100" y="98" fontFamily="sans-serif" fontSize="5.5" fill="#ccc" textAnchor="middle">Estilo e qualidade para o homem moderno</text>
                {/* CTA button */}
                <rect x="66" y="104" width="68" height="16" rx="8" fill="#f5c518"/>
                <text x="100" y="115.5" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#111" textAnchor="middle">Agendar Horário</text>
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
