import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personal, stats } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";
import { OdometerDigit } from "../components/OdometerDigit";
import { SplitText } from "../components/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label - clip-reveal
      gsap.from(".about-label", {
        opacity: 0, y: 20, duration: 0.6, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".about-label", start: SCROLL_START, once: true },
      });

      // Title - SplitText
      gsap.from(".about-title", {
        opacity: 0, y: 20, duration: 0.8, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".about-title", start: SCROLL_START, once: true },
        onComplete: () => {
          // Trigger SplitText animation after the element is in view
          const titleElement = document.querySelector(".about-title");
          if (titleElement) {
            // We'll let the SplitText component handle its own animation
          }
        }
      });

      // Bio text - fade-up
      gsap.from(".about-bio > *", {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".about-bio", start: SCROLL_START, once: true },
      });

      // Highlights - fade-up
      gsap.from(".about-highlight", {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".about-highlight", start: SCROLL_START, once: true },
      });

}, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="section-root">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          {/* Section label with clip-reveal */}
          <span className="about-label section-label clip-reveal-up">
            {t({ pt: "Sobre Mim", en: "About Me" })}
          </span>
          
          {/* Title with SplitText */}
          <h2 className="about-title font-serif font-bold leading-tight mb-8 text-h2">
            <SplitText
              as="span"
              className="block"
              delay={0.3}
              duration={1.0}
              stagger={0.08}
              splitType="words"
            >
              {t({ pt: "Dev que constrói sistemas reais — ", en: "Dev who builds real systems — " })}
            </SplitText>
            <span className="italic text-accent">
              {t({ pt: "não apenas protótipos.", en: "not just prototypes." })}
            </span>
          </h2>
        </div>

        <div className="max-w-3xl">
          {/* Bio text */}
          <div className="about-bio space-y-5" data-selectable>
            <p 
              className="text-body leading-body text-text-2 max-w-3xl"
            >
              {t(personal.bio)}
            </p>
            <p 
              className="text-body leading-body text-text-2"
            >
              {t(personal.bioExtended)}
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {personal.bioHighlights.map((h, i) => (
              <div
                key={i}
                className="about-highlight p-5 border-l-2"
                style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-accent-04)" }}
                data-selectable
              >
                <p className="text-sm leading-relaxed text-text-2">
                  {t(h)}
                </p>
              </div>
            ))}
          </div>

          <div
            className="about-personal mt-10 p-6 border card-hover"
            style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-card)" }}
            data-selectable
          >
            <p className="font-mono text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "var(--color-accent)" }}>
              {t({ pt: "Fora do Terminal", en: "Outside the Terminal" })}
            </p>
            <p className="text-body leading-body text-text-2">
              {t(personal.bioPersonal)}
            </p>
          </div>

          <div
            className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            {stats.map((s) => (
              <div key={t(s.label)} className="text-center">
                <div className="font-serif font-bold mb-1 text-h3">
                  <span className="stat-num"><OdometerDigit target={s.value} /></span>
                  <span>{t(s.suffix)}</span>
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-text-3">
                  {t(s.label)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
