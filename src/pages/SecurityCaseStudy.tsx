import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { securityDisclosures, securityCaseStudies } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { EASE_PRIMARY, EASE_SECONDARY, SCROLL_START } from "../lib/scroll-anim";
import { ArrowLeft, Shield } from "lucide-react";
import { InlineAnnotation } from "../components/InlineAnnotation";

gsap.registerPlugin(ScrollTrigger);

const annotations: Record<string, Record<string, { pt: string; en: string }>> = {
  "fnas-mds-siafi": {
    "CERT.br": { pt: "Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil — autoridade nacional para reporte de vulnerabilidades.", en: "Brazilian Computer Emergency Response Team — national authority for vulnerability reporting." },
    "CTIR Gov": { pt: "Centro de Tratamento de Incidentes em Redes do Governo Federal — canal de notificação para infraestrutura governamental.", en: "Federal Government Network Incident Treatment Center — notification channel for government infrastructure." },
    "SIAFI": { pt: "Sistema Integrado de Administração Financeira — sistema central do governo federal para execução orçamentária e financeira.", en: "Integrated Financial Administration System — central federal government system for budget and financial execution." },
    "WAF": { pt: "Web Application Firewall — camada de segurança que filtra requisições maliciosas antes de chegarem ao servidor.", en: "Web Application Firewall — security layer that filters malicious requests before reaching the server." },
  },
  "ibiracu-es": {
    "DOM-XSS": { pt: "Cross-Site Scripting via DOM — injeção de script que executa no navegador da vítima manipulando o DOM, sem passar pelo servidor.", en: "DOM-based Cross-Site Scripting — script injection that executes in victim's browser by manipulating DOM, without going through server." },
    "Ouvidoria": { pt: "Canal de atendimento ao cidadão em órgãos públicos — canal direto para reportar problemas em serviços governamentais.", en: "Public ombudsman channel in government agencies — direct channel for reporting problems in government services." },
  },
  "base44-systemic": {
    "RLS": { pt: "Row-Level Security — mecanismo PostgreSQL que restringe acesso a linhas por usuário. Só é ativo quando auth.uid() está presente.", en: "Row-Level Security — PostgreSQL mechanism restricting row access per user. Only active when auth.uid() is present." },
    "opt-in": { pt: "Modelo onde a proteção é desativada por padrão e deve ser explicitamente habilitada — o oposto de secure-by-default.", en: "Model where protection is off by default and must be explicitly enabled — opposite of secure-by-default." },
  },
  "metajobs-base44": {
    "PII": { pt: "Personally Identifiable Information — dados que podem identificar um indivíduo (nome, e-mail, CPF, telefone).", en: "Personally Identifiable Information — data that can identify an individual (name, email, CPF, phone)." },
    "CWE-306": { pt: "Missing Authentication for Critical Function — funcionalidade que requer autenticação acessível sem ela.", en: "Missing Authentication for Critical Function — functionality requiring auth accessible without it." },
  },
  "mogi-guacu-backup": {
    "backup-dump": { pt: "Exportação completa do banco de dados em formato SQL — contém todos os registros, incluindo dados sensíveis.", en: "Complete database export in SQL format — contains all records including sensitive data." },
    "CWE-538": { pt: "Exposição de informações em arquivo e diretório — backup files left accessible in public directories.", en: "File and Directory Information Exposure — backup files left accessible in public directories." },
  },
};

const methodologyBadges = [
  { key: "NIST CSF", pt: "NIST CSF", en: "NIST CSF" },
  { key: "LGPD", pt: "LGPD", en: "LGPD" },
  { key: "CERT.br", pt: "CERT.br", en: "CERT.br" },
];

export default function SecurityCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const disclosure = securityDisclosures.find((d) => d.slug === slug);
  const cs = slug ? securityCaseStudies[slug] : undefined;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-hero > *", {
        y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: EASE_PRIMARY,
        scrollTrigger: { trigger: ".cs-hero", start: SCROLL_START, once: true },
      });

      gsap.from(".cs-section", {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.9, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-section", start: SCROLL_START, once: true },
      });

      gsap.from(".cs-timeline", {
        y: 20, opacity: 0, stagger: 0.08, duration: 0.6, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-timeline", start: SCROLL_START, once: true },
      });

      gsap.from(".cs-finding", {
        y: 15, opacity: 0, stagger: 0.06, duration: 0.5, ease: EASE_SECONDARY,
        scrollTrigger: { trigger: ".cs-finding", start: SCROLL_START, once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  if (!disclosure || !cs) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--color-text)" }}>
            {t({ pt: "Divulgação não encontrada", en: "Disclosure not found" })}
          </h2>
          <Link to="/security" className="clip-btn">
            <ArrowLeft className="w-4 h-4" />
            {t({ pt: "Voltar", en: "Back" })}
          </Link>
        </div>
      </div>
    );
  }

  const statusColor = disclosure.status === "fixed"
    ? "var(--color-sec-fixed)"
    : disclosure.status === "open"
    ? "var(--color-sec-open)"
    : "var(--color-sec-uncertain)";

  const pageAnnotations = slug ? annotations[slug] ?? {} : {};

  const annotateText = (text: string): React.ReactNode[] => {
    if (!pageAnnotations || Object.keys(pageAnnotations).length === 0) return [text];
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;
    while (remaining.length > 0) {
      let earliestMatch = -1;
      let earliestKey = "";
      for (const key of Object.keys(pageAnnotations)) {
        const idx = remaining.toLowerCase().indexOf(key.toLowerCase().replace(/-/g, " "));
        if (idx !== -1 && (earliestMatch === -1 || idx < earliestMatch)) {
          earliestMatch = idx;
          earliestKey = key;
        }
      }
      if (earliestMatch === -1) {
        parts.push(remaining);
        break;
      }
      const searchStr = earliestKey.replace(/-/g, " ");
      const matchEnd = earliestMatch + searchStr.length;
      if (earliestMatch > 0) parts.push(remaining.slice(0, earliestMatch));
      parts.push(
        <InlineAnnotation key={`ann-${keyIdx++}`} id={earliestKey}>
          {pageAnnotations[earliestKey]}
        </InlineAnnotation>
      );
      remaining = remaining.slice(matchEnd);
    }
    return parts;
  };

  return (
    <div ref={sectionRef} className="section-root">
      <div className="section-container">
        <Link
          to="/security"
          className="cs-hero inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase mb-12 custom-cursor-target"
          style={{ color: "var(--color-text-3)", textDecoration: "none" }}
        >
          <ArrowLeft className="w-4 h-4" />
          {t({ pt: "Voltar à Segurança", en: "Back to Security" })}
        </Link>

        <div className="cs-hero mb-20">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`sec-badge sec-badge--${disclosure.status}`}>
              {disclosure.status === "fixed" ? t({ pt: "Corrigido", en: "Fixed" }) : disclosure.status === "open" ? t({ pt: "Aberto", en: "Open" }) : t({ pt: "Incerto", en: "Uncertain" })}
            </span>
            <span className="sec-category-badge">
              {disclosure.category === "gov" ? t({ pt: "Governo", en: "Gov" }) : disclosure.category === "platform" ? t({ pt: "Plataforma", en: "Platform" }) : "CVE"}
            </span>
            <span className="font-mono text-xs tracking-[0.1em] uppercase" style={{ color: statusColor }}>
              {disclosure.severity.toUpperCase()}
            </span>
          </div>

          <h1
            className="font-serif font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--color-text)" }}
          >
            {disclosure.title}
          </h1>

          <p className="font-mono text-sm tracking-[0.1em] uppercase mb-6" style={{ color: "var(--color-text-2)" }}>
            {t(disclosure.organization)} · {disclosure.CWE} · {disclosure.vulnType}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {methodologyBadges.map((badge) => (
              <span
                key={badge.key}
                className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border"
                style={{ borderColor: "var(--color-accent-30)", color: "var(--color-aqua)", backgroundColor: "var(--color-accent-06)" }}
              >
                {t(badge)}
              </span>
            ))}
          </div>

          <p className="text-lg leading-relaxed max-w-3xl" style={{ color: "var(--color-text-2)" }} data-selectable>
            {t(disclosure.description)}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mb-20">
          <div className="cs-section">
            <span className="section-label">{t({ pt: "O Desafio", en: "The Challenge" })}</span>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-2)" }} data-selectable>
              {annotateText(t(cs.challenge))}
            </p>
          </div>

          <div className="cs-section">
            <span className="section-label">{t({ pt: "A Abordagem", en: "The Approach" })}</span>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-2)" }} data-selectable>
              {annotateText(t(cs.approach))}
            </p>
          </div>
        </div>

        <div
          className="cs-section mb-20 p-10 lg:p-14 border"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-card)" }}
        >
          <span className="section-label">{t({ pt: "Linha do Tempo", en: "Timeline" })}</span>
          <div className="space-y-4">
            {cs.timeline.map((step, i) => (
              <div key={i} className="cs-timeline flex items-start gap-4">
                <span
                  className="mt-1.5 w-6 h-6 flex items-center justify-center shrink-0 font-mono text-xs border"
                  style={{ color: "var(--color-aqua)", borderColor: "var(--color-accent-30)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed" style={{ color: "var(--color-text)" }} data-selectable>
                  {t(step)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-section mb-20">
          <span className="section-label">{t({ pt: "Impacto", en: "Impact" })}</span>
          <div className="space-y-3">
            {cs.impact.map((item, i) => (
              <div key={i} className="cs-finding flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-sec-open)" }} />
                <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }} data-selectable>
                  {t(item)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-section mb-20">
          <span className="section-label">{t({ pt: "Achados-Chave", en: "Key Findings" })}</span>
          <div className="space-y-3">
            {cs.keyFindings.map((f, i) => (
              <div key={i} className="cs-finding flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-aqua)" }} />
                <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }} data-selectable>
                  {annotateText(t(f))}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="cs-section mb-20 p-8 border"
          style={{ borderColor: "var(--color-accent-20)", backgroundColor: "var(--color-accent-04)" }}
        >
          <div className="flex items-start gap-3 mb-3">
            <Shield className="w-5 h-5 shrink-0" style={{ color: "var(--color-aqua)" }} />
            <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--color-aqua)" }}>
              {t({ pt: "Divulgação Responsável", en: "Responsible Disclosure" })}
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }} data-selectable>
            {t({
              pt: "Todas as vulnerabilidades neste portfólio foram reportadas de forma responsável através dos canais apropriados (CERT.br, CTIR Gov, ouvidorias municipais, contato direto com plataformas). Nenhuma exploração ativa foi realizada — apenas verificação passiva para confirmar a existência da vulnerabilidade. Os dados sensíveis não foram acessados, copiados ou armazenados.",
              en: "All vulnerabilities in this portfolio were responsibly reported through appropriate channels (CERT.br, CTIR Gov, municipal ombudsmen, direct platform contact). No active exploitation was performed — only passive verification to confirm the vulnerability's existence. Sensitive data was not accessed, copied, or stored.",
            })}
          </p>
        </div>

        <div style={{ borderColor: "var(--color-border)" }}>
          <Link to="/security" className="clip-btn">
            <ArrowLeft className="w-4 h-4" />
            {t({ pt: "Todas as Divulgações", en: "All Disclosures" })}
          </Link>
        </div>
      </div>
    </div>
  );
}
