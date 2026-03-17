# Talles Guerra — Portfolio

Portfolio pessoal de Talles Guerra, Dev Mobile Android baseado em Lisboa, Portugal.

**[🔗 Ver online](https://tallesguerra.github.io/pagina-portfolio)** <!-- substitui pelo teu URL real -->

---

## Sobre

Site construído com **React + Vite**, apresentando projetos, experiência e contacto. Design com tema creme/tinta, tipografia editorial e animações suaves no scroll.

## Stack

- **React 19** + **Vite 8**
- CSS puro com custom properties (sem framework)
- Fontes: Fraunces · DM Mono · DM Sans (Google Fonts)

## Estrutura

```
src/
├── App.jsx
├── index.css
└── components/
    ├── Cursor.jsx
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Projects.jsx
    ├── Experience.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## Correr localmente

```bash
npm install
npm run dev
```

Build para produção:

```bash
npm run build
```

## Personalizar

| O que alterar | Ficheiro |
|---|---|
| Nome, título, descrição | `src/components/Hero.jsx` |
| Texto sobre mim | `src/components/About.jsx` |
| Skills | array `skillCategories` em `About.jsx` |
| Projetos | `src/components/Projects.jsx` |
| Experiência | array `items` em `Experience.jsx` |
| Links sociais | `src/components/Contact.jsx` |
| Cores / fontes | variáveis `:root` em `src/index.css` |

## Projetos em destaque

- **Pocket Finances** — App Android de controlo financeiro (Kotlin · Jetpack Compose · MVVM · Room)
- **Lista de Tarefas** — Gestão de tarefas com estado reativo ([GitHub](https://github.com/TallesGuerra/ListaDeTarefas))
- **Barbearia Cruz** — Sistema de agendamento para cliente real ([Live](https://barbearia-cruz.vercel.app))
- **Quiz App** — Quiz Android com navegação entre ecrãs (Kotlin · Compose)

## Licença

MIT — podes usar à vontade.
