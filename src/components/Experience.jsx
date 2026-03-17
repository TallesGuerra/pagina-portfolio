const items = [
  {
    date: '2026\natual',
    role: 'Developer Voluntário',
    company: 'Pipoca Ágil',
    desc: 'Projeto colaborativo onde aplico Scrum na prática. Sprints reais, cerimônias ágeis e entrega de valor num time multidisciplinar.',
    tags: ['Scrum', 'Android Dev', 'Kotlin', 'Trabalho em equipe'],
  },
  {
    date: '2025',
    role: 'Freelance Developer',
    company: 'Barbearia Cruz · Portugal',
    desc: 'Primeiro projeto para cliente real. Da proposta comercial ao deploy, com integração Google Calendar e suporte pós-lançamento.',
    tags: ['JavaScript', 'Google Calendar API', 'Vercel', 'Freelance'],
  },
  {
    date: '2024\n2025',
    role: 'Desenvolvimento Pessoal',
    company: 'Projetos de Portfólio · Android',
    desc: 'Construção de apps Android focados em Jetpack Compose, MVVM + Clean Architecture, Room Database e Coroutines.',
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Room'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label"><span>03</span> · Experiência</div>
        <h2 className="section-title reveal">A minha <em>trajetória</em></h2>
        <div className="timeline reveal">
          {items.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-date" style={{ whiteSpace: 'pre-line' }}>{item.date}</div>
              <div className="timeline-body">
                <div className="timeline-dot" />
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-company">{item.company}</div>
                <div className="timeline-desc">{item.desc}</div>
                <div className="timeline-tags">
                  {item.tags.map(t => <span key={t} className="timeline-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
