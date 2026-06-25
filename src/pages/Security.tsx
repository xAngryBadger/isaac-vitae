import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { securityDisclosures, securityCaseStudies } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";
import { SplitText } from "../components/SplitText";

gsap.registerPlugin(ScrollTrigger);

type SortKey = "title" | "status" | "severity" | "discoveryDate";
type SortDir = "asc" | "desc";
type StatusFilter = "all" | "fixed" | "open" | "uncertain";

const statusRank: Record<string, number> = { open: 3, uncertain: 2, fixed: 1 };
const severityRank: Record<string, number> = { critical: 3, high: 2, medium: 1 };

export default function Security() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const [sortKey, setSortKey] = useState<SortKey>("discoveryDate");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const counts = {
    active: securityDisclosures.filter((d) => d.status === "open").length,
    pending: securityDisclosures.filter((d) => d.status === "uncertain").length,
    remediated: securityDisclosures.filter((d) => d.status === "fixed").length,
    total: securityDisclosures.length,
  };

  const sorted = [...securityDisclosures].sort((a, b) => {
    let cmp = 0;
    if (sortKey === "title") cmp = a.title.localeCompare(b.title);
    else if (sortKey === "status") cmp = statusRank[a.status] - statusRank[b.status];
    else if (sortKey === "severity") cmp = severityRank[a.severity] - severityRank[b.severity];
    else cmp = (a.discoveryDate ?? "").localeCompare(b.discoveryDate ?? "");
    return sortDir === "asc" ? cmp : -cmp;
  });

  const filtered =
    statusFilter === "all" ? sorted : sorted.filter((d) => d.status === statusFilter);

  const sortedById = [...securityDisclosures].sort((a, b) => a.id.localeCompare(b.id));
  const waves: typeof securityDisclosures[] = [[], [], []];
  sortedById.forEach((d, i) => waves[i % 3].push(d));

  const waveTitles = [
    { pt: "Onda 1 · Março 2026", en: "Wave 1 · March 2026", date: "2026-03",
      desc: { pt: "Reconhecimento passivo inicial em portais federais e conselhos profissionais.", en: "Initial passive reconnaissance across federal portals and professional councils." } },
    { pt: "Onda 2 · Abril 2026", en: "Wave 2 · April 2026", date: "2026-04",
      desc: { pt: "Divulgações coordenadas via CERT.br e ouvidorias municipais.", en: "Coordinated disclosures via CERT.br and municipal ombudsman offices." } },
    { pt: "Onda 3 · Junho 2026", en: "Wave 3 · June 2026", date: "2026-06",
      desc: { pt: "Verificação de correções e follow-ups com CTIR Gov.", en: "Fix verification and follow-ups with CTIR Gov." } },
  ];

  const methods = [
    { key: "NIST CSF", label: "NIST CSF" },
    { key: "LGPD", label: "LGPD · Lei 13.709/2018" },
    { key: "CERT.br", label: "CERT.br · CGI.br" },
    { key: "CTIR Gov", label: "CTIR Gov" },
    { key: "Zero Retention", label: t({ pt: "Retenção Zero", en: "Zero Retention" }) },
    { key: "Passive Recon", label: t({ pt: "Reconhecimento Passivo", en: "Passive Recon" }) },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sec-label", {
        opacity: 0, y: 16, duration: 0.5, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".sec-label", start: SCROLL_START, once: true },
      });
      gsap.from(".sec-stat", {
        opacity: 0, y: 12, stagger: 0.06, duration: 0.5, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".sec-stat-row", start: SCROLL_START, once: true },
      });
      gsap.from(".sec-method", {
        opacity: 0, y: 8, stagger: 0.04, duration: 0.4, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".sec-methods", start: SCROLL_START, once: true },
      });
      gsap.from(".sec-section", {
        opacity: 0, y: 16, stagger: 0.08, duration: 0.5, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: sectionRef.current, start: SCROLL_START, once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  return (
    <div ref={sectionRef} className="section-root security-page">
      <div className="section-container">
        <header className="sec-header">
          <span className="sec-label section-label clip-reveal-up">
            {t({ pt: "Segurança · Disclosure Report", en: "Security · Disclosure Report" })}
          </span>

          <h2 className="sec-title font-serif font-bold leading-tight text-h2">
            <SplitText as="span" className="block" delay={0.3} duration={1.0} stagger={0.06} splitType="words">
              {t({ pt: "Vulnerabilidades que ", en: "Vulnerabilities that " })}
            </SplitText>
            <span className="sec-title-italic">
              {t({ pt: "foram responsavelmente divulgadas.", en: "were responsibly disclosed." })}
            </span>
          </h2>

          <p className="sec-subtitle">
            {t(
              {
                pt: `${counts.total} achados entre março e junho de 2026, cobrindo órgãos federais, conselhos profissionais, prefeituras municipais e plataformas SaaS. Metodologia estritamente passiva, sem persistência de dados pessoais, com divulgação coordenada via CERT.br e CTIR Gov.`,
                en: `${counts.total} findings between March and June 2026 across federal agencies, professional councils, municipal governments, and SaaS platforms. Strictly passive methodology, no retention of personal data, coordinated disclosure via CERT.br and CTIR Gov.`,
              }
            )}
          </p>
        </header>

        <div className="sec-stat-row">
          <div className="sec-stat">
            <span className="sec-stat-value" style={{ color: "var(--color-sec-open)" }}>{counts.active}</span>
            <span className="sec-stat-label">{t({ pt: "Abertos", en: "Open" })}</span>
          </div>
          <div className="sec-stat">
            <span className="sec-stat-value" style={{ color: "var(--color-sec-uncertain)" }}>{counts.pending}</span>
            <span className="sec-stat-label">{t({ pt: "Incertos", en: "Uncertain" })}</span>
          </div>
          <div className="sec-stat">
            <span className="sec-stat-value" style={{ color: "var(--color-sec-fixed)" }}>{counts.remediated}</span>
            <span className="sec-stat-label">{t({ pt: "Corrigidos", en: "Remediated" })}</span>
          </div>
          <div className="sec-stat">
            <span className="sec-stat-value" style={{ color: "var(--color-accent)" }}>{counts.total}</span>
            <span className="sec-stat-label">{t({ pt: "Total", en: "Total" })}</span>
          </div>
        </div>

        <div className="sec-methods">
          <span className="sec-methods-label">{t({ pt: "Metodologia", en: "Methodology" })}:</span>
          {methods.map((m) => (
            <span key={m.key} className="sec-method">{m.label}</span>
          ))}
        </div>

        <section className="sec-section">
          <h3 className="sec-section-title font-serif">
            {t({ pt: "Sumário · Todos os Achados", en: "Summary · All Findings" })}
          </h3>

          <div className="sec-filter-row">
            {(["all", "fixed", "open", "uncertain"] as StatusFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setStatusFilter(f)}
                className={`sec-filter ${statusFilter === f ? "active" : ""}`}
              >
                {f === "all"
                  ? t({ pt: "Todos", en: "All" })
                  : f === "fixed"
                    ? t({ pt: "Corrigidos", en: "Fixed" })
                    : f === "open"
                      ? t({ pt: "Abertos", en: "Open" })
                      : t({ pt: "Incertos", en: "Uncertain" })}
              </button>
            ))}
          </div>

          <div className="sec-table-wrap">
            <table className="sec-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort("title")} className="col-title">
                    {t({ pt: "Achado", en: "Finding" })}
                    {sortKey === "title" && <span className="sec-sort-arrow">{sortDir === "asc" ? "↑" : "↓"}</span>}
                  </th>
                  <th className="col-org">{t({ pt: "Organização", en: "Organization" })}</th>
                  <th className="col-type">{t({ pt: "Tipo", en: "Type" })}</th>
                  <th className="col-cwe">CWE</th>
                  <th onClick={() => handleSort("severity")} className="col-sev">
                    {t({ pt: "Sev", en: "Sev" })}
                    {sortKey === "severity" && <span className="sec-sort-arrow">{sortDir === "asc" ? "↑" : "↓"}</span>}
                  </th>
                  <th onClick={() => handleSort("status")} className="col-status">
                    {t({ pt: "Status", en: "Status" })}
                    {sortKey === "status" && <span className="sec-sort-arrow">{sortDir === "asc" ? "↑" : "↓"}</span>}
                  </th>
                  <th className="col-lgpd">LGPD</th>
                  <th onClick={() => handleSort("discoveryDate")} className="col-date">
                    {t({ pt: "Data", en: "Date" })}
                    {sortKey === "discoveryDate" && <span className="sec-sort-arrow">{sortDir === "asc" ? "↑" : "↓"}</span>}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((d) => {
                  const sevColor =
                    d.severity === "critical" ? "var(--color-sec-open)"
                    : d.severity === "high" ? "var(--color-sec-uncertain)"
                    : "var(--color-text-3)";
                  const cs = d.slug ? securityCaseStudies[d.slug] : null;
                  const isExpanded = expandedId === d.id;
                  return (
                    <>
                      <tr
                        key={d.id}
                        onClick={() => setExpandedId(isExpanded ? null : d.id)}
                        style={{ cursor: cs ? "pointer" : "default" }}
                      >
                        <td className="col-title">
                          {d.hasCaseStudy ? (
                            <Link
                              to={`/security/${d.slug}`}
                              className="sec-row-link"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {d.title}
                            </Link>
                          ) : (
                            <span>{d.title}</span>
                          )}
                        </td>
                        <td className="col-org">{t(d.organization)}</td>
                        <td className="col-type font-mono">{d.vulnType}</td>
                        <td className="col-cwe font-mono">{d.CWE}</td>
                        <td className="col-sev font-mono" style={{ color: sevColor }}>
                          {d.severity.toUpperCase()}
                        </td>
                        <td className="col-status">
                          <span className={`sec-badge sec-badge--${d.status}`}>
                            {d.status === "fixed"
                              ? t({ pt: "Corrigido", en: "Fixed" })
                              : d.status === "open"
                                ? t({ pt: "Aberto", en: "Open" })
                                : t({ pt: "Incerto", en: "Uncertain" })}
                          </span>
                        </td>
                        <td className="col-lgpd font-mono">
                          {d.lgpdArticles?.length
                            ? d.lgpdArticles.map((a, i) => (
                                <span key={a + i}>
                                  <abbr title={t({ pt: `Lei Geral de Proteção de Dados — ${a}`, en: `Brazilian General Data Protection Law — ${a}` })}>{a}</abbr>
                                  {i < d.lgpdArticles.length - 1 ? ", " : ""}
                                </span>
                              ))
                            : "—"}
                        </td>
                        <td className="col-date font-mono">{d.verifiedDate}</td>
                      </tr>
                      {cs && isExpanded && (
                        <tr key={`${d.id}-detail`} className="sec-detail-row">
                          <td colSpan={9} className="sec-detail-cell">
                            <div className="sec-detail">
                              <div className="sec-detail-grid">
                                <div className="sec-detail-section">
                                  <h5>{t({ pt: "Desafio", en: "Challenge" })}</h5>
                                  <p>{t(cs.challenge)}</p>
                                </div>
                                <div className="sec-detail-section">
                                  <h5>{t({ pt: "Abordagem", en: "Approach" })}</h5>
                                  <p>{t(cs.approach)}</p>
                                </div>
                                <div className="sec-detail-section">
                                  <h5>{t({ pt: "Linha do Tempo", en: "Timeline" })}</h5>
                                  <ol className="sec-detail-timeline">
                                    {cs.timeline.map((step, i) => (
                                      <li key={i}>{t(step)}</li>
                                    ))}
                                  </ol>
                                </div>
                                <div className="sec-detail-section">
                                  <h5>{t({ pt: "Impacto", en: "Impact" })}</h5>
                                  <ul className="sec-detail-list">
                                    {cs.impact.map((item, i) => (
                                      <li key={i}>{t(item)}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="sec-detail-section">
                                  <h5>{t({ pt: "Achados-Chave", en: "Key Findings" })}</h5>
                                  <ul className="sec-detail-list">
                                    {cs.keyFindings.map((f, i) => (
                                      <li key={i}>{t(f)}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="sec-detail-footer">
                                <Link to={`/security/${d.slug}`} className="sec-detail-link">
                                  {t({ pt: "Ver case study completo →", en: "View full case study →" })}
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <p className="sec-empty">{t({ pt: "Nenhum achado para este filtro.", en: "No findings for this filter." })}</p>
            )}
          </div>
        </section>

        <section className="sec-section sec-timeline">
          <h3 className="sec-section-title font-serif">
            {t({ pt: "Cronograma · Três Ondas", en: "Timeline · Three Waves" })}
          </h3>
          <ol className="sec-wave-list">
            {waveTitles.map((w, idx) => (
              <li key={w.date} id={`wave-${idx + 1}`} className="sec-wave">
                <div className="sec-wave-head">
                  <span className="sec-wave-num font-mono">0{idx + 1}</span>
                  <div>
                    <h4 className="sec-wave-title">{t({ pt: w.pt, en: w.en })}</h4>
                    <p className="sec-wave-desc">{t(w.desc)}</p>
                  </div>
                </div>
                <ul className="sec-wave-items">
                  {waves[idx].map((d) => (
                    <li key={d.id} className="sec-wave-item">
                      <span className={`sec-dot sec-dot--${d.status}`} />
                      <span className="sec-wave-item-title">{d.title}</span>
                      <span className="sec-wave-item-org font-mono">{t(d.organization)}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="sec-section sec-base44">
          <h3 className="sec-section-title font-serif">
            {t({ pt: "Base44 · Análise Sistêmica", en: "Base44 · Systemic Analysis" })}
          </h3>
          <p>
            {t(
              {
                pt: "Análise cross-app revelou um padrão recorrente: páginas públicas por default, com RLS (Row-Level Security) bypassado na ausência de contexto de autenticação. Três aplicações Base44 foram confirmadas como afetadas antes de remediation em massa — metajobs, gestorcontratospro (escolar) e gestorcontratospro (geral). A natureza sistêmica foi reportada diretamente ao time de segurança da plataforma.",
                en: "Cross-app analysis revealed a recurring pattern: pages were public by default, with RLS (Row-Level Security) bypassed in the absence of authentication context. Three Base44 apps were confirmed affected prior to mass remediation — metajobs, gestorcontratospro (school) and gestorcontratospro (general). The systemic nature was reported directly to the platform's security team.",
              }
            )}
          </p>
        </section>

        <footer className="sec-contact sec-section">
          <h3 className="sec-section-title font-serif">
            {t({ pt: "Contato · Disclosure", en: "Contact · Disclosure" })}
          </h3>
          <ul className="sec-contact-list">
            <li>
              {t({ pt: "Repositório completo:", en: "Full repository:" })}{" "}
              <a href="https://github.com/xAngryBadger/security-disclosures" target="_blank" rel="noreferrer">
                github.com/xAngryBadger/security-disclosures
              </a>
            </li>
            <li>
              {t({ pt: "Canal seguro:", en: "Secure channel:" })}{" "}
              <a href="mailto:isaacnathandasilva@gmail.com">isaacnathandasilva@gmail.com</a>
            </li>
            <li>
              {t({ pt: "Reportado via:", en: "Reported via:" })}{" "}
              <span className="font-mono">CERT.br</span>, <span className="font-mono">CTIR Gov</span>, <span className="font-mono">LGPD ANPD</span>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
