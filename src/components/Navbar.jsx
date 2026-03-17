import { useEffect, useState } from 'react'

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">Talles<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggleDark}
            aria-label={darkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu">
          <a href="#about" onClick={close}>Sobre</a>
          <a href="#projects" onClick={close}>Projetos</a>
          <a href="#experience" onClick={close}>Experiência</a>
          <a href="#contact" onClick={close}>Contacto</a>
        </div>
      )}
    </>
  )
}
