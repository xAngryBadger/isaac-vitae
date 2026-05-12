import { useCallback } from "react";
import { personal, experiences, education, skillGroups, courses, cvSummary, cvProjects } from "../data/content";
import type { Bilingual } from "../lib/LanguageContext";

function plain(b: Bilingual | string, lang: "pt" | "en"): string {
  return typeof b === "string" ? b : b[lang];
}

export function useAtsPdf(lang: "pt" | "en") {
  return useCallback(async () => {
    const lines: string[] = [];
    const ln = (text: string) => lines.push(text);
    const blank = () => lines.push("");
    const sectionHead = (title: string) => {
      blank();
      ln(title.toUpperCase());
      ln("─".repeat(50));
    };

    ln(personal.fullName);
    ln(plain(personal.title, lang) + " — " + plain(personal.subtitle, lang));
    blank();
    ln(personal.email);
    ln(personal.phone);
    ln(plain(personal.location, lang));
    ln(personal.linkedin);
    ln(personal.github);

    sectionHead(lang === "pt" ? "Resumo" : "Summary");
    ln(cvSummary[lang]);

    sectionHead(lang === "pt" ? "Experiência Profissional" : "Professional Experience");
    for (const exp of experiences) {
      blank();
      ln(plain(exp.role, lang));
      ln(exp.company + "  ·  " + plain(exp.period, lang));
      for (const h of exp.highlights) {
        ln("  • " + plain(h, lang));
      }
    }

    sectionHead(lang === "pt" ? "Projetos de Destaque" : "Key Projects");
    for (const proj of cvProjects) {
      blank();
      ln(proj.name);
      ln(proj[lang]);
      ln(" Tech: " + proj.tech.join(" · "));
    }

    sectionHead(lang === "pt" ? "Educação" : "Education");
    for (const edu of education) {
      blank();
      ln(plain(edu.degree, lang));
      ln(edu.institution + "  ·  " + edu.period + "  ·  " + plain(edu.status, lang));
    }

    sectionHead(lang === "pt" ? "Habilidades" : "Skills");
    for (const g of skillGroups) {
      const label = typeof g.label === "string" ? g.label : plain(g.label, lang);
      const items = g.skills.map((s) => (typeof s === "string" ? s : plain(s, lang))).join(" · ");
      ln(label + ": " + items);
    }

    sectionHead(lang === "pt" ? "Certificações" : "Certifications");
    for (const c of courses) {
      ln("  • " + plain(c.name, lang) + " — " + plain(c.issuer, lang) + (c.hours ? " (" + (typeof c.hours === "string" ? c.hours : plain(c.hours, lang)) + ")" : ""));
    }

    sectionHead(lang === "pt" ? "Idiomas" : "Languages");
    ln(lang === "pt" ? "  • Português — Nativo" : "  • Portuguese — Native");
    ln(lang === "pt" ? "  • Inglês — Fluente (KUMON, 3 anos)" : "  • English — Fluent (KUMON, 3 years)");

    const text = lines.join("\n");

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Isaac-Nathan-CV-${lang.toUpperCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [lang]);
}
