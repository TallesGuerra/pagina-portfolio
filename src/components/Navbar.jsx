import { useEffect, useState } from 'react'

export default function Navbar() {
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
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
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
