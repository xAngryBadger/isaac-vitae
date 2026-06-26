import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_PRIMARY, EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";
import { SplitText } from "../components/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-label", {
        opacity: 0,
        y: 24,
        clipPath: "inset(0 0 100% 0)",
        duration: 0.9,
        ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".exp-label", start: SCROLL_START, once: true },
      });

      gsap.from(".timeline-line-fill", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".timeline-container", start: SCROLL_START, once: true },
      });

      gsap.from(".exp-card", {
        y: 40,
        opacity: 0,
        stagger: 0.25,
        duration: 0.9,
        ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".timeline-container", start: SCROLL_START, once: true },
      });

      gsap.from(".timeline-marker", {
        scale: 0,
        stagger: 0.25,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".timeline-container", start: SCROLL_START, once: true },
      });

      if (isDesktop && trackRef.current) {
        const track = trackRef.current;
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 100),
          duration: 30,
          ease: "none",
          repeat: -1,
          id: "loop",
        });
        track.addEventListener("mouseenter", () => gsap.getById("loop")?.pause());
        track.addEventListener("mouseleave", () => gsap.getById("loop")?.play());
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <div ref={sectionRef} className="section-root">
      <div className="section-container">
        <div className="max-w-3xl mb-20">
          <span className="exp-label section-label">
            {t({ pt: "Experiência Profissional", en: "Professional Experience" })}
          </span>
          <h2
            className="exp-title font-serif font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
          >
            <SplitText as="span" className="inline" splitType="words" stagger={0.08} delay={0.3}>
              {t({ pt: "Onde construí ", en: "Where I built " })}
            </SplitText>
            <span className="italic" style={{ color: "var(--color-text-2)" }}>
              {t({ pt: "expertise real.", en: "real expertise." })}
            </span>
          </h2>
        </div>

        <div className="timeline-container relative md:max-w-7xl">
          <div className={isDesktop ? "" : "max-w-4xl"}>
            {!isDesktop && (
              <>
                <div
                  className="absolute left-[19px] top-0 bottom-0 w-px"
                  style={{ backgroundColor: "var(--color-border)" }}
                />
                <div
                  className="timeline-line-fill absolute left-[19px] top-0 bottom-0 w-px"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <svg
                  className="absolute left-[19px] top-0 bottom-0 w-0 pointer-events-none overflow-visible"
                  aria-hidden="true"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="800"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    className="draw-stroke-line"
                    style={{ "--stroke-length": 800 } as React.CSSProperties}
                  />
                </svg>
              </>
            )}

            {isDesktop && (
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none overflow-visible"
                aria-hidden="true"
              >
                <line
                  x1="-400"
                  y1="0"
                  x2="400"
                  y2="0"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  className="draw-stroke-line"
                  style={{ "--stroke-length": 800 } as React.CSSProperties}
                />
              </div>
            )}

            <div className={isDesktop ? "overflow-hidden" : ""}>
              <div
                ref={trackRef}
                className="timeline-track flex flex-col md:flex-row md:items-center gap-8"
              >
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`exp-card ${isDesktop ? "md:pl-0 md:pb-0 md:shrink-0 md:w-80" : "pl-14 pb-16 last:pb-0"}`}
                >
                  <div
                    className={`timeline-marker absolute w-4 h-4 rounded-full border-2 ${isDesktop ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" : "left-2.5 top-2"}`}
                    style={{
                      borderColor: exp.current ? "var(--color-accent)" : "var(--color-border-2)",
                      backgroundColor: exp.current ? "var(--color-accent)" : "var(--color-bg-card)",
                      boxShadow: exp.current ? "0 0 0 4px var(--color-accent-15)" : "none",
                    }}
                  >
                    {exp.current && (
                      <span
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ backgroundColor: "var(--color-accent)", opacity: 0.3 }}
                      />
                    )}
                  </div>

                  <div
                    className={`border p-8 card-hover ${isDesktop ? "md:w-80" : ""}`}
                    style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-card)" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                      <div>
                        <h3 className="font-serif font-semibold text-xl" style={{ color: "var(--color-text)" }}>
                          {t(exp.role)}
                        </h3>
                        <p className="font-mono text-sm" style={{ color: "var(--color-text-2)" }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="font-mono text-xs tracking-[0.1em]"
                          style={{ color: exp.current ? "var(--color-accent)" : "var(--color-text-3)" }}
                        >
                          {t(exp.period)}
                        </span>
                        {exp.current && (
                          <span
                            className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono"
                            style={{ color: "var(--color-accent)", border: "1px solid var(--color-accent-30)" }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full animate-pulse"
                              style={{ backgroundColor: "var(--color-accent)" }}
                            />
                            {t({ pt: "Atual", en: "Current" })}
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      className="w-full h-px mb-6"
                      style={{ backgroundImage: "linear-gradient(to right, var(--color-border-2), transparent)" }}
                    />

                    <ul className="space-y-3" data-selectable>
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-3">
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: "var(--color-accent)" }}
                          />
                          <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }}>
                            {t(h)}
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
        </div>
      </div>
    </div>
  );
}
