import { useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'pt'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = `${i * 0.06}s`
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const toggleLang = () => setLang(l => l === 'pt' ? 'en' : 'pt')

  return (
    <>
      <Cursor />
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
