import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { ArrowUpRight, Github } from "lucide-react";
import { EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";
import { TagFilter } from "../components/TagFilter";
import { SplitText } from "../components/SplitText";

gsap.registerPlugin(ScrollTrigger);

const pad = (n: number) => String(n).padStart(2, "0");

/* ---------- TIER 1: DESTAQUES — card editorial, sem ícone de iniciais ---------- */
function Tier1Card({ proj, index }: { proj: Project; index: number }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/projects/${proj.caseStudySlug}`}
      className="proj-card group relative overflow-hidden custom-cursor-target"
      style={{
        borderColor: hovered ? "var(--color-border-accent)" : "var(--color-border)",
        backgroundColor: "var(--color-bg-card)",
        transition: "border-color 0.3s var(--ease-project), box-shadow 0.3s var(--ease-project)",
        boxShadow: hovered ? "0 2px 24px rgba(0,0,0,0.18)" : "0 0 0 0 transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative z-10 p-7 lg:p-8 flex flex-col h-full">
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <span
            className="font-serif font-bold text-4xl lg:text-5xl leading-none"
            style={{ color: "var(--color-text-3)", opacity: hovered ? 0.9 : 0.45, transition: "opacity 0.3s var(--ease-project)" }}
          >
            {pad(index)}
          </span>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--color-text-3)" }}>
            {proj.year}
            {proj.inProgress && (
              <span style={{ color: "var(--color-accent)" }}> · {t({ pt: "em andamento", en: "wip" })}</span>
            )}
          </span>
        </div>

        <h3 className="font-serif font-bold text-xl lg:text-[1.6rem] leading-snug mb-2" style={{ color: "var(--color-text)" }}>
          {proj.title}
        </h3>

        <p className="font-mono text-[10px] uppercase tracking-wider mb-4" style={{ color: "var(--color-text-3)" }}>
          {t(proj.category)}
        </p>

        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text-2)" }} data-selectable>
          {t(proj.description)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {proj.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono"
              style={{ border: "1px solid var(--color-border)", color: "var(--color-text-3)" }}
            >
              {tech}
            </span>
          ))}
          {proj.tech.length > 5 && (
            <span className="px-2 py-0.5 text-[10px] font-mono" style={{ color: "var(--color-text-3)" }}>
              +{proj.tech.length - 5}
            </span>
          )}
        </div>

        <span
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase self-start"
          style={{ color: hovered ? "var(--color-accent)" : "var(--color-text-3)", transition: "color 0.3s var(--ease-project)" }}
        >
          {t({ pt: "Ver case study", en: "View case study" })} <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}

/* ---------- TIER 2: ESTUDOS DE CASO — linha de arquivo numerada ---------- */
function Tier2Row({ proj, index }: { proj: Project; index: number }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);
  const hasDemo = !!proj.demoUrl;

  const inner = (
    <>
      <span
        className="font-mono text-xs tabular-nums shrink-0 w-8"
        style={{ color: hovered ? "var(--color-accent)" : "var(--color-text-3)", transition: "color 0.25s var(--ease-project)" }}
      >
        {pad(index)}
      </span>
      <span className="flex-1 min-w-0">
        <span className="flex items-baseline gap-3 flex-wrap">
          <span className="font-serif font-bold text-lg leading-snug" style={{ color: "var(--color-text)" }}>
            {proj.title}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--color-text-3)" }}>
            {t(proj.category)}
          </span>
        </span>
        <span className="block text-sm leading-relaxed mt-1" style={{ color: "var(--color-text-2)" }} data-selectable>
          {t(proj.description)}
        </span>
      </span>
      <span className="flex items-center gap-3 shrink-0">
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase hidden sm:inline" style={{ color: "var(--color-text-3)" }}>
          {proj.year}
        </span>
        <ArrowUpRight
          className="w-4 h-4"
          style={{ color: hovered ? "var(--color-accent)" : "var(--color-text-3)", transition: "color 0.25s var(--ease-project), transform 0.25s var(--ease-project)", transform: hovered ? "translate(2px,-2px)" : "none" }}
        />
      </span>
    </>
  );

  const cls = "proj-card w-full flex items-start gap-4 lg:gap-6 py-5 text-left custom-cursor-target";
  const style = { borderBottom: "1px solid var(--color-border)", transition: "border-color 0.25s var(--ease-project)" } as React.CSSProperties;
  const hoverProps = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) };

  if (hasDemo) {
    return (
      <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className={cls} style={style} {...hoverProps}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={`/projects/${proj.caseStudySlug}`} className={cls} style={style} {...hoverProps}>
      {inner}
    </Link>
  );
}

/* ---------- TIER 3: OUTROS — linha compacta ---------- */
function Tier3Row({ proj, index }: { proj: Project; index: number }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="proj-card w-full flex items-center gap-4 py-3.5"
      style={{ borderBottom: "1px solid var(--color-border)", transition: "border-color 0.25s var(--ease-project)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="font-mono text-xs tabular-nums shrink-0 w-8" style={{ color: "var(--color-text-3)" }}>
        {pad(index)}
      </span>
      <span className="font-serif font-bold text-base leading-snug shrink-0" style={{ color: "var(--color-text)" }}>
        {proj.title}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wider truncate hidden md:inline" style={{ color: "var(--color-text-3)" }}>
        {t(proj.category)}
      </span>
      <span className="flex-1" />
      <span className="font-mono text-[10px] tracking-[0.15em] uppercase shrink-0" style={{ color: "var(--color-text-3)" }}>
        {proj.year}
      </span>
      {proj.githubUrl ? (
        <a
          href={proj.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center shrink-0"
          style={{ color: hovered ? "var(--color-accent)" : "var(--color-text-3)", transition: "color 0.25s var(--ease-project)" }}
          aria-label={`GitHub — ${proj.title}`}
        >
          <Github className="w-3.5 h-3.5" />
        </a>
      ) : (
        <span className="w-3.5 shrink-0" />
      )}
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tech.slice(0, 3)))).slice(0, 12);

  const filteredProjects =
    selectedTags.length > 0 ? projects.filter((p) => selectedTags.every((tag) => p.tech.includes(tag))) : projects;

  const featured = filteredProjects.filter((p) => p.featured);
  const caseStudies = filteredProjects.filter((p) => !p.featured && p.hasCaseStudy);
  const others = filteredProjects.filter((p) => !p.featured && !p.hasCaseStudy);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-label", {
        opacity: 0, y: 16, duration: 0.5, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".proj-label", start: SCROLL_START, once: true },
      });
      gsap.from(".tier-section", {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.5, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: sectionRef.current, start: SCROLL_START, once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="section-root">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="proj-label section-label">{t({ pt: "Projetos", en: "Projects" })}</span>
            <h2 className="proj-title font-serif font-bold leading-tight text-h2 mt-1">
              <SplitText as="span" className="block" delay={0.2} duration={0.8} stagger={0.08} splitType="words">
                {t({ pt: "Sistemas que ", en: "Systems that " })}
              </SplitText>
              <span className="italic text-text-2">{t({ pt: "resolvem problemas reais.", en: "solve real problems." })}</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-text-2">
            {t({ pt: "Destaques abrem o case study completo.", en: "Featured projects open the full case study." })}
          </p>
        </div>

        <TagFilter tags={allTags} selectedTags={selectedTags} onTagChange={setSelectedTags} />

        {featured.length > 0 && (
          <section className="tier-section mb-16">
            <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6 text-label" style={{ color: "var(--color-text-3)" }}>
              {t({ pt: "Destaques", en: "Featured" })}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {featured.map((proj, i) => (
                <Tier1Card key={proj.id} proj={proj} index={i + 1} />
              ))}
            </div>
          </section>
        )}

        {caseStudies.length > 0 && (
          <section className="tier-section mb-16">
            <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6 text-label" style={{ color: "var(--color-text-3)" }}>
              {t({ pt: "Estudos de Caso", en: "Case Studies" })}
            </h3>
            <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
              {caseStudies.map((proj, i) => (
                <Tier2Row key={proj.id} proj={proj} index={i + 1} />
              ))}
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="tier-section">
            <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6 text-label" style={{ color: "var(--color-text-3)" }}>
              {t({ pt: "Outros Projetos", en: "Other Projects" })}
            </h3>
            <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
              {others.map((proj, i) => (
                <Tier3Row key={proj.id} proj={proj} index={i + 1} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
