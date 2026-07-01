import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, caseStudies } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";
import { ArrowLeft, ArrowUpRight, Copy, Check, ChevronDown } from "lucide-react";
import { InlineAnnotation } from "../components/InlineAnnotation";
import { SplitText } from "../components/SplitText";

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
          transition: "max-height 0.5s var(--ease-spring-soft), opacity 0.4s ease",
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
        y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-hero", start: SCROLL_START, once: true },
      });

      gsap.from(".cs-section .section-label", {
        opacity: 0, y: 20, duration: 0.6, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-section .section-label", start: SCROLL_START, once: true },
      });

      gsap.from(".cs-section > *:not(.section-label)", {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-section", start: SCROLL_START, once: true },
      });

      gsap.from(".cs-result", {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-result", start: SCROLL_START, once: true },
      });

      gsap.from(".cs-feature", {
        opacity: 0, y: 15, stagger: 0.06, duration: 0.5, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-feature", start: SCROLL_START, once: true },
      });

      gsap.from(".cs-code", {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-code", start: SCROLL_START, once: true },
      });

      gsap.from(".cs-gallery-img", {
        scale: 0.92, opacity: 0, stagger: 0.1, duration: 0.7, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-gallery-img", start: SCROLL_START, once: true },
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
orca: "orca",
  "urutau": "urutau",
"fennec-excel": "Sahara-Fenneck",
inovesa: "",
forestai: "forestai",
};
  const githubSlug = slug ? githubSlugMap[slug] : "";
  const hasGithub = !!githubSlug;

  const annotations: Record<string, Record<string, { pt: string; en: string }>> = {
    harpia: {
      agentic: { pt: "Agente de IA que decide autonomamente quais ferramentas usar e em que ordem, sem intervenção humana a cada passo.", en: "AI agent that autonomously decides which tools to use and in what order, without human intervention at each step." },
      "tool-calling": { pt: "Mecanismo da OpenAI donde el modelo puede invocar funciones externas (APIs, base de datos) durante el razonamiento.", en: "OpenAI mechanism where the model can invoke external functions (APIs, databases) during reasoning." },
      "flux-kontext": { pt: "Modelo de edición de imágenes de Black Forest Labs — genera variaciones y ediciones preservando identidad visual.", en: "Image editing model by Black Forest Labs — generates variations and edits while preserving visual identity." },
      "pil-compositor": { pt: "Compositor de imágenes usando Python Imaging Library — genera diseños localmente sin costo de API.", en: "Image compositor using Python Imaging Library — generates designs locally with no API cost." },
      "schema-enforcement": { pt: "Validación estricta de que las respuestas del LLM siguen un schema JSON predefinido antes de ser procesadas.", en: "Strict validation that LLM responses follow a pre-defined JSON schema before being processed." },
    },
    orca: {
      dossie: { pt: "Documento ejecutivo completo con cronograma, costos, equipos y territorios para un área de restauración.", en: "Complete executive document with schedule, costs, crews and territories for a restoration area." },
      nicegui: { pt: "Framework Python para interfaces web basado en FastAPI + Vue.js — funciona en el navegador sin frontend separado.", en: "Python framework for web interfaces based on FastAPI + Vue.js — runs in the browser without a separate frontend." },
      "rich-cli": { pt: "Biblioteca Python para salidas de terminal ricas — tablas, barras de progreso, árboles y resaltado de sintaxis.", en: "Python library for rich terminal output — tables, progress bars, trees and syntax highlighting." },
    },
    "urutau": {
      "offline-first": { pt: "Arquitectura donde la aplicación funciona totalmente sin internet y se sincroniza cuando está conectada.", en: "Architecture where the app works fully without internet and syncs when connected." },
      "uuid-remapping": { pt: "Técnica para reconciliar IDs temporales del cliente con IDs definitivos del servidor después de la sincronización.", en: "Technique to reconcile temporary client IDs with definitive server IDs after synchronization." },
      drift: { pt: "ORM/SQLite para Flutter/Dart — tipo Prisma pero para aplicaciones móviles, con consultas tipadas y migraciones.", en: "ORM/SQLite for Flutter/Dart — like Prisma but for mobile apps, with typed queries and migrations." },
      "atomic-rollback": { pt: "Reversión completa de todas las operaciones de una transacción si cualquier paso falla — todo o nada.", en: "Complete reversal of all operations in a transaction if any step fails — all or nothing." },
    },
    "fennec-excel": {
      react: { pt: "Patrón de agente de IA que alterna entre pensamiento (Reasoning) y acción (Acting) en bucle iterativo.", en: "AI agent pattern that alternates between thinking (Reasoning) and acting (Acting) in an iterative loop." },
      ollama: { pt: "Runtime para ejecutar LLMs localmente — sin costo de API, sin datos en la nube, 100% offline.", en: "Runtime to run LLMs locally — no API cost, no cloud data, 100% offline." },
      xlwings: { pt: "Biblioteca de Python que controla Excel directamente mediante COM/Windows API — como VBA pero en Python.", en: "Python library that controls Excel directly via COM/Windows API — like VBA but in Python." },
    },
  inovesa: {
    lenis: { pt: "Biblioteca JS de desplazamiento suave — reemplaza el desplazamiento nativo con animaciones fluidas y sincronizables.", en: "JS smooth scrolling library — replaces native scroll with fluid, syncable animations." },
    parallax: { pt: "Efecto visual donde diferentes capas se mueven a velocidades distintas al desplazarse, creando profundidad.", en: "Visual effect where different layers move at different speeds on scroll, creating depth." },
    "motion-system": { pt: "Sistema centralizado de muelles, variantes y easings reutilizables para animaciones consistentes en toda la aplicación.", en: "Centralized system of reusable springs, variants and easings for consistent animations across the app." },
  },
  forestai: {
    deepforest: { pt: "Framework de código abierto para la detección de copas de árboles en imágenes aéreas — basado en Retinanet/Faster R-CNN.", en: "Open-source framework for tree crown detection in aerial imagery — based on Retinanet/Faster R-CNN." },
    "bounding-box": { pt: "Rectángulo que marca la posición de un objeto en la imagen — coordenadas (x, y, ancho, altura) utilizados para entrenar modelos de detección.", en: "Rectangle marking an object's position in an image — (x, y, width, height) coordinates used to train detection models." },
    "stratified-split": { pt: "División del conjunto de datos garantizando que cada subconjunto mantenga la misma proporción de clases — evita sesgo en el entrenamiento.", en: "Dataset split ensuring each subset maintains the same class proportions — prevents training bias." },
    tensorboard: { pt: "Herramienta de visualización de TensorFlow para monitorear métricas de entrenamiento (pérdida, precisión, mAP) en tiempo real.", en: "TensorFlow visualization tool for monitoring training metrics (loss, accuracy, mAP) in real-time." },
  },
  };

  const pageAnnotations = slug ? annotations[slug] ?? {} : {};

  const annotateText = (text: string): React.ReactNode[] => {
    if (!pageAnnotations || Object.keys(pageAnnotations).length === 0) return [text];
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;
    while (remaining.length > 0) {
      let earliestMatch = -1;
      let earliestKey = "";
      for (const key of Object.keys(pageAnnotations)) {
        const idx = remaining.toLowerCase().indexOf(key.toLowerCase().replace(/-/g, " "));
        if (idx !== -1 && (earliestMatch === -1 || idx < earliestMatch)) {
          earliestMatch = idx;
          earliestKey = key;
        }
      }
      if (earliestMatch === -1) {
        parts.push(remaining);
        break;
      }
      const searchStr = earliestKey.replace(/-/g, " ");
      const matchEnd = earliestMatch + searchStr.length;
      if (earliestMatch > 0) parts.push(remaining.slice(0, earliestMatch));
      parts.push(
        <InlineAnnotation key={`ann-${keyIdx++}`} id={earliestKey}>
          {pageAnnotations[earliestKey]}
        </InlineAnnotation>
      );
      remaining = remaining.slice(matchEnd);
    }
    return parts;
  };

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
            <span className="highlight-date font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--color-text-3)" }}>
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
            className="font-serif font-bold leading-tight mb-4 text-h1"
          >
            <SplitText
              as="span"
              className="block"
              delay={0.3}
              duration={1.2}
              stagger={0.06}
              splitType="words"
            >
              {project.title}
            </SplitText>
          </h1>
          <p className="font-mono text-sm tracking-[0.1em] uppercase mb-8 text-text-2">
            {t(project.category)}
          </p>
          <p className="text-lg leading-relaxed max-w-3xl text-text-2" data-selectable>
            {t(project.description)}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mb-20">
          <div className="cs-section">
            <span className="section-label">{t({ pt: "O Desafio", en: "The Challenge" })}</span>
            <p className="text-lg leading-relaxed case-study-challenge text-text-2" data-selectable>
              {annotateText(t(cs.challenge))}
            </p>
          </div>

          <div className="cs-section">
            <span className="section-label">{t({ pt: "A Abordagem", en: "The Approach" })}</span>
            <p className="text-lg leading-relaxed text-text-2" data-selectable>
              {annotateText(t(cs.approach))}
            </p>
          </div>
        </div>

        {cs.codeSnippets && cs.codeSnippets.length > 0 && (
          <div className="cs-section mb-20">
            <span className="section-label mb-8 block text-label">
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
            <span className="section-label mb-8 block text-label">
              {t({ pt: "Galeria", en: "Gallery" })}
            </span>
            <GalleryGrid images={cs.gallery} />
          </div>
        )}

        <div
          className="cs-section"
        >
          <span className="section-label">{t({ pt: "Tecnologias", en: "Technologies" })}</span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="tech-pill"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
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
