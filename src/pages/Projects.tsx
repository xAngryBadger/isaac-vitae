import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project } from "../data/content";
import { scrambleText } from "../lib/scramble";
import { useLang } from "../lib/LanguageContext";
import { ArrowUpRight, Github } from "lucide-react";
import { EASE_PRIMARY, SCROLL_START } from "../lib/scroll-anim";
import { projectWidgets } from "../components/ProjectWidgets";

gsap.registerPlugin(ScrollTrigger);

function ProjectIcon({ project, className }: { project: Project; className?: string }) {
  const Widget = projectWidgets[project.id];
  if (Widget) return <Widget className={className} />;
  if (project.icon) return <img src={`${import.meta.env.BASE_URL}${project.icon.replace(/^\//, '')}`} alt={project.title} className={`${className ?? ""} object-contain`} />;
  const initials = project.title.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill={`${project.color}15`} />
      <text x="24" y="28" textAnchor="middle" dominantBaseline="central" fontSize="16" fontFamily="system-ui, sans-serif" fontWeight="700" fill={project.color}>{initials}</text>
    </svg>
  );
}

function Tier1Card({ proj, onScramble }: { proj: Project; onScramble: (e: React.MouseEvent<HTMLElement>, text: string) => void }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/projects/${proj.caseStudySlug}`}
      className="proj-card group relative overflow-hidden custom-cursor-target border"
      style={{
        borderColor: hovered ? `${proj.color}60` : "var(--color-border)",
        backgroundColor: "var(--color-bg-card)",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: hovered ? `0 0 0 1px ${proj.color}25, 0 8px 32px ${proj.color}12` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 30%, ${proj.color}20 0%, transparent 65%)`,
          opacity: hovered ? 0.8 : 0.4,
          transition: "opacity 0.5s ease",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-8 lg:p-10">
        <div
          className="shrink-0 w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${proj.color}10`,
            transition: "background-color 0.3s",
          }}
        >
          <ProjectIcon project={proj} className="w-20 h-20 lg:w-28 lg:h-28" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: proj.color }}>
        {proj.year}
      </span>
      {proj.inProgress && (
        <span
          className="font-mono text-[9px] tracking-[0.1em] uppercase px-1.5 py-0.5"
          style={{ border: `1px solid ${proj.color}50`, color: proj.color, backgroundColor: `${proj.color}10` }}
        >
          {t({ pt: "Em andamento", en: "WIP" })}
          </span>
        )}
      </div>

      <h3
            className="font-serif font-bold text-xl lg:text-2xl leading-snug mb-2"
            style={{ color: "var(--color-text)" }}
            onMouseEnter={(e) => onScramble(e, proj.title)}
          >
            {proj.title}
          </h3>

          <p className="text-[10px] font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-3)" }}>
            {t(proj.category)}
          </p>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--color-text-2)" }}
          data-selectable
        >
          {t(proj.description)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono"
                style={{ border: `1px solid ${proj.color}20`, color: "var(--color-text-3)", backgroundColor: `${proj.color}06` }}
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
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] uppercase"
          style={{ color: proj.color, opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s" }}
        >
          {t({ pt: "Ver case study", en: "View case study" })} <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Tier2Card({ proj, onScramble }: { proj: Project; onScramble: (e: React.MouseEvent<HTMLElement>, text: string) => void }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/projects/${proj.caseStudySlug}`}
      className="proj-card group relative overflow-hidden custom-cursor-target border"
      style={{
        borderColor: hovered ? "rgba(69,106,75,0.5)" : "var(--color-border)",
        borderLeft: `4px solid ${hovered ? "var(--color-sage)" : "rgba(69,106,75,0.3)"}`,
        backgroundColor: "var(--color-bg-card)",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: hovered ? "0 4px 20px rgba(69,106,75,0.08)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(69,106,75,0.1) 0%, transparent 60%)`,
          opacity: hovered ? 0.8 : 0.3,
          transition: "opacity 0.5s ease",
        }}
      />

  <div className="relative z-10 p-8 flex flex-col">
        <div className="flex items-center gap-2 flex-wrap mb-2">
      <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--color-sage)" }}>
        {proj.year}
      </span>
    </div>

    <h3
          className="font-serif font-bold text-lg leading-snug mb-2"
          style={{ color: "var(--color-text)" }}
          onMouseEnter={(e) => onScramble(e, proj.title)}
        >
          {proj.title}
        </h3>

        <p className="text-[10px] font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-3)" }}>
          {t(proj.category)}
        </p>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--color-text-2)" }}
          data-selectable
        >
          {t(proj.description)}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {proj.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono"
              style={{ border: "1px solid rgba(69,106,75,0.2)", color: "var(--color-text-3)", backgroundColor: "rgba(69,106,75,0.04)" }}
            >
              {tech}
            </span>
          ))}
          {proj.tech.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-mono" style={{ color: "var(--color-text-3)" }}>
              +{proj.tech.length - 4}
            </span>
          )}
        </div>

        <span
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase mt-4"
          style={{ color: "var(--color-sage)", opacity: hovered ? 1 : 0.5, transition: "opacity 0.3s" }}
        >
          {t({ pt: "Ver case study", en: "View case study" })} <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}

function Tier3Card({ proj, onScramble }: { proj: Project; onScramble: (e: React.MouseEvent<HTMLElement>, text: string) => void }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);
  const hasIcon = !!projectWidgets[proj.id];

  return (
    <div
      className="proj-card relative overflow-hidden border"
      style={{
        borderColor: hovered ? "var(--color-border-accent)" : "var(--color-border)",
        backgroundColor: "var(--color-bg-card)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "transform 0.3s cubic-bezier(.16,1,.3,1), border-color 0.25s, box-shadow 0.3s",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.04)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, ${proj.color}12 0%, transparent 60%)`,
          opacity: hovered ? 0.6 : 0.3,
          transition: "opacity 0.4s ease",
        }}
      />

      <div className="relative z-10 p-6 flex flex-col">
        {hasIcon && (
          <div
            className="w-16 h-16 mb-4 flex items-center justify-center rounded"
            style={{ backgroundColor: `${proj.color}08` }}
          >
            <ProjectIcon project={proj} className="w-12 h-12" />
          </div>
        )}

        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--color-accent)" }}>
        {proj.year}
      </span>
      {proj.inProgress && (
        <span
          className="font-mono text-[9px] tracking-[0.1em] uppercase px-1.5 py-0.5"
          style={{ border: "1px solid var(--color-accent-50)", color: "var(--color-accent)", backgroundColor: "var(--color-accent-08)" }}
        >
          {t({ pt: "Em andamento", en: "WIP" })}
            </span>
          )}
        </div>

        <h3
          className="font-serif font-bold text-base leading-snug mb-1"
          style={{ color: "var(--color-text)" }}
          onMouseEnter={(e) => onScramble(e, proj.title)}
        >
          {proj.title}
        </h3>

        <p className="text-[10px] font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-3)" }}>
          {t(proj.category)}
        </p>

        <p
          className="text-xs leading-relaxed mb-3"
          style={{ color: "var(--color-text-2)" }}
          data-selectable
        >
          {t(proj.description)}
        </p>

        <div className="flex flex-wrap gap-1 mb-auto">
          {proj.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 text-[9px] font-mono"
              style={{ border: "1px solid var(--color-accent-15)", color: "var(--color-text-3)", backgroundColor: "var(--color-accent-03)" }}
            >
              {tech}
            </span>
          ))}
          {proj.tech.length > 3 && (
            <span className="px-1.5 py-0.5 text-[9px] font-mono" style={{ color: "var(--color-text-3)" }}>
              +{proj.tech.length - 3}
            </span>
          )}
        </div>

        {proj.githubUrl && (
          <a
            href={proj.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase mt-4 self-start"
            style={{ color: "var(--color-text-3)", opacity: hovered ? 1 : 0.5, transition: "opacity 0.3s" }}
          >
            <Github className="w-3 h-3" /> GitHub <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const featured = projects.filter((p) => p.featured);
  const caseStudies = projects.filter((p) => !p.featured && p.hasCaseStudy);
  const others = projects.filter((p) => !p.featured && !p.hasCaseStudy);

  useEffect(() => {
    const ctx = gsap.context(() => {
  gsap.from(".proj-label, .proj-title", {
  opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: EASE_PRIMARY,
  scrollTrigger: { trigger: sectionRef.current, start: SCROLL_START, once: true },
  });

  gsap.from(".tier-section", {
  opacity: 0, y: 30, stagger: 0.15, duration: 0.7, ease: EASE_PRIMARY,
  scrollTrigger: { trigger: sectionRef.current, start: SCROLL_START, once: true },
  });

  gsap.from(".proj-card", {
  y: 30, opacity: 0, stagger: 0.06, duration: 0.6, ease: EASE_PRIMARY,
  scrollTrigger: { trigger: ".proj-grid-1", start: SCROLL_START, once: true },
  });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleTitleScramble = (e: React.MouseEvent<HTMLElement>, text: string) => {
    scrambleText({ el: e.currentTarget, text, duration: 400, scramblePct: 0.5 });
  };

  return (
<div ref={sectionRef} className="section-root">
<div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="proj-label section-label">{t({ pt: "Projetos", en: "Projects" })}</span>
            <h2
              className="proj-title font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
            >
              {t({ pt: "Sistemas que ", en: "Systems that " })}
              <span className="italic" style={{ color: "var(--color-accent)" }}>
                {t({ pt: "resolvem problemas reais.", en: "solve real problems." })}
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm" style={{ color: "var(--color-text-2)", lineHeight: "1.8" }}>
            {t({ pt: "Clique nos destaques para ver o case study completo.", en: "Click featured projects for full case studies." })}
          </p>
        </div>

        {featured.length > 0 && (
          <section className="tier-section mb-16">
            <h3
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8"
              style={{ color: "var(--color-text-3)" }}
            >
              {t({ pt: "Destaques", en: "Featured" })}
            </h3>
            <div className="proj-grid-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((proj) => (
                <Tier1Card key={proj.id} proj={proj} onScramble={handleTitleScramble} />
              ))}
            </div>
          </section>
        )}

        {caseStudies.length > 0 && (
          <section className="tier-section mb-16">
            <h3
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8"
              style={{ color: "var(--color-text-3)" }}
            >
              {t({ pt: "Estudos de Caso", en: "Case Studies" })}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((proj) => (
                <Tier2Card key={proj.id} proj={proj} onScramble={handleTitleScramble} />
              ))}
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="tier-section mb-16">
            <h3
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8"
              style={{ color: "var(--color-text-3)" }}
            >
              {t({ pt: "Outros Projetos", en: "Other Projects" })}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((proj) => (
                <Tier3Card key={proj.id} proj={proj} onScramble={handleTitleScramble} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
