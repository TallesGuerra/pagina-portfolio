import t from "../i18n";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects({ lang }) {
  const tr = t[lang].projects;

  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">
          <span>02</span> · {tr.label}
        </div>
        <h2 className="section-title reveal">
          {tr.title}
          <em>{tr.titleEm}</em>
        </h2>

        {/* 01 — Pocket Finance: full row featured */}
        <div className="project-featured reveal">
          <div className="project-featured-body">
            <div className="project-badge badge-featured">{tr.badge}</div>
            <div className="project-num">01 ——</div>
            <div
              className="project-name"
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: "1.55rem",
                marginBottom: ".7rem",
              }}
            >
              {tr.items[0].name}
            </div>
            <div className="project-desc" style={{ maxWidth: 400 }}>
              {tr.items[0].desc}
            </div>
            <div className="project-tech" style={{ marginBottom: "1.4rem" }}>
              {[
                "Kotlin",
                "Jetpack Compose",
                "MVVM",
                "Clean Architecture",
                "Coroutines",
                "StateFlow",
                "Room",
              ].map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href="https://github.com/TallesGuerra"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <GitHubIcon /> {tr.githubBtn}
              </a>
            </div>
          </div>
          <div className="project-featured-preview">
            <img
              src={`${import.meta.env.BASE_URL}financas-preview.png`}
              alt="Pocket Finances preview"
              className="phone-mockup"
              style={{ width: "160px", height: "auto" }}
            />
          </div>
        </div>

        {/* 02 — Barber Shop: full row */}
        <div className="project-featured project-featured-barber reveal">
          <div className="project-featured-body">
            {/*     <div className="project-badge badge-client">{tr.badgeClient}</div> */}
            <div className="project-num">02 ——</div>
            <div
              className="project-name"
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: "1.55rem",
                marginBottom: ".7rem",
              }}
            >
              {tr.items[2].name}
            </div>
            <div className="project-desc" style={{ maxWidth: 400 }}>
              {tr.items[2].desc}
            </div>
            <div className="project-tech" style={{ marginBottom: "1.4rem" }}>
              {[
                "React",
                "Vite",
                "Express",
                "Google Calendar API",
                "Vercel",
              ].map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href="https://barbearia-cruz.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <ExternalIcon /> {tr.liveBtn}
              </a>
            </div>
          </div>
          <div className="project-featured-preview project-featured-preview-barber">
            <img
              src={`${import.meta.env.BASE_URL}barbearia-preview.png`}
              alt="Barber Shop preview"
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "6px",
                boxShadow: "0 16px 40px rgba(26,23,20,.15)",
              }}
            />
          </div>
        </div>

        {/* 03 & 04 — Quiz + ToDoList */}
        <div className="projects-duo reveal">
          {/* Quiz App */}
          <div className="project-duo-card">
            <div style={{ width: "100%" }}>
              <div className="project-badge badge-wip">{tr.badgeWip}</div>
              <div className="project-num">03 ——</div>
              <div className="project-name">{tr.items[3].name}</div>
            </div>
            <div className="project-duo-preview">
              <img
                src={`${import.meta.env.BASE_URL}quiz-phone.svg`}
                alt="Quiz App preview"
                className="phone-mockup"
                style={{ width: "130px" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div className="project-desc">{tr.items[3].desc}</div>
              <div className="project-tech">
                {["Kotlin", "Jetpack Compose", "Android SDK"].map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/TallesGuerra/DevQuiz"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <GitHubIcon /> {tr.githubShort}
                </a>
              </div>
            </div>
          </div>

          {/* To Do List */}
          <div className="project-duo-card">
            <div style={{ width: "100%" }}>
              <div className="project-num">04 ——</div>
              <div className="project-name">{tr.items[1].name}</div>
            </div>
            <div className="project-duo-preview">
              <img
                src={`${import.meta.env.BASE_URL}todolist-phone.svg`}
                alt="To-Do List preview"
                className="phone-mockup"
                style={{ width: "130px" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div className="project-desc">{tr.items[1].desc}</div>
              <div className="project-tech">
                {["Kotlin", "Jetpack Compose", "Material 3"].map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/TallesGuerra/ListaDeTarefas"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <GitHubIcon /> {tr.githubShort}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 05 & 06 — Github Search + EletricCar */}
        <div className="projects-duo projects-duo-bottom reveal">
          {/* Github Search */}
          <div className="project-duo-card">
            <div style={{ width: "100%" }}>
              <div className="project-num">05 ——</div>
              <div className="project-name">{tr.items[4].name}</div>
            </div>
            <div className="project-duo-preview">
              <img
                src={`${import.meta.env.BASE_URL}github-search-preview.svg`}
                alt="Github Search preview"
                className="phone-mockup"
                style={{ width: "130px" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div className="project-desc">{tr.items[4].desc}</div>
              <div className="project-tech">
                {[
                  "Kotlin",
                  "Retrofit",
                  "Coroutines",
                  "GitHub API",
                  "SharedPreferences",
                ].map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/TallesGuerra/Github-search"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <GitHubIcon /> {tr.githubShort}
                </a>
              </div>
            </div>
          </div>

          {/* TaskHabit */}
          <div className="project-duo-card">
            <div style={{ width: "100%" }}>
              <div className="project-num">06 ——</div>
              <div className="project-name">{tr.items[5].name}</div>
            </div>
            <div className="project-duo-preview">
              <img
                src={`${import.meta.env.BASE_URL}taskhabit-preview.svg`}
                alt="TaskHabit preview"
                className="phone-mockup"
                style={{ width: "130px" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div className="project-desc">{tr.items[5].desc}</div>
              <div className="project-tech">
                {["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Room", "WorkManager"].map(
                  (t) => (
                    <span key={t} className="tech-chip">
                      {t}
                    </span>
                  ),
                )}
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/TallesGuerra/TaskHabit"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <GitHubIcon /> {tr.githubShort}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
