import { useMemo, useState } from "react";
import { skillGroups } from "../data/content";
import { useLang, type Bilingual } from "../lib/LanguageContext";

type FilterKey = "all" | "frontend" | "backend" | "devops" | "security" | "design";

const FILTERS: { key: FilterKey; pt: string; en: string }[] = [
  { key: "all", pt: "Todas", en: "All" },
  { key: "frontend", pt: "Frontend", en: "Frontend" },
  { key: "backend", pt: "Backend", en: "Backend" },
  { key: "devops", pt: "DevOps", en: "DevOps" },
  { key: "security", pt: "Segurança", en: "Security" },
  { key: "design", pt: "Design", en: "Design" },
];

const GROUP_BUCKET: Record<string, FilterKey> = {
  "Frontend & Mobile": "frontend",
  "Backend & Data": "backend",
  "IA & ML": "backend",
  "Cloud & Infra": "devops",
  "Sync & Offline": "backend",
  Segurança: "security",
  Security: "security",
};

const bucketFromLabel = (label: Bilingual | string): FilterKey => {
  const key = typeof label === "string" ? label : label.pt;
  return GROUP_BUCKET[key] ?? "backend";
};

const proficiencyFromName = (name: string): number => {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return 3 + (h % 3);
};

export default function Skills() {
  const { t } = useLang();
  const [filter, setFilter] = useState<FilterKey>("all");

  const cards = useMemo(() => {
    const out: {
      name: string;
      category: { pt: string; en: string };
      dots: number;
    }[] = [];

    for (const group of skillGroups) {
      const bucket = bucketFromLabel(group.label);
      if (filter !== "all" && bucket !== filter) continue;
      const categoryText =
        typeof group.label === "string"
          ? { pt: group.label, en: group.label }
          : group.label;
      for (const skill of group.skills) {
        const name = typeof skill === "string" ? skill : t(skill);
        out.push({ name, category: categoryText, dots: proficiencyFromName(name) });
      }
    }
    return out;
  }, [filter, t]);

  return (
    <div className="section-root relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none dot-grid-bg" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        <div className="skills-header max-w-3xl mb-12">
          <span className="section-label">{t({ pt: "Habilidades", en: "Skills" })}</span>
          <h2
            className="font-serif font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--color-text)",
            }}
          >
            {t({ pt: "Minhas habilidades.", en: "My skills." })}
          </h2>
          <p
            className="text-sm"
            style={{
              color: "var(--color-text-2)",
              fontFamily: "var(--font-sans)",
              lineHeight: 1.8,
            }}
          >
            {t({
              pt: "Filtre por área para ver ferramentas e frameworks por categoria.",
              en: "Filter by area to see tools and frameworks per category.",
            })}
          </p>
        </div>

        <div
          className="skills-filters"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.45rem 0.9rem",
                  border: `1px solid ${active ? "var(--color-accent)" : "var(--color-border)"}`,
                  borderRadius: "0",
                  background: active ? "var(--color-accent)" : "transparent",
                  color: active ? "var(--color-bg)" : "var(--color-text-2)",
                  cursor: "pointer",
                  transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
                }}
              >
                {t({ pt: f.pt, en: f.en })}
              </button>
            );
          })}
        </div>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "1rem",
          }}
        >
          {cards.length === 0 && (
            <p
              className="col-span-full"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--color-text-2)",
                opacity: 0.6,
              }}
            >
              {t({ pt: "Nenhuma habilidade nesta categoria.", en: "No skills in this category." })}
            </p>
          )}
          {cards.map((card) => (
            <article
              key={card.name}
              className="skill-card"
              style={{
                padding: "1.1rem 1.25rem",
                border: "1px solid var(--color-border)",
                borderRadius: "0",
                background: "var(--color-bg-card)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--color-accent)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--color-border)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--color-text)",
                  }}
                >
                  {card.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-text-2)",
                    border: "1px solid var(--color-border)",
                    padding: "0.15rem 0.45rem",
                  }}
                >
                  {t(card.category)}
                </span>
              </div>

              <div
                aria-label="proficiency"
                role="img"
                style={{
                  display: "flex",
                  gap: "0.3rem",
                  alignItems: "center",
                }}
              >
                {[1, 2, 3, 4, 5].map((i) => {
                  const filled = i <= card.dots;
                  return (
                    <span
                      key={i}
                      style={{
                        width: "9px",
                        height: "9px",
                        borderRadius: "50%",
                        background: filled ? "var(--color-accent)" : "transparent",
                        border: `1px solid ${filled ? "var(--color-accent)" : "var(--color-border)"}`,
                      }}
                    />
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
