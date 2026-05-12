import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { personal } from "../data/content";
import { scrambleText } from "../lib/scramble";
import { useLang } from "../lib/LanguageContext";
import { ArrowDown, Github, Linkedin, FileDown } from "lucide-react";
import { EASE_PRIMARY, EASE_SECONDARY } from "../lib/scroll-anim";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

    tl.from(".corner-line-h", { scaleX: 0, duration: 0.8, ease: EASE_PRIMARY, stagger: 0.1 }, 0)
    .from(".corner-line-v", { scaleY: 0, duration: 0.8, ease: EASE_PRIMARY, stagger: 0.1 }, 0.1)
    .from(".corner-dot", { scale: 0, opacity: 0, duration: 0.3, stagger: 0.05 }, 0.4);

    tl.from(".hero-label", { opacity: 0, y: 10, duration: 0.6, ease: EASE_SECONDARY }, 0.3);

      tl.call(() => {
        if (titleRef.current) {
          const spans = titleRef.current.querySelectorAll("[data-scramble-reveal]");
          spans.forEach((span, i) => {
            setTimeout(() => {
              scrambleText({
                el: span as HTMLElement,
                text: (span as HTMLElement).dataset.scrambleReveal || span.textContent || "",
                duration: 700,
                scramblePct: 0.6,
              });
            }, i * 180);
          });
        }
      }, [], 0.55);

    tl.from(subtitleRef.current, { opacity: 0, y: 16, duration: 0.6, ease: EASE_SECONDARY }, 0.9);
    tl.from(bioRef.current, { opacity: 0, y: 16, duration: 0.6, ease: EASE_SECONDARY }, 1.05);
    tl.from(ctaRef.current, { opacity: 0, y: 16, duration: 0.6, ease: EASE_SECONDARY }, 1.2);
    tl.from(".hero-social", { opacity: 0, y: 10, duration: 0.45, stagger: 0.08 }, 1.35);
  tl.from(scrollRef.current, { opacity: 0, duration: 0.5 }, 1.5);
    }, containerRef);

    const onScroll = () => {
      const y = window.scrollY;
      gsap.set(".hero-bg-gradient", { y: y * 0.3 });
      gsap.set(".hero-content", { opacity: 1 - y / (window.innerHeight * 0.7) });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert();
    };
  }, []);

  const handleCtaHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget.querySelector("[data-scramble]") as HTMLElement;
    if (el) scrambleText({ el, text: el.getAttribute("data-scramble") || el.textContent || "", duration: 350 });
  };

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="hero-bg-gradient absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 50%, var(--color-accent-06) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, var(--color-sage-05) 0%, transparent 50%)",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 lg:top-12 lg:left-12 pointer-events-none">
        <div className="corner-dot w-1.5 h-1.5 rounded-full mb-2" style={{ backgroundColor: "var(--color-accent)" }} />
        <div className="corner-line-h h-px w-16 lg:w-24 origin-left" style={{ backgroundColor: "var(--color-border-2)" }} />
        <div className="corner-line-v w-px h-16 lg:h-24 origin-top" style={{ backgroundColor: "var(--color-border-2)" }} />
      </div>
      <div className="absolute top-8 right-8 lg:top-12 lg:right-12 pointer-events-none flex flex-col items-end">
        <div className="corner-dot w-1.5 h-1.5 rounded-full mb-2" style={{ backgroundColor: "var(--color-accent)" }} />
        <div className="corner-line-h h-px w-16 lg:w-24 origin-right" style={{ backgroundColor: "var(--color-border-2)" }} />
        <div className="corner-line-v w-px h-16 lg:h-24 origin-top ml-auto" style={{ backgroundColor: "var(--color-border-2)" }} />
      </div>
      <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 pointer-events-none flex flex-col-reverse">
        <div className="corner-dot w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "var(--color-accent)" }} />
        <div className="corner-line-h h-px w-16 lg:w-24 origin-left" style={{ backgroundColor: "var(--color-border-2)" }} />
        <div className="corner-line-v w-px h-16 lg:h-24 origin-bottom" style={{ backgroundColor: "var(--color-border-2)" }} />
      </div>
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 pointer-events-none flex flex-col-reverse items-end">
        <div className="corner-dot w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "var(--color-accent)" }} />
        <div className="corner-line-h h-px w-16 lg:w-24 origin-right" style={{ backgroundColor: "var(--color-border-2)" }} />
        <div className="corner-line-v w-px h-16 lg:h-24 origin-bottom ml-auto" style={{ backgroundColor: "var(--color-border-2)" }} />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="hero-label flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px" style={{ backgroundColor: "var(--color-accent-light)" }} />
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--color-accent)" }}>
            {t(personal.title)}
          </span>
          <div className="w-8 h-px" style={{ backgroundColor: "var(--color-accent-light)" }} />
        </div>

        <h1
          ref={titleRef}
          className="font-serif font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--color-text)" }}
        >
    <span data-scramble-reveal={personal.name.split(" ")[0] ?? ""}>
          {personal.name.split(" ")[0] ?? ""}
        </span>{" "}
        <span
          data-scramble-reveal={personal.name.split(" ")[1] ?? ""}
          className="italic"
          style={{ color: "var(--color-accent)" }}
        >
          {personal.name.split(" ")[1] ?? ""}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="font-mono text-sm tracking-[0.15em] uppercase mb-8"
          style={{ color: "var(--color-text-2)" }}
        >
          {t(personal.subtitle)}
        </p>

        <p
          ref={bioRef}
          className="text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ color: "var(--color-text-2)" }}
          data-selectable
        >
          {t(personal.bio)}
        </p>

        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            to="/projects"
            className="clip-btn-filled group"
            onMouseEnter={handleCtaHover}
          >
            <span data-scramble={t({ pt: "Ver Projetos", en: "View Projects" })}>
              {t({ pt: "Ver Projetos", en: "View Projects" })}
            </span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Link>
        <a
          href={`mailto:${personal.email}`}
          className="clip-btn"
        >
          {t({ pt: "Falar Comigo", en: "Talk to Me" })}
        </a>
        <Link
          to="/cv"
          className="clip-btn"
        >
          <FileDown className="w-4 h-4" />
          {t({ pt: "Currículo", en: "Resume" })}
        </Link>
        </div>

        <div className="flex items-center justify-center gap-6">
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hero-social custom-cursor-target transition-colors duration-300"
          style={{ color: "var(--color-text-3)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-3)"; }}
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hero-social custom-cursor-target transition-colors duration-300"
          style={{ color: "var(--color-text-3)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-3)"; }}
        >
          <Github className="w-5 h-5" />
        </a>
          <span className="w-px h-4" style={{ backgroundColor: "var(--color-border-2)" }} />
          <span className="font-mono text-xs tracking-[0.1em]" style={{ color: "var(--color-text-3)" }}>
            {t(personal.location)}
          </span>
        </div>
      </div>

      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--color-text-3)" }}>
          {t({ pt: "Rolar", en: "Scroll" })}
        </span>
        <div
          className="w-px h-12 origin-top"
          style={{
            backgroundImage: "linear-gradient(to bottom, var(--color-accent), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
