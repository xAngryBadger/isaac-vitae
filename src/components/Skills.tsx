import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header: slide + fade
      gsap.from(".skills-label, .skills-title", {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });

      // Groups: slide only — NO autoAlpha so they're never invisible
      gsap.from(".skill-group", {
        y: 40, stagger: 0.07, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".skills-grid", start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 lg:py-40"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <span className="skills-label section-label">Habilidades & Ferramentas</span>
          <h2
            className="skills-title font-serif font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
          >
            Stack que uso para{" "}
            <span className="italic" style={{ color: "var(--color-gold)" }}>entregar resultados.</span>
          </h2>
        </div>

        <div className="skills-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className="skill-group p-6 lg:p-8 border transition-colors duration-300"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-100)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,165,116,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--color-gold)" }}>
                  {group.label}
                </h3>
                <span className="font-mono text-2xl font-bold" style={{ color: "var(--color-gold)", opacity: 0.12 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="w-10 h-0.5 mb-5" style={{ backgroundColor: "var(--color-gold-2)" }} />

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="doppel px-3 py-1.5 text-xs font-mono uppercase tracking-wider cursor-default"
                    data-text={skill}
                    style={{
                      border: "1px solid rgba(196,165,116,0.18)",
                      color: "var(--color-text-2)",
                      backgroundColor: "rgba(196,165,116,0.03)",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,165,116,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,165,116,0.18)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
