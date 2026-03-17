const skillCategories = [
  {
    name: 'Core Android',
    tags: [
      { label: 'Kotlin', highlight: true },
      { label: 'Jetpack Compose', highlight: true },
      { label: 'Android SDK' },
      { label: 'Material Design 3' },
      { label: 'Navigation Compose' },
    ],
  },
  {
    name: 'Arquitetura',
    tags: [
      { label: 'MVVM', highlight: true },
      { label: 'Clean Architecture' },
      { label: 'StateFlow' },
      { label: 'ViewModel' },
      { label: 'Use Cases' },
      { label: 'Coroutines' },
    ],
  },
  {
    name: 'Dados & Armazenamento',
    tags: [
      { label: 'Room Database' },
      { label: 'Repository Pattern' },
      { label: 'DAO' },
    ],
  },
  {
    name: 'Workflow',
    tags: [
      { label: 'Android Studio' },
      { label: 'Git / GitHub' },
      { label: 'Scrum' },
      { label: 'Claude Code', highlight: true },
    ],
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label"><span>01</span> · Sobre mim</div>
        <h2 className="section-title reveal">
          Quem está por<br />trás <em>do código</em>
        </h2>
        <div className="about-grid">
          <div className="reveal">
            <div className="about-text">
              <p>Sou o <strong>Talles Guerra</strong>, desenvolvedor mobile Android baseado em Portugal. O meu foco é o ecossistema <strong>Kotlin + Jetpack Compose</strong>, com arquitetura limpa e código que escala.</p>
              <p>Já entreguei apps funcionais com <strong>MVVM, Clean Architecture e Room Database</strong>, e o meu primeiro projeto freelance — um sistema de agendamento para uma barbearia em Portugal — está em produção.</p>
              <p>Atualmente integro o time da <strong>Pipoca Ágil</strong>, onde aplico Scrum num projeto colaborativo e aprendo como equipas de produto reais funcionam.</p>
            </div>
            <div className="about-philosophy">
              <p>"Código bom não é só o que funciona — é o que outro dev consegue entender amanhã."</p>
            </div>
          </div>
          <div className="skills-block reveal">
            {skillCategories.map((cat) => (
              <div key={cat.name} className="skill-category">
                <div className="skill-cat-name">{cat.name}</div>
                <div className="skill-tags">
                  {cat.tags.map((tag) => (
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
