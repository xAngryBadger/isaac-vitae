import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { type SecurityDisclosure } from "../data/content";
import { useLang } from "../lib/LanguageContext";

export default function SecurityCard({ disclosure }: { disclosure: SecurityDisclosure }) {
  const { t } = useLang();
  const statusClass = `sec-badge sec-badge--${disclosure.status}`;

  return (
    <Link
      to={`/security/${disclosure.slug}`}
      className="sec-card-link"
      aria-label={disclosure.title}
    >
      <article className="sec-card">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className={statusClass}>
            {disclosure.status === "fixed"
              ? t({ pt: "Corrigido", en: "Fixed" })
              : disclosure.status === "open"
                ? t({ pt: "Aberto", en: "Open" })
                : t({ pt: "Incerto", en: "Uncertain" })}
          </span>
        </div>

        <h3 className="font-serif font-bold text-lg leading-snug mb-2" style={{ color: "var(--color-text)" }}>
          {disclosure.title}
        </h3>

        <p className="text-[10px] font-mono uppercase tracking-wider mb-3" style={{ color: "var(--color-text-3)" }}>
          {t(disclosure.organization)}
        </p>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-2)" }}>
          {t(disclosure.description)}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          <span className="px-2 py-0.5 text-[10px] font-mono" style={{ border: "1px solid var(--color-border)", color: "var(--color-text-3)" }}>
            {disclosure.CWE}
          </span>
          <span className="px-2 py-0.5 text-[10px] font-mono" style={{ border: "1px solid var(--color-border)", color: "var(--color-text-2)" }}>
            {disclosure.vulnType}
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase mt-4" style={{ color: "var(--color-accent)" }}>
          {t({ pt: "Ver detalhes", en: "View details" })} <ArrowUpRight className="w-3 h-3" />
        </div>
      </article>
    </Link>
  );
}
