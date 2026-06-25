import { personal, experiences, education, skillGroups, courses, cvSummary, cvProjects } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import type { Bilingual } from "../lib/LanguageContext";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useAtsPdf } from "../lib/useAtsPdf";

const base = import.meta.env.BASE_URL;
const PDF_URLS = { pt: `${base}cv/Isaac-Nathan-CV-PT.pdf`, en: `${base}cv/Isaac-Nathan-CV-EN.pdf` };

export default function CV() {
  const { t, lang } = useLang();
  const tB = (b: Bilingual | string) => t(b);
  const downloadAtsPdf = useAtsPdf(lang);

  return (
    <div className="cv-page">
      <div className="cv-sheet">
        <div className="cv-actions">
          <Link to="/contact" className="cv-btn">
            <ArrowLeft className="w-4 h-4" />
            {t({ pt: "Voltar", en: "Back" })}
          </Link>
          <div className="cv-actions-right">
            <a href={PDF_URLS[lang]} download className="cv-btn cv-btn-filled">
              <Download className="w-4 h-4" />
              {t({ pt: "Baixar CV (.pdf)", en: "Download CV (.pdf)" })}
            </a>
            <button onClick={downloadAtsPdf} className="cv-btn">
              <FileText className="w-4 h-4" />
              {t({ pt: "ATS (.txt)", en: "ATS (.txt)" })}
            </button>
          </div>
        </div>

        <p className="cv-ats-note">
          {t({
            pt: "O PDF contém o currículo formatado para leitura humana. O .txt é otimizado para sistemas ATS — sem formatação, sem tabelas, texto limpo.",
            en: "The PDF contains the formatted resume for human reading. The .txt is optimized for ATS systems — no formatting, no tables, clean text.",
          })}
        </p>

        <h1 className="cv-name">{personal.fullName}</h1>
        <p className="cv-title">{t(personal.title)} — {t(personal.subtitle)}</p>
        <p className="cv-pcd">{t(personal.pcd)}</p>

        <div className="cv-contact">
          <span>{personal.email}</span>
          <span>{personal.phone}</span>
          <span>{t(personal.location)}</span>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/isaac-nathan</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">github.com/xAngryBadger</a>
          <a href={personal.portfolio} target="_blank" rel="noopener noreferrer">xangrybadger.github.io/isaac-vitae</a>
        </div>

        <hr className="cv-rule" />

        <section className="cv-section">
          <h2 className="cv-heading">{t({ pt: "Resumo", en: "Summary" })}</h2>
          <p className="cv-body">{cvSummary[lang]}</p>
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
        <h2 className="cv-heading">{t({ pt: "Projetos de Engenharia", en: "Engineering Projects" })}</h2>
        {cvProjects.map((proj, i) => (
          <div key={i} className="cv-entry">
            <div className="cv-entry-header">
              <div>
                <h3 className="cv-entry-title">
                  {proj.name}
                  {proj.url && (
                    <a href={`https://${proj.url}`} target="_blank" rel="noopener noreferrer" className="cv-project-url">
                      {proj.url}
                    </a>
                  )}
                </h3>
              </div>
            </div>
            <ul className="cv-list">
              {proj.bullets.map((b, bi) => (
                <li key={bi}>{tB(b)}</li>
              ))}
            </ul>
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
        <h2 className="cv-heading">{t({ pt: "Stack Principal", en: "Core Stack" })}</h2>
        {skillGroups.map((g, i) => (
          <div key={i} className="cv-skill-group">
            <span className="cv-skill-label">{typeof g.label === "string" ? g.label : tB(g.label)}</span>
            <div className="cv-skill-content">
              <span className="cv-skill-items">{g.skills.map((s) => (typeof s === "string" ? s : tB(s))).join(" · ")}</span>
              <span className="cv-skill-proof">{tB(g.storyProof)}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2 className="cv-heading">{t({ pt: "Certificações", en: "Certifications" })}</h2>
        <ul className="cv-list">
          {courses.map((c, i) => (
            <li key={i}>
              <strong>{tB(c.name)}</strong> — {tB(c.issuer)}{c.hours ? ` (${typeof c.hours === "string" ? c.hours : tB(c.hours)})` : ""}
              {c.context && <em className="cv-cert-context"> {tB(c.context)}</em>}
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
  border: 1.5px solid #b0a898;
  color: #1e2a20;
  transition: box-shadow 0.3s, border-color 0.3s;
}
  .cv-sheet {
background: #1a1a1a !important;
box-shadow: 0 4px 48px rgba(0,0,0,0.4);
border-color: #2a2a2a;
color: #e5e5e5;
}
.cv-name { color: #fafafa !important; }
.cv-heading { color: #fafafa !important; border-bottom-color: #333 !important; }
.cv-title { color: #cccccc !important; }
.cv-pcd { color: #b0b0b0 !important; }
.cv-contact, .cv-contact a { color: #cccccc !important; }
.cv-body, .cv-list, .cv-skill-items { color: #cccccc !important; }
.cv-entry-title { color: #fafafa !important; }
.cv-entry-org { color: #cccccc !important; }
.cv-entry-date, .cv-tech, .cv-skill-proof, .cv-cert-context { color: #b0b0b0 !important; }
.cv-status { color: #b0b0b0 !important; border-color: #333 !important; }
.cv-rule { border-top-color: #555 !important; }
.cv-ats-note { background: #111 !important; border-color: #2a2a2a !important; color: #cccccc !important; }
.cv-btn { border-color: #2a2a2a !important; color: #e5e5e5 !important; background: transparent !important; }
.cv-btn:hover { border-color: #e5e5e5 !important; }
.cv-btn-filled { background: rgba(255,255,255,0.12) !important; color: #fafafa !important; border-color: rgba(255,255,255,0.2) !important; }
.cv-btn-filled:hover { background: rgba(255,255,255,0.18) !important; color: #fafafa !important; }
  .cv-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .cv-actions-right {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
        .cv-ats-note {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.05em;
          color: var(--color-text-3);
          margin-bottom: 2rem;
          padding: 0.6rem 1rem;
          border: 1px dashed var(--color-border);
          background: var(--color-bg);
          line-height: 1.5;
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
          border-color: var(--color-text-2);
          color: var(--color-text-2);
        }
.cv-btn-filled {
background: var(--color-text-2);
color: var(--color-bg);
border-color: var(--color-text-2);
}
.cv-btn-filled:hover {
color: var(--color-bg);
}
        .cv-name {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--color-text);
          margin: 0 0 0.25rem;
          line-height: 1.2;
        }
.cv-title {
  font-family: var(--font-serif);
  font-size: 0.64rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3d4f41;
  margin: 0 0 0.25rem;
}
.cv-pcd {
  font-family: var(--font-mono);
  font-size: 0.56rem;
  color: #4a5c4e;
  margin: 0 0 1rem;
}
.cv-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.56rem;
  color: #3d4f41;
  margin-bottom: 1rem;
}
.cv-contact a {
  color: #3d4f41;
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
        }
        .cv-heading {
          font-family: var(--font-serif);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-text);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.35rem;
          margin-bottom: 0.75rem;
        }
        .cv-body {
          font-size: 0.68rem;
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
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--color-text);
          margin: 0;
        }
        .cv-entry-org {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-text-2);
          margin: 0;
        }
.cv-entry-date {
  font-family: var(--font-mono);
  font-size: 0.56rem;
  color: #4a5c4e;
  white-space: nowrap;
}
.cv-status {
  font-family: var(--font-mono);
  font-size: 0.52rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #4a5c4e;
  border: 1px solid #b0a898;
  padding: 0.1rem 0.4rem;
  display: inline-block;
  margin-top: 0.15rem;
}
        .cv-status[data-active="true"] {
          color: var(--color-text-2);
          border-color: color-mix(in srgb, var(--color-text-2) 70%, transparent);
        }
        .cv-list {
          list-style: disc;
          margin: 0;
          padding-left: 1.25rem;
          font-size: 0.68rem;
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
  font-size: 0.56rem;
  color: #4a5c4e;
  letter-spacing: 0.02em;
  margin: 0;
}
  .cv-project-url {
    font-family: var(--font-mono);
    font-size: 0.56rem;
    font-weight: 400;
    color: var(--color-text-2);
    text-decoration: none;
    margin-left: 0.5rem;
  }
  .cv-project-url:hover {
    text-decoration: underline;
  }
  .cv-skill-group {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.6rem;
    font-size: 0.68rem;
    line-height: 1.5;
  }
  .cv-skill-label {
    font-family: var(--font-mono);
    font-size: 0.56rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-2);
    white-space: nowrap;
  }
  .cv-skill-content {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }
  .cv-skill-items {
    color: var(--color-text-2);
  }
.cv-skill-proof {
  font-size: 0.6rem;
  font-style: italic;
  color: #4a5c4e;
}
.cv-cert-context {
  color: #4a5c4e;
  font-size: 0.64rem;
}

        @media (max-width: 640px) {
          .cv-sheet { padding: 1.5rem; }
          .cv-contact { flex-direction: column; gap: 0.35rem; }
          .cv-entry-header { flex-direction: column; gap: 0.15rem; }
    .cv-skill-group { flex-direction: column; gap: 0.1rem; }
    .cv-skill-label { min-width: unset; }
    .cv-actions-right { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
