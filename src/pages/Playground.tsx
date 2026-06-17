import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects } from "../data/content"
import { useLang } from "../lib/LanguageContext"
import { scrambleText } from "../lib/scramble"
import { ArrowUpRight, Github, Monitor, Globe } from "lucide-react"
import { EASE_PRIMARY, EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim"
import { SplitText } from "../components/SplitText"

gsap.registerPlugin(ScrollTrigger)

type DemoProject = typeof projects[number] & { playground: boolean }

function getCategoryIcon(_playground: boolean, id: string) {
  if (id === "diskvisor" || id === "sysvisor" || id === "forge-usb") return <Monitor className="w-4 h-4" />
  return <Globe className="w-4 h-4" />
}

function PlaygroundCard({ proj }: { proj: DemoProject }) {
  const { t } = useLang()
  const [hovered, setHovered] = useState(false)
  const isDesktop = ["diskvisor", "sysvisor", "forge-usb"].includes(proj.id)

  return (
    <div
      className="playground-card relative overflow-hidden border rounded-xl"
      style={{
        borderColor: hovered ? `${proj.color}60` : "var(--color-border)",
        backgroundColor: "var(--color-bg-card)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(.16,1,.3,1), border-color 0.3s, box-shadow 0.4s",
        boxShadow: hovered ? `0 0 0 1px ${proj.color}25, 0 12px 40px ${proj.color}15` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, ${proj.color}18 0%, transparent 65%)`,
          opacity: hovered ? 0.9 : 0.4,
          transition: "opacity 0.5s ease",
        }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded"
              style={{
                background: `${proj.color}15`,
                color: proj.color,
                border: `1px solid ${proj.color}30`,
              }}
            >
              {getCategoryIcon(proj.playground, proj.id)}
              {isDesktop
                ? t({ pt: "Desktop", en: "Desktop" })
                : t({ pt: "Web", en: "Web" })}
            </span>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--color-text-3)" }}>
              {proj.year}
            </span>
          </div>
        </div>

        <h3
          className="font-serif font-bold text-lg leading-snug mb-1"
          style={{ color: "var(--color-text)" }}
          onMouseEnter={(e) => scrambleText({ el: e.currentTarget, text: proj.title, duration: 400, scramblePct: 0.5 })}
        >
          {proj.title}
        </h3>

        <p className="text-[10px] font-mono uppercase tracking-wider mb-3" style={{ color: "var(--color-text-3)" }}>
          {t(proj.category)}
        </p>

        <p
          className="text-xs leading-relaxed mb-4 flex-1"
          style={{ color: "var(--color-text-2)" }}
          data-selectable
        >
          {t(proj.description)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono"
              style={{
                border: `1px solid ${proj.color}20`,
                color: "var(--color-text-3)",
                backgroundColor: `${proj.color}06`,
              }}
            >
              {tech}
            </span>
          ))}
          {proj.tech.length > 5 && (
            <span className="px-2 py-0.5 text-[10px] font-mono" style={{ color: "var(--color-text-3)" }}>
              +{proj.tech.length - 5}
            </span>
          )}
        </div>

  <div className="flex items-center gap-4 mt-auto">
    {"demoUrl" in proj && proj.demoUrl && (
      <a
        href={proj.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase"
        style={{
          color: proj.color,
          opacity: hovered ? 1 : 0.7,
          transition: "opacity 0.3s",
        }}
      >
        <Globe className="w-3 h-3" /> {t({ pt: "Ver Demo", en: "Live Demo" })} <ArrowUpRight className="w-2.5 h-2.5" />
      </a>
    )}
    {proj.githubUrl && (
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase"
              style={{
                color: "var(--color-text-3)",
                opacity: hovered ? 1 : 0.5,
                transition: "opacity 0.3s",
              }}
            >
              <Github className="w-3 h-3" /> GitHub <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Playground() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useLang()

  const demoProjects = projects.filter(
    (p): p is DemoProject => "playground" in p && p.playground === true,
  )
  const webProjects = demoProjects.filter(
    (p) => !["diskvisor", "sysvisor", "forge-usb"].includes(p.id),
  )
  const desktopProjects = demoProjects.filter((p) =>
    ["diskvisor", "sysvisor", "forge-usb"].includes(p.id),
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".playground-label", {
        opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".playground-label", start: SCROLL_START, once: true },
      });

      gsap.from(".section-lede", {
        opacity: 0, y: 20, duration: 1, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".section-lede", start: SCROLL_START, once: true },
      });

      gsap.from(".playground-card", {
        y: 30,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".playground-grid", start: SCROLL_START, once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="section-root">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="playground-label section-label">
              {t({ pt: "Playground", en: "Playground" })}
            </span>
            <h2
              className="playground-title font-serif font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
            >
              <SplitText as="span" className="inline" splitType="words" stagger={0.08} delay={0.3}>
                {t({ pt: "Demos que ", en: "Demos that " })}
              </SplitText>
              <span className="italic" style={{ color: "var(--color-text-2)" }}>
                {t({ pt: "provam versatilidade.", en: "prove versatility." })}
              </span>
            </h2>
          </div>
          <p className="section-lede max-w-xs text-sm" style={{ color: "var(--color-text-2)", lineHeight: "1.8" }}>
            {t({
              pt: "Projetos de showcase — de WebGL a Tauri desktop. Cada um demonstra uma faceta diferente do frontend.",
              en: "Showcase projects — from WebGL to Tauri desktop. Each demonstrates a different facet of frontend engineering.",
            })}
          </p>
        </div>

        <section className="mb-12">
          <h3
            className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8"
            style={{ color: "var(--color-text-3)" }}
          >
            <Globe className="w-3 h-3 inline mr-2" />
            {t({ pt: "Web Apps", en: "Web Apps" })}
          </h3>
          <div className="playground-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((proj) => (
              <PlaygroundCard key={proj.id} proj={proj} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3
            className="font-mono text-[11px] tracking-[0.2em] uppercase mb-8"
            style={{ color: "var(--color-text-3)" }}
          >
            <Monitor className="w-3 h-3 inline mr-2" />
            {t({ pt: "Desktop (Tauri 2 + Rust)", en: "Desktop (Tauri 2 + Rust)" })}
          </h3>
          <div className="playground-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {desktopProjects.map((proj) => (
              <PlaygroundCard key={proj.id} proj={proj} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
