import { useCallback } from "react";
import { personal, experiences, education, skillGroups, courses } from "../data/content";
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
    ln(
      lang === "pt"
        ? "Engenheiro de Computação em formação com experiência prática em IA Generativa, Cloud Azure e desenvolvimento Full-Stack. Construiu pipelines agentic com 7+ modelos de IA, migrou bancos de dados em larga escala para Azure Cosmos DB e entregou aplicações offline-first para campo. Foco em automação inteligente e integração de LLMs em fluxos de trabalho reais."
        : "Computer Engineering student with hands-on experience in Generative AI, Azure Cloud, and Full-Stack development. Built agentic pipelines with 7+ AI models, migrated large-scale databases to Azure Cosmos DB, and delivered offline-first field applications. Focused on intelligent automation and integrating LLMs into real-world workflows."
    );

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
    const projectEntries = [
      {
        name: "HarpIA",
        pt: "Motor de automação criativa com 7+ modelos de IA. Pipeline agentic autônomo com GPT-4.1 tool calling, geração de imagens (DALL-E 3, Flux), vídeo (Sora, Veo) e composição PIL zero-cost. 6.900+ LOC Python async com testes de segurança.",
        en: "Creative automation engine with 7+ AI models. Autonomous agentic pipeline with GPT-4.1 tool calling, image generation (DALL-E 3, Flux), video (Sora, Veo), and zero-cost PIL compositing. 6,900+ LOC async Python with security tests.",
        tech: "Python · GPT-4.1 · DALL-E 3 · Flux 2.0 Pro · Sora · Veo 3.1 · Azure Cosmos DB · SQLite",
      },
      {
        name: "Flora Sensus",
        pt: "App Flutter offline-first para inventário florestal com motor de sincronização custom, UUID remapping, rollback atômico e painel admin React. 24.659+ LOC em 4 subsistemas.",
        en: "Flutter offline-first app for forest inventory with custom sync engine, UUID remapping, atomic rollback, and React admin panel. 24,659+ LOC across 4 subsystems.",
        tech: "Flutter · Dart · Drift/SQLite · React · PocketBase · TypeScript",
      },
      {
        name: "SRF System",
        pt: "Motor de planejamento operacional para restauração florestal. Geração automática de dossiês executivos com alocação de equipes, territórios e cronogramas. Interface NiceGUI + CLI Rich.",
        en: "Operational planning engine for forest restoration. Automatic generation of executive dossiers with crew allocation, territory mapping, and schedules. NiceGUI + Rich CLI interface.",
        tech: "Python · NiceGUI · Rich CLI · openpyxl · Pandas",
      },
      {
        name: "Fennec Excel",
        pt: "Assistente de IA local para Excel via Ollama/qwen2.5 com agente ReAct. Comando em linguagem natural para filtrar, ordenar e manipular planilhas. Checkpoint automático antes de cada alteração.",
        en: "Local AI assistant for Excel via Ollama/qwen2.5 with ReAct agent. Natural language commands to filter, sort, and manipulate spreadsheets. Auto-checkpoint before every change.",
        tech: "Python · Ollama · CustomTkinter · xlwings · PyInstaller",
      },
    ];
    for (const proj of projectEntries) {
      blank();
      ln(proj.name);
      ln(proj[lang]);
      ln("  Tech: " + proj.tech);
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
