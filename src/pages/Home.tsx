import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { personal } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { ArrowDown, Github, Linkedin, FileDown } from "lucide-react";
import { EASE_SECONDARY } from "../lib/scroll-anim";

export default function Home() {
const containerRef = useRef<HTMLDivElement>(null);
const subtitleRef = useRef<HTMLParagraphElement>(null);
const bioRef = useRef<HTMLParagraphElement>(null);
const ctaRef = useRef<HTMLDivElement>(null);
const { t } = useLang();

useEffect(() => {
const ctx = gsap.context(() => {
const tl = gsap.timeline({ delay: 0.1 });

tl.from(".hero-label", { opacity: 0, y: 10, duration: 0.6, ease: EASE_SECONDARY }, 0);
tl.from(subtitleRef.current, { opacity: 0, y: 16, duration: 0.6, ease: EASE_SECONDARY }, 0.4);
tl.from(bioRef.current, { opacity: 0, y: 16, duration: 0.6, ease: EASE_SECONDARY }, 0.55);
tl.from(ctaRef.current, { opacity: 0, y: 16, duration: 0.6, ease: EASE_SECONDARY }, 0.7);
tl.from(".hero-social", { opacity: 0, y: 10, duration: 0.45, stagger: 0.08 }, 0.85);
}, containerRef);

return () => ctx.revert();
}, []);

  return (
    <section ref={containerRef} className="split-hero flex items-center justify-center min-h-[100dvh] px-6 lg:px-10 py-16">
      <div className="hero-content max-w-xl mx-auto text-center">
<div className="hero-label flex items-center justify-center gap-3 mb-6">
<span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--color-text-2)" }}>
{t(personal.title)}
</span>
</div>

<div className="hero-avatar mx-auto mb-6">
<div
className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mx-auto"
style={{ border: "1px solid var(--color-border)" }}
>
<img
src={`${import.meta.env.BASE_URL}images/foto-isaac.jpg`}
alt={personal.name}
className="w-full h-full object-cover grayscale-[30%]"
/>
</div>
</div>

<h1
ref={containerRef}
className="font-serif font-bold leading-[1.05] tracking-tight mb-4"
style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", color: "var(--color-text)" }}
>
{personal.name.split(" ")[0]}{" "}
<span
className="italic"
style={{ color: "var(--color-accent)" }}
>
{personal.name.split(" ")[1]}
</span>
</h1>

        <p
          ref={subtitleRef}
          className="font-mono text-xs tracking-[0.15em] uppercase mb-6"
          style={{ color: "var(--color-text-2)" }}
        >
          {t(personal.subtitle)}
        </p>

        <p
          ref={bioRef}
          className="text-base leading-relaxed max-w-lg mx-auto mb-8"
          style={{ color: "var(--color-text-2)" }}
          data-selectable
        >
          {t(personal.bio)}
        </p>

<div ref={ctaRef} className="flex flex-wrap justify-center gap-3 mb-8">
<Link to="/projects" className="clip-btn-filled group">
<span>
{t({ pt: "Ver Projetos", en: "View Projects" })}
</span>
<ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
</Link>
<a href={`mailto:${personal.email}`} className="clip-btn">
{t({ pt: "Falar Comigo", en: "Talk to Me" })}
</a>
<Link to="/cv" className="clip-btn">
<FileDown className="w-4 h-4" />
{t({ pt: "Currículo", en: "Resume" })}
</Link>
</div>

<div className="flex items-center justify-center gap-4">
<a
href={personal.linkedin}
target="_blank"
rel="noopener noreferrer"
aria-label="LinkedIn"
className="hero-social custom-cursor-target transition-colors"
style={{ color: "var(--color-text-3)" }}
>
<Linkedin className="w-4 h-4" />
</a>
<a
href={personal.github}
target="_blank"
rel="noopener noreferrer"
aria-label="GitHub"
className="hero-social custom-cursor-target transition-colors"
style={{ color: "var(--color-text-3)" }}
>
<Github className="w-4 h-4" />
</a>
<span className="w-px h-3" style={{ backgroundColor: "var(--color-border)" }} />
<span className="font-mono text-xs tracking-[0.1em]" style={{ color: "var(--color-text-2)" }}>
{t(personal.location)}
</span>
</div>
      </div>
    </section>
  );
}
