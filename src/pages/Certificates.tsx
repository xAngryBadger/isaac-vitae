import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { courses, education } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_PRIMARY, SCROLL_START } from "../lib/scroll-anim";

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
const sectionRef = useRef<HTMLDivElement>(null);
const { t } = useLang();

useEffect(() => {
const ctx = gsap.context(() => {
gsap.from(".cert-header > *", {
y: 60, opacity: 0, stagger: 0.12, duration: 1.2, ease: EASE_PRIMARY,
scrollTrigger: { trigger: ".cert-header", start: SCROLL_START, once: true },
});

gsap.from(".cred-frame", {
y: 40, opacity: 0, stagger: 0.06, duration: 0.8, ease: EASE_PRIMARY,
scrollTrigger: { trigger: ".cred-wall", start: SCROLL_START, once: true },
});

gsap.from(".edu-item", {
y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: EASE_PRIMARY,
scrollTrigger: { trigger: ".edu-timeline", start: SCROLL_START, once: true },
});
}, sectionRef);
return () => ctx.revert();
}, []);

const prominentCourses = courses.filter((c) => "prominent" in c && c.prominent);
const regularCourses = courses.filter((c) => !("prominent" in c) || !c.prominent);
const allCourses = [...prominentCourses, ...regularCourses];

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
<span className="italic" style={{ color: "var(--color-accent)" }}>
{t({ pt: "Credenciais", en: "Credentials" })}
</span>
</h2>
<div
className="w-16 mb-6"
style={{ height: "1.34px", background: "var(--color-accent)" }}
/>
<p className="text-secondary" style={{ lineHeight: "1.8", maxWidth: "36rem" }}>
{t({ pt: "Certificações e cursos complementares que reforçam minha base em networking, segurança e idiomas.", en: "Certifications and complementary courses that reinforce my foundation in networking, security, and languages." })}
</p>
</div>

<div className="cred-wall mb-24" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
{allCourses.map((course, i) => {
const courseName = typeof course.name === "string" ? course.name : t(course.name);
const courseIssuer = typeof course.issuer === "string" ? course.issuer : t(course.issuer);
const isProminent = "prominent" in course && course.prominent;
const idx = String(i + 1).padStart(2, "0");

return (
<div
key={i}
className="cred-frame card-hover"
style={{
gridColumn: isProminent ? "span 2" : "span 1",
padding: isProminent ? "2rem" : "1.5rem",
border: "1.34px solid var(--color-border)",
borderRadius: "var(--radius-lg)",
backgroundColor: "var(--color-bg-card)",
position: "relative",
overflow: "hidden",
}}
>
<div className="relative z-10 flex items-start gap-4">
<span
className="font-mono shrink-0 mt-1"
style={{
fontSize: "0.65rem",
letterSpacing: "0.15em",
color: "var(--color-accent)",
opacity: 0.5,
lineHeight: 1,
}}
>
{idx}
</span>

<div className="flex-1 min-w-0">
<h3
className="font-serif font-semibold mb-1"
style={{
color: "var(--color-text)",
fontSize: isProminent ? "1.25rem" : "1rem",
lineHeight: 1.3,
}}
>
{courseName}
</h3>
<p className="text-secondary text-sm" style={{ opacity: 0.7 }}>
{courseIssuer}
</p>
{"hours" in course && course.hours && (
<span
className="font-mono mt-2 inline-block"
style={{
fontSize: "0.55rem",
letterSpacing: "0.1em",
color: "var(--color-text-3)",
opacity: 0.4,
textTransform: "uppercase" as const,
}}
>
{typeof course.hours === "string" ? course.hours : t(course.hours as { pt: string; en: string })}
</span>
)}
</div>
</div>
</div>
);
})}
</div>

  <div className="edu-timeline">
    <span className="section-label mb-8 block">{t({ pt: "Formação Acadêmica", en: "Academic Education" })}</span>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "0.75rem",
      }}
    >
      {education.map((edu, i) => (
        <div
          key={i}
          className="edu-item card-hover"
          style={{
            padding: "2rem",
            border: "1.34px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            backgroundColor: "var(--color-bg-card)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-2 gap-2 flex-wrap">
                <h3 className="font-serif font-semibold" style={{ color: "var(--color-text)", fontSize: "1.25rem", lineHeight: 1.3 }}>
                  {t(edu.degree)}
                </h3>
                <span
                  className="font-mono shrink-0 px-2 py-0.5"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color: "var(--color-text-3)",
                    opacity: 0.5,
                    border: "1.34px solid var(--color-border)",
                    borderRadius: "4px",
                  }}
                >
                  {edu.period}
                </span>
              </div>
              <p className="text-secondary text-sm mb-3" style={{ opacity: 0.7 }}>
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
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      <style>{`
        @media (max-width: 768px) {
          .cred-wall { grid-template-columns: 1fr !important; }
          .cred-frame { grid-column: span 1 !important; }
          .edu-timeline > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .cred-wall { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
</div>
);
}
