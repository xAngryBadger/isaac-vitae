import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_PRIMARY, SCROLL_START } from "../lib/scroll-anim";
import { SplitText } from "../components/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLang();

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

      gsap.from(".exp-archive-row", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".exp-archive-list", start: SCROLL_START, once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggleRow = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

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

        <div className="exp-archive-list">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-archive-row">
              <button
                onClick={() => toggleRow(i)}
                className="exp-archive-btn"
                aria-expanded={openIndex === i}
              >
                <span className="exp-archive-num">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <span className="exp-archive-company">
                  {exp.company}
                  <span className="exp-archive-role-sep"> — </span>
                  <span className="exp-archive-role">{t(exp.role)}</span>
                </span>
                <span className="exp-archive-period">{t(exp.period)}</span>
              </button>

              <div
                className={`exp-archive-detail ${openIndex === i ? "open" : ""}`}
                role="region"
              >
                <div className="exp-archive-detail-inner">
                  {exp.current && (
                    <span className="exp-archive-current-badge">
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      />
                      {t({ pt: "Atual", en: "Current" })}
                    </span>
                  )}
                  <ul className="exp-archive-highlights">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="exp-archive-highlight">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <span style={{ color: "var(--color-text-2)" }}>{t(h)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
