import { personal } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      aria-label={t({ pt: "Rodapé do site", en: "Site footer" })}
      className="border-t"
      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-deep)" }}
    >
      {/* CTA final */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--color-text-3)" }}>
              {t({ pt: "Contato", en: "Contact" })}
            </span>
            <p className="font-serif font-bold text-h2 leading-tight mt-2" style={{ color: "var(--color-text)" }}>
              {t({ pt: "Vamos construir", en: "Let's build" })}{" "}
              <span className="italic" style={{ color: "var(--color-text-2)" }}>
                {t({ pt: "algo que funcione.", en: "something that works." })}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="clip-btn-filled custom-cursor-target"
            >
              <Mail className="w-3.5 h-3.5" />
              {t({ pt: "Enviar e-mail", en: "Send email" })}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-btn custom-cursor-target"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-btn custom-cursor-target"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Linha de fechamento */}
      <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: "var(--color-accent)" }}>
                {personal.name.split(" ")[0]}.
              </span>
              <span className="w-px h-4" style={{ backgroundColor: "var(--color-border-2)" }} />
              <span className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>
                {t(personal.title)}
              </span>
            </div>
            <p className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>
              © {new Date().getFullYear()} {personal.name} · {t(personal.location)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
