import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    try {
      const res = await fetch('https://formspree.io/f/mlgpobvj', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        setError(true)
        setTimeout(() => setError(false), 4000)
      }
    } catch {
      setError(true)
      setTimeout(() => setError(false), 4000)
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label"><span>04</span> · Contacto</div>
        <h2 className="section-title reveal">Vamos <em>conversar?</em></h2>
        <div className="contact-grid">
          <div className="reveal">
            <p>Estou aberto a oportunidades como Dev Mobile Android — estágio, júnior, ou projetos freelance. Preenche o formulário ou fala comigo diretamente.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nome</label>
                  <input type="text" name="nome" className="form-input" placeholder="O teu nome" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-input" placeholder="email@exemplo.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Assunto</label>
                <input type="text" name="assunto" className="form-input" placeholder="Oportunidade, projeto, colaboração..." />
              </div>
              <div className="form-group">
                <label className="form-label">Mensagem</label>
                <textarea name="mensagem" className="form-textarea" placeholder="Conta-me mais sobre o que tens em mente..." required />
              </div>
              <button
                type="submit"
                className="form-submit"
                disabled={submitted}
                style={submitted ? { background: 'var(--accent3)' } : error ? { background: '#e05c5c' } : {}}
              >
                {submitted ? 'Mensagem enviada ✓' : error ? 'Erro ao enviar. Tenta novamente.' : (
                  <>
                    Enviar mensagem{' '}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
          <div className="reveal">
            <div className="contact-links-col">
              <a href="https://www.linkedin.com/in/talles-guerra/" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <div className="contact-value">linkedin.com/in/talles-guerra</div>
                </div>
              </a>
              <a href="https://github.com/TallesGuerra" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">GitHub</div>
                  <div className="contact-value">github.com/TallesGuerra</div>
                </div>
              </a>
            </div>
            <div className="contact-note">
              <p>Respondo normalmente em menos de 24h. Se fores recruiter, podes enviar a descrição da vaga diretamente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
