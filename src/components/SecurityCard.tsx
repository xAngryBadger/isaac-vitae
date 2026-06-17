import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { type SecurityDisclosure } from "../data/content";
import { useLang } from "../lib/LanguageContext";

export default function SecurityCard({ disclosure, onScramble }: { disclosure: SecurityDisclosure; onScramble: (e: React.MouseEvent<HTMLElement>, text: string) => void }) {
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);

  const statusColor = disclosure.status === "fixed"
    ? "var(--color-sec-fixed)"
    : disclosure.status === "open"
    ? "var(--color-sec-open)"
    : "var(--color-sec-uncertain)";

  const statusClass = `sec-badge sec-badge--${disclosure.status}`;

  const categoryLabel = disclosure.category === "gov"
    ? t({ pt: "Governo", en: "Gov" })
    : disclosure.category === "platform"
    ? t({ pt: "Plataforma", en: "Platform" })
    : "CVE";

  return (
    <div
      className="sec-card group custom-cursor-target"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, ${statusColor}10 0%, transparent 60%)`,
          opacity: hovered ? 0.8 : 0.3,
          transition: "opacity 0.5s ease",
        }}
      />

      <div className="relative z-10 p-8 flex flex-col">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className={statusClass}>
            {disclosure.status === "fixed" ? t({ pt: "Corrigido", en: "Fixed" }) : disclosure.status === "open" ? t({ pt: "Aberto", en: "Open" }) : t({ pt: "Incerto", en: "Uncertain" })}
          </span>
          <span className="sec-category-badge">{categoryLabel}</span>
        </div>

        <h3
          className="font-serif font-bold text-lg leading-snug mb-2"
          style={{ color: "var(--color-text)" }}
          onMouseEnter={(e) => onScramble(e, disclosure.title)}
        >
          {disclosure.title}
        </h3>

        <p className="text-[10px] font-mono uppercase tracking-wider mb-2" style={{ color: "var(--color-text-3)" }}>
          {t(disclosure.organization)}
        </p>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-2)" }} data-selectable>
          {t(disclosure.description)}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          <span
            className="px-2 py-0.5 text-[10px] font-mono"
            style={{ border: `1px solid ${statusColor}30`, color: "var(--color-text-3)", backgroundColor: `${statusColor}08` }}
          >
            {disclosure.CWE}
          </span>
          <span
            className="px-2 py-0.5 text-[10px] font-mono"
            style={{ border: "1px solid var(--color-accent-15)", color: "var(--color-text-3)", backgroundColor: "var(--color-accent-03)" }}
          >
            {disclosure.vulnType}
          </span>
        </div>

        {disclosure.hasCaseStudy && (
          <Link
            to={`/security/${disclosure.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase mt-4"
            style={{ color: "var(--color-aqua)", opacity: hovered ? 1 : 0.5, transition: "opacity 0.3s", textDecoration: "none" }}
          >
            {t({ pt: "Ver detalhes", en: "View details" })} <ArrowUpRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  );
}
