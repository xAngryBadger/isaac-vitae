import type { Bilingual } from "../lib/LanguageContext";
import { getCurrentSemesterInline } from "../lib/semester";

const b = (pt: string, en: string): Bilingual => ({ pt, en });

export type Course = {
  name: Bilingual | string;
  issuer: Bilingual | string;
  hours: Bilingual | string;
  category: string;
  prominent: boolean;
  context?: Bilingual;
};

export type Experience = {
  company: string;
  role: Bilingual;
  period: Bilingual;
  current: boolean;
  highlights: Bilingual[];
};

export type Education = {
  degree: Bilingual;
  institution: string;
  period: string;
  status: Bilingual;
  statusActive: boolean;
};

export const personal = {
  name: "Isaac Nathan",
  fullName: "Isaac Nathan da Silva Barbosa",
  title: b("Engenheiro de Software Full-Stack & Mobile · IA · Segurança Aplicada", "Full-Stack & Mobile Software Engineer · AI · Applied Security"),
  subtitle: b(
    "Engenheiro de Computação (5º período) — construo produtos ponta a ponta",
    "Computer Engineer (5th semester) — building end-to-end products"
  ),
  bio: b(
    "Engenheiro de Computação (5º período) com trajetória prática em desenvolvimento Full-Stack, Mobile e orquestração de IA. Construo produtos de ponta a ponta — de apps offline-first em Flutter para operações florestais de campo até motores de otimização logística com FastAPI e pandas. Migrei +500 GB de dados legados para Azure Cosmos DB em produção internacional. Arquitetei pipelines agentic com 9+ modelos de IA (GPT-4.1, Flux, DALL-E 3, Sora, Veo). Na pesquisa independente de segurança, reportei 20+ vulnerabilidades em infraestrutura governamental brasileira com 5 correções confirmadas via CERT.br/CTIR Gov. Aprendo resolvendo problemas de produção sob restrições severas — não seguindo tutoriais.",
    "Computer Engineer (5th semester) with hands-on experience in Full-Stack, Mobile development, and AI orchestration. Building end-to-end products — from offline-first Flutter apps for field forestry operations to logistics optimization engines with FastAPI and pandas. Migrated +500 GB of legacy data to Azure Cosmos DB in international production. Architected agentic pipelines with 9+ AI models (GPT-4.1, Flux, DALL-E 3, Sora, Veo). In independent security research, reported 20+ vulnerabilities in Brazilian government infrastructure with 5 fixes confirmed via CERT.br/CTIR Gov. I learn by solving production problems under severe constraints — not by following tutorials."
  ),
  bioExtended: b(
`Primeiro contato com Python em 2022 na UFOP (Química Industrial) — aprendizado autônomo, aulas extras à tarde para continuar evoluindo. Depois de 2 anos em Engenharia Química na UFSJ, voltei para Mariana e mudei para Computação. Construí o ForestAI do zero com Thonny IDE, anotando manualmente imagens de drone da Fundação Renova. Na Paware, migrei bases para Azure Cosmos DB (Meritage Homes, EUA) e arquitetei pipelines de IA para o HelloSocial. Atualmente no ${getCurrentSemesterInline().pt} de Engenharia de Computação, foco nos meus projetos pessoais: HarpIA, Orca e em breve ForestAI de novo.`,
`My first Python contact was in 2022 at UFOP (Industrial Chemistry) — self-directed learning, extra afternoon classes to keep evolving. After 2 years in Chemical Engineering at UFSJ, I came home and pivoted to Computer Engineering. I built ForestAI from scratch with Thonny IDE, manually annotating drone images from Fundação Renova. At Paware, I migrated databases to Azure Cosmos DB (Meritage Homes, USA) and architected AI pipelines for HelloSocial. Currently in my ${getCurrentSemesterInline().en} of Computer Engineering, I focus on my personal projects: HarpIA, Orca, and soon ForestAI again.`
  ),
  bioHighlights: [
    b(
"IA & Automação: Construção de pipelines orquestrados por LLM (GPT-4.1, multi-modelo) e integração de LLMs em fluxos de trabalho reais — do HelloSocial na Paware ao HarpIA pessoal.",
  "AI & Automation: Building LLM-orchestrated pipelines (GPT-4.1, multi-model) and integrating LLMs into real workflows — from HelloSocial at Paware to personal HarpIA project."
    ),
b(
"Interação com Cloud e Backend: Experiência prática em Azure Cloud, migração de centenas de GB para Cosmos DB e construção de APIs robustas com Python/FastAPI.",
"Cloud & Backend Interaction: Hands-on experience with Azure Cloud, migrating hundreds of GB to Cosmos DB, and building robust APIs with Python/FastAPI."
),
    b(
      "Visão de Produto (Full Stack): Capacidade de entregar soluções do zero, desde o frontend em React/TypeScript até a integração com dispositivos IoT em tempo real.",
      "Product Vision (Full Stack): Ability to deliver solutions from scratch — from React/TypeScript frontends to real-time IoT device integration."
    ),
    b(
      "Diferenciais Técnicos: Usuário avançado de Linux (CachyOS/Hyprland com customização própria), deploy local de modelos (Ollama) e estruturação de dados complexos em JSON para integrações limpas.",
      "Technical Differentiators: Advanced Linux user (CachyOS/Hyprland with custom setup), local model deployment (Ollama), and complex JSON data structuring for clean integrations."
    ),
  ],
  bioPersonal: b(
    "Fora do Terminal: Usuário avançado de Linux com ambiente customizado (CachyOS/Hyprland). Fora do código, valorizo momentos de descanso e atividades ao ar livre.",
    "Outside the Terminal: Advanced Linux user with custom environment (CachyOS/Hyprland). Outside of code, I value moments of rest and outdoor activities."
  ),
  email: "isaacnathandasilva@gmail.com",
  phone: "+55 (31) 99441-7786",
  location: b("Mariana, MG — Brasil", "Mariana, MG — Brazil"),
  linkedin: "https://www.linkedin.com/in/isaac-nathan-da-silva-barbosa-815b212ab/",
  github: "https://github.com/xAngryBadger",
  portfolio: "https://xangrybadger.github.io/isaac-vitae/",
  personalSite: "https://xangrybadger.github.io/nathan/",
  pcd: b("PCD — TEA (CID-11: 6A02.2) + TDAH (CID-11: 6A05.2)", "PWD — ASD (ICD-11: 6A02.2) + ADHD (ICD-11: 6A05.2)"),
};

export const experiences: Experience[] = [
  {
    company: "Inovesa Florestal",
    role: b("Engenheiro de Software Full-Stack & Mobile · Autônomo", "Full-Stack & Mobile Software Engineer · Freelance"),
    period: b("Mai 2026 — Presente", "May 2026 — Present"),
    current: true,
    highlights: [
      b(
        "Desenvolvedor principal e arquiteto de soluções ponta a ponta para operações de inventário e logística florestal.",
        "Lead developer and architect of end-to-end solutions for forest inventory and logistics operations."
      ),
      b(
        "Construção e deploy do Urutau — app Flutter offline-first com motor de sincronização custom, operando em áreas sem cobertura de rede.",
        "Built and deployed Urutau — Flutter offline-first app with custom sync engine, operating in no-coverage areas."
      ),
      b(
        "Desenvolvimento do Orca — motor de planejamento operacional (Python/FastAPI) para restauração florestal em larga escala, com geração automática de dossiês executivos, alocação de equipes e cronogramas otimizados.",
        "Developed Orca — operational planning engine (Python/FastAPI) for large-scale forest restoration, with automatic executive dossier generation, team allocation and optimized schedules."
      ),
      b(
        "Painéis administrativos React/TS com auth, relatórios e exportação multi-formato (XLSX, PDF, CSV).",
        "React/TS admin panels with auth, reports and multi-format export (XLSX, PDF, CSV)."
      ),
    ],
  },
  {
    company: "Paware Softwares",
    role: b("Desenvolvedor Full-Stack & Engenheiro de IA", "Full-Stack Developer & AI Engineer"),
    period: b("Out 2025 — Mai 2026", "Oct 2025 — May 2026"),
    current: false,
    highlights: [
      b(
        "Migrei +500 GB de dados legados (Meritage Homes, EUA) para Azure Cosmos DB — pipeline de extração automatizada, validação estrita de schema e rollback automático, com zero downtime.",
        "Migrated +500 GB legacy data (Meritage Homes, USA) to Azure Cosmos DB — automated extraction pipeline, strict schema validation and auto rollback, zero downtime."
      ),
      b(
        "Resolvi inconsistências cross-platform de MIME types (Android nativo vs iOS octet-stream), criando camada de abstração que eliminou falhas de ingestão no Cosmos DB.",
        "Resolved cross-platform MIME type inconsistencies (Android native vs iOS octet-stream), creating abstraction layer that eliminated Cosmos DB ingestion failures."
      ),
      b(
        "Arquitetei pipeline assíncrono de geração de mídia (HelloSocial) — orquestração de GPT-4.1, Flux Kontext Pro, DALL-E 3 e APIs de design (Canva/Placid) com fallback para SQLite + PIL local.",
        "Architected async media generation pipeline (HelloSocial) — orchestration of GPT-4.1, Flux Kontext Pro, DALL-E 3 and design APIs (Canva/Placid) with local SQLite + PIL fallback."
      ),
    ],
  },
  {
    company: "Pesquisador de Segurança Independente · Responsible Disclosure",
    role: b("Pesquisador de Segurança Independente", "Independent Security Researcher"),
    period: b("Mar 2026 — Presente", "Mar 2026 — Present"),
    current: true,
    highlights: [
      b(
        "20+ vulnerabilidades reportadas em infraestrutura governamental e setorial brasileira — 5 correções confirmadas via CERT.br/CTIR Gov. Três ondas de divulgação (Mar–Jun 2026).",
        "20+ vulnerabilities reported in Brazilian government/sectoral infrastructure — 5 fixes confirmed via CERT.br/CTIR Gov. Three disclosure waves (Mar–Jun 2026)."
      ),
      b(
        "Takedown de infraestrutura de phishing Microsoft/OneDrive. Pipeline de engenharia reversa: decodificação Base91 customizada (3 alfabetos, 176 strings) → extração de IOCs → report CERT.br/Cloudflare.",
        "Microsoft/OneDrive phishing infrastructure takedown. Reverse engineering pipeline: custom Base91 decoding (3 alphabets, 176 strings) → IOC extraction → CERT.br/Cloudflare report."
      ),
    ],
  },
  {
    company: "SuperNerds",
    role: b("Instrutor de Robótica", "Robotics Instructor"),
    period: b("Set 2025 — Out 2025", "Sep 2025 — Oct 2025"),
    current: false,
    highlights: [
      b(
        "Domínio de Arduino e LEGO em <2 semanas. Aulas de robótica e programação para crianças/adolescentes, conciliando com trabalho noturno.",
        "Mastered Arduino and LEGO in <2 weeks. Robotics and programming classes for children/adolescents, balancing with night work."
      ),
    ],
  },
];

export const education: Education[] = [
  {
    degree: b("Engenharia de Computação", "Computer Engineering"),
    institution: "Cruzeiro do Sul",
    period: "2024 — 2029",
    status: b("5º período (cursando)", "5th semester (in progress)"),
    statusActive: true,
  },
  {
    degree: b("Engenharia Química", "Chemical Engineering"),
    institution: "UFSJ — Campus Alto Paraopeba",
    period: "2022 — 2024",
    status: b("Transição para Computação", "Transition to Computer Engineering"),
    statusActive: false,
  },
];

export type SkillGroup = {
  label: Bilingual | string;
  skills: (Bilingual | string)[];
  color: string;
  storyProof: Bilingual;
  storySnippet?: { language: string; code: string };
  storyProjectIds: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend & Data",
    skills: ["Python", "FastAPI", "Node.js", "SQL", "pandas", "openpyxl"],
    color: "var(--color-accent-teal)",
    storyProof: b(
      "Python/FastAPI powering Orca planning engine, HarpIA pipelines, and Paware's Cosmos DB migration. pandas/openpyxl for executive dossier generation in Orca.",
      "Python/FastAPI powering Orca planning engine, HarpIA pipelines, and Paware's Cosmos DB migration. pandas/openpyxl for executive dossier generation in Orca."
    ),
    storySnippet: {
      language: "python",
      code: `async def optimize_schedule(crews: Crew[], sites: Site[]) -> Schedule:
    model = LinearProgram("Orca Scheduler")
    # ... constraint building with pandas DataFrames
    return model.solve()`,
    },
    storyProjectIds: ["orca", "harpia", "paware-migration"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["React 19", "TypeScript", "Flutter/Dart", "Vite", "Tailwind CSS"],
    color: "var(--color-accent-sapphire)",
    storyProof: b(
      "React 19 + TypeScript → HarpIA frontend, Urutau admin panel, Inovesa institutional site, this portfolio. Flutter/Dart for offline-first Urutau mobile app.",
      "React 19 + TypeScript → HarpIA frontend, Urutau admin panel, Inovesa institutional site, this portfolio. Flutter/Dart for offline-first Urutau mobile app."
    ),
    storySnippet: {
      language: "tsx",
      code: `const useOfflineSync = () => {
  const [pending, setPending] = useState<Mutation[]>([])
  // UUID remapping + transactional rollback on failure
  return { push: syncWithBackoff, pending }
};`,
    },
    storyProjectIds: ["harpia", "urutau", "inovesa"],
  },
  {
    label: "IA & ML",
    skills: ["PyTorch", "DeepForest", "Azure OpenAI", "Ollama", "LLM Agents (ReAct)"],
    color: "var(--color-accent-peach)",
    storyProof: b(
      "HarpIA orchestrates 9+ models (GPT-4.1, Flux, DALL-E 3, Sora, Veo). ForestAI uses PyTorch + DeepForest for species detection. Fennec Excel runs ReAct agents locally via Ollama.",
      "HarpIA orchestrates 9+ models (GPT-4.1, Flux, DALL-E 3, Sora, Veo). ForestAI uses PyTorch + DeepForest for species detection. Fennec Excel runs ReAct agents locally via Ollama."
    ),
    storySnippet: {
      language: "python",
      code: `class ReActAgent:
  async def step(self, thought: str) -> Action:
      prompt = f"{SYSTEM_PROMPT}\nThought: {thought}\nAction:"
      return parse(await self.llm(prompt))`,
    },
    storyProjectIds: ["harpia", "forestai", "fennec"],
  },
  {
    label: "Cloud & Infra",
    skills: ["Azure Cosmos DB", "Docker", "Terraform", "AWS (ECS)", "Git", "Linux"],
    color: "var(--color-accent)",
    storyProof: b(
      "Migrated 500+ GB to Azure Cosmos DB for Meritage Homes (USA) with zero downtime. Docker containers for AI agents. Terraform for infra-as-code. Custom CachyOS/Hyprland Linux rice.",
      "Migrated 500+ GB to Azure Cosmos DB for Meritage Homes (USA) with zero downtime. Docker containers for AI agents. Terraform for infra-as-code. Custom CachyOS/Hyprland Linux rice."
    ),
    storySnippet: {
      language: "hcl",
      code: `resource "azurerm_cosmosdb_account" "main" {
  name                = "paware-cosmos"
  resource_group_name = var.rg_name
  location            = var.location
  kind                = "GlobalDocumentDB"
  consistency_policy { consistency_level = "Session" }
}`,
    },
    storyProjectIds: ["paware-migration", "harpia", "florasensus"],
  },
  {
    label: "Segurança",
    skills: ["OSINT", "Eng. Reversa (JS/Base91)", "NIST CSF", "OWASP", "Threat Intel"],
    color: "var(--color-sec-open)",
    storyProof: b(
      "20+ vulnerabilities reported to CERT.br/CTIR Gov (5 fixes confirmed). Custom Base91 decoder (3 alphabets, 176 strings) for phishing JS deobfuscation. NIST CSF methodology for responsible disclosure.",
      "20+ vulnerabilities reported to CERT.br/CTIR Gov (5 fixes confirmed). Custom Base91 decoder (3 alphabets, 176 strings) for phishing JS deobfuscation. NIST CSF methodology for responsible disclosure."
    ),
    storyProjectIds: ["security-disclosures"],
  },
  {
    label: "Sync & Offline",
    skills: ["Drift/SQLite", "UUID remapping", "rollback transacional", "PocketBase"],
    color: "var(--color-sec-fixed)",
    storyProof: b(
      "Urutau offline-first sync: cascading UUID remapping across related tables, transactional rollback on failure, exponential backoff (2s/4s/8s). PocketBase backend with auth retry wrapper.",
      "Urutau offline-first sync: cascading UUID remapping across related tables, transactional rollback on failure, exponential backoff (2s/4s/8s). PocketBase backend with auth retry wrapper."
    ),
    storyProjectIds: ["urutau"],
  },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  category: Bilingual;
  description: Bilingual;
  tech: string[];
  color: string;
  icon: string | null;
  githubUrl: string | null;
  featured: boolean;
  inProgress: boolean;
  hasCaseStudy: boolean;
  caseStudySlug?: string;
  playground?: boolean;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "security-disclosures",
    title: "Security Disclosures & Threat Intel",
    year: "2026",
    category: b("Segurança · Threat Intel · Responsible Disclosure", "Security · Threat Intel · Responsible Disclosure"),
    description: b(
      "20+ vulnerabilidades em infraestrutura governamental/setorial brasileira — 5 fixes confirmados via CERT.br/CTIR Gov (Mar–Jun 2026). 3 ondas de divulgação responsável: zero retenção, notificação multi-canal (CERT.br + CTIR Gov + direto), verificação pós-fix. Takedown de phishing Microsoft/OneDrive origin (procorereviews.com) via flood controlado, infra rotacionada mapeada. Pipeline Threat Intel custom: Browser → JS download → Custom Base91 decoder (3 alfabetos, 176 strings) → IOC extraction → CERT.br/Cloudflare report.",
      "20+ vulnerabilities in Brazilian government/sector infrastructure — 5 fixes confirmed via CERT.br/CTIR Gov (Mar–Jun 2026). 3 responsible disclosure waves: zero retention, multi-channel notification (CERT.br + CTIR Gov + direct), post-fix verification. Microsoft/OneDrive phishing origin takedown (procorereviews.com) via controlled flood, rotated infrastructure mapped. Custom Threat Intel pipeline: Browser → JS download → Custom Base91 decoder (3 unique alphabets, 176 strings) → IOC extraction → CERT.br/Cloudflare report."
    ),
    tech: ["OSINT", "Nmap", "Burp Suite", "Shodan", "Base91 Decoder", "CERT.br / CTIR Gov", "LGPD", "NIST CSF"],
    color: "#3d1f1f",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/security-disclosures",
    demoUrl: "/security",
    featured: true,
    inProgress: true,
    hasCaseStudy: false,
  },
  {
    id: "harpia",
    title: "HarpIA",
    year: "2026",
    category: b("IA Criativa · Automação · Multi-Modelo", "Creative AI · Automation · Multi-Model"),
    description: b(
"Motor de automação criativa com 7+ modelos de IA (GPT-4.1, DALL-E 3, Flux 1.1/2.0/Kontext Pro, Nano Banana (Gemini), Sora, Veo 3.1). Pipeline orquestrado por LLM: copywriting, busca de imagens, composição de designs e geração de vídeo. Stack leve por padrão (SQLite + PIL local), com fallback para APIs pagas quando necessário.",
  "Creative automation engine with 7+ AI models (GPT-4.1, DALL-E 3, Flux 1.1/2.0/Kontext Pro, Nano Banana (Gemini), Sora, Veo 3.1). LLM-orchestrated pipeline: copywriting, image search, design compositing, and video generation. Lightweight stack by default (SQLite + local PIL), with fallback to paid APIs when needed."
    ),
    tech: ["Python", "GPT-4.1", "DALL-E 3", "Flux 2.0 Pro", "Sora", "Veo 3.1", "Pillow", "aiohttp", "SQLite", "Azure Cosmos DB"],
    color: "#FFB800",
  icon: null,
  githubUrl: "https://github.com/xAngryBadger/harpIA",
    featured: true,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "harpia",
  },
  {
    id: "orca",
    title: "Orca",
    year: "2026",
    category: b("Motor de Planejamento · Floresta · Logística", "Planning Engine · Forestry · Logistics"),
    description: b(
"Motor de planejamento operacional para restauração florestal em larga escala. Gera dossiês executivos, cronogramas de atividades, gerência tarifas/equipes/territórios. Interface FastAPI + Jinja2 + CLI.",
  "Operational planning engine for large-scale forest restoration. Generates executive dossiers, activity schedules, manages tariffs/crews/territories. FastAPI + Jinja2 + CLI interface."
    ),
    tech: ["Python 3.10+", "pandas", "openpyxl", "FastAPI", "Jinja2", "Rich", "unittest"],
    color: "#2d5a3d",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/orca",
    featured: true,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "orca",
  },
  {
    id: "urutau",
    title: "Urutau",
    year: "2026",
    category: b("Mobile · Offline-First · Flutter + React", "Mobile · Offline-First · Flutter + React"),
    description: b(
"App mobile para inventário florestal offline-first (Urutau) com serviço de sync custom (detecção de conflitos com resolução manual, rollback transacional em caso de falha, UUID remapping). Painel admin React com exportação XLSX/PDF/CSV — arquitetura e lógica de sync construídas do zero; código gerado com apoio de LLM (web) e revisado manualmente.",
  "Offline-first forest inventory mobile app (Urutau) with custom sync service (conflict detection with manual resolution, transactional rollback on failure, UUID remapping). React admin panel with XLSX/PDF/CSV export — architecture and sync logic built from scratch; code generated with LLM assistance (web) and manually reviewed."
    ),
    tech: ["Flutter", "Dart", "Drift / SQLite", "PocketBase", "React", "Vite", "Provider", "Workmanager"],
    color: "#2d6b3f",
    icon: "/images/projects/urutau-logo.png",
    githubUrl: "https://github.com/xAngryBadger/urutau-app",
    featured: true,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "urutau",
  },
  {
    id: "fennec",
    title: "Fennec Excel",
    year: "2025",
    category: b("IA Local · Desktop · Python", "Local AI · Desktop · Python"),
    description: b(
      "App desktop que conecta planilhas Excel a um agente de IA local (Ollama). Design visual feito à mão com mascote original, 6+ integrações OAuth (Gmail, Teams, Calendar, Drive, Outlook, Trello), checkpoint automático e instalador nativo.",
      "Desktop app connecting Excel spreadsheets to a local AI agent (Ollama). Hand-crafted visual design with original mascot, 6+ OAuth integrations (Gmail, Teams, Calendar, Drive, Outlook, Trello), auto-checkpoints, and native installer."
    ),
    tech: ["Python", "CustomTkinter", "Ollama", "openpyxl", "xlwings / COM", "ReAct", "PyInstaller", "Inno Setup"],
    color: "#c4853a",
  icon: "/images/projects/fennec-head.png",
  githubUrl: "https://github.com/xAngryBadger/Sahara-Fenneck",
    featured: true,
    inProgress: true,
    hasCaseStudy: true,
    caseStudySlug: "fennec-excel",
  },
  {
    id: "inovesa",
    title: "Inovesa Florestal",
    year: "2026",
    category: b("Web · Frontend Premium · React 19", "Web · Premium Frontend · React 19"),
    description: b(
      "Site profissional para empresa de engenharia florestal. React 19 + Motion + Lenis com parallax, scroll suave, formulários animados e multi-página com transições cinematográficas.",
      "Professional website for a forestry engineering company. React 19 + Motion + Lenis with parallax, smooth scroll, animated forms, and multi-page with cinematic transitions."
    ),
    tech: ["React 19", "Motion (Framer Motion)", "Lenis", "Tailwind CSS v4", "TypeScript", "Vite 6"],
    color: "#2a3a2a",
  icon: "/images/projects/inovesa-logo.svg",
  githubUrl: null,
  featured: false,
  inProgress: false,
  hasCaseStudy: true,
    caseStudySlug: "inovesa",
  },
  {
    id: "aguaquality",
    title: "AguaQuality",
    year: "2026",
    category: b("IoT · Pagamentos · Full-Stack", "IoT · Payments · Full-Stack"),
    description: b(
      "Sistema de gestão de posto de água com controle remoto de válvula via relé WiFi Refoss R11. Integração PIX iniciada (~80% completo). Projeto descontinuado por falta de pagamento do comitente.",
      "Water station management system with remote valve control via Refoss R11 WiFi relay. PIX integration started (~80% complete). Project discontinued due to non-payment."
    ),
    tech: ["Python", "FastAPI", "Azure Cosmos DB", "React", "TypeScript", "Docker"],
    color: "#1a3a4a",
  icon: "/images/aguaquality.png",
  githubUrl: null,
  featured: false,
  inProgress: false,
  hasCaseStudy: false,
},
{
  id: "hellosocial",
  title: "HelloSocial",
  year: "2026",
  category: b("IA · Social Media · Full-Stack", "AI · Social Media · Full-Stack"),
  description: b(
    "Plataforma de criação e agendamento de posts com IA — projeto na Paware que inspirou o HarpIA. Pipeline de geração de imagens com Flux Kontext Pro e DALL-E 3, agentes de copy e template. PIX via Mercado Pago.",
    "AI-powered social media post creation and scheduling platform — project at Paware that inspired HarpIA. Image generation pipeline with Flux Kontext Pro and DALL-E 3, copy and template agents. PIX via Mercado Pago."
  ),
  tech: ["Python", "FastAPI", "Azure OpenAI", "Flux", "Canva API", "Placid", "React", "TypeScript"],
  color: "#2a1a3a",
  icon: "/images/hellosocial.png",
  githubUrl: null,
  featured: true,
  inProgress: false,
  hasCaseStudy: false,
},
  {
    id: "mainecoon",
    title: "MaineCoon",
    year: "2026",
    category: b("IA · Jogos · LLM + RL", "AI · Gaming · LLM + RL"),
    description: b(
      "Bot de Minecraft com comandos em linguagem natural via LLM (NVIDIA NIM). Minerar, construir, seguir, navegar e interagir pelo chat. Módulo de reinforcement learning para comportamento autônomo.",
      "Minecraft bot with natural language commands via LLM (NVIDIA NIM). Mine, craft, follow, navigate, and interact via chat. Reinforcement learning module for autonomous behavior."
    ),
    tech: ["Node.js", "mineflayer", "NVIDIA NIM API", "Reinforcement Learning", "pathfinder"],
    color: "#2a2a1a",
  icon: "/images/projects/mainecoon.png",
    githubUrl: null,
    featured: false,
    inProgress: true,
    hasCaseStudy: false,
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    year: "2026",
    category: b("Mobile · Finanças · React Native", "Mobile · Finance · React Native"),
    description: b(
      "App de finanças pessoais com categorias e análise visual de gastos. React Native (Expo 54) com TypeScript.",
      "Personal finance tracking app with category organization and visual spending analytics. React Native (Expo 54) with TypeScript."
    ),
    tech: ["React Native", "Expo 54", "TypeScript", "React Context", "React Navigation"],
    color: "#1a2a3a",
  icon: "/images/projects/finance-tracker.png",
  githubUrl: "https://github.com/xAngryBadger/finance-tracker",
    featured: false,
    inProgress: true,
    hasCaseStudy: false,
  },
  {
  id: "forestai",
  title: "ForestAI",
  year: "2024",
  category: b("IA · Visão Computacional · PyTorch", "AI · Computer Vision · PyTorch"),
  description: b(
"Detecção e classificação de espécies florestais com Deep Learning. Pipeline completo: anotação manual de imagens de drone, treinamento DeepForest em GPU local, splits estratificadas. Construído do zero sem IA-assisted coding.",
  "Forest species detection and classification with Deep Learning. Full pipeline: manual annotation of drone imagery, DeepForest training on local GPU, stratified splits. Built from scratch without AI-assisted coding."
),
tech: ["Python", "PyTorch", "DeepForest", "OpenCV", "scikit-learn", "TensorBoard"],
  color: "#2a301a",
  icon: null,
  githubUrl: "https://github.com/xAngryBadger/ForestAi",
  featured: true,
  inProgress: true,
  hasCaseStudy: true,
  caseStudySlug: "forestai",
},
  {
    id: "apple-product-page",
    title: "Apple Product Page",
    year: "2026",
    category: b("Web · 3D · Cinematic Scroll", "Web · 3D · Cinematic Scroll"),
    description: b(
      "Página de produto estilo Apple com R3F 3D, GSAP ScrollTrigger, Lenis smooth scroll, variable fonts e magnetic buttons. O scroll É o portfólio.",
      "Apple-style product page with R3F 3D, GSAP ScrollTrigger, Lenis smooth scroll, variable fonts and magnetic buttons. The scroll IS the portfolio."
    ),
    tech: ["React 19", "Three.js / R3F", "GSAP ScrollTrigger", "Lenis", "TypeScript", "Vite"],
    color: "#0a0a0a",
    icon: null,
  githubUrl: "https://github.com/xAngryBadger/apple-product-page",
  demoUrl: "https://xangrybadger.github.io/apple-product-page/",
  featured: false,
  inProgress: false,
  hasCaseStudy: false,
  playground: true,
},
{
id: "notion-editor",
    title: "Notion Editor",
    year: "2026",
    category: b("Web · Rich Text · Block Editor", "Web · Rich Text · Block Editor"),
    description: b(
      "Editor de blocos estilo Notion com Tiptap 3.x, slash commands, drag handle, menu bolha, IA assistente e exportação Markdown. Toggle claro/escuro.",
      "Notion-style block editor with Tiptap 3.x, slash commands, drag handle, bubble menu, AI assistant and Markdown export. Light/dark toggle."
    ),
    tech: ["React 19", "Tiptap 3.x", "ProseMirror", "dnd-kit", "TypeScript", "Vite"],
    color: "#191919",
    icon: null,
  githubUrl: "https://github.com/xAngryBadger/notion-editor",
  demoUrl: "https://xangrybadger.github.io/notion-editor/",
  featured: false,
  inProgress: false,
  hasCaseStudy: false,
  playground: true,
},
{
id: "linear-app-ui",
title: "Linear App UI",
year: "2026",
category: b("Web · App UI · Kanban", "Web · App UI · Kanban"),
description: b(
"Clone do Linear com 3 colunas, command palette (cmdk), Kanban drag-drop (dnd-kit), Zustand stores e 25 issues seed. Dark cinematic.",
"Linear clone with 3-column layout, command palette (cmdk), Kanban drag-drop (dnd-kit), Zustand stores and 25 seed issues. Dark cinematic."
),
tech: ["React 19", "cmdk", "dnd-kit", "Zustand", "Tailwind CSS v4", "TypeScript"],
color: "#5e6ad2",
icon: null,
githubUrl: "https://github.com/xAngryBadger/linear-app-ui",
demoUrl: "https://xangrybadger.github.io/linear-app-ui/",
featured: false,
inProgress: false,
hasCaseStudy: false,
playground: true,
},
  {
    id: "capivara",
    title: "Capivara",
    year: "2026",
    category: b("Web · Suíte PDF · 15 Ferramentas", "Web · PDF Suite · 15 Tools"),
    description: b(
      "Suíte PDF completa estilo iLovePDF — 15 ferramentas: DOCX/XLSX→PDF, PDF→DOCX, compressão, merge, split, rotação, marca d'água, numeração, cabeçalho/rodapé, proteção, desbloqueio, OCR, PDF→imagens, PDF/A. Frontend React 19 com hash routing, backend FastAPI com StreamingResponse e cloudflared para túnel serverless gratuito via Google Colab.",
      "Full PDF suite à la iLovePDF — 15 tools: DOCX/XLSX→PDF, PDF→DOCX, compress, merge, split, rotate, watermark, page numbers, header/footer, protect, unlock, OCR, PDF→images, PDF/A. React 19 frontend with hash routing, FastAPI backend with StreamingResponse and cloudflared for free serverless tunneling via Google Colab."
    ),
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "FastAPI", "pypdf", "reportlab", "PyMuPDF", "cloudflared"],
    color: "#2563eb",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/capivara",
    demoUrl: "https://xangrybadger.github.io/capivara/",
    featured: false,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "capivara",
    playground: true,
  },
  {
    id: "tarsier",
    title: "Tarsier",
    year: "2026",
    category: b("Web · Ferramenta · Editor de Dados", "Web · Tool · Data Editor"),
    description: b(
"Workbench JSON 100% client-side com árvore colapsável, transformações (pretty-print, minify, CSV, tipos TypeScript), stats (keys, depth, bytes) e exportação. Zero backend — parse, análise e transformação rodam no browser.",
       "100% client-side JSON workbench with collapsible tree, transformations (pretty-print, minify, CSV, TypeScript types), stats (keys, depth, bytes) and export. Zero backend — parse, analysis and transformation run in the browser."
    ),
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Framer Motion"],
    color: "#10b981",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/tarsier",
    demoUrl: "https://xangrybadger.github.io/tarsier/",
    featured: false,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "tarsier",
    playground: true,
  },
  {
    id: "kakapo",
    title: "Kakapo",
    year: "2026",
    category: b("Web · Ferramenta · Editor de Imagens", "Web · Tool · Image Editor"),
    description: b(
      "Editor de imagens client-side com Canvas API — compressão, resize, crop, filtros, rotação e ajustes. Motor de edição commit-based com undo/redo. 100% no browser, zero upload. Paleta warm amber/coral.",
      "Client-side image editor with Canvas API — compress, resize, crop, filters, rotation and adjustments. Commit-based editing engine with undo/redo. 100% in-browser, zero uploads. Warm amber/coral palette."
    ),
    tech: ["React 19", "Canvas API", "TypeScript", "Vite", "Tailwind CSS v4"],
    color: "#d97706",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/kakapo",
    demoUrl: "https://xangrybadger.github.io/kakapo/",
    featured: false,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "kakapo",
    playground: true,
  },
  {
    id: "oilbird",
    title: "Oilbird",
    year: "2026",
    category: b("Web · Ferramenta · Markdown → PDF", "Web · Tool · Markdown to PDF"),
    description: b(
"Conversor Markdown → PDF com preview live split-pane e renderização WeasyPrint profissional. Backend FastAPI com CSS Paged Media (@page, headers/footers), cloudflared para túnel serverless gratuito via Google Colab. Paleta ink/ivory com acentos dourados.",
       "Markdown → PDF converter with live split-pane preview and professional WeasyPrint rendering. FastAPI backend with CSS Paged Media (@page, headers/footers), cloudflared for free serverless tunneling via Google Colab. Ink/ivory palette with golden accents."
    ),
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Framer Motion", "FastAPI", "WeasyPrint", "cloudflared"],
    color: "#64748b",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/oilbird",
    demoUrl: "https://xangrybadger.github.io/oilbird/",
    featured: false,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "oilbird",
    playground: true,
  },
  {
    id: "cegonha",
    title: "Cegonha",
    year: "2026",
    category: b("Web · Ferramenta · Geração de Currículo", "Web · Tool · Resume Generation"),
    description: b(
"Gerador de currículo com formulários estruturados, 3 estilos de template e exportação PDF server-side. Backend FastAPI + reportlab para geração de PDF limpo, sem marca d'água. Paleta sage green com tipografia editorial. Suporte bilíngue (pt/en).",
       "Resume generator with structured forms, 3 template styles and server-side PDF export. FastAPI + reportlab backend for clean PDF generation, no watermark. Sage green palette with editorial typography. Bilingual support (pt/en)."
    ),
tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Framer Motion", "FastAPI", "reportlab"],
    color: "#2D6A4F",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/cegonha",
    demoUrl: "https://xangrybadger.github.io/cegonha/",
    featured: false,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "cegonha",
    playground: true,
  },
{
id: "diskvisor",
    title: "DiskVisor",
    year: "2026",
    category: b("Desktop · Tauri 2 · Visualização de Disco", "Desktop · Tauri 2 · Disk Visualization"),
    description: b(
      "Analisador de uso de disco com sunburst D3, scan paralelo (jwalk), árvore de arquivos colapsável e breadcrumb interativo. Tauri 2 + Rust.",
      "Disk usage analyzer with D3 sunburst, parallel scan (jwalk), collapsible file tree and interactive breadcrumb. Tauri 2 + Rust."
    ),
    tech: ["Tauri 2", "React 19", "D3.js", "jwalk (Rust)", "TypeScript", "Vite"],
    color: "#1B4332",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/diskvisor",
    featured: false,
    inProgress: false,
    hasCaseStudy: false,
    playground: true,
  },
  {
    id: "sysvisor",
    title: "SysVisor",
    year: "2026",
    category: b("Desktop · Tauri 2 · Monitor de Sistema", "Desktop · Tauri 2 · System Monitor"),
    description: b(
      "Monitor de sistema com CPU/memória/disco/rede/processos em tempo real. Kill process, gauges por core, swap tracking. Tauri 2 + sysinfo (Rust).",
      "Real-time system monitor with CPU/memory/disk/network/processes. Kill process, per-core gauges, swap tracking. Tauri 2 + sysinfo (Rust)."
    ),
    tech: ["Tauri 2", "React 19", "sysinfo (Rust)", "Tailwind CSS v4", "TypeScript", "Vite"],
    color: "#0D1117",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/sysvisor",
    featured: false,
    inProgress: false,
    hasCaseStudy: false,
    playground: true,
  },
  {
    id: "forge-usb",
    title: "ForgeUSB",
    year: "2026",
    category: b("Desktop · Tauri 2 · Bootable USB", "Desktop · Tauri 2 · Bootable USB"),
    description: b(
      "Criador de USB bootável com listagem de dispositivos via sysfs, unmount automático e escrita com dd. Seleção de ISO com browse. Tauri 2 + Rust.",
      "Bootable USB maker with sysfs device listing, auto-unmount and dd write. ISO selection with browse dialog. Tauri 2 + Rust."
    ),
    tech: ["Tauri 2", "React 19", "sysfs (Rust)", "dd", "Tailwind CSS v4", "TypeScript"],
    color: "#BC6C25",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/forge-usb",
    featured: false,
    inProgress: false,
    hasCaseStudy: false,
    playground: true,
  },
];

export const courses: Course[] = [
  { name: "Python Essentials 1 & 2", issuer: "Cisco Networking Academy", hours: "", category: "tech", prominent: true },
  { name: "Data Science Essentials (pandas, Matplotlib)", issuer: "Cisco Networking Academy", hours: "", category: "tech", prominent: true },
  { name: "Data Analytics Essentials", issuer: "Cisco Networking Academy", hours: "", category: "tech", prominent: true },
  { name: "Networking Basics (120h)", issuer: "Cisco Networking Academy", hours: "120h", category: "tech", prominent: true },
  { name: "Introdução à Cibersegurança", issuer: "Cisco Networking Academy", hours: "", category: "security", prominent: true },
  { name: "Segurança em TI", issuer: "Fundação Bradesco", hours: "", category: "security", prominent: true },
  { name: "IA para Otimização de Processos (71h)", issuer: "Escola Virtual Gov / Enap / Serpro", hours: "71h", category: "ai", prominent: true },
  { name: "Inglês Fluente (3 anos)", issuer: "KUMON", hours: "", category: "language", prominent: true }
];

export const stats = [
  { value: 20, suffix: "+", label: b("Projetos", "Projects") },
  { value: 10, suffix: "mo+", label: b("Experiência Profissional", "Professional Experience") },
  { value: 7, suffix: "+", label: b("Modelos de IA", "AI Models") },
];

export const cvSummary: Bilingual = b(
"Python · FastAPI · React 19 · Azure Cosmos DB · GPT-4.1 · Flutter · PyTorch — 10 meses de experiência profissional. De Química Industrial para Computação: construí o ForestAI do zero (Stack Overflow + Thonny, sem IA-assisted coding). Na Paware, migrei centenas de GB para Azure Cosmos DB (Meritage Homes, EUA) e arquitetei pipelines orquestrados por LLM para o HelloSocial (GPT-4.1, DALL-E 3, Flux). Aprendo resolvendo problemas reais — de MIME type cross-platform a agentes ReAct com schema enforcement.",
  "Python · FastAPI · React 19 · Azure Cosmos DB · GPT-4.1 · Flutter · PyTorch — 10 months of professional experience. From Industrial Chemistry to Computer Engineering: built ForestAI from scratch (Stack Overflow + Thonny, no AI-assisted coding). At Paware, migrated hundreds of GB to Azure Cosmos DB (Meritage Homes, USA) and architected LLM-orchestrated pipelines for HelloSocial (GPT-4.1, DALL-E 3, Flux). I learn by solving real problems — from cross-platform MIME types to ReAct agents with schema enforcement."
);

export type CvProject = {
  id: string;
  name: string;
  url: string | null;
  tier: 1 | 2 | 3;
  bullets: Bilingual[];
  tech: string[];
};

export const cvProjects: CvProject[] = [
  {
    id: "urutau",
    name: "Urutau",
    url: "github.com/xAngryBadger/urutau-app",
    tier: 1,
    bullets: [
      b(
        "App Flutter offline-first para inventário florestal (Urutau) com serviço de sync custom — remapping de UUIDs em cascata pelas tabelas relacionadas e rollback transacional em caso de falha.",
        "Flutter offline-first app for forest inventory (Urutau) with custom sync service — cascading UUID remapping across related tables and transactional rollback on failure."
      ),
      b(
        "Arquitetura e lógica de sync construídas do zero; código gerado com apoio de LLM (web) e revisado manualmente. Painel admin React com auth, fotos, relatórios e exportação XLSX/PDF/CSV.",
        "Architecture and sync logic built from scratch; code generated with LLM assistance (web) and manually reviewed. React admin panel with auth, photos, reports, and XLSX/PDF/CSV export."
      ),
      b(
        "Backoff exponencial (2s, 4s, 8s), auth retry wrapper com refresh transparente em 401s, ngrok bypass para desenvolvimento.",
        "Exponential backoff (2s, 4s, 8s), auth retry wrapper with transparent 401 refresh, ngrok bypass for development."
      ),
    ],
    tech: ["Flutter", "Dart", "Drift/SQLite", "React", "PocketBase", "TypeScript"],
  },
  {
    id: "orca",
    name: "Orca",
    url: "github.com/xAngryBadger/orca",
    tier: 1,
    bullets: [
      b(
        "Motor de planejamento operacional para restauração florestal em larga escala — dossiês executivos automáticos, cronogramas otimizados, gestão de tarifas/equipes/territórios.",
        "Operational planning engine for large-scale forest restoration — automatic executive dossiers, optimized schedules, tariff/crew/territory management."
      ),
      b(
        "FastAPI + Jinja2 + Rich CLI com testes unitários. Geração de planilhas executivas (openpyxl) e PDFs profissionais. Pipeline de validação de dados de entrada com pandas.",
        "FastAPI + Jinja2 + Rich CLI with unit tests. Executive spreadsheet generation (openpyxl) and professional PDFs. Input data validation pipeline with pandas."
      ),
    ],
    tech: ["Python", "FastAPI", "pandas", "openpyxl", "Jinja2", "Rich"],
  },
  {
    id: "harpia",
    name: "HarpIA",
    url: "github.com/xAngryBadger/harpIA",
    tier: 1,
    bullets: [
      b(
        "Motor de automação criativa com 9+ modelos de IA (GPT-4.1, Flux, DALL-E 3, Sora, Veo, Nano Banana) — pipeline orquestrado por LLM multi-etapa: copywriting, busca de imagens, composição de designs, geração de vídeo.",
        "Creative automation engine with 9+ AI models (GPT-4.1, Flux, DALL-E 3, Sora, Veo, Nano Banana) — multi-model pipeline with GPT-4.1: copywriting, image search, design compositing, video generation."
      ),
      b(
        "Stack leve por padrão (SQLite + PIL local) com fallback para APIs pagas. Backend swap: SQLite local para Azure Cosmos DB + Blob Storage, alternado via env var. Pronto para cron com file-locking e recuperação de lotes travados.",
        "Lightweight stack by default (SQLite + local PIL) with fallback to paid APIs. Backend swap: local SQLite to Azure Cosmos DB + Blob Storage, toggled via env var. Cron-ready with file-locking and stuck batch recovery."
      ),
    ],
    tech: ["Python", "GPT-4.1", "Flux", "DALL-E 3", "Sora", "Veo", "Azure Cosmos DB", "SQLite", "PIL"],
  },
  {
    id: "forestai",
    name: "ForestAI",
    url: "github.com/xAngryBadger/ForestAi",
    tier: 1,
    bullets: [
      b(
        "Detecção e classificação de espécies florestais com Deep Learning — construído do zero sem IA-assisted coding. Stack Overflow + Thonny IDE apenas.",
        "Forest species detection and classification with Deep Learning — built from scratch without AI-assisted coding. Stack Overflow + Thonny IDE only."
      ),
      b(
        "Anotação manual de imagens de drone da Fundação Renova (bounding boxes), treinamento DeepForest em GPU local, splits estratificadas. Interpretação de curvas no TensorBoard — detectando memorização vs generalização. O jeito difícil construiu a intuição que fez cada framework subsequente clicar mais rápido.",
        "Manual annotation of drone images from Fundação Renova (bounding boxes), DeepForest training on local GPU, stratified splits. TensorBoard curve interpretation — detecting memorization vs generalization. The hard way built the intuition that made every subsequent framework click faster."
      ),
    ],
    tech: ["PyTorch", "DeepForest", "OpenCV", "scikit-learn", "TensorBoard"],
  },
  {
    id: "security-disclosures",
    name: "Security Disclosures & Threat Intel",
    url: "github.com/xAngryBadger/security-disclosures",
    tier: 1,
    bullets: [
      b(
        "20+ vulnerabilidades em infraestrutura governamental/setorial brasileira — 5 correções confirmadas via CERT.br/CTIR Gov (Mar–Jun 2026). Três ondas de divulgação responsável: zero retenção, notificação multi-canal, verificação pós-fix.",
        "20+ vulnerabilities in Brazilian government/sector infrastructure — 5 fixes confirmed via CERT.br/CTIR Gov (Mar–Jun 2026). Three responsible disclosure waves: zero retention, multi-channel notification, post-fix verification."
      ),
      b(
        "Takedown de phishing Microsoft/OneDrive: origin server (procorereviews.com) derrubado via flood controlado (~10k requests, HTTP 521 sustentado). Infra rotacionada mapeada, IOCs extraídos, reportada ao CERT.br/Cloudflare.",
        "Microsoft/OneDrive phishing takedown: origin server (procorereviews.com) toppled via controlled flood (~10k requests, sustained HTTP 521). Rotated infrastructure mapped, IOCs extracted, reported to CERT.br/Cloudflare."
      ),
      b(
        "Pipeline Threat Intel custom: Browser → JS download → Custom Base91 decoder (3 alfabetos, 176 strings) → IOC extraction (PageConfig, tokens, OneDrive redirect) → CERT.br/Cloudflare report.",
        "Custom Threat Intel pipeline: Browser → JS download → Custom Base91 decoder (3 unique alphabets, 176 strings) → IOC extraction (PageConfig, tokens, OneDrive redirect) → CERT.br/Cloudflare report."
      ),
    ],
    tech: ["OSINT", "Base91 Decoder", "NIST CSF", "CERT.br / CTIR Gov", "LGPD", "Cloudflare", "AbuseIPDB", "URLhaus"],
  },
];

export type CodeSnippet = {
  language: string;
  title: Bilingual;
  code: string;
};

export type GalleryImage = {
  src: string;
  alt: Bilingual;
};

export const caseStudies: Record<string, {
  challenge: Bilingual;
  approach: Bilingual;
  results: Bilingual[];
  keyFeatures: Bilingual[];
  codeSnippets?: CodeSnippet[];
  gallery?: GalleryImage[];
}> = {
  harpia: {
    challenge: b(
      "Criar conteúdo visual para marketing digital exige copy + imagem + composição — repetido dezenas de vezes por campanha. Cada asset leva ~15 min manualmente; 50 posts = ~12h de trabalho humano. O desafio: automatizar esse pipeline mantendo controle de custo (APIs pagas apenas quando necessário) e qualidade visual consistente.",
      "Creating visual content for digital marketing requires copy + image + composition — repeated dozens of times per campaign. Each asset takes ~15 min manually; 50 posts = ~12h of human work. The challenge: automate this pipeline while controlling cost (paid APIs only when needed) and maintaining consistent visual quality."
    ),
    approach: b(
"Pipeline orquestrado por LLM com modelo por tarefa: GPT-4.1 para copy e orquestração, Flux para geração de imagens com identidade visual consistente, DALL-E 3 quando o prompt exige composição livre. Compositor PIL local como stack leve padrão (zero custo de API) — só aciona APIs pagas quando o template exige renderização que PIL não resolve. Backend dual: SQLite local para desenvolvimento e uso pessoal, Azure Cosmos DB + Blob Storage para escala.",
  "LLM-orchestrated pipeline with model-per-task: GPT-4.1 for copy and orchestration, Flux for image generation with consistent visual identity, DALL-E 3 when the prompt requires free composition. Local PIL compositor as default lightweight stack (zero API cost) — only triggers paid APIs when the template requires rendering that PIL can't handle. Dual backend: local SQLite for development and personal use, Azure Cosmos DB + Blob Storage for scale."
    ),
    results: [
      b("Pipeline completo: copywriting → busca de imagens → composição → output final em ~30s por asset", "Full pipeline: copywriting → image search → composition → final output in ~30s per asset"),
      b("Stack leve por padrão (SQLite + PIL local) — APIs pagas apenas para composições que PIL não resolve", "Lightweight stack by default (SQLite + local PIL) — paid APIs only for compositions PIL can't handle"),
      b("Agente GPT-4.1 com schema enforcement: resposta fora do formato = rejeição automática, não crash", "GPT-4.1 agent with schema enforcement: response outside format = auto-rejection, not crash"),
      b("Backend swap via env var: SQLite local ↔ Azure Cosmos DB + Blob Storage, zero mudança de código", "Backend swap via env var: local SQLite ↔ Azure Cosmos DB + Blob Storage, zero code changes"),
      b("Cron-ready com file-locking e recuperação de lotes travados (produção noturna autônoma)", "Cron-ready with file-locking and stuck batch recovery (autonomous overnight production)"),
    ],
    keyFeatures: [
      b("Multi-modelo por tarefa: Flux (identidade visual), DALL-E 3 (composição livre), Sora/Veo (vídeo)", "Multi-model per task: Flux (visual identity), DALL-E 3 (free composition), Sora/Veo (video)"),
      b("Compositor PIL: 8 templates de layout, brand colors, badges — zero custo quando suficiente", "PIL compositor: 8 layout templates, brand colors, badges — zero cost when sufficient"),
      b("APIs de design como fallback: Placid, Templated.io, Canva Connect (quando PIL não basta)", "Design APIs as fallback: Placid, Templated.io, Canva Connect (when PIL isn't enough)"),
      b("Segurança: testes de validação de secrets, env-based config, sem credenciais hardcoded", "Security: secret validation tests, env-based config, no hardcoded credentials"),
    ],
    codeSnippets: [
      {
        language: "python",
        title: b("Pipeline Orquestrado por LLM — GPT-4.1", "LLM-Orchestrated Pipeline — GPT-4.1"),
        code: `async def run_agent(self, batch: Batch) -> Batch:
    messages = [{"role": "system", "content": self.system_prompt}]
    tools = self._build_tool_schema(batch)

    for iteration in range(MAX_ITERATIONS):
        response = await self.client.chat.completions.create(
            model="gpt-4.1",
            messages=messages,
            tools=tools,
            tool_choice="auto",
        )
        choice = response.choices[0]

        if choice.finish_reason == "tool_calls":
            for call in choice.message.tool_calls:
                result = await self._execute_tool(call)
                messages.append({"role": "tool", "content": result})
        else:
            return self._finalize(batch, choice.message.content)

    raise AgentMaxIterationsError()`,
      },
      {
        language: "python",
        title: b("Compositor PIL Local", "Local PIL Compositor"),
        code: `class PILCompositor:
    TEMPLATES = {
        "modern_split": ModernSplitTemplate,
        "centered_hero": CenteredHeroTemplate,
        "grid_four": GridFourTemplate,
    }

    async def compose(self, layout: str, copy: str,
                      image: Image.Image, brand: BrandConfig) -> Image.Image:
        template = self.TEMPLATES[layout](brand)
        canvas = Image.new("RGB", template.size, brand.bg_color)
        canvas = template.render(canvas, copy=copy, image=image)
        return canvas`,
      },
    ],
  },
  orca: {
    challenge: b(
      "Projetos de restauração florestal cruzam centenas de territórios, dezenas de equipes com tarifas diferentes, janelas sazonais por bioma, e dossiês executivos de 40+ páginas. Planejar manualmente um projeto de 500 ha leva ~3 semanas — com erros de tarifação entre tipos de equipe e conflitos de cronograma que só aparecem em campo.",
      "Forest restoration projects span hundreds of territories, dozens of crews with different tariffs, seasonal windows per biome, and 40+ page executive dossiers. Manually planning a 500 ha project takes ~3 weeks — with tariff misapplication between crew types and schedule conflicts that only surface in the field."
    ),
    approach: b(
"Motor de planejamento Python que modela o domínio como pipeline: territories.allocate → tariffs.apply → scheduler.build_timeline → Dossier(). Pandas para transforms numéricos (alocação, tarifação, custos), openpyxl para exportação Excel dos dossiês. FastAPI + Jinja2 para visualização web interativa + Rich CLI para automação batch.",
  "Python planning engine that models the domain as a pipeline: territories.allocate → tariffs.apply → scheduler.build_timeline → Dossier(). Pandas for numerical transforms (allocation, tariffing, costs), openpyxl for Excel dossier export. FastAPI + Jinja2 for interactive web visualization + Rich CLI for batch automation."
    ),
    results: [
      b("Dossiê executivo completo (cronograma + custos + mapa de territórios) gerado em ~45 min vs. ~3 semanas manual", "Complete executive dossier (schedule + costs + territory map) generated in ~45 min vs. ~3 weeks manually"),
      b("Motor de tarifação com regras por tipo de equipe e região — elimina erros de aplicação manual", "Tariff engine with rules per crew type and region — eliminates manual application errors"),
      b("Pipeline modular: cada etapa (alocação, tarifação, scheduling) é testável independentemente", "Modular pipeline: each step (allocation, tariffing, scheduling) is independently testable"),
      b("FastAPI + Jinja2 para inspeção visual + CLI Rich para automação batch (mesmo engine, duas interfaces)",
  "FastAPI + Jinja2 for visual inspection + Rich CLI for batch automation (same engine, two interfaces)"),
    ],
    keyFeatures: [
      b("Pipeline pandas: allocate → apply tariffs → build timeline → export dossier", "Pandas pipeline: allocate → apply tariffs → build timeline → export dossier"),
      b("Exportação openpyxl com formatação profissional (headers, bordas, seções)", "openpyxl export with professional formatting (headers, borders, sections)"),
      b("FastAPI + Jinja2 web para exploração interativa + Rich CLI para automação",
  "FastAPI + Jinja2 web for interactive exploration + Rich CLI for automation"),
      b("Testes que capturam misapplication de tarifas entre limites de tipo de equipe", "Tests that catch tariff misapplication across crew type boundaries"),
    ],
    codeSnippets: [
      {
        language: "python",
        title: b("Motor de Planejamento — Geração de Dossiê", "Planning Engine — Dossier Generation"),
        code: `class PlanningEngine:
    def __init__(self, config: PlanningConfig):
        self.territories = TerritoryMapper(config)
        self.tariffs = TariffManager(config.tariff_path)
        self.scheduler = ActivityScheduler(config.calendar)

    def generate_dossier(self, input_data: pd.DataFrame) -> Dossier:
        plans = self.territories.allocate(input_data)
        costed = self.tariffs.apply(plans)
        scheduled = self.scheduler.build_timeline(costed)
        return Dossier(
            executive_summary=self._summarize(scheduled),
            activity_schedule=scheduled,
            cost_breakdown=self.tariffs.breakdown(costed),
            territory_map=plans.to_geo(),
        )`,
      },
      {
        language: "python",
        title: b("CLI Rich — Saída Estruturada", "Rich CLI — Structured Output"),
        code: `@app.command()
def plan(input_path: str, output_dir: str = "./output"):
    console.rule("[bold green]Orca Planning Engine[/]")
    with console.status("Processando dados..."):
        engine = PlanningEngine.from_yaml("config.yaml")
        dossier = engine.generate_dossier(
            pd.read_excel(input_path)
        )
    dossier.save(output_dir)
    console.print(f"[green]✓[/] Dossiê salvo em {output_dir}")`,
      },
    ],
  },
  "urutau": {
    challenge: b(
      "Inventário florestal em campo requer app que funciona sem internet por dias, sincroniza quando conectado, e resolve conflitos entre edições simultâneas de agentes em campo e gestores no escritório. Firebase/Supabase exigem conexão; apps de coleta genéricos não modelam a hierarquia florestal (Propriedade > UT > Parcela > Planta > Foto).",
      "Forest inventory in the field requires an app that works without internet for days, syncs when connected, and resolves conflicts between simultaneous edits from field agents and office managers. Firebase/Supabase require connectivity; generic collection apps don't model the forest hierarchy (Propriedade > UT > Parcela > Planta > Foto)."
    ),
    approach: b(
"App Flutter offline-first com Drift/SQLite local e serviço de sync custom (arquitetura e lógica de conflito desenhados manualmente — UI e boilerplate com apoio de LLM e revisão humana). UUID remapping para conciliar IDs cliente-servidor com remapping em cascata pelas tabelas relacionadas. PocketBase como backend leve (deploy simples, sem vendor lock-in). Painel admin React para gestão centralizada.",
  "Flutter offline-first app with local Drift/SQLite and custom sync service (architecture and conflict logic hand-designed — UI and boilerplate LLM-assisted with human review). UUID remapping to reconcile client-server IDs with cascading remapping across related tables. PocketBase as lightweight backend (simple deploy, no vendor lock-in). React admin panel for centralized management."
    ),
    results: [
      b("Motor de sync com detecção de conflitos com resolução manual e rollback transacional em caso de falha — sem corrupção de dados em falhas parciais",
  "Sync service with conflict detection with manual resolution and transactional rollback on failure — no data corruption on partial failures"),
      b("UUID remapping em cascata pelas tabelas relacionadas: Propriedade → UT → Parcela → Planta → Foto (5 níveis de FK)",
  "Cascading UUID remapping across related tables: Propriedade → UT → Parcela → Planta → Foto (5 FK levels)"),
      b("Exportação XLSX/PDF com filtragem por usuário e data", "XLSX/PDF export with user and date filtering"),
      b("Modo alto contraste para uso em campo com sol direto", "High contrast mode for field use in direct sunlight"),
      b("Painel admin React com auth, fotos, relatórios e exportação", "React admin panel with auth, photos, reports, and export"),
    ],
    keyFeatures: [
      b("5-tier hierarchy: Propriedade > UT > Parcela > Planta > Foto — cascading UUID remapping", "5-tier hierarchy: Propriedade > UT > Parcela > Planta > Foto — cascading UUID remapping"),
      b("Sync: backoff exponencial (2s, 4s, 8s), auth retry wrapper, ngrok bypass",
  "Sync: exponential backoff (2s, 4s, 8s), auth retry wrapper, ngrok bypass"),
      b("Design system 'Deep Forest Industrial' (332 LOC)", "'Deep Forest Industrial' design system (332 LOC)"),
      b("Backup/restore SQLite com padrão pending-restore-on-next-boot", "SQLite backup/restore with pending-restore-on-next-boot pattern"),
      b("Species lookup com busca accent-normalized a partir de XLSX", "Species lookup with accent-normalized search from XLSX"),
      b("Deploy scripts para Windows (PowerShell + BAT)", "Windows deployment scripts (PowerShell + BAT)"),
    ],
    codeSnippets: [
      {
        language: "dart",
        title: b("Serviço de Sincronização — Sync Service", "Sync Service — Core Loop"),
        code: `class SyncEngine {
  final PocketBaseClient _pb;
  final DriftDatabase _db;

  Future<SyncResult> synchronize() async {
    final localChanges = await _db.getPendingChanges();
    final result = SyncResult();

    for (final change in localChanges) {
      try {
        final remote = await _pb.upsert(
          change.collection,
          change.toRecord(),
        );
        await _db.applyRemoteId(
          localUuid: change.uuid,
          remoteId: remote.id,
        );
        result.migrated++;
      } on ConflictException {
        await _resolveConflict(change);
        result.conflicts++;
      }
    }
    return result;
  }
}`,
      },
      {
        language: "dart",
        title: b("UUID Remapping — Cliente ↔ Servidor", "UUID Remapping — Client ↔ Server"),
        code: `Future<void> applyRemoteId({
  required String localUuid,
  required String remoteId,
}) async {
  await batch((b) {
    b.update(propriedade)
      ..where((t) => t.uuid.equals(localUuid))
      ..write(PropriedadeCompanion.serverId(remoteId));
        // Cascading remap through related tables:
    // Propriedade → UT → Parcela → Planta → Foto
    for (final table in _fkChain) {
      b.update(table)
        ..where((t) => t.parentUuid.equals(localUuid))
        ..write(table.serverId(remoteId));
    }
  });
}`,
      },
    ],
gallery: [
  { src: "/images/projects/flora/screenshot-1.png", alt: b("Tela inicial do app", "App home screen") },
  { src: "/images/projects/flora/screenshot-2.png", alt: b("Inventário florestal em campo", "Forest inventory in the field") },
  { src: "/images/projects/flora/reference-design.png", alt: b("Design de referência", "Reference design") },
],
  },
  "fennec-excel": {
    challenge: b(
      "Usuários de Excel precisam ir além de filtro e ordenação — 'quais vendedores ficaram abaixo da meta no trimestre?' exige multi-col filter + formatação condicional que usuários não sabem construir. Copilot requer nuvem e assinatura; Fennec roda IA local (Ollama) com zero custo de API e zero dado na nuvem.",
      "Excel users need to go beyond filter and sort — 'which sales reps missed Q3 targets?' requires multi-column filter + conditional formatting that users can't build. Copilot requires cloud and subscription; Fennec runs local AI (Ollama) with zero API cost and zero cloud data."
    ),
    approach: b(
      "App desktop Python com CustomTkinter e agente Ollama/qwen2.5. Loop ReAct: o modelo planeja a operação, o usuário confirma, xlwings/COM executa no Excel vivo. Checkpoint automático antes de cada alteração — rollback em 1 clique se o resultado não for o esperado. Integrações OAuth para workflows que conectam planilha a e-mail/calendário (ex: enviar relatório filtrado por e-mail).",
      "Python desktop app with CustomTkinter and Ollama/qwen2.5 agent. ReAct loop: the model plans the operation, the user confirms, xlwings/COM executes on live Excel. Auto-checkpoint before each change — 1-click rollback if the result isn't as expected. OAuth integrations for workflows that connect spreadsheets to email/calendar (e.g., send filtered report by email)."
    ),
    results: [
      b("IA local via Ollama — zero custo de API, zero dado enviado à nuvem, funciona offline", "Local AI via Ollama — zero API cost, zero data sent to cloud, works offline"),
      b("Operações complexas via linguagem natural: 'destaque em vermelho as linhas onde vendas < meta' → filter + conditional formatting automático", "Complex operations via natural language: 'highlight red rows where sales < target' → automatic filter + conditional formatting"),
      b("Checkpoint antes de cada modificação — rollback instantâneo se resultado não é o esperado", "Checkpoint before each modification — instant rollback if result isn't as expected"),
      b("OAuth integrado ao workflow: filtrar dados → enviar relatório por Gmail/Outlook sem sair do app", "OAuth integrated into workflow: filter data → send report via Gmail/Outlook without leaving the app"),
      b("Instalador nativo Windows (Inno Setup) com PyInstaller — um clique para instalar", "Native Windows installer (Inno Setup) with PyInstaller — one click to install"),
    ],
    keyFeatures: [
      b("IA local via Ollama (qwen2.5) — sem API, sem nuvem, sem custo por uso", "Local AI via Ollama (qwen2.5) — no API, no cloud, no per-use cost"),
      b("xlwings / COM: manipula Excel ativo (não gera arquivo novo) — o que o usuário vê é o que o agente modificou", "xlwings / COM: manipulates live Excel (not generating new file) — what the user sees is what the agent changed"),
      b("Interface bilíngue (PT/EN) com tema claro customizado e mascote Fennec", "Bilingual interface (PT/EN) with custom light theme and Fennec mascot"),
      b("Integrações OAuth: Gmail, Outlook, Calendar, Drive, Teams — conectados ao workflow de planilha", "OAuth integrations: Gmail, Outlook, Calendar, Drive, Teams — connected to spreadsheet workflow"),
    ],
    codeSnippets: [
      {
        language: "python",
        title: b("Agente ReAct — Ciclo de Raciocínio", "ReAct Agent — Reasoning Loop"),
        code: `class FennecAgent:
    def __init__(self, model: str = "qwen2.5"):
        self.client = OllamaClient(model)
        self.tools = ExcelToolkit()

    async def run(self, prompt: str, wb: Workbook) -> str:
        messages = [self._system_prompt(wb)]
        for step in range(MAX_STEPS):
            thought = await self.client.chat(messages)
            action = self._parse_action(thought)

            if action.is_final:
                return action.response

            checkpoint = wb.save_checkpoint()
            confirmed = ask_user(f"Executar: {action}?")
            if not confirmed:
                wb.restore(checkpoint)
                continue

            result = await self.tools.execute(action, wb)
            messages.append({"role": "tool", "content": result})`,
      },
      {
        language: "python",
        title: b("OAuth Integration — Gmail/Calendar/Drive", "OAuth Integration — Gmail/Calendar/Drive"),
        code: `class OAuthManager:
    PROVIDERS = {
        "gmail": GmailProvider,
        "calendar": GoogleCalendarProvider,
        "drive": GoogleDriveProvider,
        "teams": TeamsProvider,
        "outlook": OutlookProvider,
        "trello": TrelloProvider,
    }

    def authenticate(self, provider: str) -> Token:
        handler = self.PROVIDERS[provider]()
        token = handler.authorize(
            scopes=handler.default_scopes,
            port=self._free_port(),
        )
        self.vault.store(provider, token)
        return token`,
      },
    ],
    gallery: [
      { src: "/images/projects/fennec-mascot.png", alt: b("Mascote Fennec — UI do app", "Fennec mascot — App UI") },
      { src: "/images/projects/fennec-desert.png", alt: b("Background desértico customizado", "Custom desert background") },
    ],
  },
  forestai: {
    challenge: b(
      "Inventários florestais por drone geram milhares de imagens — identificar espécies manualmente leva semanas e é suscetível a erro. Ferramentas comerciais de detecção são caixas-pretas sem controle sobre thresholds, splits ou arquitetura. Precisava de um pipeline aberto onde cada decisão (dataset split, augmentation, threshold de confiança) fosse explicitamente configurável e auditável.",
      "Drone-based forest inventories generate thousands of images — identifying species manually takes weeks and is error-prone. Commercial detection tools are black boxes with no control over thresholds, splits, or architecture. I needed an open pipeline where every decision (dataset split, augmentation, confidence threshold) was explicitly configurable and auditable."
    ),
    approach: b(
"Pipeline de detecção e classificação com DeepForest, treinado em GPU local. Anotação manual de imagens de drone da Fundação Renova (bounding boxes) — sem auto-labeling. Splits estratificados por espécie e área para evitar vazamento de dados. Monitoramento via TensorBoard: curvas de loss, mAP, e análise explícita de memorização vs generalização. Stack Overflow + Thonny IDE — zero IA-assisted coding.",
  "Detection and classification pipeline with DeepForest, trained on local GPU. Manual annotation of drone images from Fundação Renova (bounding boxes) — no auto-labeling. Stratified splits by species and area to prevent data leakage. Monitoring via TensorBoard: loss curves, mAP, and explicit analysis of memorization vs generalization. Stack Overflow + Thonny IDE — zero AI-assisted coding."
    ),
    results: [
b("Pipeline de detecção de espécies com DeepForest treinado em GPU local", "Species detection pipeline with DeepForest trained on local GPU"),
b("Anotação manual de imagens de drone — bounding boxes desenhados à mão", "Manual annotation of drone imagery — hand-drawn bounding boxes"),
      b("Splits estratificados por espécie e área — sem vazamento de dados entre treino/validação", "Stratified splits by species and area — no data leakage between train/validation"),
      b("Interpretação de curvas TensorBoard — detecção de memorização vs generalização", "TensorBoard curve interpretation — detecting memorization vs generalization"),
      b("Construído do zero sem IA-assisted coding — Stack Overflow + Thonny IDE apenas", "Built from scratch without AI-assisted coding — Stack Overflow + Thonny IDE only"),
    ],
    keyFeatures: [
b("DeepForest para detecção de copas com fine-tuning em dataset de drone", "DeepForest for crown detection with fine-tuning on drone dataset"),
b("Classificação de espécies com augmentations geográficos", "Species classification with geographic augmentations"),
      b("TensorBoard monitoring: loss, mAP, grad-cam por época", "TensorBoard monitoring: loss, mAP, grad-cam per epoch"),
      b("Stratified split por espécie + área geográfica — generalização real", "Stratified split by species + geographic area — real generalization"),
    ],
    codeSnippets: [
      {
        language: "python",
        title: b("DeepForest — Fine-Tuning em Dataset de Drone", "DeepForest — Fine-Tuning on Drone Dataset"),
        code: `from deepforest import main
from deepforest.utilities import read_file

model = main.deepforest()
model.use_release()

annotations = read_file("renova_annotations.csv")
train, val = stratified_split(
    annotations,
    group_by=["species", "area"],
    ratios=[0.7, 0.3],
)

model.config["train"]["fast_dev_run"] = False
model.config["train"]["epochs"] = 50
model.config["train"]["lr"] = 1e-4

model.trainer.fit(
    model,
    train_dataloaders=train,
    val_dataloaders=val,
)`,
      },
      {
        language: "python",
        title: b("Split Estratificado — Sem Vazamento", "Stratified Split — No Leakage"),
        code: `def stratified_split(df, group_by, ratios):
    groups = df.groupby(group_by).size()
    train, val = [], []
    for name, count in groups.items():
        subset = df[df[group_by] == name]
        n_train = max(1, int(count * ratios[0]))
        train.append(subset.iloc[:n_train])
        val.append(subset.iloc[n_train:])
    return pd.concat(train), pd.concat(val)`,
      },
    ],
  },
  inovesa: {
    challenge: b(
      "Empresas florestais no Brasil têm problema de credibilidade visual — sites parecem de 2005. A Inovesa queria sinalizar engenharia premium através de design premium: motion cinematográfico, scroll suave, e uma ouvidoria que transmita seriedade. O desafio era entregar isso com bundle enxuto — Motion + Lenis + React 19 pesa se não for controlado.",
      "Forestry companies in Brazil have a visual credibility problem — their websites look like 2005. Inovesa wanted to signal premium engineering through premium design: cinematic motion, smooth scroll, and an ombudsman that conveys seriousness. The challenge was delivering this with a lean bundle — Motion + Lenis + React 19 gets heavy if not controlled."
    ),
    approach: b(
      "React 19 + Motion + Lenis com motion system centralizado (7 variantes, 3 springs, 2 easings — todos reutilizáveis). Lenis para scroll suave sincronizado com useScroll do Motion. Tailwind v4 CSS-first com @theme customizado. Cada animação respeita prefers-reduced-motion — motion é refinamento, não barreira.",
      "React 19 + Motion + Lenis with centralized motion system (7 variants, 3 springs, 2 easings — all reusable). Lenis for smooth scroll synced with Motion's useScroll. Tailwind v4 CSS-first with custom @theme. Every animation respects prefers-reduced-motion — motion is enhancement, not barrier."
    ),
    results: [
      b("6 páginas com dados reais da empresa: serviços, equipe, ouvidoria, galeria, sobre, contato", "6 pages with real company data: services, team, ombudsman, gallery, about, contact"),
      b("Sistema de motion reutilizável (7 variantes + 3 springs + 2 easings) — consistência visual sem código duplicado", "Reusable motion system (7 variants + 3 springs + 2 easings) — visual consistency without duplicated code"),
      b("Ouvidoria com wizard multi-step, validação por etapa e submit animado — formulário que transmite seriedade", "Ombudsman with multi-step wizard, per-step validation and animated submit — a form that conveys seriousness"),
      b("prefers-reduced-motion: todas as animações respeitam a preferência do sistema — zero motion para quem precisa", "prefers-reduced-motion: all animations respect system preference — zero motion for those who need it"),
      b("Custom cursor com spring physics e mix-blend-difference — detalhe que sinaliza atenção craft", "Custom cursor with spring physics and mix-blend-difference — a detail that signals craft attention"),
    ],
    keyFeatures: [
      b("Parallax multi-camada com useScroll por seção", "Multi-layer parallax with per-section useScroll"),
      b("AnimatedText: reveal por palavras/linhas/caracteres com highlight", "AnimatedText: word/line/char reveal with highlight"),
      b("PageOverlay + AnimatePresence para transições de página", "PageOverlay + AnimatePresence for page transitions"),
      b("Tailwind v4 CSS-first com @theme customizado", "Tailwind v4 CSS-first with custom @theme"),
      b("prefers-reduced-motion: redução automática de motion para acessibilidade", "prefers-reduced-motion: automatic motion reduction for accessibility"),
    ],
    codeSnippets: [
      {
        language: "tsx",
        title: b("Sistema de Motion — Springs & Variantes", "Motion System — Springs & Variants"),
        code: `export const springs = {
  gentle: { type: "spring", stiffness: 120, damping: 14 },
  snappy: { type: "spring", stiffness: 300, damping: 25 },
  heavy: { type: "spring", stiffness: 60, damping: 10 },
} as const;

export const variants = {
  fadeUp: (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: {
      ...springs.gentle, delay
    }},
  }),
  stagger: (stagger = 0.08) => ({
    animate: { transition: {
      staggerChildren: stagger,
    }},
  }),
  parallax: (range: [number, number]) => ({
    y: useScrollTransform(range, [0, -60]),
  }),
} as const;`,
      },
      {
        language: "tsx",
        title: b("AnimatedText — Reveal por Palavras", "AnimatedText — Word Reveal"),
        code: `function AnimatedText({ text, mode = "words" }) {
  const words = text.split(mode === "chars" ? "" : " ");
  return (
    <motion.span variants={variants.stagger()}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block overflow-hidden"
          variants={{
            initial: { y: "100%" },
            animate: { y: 0, transition: springs.snappy },
          }}
        >
          {w}{mode !== "chars" && "\\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}`,
      },
    ],
  },
  capivara: {
    challenge: b(
      "Ferramentas online de PDF (iLovePDF, Smallpdf) são freemium agressivo — limite de arquivos, marca d'água, fila de espera. Hospedar um backend PDF requer crédito para cloud. O desafio: construir uma suíte completa de 15 ferramentas PDF com backend Python pesado (PyMuPDF, pytesseract, pikepdf) sem gastar nada com infra.",
      "Online PDF tools (iLovePDF, Smallpdf) are aggressively freemium — file limits, watermarks, wait queues. Hosting a PDF backend requires cloud credit. The challenge: build a complete 15-tool PDF suite with a heavy Python backend (PyMuPDF, pytesseract, pikepdf) without spending anything on infra."
    ),
    approach: b(
      "Frontend React 19 com hash routing (useSyncExternalStore) — grid de ferramentas por categoria + workspace individual por ferramenta. Backend FastAPI monolítico com lazy imports para deps pesadas (só carrega PyMuPDF quando alguém chama PDF→DOCX). StreamingResponse em tudo (zero temp files). Cloudflared para túnel serverless gratuito via Google Colab — zero conta, zero token, instante.",
      "React 19 frontend with hash routing (useSyncExternalStore) — category-grouped tool grid + individual workspace per tool. Monolithic FastAPI backend with lazy imports for heavy deps (only loads PyMuPDF when someone calls PDF→DOCX). StreamingResponse everywhere (zero temp files). Cloudflared for free serverless tunneling via Google Colab — zero account, zero token, instant."
    ),
    results: [
      b("15 ferramentas PDF: converter, comprimir, mesclar, dividir, rotacionar, marca d'água, numeração, cabeçalho/rodapé, proteção, desbloqueio, OCR, PDF→DOCX, PDF→imagens, PDF/A", "15 PDF tools: convert, compress, merge, split, rotate, watermark, page numbers, header/footer, protect, unlock, OCR, PDF→DOCX, PDF→images, PDF/A"),
      b("Backend zero custo — cloudflared + Google Colab (zero conta, zero token)", "Zero-cost backend — cloudflared + Google Colab (zero account, zero token)"),
      b("StreamingResponse em todos os endpoints — zero temp files, tudo in-memory", "StreamingResponse on all endpoints — zero temp files, all in-memory"),
      b("pypdf 4+ compat — PdfWriter-based merge (PdfMerger removido)", "pypdf 4+ compat — PdfWriter-based merge (PdfMerger removed)"),
      b("Lazy imports: PyMuPDF, pytesseract, pikepdf só carregam quando chamados", "Lazy imports: PyMuPDF, pytesseract, pikepdf only load when called"),
    ],
    keyFeatures: [
      b("Hash routing com useSyncExternalStore — sem react-router", "Hash routing with useSyncExternalStore — no react-router"),
      b("Static switch WorkspaceSlot — satisfaz ESLint react-hooks/static-components", "Static switch WorkspaceSlot — satisfies ESLint react-hooks/static-components"),
      b("StreamingResponse + BytesIO — zero FileResponse, zero disco", "StreamingResponse + BytesIO — zero FileResponse, zero disk"),
      b("reportlab + pypdf overlay pattern para watermark, page numbers, header/footer", "reportlab + pypdf overlay pattern for watermark, page numbers, header/footer"),
      b("Colab notebook 3 células: install deps, %%writefile, cloudflared+uvicorn", "Colab notebook 3 cells: install deps, %%writefile, cloudflared+uvicorn"),
    ],
    codeSnippets: [
      {
        language: "python",
        title: b("StreamingResponse — Merge PDF", "StreamingResponse — Merge PDF"),
        code: `def merge_pdfs(pdf_bytes_list: list[bytes]) -> bytes:
    writer = PdfWriter()
    for pdf_bytes in pdf_bytes_list:
        reader = PdfReader(io.BytesIO(pdf_bytes))
        for page in reader.pages:
            writer.add_page(page)
    buf = io.BytesIO()
    writer.write(buf)
    buf.seek(0)
    return buf.getvalue()

@app.post("/api/merge")
async def api_merge(files: list[UploadFile] = File(...)):
    pdf_bytes_list = [await f.read() for f in files]
    result = merge_pdfs(pdf_bytes_list)
    return StreamingResponse(
        io.BytesIO(result), media_type="application/pdf"
    )`,
      },
      {
        language: "python",
        title: b("Lazy Import — PyMuPDF para PDF→DOCX", "Lazy Import — PyMuPDF for PDF→DOCX"),
        code: `def pdf_to_docx(pdf_bytes: bytes) -> bytes:
    import fitz  # PyMuPDF — only loaded on demand

    doc = fitz.open(stream=pdf_bytes, filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    doc.close()

    from docx import Document as DocxDocument
    docx_doc = DocxDocument()
    for para_text in text.split("\\n"):
        if para_text.strip():
            docx_doc.add_paragraph(para_text)

    buf = io.BytesIO()
    docx_doc.save(buf)
    buf.seek(0)
    return buf.getvalue()`,
      },
    ],
  },
  tarsier: {
    challenge: b(
      "Editores JSON online dependem de backend para validação e transformação. Ferramentas desktop são pesadas. O desafio: construir um workbench JSON que funciona 100% no browser — parse, análise de estrutura, transformações úteis e geração de tipos — sem nenhum backend.",
      "Online JSON editors depend on backends for validation and transformation. Desktop tools are heavy. The challenge: build a JSON workbench that works 100% in the browser — parse, structure analysis, useful transformations and type generation — without any backend."
    ),
    approach: b(
      "React 19 com textarea para input JSON cru, parser que constrói estrutura em árvore e componente recursivo TreeView para navegação colapsável. Engine de transformação client-side em TypeScript: pretty-print, minify, exportação CSV e inferência de tipos TypeScript a partir de dados reais. Tailwind v4 com paleta emerald/teal e Framer Motion para animações.",
      "React 19 with textarea for raw JSON input, parser that builds tree structure and recursive TreeView component for collapsible navigation. Client-side transform engine in TypeScript: pretty-print, minify, CSV export and TypeScript type inference from real data. Tailwind v4 with emerald/teal palette and Framer Motion for animations."
    ),
    results: [
      b("100% client-side — zero backend, zero latency de rede, funciona offline", "100% client-side — zero backend, zero network latency, works offline"),
      b("Árvore colapsável — navegação visual da estrutura JSON com expand/colapse por nó", "Collapsible tree — visual JSON structure navigation with per-node expand/collapse"),
      b("Transformações — pretty-print, minify, exportação CSV e geração de tipos TypeScript", "Transformations — pretty-print, minify, CSV export and TypeScript type generation"),
      b("Stats em tempo real — contagem de keys, profundidade máxima e tamanho em bytes", "Real-time stats — key count, max depth and byte size"),
    ],
    keyFeatures: [
      b("Parser JSON robusto — detecta erros de sintaxe com linha e coluna", "Robust JSON parser — detects syntax errors with line and column"),
      b("Árvore colapsável recursiva — navegação visual de objetos e arrays aninhados", "Recursive collapsible tree — visual navigation of nested objects and arrays"),
      b("Inferência de tipos TypeScript — gera interfaces a partir de dados JSON reais", "TypeScript type inference — generates interfaces from real JSON data"),
      b("Exportação CSV — converte arrays de objetos para CSV com headers automáticos", "CSV export — converts object arrays to CSV with automatic headers"),
    ],
  },
  kakapo: {
    challenge: b(
      "Editores de imagem online (Canva, Pixlr) são pesados e exigem upload. Ferramentas de desktop são overkill para ajustes rápidos. O desafio: editor de imagens completo que roda 100% no browser — compressão, resize, crop, filtros — sem enviar nada para nenhum servidor.",
      "Online image editors (Canva, Pixlr) are heavy and require uploads. Desktop tools are overkill for quick adjustments. The challenge: complete image editor that runs 100% in the browser — compress, resize, crop, filters — without sending anything to any server."
    ),
    approach: b(
      "React 19 com Canvas API nativa para processamento de imagens. Motor de edição commit-based — cada operação gera um snapshot, undo/redo navega pelo histórico. Nenhum dado sai do browser: compressão, filtros e ajustes rodam via Canvas 2D context. Tailwind v4 com paleta warm amber/coral.",
      "React 19 with native Canvas API for image processing. Commit-based editing engine — each operation generates a snapshot, undo/redo navigates history. No data leaves the browser: compression, filters and adjustments run via Canvas 2D context. Tailwind v4 with warm amber/coral palette."
    ),
    results: [
      b("100% client-side — zero upload, zero servidor, funciona offline", "100% client-side — zero upload, zero server, works offline"),
      b("Compressão com controle de qualidade e preview de tamanho em tempo real", "Compression with quality control and real-time size preview"),
      b("Resize, crop, rotação, flip — operações básicas com undo/redo", "Resize, crop, rotation, flip — basic operations with undo/redo"),
      b("Filtros: brightness, contrast, saturation, grayscale, sepia, blur — via Canvas API", "Filters: brightness, contrast, saturation, grayscale, sepia, blur — via Canvas API"),
      b("Paleta amber/coral com tipografia editorial Playfair + Inter", "Amber/coral palette with editorial typography Playfair + Inter"),
    ],
    keyFeatures: [
      b("Canvas API — processamento nativo, zero WebGL, zero WASM", "Canvas API — native processing, zero WebGL, zero WASM"),
      b("Commit-based engine — undo/redo com histórico de snapshots", "Commit-based engine — undo/redo with snapshot history"),
      b("Drag-drop upload + paste from clipboard", "Drag-drop upload + paste from clipboard"),
      b("Download em PNG, JPEG ou WebP com controle de qualidade", "Download as PNG, JPEG or WebP with quality control"),
    ],
  },
  oilbird: {
    challenge: b(
      "Conversores Markdown→PDF online inserem marca d'água ou limitam páginas. Ferramentas desktop (Pandoc) exigem instalação. O desafio: conversor com preview em tempo real, temas profissionais e renderização PDF de qualidade — sem custo de infra.",
      "Online Markdown→PDF converters insert watermarks or limit pages. Desktop tools (Pandoc) require installation. The challenge: converter with real-time preview, professional themes and quality PDF rendering — without infra cost."
    ),
    approach: b(
      "Frontend React 19 com editor Markdown em textarea e preview live split-pane via conversão client-side. Backend FastAPI + WeasyPrint para renderização PDF com CSS Paged Media — suporte a @page, @bottom-center, string-set, page breaks e fontes DejaVu. Cloudflared para túnel serverless gratuito via Google Colab. Paleta ink/ivory com acentos dourados.",
      "React 19 frontend with textarea Markdown editor and live split-pane preview via client-side conversion. FastAPI + WeasyPrint backend for PDF rendering with CSS Paged Media — @page, @bottom-center, string-set, page breaks and DejaVu fonts. Cloudflared for free serverless tunneling via Google Colab. Ink/ivory palette with golden accents."
    ),
    results: [
      b("Preview em tempo real — Markdown editado aparece renderizado instantaneamente", "Real-time preview — edited Markdown appears rendered instantly"),
      b("WeasyPrint para PDF profissional — CSS Paged Media, page breaks, headers/footers", "WeasyPrint for professional PDF — CSS Paged Media, page breaks, headers/footers"),
      b("Túnel serverless gratuito — cloudflared + Google Colab", "Free serverless tunnel — cloudflared + Google Colab"),
      b("CSS Paged Media — @page, @bottom-center com número de página e título", "CSS Paged Media — @page, @bottom-center with page number and title"),
      b("Template profissional único — tipografia DejaVu Sans, layout ink/ivory", "Single professional template — DejaVu Sans typography, ink/ivory layout"),
    ],
    keyFeatures: [
      b("WeasyPrint: CSS Paged Media com @page, @bottom-center, string-set", "WeasyPrint: CSS Paged Media with @page, @bottom-center, string-set"),
      b("Live preview split-pane — textarea Markdown left, HTML rendered right", "Live preview split-pane — Markdown textarea left, rendered HTML right"),
      b("Template profissional único — DejaVu Serif/Sans com layout editorial ink/ivory", "Single professional template — DejaVu Serif/Sans with editorial ink/ivory layout"),
      b("Cloudflared tunnel — zero account, zero token, instant public URL", "Cloudflared tunnel — zero account, zero token, instant public URL"),
    ],
  },
  cegonha: {
    challenge: b(
      "Geradores de currículo online (Canva, Novoresume) inserem marca d'água ou limitam seções. Templates Word são inconsistentes entre versões. O desafio: gerador com formulários estruturados, múltiplos estilos de template e exportação PDF limpa — sem watermark, sem limite.",
      "Online resume generators (Canva, Novoresume) insert watermarks or limit sections. Word templates are inconsistent across versions. The challenge: generator with structured forms, multiple template styles and clean PDF export — no watermark, no limits."
    ),
    approach: b(
      "React 19 com formulários estruturados para cada seção do currículo (dados pessoais, experiência, projetos, educação, skills). Backend FastAPI + reportlab para geração de PDF com 3 estilos de template (modern, classic, minimal). Paleta sage green — cada template é uma composição tipográfica, não um formulário genérico. Suporte bilíngue (pt/en).",
      "React 19 with structured forms for each resume section (personal data, experience, projects, education, skills). FastAPI + reportlab backend for PDF generation with 3 template styles (modern, classic, minimal). Sage green palette — each template is a typographic composition, not a generic form. Bilingual support (pt/en)."
    ),
    results: [
      b("3 templates — modern, classic, minimal — cada um com composição tipográfica distinta", "3 templates — modern, classic, minimal — each with distinct typographic composition"),
      b("Exportação PDF server-side — FastAPI + reportlab, sem marca d'água, sem limites", "Server-side PDF export — FastAPI + reportlab, no watermark, no limits"),
      b("Formulários estruturados — seções fixas cobrindo dados pessoais, experiência, projetos, educação e skills", "Structured forms — fixed sections covering personal data, experience, projects, education and skills"),
      b("Suporte bilíngue — interface e templates em português e inglês", "Bilingual support — interface and templates in Portuguese and English"),
    ],
    keyFeatures: [
      b("3 estilos de template — modern, classic, minimal com design editorial", "3 template styles — modern, classic, minimal with editorial design"),
      b("PDF via reportlab — canvas programático, tipografia DejaVu Sans, sem marca d'água", "PDF via reportlab — programmatic canvas, DejaVu Sans typography, no watermark"),
      b("Formulários estruturados — 13 campos cobrindo todas as seções de um currículo completo", "Structured forms — 13 fields covering all sections of a complete resume"),
      b("Sage green palette com editorial dividers e suporte bilíngue", "Sage green palette with editorial dividers and bilingual support"),
    ],
  },
};

export type SecurityDisclosure = {
  id: string;
  slug: string;
  title: string;
  organization: Bilingual;
  vulnType: string;
  CWE: string;
  status: "fixed" | "open" | "uncertain";
  discoveryDate: string;
  verifiedDate: string;
  description: Bilingual;
  category: "gov" | "platform" | "cve";
  severity: "critical" | "high" | "medium";
  hasCaseStudy: boolean;
  lgpdArticles: string[];
};

export type SecurityCaseStudy = {
  challenge: Bilingual;
  approach: Bilingual;
  timeline: Bilingual[];
  impact: Bilingual[];
  keyFindings: Bilingual[];
  codeSnippets?: CodeSnippet[];
  gallery?: GalleryImage[];
};

export const securityDisclosures: SecurityDisclosure[] = [
  {
    id: "fnas-mds-siafi",
    slug: "fnas-mds-siafi",
    title: "FNAS/MDS SIAFI Financial Data",
    organization: b("Ministério do Desenvolvimento Social", "Ministry of Social Development"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "fixed",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Directory listing expôs dados financeiros SIAFI na infraestrutura FNAS/MDS. WAF agora bloqueia acesso.",
      "Directory listing exposed SIAFI financial data on FNAS/MDS infrastructure. WAF now blocks access."
    ),
    category: "gov",
    severity: "critical",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 48"],
  },
  {
    id: "ibiracu-es",
    slug: "ibiracu-es",
    title: "Ibiraçu/ES Municipal Portal",
    organization: b("Prefeitura de Ibiraçu", "Ibiraçu City Hall"),
    vulnType: "DOM-XSS + Directory Listing",
    CWE: "CWE-79 + CWE-548",
    status: "fixed",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "DOM-XSS e directory listing no portal municipal. Ouvidoria confirmou correção.",
      "DOM-XSS and directory listing on municipal portal. Ombudsman confirmed fix."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 46"],
  },
  {
    id: "crmv-rs",
    slug: "crmv-rs",
    title: "CRMV-RS Payroll/Ethics Docs",
    organization: b("Conselho Regional de Medicina Veterinária RS", "Regional Council of Veterinary Medicine RS"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "fixed",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Listing expôs folhas de pagamento e documentos éticos. Corrigido com 403 Forbidden.",
      "Listing exposed payroll and ethics documents. Fixed with 403 Forbidden."
    ),
    category: "gov",
    severity: "medium",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 6 III"],
  },
  {
    id: "cau-sc",
    slug: "cau-sc",
    title: "CAU/SC Payroll/Curricula",
    organization: b("Conselho de Arquitetura SC", "Architecture Council SC"),
    vulnType: "Directory Listing + Vulnerable Plugin",
    CWE: "CWE-548",
    status: "fixed",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Listing expôs folhas e currículos com plugin vulnerável. Corrigido com 403 Forbidden.",
      "Listing exposed payroll and curricula with vulnerable plugin. Fixed with 403 Forbidden."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 6 III"],
  },
  {
    id: "metajobs-base44",
    slug: "metajobs-base44",
    title: "metajobs.base44.app Candidate PII",
    organization: b("Base44 Platform", "Base44 Platform"),
    vulnType: "Missing Authentication",
    CWE: "CWE-306",
    status: "fixed",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "PII de candidatos (nomes, e-mails, telefones, currículos) acessível sem autenticação. Corrigido com 403.",
      "Candidate PII (names, emails, phones, resumes) accessible without auth. Fixed with 403."
    ),
    category: "platform",
    severity: "critical",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 48"],
  },
  {
    id: "gestorcontratospro-base44",
    slug: "gestorcontratospro-base44",
    title: "gestorcontratospro.base44.app",
    organization: b("Base44 Platform", "Base44 Platform"),
    vulnType: "Missing Authentication",
    CWE: "CWE-306",
    status: "fixed",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Dados de contratos e PII acessíveis sem autenticação. Corrigido — auth agora requerida.",
      "Contract data and PII accessible without auth. Fixed — auth now required."
    ),
    category: "platform",
    severity: "high",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 48"],
  },
  {
    id: "gestorcontratospro-school",
    slug: "gestorcontratospro-school",
    title: "gestorcontratospro School Contracts",
    organization: b("Base44 Platform", "Base44 Platform"),
    vulnType: "School Contract Data Exposure",
    CWE: "CWE-306",
    status: "fixed",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Dados de contratos escolares (valores, escopo, duração) expostos sem autenticação. Corrigido.",
      "School contract data (values, scope, duration) exposed without auth. Fixed."
    ),
    category: "platform",
    severity: "high",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 48"],
  },
  {
    id: "mogi-guacu-backup",
    slug: "mogi-guacu-backup",
    title: "Mogi Guaçu/SP Backup Dump",
    organization: b("Prefeitura de Mogi Guaçu", "Mogi Guaçu City Hall"),
    vulnType: "Backup Exposure",
    CWE: "CWE-538",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Dump de backup SQL + VPN tar exposto publicamente. Ainda sem correção.",
      "SQL backup dump + VPN tar exposed publicly. Still open."
    ),
    category: "gov",
    severity: "critical",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 6 III", "Art. 143"],
  },
  {
    id: "cau-se",
    slug: "cau-se",
    title: "CAU/SE Payroll with CPFs",
    organization: b("Conselho de Arquitetura SE", "Architecture Council SE"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Folhas de pagamento com CPFs expostas via directory listing. Ainda sem correção.",
      "Payroll with CPFs exposed via directory listing. Still open."
    ),
    category: "gov",
    severity: "critical",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 6 III"],
  },
  {
    id: "economia-painel",
    slug: "economia-painel",
    title: "Ministério da Economia Painel",
    organization: b("Ministério da Economia", "Ministry of Economy"),
    vulnType: "Directory Listing + Apache EOL",
    CWE: "CWE-548 + CWE-1104",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Directory listing em servidor Apache end-of-life. Infraestrutura federal criticamente desatualizada.",
      "Directory listing on end-of-life Apache server. Critically outdated federal infrastructure."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 46 §1º", "Art. 48"],
  },
  {
    id: "valiprev",
    slug: "valiprev",
    title: "VALIPREV Benefit Processes",
    organization: b("Instituto de Previdência Valinhos", "Valinhos Social Security Institute"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Processos de benefícios previdenciários expostos. Ainda sem correção.",
      "Social security benefit processes exposed. Still open."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 6 III"],
  },
  {
    id: "educbarueri",
    slug: "educbarueri",
    title: "educbarueri FUNDEB Docs",
    organization: b("Barueri/SP", "Barueri/SP"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Documentos FUNDEB expostos via directory listing. Ainda sem correção.",
      "FUNDEB documents exposed via directory listing. Still open."
    ),
    category: "gov",
    severity: "medium",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 5", "Art. 6 III"],
  },
  {
    id: "sisprev-brodowski",
    slug: "sisprev-brodowski",
    title: "SISPREV-Brodowski Payroll",
    organization: b("Brodowski/SP", "Brodowski/SP"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Folhas de pagamento com CPFs expostas via directory listing. Ainda sem correção.",
      "Payroll with CPFs exposed via directory listing. Still open."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 5", "Art. 6 III"],
  },
  {
    id: "aroeira",
    slug: "aroeira",
    title: "Aroeira User Data",
    organization: b("Prorural PE", "Prorural PE"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Dados de usuários expostos via directory listing. Ainda sem correção.",
      "User data exposed via directory listing. Still open."
    ),
    category: "gov",
    severity: "medium",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 5"],
  },
  {
    id: "campo-bom",
    slug: "campo-bom",
    title: "Campo Bom SAMU Schedules",
    organization: b("Campo Bom/RS", "Campo Bom/RS"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Escalas SAMU expostas via directory listing. Ainda sem correção.",
      "SAMU schedules exposed via directory listing. Still open."
    ),
    category: "gov",
    severity: "medium",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 5"],
  },
  {
    id: "esus-pec",
    slug: "esus-pec",
    title: "e-SUS PEC Health Records",
    organization: b("Mato Queimado/RS (177.10.85.168)", "Mato Queimado/RS (177.10.85.168)"),
    vulnType: "Missing Authentication",
    CWE: "CWE-306",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Registros de saúde do e-SUS PEC acessíveis sem autenticação. Ainda sem correção.",
      "e-SUS PEC health records accessible without authentication. Still open."
    ),
    category: "gov",
    severity: "critical",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5"],
  },
  {
    id: "snmp-mikrotik",
    slug: "snmp-mikrotik",
    title: "SNMP/MikroTik Network Topology",
    organization: b("Piauí (201.71.219.73)", "Piauí (201.71.219.73)"),
    vulnType: "Information Disclosure",
    CWE: "CWE-200",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Topologia de rede exposta via SNMP público em equipamentos MikroTik. Ainda sem correção.",
      "Network topology exposed via public SNMP on MikroTik equipment. Still open."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 6 III", "Art. 46"],
  },
  {
    id: "vivasus-ufba",
    slug: "vivasus-ufba",
    title: "VivaSUS/UFBA EOL nginx",
    organization: b("UFBA Salvador/BA (200.128.103.103)", "UFBA Salvador/BA (200.128.103.103)"),
    vulnType: "Known CVEs on EOL Software",
    CWE: "CWE-1104",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Servidor VivaSUS/UFBA rodando nginx end-of-life com CVEs conhecidos. Ainda sem correção.",
      "VivaSUS/UFBA server running end-of-life nginx with known CVEs. Still open."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 46 §1º"],
  },
  {
    id: "cpanel-jequitai",
    slug: "cpanel-jequitai",
    title: "cPanel/WHM Jequitaí/MG",
    organization: b("162.240.59.231", "162.240.59.231"),
    vulnType: "Admin Interface Exposed",
    CWE: "CWE-419",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Interface administrativa cPanel/WHM exposta publicamente. Ainda sem correção.",
      "cPanel/WHM admin interface exposed publicly. Still open."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 46"],
  },
  {
    id: "cpanel-araras",
    slug: "cpanel-araras",
    title: "cPanel/WHM Araras/SP",
    organization: b("187.9.42.28", "187.9.42.28"),
    vulnType: "Admin Interface Exposed",
    CWE: "CWE-419",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Interface administrativa cPanel/WHM exposta publicamente. Ainda sem correção.",
      "cPanel/WHM admin interface exposed publicly. Still open."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 46"],
  },
  {
    id: "araguainha-mt",
    slug: "araguainha-mt",
    title: "Araguainha/MT Municipal Portal",
    organization: b("Prefeitura de Araguainha", "Araguainha City Hall"),
    vulnType: "DOM-XSS + Directory Listing + WP Enum + Java Traces",
    CWE: "CWE-79 + CWE-548 + CWE-200",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Portal municipal com múltiplas vulnerabilidades: DOM-XSS, directory listing, enumeração WordPress e traces Java. Ainda sem correção.",
      "Municipal portal with multiple vulnerabilities: DOM-XSS, directory listing, WordPress enumeration, and Java traces. Still open."
    ),
    category: "gov",
    severity: "critical",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 46", "Art. 5"],
  },
  {
    id: "camara-mantena",
    slug: "camara-mantena",
    title: "Câmara de Mantena/MG Financial Docs",
    organization: b("Câmara Municipal", "City Council"),
    vulnType: "Financial Documents Exposed",
    CWE: "CWE-200",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Documentos financeiros da câmara municipal expostos. Ainda sem correção.",
      "Municipal council financial documents exposed. Still open."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 5", "Art. 6 III"],
  },
  {
    id: "pmpr",
    slug: "pmpr",
    title: "PMPR Police Agent Data",
    organization: b("Polícia Militar do Paraná", "Paraná Military Police"),
    vulnType: "Agent Names + Photos Exposed",
    CWE: "CWE-200",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Nomes e fotos de agentes da Polícia Militar do Paraná expostos. Risco à segurança física. Ainda sem correção.",
      "Names and photos of Paraná Military Police agents exposed. Physical safety risk. Still open."
    ),
    category: "gov",
    severity: "critical",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5"],
  },
  {
    id: "ruralvaliprev-fundeb",
    slug: "ruralvaliprev-fundeb",
    title: "Ruralvaliprev/FUNDEB Financial Docs",
    organization: b("Instituto de Previdência", "Social Security Institute"),
    vulnType: "Financial Docs + Beneficiary Data",
    CWE: "CWE-200",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Documentos financeiros e dados de beneficiários expostos. Ainda sem correção.",
      "Financial documents and beneficiary data exposed. Still open."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 5", "Art. 6 III"],
  },
  {
    id: "sisprev-integration",
    slug: "sisprev-integration",
    title: "SISPREV DB Integration Files",
    organization: b("—", "—"),
    vulnType: "DB Integration Files Exposed",
    CWE: "CWE-200",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Arquivos de integração de banco de dados do SISPREV expostos. Ainda sem correção.",
      "SISPREV database integration files exposed. Still open."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 6 III", "Art. 46"],
  },
  {
    id: "mentoriadom",
    slug: "mentoriadom",
    title: "mentoriadom Admin Panel",
    organization: b("Base44 Platform", "Base44 Platform"),
    vulnType: "SPA Admin Sitemap Visible",
    CWE: "CWE-548",
    status: "uncertain",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Rotas de painel admin visíveis. Status incerto.",
      "Admin panel routes visible. Uncertain status."
    ),
    category: "platform",
    severity: "medium",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 46"],
  },
  {
    id: "saf-sus",
    slug: "saf-sus",
    title: "SAF/SUS Unauth File Upload",
    organization: b("Ministério da Saúde", "Ministry of Health"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "uncertain",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Upload de arquivo sem autenticação no SAF/SUS. Status incerto (timeout na verificação).",
      "Unauthenticated file upload on SAF/SUS. Uncertain status (verification timeout)."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 6 III", "Art. 46"],
  },
  {
    id: "bairesdev",
    slug: "bairesdev",
    title: "BairesDev Credential Mix-up",
    organization: b("BairesDev (private sector)", "BairesDev (private sector)"),
    vulnType: "Credential Exposure",
    CWE: "CWE-798",
    status: "uncertain",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Exposição de credenciais. Resolvido internamente pela empresa.",
      "Credential exposure. Resolved internally by the company."
    ),
    category: "platform",
    severity: "high",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 6 III"],
  },
  {
    id: "base44-systemic",
    slug: "base44-systemic",
    title: "Base44 Platform: Systemic Auth Failure",
    organization: b("Base44 Platform", "Base44 Platform"),
    vulnType: "Systemic Authentication Bypass",
    CWE: "CWE-306",
    status: "fixed",
    discoveryDate: "2026",
    verifiedDate: "16/06/2026",
    description: b(
      "Análise cross-app revelou padrão sistêmico: páginas públicas por default, RLS bypassado sem auth context. 3 apps confirmados afetados.",
      "Cross-app analysis revealed systemic pattern: pages public by default, RLS bypassed without auth context. 3 confirmed affected apps."
    ),
    category: "platform",
    severity: "critical",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 48", "Art. 46"],
  },
  {
    id: "montesantodeminas-mg",
    slug: "montesantodeminas-mg",
    title: "Monte Santo de Minas/MG FUNDEB Council Data",
    organization: b("Prefeitura de Monte Santo de Minas", "Monte Santo de Minas City Hall"),
    vulnType: "Directory Listing",
    CWE: "CWE-548",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "25/06/2026",
    description: b(
      "Cartas de renúncia do Conselho FUNDEB com CPF expostas via directory listing no portal municipal. Reportado via CERT.br + CTIR Gov.",
      "FUNDEB Council resignation letters with CPF exposed via directory listing on municipal portal. Reported via CERT.br + CTIR Gov."
    ),
    category: "gov",
    severity: "medium",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 5", "Art. 11", "Art. 46"],
  },
  {
    id: "matinhos-pr",
    slug: "matinhos-pr",
    title: "Matinhos/PR Multi-System Exposure",
    organization: b("Prefeitura de Matinhos", "Matinhos City Hall"),
    vulnType: "Directory Listing + Health/Financial Data",
    CWE: "CWE-548",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "25/06/2026",
    description: b(
      "Múltiplos diretórios expostos com listas de espera SUS, dados financeiros municipais, RH, licitações e backup de infraestrutura de TI. Reportado via CERT.br + CTIR Gov.",
      "Multiple exposed directories with SUS waitlists, municipal financial data, HR records, procurements and IT infrastructure backup. Reported via CERT.br + CTIR Gov."
    ),
    category: "gov",
    severity: "critical",
    hasCaseStudy: false,
    lgpdArticles: ["Art. 5", "Art. 11", "Art. 46", "Art. 48"],
  },
  {
    id: "cruzilia-mg",
    slug: "cruzilia-mg",
    title: "Cruzília/MG Transparency Portal API",
    organization: b("Prefeitura de Cruzília", "Cruzília City Hall"),
    vulnType: "Excessive Data Exposure + Unauth API",
    CWE: "CWE-200 + CWE-862",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "25/06/2026",
    description: b(
      "API JSON sem autenticação expondo ~2.800 registros de servidores com nome, CPF, cargo e salário. Portal da Transparência com dados excessivos violando princípios LGPD. Reportado via CERT.br + CTIR Gov.",
      "Unauthenticated JSON API exposing ~2,800 employee records with name, CPF, role and salary. Transparency Portal with excessive data violating LGPD principles. Reported via CERT.br + CTIR Gov."
    ),
    category: "gov",
    severity: "high",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 5", "Art. 6", "Art. 7", "Art. 11", "Art. 46", "Art. 48"],
  },
  {
    id: "izirh-multivuln",
    slug: "izirh-multivuln",
    title: "IZI RH Platform: Multi-Vulnerability Chain",
    organization: b("IZI RH (izirh.io)", "IZI RH (izirh.io)"),
    vulnType: "Subdomain Takeover + Hardcoded Secrets + Production Debug",
    CWE: "CWE-1188 + CWE-798 + CWE-829",
    status: "open",
    discoveryDate: "2026",
    verifiedDate: "23/06/2026",
    description: b(
      "Análise estática de bundles JavaScript revelou 7 vulnerabilidades encadeáveis: Subdomain Takeover via CNAME dangling, client secret OAuth hardcodeado em bundle público, import-map-overrides ativo em produção e CSP permissivo. Chain permite Account Takeover e execução de código no contexto do domínio. Reportado via CERT.br — empresa não possuía canal de disclosure responsável.",
      "Static analysis of JavaScript bundles revealed 7 chainable vulnerabilities: Subdomain Takeover via dangling CNAME, OAuth client secret hardcoded in public bundle, import-map-overrides enabled in production and permissive CSP. Chain allows Account Takeover and code execution in the domain context. Reported via CERT.br — company had no responsible disclosure channel."
    ),
    category: "platform",
    severity: "critical",
    hasCaseStudy: true,
    lgpdArticles: ["Art. 46", "Art. 48"],
  },
];

export const securityCaseStudies: Record<string, SecurityCaseStudy> = {
  "fnas-mds-siafi": {
    challenge: b(
      "Infraestrutura FNAS/MDS expôs directory listing com dados financeiros SIAFI — transações governamentais sensíveis acessíveis sem autenticação por qualquer cidadão.",
      "FNAS/MDS infrastructure exposed directory listing with SIAFI financial data — sensitive government transactions accessible without authentication by any citizen."
    ),
    approach: b(
      "Verificação passiva confirmou acesso não autenticado. Documentação com screenshots e headers HTTP. Notificação via CERT.br + CTIR Gov simultaneamente. Acompanhamento pós-fix com verificação de 403/WAF.",
      "Passive verification confirmed unauthenticated access. Documentation with screenshots and HTTP headers. Notification via CERT.br + CTIR Gov simultaneously. Post-fix follow-up verifying 403/WAF."
    ),
    timeline: [
      b("Descoberta: acesso não autenticado confirmado", "Discovery: unauthenticated access confirmed"),
      b("Documentação: screenshots, headers, timestamps", "Documentation: screenshots, headers, timestamps"),
      b("Notificação: CERT.br + CTIR Gov simultâneo", "Notification: CERT.br + CTIR Gov simultaneous"),
      b("Correção: WAF implementado bloqueando acesso", "Fix: WAF implemented blocking access"),
      b("Verificação: 16/06 — 403 Forbidden confirmado", "Verification: 16/06 — 403 Forbidden confirmed"),
    ],
    impact: [
      b("Dados financeiros SIAFI de programas sociais federais expostos", "SIAFI financial data from federal social programs exposed"),
      b("Risco de LGPD Art. 46 — dados governamentais sem proteção adequada", "LGPD Art. 46 risk — government data without adequate protection"),
    ],
    keyFindings: [
      b("Directory Listing (CWE-548) em servidor governamental federal", "Directory Listing (CWE-548) on federal government server"),
      b("Sem WAF ou controle de acesso antes da notificação", "No WAF or access control before notification"),
      b("Correção via WAF — acesso bloqueado com 403", "Fix via WAF — access blocked with 403"),
    ],
  },
  "ibiracu-es": {
    challenge: b(
      "Portal municipal de Ibiraçu/ES apresentava DOM-XSS e directory listing simultâneos — dupla vulnerabilidade permitindo execução de scripts e acesso a arquivos sensíveis.",
      "Ibiraçu/ES municipal portal had simultaneous DOM-XSS and directory listing — dual vulnerability allowing script execution and access to sensitive files."
    ),
    approach: b(
      "Teste passivo identificou XSS em parâmetros DOM. Directory listing confirmou exposição de arquivos. Notificação à Ouvidoria municipal. Correção confirmada pela Ouvidoria.",
      "Passive testing identified XSS in DOM parameters. Directory listing confirmed file exposure. Notification to municipal ombudsman. Fix confirmed by ombudsman."
    ),
    timeline: [
      b("Descoberta: DOM-XSS + directory listing simultâneos", "Discovery: simultaneous DOM-XSS + directory listing"),
      b("Notificação: Ouvidoria municipal contatada", "Notification: municipal ombudsman contacted"),
      b("Correção: Ouvidoria confirmou fix", "Fix: ombudsman confirmed fix"),
      b("Verificação: 16/06 — corrigido", "Verification: 16/06 — fixed"),
    ],
    impact: [
      b("Portal municipal com dupla vulnerabilidade (XSS + listing)", "Municipal portal with dual vulnerability (XSS + listing)"),
      b("Dados de cidadãos potencialmente acessíveis via XSS", "Citizen data potentially accessible via XSS"),
    ],
    keyFindings: [
      b("CWE-79 (DOM-XSS) + CWE-548 (Directory Listing) simultâneos", "Simultaneous CWE-79 (DOM-XSS) + CWE-548 (Directory Listing)"),
      b("Correção confirmada pela Ouvidoria — canal direto eficiente", "Fix confirmed by ombudsman — direct channel efficient"),
    ],
  },
  "crmv-rs": {
    challenge: b("CRMV-RS expôs folhas de pagamento e documentos éticos via directory listing.", "CRMV-RS exposed payroll and ethics documents via directory listing."),
    approach: b("Verificação passiva + notificação CERT.br. Correção com 403 Forbidden.", "Passive verification + CERT.br notification. Fixed with 403 Forbidden."),
    timeline: [
      b("Descoberta: listing de documentos sensíveis", "Discovery: sensitive document listing"),
      b("Notificação via CERT.br", "Notification via CERT.br"),
      b("Correção: 403 Forbidden", "Fix: 403 Forbidden"),
    ],
    impact: [b("Documentos internos e folhas de pagamento expostos", "Internal documents and payroll exposed")],
    keyFindings: [b("CWE-548 corrigido com bloqueio de acesso", "CWE-548 fixed with access blocking")],
  },
  "cau-sc": {
    challenge: b("CAU/SC expôs folhas de pagamento e currículos com plugin WordPress vulnerável.", "CAU/SC exposed payroll and curricula with vulnerable WordPress plugin."),
    approach: b("Identificação de plugin vulnerável + directory listing. Notificação CERT.br. Correção com 403 Forbidden.", "Vulnerable plugin identification + directory listing. CERT.br notification. Fixed with 403 Forbidden."),
    timeline: [
      b("Descoberta: plugin vulnerável + listing", "Discovery: vulnerable plugin + listing"),
      b("Notificação CERT.br", "CERT.br notification"),
      b("Correção: 403 Forbidden", "Fix: 403 Forbidden"),
    ],
    impact: [b("Dados de profissionais e folhas de pagamento expostos", "Professional data and payroll exposed")],
    keyFindings: [b("Plugin WordPress + CWE-548 combinados", "WordPress plugin + CWE-548 combined")],
  },
  "metajobs-base44": {
    challenge: b(
      "Plataforma metajobs.base44.app expôs PII de candidatos — nomes, e-mails, telefones e currículos — acessível sem autenticação. Análise posterior revelou padrão sistêmico na plataforma.",
      "metajobs.base44.app platform exposed candidate PII — names, emails, phones and resumes — accessible without authentication. Further analysis revealed systemic platform pattern."
    ),
    approach: b(
      "Verificação confirmou acesso não autenticado a dados de candidatos. Notificação CERT.br. Análise cross-app revelou que o padrão afeta toda a plataforma Base44 (ver case study base44-systemic). Corrigido com 403 Forbidden.",
      "Verification confirmed unauthenticated access to candidate data. CERT.br notification. Cross-app analysis revealed pattern affecting entire Base44 platform (see base44-systemic case study). Fixed with 403 Forbidden."
    ),
    timeline: [
      b("Descoberta: PII de candidatos sem autenticação", "Discovery: candidate PII without authentication"),
      b("Análise: padrão sistêmico identificado na plataforma", "Analysis: systemic pattern identified on platform"),
      b("Notificação: CERT.br + Base44", "Notification: CERT.br + Base44"),
      b("Correção: 403 Forbidden", "Fix: 403 Forbidden"),
    ],
    impact: [
      b("PII de candidatos (nomes, e-mails, telefones, currículos) exposto", "Candidate PII (names, emails, phones, resumes) exposed"),
      b("Mesmo padrão em outros apps Base44", "Same pattern across other Base44 apps"),
    ],
    keyFindings: [
      b("CWE-306 (Missing Authentication) — dados acessíveis sem login", "CWE-306 (Missing Authentication) — data accessible without login"),
      b("Caso seminal que motivou análise sistêmica da plataforma", "Seminal case that motivated systemic platform analysis"),
    ],
  },
  "mogi-guacu-backup": {
    challenge: b(
      "Prefeitura de Mogi Guaçu expôs dump de backup SQL completo e arquivo tar de configuração VPN. Acesso não autenticado a infraestrutura crítica municipal.",
      "Mogi Guaçu city hall exposed complete SQL backup dump and VPN configuration tar file. Unauthenticated access to critical municipal infrastructure."
    ),
    approach: b(
      "Verificação confirmou backup SQL completo e VPN tar acessíveis publicamente. Notificação CERT.br + CTIR Gov. Ainda sem correção conforme verificação de 16/06.",
      "Verification confirmed complete SQL backup and VPN tar publicly accessible. CERT.br + CTIR Gov notification. Still open as of 16/06 verification."
    ),
    timeline: [
      b("Descoberta: backup SQL + VPN tar expostos", "Discovery: SQL backup + VPN tar exposed"),
      b("Notificação: CERT.br + CTIR Gov", "Notification: CERT.br + CTIR Gov"),
      b("Status: ainda sem correção", "Status: still open"),
    ],
    impact: [
      b("Backup SQL completo da base municipal", "Complete SQL backup of municipal database"),
      b("Configuração VPN exposta — risco de acesso à rede interna", "VPN configuration exposed — risk of internal network access"),
    ],
    keyFindings: [
      b("CWE-538 (File and Directory Information Exposure) — backup dump", "CWE-538 (File and Directory Information Exposure) — backup dump"),
      b("VPN tar exposto — potencial acesso à infraestrutura interna", "VPN tar exposed — potential access to internal infrastructure"),
    ],
  },
  "cau-se": {
    challenge: b("CAU/SE expôs folhas de pagamento com CPFs via directory listing. Dados pessoais sensíveis acessíveis.", "CAU/SE exposed payroll with CPFs via directory listing. Sensitive personal data accessible."),
    approach: b("Verificação + CERT.br. Ainda sem correção.", "Verification + CERT.br. Still open."),
    timeline: [
      b("Descoberta: CPFs em folhas de pagamento", "Discovery: CPFs in payroll"),
      b("Notificação CERT.br", "CERT.br notification"),
      b("Status: aberto", "Status: open"),
    ],
    impact: [b("CPFs — dados pessoais sensíveis conforme LGPD — expostos", "CPFs — sensitive personal data per LGPD — exposed")],
    keyFindings: [b("CWE-548 com exposição de dados pessoais (CPF)", "CWE-548 with personal data exposure (CPF)")],
  },
  "economia-painel": {
    challenge: b("Ministério da Economia executando Apache end-of-life com directory listing habilitado. Infraestrutura federal criticamente desatualizada.", "Ministry of Economy running end-of-life Apache with directory listing enabled. Critically outdated federal infrastructure."),
    approach: b("Identificação de versão EOL via headers + listing. Notificação CERT.br + CTIR Gov. Ainda sem correção.", "EOL version identification via headers + listing. CERT.br + CTIR Gov notification. Still open."),
    timeline: [
      b("Descoberta: Apache EOL + directory listing", "Discovery: Apache EOL + directory listing"),
      b("Notificação: CERT.br + CTIR Gov", "Notification: CERT.br + CTIR Gov"),
      b("Status: aberto", "Status: open"),
    ],
    impact: [b("Servidor federal com software sem suporte — risco de exploração known-vulnerabilities", "Federal server with unsupported software — known-vulnerability exploitation risk")],
    keyFindings: [b("CWE-1104 (Use of Unmaintained Third Party Components) + CWE-548", "CWE-1104 (Use of Unmaintained Third Party Components) + CWE-548")],
  },
  "valiprev": {
    challenge: b("VALIPREV (Instituto de Previdência de Valinhos) expôs processos de benefícios previdenciários via directory listing.", "VALIPREV (Valinhos Social Security Institute) exposed social security benefit processes via directory listing."),
    approach: b("Verificação + CERT.br. Ainda sem correção.", "Verification + CERT.br. Still open."),
    timeline: [
      b("Descoberta: processos previdenciários expostos", "Discovery: benefit processes exposed"),
      b("Notificação CERT.br", "CERT.br notification"),
      b("Status: aberto", "Status: open"),
    ],
    impact: [b("Dados de beneficiários de previdência expostos", "Social security beneficiary data exposed")],
    keyFindings: [b("CWE-548 em dados previdenciários", "CWE-548 in social security data")],
  },
  "base44-systemic": {
    challenge: b(
      "Análise de múltiplos apps Base44 revelou padrão sistêmico de falha de autenticação: páginas públicas por default, RLS do PostgreSQL bypassado quando auth.uid() é null. A plataforma inteira é afetada, não apenas apps individuais.",
      "Analysis of multiple Base44 apps revealed systemic authentication failure pattern: pages public by default, PostgreSQL RLS bypassed when auth.uid() is null. The entire platform is affected, not just individual apps."
    ),
    approach: b(
      "Cross-app analysis correlacionando metajobs, gestorcontratospro e mentoriadom. Root cause: decisão arquitetural da plataforma — páginas públicas sem auth por default, RLS só ativa com contexto de autenticação. Documentação como systemic analysis. Notificação CERT.br + contato direto com Base44.",
      "Cross-app analysis correlating metajobs, gestorcontratospro and mentoriadom. Root cause: platform architectural decision — public pages without auth by default, RLS only active with auth context. Documented as systemic analysis. CERT.br notification + direct Base44 contact."
    ),
    timeline: [
      b("Descoberta inicial: metajobs.base44.app PII exposto", "Initial discovery: metajobs.base44.app PII exposed"),
      b("Investigação: mesmo padrão em gestorcontratospro", "Investigation: same pattern in gestorcontratospro"),
      b("Análise: root cause é arquitetura da plataforma, não app individual", "Analysis: root cause is platform architecture, not individual app"),
      b("Notificação: CERT.br + Base44", "Notification: CERT.br + Base44"),
      b("Correção: auth required em apps afetados", "Fix: auth required on affected apps"),
    ],
    impact: [
      b("3+ apps afetados com PII exposto", "3+ affected apps with exposed PII"),
      b("Root cause sistêmico — qualquer app Base44 pode estar afetado", "Systemic root cause — any Base44 app may be affected"),
    ],
    keyFindings: [
      b("Plataforma serve páginas sem auth por default (opt-in para proteção)", "Platform serves pages without auth by default (opt-in for protection)"),
      b("PostgreSQL RLS bypassado quando auth.uid() = null", "PostgreSQL RLS bypassed when auth.uid() = null"),
      b("CWE-306 (Missing Authentication) como padrão de plataforma", "CWE-306 (Missing Authentication) as platform pattern"),
    ],
  },
  "cruzilia-mg": {
    challenge: b(
      "Portal da Transparência de Cruzília/MG expunha API REST sem qualquer autenticação, retornando dados completos de servidores municipais incluindo CPF, cargo, lotação e remuneração. Dados de 14 meses (~2.800 registros) acessíveis via requisição HTTP simples.",
      "Cruzília/MG Transparency Portal exposed a REST API without any authentication, returning complete municipal employee data including CPF, role, assignment and salary. 14 months of data (~2,800 records) accessible via simple HTTP request."
    ),
    approach: b(
      "Reconhecimento passivo identificou parâmetro 'format=json' no portal da transparência. Verificação confirmou retorno de dados sem autenticação. Documentação dos headers e volume de dados expostos. Notificação via CERT.br + CTIR Gov simultaneamente.",
      "Passive recon identified 'format=json' parameter in the transparency portal. Verification confirmed data returned without authentication. Documentation of headers and exposed data volume. Simultaneous notification via CERT.br + CTIR Gov."
    ),
    timeline: [
      b("Descoberta: API JSON sem auth retornando dados de servidores", "Discovery: unauthenticated JSON API returning employee data"),
      b("Documentação: headers, volume de dados, tipos de campo expostos", "Documentation: headers, data volume, exposed field types"),
      b("Notificação: CERT.br + CTIR Gov simultâneo", "Notification: CERT.br + CTIR Gov simultaneous"),
      b("Status: aguardando correção", "Status: awaiting fix"),
    ],
    impact: [
      b("~2.800 registros de servidores públicos expostos sem autenticação", "~2,800 public employee records exposed without authentication"),
      b("Violação de princípios LGPD: minimização, finalidade, segurança", "LGPD principle violations: minimization, purpose, security"),
    ],
    keyFindings: [
      b("API sem auth em portal governamental municipal", "Unauthenticated API on municipal government portal"),
      b("Exposição excessiva de dados pessoais (CPF, salário) em portal da transparência", "Excessive personal data exposure (CPF, salary) on transparency portal"),
      b("CWE-200 + CWE-862 — informação sensível exposta + autorização ausente", "CWE-200 + CWE-862 — sensitive info exposed + missing authorization"),
    ],
  },
  "izirh-multivuln": {
    challenge: b(
      "Plataforma IZI RH (izirh.io) apresentava múltiplas vulnerabilidades encadeáveis identificadas via análise estática de bundles JavaScript públicos. A combinação permitia comprometimento total de contas (ATO) e execução de código arbitrário no contexto dos subdomínios da plataforma. A empresa não possuía canal de disclosure responsável — o contato inicial via chat de suporte foi tratado como sugestão de rotina.",
      "IZI RH platform (izirh.io) presented multiple chainable vulnerabilities identified via static analysis of public JavaScript bundles. The combination allowed full Account Takeover (ATO) and arbitrary code execution in the platform's subdomain context. The company had no responsible disclosure channel — initial contact via support chat was treated as a routine suggestion."
    ),
    approach: b(
      "Análise exclusivamente passiva de bundles JavaScript públicos. Identificação de 7 falhas incluindo Subdomain Takeover via CNAME dangling, credenciais OAuth hardcodeadas, import-map-overrides ativo em produção e CSP permissivo. Documentação da chain de exploração sem execução ativa. Notificação via CERT.br como intermediário devido à ausência de canal de segurança da empresa.",
      "Exclusively passive analysis of public JavaScript bundles. Identification of 7 flaws including Subdomain Takeover via dangling CNAME, hardcoded OAuth credentials, import-map-overrides enabled in production and permissive CSP. Exploitation chain documented without active execution. Notification via CERT.br as intermediary due to company's lack of security channel."
    ),
    timeline: [
      b("Recon: análise estática de bundles JS públicos", "Recon: static analysis of public JS bundles"),
      b("Identificação: 7 vulnerabilidades encadeáveis", "Identification: 7 chainable vulnerabilities"),
      b("Tentativa de contato: chat de suporte — tratado como rotina", "Contact attempt: support chat — treated as routine"),
      b("Notificação: CERT.br como intermediário", "Notification: CERT.br as intermediary"),
      b("Status: aguardando correção", "Status: awaiting fix"),
    ],
    impact: [
      b("Chain completa permite Account Takeover em contas de usuários", "Full chain allows Account Takeover on user accounts"),
      b("Subdomain Takeover permite execução de código no contexto do domínio", "Subdomain Takeover allows code execution in domain context"),
      b("Client secret OAuth exposto permite acesso não autorizado a APIs Google", "Exposed OAuth client secret allows unauthorized access to Google APIs"),
    ],
    keyFindings: [
      b("V-001: Subdomain Takeover via CNAME dangling (CWE-1188, CVSS 9.1)", "V-001: Subdomain Takeover via dangling CNAME (CWE-1188, CVSS 9.1)"),
      b("V-003: Google OAuth client secret hardcoded em bundle público (CWE-798, CVSS 8.1)", "V-003: Google OAuth client secret hardcoded in public bundle (CWE-798, CVSS 8.1)"),
      b("V-006: import-map-overrides ativo em produção (CWE-829, CVSS 8.2)", "V-006: import-map-overrides enabled in production (CWE-829, CVSS 8.2)"),
      b("Empresa sem canal de disclosure — CERT.br acionado como intermediário", "Company with no disclosure channel — CERT.br engaged as intermediary"),
    ],
  },
};

