import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_PRIMARY, EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
const sectionRef = useRef<HTMLDivElement>(null);
const { t } = useLang();

useEffect(() => {
const ctx = gsap.context(() => {
gsap.from(".exp-label, .exp-title", {
y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: EASE_PRIMARY,
scrollTrigger: { trigger: ".exp-title", start: SCROLL_START, once: true },
});

gsap.from(".timeline-line-fill", {
scaleY: 0, transformOrigin: "top", duration: 1.5, ease: EASE_SECONDARY,
scrollTrigger: { trigger: ".timeline-container", start: SCROLL_START, once: true },
});

gsap.from(".exp-card", {
y: 40, opacity: 0, stagger: 0.25, duration: 0.9, ease: EASE_PRIMARY,
scrollTrigger: { trigger: ".timeline-container", start: SCROLL_START, once: true },
});

gsap.from(".timeline-marker", {
scale: 0, stagger: 0.25, duration: 0.5, ease: "back.out(1.7)",
scrollTrigger: { trigger: ".timeline-container", start: SCROLL_START, once: true },
});
}, sectionRef);
return () => ctx.revert();
}, []);

  return (
    <div ref={sectionRef} className="section-root">
    <div className="section-container">
        <div className="max-w-3xl mb-20">
          <span className="exp-label section-label">{t({ pt: "Experiência Profissional", en: "Professional Experience" })}</span>
          <h2
            className="exp-title font-serif font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
          >
            {t({ pt: "Onde construí ", en: "Where I built " })}
            <span className="italic" style={{ color: "var(--color-text-2)" }}>
              {t({ pt: "expertise real.", en: "real expertise." })}
            </span>
          </h2>
        </div>

        <div className="timeline-container relative max-w-4xl">
          <div
            className="absolute left-[19px] lg:left-[23px] top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--color-border)" }}
          />
          <div
            className="timeline-line-fill absolute left-[19px] lg:left-[23px] top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--color-accent)" }}
          />

          {experiences.map((exp, i) => (
            <div key={i} className="exp-card relative pl-14 lg:pl-16 pb-16 last:pb-0">
              <div
                className="timeline-marker absolute left-2.5 lg:left-3.5 top-2 w-4 h-4 rounded-full border-2"
                style={{
                  borderColor: exp.current ? "var(--color-accent)" : "var(--color-border-2)",
                  backgroundColor: exp.current ? "var(--color-accent)" : "var(--color-bg-card)",
                  boxShadow: exp.current ? "0 0 0 4px var(--color-accent-15)" : "none",
                }}
              >
                {exp.current && (
                  <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: "var(--color-accent)", opacity: 0.3 }} />
                )}
              </div>

              <div
      className="border p-8 card-hover"
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
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-accent)" }} />
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
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-accent)" }} />
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
  );
}
