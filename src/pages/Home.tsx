import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { personal } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { ArrowDown, Github, Linkedin, FileDown } from "lucide-react";
import { EASE_PRIMARY, EASE_SECONDARY } from "../lib/scroll-anim";
import { SplitText } from "../components/SplitText";
import { HeroCorners } from "../components/HeroCorners";
import { useMagneticHover } from "../lib/useMagneticHover";

export default function Home() {
const containerRef = useRef<HTMLDivElement>(null);
const magneticRef = useMagneticHover(0.3);
const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Corner animations - we'll keep these as is for now, but they could be enhanced
      tl.from(".corner-line-h", { scaleX: 0, duration: 0.8, ease: EASE_PRIMARY, stagger: 0.1 }, 0)
        .from(".corner-line-v", { scaleY: 0, duration: 0.8, ease: EASE_PRIMARY, stagger: 0.1 }, 0.1)
        .from(".corner-dot", { scale: 0, opacity: 0, duration: 0.3, stagger: 0.05 }, 0.4);

      // Hero avatar - scale-materialize
      tl.from(".hero-avatar", { opacity: 0, scale: 0.92, duration: 0.6, ease: EASE_SECONDARY }, 0.3);
      
      // Bio text - fade-up
      tl.from(".hero-bio", { opacity: 0, y: 20, duration: 0.6, ease: EASE_SECONDARY }, 0.7);
      
      // CTA buttons - clip-reveal
      tl.from(".hero-cta", { opacity: 0, y: 20, duration: 0.6, ease: EASE_SECONDARY }, 1.0);
      
      // Hero social - fade-up
      tl.from(".hero-social", { opacity: 0, y: 10, duration: 0.45, stagger: 0.08 }, 1.15);
    }, containerRef);

const onScroll = () => {
  const y = window.scrollY;
  gsap.set(".hero-bg-gradient", { y: y * 0.3 });
  gsap.set(".hero-content", { y: y * 0.15, opacity: 1 - y / (window.innerHeight * 0.7) });
};
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert();
    };
  }, []);

return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="hero-bg-gradient absolute inset-0 blur-sharpen parallax-bg"
        data-speed="0.3"
        style={{
          backgroundImage:
          "radial-gradient(ellipse at 70% 20%, var(--color-bg-elevated) 0%, transparent 50%)",
        }}
      />

  {/* Corner decorations */}
      <div className="absolute top-8 left-8 lg:top-12 lg:left-12 pointer-events-none">
        <div className="corner-dot w-1.5 h-1.5 rounded-full mb-2" style={{ backgroundColor: "var(--color-text-3)" }} />
        <div className="corner-line-h h-px w-16 lg:w-24 origin-left" style={{ backgroundColor: "var(--color-border-2)" }} />
        <div className="corner-line-v w-px h-16 lg:h-24 origin-top" style={{ backgroundColor: "var(--color-border-2)" }} />
      </div>
      <div className="absolute top-8 right-8 lg:top-12 lg:right-12 pointer-events-none flex flex-col items-end">
        <div className="corner-dot w-1.5 h-1.5 rounded-full mb-2" style={{ backgroundColor: "var(--color-text-3)" }} />
        <div className="corner-line-h h-px w-16 lg:w-24 origin-right" style={{ backgroundColor: "var(--color-border-2)" }} />
        <div className="corner-line-v w-px h-16 lg:h-24 origin-top ml-auto" style={{ backgroundColor: "var(--color-border-2)" }} />
      </div>
      <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 pointer-events-none flex flex-col-reverse">
        <div className="corner-dot w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "var(--color-text-3)" }} />
        <div className="corner-line-h h-px w-16 lg:w-24 origin-left" style={{ backgroundColor: "var(--color-border-2)" }} />
        <div className="corner-line-v w-px h-16 lg:h-24 origin-bottom" style={{ backgroundColor: "var(--color-border-2)" }} />
      </div>
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 pointer-events-none flex flex-col-reverse items-end">
        <div className="corner-dot w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "var(--color-text-3)" }} />
        <div className="corner-line-h h-px w-16 lg:w-24 origin-right" style={{ backgroundColor: "var(--color-border-2)" }} />
        <div className="corner-line-v w-px h-16 lg:h-24 origin-bottom ml-auto" style={{ backgroundColor: "var(--color-border-2)" }} />
      </div>

      {/* HeroCorners - animated SVG borders */}
      <HeroCorners className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="hero-content parallax-fg relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="hero-avatar mx-auto mb-8">
          <div
            className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mx-auto"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/foto-isaac.jpg`}
              alt={personal.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Split headline */}
        <div className="flex flex-col items-center mb-6">
          <SplitText 
            as="span" 
            className="block font-serif font-bold leading-h1 tracking-h1 text-h1 mb-2"
            delay={0.3}
            duration={1.2}
            stagger={0.06}
            splitType="words"
          >
            {personal.name.split(" ")[0]}
          </SplitText>
          <span 
            className="block font-serif font-bold leading-h1 tracking-h1 text-h1 italic text-text-2"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            {personal.name.split(" ")[1] ?? ""}
          </span>
        </div>

        {/* Subtitle with SplitText */}
        <p
          className="font-mono text-label tracking-eyebrow uppercase mb-8 text-text-2"
        >
          <SplitText
            as="span"
            className="block"
            delay={0.6}
            duration={1.0}
            stagger={0.08}
            splitType="words"
          >
            {t(personal.subtitle)}
          </SplitText>
        </p>

        {/* Bio text */}
        <p
          className="hero-bio text-body leading-body max-w-2xl mx-auto mb-12 text-text-2"
          data-selectable
        >
          {t(personal.bio)}
        </p>

{/* CTA buttons */}
<div className="hero-cta flex flex-wrap justify-center gap-4 mb-10">
<Link
  to="/projects"
  ref={magneticRef as React.RefObject<HTMLAnchorElement>}
  className="clip-btn-filled group magnetic-hover"
>
  <span>
    {t({ pt: "Ver Projetos", en: "View Projects" })}
  </span>
  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
</Link>
<a
  href={`mailto:${personal.email}`}
  ref={magneticRef as React.RefObject<HTMLAnchorElement>}
  className="clip-btn magnetic-hover"
>
  {t({ pt: "Falar Comigo", en: "Talk to Me" })}
</a>
<Link
  to="/cv"
  ref={magneticRef as React.RefObject<HTMLAnchorElement>}
  className="clip-btn magnetic-hover"
>
  <FileDown className="w-4 h-4" />
  {t({ pt: "Currículo", en: "Resume" })}
</Link>
</div>

        {/* Social links */}
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
    </section>
    );
}
