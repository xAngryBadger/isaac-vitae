import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "../lib/LanguageContext";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { EASE_PRIMARY, SCROLL_START } from "../lib/scroll-anim";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: "https://picsum.photos/seed/harpia-ai/1200/750", caption: { pt: "HarpIA — Pipeline de IA Criativa", en: "HarpIA — Creative AI Pipeline" }, project: "harpia" },
  { src: "https://picsum.photos/seed/orca-forest/1200/750", caption: { pt: "Orca — Planejamento Florestal", en: "Orca — Forest Planning" }, project: "orca" },
  { src: "https://picsum.photos/seed/flora-mobile/1200/750", caption: { pt: "Flora Sensus — Inventário Offline", en: "Flora Sensus — Offline Inventory" }, project: "florasensus" },
  { src: "https://picsum.photos/seed/fennec-desert/1200/750", caption: { pt: "Fennec Excel — IA Local & Planilhas", en: "Fennec Excel — Local AI & Spreadsheets" }, project: "fennec" },
  { src: "https://picsum.photos/seed/inovesa-web/1200/750", caption: { pt: "Inovesa — Site Institucional", en: "Inovesa — Institutional Website" }, project: "inovesa" },
  { src: "https://picsum.photos/seed/agua-station/1200/750", caption: { pt: "AguaQuality — Gestão IoT", en: "AguaQuality — IoT Management" }, project: "aguaquality" },
  { src: "https://picsum.photos/seed/social-media/1200/750", caption: { pt: "HelloSocial — Conteúdo com IA", en: "HelloSocial — AI Content" }, project: "hellosocial" },
  { src: "https://picsum.photos/seed/minecraft-bot/1200/750", caption: { pt: "MaineCoon — LLM no Minecraft", en: "MaineCoon — LLM in Minecraft" }, project: "mainecoon" },
  { src: "https://picsum.photos/seed/finance-dash/1200/750", caption: { pt: "Finance Tracker — Análise Visual", en: "Finance Tracker — Visual Analytics" }, project: "finance-tracker" },
  { src: "https://picsum.photos/seed/forest-vision/1200/750", caption: { pt: "ForestAI — Detecção de Espécies", en: "ForestAI — Species Detection" }, project: "forestai" },
  { src: "https://picsum.photos/seed/dev-setup1/1200/750", caption: { pt: "CachyOS + Hyprland — Rice", en: "CachyOS + Hyprland — Rice" }, project: null },
  { src: "https://picsum.photos/seed/dev-terminal/1200/750", caption: { pt: "Terminal & Tooling — Workflow", en: "Terminal & Tooling — Workflow" }, project: null },
  { src: "https://picsum.photos/seed/capivara-pdf/1200/750", caption: { pt: "Capivara — Suíte PDF Completa", en: "Capivara — Full PDF Suite" }, project: "capivara" },
  { src: "https://picsum.photos/seed/tarsier-json/1200/750", caption: { pt: "Tarsier — Editor JSON Visual", en: "Tarsier — Visual JSON Editor" }, project: "tarsier" },
  { src: "https://picsum.photos/seed/kakapo-editor/1200/750", caption: { pt: "Kakapo — Editor de Imagens", en: "Kakapo — Image Editor" }, project: "kakapo" },
  { src: "https://picsum.photos/seed/oilbird-md/1200/750", caption: { pt: "Oilbird — Markdown → PDF", en: "Oilbird — Markdown → PDF" }, project: "oilbird" },
  { src: "https://picsum.photos/seed/cegonha-form/1200/750", caption: { pt: "Cegonha — Gerador de Formulários", en: "Cegonha — Form Generator" }, project: "cegonha" },
];

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: typeof galleryImages;
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const { t } = useLang();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [idx, images.length, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t({ pt: "Visualizador de imagem", en: "Image viewer" })}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.95)", backdropFilter: "blur(30px)" }}
      onClick={onClose}
    >
      <div className="relative max-w-[92vw] max-h-[88vh]" onClick={(e) => e.stopPropagation()}>
                <img
                  src={images[idx].src.replace("1200/750", "1920/1200")}
                  alt={t(images[idx].caption)}
                  className="max-w-full max-h-[85vh] object-contain"
                  style={{ animation: "lightboxIn 0.5s var(--ease-spring-1)", borderRadius: "4px" }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
        <div
          className="absolute bottom-0 inset-x-0 px-6 py-4 flex items-end justify-between"
          style={{
            background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
            borderRadius: "0 0 4px 4px",
          }}
        >
          <p className="text-sm font-serif font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
            {t(images[idx].caption)}
          </p>
          <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            {String(idx + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <button
        onClick={onClose}
        aria-label={t({ pt: "Fechar", en: "Close" })}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
        style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.3s" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
        }}
      >
        <X className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIdx((i) => (i - 1 + images.length) % images.length);
        }}
        aria-label={t({ pt: "Anterior", en: "Previous" })}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full"
        style={{
          background: "rgba(255,255,255,0.06)",
          color: "rgba(255,255,255,0.4)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s",
        }}
onMouseEnter={(e) => {
const el = e.currentTarget as HTMLElement;
el.style.background = "rgba(255,255,255,0.12)";
el.style.color = "rgba(255,255,255,0.9)";
el.style.borderColor = "rgba(255,255,255,0.2)";
}}
onMouseLeave={(e) => {
const el = e.currentTarget as HTMLElement;
el.style.background = "rgba(255,255,255,0.06)";
el.style.color = "rgba(255,255,255,0.4)";
el.style.borderColor = "rgba(255,255,255,0.08)";
}}
>
<ChevronLeft className="w-5 h-5" />
</button>

<button
onClick={(e) => {
e.stopPropagation();
setIdx((i) => (i + 1) % images.length);
}}
aria-label={t({ pt: "Próximo", en: "Next" })}
className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full"
style={{
background: "rgba(255,255,255,0.06)",
color: "rgba(255,255,255,0.4)",
border: "1px solid rgba(255,255,255,0.08)",
transition: "all 0.3s",
}}
onMouseEnter={(e) => {
const el = e.currentTarget as HTMLElement;
el.style.background = "rgba(255,255,255,0.12)";
el.style.color = "rgba(255,255,255,0.9)";
el.style.borderColor = "rgba(255,255,255,0.2)";
}}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "rgba(255,255,255,0.06)";
          el.style.color = "rgba(255,255,255,0.4)";
          el.style.borderColor = "rgba(255,255,255,0.08)";
        }}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <style>{`
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
gsap.from(".gallery-header > *", {
y: 60,
opacity: 0,
stagger: 0.12,
duration: 1.2,
ease: EASE_PRIMARY,
scrollTrigger: { trigger: ".gallery-header", start: SCROLL_START, once: true },
});

      const cards = gsap.utils.toArray<HTMLElement>(".gallery-card");
      cards.forEach((card) => {
        const img = card.querySelector(".gallery-card-img") as HTMLElement;
        const caption = card.querySelector(".gallery-card-caption") as HTMLElement;
        const counter = card.querySelector(".gallery-card-counter") as HTMLElement;

        gsap.fromTo(
          card,
          { scale: 0.72, opacity: 0.2, borderRadius: "32px" },
          {
            scale: 1,
            opacity: 1,
            borderRadius: "10px",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 35%",
              scrub: true,
            },
          }
        );

        gsap.to(card, {
          scale: 0.72,
          opacity: 0.2,
          borderRadius: "32px",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "top top",
            scrub: true,
          },
        });

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                end: "top 35%",
                scrub: true,
              },
            }
          );
          gsap.to(img, {
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 15%",
              end: "top top",
              scrub: true,
            },
          });
        }

        if (caption) {
          gsap.fromTo(
            caption,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 55%",
                end: "top 35%",
                scrub: true,
              },
            }
          );
          gsap.to(caption, {
            opacity: 0,
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 20%",
              end: "top 10%",
              scrub: true,
            },
          });
        }

        if (counter) {
          gsap.fromTo(
            counter,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 60%",
                end: "top 35%",
                scrub: true,
              },
            }
          );
          gsap.to(counter, {
            opacity: 0,
            y: -10,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 18%",
              end: "top 10%",
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
<div ref={sectionRef} className="section-root">
<div className="gallery-header max-w-3xl mx-auto px-6 lg:px-12 mb-8">
        <span className="section-label">{t({ pt: "Galeria", en: "Gallery" })}</span>
        <h2
          className="font-serif font-bold leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
        >
          {t({ pt: "Imagens dos ", en: "Project " })}
          <span className="italic" style={{ color: "var(--color-text-2)" }}>
            {t({ pt: "projetos.", en: "gallery." })}
          </span>
        </h2>
      <p className="text-sm" style={{ color: "var(--color-text-2)", lineHeight: "1.8" }}>
        {t({ pt: "Clique para expandir. Role para navegar.", en: "Click to expand. Scroll to navigate." })}
      </p>
      <p
        className="font-mono mt-2"
        style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--color-accent)", opacity: 0.7 }}
      >
        {t({ pt: "Em progresso — imagens reais em breve.", en: "In progress — real images coming soon." })}
      </p>
      </div>

      <div
        className="flex items-center justify-center gap-2 mb-16 px-6"
        style={{ maxWidth: "56rem", margin: "0 auto", marginBottom: "4rem" }}
      >
        <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--color-text-3)", letterSpacing: "0.1em" }}>
          {String(galleryImages.length).padStart(2, "0")} {t({ pt: "imagens", en: "images" })}
        </span>
        <span style={{ width: "2rem", height: "1px", background: "var(--color-border)", display: "inline-block" }} />
      </div>

      <div style={{ maxWidth: "60rem", margin: "0 auto" }}>
        {galleryImages.map((g, i) => (
          <div
            key={i}
            style={{
              maxWidth: "56rem",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              className="gallery-card relative overflow-hidden"
              style={{
                margin: "18vh 0",
                border: "1px solid var(--color-border)",
                willChange: "transform, opacity, border-radius",
                cursor: "pointer",
              }}
              onClick={() => setLightbox(i)}
            >
              <img
                  src={g.src.replace("1200/750", "1400/875")}
                  alt={t(g.caption)}
                  className="gallery-card-img w-full object-cover"
                  style={{ aspectRatio: "16 / 10", display: "block", willChange: "transform" }}
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />

              <div
                className="gallery-card-counter absolute top-4 left-4"
                style={{
                  willChange: "opacity, transform",
                  padding: "0.3rem 0.7rem",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  className="font-mono"
                  style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                className="gallery-card-caption"
                style={{
                  position: "absolute",
                  bottom: 0,
                  insetInline: 0,
                  padding: "1.75rem 2rem",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                  pointerEvents: "none",
                  willChange: "opacity, transform",
                }}
              >
                <span
                  className="font-mono block mb-1"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent-light)", opacity: 0.8 }}
                >
                  {String(i + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                </span>
                <p
                  className="font-serif font-medium"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)", color: "rgba(255,255,255,0.92)" }}
                >
                  {t(g.caption)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
      <Lightbox
        images={galleryImages}
        startIndex={lightbox}
        onClose={closeLightbox}
      />
      )}

      <style>{`
        .gallery-card:hover {
          border-color: var(--color-accent-light) !important;
        }
        @media (pointer: fine) {
          .gallery-card { cursor: none; }
        }
        @media (pointer: coarse) {
          .gallery-card { cursor: pointer; }
        }
      `}</style>
    </div>
  );
}
