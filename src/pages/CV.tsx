import { personal, experiences, education, skillGroups, courses, projects } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import type { Bilingual } from "../lib/LanguageContext";
import { FileDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const cvContent = {
  summary: {
    pt: "Engenheiro de Computação em formação com experiência prática em IA Generativa, Cloud Azure e desenvolvimento Full-Stack. Construiu pipelines agentic com 7+ modelos de IA, migrou bancos de dados em larga escala para Azure Cosmos DB e entregou aplicações offline-first para campo. Foco em automação inteligente e integração de LLMs em fluxos de trabalho reais.",
    en: "Computer Engineering student with hands-on experience in Generative AI, Azure Cloud, and Full-Stack development. Built agentic pipelines with 7+ AI models, migrated large-scale databases to Azure Cosmos DB, and delivered offline-first field applications. Focused on intelligent automation and integrating LLMs into real-world workflows.",
  },
  projects: [
    {
      name: "HarpIA",
      pt: "Motor de automação criativa com 7+ modelos de IA. Pipeline agentic autônomo com GPT-4.1 tool calling, geração de imagens (DALL-E 3, Flux), vídeo (Sora, Veo) e composição PIL zero-cost. 6.900+ LOC Python async com testes de segurança.",
      en: "Creative automation engine with 7+ AI models. Autonomous agentic pipeline with GPT-4.1 tool calling, image generation (DALL-E 3, Flux), video (Sora, Veo), and zero-cost PIL compositing. 6,900+ LOC async Python with security tests.",
      tech: ["Python", "GPT-4.1", "DALL-E 3", "Flux 2.0 Pro", "Sora", "Veo 3.1", "Azure Cosmos DB", "SQLite"],
    },
    {
      name: "Flora Sensus",
      pt: "App Flutter offline-first para inventário florestal com motor de sincronização custom, UUID remapping, rollback atômico e painel admin React. 24.659+ LOC em 4 subsistemas.",
      en: "Flutter offline-first app for forest inventory with custom sync engine, UUID remapping, atomic rollback, and React admin panel. 24,659+ LOC across 4 subsystems.",
      tech: ["Flutter", "Dart", "Drift/SQLite", "React", "PocketBase", "TypeScript"],
    },
    {
      name: "SRF System",
      pt: "Motor de planejamento operacional para restauração florestal. Geração automática de dossiês executivos com alocação de equipes, territórios e cronogramas. Interface NiceGUI + CLI Rich.",
      en: "Operational planning engine for forest restoration. Automatic generation of executive dossiers with crew allocation, territory mapping, and schedules. NiceGUI + Rich CLI interface.",
      tech: ["Python", "NiceGUI", "Rich CLI", "openpyxl", "Pandas"],
    },
    {
      name: "Fennec Excel",
      pt: "Assistente de IA local para Excel via Ollama/qwen2.5 com agente ReAct. Comando de voz em linguagem natural para filtrar, ordenar e manipular planilhas. Checkpoint automático antes de cada alteração.",
      en: "Local AI assistant for Excel via Ollama/qwen2.5 with ReAct agent. Natural language commands to filter, sort, and manipulate spreadsheets. Auto-checkpoint before every change.",
      tech: ["Python", "Ollama", "CustomTkinter", "xlwings", "PyInstaller"],
    },
  ],
};

export default function CV() {
  const { t, lang } = useLang();
  const tB = (b: Bilingual | string) => t(b);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="cv-page">
      <div className="cv-sheet">
        <div className="cv-actions print:hidden">
          <Link to="/contact" className="cv-btn">
            <ArrowLeft className="w-4 h-4" />
            {t({ pt: "Voltar", en: "Back" })}
          </Link>
          <button onClick={() => window.print()} className="cv-btn cv-btn-filled">
            <FileDown className="w-4 h-4" />
            {t({ pt: "Salvar PDF", en: "Save PDF" })}
          </button>
        </div>

        <h1 className="cv-name">{personal.fullName}</h1>
        <p className="cv-title">{t(personal.title)} — {t(personal.subtitle)}</p>

        <div className="cv-contact">
          <span>{personal.email}</span>
          <span>{personal.phone}</span>
          <span>{t(personal.location)}</span>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/isaac-nathan</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">github.com/xAngryBadger</a>
        </div>

        <hr className="cv-rule" />

        <section className="cv-section">
          <h2 className="cv-heading">{t({ pt: "Resumo", en: "Summary" })}</h2>
          <p className="cv-body">{cvContent.summary[lang]}</p>
        </section>

        <section className="cv-section">
          <h2 className="cv-heading">{t({ pt: "Experiência Profissional", en: "Professional Experience" })}</h2>
          {experiences.map((exp, i) => (
            <div key={i} className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">{tB(exp.role)}</h3>
                  <p className="cv-entry-org">{exp.company}</p>
                </div>
                <span className="cv-entry-date">{tB(exp.period)}</span>
              </div>
              <ul className="cv-list">
                {exp.highlights.map((h, hi) => (
                  <li key={hi}>{tB(h)}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-heading">{t({ pt: "Projetos de Destaque", en: "Key Projects" })}</h2>
          {cvContent.projects.map((proj, i) => (
            <div key={i} className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">{proj.name}</h3>
                </div>
                {featuredProjects.find((p) => p.id === proj.name.toLowerCase().replace(/\s+/g, "-")) && (
                  <span className="cv-entry-date">
                    {featuredProjects.find((p) => p.id === proj.name.toLowerCase().replace(/\s+/g, "-"))?.year}
                  </span>
                )}
              </div>
              <p className="cv-body" style={{ marginBottom: "0.25rem" }}>{proj[lang]}</p>
              <p className="cv-tech">{proj.tech.join(" · ")}</p>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-heading">{t({ pt: "Educação", en: "Education" })}</h2>
          {education.map((edu, i) => (
            <div key={i} className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <h3 className="cv-entry-title">{tB(edu.degree)}</h3>
                  <p className="cv-entry-org">{edu.institution}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="cv-entry-date">{edu.period}</span>
                  <br />
                  <span className="cv-status" data-active={edu.statusActive}>{tB(edu.status)}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-heading">{t({ pt: "Habilidades", en: "Skills" })}</h2>
          {skillGroups.map((g, i) => (
            <div key={i} className="cv-skill-group">
              <span className="cv-skill-label">{typeof g.label === "string" ? g.label : tB(g.label)}</span>
              <span className="cv-skill-items">{g.skills.map((s) => (typeof s === "string" ? s : tB(s))).join(" · ")}</span>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-heading">{t({ pt: "Certificações", en: "Certifications" })}</h2>
          <ul className="cv-list">
            {courses.map((c, i) => (
              <li key={i}>
                <strong>{tB(c.name)}</strong> — {tB(c.issuer)}{c.hours ? ` (${typeof c.hours === "string" ? c.hours : tB(c.hours)})` : ""}
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section">
          <h2 className="cv-heading">{t({ pt: "Idiomas", en: "Languages" })}</h2>
          <ul className="cv-list">
            <li>{t({ pt: "Português — Nativo", en: "Portuguese — Native" })}</li>
            <li>{t({ pt: "Inglês — Fluente (KUMON, 3 anos)", en: "English — Fluent (KUMON, 3 years)" })}</li>
          </ul>
        </section>
      </div>

      <style>{`
        .cv-page {
          min-height: 100vh;
          padding: 2rem 1rem;
          background: var(--color-bg);
        }
        .cv-sheet {
          max-width: 52rem;
          margin: 0 auto;
          background: #fffdf3;
          padding: 3rem;
          border: 1px solid var(--color-border);
        }
        .cv-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid var(--color-border);
          color: var(--color-text-2);
          background: transparent;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        .cv-btn:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        .cv-btn-filled {
          background: var(--color-accent);
          color: #fff;
          border-color: var(--color-accent);
        }
        .cv-btn-filled:hover {
          opacity: 0.9;
          color: #fff;
        }
        .cv-name {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-text);
          margin: 0 0 0.25rem;
          line-height: 1.2;
        }
        .cv-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin: 0 0 1rem;
        }
        .cv-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-text-2);
          margin-bottom: 1rem;
        }
        .cv-contact a {
          color: var(--color-accent);
          text-decoration: none;
        }
        .cv-contact a:hover {
          text-decoration: underline;
        }
        .cv-rule {
          border: none;
          border-top: 2px solid var(--color-accent);
          margin: 0 0 1.5rem;
        }
        .cv-section {
          margin-bottom: 1.5rem;
          page-break-inside: avoid;
        }
        .cv-heading {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.35rem;
          margin-bottom: 0.75rem;
        }
        .cv-body {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--color-text-2);
          margin: 0;
        }
        .cv-entry {
          margin-bottom: 1rem;
        }
        .cv-entry:last-child {
          margin-bottom: 0;
        }
        .cv-entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }
        .cv-entry-title {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text);
          margin: 0;
        }
        .cv-entry-org {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-accent);
          margin: 0;
        }
        .cv-entry-date {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-text-3);
          white-space: nowrap;
        }
        .cv-status {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-text-3);
          border: 1px solid var(--color-border);
          padding: 0.1rem 0.4rem;
          display: inline-block;
          margin-top: 0.15rem;
        }
        .cv-status[data-active="true"] {
          color: var(--color-accent);
          border-color: var(--color-accent-30);
        }
        .cv-list {
          list-style: disc;
          margin: 0;
          padding-left: 1.25rem;
          font-size: 0.85rem;
          line-height: 1.7;
          color: var(--color-text-2);
        }
        .cv-list li {
          margin-bottom: 0.2rem;
        }
        .cv-list strong {
          color: var(--color-text);
          font-weight: 600;
        }
        .cv-tech {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-text-3);
          letter-spacing: 0.02em;
          margin: 0;
        }
        .cv-skill-group {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.4rem;
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .cv-skill-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-accent);
          white-space: nowrap;
          min-width: 6rem;
          padding-top: 0.1rem;
        }
        .cv-skill-items {
          color: var(--color-text-2);
        }

        @media print {
          body { background: #fff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .cv-page { padding: 0 !important; background: #fff !important; }
          .cv-sheet { border: none !important; padding: 0 !important; max-width: 100% !important; background: #fff !important; }
          .cv-actions { display: none !important; }
          .cv-name { font-size: 1.5rem; }
          .cv-contact a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.6rem; color: #8a9b8e; }
          @page { size: A4; margin: 1.5cm; }
        }

        @media (max-width: 640px) {
          .cv-sheet { padding: 1.5rem; }
          .cv-contact { flex-direction: column; gap: 0.35rem; }
          .cv-entry-header { flex-direction: column; gap: 0.15rem; }
          .cv-skill-group { flex-direction: column; gap: 0.1rem; }
          .cv-skill-label { min-width: unset; }
        }
      `}</style>
    </div>
  );
}
