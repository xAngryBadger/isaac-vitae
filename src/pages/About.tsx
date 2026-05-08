import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personal, stats } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_PRIMARY, EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
const sectionRef = useRef<HTMLDivElement>(null);
const { t } = useLang();

useEffect(() => {
const ctx = gsap.context(() => {
gsap.from(".about-label, .about-title", {
opacity: 0, y: 50, stagger: 0.15, duration: 0.9, ease: EASE_PRIMARY,
scrollTrigger: { trigger: ".about-title", start: SCROLL_START, once: true },
});

gsap.from(".about-bio > *", {
opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: EASE_SECONDARY,
scrollTrigger: { trigger: ".about-bio", start: SCROLL_START, once: true },
});

gsap.from(".about-highlight", {
opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: EASE_SECONDARY,
scrollTrigger: { trigger: ".about-highlight", start: SCROLL_START, once: true },
});

gsap.from(".about-personal", {
opacity: 0, y: 20, duration: 0.7, ease: EASE_SECONDARY,
scrollTrigger: { trigger: ".about-personal", start: SCROLL_START, once: true },
});

document.querySelectorAll(".stat-num").forEach((el) => {
const target = parseInt((el as HTMLElement).dataset.target || "0");
gsap.to({ v: 0 }, {
v: target, duration: 1.5, ease: EASE_SECONDARY,
scrollTrigger: { trigger: el, start: SCROLL_START, once: true },
onUpdate: function () { el.textContent = String(Math.round(this.targets()[0].v)); },
});
});
}, sectionRef);
return () => ctx.revert();
}, []);

  return (
    <div ref={sectionRef} className="section-root">
    <div className="section-container">
        <div className="max-w-3xl mb-16">
          <span className="about-label section-label">{t({ pt: "Sobre Mim", en: "About Me" })}</span>
          <h2
            className="about-title font-serif font-bold leading-tight mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
          >
            {t({ pt: "Dev que constrói sistemas reais — ", en: "Dev who builds real systems — " })}
            <span className="italic" style={{ color: "var(--color-accent)" }}>
              {t({ pt: "não apenas protótipos.", en: "not just prototypes." })}
            </span>
      </h2>
      </div>

      <div className="max-w-3xl">
        <div className="about-bio space-y-5" data-selectable>
          <p style={{ color: "var(--color-text-2)", lineHeight: "1.8", fontSize: "1.05rem" }}>
            {t(personal.bio)}
          </p>
          <p style={{ color: "var(--color-text-2)", lineHeight: "1.8" }}>
            {t(personal.bioExtended)}
          </p>
        </div>

            <div className="mt-10 space-y-4">
              {personal.bioHighlights.map((h, i) => (
                <div
                  key={i}
                  className="about-highlight p-5 border-l-2"
                  style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-accent-03)" }}
                  data-selectable
                >
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }}>
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
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }}>
                {t(personal.bioPersonal)}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t" style={{ borderColor: "var(--color-border)" }}>
              {stats.map((s) => (
                <div key={t(s.label)} className="text-center">
                  <div className="font-serif font-bold mb-1" style={{ fontSize: "2.5rem", color: "var(--color-accent)" }}>
                    <span className="stat-num" data-target={s.value}>0</span>
                    <span>{t(s.suffix)}</span>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--color-text-3)" }}>
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
