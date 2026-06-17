import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { securityDisclosures } from "../data/content";
import { scrambleText } from "../lib/scramble";
import { useLang } from "../lib/LanguageContext";
import { EASE_PRIMARY, SCROLL_START } from "../lib/scroll-anim";
import SecurityCard from "../components/SecurityCard";

gsap.registerPlugin(ScrollTrigger);

export default function Security() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const fixed = securityDisclosures.filter((d) => d.status === "fixed");
  const open = securityDisclosures.filter((d) => d.status === "open");
  const uncertain = securityDisclosures.filter((d) => d.status === "uncertain");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-label, .proj-title", {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: sectionRef.current, start: SCROLL_START, once: true },
      });

      gsap.from(".sec-stat", {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: sectionRef.current, start: SCROLL_START, once: true },
      });

      gsap.from(".tier-section", {
        opacity: 0, y: 30, stagger: 0.15, duration: 0.7, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: sectionRef.current, start: SCROLL_START, once: true },
      });

      gsap.from(".sec-card", {
        y: 30, opacity: 0, stagger: 0.06, duration: 0.6, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: sectionRef.current?.querySelector(".sec-grid") ?? sectionRef.current, start: SCROLL_START, once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleTitleScramble = (e: React.MouseEvent<HTMLElement>, text: string) => {
    scrambleText({ el: e.currentTarget, text, duration: 400, scramblePct: 0.5 });
  };

  return (
    <div ref={sectionRef} className="section-root">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="proj-label section-label">{t({ pt: "Segurança", en: "Security" })}</span>
            <h2
              className="proj-title font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
            >
              {t({ pt: "Vulnerabilidades que ", en: "Vulnerabilities that " })}
              <span className="italic" style={{ color: "var(--color-text-2)" }}>
                {t({ pt: "foram responsavelmente divulgadas.", en: "were responsibly disclosed." })}
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="sec-stat">
            <span className="sec-stat-value" style={{ color: "var(--color-sec-fixed)" }}>{fixed.length}</span>
            <span className="sec-stat-label" style={{ color: "var(--color-text-3)" }}>
              {t({ pt: "Corrigidos", en: "Fixed" })}
            </span>
          </div>
          <div className="sec-stat">
            <span className="sec-stat-value" style={{ color: "var(--color-sec-open)" }}>{open.length}+</span>
            <span className="sec-stat-label" style={{ color: "var(--color-text-3)" }}>
              {t({ pt: "Abertos", en: "Open" })}
            </span>
          </div>
          <div className="sec-stat">
            <span className="sec-stat-value" style={{ color: "var(--color-aqua)" }}>2+</span>
            <span className="sec-stat-label" style={{ color: "var(--color-text-3)" }}>
              {t({ pt: "Plataformas", en: "Platforms" })}
            </span>
          </div>
          <div className="sec-stat">
            <span className="sec-stat-value" style={{ color: "var(--color-aqua)" }}>CERT.br</span>
            <span className="sec-stat-label" style={{ color: "var(--color-text-3)" }}>
              {t({ pt: "Reportado via", en: "Reported via" })} + CTIR Gov
            </span>
          </div>
        </div>

        {fixed.length > 0 && (
          <section className="tier-section mb-16">
            <h3
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8"
              style={{ color: "var(--color-sec-fixed)" }}
            >
              {t({ pt: "Corrigidos", en: "Fixed" })}
            </h3>
            <div className="sec-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fixed.map((d) => (
                <SecurityCard key={d.id} disclosure={d} onScramble={handleTitleScramble} />
              ))}
            </div>
          </section>
        )}

        {open.length > 0 && (
          <section className="tier-section mb-16">
            <h3
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8"
              style={{ color: "var(--color-sec-open)" }}
            >
              {t({ pt: "Abertos", en: "Open" })}
            </h3>
            <div className="sec-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {open.map((d) => (
                <SecurityCard key={d.id} disclosure={d} onScramble={handleTitleScramble} />
              ))}
            </div>
          </section>
        )}

        {uncertain.length > 0 && (
          <section className="tier-section mb-16">
            <h3
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8"
              style={{ color: "var(--color-sec-uncertain)" }}
            >
              {t({ pt: "Incertos", en: "Uncertain" })}
            </h3>
            <div className="sec-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uncertain.map((d) => (
                <SecurityCard key={d.id} disclosure={d} onScramble={handleTitleScramble} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
