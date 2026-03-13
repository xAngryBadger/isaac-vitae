import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/content";
import { ArrowUpRight } from "lucide-react";
import { scrambleText } from "../lib/scramble";

gsap.registerPlugin(ScrollTrigger);

// 6-col mosaic that fully fills each row (total = 6 per row)
// Row 1-2: aguaquality (3) + hellosocial (3) | both row-span-2
// Row 3:   fennec (2) + meritage (2) + florasensus (2)
// Row 4:   forestai (6) — full width
const colSpans: Record<string, string> = {
  aguaquality: "col-span-1 lg:col-span-3",
  hellosocial: "col-span-1 lg:col-span-3",
  fennec:      "col-span-1 lg:col-span-2",
  meritage:    "col-span-1 lg:col-span-2",
  florasensus: "col-span-1 lg:col-span-2",
  forestai:    "col-span-1 lg:col-span-6",
};

const rowSpans: Record<string, string> = {
  aguaquality: "lg:row-span-2",
  hellosocial: "lg:row-span-2",
};

const minHeights: Record<string, string> = {
  aguaquality: "340px",
  hellosocial: "340px",
  fennec:      "260px",
  meritage:    "260px",
  florasensus: "260px",
  forestai:    "200px",
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-label, .proj-title", {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
      gsap.from(".proj-card", {
        y: 40, opacity: 0, stagger: 0.08, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".proj-grid", start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleTitleScramble = (e: React.MouseEvent<HTMLElement>, text: string) => {
    scrambleText({ el: e.currentTarget, text, duration: 400, scramblePct: 0.5 });
  };

  return (
    <section id="projetos" ref={sectionRef} className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="proj-label section-label">Projetos</span>
            <h2
              className="proj-title font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
            >
              Sistemas que{" "}
              <span className="italic" style={{ color: "var(--color-gold)" }}>resolvem problemas reais.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm" style={{ color: "var(--color-text-2)", lineHeight: "1.8" }}>
            Passe o mouse para explorar cada projeto em detalhe.
          </p>
        </div>

        <div
          className="proj-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4"
          style={{ gridAutoRows: "minmax(200px, auto)" }}
        >
          {projects.map((proj) => {
            const isFocused = focused === proj.id;
            const isDimmed = focused !== null && !isFocused;
            const colClass = `${colSpans[proj.id] || ""} ${rowSpans[proj.id] || ""}`;

            return (
              <div
                key={proj.id}
                className={`proj-card relative overflow-hidden cursor-none border ${colClass}`}
                style={{
                  minHeight: minHeights[proj.id] || "260px",
                  borderColor: isFocused ? "rgba(196,165,116,0.5)" : "var(--color-border)",
                  backgroundColor: proj.color || "var(--color-bg-100)",
                  transform: isDimmed ? "scale(0.96)" : "scale(1)",
                  opacity: isDimmed ? 0.28 : 1,
                  filter: isDimmed ? "blur(1.5px)" : "none",
                  zIndex: isFocused ? 20 : 1,
                  transition: "transform 0.4s cubic-bezier(.22,1,.36,1), opacity 0.4s ease, filter 0.4s ease, border-color 0.25s ease",
                  boxShadow: isFocused ? "0 0 0 1px rgba(196,165,116,0.3), 0 20px 50px rgba(0,0,0,0.7)" : "none",
                }}
                onMouseEnter={() => setFocused(proj.id)}
                onMouseLeave={() => setFocused(null)}
              >
                {/* Background */}
                {proj.image ? (
                  <div className="absolute inset-0">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                      style={{
                        opacity: isFocused ? 0.25 : 0.12,
                        transform: isFocused ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.6s cubic-bezier(.22,1,.36,1), opacity 0.4s ease",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 35% 35%, ${proj.color}55 0%, transparent 65%)`,
                      opacity: isFocused ? 0.5 : 0.25,
                      transition: "opacity 0.4s ease",
                    }}
                  />
                )}

                {/* Permanent dark gradient  */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: "linear-gradient(to top, rgba(8,11,9,0.96) 0%, rgba(8,11,9,0.4) 55%, transparent 100%)" }}
                />

                {/* BASE layer — title peek, always visible, hidden when focused */}
                <div
                  className="absolute inset-0 z-10 flex flex-col justify-between p-6"
                  style={{
                    opacity: isFocused ? 0 : 1,
                    transition: "opacity 0.25s ease",
                    pointerEvents: isFocused ? "none" : "auto",
                  }}
                >
                  <div className="self-end">
                    <div
                      className="w-8 h-8 flex items-center justify-center border"
                      style={{ borderColor: "var(--color-border-2)", color: "var(--color-text-3)" }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "var(--color-text-3)" }}>
                      {proj.category}
                    </p>
                    <h3
                      className="font-serif font-bold leading-tight"
                      style={{
                        fontSize: proj.id === "aguaquality" || proj.id === "hellosocial" ? "clamp(1.3rem, 2.5vw, 1.9rem)" : "1.05rem",
                        color: "var(--color-text)",
                      }}
                      onMouseEnter={(e) => handleTitleScramble(e, proj.title)}
                    >
                      {proj.title}
                    </h3>
                  </div>
                </div>

                {/* FOCUS OVERLAY — fades in on hover, always absolute inset-0 */}
                <div
                  className="absolute inset-0 z-20 flex flex-col justify-end p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(8,11,9,0.99) 0%, rgba(8,11,9,0.85) 40%, rgba(8,11,9,0.3) 100%)",
                    opacity: isFocused ? 1 : 0,
                    visibility: isFocused ? "visible" : "hidden",
                    transition: "opacity 0.35s ease, visibility 0.35s ease",
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--color-gold)" }}>
                        {proj.year}
                      </span>
                      {proj.inProgress && (
                        <span
                          className="font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-0.5"
                          style={{ border: "1px solid rgba(196,165,116,0.5)", color: "var(--color-gold)", backgroundColor: "rgba(196,165,116,0.1)" }}
                        >
                          Em andamento
                        </span>
                      )}
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center border" style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "var(--color-text-3)" }}>
                    {proj.category}
                  </p>
                  <h3
                    className="font-serif font-bold mb-3 leading-tight"
                    style={{
                      fontSize: proj.id === "aguaquality" || proj.id === "hellosocial" ? "clamp(1.2rem, 2vw, 1.7rem)" : "1.05rem",
                      color: "var(--color-text)",
                    }}
                  >
                    {proj.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-2)" }}>
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono"
                        style={{ border: "1px solid rgba(196,165,116,0.25)", color: "var(--color-text-2)", backgroundColor: "rgba(196,165,116,0.05)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
