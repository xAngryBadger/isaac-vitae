import { useEffect, useRef, useState } from "react";
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

function NumberedGridCard({ proj, num }: { proj: Project; num: number }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);

  const href = (proj.demoUrl && !proj.hasCaseStudy)
    ? proj.demoUrl
    : proj.caseStudySlug
      ? `/projects/${proj.caseStudySlug}`
      : proj.demoUrl ?? "#";
  const isExternal = proj.demoUrl && !proj.hasCaseStudy && proj.demoUrl.startsWith("http");

  return (
    <Link
      to={href as string}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="project-card group relative overflow-hidden border custom-cursor-target"
      style={{
        borderColor: hovered ? "var(--color-border-accent)" : "var(--color-border)",
        backgroundColor: "var(--color-bg-card)",
        transition: "border-color 0.3s var(--ease-project), box-shadow 0.3s var(--ease-project), transform 0.4s var(--ease-spring-soft)",
        transformStyle: "preserve-3d",
        perspective: "800px",
        willChange: "transform",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 30%, var(--color-bg-elevated) 0%, transparent 65%)`,
          opacity: hovered ? 0.8 : 0.4,
          transition: "opacity 0.5s var(--ease-project)",
        }}
      />
      <span className="project-card-num absolute top-6 left-5 pointer-events-none select-none z-10">
        {num}
      </span>
      <span className="project-card-year absolute top-6 right-5 pointer-events-none select-none z-10 font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: proj.color }}>
        {proj.year}
      </span>
      <div className="relative z-z-10 p-6 pt-32 md:pt-32 flex flex-col gap-4 lg:p-8">
        <div className="flex items-center gap-2 flex-wrap">
          {proj.inProgress && (
            <span
              className="font-mono text-[9px] tracking-[0.1em] uppercase px-1.5 py-0.5"
              style={{
                border: `1px solid rgba(${parseInt(proj.color.slice(1, 3), 16)},${parseInt(proj.color.slice(3, 5), 16)},${parseInt(proj.color.slice(5, 7), 16)},0.3)`,
                color: proj.color,
                backgroundColor: `rgba(${parseInt(proj.color.slice(1, 3), 16)},${parseInt(proj.color.slice(3, 5), 16)},${parseInt(proj.color.slice(5, 7), 16)},0.06)`,
              }}
            >
              {t({ pt: "Em andamento", en: "WIP" })}
            </span>
          )}
        </div>

        <h3
          className="font-serif font-bold text-xl lg:text-2xl leading-snug"
          style={{ color: "var(--color-text)", lineHeight: 1.3 }}
        >
          {proj.title}
        </h3>

        <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--color-text-3)" }}>
          {t(proj.category)}
        </p>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-text-2)" }}
          data-selectable
        >
          {t(proj.description)}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {proj.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono"
              style={{
                border: `1px solid rgba(${parseInt(proj.color.slice(1, 3), 16)},${parseInt(proj.color.slice(3, 5), 16)},${parseInt(proj.color.slice(5, 7), 16)},0.12)`,
                color: "var(--color-text-3)",
                backgroundColor: `rgba(${parseInt(proj.color.slice(1, 3), 16)},${parseInt(proj.color.slice(3, 5), 16)},${parseInt(proj.color.slice(5, 7), 16)},0.02)`,
              }}
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
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] uppercase self-start"
          style={{ color: proj.color, opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s var(--ease-project)" }}
        >
          {proj.demoUrl && !proj.hasCaseStudy
            ? t({ pt: "Abrir projeto", en: "Open project" })
            : t({ pt: "Ver case study", en: "View case study" })}
          <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}

function Tier3CarouselCard({ proj }: { proj: Project }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card relative z-10 p-5 overflow-hidden border"
      style={{
        borderColor: hovered ? "var(--color-border-accent)" : "var(--color-border)",
        backgroundColor: "var(--color-bg-card)",
        minWidth: "280px",
        maxWidth: "340px",
        transition: "border-color 0.3s var(--ease-project), transform 0.4s var(--ease-spring-soft)",
        transformStyle: "preserve-3d",
        perspective: "800px",
        willChange: "transform",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, var(--color-bg-elevated) 0%, transparent 60%)`,
          opacity: hovered ? 0.6 : 0.3,
          transition: "opacity 0.4s var(--ease-project)",
        }}
      />

      <div className="flex items-center gap-2 flex-wrap mb-2">
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--color-text-2)" }}>
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
        style={{ color: "var(--color-text)", lineHeight: 1.4 }}
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

      <div className="flex flex-wrap gap-1 mb-2">
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
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase self-start"
          style={{ color: "var(--color-text-3)", opacity: hovered ? 1 : 0.5, transition: "opacity 0.3s var(--ease-project)" }}
        >
          <Github className="w-3 h-3" /> GitHub <ArrowUpRight className="w-2.5 h-2.5" />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  const allTags = Array.from(new Set(projects.flatMap(p => p.tech.slice(0, 3)))).slice(0, 12);

  const filteredProjects = selectedTags.length > 0
    ? projects.filter(p => selectedTags.every(tag => p.tech.includes(tag)))
    : projects;

  const tier1 = filteredProjects.filter((p) => p.featured);
  const tier2 = filteredProjects.filter((p) => !p.featured && p.hasCaseStudy);
  const tier3 = filteredProjects.filter((p) => !p.featured && !p.hasCaseStudy);

  const numberedTier = [...tier1, ...tier2];

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [filteredProjects]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-label", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".proj-label", start: SCROLL_START, once: true },
      });

      gsap.from(".proj-title", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".proj-title", start: SCROLL_START, once: true },
      });

      gsap.from(".tier-section", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: EASE_SECONDARY,
        scrollTrigger: { trigger: sectionRef.current, start: SCROLL_START, once: true },
      });

      gsap.from(".project-card", {
        opacity: 0,
        y: 30,
        stagger: 0.06,
        duration: 0.6,
        ease: EASE_SECONDARY,
        scrollTrigger: { trigger: sectionRef.current?.querySelector(".project-grid") ?? sectionRef.current, start: SCROLL_START, once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isDesktop || !carouselRef.current) return;
    const track = carouselRef.current;
    const loopId = "carousel-loop";
    const anim = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth + 100),
      duration: 30,
      ease: "none",
      repeat: -1,
      id: loopId,
    });

    const pause = () => gsap.getById(loopId)?.pause();
    const resume = () => gsap.getById(loopId)?.play();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      anim.kill();
    };
  }, [isDesktop, tier3]);

  return (
    <div ref={sectionRef} className="section-root">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="proj-label section-label clip-reveal-up">
              {t({ pt: "Projetos", en: "Projects" })}
            </span>
            <h2 className="proj-title font-serif font-bold leading-tight text-h2">
              <SplitText
                as="span"
                className="block"
                delay={0.3}
                duration={1.0}
                stagger={0.08}
                splitType="words"
              >
                {t({ pt: "Sistemas que ", en: "Systems that " })}
              </SplitText>
              <span className="italic text-text-2">
                {t({ pt: "resolvem problemas reais.", en: "solve real problems." })}
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-text-2">
            {t({ pt: "Clique nos destaques para ver o case study completo.", en: "Click featured projects for full case studies." })}
          </p>
        </div>

        <TagFilter tags={allTags} selectedTags={selectedTags} onTagChange={setSelectedTags} />

        {numberedTier.length > 0 && (
          <section className="tier-section mb-16">
            {tier1.length > 0 && tier2.length > 0 && (
              <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8 text-label">
                {t({ pt: "Destaques", en: "Featured & Case Studies" })}
              </h3>
            )}
            {tier1.length === 0 && tier2.length > 0 && (
              <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8 text-label">
                {t({ pt: "Estudos de Caso", en: "Case Studies" })}
              </h3>
            )}
            {tier1.length > 0 && tier2.length === 0 && (
              <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8 text-label">
                {t({ pt: "Destaques", en: "Featured" })}
              </h3>
            )}
            <div className="project-grid grid grid-cols-1 lg:grid-cols-2">
              {[...tier1, ...tier2].map((proj, i) => (
                <NumberedGridCard key={proj.id} proj={proj} num={i + 1} />
              ))}
            </div>
          </section>
        )}

        {tier3.length > 0 && (
          <section className="tier-section mb-16">
            <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8 text-label">
              {t({ pt: "Outros Projetos", en: "Other Projects" })}
            </h3>
            {isDesktop ? (
              <div className="overflow-hidden">
                <div ref={carouselRef} className="carousel-track">
                  {tier3.map((proj) => (
                    <Tier3CarouselCard key={proj.id} proj={proj} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {tier3.map((proj) => (
                  <div key={proj.id} className="project-card custom-cursor-target">
                    <Tier3CarouselCard proj={proj} />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
