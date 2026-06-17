import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { courses, education } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_PRIMARY, EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";
import { SplitText } from "../components/SplitText";

gsap.registerPlugin(ScrollTrigger);

function groupByIssuer(coursesList: typeof courses) {
  const groups: Record<string, typeof coursesList> = {};
  for (const c of coursesList) {
    const key = typeof c.issuer === "string" ? c.issuer : c.issuer.pt;
    if (!groups[key]) groups[key] = [];
    groups[key].push(c);
  }
  return groups;
}

export default function Certificates() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-label", {
        opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".section-label", start: SCROLL_START, once: true },
      });

      gsap.from(".section-lede", {
        opacity: 0, y: 20, duration: 1, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".section-lede", start: SCROLL_START, once: true },
      });

      gsap.from(".cert-group", {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".cert-groups", start: SCROLL_START, once: true },
      });

      gsap.from(".cert-item", {
        x: -20, opacity: 0, stagger: 0.05, duration: 0.6, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".cert-groups", start: SCROLL_START, once: true },
      });

      gsap.from(".edu-item", {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".edu-timeline", start: SCROLL_START, once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const issuerGroups = groupByIssuer(courses);

  return (
    <div ref={sectionRef} className="section-root relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none dot-grid-bg" />

      <div className="section-container relative">
        <div className="cert-header max-w-3xl mb-20">
          <span className="section-label">{t({ pt: "Certificações", en: "Certificates" })}</span>
          <h2
            className="font-serif font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-text)" }}
          >
            <SplitText as="span" className="inline" splitType="words" stagger={0.08} delay={0.3}>
              <span className="italic" style={{ color: "var(--color-text-2)" }}>
                {t({ pt: "Credenciais", en: "Credentials" })}
              </span>
            </SplitText>
          </h2>
          <div
            className="w-16 mb-6"
            style={{ height: "1.34px", background: "var(--color-accent)" }}
          />
          <p className="section-lede text-secondary" style={{ lineHeight: "1.8", maxWidth: "36rem" }}>
            {t({ pt: "Certificações e cursos complementares que reforçam minha base em networking, segurança e idiomas.", en: "Certifications and complementary courses that reinforce my foundation in networking, security, and languages." })}
          </p>
        </div>

        <div className="cert-groups space-y-12 mb-28">
          {Object.entries(issuerGroups).map(([issuer, certs]) => (
            <div key={issuer} className="cert-group">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <h3
                  className="highlight-inst font-serif font-semibold"
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--color-text)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {issuer}
                </h3>
                <span
                  className="font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-0.5"
                  style={{
                    color: "var(--color-text-3)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                  }}
                >
                  {certs.length} {certs.length === 1
                    ? t({ pt: "curso", en: "course" })
                    : t({ pt: "cursos", en: "courses" })}
                </span>
              </div>

              <div
                className="ml-1 pl-5"
                style={{
                  borderLeft: "1px solid var(--color-border)",
                }}
              >
                {certs.map((course, i) => {
                  const courseName = typeof course.name === "string" ? course.name : t(course.name);
                  const courseHours = course.hours
                    ? typeof course.hours === "string"
                      ? course.hours
                      : t(course.hours as { pt: string; en: string })
                    : null;

                  return (
                    <div
                      key={i}
                      className="cert-item py-4"
                      style={{
                        borderBottom: i < certs.length - 1 ? "1px solid var(--color-border)" : "none",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <h4
                            className="font-semibold mb-1"
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: "1rem",
                              color: "var(--color-text)",
                              lineHeight: 1.4,
                            }}
                          >
                            {courseName}
                          </h4>
                          {course.context && (
                            <p
                              className="text-sm mb-2"
                              style={{
                                color: "var(--color-text-2)",
                                lineHeight: 1.6,
                                opacity: 0.8,
                              }}
                            >
                              {t(course.context)}
                            </p>
                          )}
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="tech-pill">
                              {course.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          {courseHours && (
                            <span className="highlight-date font-mono text-[11px] tracking-[0.1em] uppercase">
                              {courseHours}
                            </span>
                          )}
                          {course.prominent && (
                            <span
                              className="font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-0.5"
                              style={{
                                color: "var(--color-accent)",
                                backgroundColor: "var(--color-accent-08)",
                                border: "1px solid var(--color-accent-20)",
                                borderRadius: "4px",
                              }}
                            >
                              {t({ pt: "Destaque", en: "Featured" })}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="edu-timeline">
          <span className="section-label mb-8 block">{t({ pt: "Formação Acadêmica", en: "Academic Education" })}</span>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="edu-item border"
                style={{
                  padding: "2rem",
                  borderColor: "var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "var(--color-bg-card)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-serif font-semibold mb-2"
                      style={{ color: "var(--color-text)", fontSize: "1.25rem", lineHeight: 1.3 }}
                    >
                      {t(edu.degree)}
                    </h3>
                    <p className="highlight-inst text-sm mb-3" style={{ color: "var(--color-accent)" }}>
                      {edu.institution}
                    </p>
                    <span
                      className="inline-block px-3 py-1 text-xs font-mono"
                      style={{
                        color: edu.statusActive ? "var(--color-accent)" : "var(--color-text-3)",
                        border: "1.34px solid",
                        borderColor: edu.statusActive ? "var(--color-accent-30)" : "var(--color-border)",
                        borderRadius: "9999px",
                      }}
                    >
                      {t(edu.status)}
                    </span>
                  </div>
                  <span
                    className="highlight-date font-mono shrink-0 px-2 py-0.5 text-[11px] tracking-[0.15em] uppercase"
                    style={{
                      color: "var(--color-text-3)",
                      border: "1.34px solid var(--color-border)",
                      borderRadius: "4px",
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-item { padding: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
