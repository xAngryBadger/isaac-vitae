import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-label, .exp-title", {
        autoAlpha: 0, y: 40,
        stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".exp-title", start: "top 85%", once: true },
      });

      // Linha do tempo animada
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2, ease: "power2.out",
        scrollTrigger: { trigger: ".timeline-line", start: "top 80%", end: "bottom 20%", once: true },
      });

      // Cards de experiência
      gsap.from(".exp-card", {
        autoAlpha: 0, x: -50,
        stagger: 0.2, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".exp-card", start: "top 85%", once: true },
      });

      // Highlights das experiências
      gsap.from(".exp-highlight", {
        autoAlpha: 0, y: 15,
        stagger: 0.08, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".exp-highlight", start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experiencia" ref={sectionRef} className="py-32 lg:py-40" style={{ backgroundColor: "var(--color-bg-100)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="exp-label section-label">Experiência Profissional</span>
          <h2
            className="exp-title font-serif font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
          >
            Onde construí{" "}
            <span className="italic" style={{ color: "var(--color-gold)" }}>expertise real.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div
            className="timeline-line absolute left-0 lg:left-[260px] top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--color-border-2)" }}
          />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card relative flex flex-col lg:flex-row gap-0 lg:gap-16 pb-16 last:pb-0">
                {/* Data (esquerda) */}
                <div className="lg:w-[260px] shrink-0 lg:text-right pt-0 lg:pt-1 pb-4 lg:pb-0 relative">
                  {/* Dot na linha */}
                  <div
                    className="absolute left-[-4.5px] lg:left-[255.5px] top-2 w-2.5 h-2.5 rounded-full border-2 z-10"
                    style={{
                      backgroundColor: exp.current ? "var(--color-gold)" : "var(--color-bg-100)",
                      borderColor: exp.current ? "var(--color-gold)" : "var(--color-border-2)",
                    }}
                  />
                  <span
                    className="font-mono text-xs tracking-[0.1em] block"
                    style={{ color: exp.current ? "var(--color-gold)" : "var(--color-text-3)" }}
                  >
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span
                      className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 text-xs font-mono"
                      style={{ color: "var(--color-gold)", border: "1px solid rgba(196,165,116,0.3)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-gold)" }} />
                      Atual
                    </span>
                  )}
                </div>

                {/* Conteúdo (direita) */}
                <div
                  className="flex-1 p-8 border transition-colors duration-300"
                  style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,165,116,0.2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; }}
                >
                  {/* Header do card */}
                  <div className="mb-6">
                    <h3
                      className="font-serif font-semibold text-xl mb-1"
                      style={{ color: "var(--color-text)" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="font-mono text-sm" style={{ color: "var(--color-gold)" }}>
                      {exp.company}
                    </p>
                  </div>

                  {/* Linha accent */}
                  <div
                    className="w-full h-px mb-6"
                    style={{ backgroundImage: "linear-gradient(to right, var(--color-border-2), transparent)" }}
                  />

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="exp-highlight flex gap-3">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--color-gold)" }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
