import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, caseStudies } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_PRIMARY, EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";
import { ArrowLeft, ArrowUpRight, Copy, Check, ChevronDown } from "lucide-react";
import SitePreview from "../components/SitePreview";

gsap.registerPlugin(ScrollTrigger);

function CodeBlock({ language, title, code }: { language: string; title: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="border overflow-hidden"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: open ? "var(--color-bg-deep)" : "var(--color-bg-card)",
        borderRadius: "var(--radius-lg, 12px)",
        transition: "background-color 0.3s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2.5 border-b"
        style={{
          borderColor: open ? "var(--color-border)" : "transparent",
          cursor: "pointer",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border"
            style={{
              borderColor: "var(--color-accent-30)",
              color: "var(--color-accent)",
              backgroundColor: "var(--color-accent-06)",
            }}
          >
            {language}
          </span>
          <span className="text-xs font-mono" style={{ color: "var(--color-text-2)" }}>
            {title}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {open && (
            <span
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono uppercase tracking-wider"
              style={{ color: "var(--color-text-3)", cursor: "pointer" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-3)";
              }}
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? t({ pt: "Copiado", en: "Copied" }) : t({ pt: "Copiar", en: "Copy" })}
            </span>
          )}
          <ChevronDown
            className="w-3.5 h-3.5 transition-transform duration-300"
            style={{
              color: "var(--color-text-3)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </button>
      <div
        style={{
          maxHeight: open ? "600px" : "0",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s var(--ease-spring-1, ease), opacity 0.4s ease",
        }}
      >
        <div className="overflow-x-auto">
          <pre
            className="p-5 text-sm leading-relaxed font-mono"
            style={{ color: "var(--color-text-2)", backgroundColor: "var(--color-bg-deep)" }}
          >
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function GalleryGrid({ images }: { images: { src: string; alt: { pt: string; en: string } }[] }) {
  const { t } = useLang();

  return (
    <div className={`grid gap-4 ${images.length === 1 ? "grid-cols-1" : images.length === 2 ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}>
      {images.map((img, i) => (
        <div
          key={i}
          className="overflow-hidden border"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-bg-card)",
            borderRadius: "var(--radius-lg, 12px)",
            aspectRatio: i === 0 && images.length === 3 ? "16/10" : "4/3",
          }}
        >
          <img
            src={img.src}
            alt={t(img.alt)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const project = projects.find((p) => p.caseStudySlug === slug);
  const cs = slug ? caseStudies[slug] : undefined;

  useEffect(() => {
  const ctx = gsap.context(() => {
  gsap.from(".cs-hero > *", {
  y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: EASE_PRIMARY,
  scrollTrigger: { trigger: ".cs-hero", start: SCROLL_START, once: true },
  });

  gsap.from(".cs-section", {
  y: 40, opacity: 0, stagger: 0.15, duration: 0.9, ease: EASE_SECONDARY,
  scrollTrigger: { trigger: ".cs-section", start: SCROLL_START, once: true },
  });

  gsap.from(".cs-result", {
  y: 20, opacity: 0, stagger: 0.08, duration: 0.6, ease: EASE_SECONDARY,
  scrollTrigger: { trigger: ".cs-result", start: SCROLL_START, once: true },
  });

  gsap.from(".cs-feature", {
  y: 15, opacity: 0, stagger: 0.06, duration: 0.5, ease: EASE_SECONDARY,
  scrollTrigger: { trigger: ".cs-feature", start: SCROLL_START, once: true },
  });

  gsap.from(".cs-code", {
  y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: EASE_SECONDARY,
  scrollTrigger: { trigger: ".cs-code", start: SCROLL_START, once: true },
  });

  gsap.from(".cs-gallery-img", {
  scale: 0.92, opacity: 0, stagger: 0.1, duration: 0.7, ease: EASE_SECONDARY,
  scrollTrigger: { trigger: ".cs-gallery-img", start: SCROLL_START, once: true },
  });

  gsap.from(".cs-preview", {
  y: 40, opacity: 0, duration: 1, ease: EASE_SECONDARY,
  scrollTrigger: { trigger: ".cs-preview", start: SCROLL_START, once: true },
  });
  }, sectionRef);
    return () => ctx.revert();
  }, []);

  if (!project || !cs) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-text)" }}>
            {t({ pt: "Projeto não encontrado", en: "Project not found" })}
          </h2>
          <Link to="/projects" className="clip-btn">
            <ArrowLeft className="w-4 h-4" />
            {t({ pt: "Voltar", en: "Back" })}
          </Link>
        </div>
      </div>
    );
  }

  const githubSlugMap: Record<string, string> = {
    harpia: "harpia",
    "srf-system": "srf-system",
    "flora-sensus": "flora-sensus",
    "fennec-excel": "Sahara-Fenneck",
    inovesa: "",
  };
  const githubSlug = slug ? githubSlugMap[slug] : "";
  const hasGithub = !!githubSlug;

  return (
  <div ref={sectionRef} className="section-root">
  <div className="section-container">
        <Link
          to="/projects"
          className="cs-hero inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase mb-12 custom-cursor-target"
          style={{ color: "var(--color-text-3)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          {t({ pt: "Voltar aos Projetos", en: "Back to Projects" })}
        </Link>

        <div className="cs-hero mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--color-accent)" }}>
              {project.year}
            </span>
            {project.inProgress && (
              <span
                className="font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-0.5"
                style={{ border: "1px solid var(--color-accent-50)", color: "var(--color-accent)", backgroundColor: "var(--color-accent-08)" }}
              >
                {t({ pt: "Em andamento", en: "In progress" })}
              </span>
            )}
          </div>
          <h1
            className="font-serif font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--color-text)" }}
          >
            {project.title}
          </h1>
          <p className="font-mono text-sm tracking-[0.1em] uppercase mb-8" style={{ color: "var(--color-text-2)" }}>
            {t(project.category)}
          </p>
          <p className="text-lg leading-relaxed max-w-3xl" style={{ color: "var(--color-text-2)" }} data-selectable>
            {t(project.description)}
          </p>
        </div>

        {cs.livePreview && (
          <div className="cs-preview mb-20">
            <span className="section-label mb-6 block">
              {t({ pt: "Preview ao Vivo", en: "Live Preview" })}
            </span>
            <SitePreview
              src={cs.livePreview}
              title={project.title}
            />
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mb-20">
          <div className="cs-section">
            <span className="section-label">{t({ pt: "O Desafio", en: "The Challenge" })}</span>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-2)" }} data-selectable>
              {t(cs.challenge)}
            </p>
          </div>

          <div className="cs-section">
            <span className="section-label">{t({ pt: "A Abordagem", en: "The Approach" })}</span>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-2)" }} data-selectable>
              {t(cs.approach)}
            </p>
          </div>
        </div>

        {cs.codeSnippets && cs.codeSnippets.length > 0 && (
          <div className="cs-section mb-20">
            <span className="section-label mb-8 block">
              {t({ pt: "Código-Fonte", en: "Source Code" })}
            </span>
            <div className="space-y-6">
              {cs.codeSnippets.map((snippet, i) => (
                <div key={i} className="cs-code">
                  <CodeBlock
                    language={snippet.language}
                    title={t(snippet.title)}
                    code={snippet.code}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className="cs-section mb-20 p-10 lg:p-14 border"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-card)" }}
        >
          <span className="section-label">{t({ pt: "Resultados", en: "Results" })}</span>
          <div className="space-y-4">
            {cs.results.map((r, i) => (
              <div key={i} className="cs-result flex items-start gap-4">
                <span
                  className="mt-1.5 w-6 h-6 flex items-center justify-center shrink-0 font-mono text-xs border"
                  style={{ color: "var(--color-accent)", borderColor: "var(--color-accent-30)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed" style={{ color: "var(--color-text)" }} data-selectable>
                  {t(r)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-section mb-20">
          <span className="section-label">{t({ pt: "Funcionalidades-Chave", en: "Key Features" })}</span>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {cs.keyFeatures.map((f, i) => (
              <div key={i} className="cs-feature flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-accent)" }} />
                <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }} data-selectable>
                  {t(f)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {cs.gallery && cs.gallery.length > 0 && (
          <div className="cs-section mb-20">
            <span className="section-label mb-8 block">
              {t({ pt: "Galeria", en: "Gallery" })}
            </span>
            <GalleryGrid images={cs.gallery} />
          </div>
        )}

        <div className="cs-section">
          <span className="section-label">{t({ pt: "Tecnologias", en: "Technologies" })}</span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-mono border"
                style={{ borderColor: "var(--color-accent-20)", color: "var(--color-text-2)", backgroundColor: "var(--color-accent-04)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          className="mt-20 pt-12 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderColor: "var(--color-border)" }}
        >
          <Link to="/projects" className="clip-btn">
            <ArrowLeft className="w-4 h-4" />
            {t({ pt: "Todos os Projetos", en: "All Projects" })}
          </Link>
          {hasGithub && (
            <a
              href={`https://github.com/xAngryBadger/${githubSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-btn-filled"
            >
              {t({ pt: "Ver no GitHub", en: "View on GitHub" })}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
