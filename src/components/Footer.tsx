import { personal } from "../data/content";
import { useLang } from "../lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      aria-label={t({ pt: "Rodapé do site", en: "Site footer" })}
      className="py-12 border-t"
      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-deep)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: "var(--color-accent)" }}>
              {personal.name.split(" ")[0]}.
            </span>
            <span className="w-px h-4" style={{ backgroundColor: "var(--color-border-2)" }} />
            <span className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>
              {t(personal.title)}
            </span>
          </div>
          <p className="font-mono text-xs text-center" style={{ color: "var(--color-text-3)" }}>
            © {new Date().getFullYear()} {personal.fullName} — {t({ pt: "Feito com React, GSAP & Tailwind", en: "Built with React, GSAP & Tailwind" })}
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="font-mono text-xs accent-underline transition-colors duration-300 custom-cursor-target"
            style={{ color: "var(--color-text-3)" }}
          >
            {personal.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
