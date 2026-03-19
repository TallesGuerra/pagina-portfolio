import { useEffect, useState } from 'react'
import t from '../i18n'

export default function Navbar({ lang, toggleLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const tr = t[lang].nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo"><span className="logo-light">Talles</span><span className="logo-guerra">Guerra</span></a>
        <ul className="nav-links">
          <li><a href="#about">{tr.about}</a></li>
          <li><a href="#projects">{tr.projects}</a></li>
          <li><a href="#experience">{tr.experience}</a></li>
          <li><a href="#contact">{tr.contact}</a></li>
        </ul>
        <div className="nav-right">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
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
          <a href="#about" onClick={close}>{tr.about}</a>
          <a href="#projects" onClick={close}>{tr.projects}</a>
          <a href="#experience" onClick={close}>{tr.experience}</a>
          <a href="#contact" onClick={close}>{tr.contact}</a>
        </div>
      )}
    </>
  )
}
