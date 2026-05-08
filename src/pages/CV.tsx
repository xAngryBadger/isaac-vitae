import { personal, experiences, education, skillGroups, courses, projects } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import type { Bilingual } from "../lib/LanguageContext";
import { FileDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CV() {
  const { t } = useLang();

  const tB = (b: Bilingual | string) => t(b);

  const featuredProjects = projects.filter((p) => p.featured);

  const handlePrint = () => window.print();

  return (
    <div className="section-root" style={{ background: "#fffdf3" }}>
      <div className="section-container max-w-4xl">
        <div className="flex items-center justify-between mb-12 print:mb-6">
          <Link
            to="/contact"
            className="clip-btn print:hidden"
            style={{ textDecoration: "none" }}
          >
            <ArrowLeft className="w-4 h-4" />
            {t({ pt: "Voltar", en: "Back" })}
          </Link>
          <button onClick={handlePrint} className="clip-btn-filled print:hidden">
            <FileDown className="w-4 h-4" />
            {t({ pt: "Salvar PDF", en: "Save PDF" })}
          </button>
        </div>

        <header className="mb-10 pb-8" style={{ borderBottom: "2px solid var(--color-accent)" }}>
          <h1
            className="font-serif font-bold mb-2"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--color-text)" }}
          >
            {personal.fullName}
          </h1>
          <p className="font-mono text-sm tracking-wider uppercase mb-4" style={{ color: "var(--color-accent)" }}>
            {t(personal.title)} · {t(personal.subtitle)}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs" style={{ color: "var(--color-text-2)" }}>
            <span>{personal.email}</span>
            <span>{personal.phone}</span>
            <span>{t(personal.location)}</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline"
              style={{ color: "var(--color-accent)", textDecoration: "none" }}
            >
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline"
              style={{ color: "var(--color-accent)", textDecoration: "none" }}
            >
              GitHub
            </a>
          </div>
        </header>

        <section className="cv-section mb-8">
          <h2 className="font-serif font-bold text-lg mb-4 pb-2" style={{ color: "var(--color-text)", borderBottom: "1px solid var(--color-border)" }}>
            {t({ pt: "Resumo Profissional", en: "Professional Summary" })}
          </h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-text-2)" }}>
            {t(personal.bio)} {t(personal.bioExtended)}
          </p>
          <ul className="space-y-1.5">
            {personal.bioHighlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--color-text-2)" }}>
                <span style={{ color: "var(--color-accent)" }}>•</span>
                <span>{tB(h)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section mb-8">
          <h2 className="font-serif font-bold text-lg mb-4 pb-2" style={{ color: "var(--color-text)", borderBottom: "1px solid var(--color-border)" }}>
            {t({ pt: "Experiência Profissional", en: "Professional Experience" })}
          </h2>
          {experiences.map((exp, i) => (
            <div key={i} className="mb-6 last:mb-0">
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="font-serif font-semibold" style={{ color: "var(--color-text)" }}>
                    {tB(exp.role)}
                  </h3>
                  <p className="font-mono text-sm" style={{ color: "var(--color-accent)" }}>
                    {exp.company}
                  </p>
                </div>
                <span className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>
                  {tB(exp.period)}
                </span>
              </div>
              <ul className="space-y-1">
                {exp.highlights.map((h, hi) => (
                  <li key={hi} className="flex gap-2 text-sm" style={{ color: "var(--color-text-2)" }}>
                    <span style={{ color: "var(--color-accent)" }}>•</span>
                    <span>{tB(h)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section mb-8">
          <h2 className="font-serif font-bold text-lg mb-4 pb-2" style={{ color: "var(--color-text)", borderBottom: "1px solid var(--color-border)" }}>
            {t({ pt: "Educação", en: "Education" })}
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-4 last:mb-0">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <div>
                  <h3 className="font-serif font-semibold" style={{ color: "var(--color-text)" }}>
                    {tB(edu.degree)}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-text-2)" }}>{edu.institution}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>{edu.period}</span>
                  <br />
                  <span
                    className="inline-block px-2 py-0.5 text-xs font-mono mt-1"
                    style={{
                      color: edu.statusActive ? "var(--color-accent)" : "var(--color-text-3)",
                      border: `1px solid ${edu.statusActive ? "var(--color-accent-30)" : "var(--color-border)"}`,
                      borderRadius: "4px",
                    }}
                  >
                    {tB(edu.status)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section mb-8">
          <h2 className="font-serif font-bold text-lg mb-4 pb-2" style={{ color: "var(--color-text)", borderBottom: "1px solid var(--color-border)" }}>
            {t({ pt: "Projetos Principais", en: "Key Projects" })}
          </h2>
          {featuredProjects.map((p) => (
            <div key={p.id} className="mb-5 last:mb-0">
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                <h3 className="font-serif font-semibold" style={{ color: "var(--color-text)" }}>
                  {p.title}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs ml-2 accent-underline"
                      style={{ color: "var(--color-accent)", textDecoration: "none" }}
                    >
                      GitHub
                    </a>
                  )}
                </h3>
                <span className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>{p.year}</span>
              </div>
              <p className="text-xs mb-1.5 font-mono uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>
                {tB(p.category)}
              </p>
              <p className="text-sm mb-2 leading-relaxed" style={{ color: "var(--color-text-2)" }}>
                {tB(p.description)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono"
                    style={{ border: "1px solid var(--color-border)", color: "var(--color-text-3)", borderRadius: "3px" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section mb-8">
          <h2 className="font-serif font-bold text-lg mb-4 pb-2" style={{ color: "var(--color-text)", borderBottom: "1px solid var(--color-border)" }}>
            {t({ pt: "Certificações", en: "Certifications" })}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {courses.map((c, i) => (
              <div key={i} className="flex gap-2">
                <span style={{ color: c.prominent ? "var(--color-accent)" : "var(--color-text-3)" }}>•</span>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>{tB(c.name)}</p>
                  <p className="text-xs" style={{ color: "var(--color-text-3)" }}>{tB(c.issuer)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section mb-8">
          <h2 className="font-serif font-bold text-lg mb-4 pb-2" style={{ color: "var(--color-text)", borderBottom: "1px solid var(--color-border)" }}>
            {t({ pt: "Habilidades", en: "Skills" })}
          </h2>
          {skillGroups.map((g, i) => (
            <div key={i} className="mb-3 last:mb-0">
              <h3 className="font-mono text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--color-accent)" }}>
                {tB(g.label)}
              </h3>
              <p className="text-sm" style={{ color: "var(--color-text-2)" }}>
                {g.skills.map((s) => (typeof s === "string" ? s : tB(s))).join(" · ")}
              </p>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="font-serif font-bold text-lg mb-4 pb-2" style={{ color: "var(--color-text)", borderBottom: "1px solid var(--color-border)" }}>
            {t({ pt: "Idiomas", en: "Languages" })}
          </h2>
          <div className="flex gap-8">
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                {t({ pt: "Português", en: "Portuguese" })}
              </p>
              <p className="text-xs" style={{ color: "var(--color-text-3)" }}>
                {t({ pt: "Nativo", en: "Native" })}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                {t({ pt: "Inglês", en: "English" })}
              </p>
              <p className="text-xs" style={{ color: "var(--color-text-3)" }}>
                {t({ pt: "Fluente (KUMON, 3 anos)", en: "Fluent (KUMON, 3 years)" })}
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @media print {
          body { background: #fff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .section-root { padding: 0 !important; background: #fff !important; }
          .section-container { max-width: 100% !important; padding: 2rem 3rem !important; }
          .print\\:hidden { display: none !important; }
          .print\\:mb-6 { margin-bottom: 1.5rem !important; }
          * { box-shadow: none !important; }
          a { text-decoration: none !important; }
          a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.65rem; color: #8a9b8e; }
          .cv-section { page-break-inside: avoid; }
          @page { size: A4; margin: 1.5cm; }
        }
      `}</style>
    </div>
  );
}
