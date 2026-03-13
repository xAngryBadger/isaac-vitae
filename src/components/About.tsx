import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personal, education, courses } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label + title reveal
      gsap.from(".about-label, .about-title", {
        autoAlpha: 0, y: 50,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-title", start: "top 85%", once: true },
      });

      // Bio text lines
      gsap.from(".about-bio p", {
        autoAlpha: 0, y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-bio", start: "top 85%", once: true },
      });

      // Education cards
      gsap.from(".edu-card", {
        autoAlpha: 0, x: -40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".edu-card", start: "top 85%", once: true },
      });

      // Stat counters
      document.querySelectorAll(".stat-num").forEach((el) => {
        const target = parseInt((el as HTMLElement).dataset.target || "0");
        gsap.to({ v: 0 }, {
          v: target,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: function() { el.textContent = String(Math.round(this.targets()[0].v)); },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Esquerda */}
          <div>
            <span className="about-label section-label">Sobre Mim</span>
            <h2
              className="about-title font-serif font-bold leading-tight mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
            >
              Dev que constrói sistemas reais —{" "}
              <span className="italic" style={{ color: "var(--color-gold)" }}>
                não apenas protótipos.
              </span>
            </h2>

            <div className="about-bio space-y-5">
              <p style={{ color: "var(--color-text-2)", lineHeight: "1.8" }}>
                {personal.bio}
              </p>
              <p style={{ color: "var(--color-text-2)", lineHeight: "1.8" }}>
                Atualmente na <span style={{ color: "var(--color-text)" }}>Paware Softwares</span>, trabalho com migração de dados para Azure e evolução de agentes de IA (DALL-E 3, Flux) para geração de conteúdo. Background em automação, IoT e pipelines de visão computacional.
              </p>
              <p style={{ color: "var(--color-text-2)", lineHeight: "1.8" }}>
                Cursando <span style={{ color: "var(--color-text)" }}>Engenharia de Computação</span> na Cruzeiro do Sul — 5° semestre. Inglês fluente.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t" style={{ borderColor: "var(--color-border)" }}>
              {[
                { value: 4, suffix: "+", label: "Projetos" },
                { value: 1, suffix: "ano+", label: "Experiência" },
                { value: 6, suffix: "", label: "Tecnologias core" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="font-serif font-bold mb-1"
                    style={{ fontSize: "2.5rem", color: "var(--color-gold)" }}
                  >
                    <span className="stat-num" data-target={s.value}>0</span>
                    <span>{s.suffix}</span>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--color-text-3)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direita — Formação + Cursos */}
          <div className="space-y-8">
            <div>
              <span className="section-label">Formação</span>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="edu-card p-6 border transition-colors duration-300"
                    style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-100)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold-2)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-semibold" style={{ color: "var(--color-text)" }}>
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm mb-1" style={{ color: "var(--color-text-2)" }}>{edu.institution}</p>
                    <span
                      className="inline-block px-2 py-0.5 text-xs font-mono"
                      style={{
                        color: edu.status.includes("Cursando") ? "var(--color-gold)" : "var(--color-text-3)",
                        borderColor: edu.status.includes("Cursando") ? "rgba(196,165,116,0.3)" : "var(--color-border)",
                        border: "1px solid",
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="section-label">Certificações</span>
              <div className="space-y-3">
                {courses.map((c, i) => (
                  <div
                    key={i}
                    className="edu-card flex items-baseline justify-between py-3 border-b"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div>
                      <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>{c.name}</span>
                      <span className="text-xs ml-2" style={{ color: "var(--color-text-3)" }}>— {c.issuer}</span>
                    </div>
                    {c.hours && (
                      <span className="font-mono text-xs" style={{ color: "var(--color-gold)" }}>{c.hours}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
