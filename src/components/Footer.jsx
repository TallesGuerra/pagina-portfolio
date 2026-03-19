import t from '../i18n'

export default function Footer({ lang }) {
  const tr = t[lang].footer

  return (
    <footer>
      <p>© 2026 <a href="#">Talles Guerra</a> — {tr.tagline}</p>
    </footer>
  )
}
