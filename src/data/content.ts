import type { Bilingual } from "../lib/LanguageContext";
import { getCurrentSemesterPeriod, getCurrentSemesterInline } from "../lib/semester";

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
title: b("Engenharia de Computação + IA", "Computer Engineering + AI"),
subtitle: b(
"Full-Stack · Python · React · Cloud",
"Full-Stack · Python · React · Cloud"
),
bio: b(
"Engenheiro de Computação focado em IA e sistemas full-stack. Construo pipelines de agentes autônomos, migro bancos de dados em escala e entrego soluções do frontend ao backend.",
"Computer Engineering student focused on AI and full-stack systems. I build autonomous agent pipelines, migrate large-scale databases, and deliver end-to-end solutions."
),
bioExtended: b(
`Comecei com Python em 2022 na UFOP, aprendendo por conta própria. Após dois anos em Química, mudei para Engenharia de Computação. Meu primeiro projeto foi o ForestAI — anotei centenas de imagens de drone manualmente e treinei modelos de detecção. Na Paware, migrei bancos de dados para Azure Cosmos DB e criei pipelines de IA. Hoje estou no ${getCurrentSemesterInline().pt} e construo projetos como HarpIA e SRF System.`,
`Started with Python in 2022 at UFOP, learning on my own. After two years in Chemistry, switched to Computer Engineering. My first project was ForestAI — manually annotated hundreds of drone images and trained detection models. At Paware, migrated databases to Azure Cosmos DB and built AI pipelines. Now in my ${getCurrentSemesterInline().en}, building projects like HarpIA and SRF System.`
),
  bioHighlights: [
    b(
      "IA & Automação: Construção de pipelines agentic (GPT-4.1 tool calling, ReAct loops) e integração de LLMs em fluxos de trabalho reais — do HelloSocial na Paware ao HarpIA pessoal.",
      "AI & Automation: Building agentic pipelines (GPT-4.1 tool calling, ReAct loops) and integrating LLMs into real workflows — from HelloSocial at Paware to personal HarpIA project."
    ),
    b(
      "Interação com Cloud e Backend: Experiência prática em Azure Cloud, migração de bancos de dados em larga escala e construção de APIs robustas com Python/FastAPI.",
      "Cloud & Backend Interaction: Hands-on experience with Azure Cloud, large-scale database migration, and building robust APIs with Python/FastAPI."
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
"Além do código: Linux diário, atividades ao ar livre e descanso.",
"Beyond code: Linux daily driver, outdoor activities, and rest."
),
  email: "isaacnathandasilva@gmail.com",
  phone: "+55 (31) 99441-7786",
  location: b("Mariana, MG — Brasil", "Mariana, MG — Brazil"),
  linkedin: "https://www.linkedin.com/in/isaac-nathan-da-silva-barbosa-815b212ab/",
  github: "https://github.com/xAngryBadger",
  portfolio: "https://xangrybadger.github.io/isaac-vitae/",
  pcd: b("PCD — TEA (CID-11: 6A02.2) + TDAH (CID-11: 6A05.2)", "PWD — ASD (ICD-11: 6A02.2) + ADHD (ICD-11: 6A05.2)"),
};

export const experiences: Experience[] = [
  {
    company: "Paware Softwares",
    role: b("Desenvolvedor Full-Stack com foco em IA", "Full-Stack Developer with AI focus"),
    period: b("Out 2025 — Mai 2026", "Oct 2025 — May 2026"),
    current: false,
    highlights: [
      b(
        "Migrei datasets legados do Google Drive para Azure Cosmos DB destinados à Meritage Homes (EUA) — pipeline com extração automatizada por cookies, compressão, renomeação e injeção em painéis para embedding via agente WhatsApp com limites rígidos de tamanho de arquivo. Containerizei com Docker para ambientes reproduzíveis e escrevi camada de validação de schema com rollback automático.",
        "Migrated legacy datasets from Google Drive to Azure Cosmos DB for Meritage Homes (USA) — pipeline with automated cookie-based extraction, compression, renaming, and injection into panels for WhatsApp agent embedding with strict file size limits. Containerized with Docker for reproducible environments and wrote schema validation layer with automated rollback."
      ),
      b(
      "Resolvi problema cross-platform de MIME types (Android nativo vs iPhone exigindo octet-stream — com testes extensivos em dispositivos iOS). Essa validação virou o backbone da migração final para Azure Cosmos DB.",
      "Resolved cross-platform MIME type issue (Android native vs iPhone requiring octet-stream — with extensive testing on iOS devices). This validation layer became the backbone of the final Azure Cosmos DB migration."
      ),
      b(
        "Arquitetei pipeline agentic de geração de imagens para o HelloSocial — agente GPT-4.1 com tool calling, até 10 iterações de raciocínio, integração Flux Kontext Pro + DALL-E 3 + Placid/Canva. Fallback SQLite/PIL local quando API paga não era necessária.",
        "Architected agentic image-generation pipeline for HelloSocial — GPT-4.1 agent with tool calling, up to 10 reasoning iterations, integrating Flux Kontext Pro + DALL-E 3 + Placid/Canva APIs. Fallback to SQLite/local PIL when paid APIs weren't needed."
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
        "Aprendi Arduino e LEGO em <2 semanas e ministrei aulas de robótica para crianças/adolescentes, conectando teoria a aplicações reais.",
        "Learned Arduino and LEGO in under 2 weeks and taught robotics to children/teens, connecting theory to real applications."
      ),
      b(
        "Conciliei manhãs aqui com trabalho noturno na Paware.",
        "Balanced mornings here with evening work at Paware."
      ),
    ],
  },
];

export const education: Education[] = [
  {
    degree: b("Química Industrial", "Industrial Chemistry"),
    institution: "UFOP",
    period: "2022",
    status: b("Primeiros passos em Python — Thonny IDE", "First steps in Python — Thonny IDE"),
    statusActive: false,
  },
  {
    degree: b("Engenharia Química", "Chemical Engineering"),
    institution: "UFSJ — Campus Alto Paraopeba",
    period: "2022 — 2024",
    status: b("Período de transição — estudo autodirigido em IA", "Transition period — self-directed AI study"),
    statusActive: false,
  },
  {
    degree: b("Engenharia de Computação", "Computer Engineering"),
    institution: "Cruzeiro do Sul",
    period: "2024 — 2029",
    status: getCurrentSemesterPeriod(),
    statusActive: true,
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
    label: "Frontend",
    skills: ["React 19", "TypeScript", "JavaScript", "Tailwind CSS v4", "Flutter", "Vite", "React Native", "Expo"],
    color: "#A8611A",
    storyProof: b(
      "React 19 + TypeScript \u2192 HarpIA frontend, Flora Sensus admin panel, Inovesa site institucional, este portf\u00f3lio.",
      "React 19 + TypeScript \u2192 HarpIA frontend, Flora Sensus admin panel, Inovesa institutional site, this very portfolio."
    ),
    storySnippet: {
      language: "tsx",
      code: `const useParallax = (range: [number, number]) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], range);
  return { ref, style: { y } };
};`,
    },
    storyProjectIds: ["harpia", "florasensus", "inovesa"],
  },
  {
    label: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express", "Java", "SQL"],
    color: "#456A4B",
    storyProof: b(
"FastAPI + Azure Cosmos DB → HarpIA pipeline, AguaQuality IoT backend, HelloSocial (Paware). Python async como linguagem de produção.",
"FastAPI + Azure Cosmos DB → HarpIA pipeline, AguaQuality IoT backend, HelloSocial (Paware). Python async as production language."
    ),
    storySnippet: {
      language: "python",
      code: `@router.post("/webhook/pix")
async def pix_webhook(payload: PixPayload):
    async with get_cosmos_tx() as tx:
        order = await tx.read("orders", payload.ref)
        if order["status"] == "paid":
            await relay.toggle(order["device_id"], ON)
            await tx.patch("orders", order["id"],
                {"status": "confirmed"})`,
    },
    storyProjectIds: ["harpia", "aguaquality", "hellosocial"],
  },
  {
    label: "Cloud & Infra",
    skills: ["Azure", "Azure Cosmos DB", "Docker", "Git / GitHub", "PocketBase"],
    color: "#6B5B3D",
    storyProof: b(
      "Migra\u00e7\u00e3o de bases para Azure Cosmos DB (Meritage Homes, EUA). Docker para agentes de IA. PocketBase como backend para Flora Sensus.",
      "Database migration to Azure Cosmos DB (Meritage Homes, USA). Docker for AI agents. PocketBase as backend for Flora Sensus."
    ),
    storySnippet: {
      language: "python",
code: `async def cosmos_upsert(db: CosmosClient, coll: str, doc: dict):
  container = db.get_container_client(coll)
    try:
        existing = await container.read_item(
            doc["id"], partition_key=doc["pk"])
        return await container.replace_item(
            doc["id"], {**existing, **doc})
    except CosmosResourceNotFoundError:
        return await container.create_item(doc)`,
    },
    storyProjectIds: ["harpia", "florasensus", "aguaquality"],
  },
  {
    label: b("IA & Data", "AI & Data"),
    skills: [
      "PyTorch", "DeepForest", "Azure OpenAI", "DALL-E 3", "Flux",
      "GPT-4.1 (Agentes)", "NVIDIA NIM API", "Gemini SDK",
      "scikit-learn", "OpenCV", "Ollama",
    ],
    color: "#8B6914",
    storyProof: b(
      "7+ modelos de IA integrados no HarpIA. Agente ReAct com Ollama no Fennec Excel. Detec\u00e7\u00e3o de esp\u00e9cies com PyTorch + DeepForest no ForestAI.",
      "7+ AI models integrated in HarpIA. ReAct agent with Ollama in Fennec Excel. Species detection with PyTorch + DeepForest in ForestAI."
    ),
    storySnippet: {
      language: "python",
code: `class OllamaClient:
  async def chat(self, messages: list[dict]) -> str:
    async with aiohttp.ClientSession() as s:
      async with s.post(
                f"{self.base}/api/chat",
                json={"model": self.model,
                      "messages": messages,
                      "stream": False},
            ) as r:
                return (await r.json())["message"]["content"]`,
    },
    storyProjectIds: ["harpia", "fennec", "forestai"],
  },
  {
    label: b("Integra\u00e7\u00f5es", "Integrations"),
    skills: [
      "Mercado Pago PIX", "Canva Connect API", "Placid API", "Templated.io",
      "Pexels API", "Sora / Veo (Video AI)",
    ],
    color: "#4A6741",
    storyProof: b(
"PIX via Mercado Pago para AguaQuality. Canva Connect + Placid para HelloSocial (Paware). Pexels API para busca automática de imagens no HarpIA.",
"PIX via Mercado Pago for AguaQuality. Canva Connect + Placid for HelloSocial (Paware). Pexels API for automatic image search in HarpIA."
    ),
    storyProjectIds: ["aguaquality", "hellosocial", "harpia"],
  },
  {
    label: b("Outros", "Other"),
    skills: [
      b("Ciberseguran\u00e7a", "Cybersecurity"), b("Metodologias \u00c1geis", "Agile Methodologies"),
      "Testes de API", b("Ingl\u00eas Fluente", "Fluent English"),
      "NiceGUI", "PyInstaller / Inno Setup", "xlwings / COM", "Linux (CachyOS/Hyprland)",
    ],
    color: "#6A5A4A",
    storyProof: b(
      "Ingl\u00eas fluente para docs e reuni\u00f5es com equipe EUA. SRF System com NiceGUI + Rich CLI. PyInstaller + Inno Setup para instalador do Fennec. CachyOS/Hyprland setup pr\u00f3pria.",
      "Fluent English for documentation and meetings with US team. SRF System with NiceGUI + Rich CLI. PyInstaller + Inno Setup for Fennec installer. Custom CachyOS/Hyprland rice."
    ),
    storyProjectIds: ["srf-system", "fennec"],
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
    id: "harpia",
    title: "HarpIA",
    year: "2026",
    category: b("IA Criativa · Automação · Multi-Modelo", "Creative AI · Automation · Multi-Model"),
    description: b(
"Motor de automação criativa com 7+ modelos de IA (GPT-4.1, DALL-E 3, Flux 1.1/2.0/Kontext Pro, Nano Banana (Gemini), Sora, Veo 3.1). Pipeline agentic autônomo: copywriting, busca de imagens, composição de designs e geração de vídeo. Stack leve por padrão (SQLite + PIL local), com fallback para APIs pagas quando necessário.",
"Creative automation engine with 7+ AI models (GPT-4.1, DALL-E 3, Flux 1.1/2.0/Kontext Pro, Nano Banana (Gemini), Sora, Veo 3.1). Autonomous agentic pipeline: copywriting, image search, design compositing, and video generation. Lightweight stack by default (SQLite + local PIL), with fallback to paid APIs when needed."
    ),
    tech: ["Python", "GPT-4.1", "DALL-E 3", "Flux 2.0 Pro", "Sora", "Veo 3.1", "Pillow", "aiohttp", "SQLite", "Azure Cosmos DB"],
    color: "#FFB800",
  icon: null,
  githubUrl: "https://github.com/xAngryBadger/harpia",
    featured: true,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "harpia",
  },
  {
    id: "srf-system",
    title: "SRF System",
    year: "2026",
    category: b("Motor de Planejamento · Floresta · Logística", "Planning Engine · Forestry · Logistics"),
    description: b(
      "Motor de planejamento operacional para restauração florestal em larga escala. Gera dossiês executivos, cronogramas de atividades, gerência tarifas/equipes/territórios. Interface NiceGUI + CLI.",
      "Operational planning engine for large-scale forest restoration. Generates executive dossiers, activity schedules, manages tariffs/crews/territories. NiceGUI + CLI interface."
    ),
    tech: ["Python 3.10+", "pandas", "openpyxl", "NiceGUI", "Rich", "unittest"],
    color: "#2d5a3d",
  icon: null,
  githubUrl: "https://github.com/xAngryBadger/srf-system",
    featured: true,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "srf-system",
  },
  {
    id: "florasensus",
    title: "Flora Sensus",
    year: "2026",
    category: b("Mobile · Offline-First · Flutter + React", "Mobile · Offline-First · Flutter + React"),
    description: b(
      "App mobile para inventário florestal offline-first com motor de sincronização completo (detecção de conflitos, rollback atômico, UUID remapping). Painel admin React com exportação XLSX/PDF/CSV. ~24K LOC — arquitetura e lógica de sync construídas do zero; código gerado com apoio de LLM (web) e revisado manualmente.",
      "Offline-first forest inventory mobile app with a full sync engine (conflict detection, atomic rollback, UUID remapping). React admin panel with XLSX/PDF/CSV export. ~24K LOC — architecture and sync logic built from scratch; code generated with LLM assistance (web) and manually reviewed."
    ),
    tech: ["Flutter", "Dart", "Drift / SQLite", "PocketBase", "React", "Vite", "Provider", "Workmanager"],
    color: "#2d6b3f",
  icon: null,
  githubUrl: "https://github.com/xAngryBadger/flora-sensus",
    featured: true,
    inProgress: false,
    hasCaseStudy: true,
    caseStudySlug: "flora-sensus",
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
      "Plataforma de criação e agendamento de posts com IA — projeto na Paware que inspirou o HarpIA. Pipeline de geração de imagens com Flux Kontext Pro e DALL-E 3, agentes de copy e template.",
      "AI-powered social media post creation and scheduling platform — project at Paware that inspired HarpIA. Image generation pipeline with Flux Kontext Pro and DALL-E 3, copy and template agents."
    ),
  tech: ["Python", "FastAPI", "Azure OpenAI", "Flux", "Canva API", "React", "TypeScript"],
  color: "#2a1a3a",
  icon: "/images/hellosocial.png",
    githubUrl: null,
    featured: false,
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
  githubUrl: "https://github.com/xAngryBadger/minepal",
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
      "Detecção e classificação de espécies florestais com Deep Learning. Pipeline completo: treinamento com DeepForest, divisão estratificada, validação com bounding boxes. Projeto de pesquisa em andamento.",
      "Forest species detection and classification with Deep Learning. Full pipeline: DeepForest training, stratified splits, bounding box validation. Ongoing research project."
    ),
    tech: ["Python", "PyTorch", "DeepForest", "OpenCV", "scikit-learn", "TensorBoard"],
    color: "#2a301a",
  icon: null,
  githubUrl: "https://github.com/xAngryBadger/forestai",
    featured: false,
    inProgress: true,
    hasCaseStudy: false,
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
    id: "json-forge",
    title: "JSON Forge",
    year: "2026",
    category: b("Web · Ferramenta · Editor de Dados", "Web · Tool · Data Editor"),
    description: b(
      "Editor JSON completo com CodeMirror 6, árvore virtualizada, grafo ReactFlow, diff mode, gerador TypeScript e client REST integrado. Toggle claro/escuro.",
      "Full JSON editor with CodeMirror 6, virtualized tree, ReactFlow graph, diff mode, TypeScript generator and integrated REST client. Light/dark toggle."
    ),
    tech: ["React 19", "CodeMirror 6", "ReactFlow", "react-virtuoso", "TypeScript", "Vite"],
    color: "#1a1a2e",
    icon: null,
githubUrl: "https://github.com/xAngryBadger/json-forge",
demoUrl: "https://xangrybadger.github.io/json-forge/",
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
    id: "diskvisor",
    title: "DiskVisor",
    year: "2026",
    category: b("Desktop · Tauri 2 · Visualização de Disco", "Desktop · Tauri 2 · Disk Visualization"),
    description: b(
      "Analisador de uso de disco com sunburst D3, scan paralelo (jwalk), árvore de arquivos colapsável e breadcrumb interativo. Tauri 2 + Rust.",
      "Disk usage analyzer with D3 sunburst, parallel scan (jwalk), collapsible file tree and interactive breadcrumb. Tauri 2 + Rust."
    ),
    tech: ["Tauri 2", "React 19", "D3.js", "jwalk (Rust)", "TypeScript", "Vite"],
    color: "#456A4B",
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
    color: "#A8611A",
    icon: null,
    githubUrl: "https://github.com/xAngryBadger/forge-usb",
    featured: false,
    inProgress: false,
    hasCaseStudy: false,
    playground: true,
  },
];

export const courses: Course[] = [
  { name: "Python Essentials 1", issuer: "Cisco Networking Academy", hours: "", category: "python", prominent: true, context: b("Fundamentos de programação com Python — lógica, estruturas e primeiros scripts.", "Programming fundamentals with Python — logic, structures, and first scripts.") },
  { name: "Python Essentials 2", issuer: "Cisco Networking Academy", hours: "", category: "python", prominent: true, context: b("Expansão para Python avançado — orientação a objetos, bibliotecas e preparação para certificação.", "Advanced Python expansion — OOP, libraries, and certification prep.") },
  { name: b("Data Science Essentials with Python", "Data Science Essentials with Python"), issuer: "Cisco Networking Academy", hours: "", category: "data", prominent: true, context: b("Análise de dados com Pandas e Matplotlib — aprendizado prático e baseado em projetos.", "Data analysis with Pandas and Matplotlib — hands-on, project-based learning.") },
  { name: b("Data Analytics Essentials", "Data Analytics Essentials"), issuer: "Cisco Networking Academy", hours: "", category: "data", prominent: true, context: b("Ferramentas essenciais de analytics reconhecidas pelo mercado.", "Essential analytics tools recognized by the industry.") },
  { name: b("IA para Otimização de Processos e Tomada de Decisão", "AI for Process Optimization & Decision-Making"), issuer: b("Escola Virtual Gov · Enap · Serpro", "Escola Virtual Gov · Enap · Serpro"), hours: "71h", category: "ai", prominent: true, context: b("Programa do Núcleo de IA do Governo (PBIA) — uso estratégico de IA na gestão pública, análise de dados e segurança da informação.", "Program by the Gov AI Nucleus (PBIA) — strategic use of AI in public management, data analysis, and information security.") },
  { name: "Networking Basics", issuer: "Cisco Networking Academy", hours: "120h", category: "networking", prominent: true, context: b("Concluído durante Engenharia de Computação na Cruzeiro do Sul", "Completed during Computer Engineering at Cruzeiro do Sul") },
  { name: b("Introdução à Cibersegurança", "Intro to Cybersecurity"), issuer: "Cisco Networking Academy", hours: "", category: "security", prominent: true, context: b("Base em segurança de redes e ameaças cibernéticas", "Foundation in network security and cyber threats") },
  { name: b("Segurança em TI", "IT Security"), issuer: b("Fundação Bradesco", "Bradesco Foundation"), hours: "", category: "security", prominent: true, context: b("Complemento em proteção de infraestrutura e dados corporativos", "Complement in corporate infrastructure and data protection") },
  { name: b("Inglês Fluente", "Fluent English"), issuer: "KUMON", hours: b("3 anos", "3 years"), category: "languages", prominent: true, context: b("Habilitação para documentação técnica e reuniões com equipes internacionais", "Enables technical documentation and meetings with international teams") },
];

export const stats = [
  { value: 10, suffix: "+", label: b("Projetos", "Projects") },
  { value: 10, suffix: "mo+", label: b("Experiência Profissional", "Professional Experience") },
  { value: 7, suffix: "+", label: b("Modelos de IA", "AI Models") },
];

export const cvSummary: Bilingual = b(
  "Python · FastAPI · React 19 · Azure Cosmos DB · GPT-4.1 · Flutter · PyTorch — 10 meses de experiência profissional. De Química Industrial para Computação: construí o ForestAI do zero (Stack Overflow + Thonny, sem IA-assisted coding). Na Paware, migrei bases para Azure Cosmos DB (Meritage Homes, EUA) e arquitetei pipelines agentic de IA para o HelloSocial (GPT-4.1 tool calling, DALL-E 3, Flux). Aprendo resolvendo problemas reais — de MIME type cross-platform a agentes ReAct com schema enforcement.",
  "Python · FastAPI · React 19 · Azure Cosmos DB · GPT-4.1 · Flutter · PyTorch — 10 months of professional experience. From Industrial Chemistry to Computer Engineering: built ForestAI from scratch (Stack Overflow + Thonny, no AI-assisted coding). At Paware, migrated databases to Azure Cosmos DB (Meritage Homes, USA) and architected agentic AI pipelines for HelloSocial (GPT-4.1 tool calling, DALL-E 3, Flux). I learn by solving real problems — from cross-platform MIME types to ReAct agents with schema enforcement."
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
    id: "harpia",
    name: "HarpIA",
    url: "github.com/xAngryBadger/harpia",
    tier: 1,
    bullets: [
      b(
        "Motor de automação criativa com 7+ modelos de IA — agente GPT-4.1 com tool calling, pipeline agentic autônomo (copywriting, busca de imagens, composição de designs, geração de vídeo). Stack leve por padrão (SQLite + PIL local) com fallback para APIs pagas.",
        "Creative automation engine with 7+ AI models — GPT-4.1 agent with tool calling, autonomous agentic pipeline (copywriting, image search, design compositing, video generation). Lightweight stack by default (SQLite + local PIL) with fallback to paid APIs."
      ),
      b(
        "6.900+ LOC Python async com testes de segurança e zero hardcoded secrets. Backend swap: SQLite local para Azure Cosmos DB + Blob Storage, alternado via env var. Pronto para cron com file-locking e recuperação de lotes travados.",
        "6,900+ LOC async Python with security tests and zero hardcoded secrets. Backend swap: local SQLite to Azure Cosmos DB + Blob Storage, toggled via env var. Cron-ready with file-locking and stuck batch recovery."
      ),
    ],
    tech: ["Python", "GPT-4.1", "DALL-E 3", "Flux 2.0 Pro", "Sora", "Veo 3.1", "Azure Cosmos DB", "SQLite"],
  },
  {
    id: "florasensus",
    name: "Flora Sensus",
    url: "github.com/xAngryBadger/flora-sensus",
    tier: 1,
    bullets: [
      b(
        "App Flutter offline-first para inventário florestal com motor de sincronização custom — detecção de remapping em cascata pela FK chain (Propriedade → UT → Parcela → Planta → Foto) e rollback atômico via transações Drift.",
        "Flutter offline-first app for forest inventory with custom sync engine — cascading remap detection through FK chain (Propriedade → UT → Parcela → Planta → Foto) and atomic rollback via Drift transactions."
      ),
      b(
        "~24K LOC — arquitetura e lógica de sync construídas do zero; código gerado com apoio de LLM (web) e revisado manualmente. Painel admin React com auth, fotos, relatórios e exportação XLSX/PDF/CSV.",
        "~24K LOC — architecture and sync logic built from scratch; code generated with LLM assistance (web) and manually reviewed. React admin panel with auth, photos, reports, and XLSX/PDF/CSV export."
      ),
      b(
        "Backoff exponencial com jitter, auth retry wrapper com refresh transparente em 401s, ngrok bypass para desenvolvimento.",
        "Exponential backoff with jitter, auth retry wrapper with transparent 401 refresh, ngrok bypass for development."
      ),
    ],
    tech: ["Flutter", "Dart", "Drift/SQLite", "React", "PocketBase", "TypeScript"],
  },
  {
    id: "forestai",
    name: "ForestAI",
    url: "github.com/xAngryBadger/forestai",
    tier: 1,
    bullets: [
      b(
        "Detecção e classificação de espécies florestais com Deep Learning — construído do zero sem IA-assisted coding. Stack Overflow + Thonny IDE apenas.",
        "Forest species detection and classification with Deep Learning — built from scratch without AI-assisted coding. Stack Overflow + Thonny IDE only."
      ),
      b(
        "Anotação manual de centenas de imagens de drone da Fundação Renova (bounding boxes), treinamento DeepForest/YOLO em GPU local, splits estratificadas. Interpretação de curvas no TensorBoard — detectando memorização vs generalização. O jeito difícil construiu a intuição que fez cada framework subsequente clicar mais rápido.",
        "Manual annotation of hundreds of drone images from Fundação Renova (bounding boxes), DeepForest/YOLO training on local GPU, stratified splits. TensorBoard curve interpretation — detecting memorization vs generalization. The hard way built the intuition that made every subsequent framework click faster."
      ),
    ],
    tech: ["PyTorch", "DeepForest", "OpenCV", "scikit-learn", "TensorBoard"],
  },
  {
    id: "fennec",
    name: "Fennec Excel",
    url: "github.com/xAngryBadger/Sahara-Fenneck",
    tier: 1,
    bullets: [
      b(
        "Assistente de IA local para Excel via agente ReAct (Ollama/qwen2.5). Comando em linguagem natural para filtrar, ordenar, renomear abas e manipular planilhas com checkpoint automático antes de cada alteração.",
        "Local AI assistant for Excel via ReAct agent (Ollama/qwen2.5). Natural language commands to filter, sort, rename sheets and manipulate spreadsheets with auto-checkpoint before every change."
      ),
      b(
        "6+ integrações OAuth (Gmail, Teams, Calendar, Drive, Outlook, Trello) com confirmação do usuário antes de modificações.",
        "6+ OAuth integrations (Gmail, Teams, Calendar, Drive, Outlook, Trello) with user confirmation before modifications."
      ),
      b(
        "Design visual feito à mão com paleta pastel e mascote original (Fennec). Instalador nativo Windows (Inno Setup + PyInstaller). Interface bilíngue PT/EN.",
        "Hand-crafted visual design with pastel palette and original mascot (Fennec). Native Windows installer (Inno Setup + PyInstaller). Bilingual PT/EN interface."
      ),
    ],
    tech: ["Python", "Ollama", "CustomTkinter", "xlwings/COM", "PyInstaller", "Inno Setup"],
  },
  {
    id: "srf-system",
    name: "SRF System",
    url: "github.com/xAngryBadger/srf-system",
    tier: 2,
    bullets: [
      b(
        "Motor de planejamento operacional para restauração florestal em larga escala — geração automática de dossiês executivos com alocação de equipes, territórios e cronogramas.",
        "Operational planning engine for large-scale forest restoration — automatic generation of executive dossiers with crew allocation, territory mapping, and schedules."
      ),
      b(
        "Gerenciamento de tarifas e custos operacionais. Interface NiceGUI + CLI Rich com suite de testes unitários.",
        "Tariff and operational cost management. NiceGUI + Rich CLI interface with unit test suite."
      ),
    ],
    tech: ["Python", "pandas", "NiceGUI", "Rich CLI", "openpyxl", "unittest"],
  },
  {
    id: "mainecoon",
    name: "MaineCoon",
    url: "github.com/xAngryBadger/minepal",
    tier: 2,
    bullets: [
      b(
        "Bot de Minecraft com comandos em linguagem natural via LLM (NVIDIA NIM API) — minerar, craftar, seguir, navegar e interagir pelo chat. Módulo de reinforcement learning para comportamento autônomo.",
        "Minecraft bot with natural language commands via LLM (NVIDIA NIM API) — mine, craft, follow, navigate, and interact via chat. Reinforcement learning module for autonomous behavior."
      ),
    ],
    tech: ["Node.js", "mineflayer", "NVIDIA NIM API", "Reinforcement Learning"],
  },
  {
    id: "hellosocial",
    name: "HelloSocial",
    url: null,
    tier: 3,
    bullets: [
      b(
        "Plataforma de criação e agendamento de posts com IA — projeto na Paware que inspirou o HarpIA. Pipeline de geração de imagens com Flux Kontext Pro e DALL-E 3, agentes de copy e template. PIX via Mercado Pago (AguaQuality). Canva + Placid (HelloSocial/Paware). Pexels API para busca automática de imagens no HarpIA.",
        "AI-powered social media post creation and scheduling platform — project at Paware that inspired HarpIA. Image generation pipeline with Flux Kontext Pro and DALL-E 3, copy and template agents. PIX via Mercado Pago (AguaQuality). Canva + Placid (HelloSocial/Paware). Pexels API for automatic image search in HarpIA."
      ),
    ],
    tech: ["Python", "FastAPI", "Azure OpenAI", "Flux", "Canva API", "React"],
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
      "Automatizar a criação de conteúdo visual para marketing sem depender de designers humanos ou APIs pagas para cada output.",
      "Automate visual content creation for marketing without relying on human designers or paid APIs for every output."
    ),
    approach: b(
      "Arquitetura de pipeline com 7+ modelos de IA acessíveis por interface unificada. Agente GPT-4.1 com tool calling seleciona templates, busca imagens no Pexels e escreve copy automaticamente. Compositor local PIL para stack leve (sem APIs pagas quando não precisa).",
      "Pipeline architecture with 7+ AI models accessible through a unified interface. GPT-4.1 agent with tool calling selects templates, searches Pexels images, and writes copy automatically. Local PIL compositor for lightweight stack (no paid APIs when not needed)."
    ),
    results: [
      b("7+ modelos de IA integrados (imagem + vídeo + copy)", "7+ AI models integrated (image + video + copy)"),
      b("Pipeline agentic autônomo com até 10 iterações de raciocínio", "Autonomous agentic pipeline with up to 10 reasoning iterations"),
      b("Stack leve por padrão (SQLite + PIL local), fallback para APIs pagas", "Lightweight stack by default (SQLite + local PIL), fallback to paid APIs"),
      b("Backend swap: local para Azure Cosmos DB + Blob Storage", "Backend swap: local to Azure Cosmos DB + Blob Storage"),
      b("Pronto para cron com file-locking e recuperação de lotes travados", "Cron-ready with file-locking and stuck batch recovery"),
    ],
    keyFeatures: [
      b("Geração de imagens: DALL-E 3, Flux 1.1, Flux 2.0 Pro, Flux Kontext Pro, Nano Banana (Gemini)", "Image generation: DALL-E 3, Flux 1.1, Flux 2.0 Pro, Flux Kontext Pro, Nano Banana (Gemini)"),
      b("Geração de vídeo: Sora, Veo 3.1 (async polling)", "Video generation: Sora, Veo 3.1 (async polling)"),
      b("Agente GPT-4.1 com tool calling e schema enforcement", "GPT-4.1 agent with tool calling and schema enforcement"),
      b("Compositor PIL: 8 templates de layout, brand colors, badges", "PIL compositor: 8 layout templates, brand colors, badges"),
      b("APIs de design: Placid, Templated.io, Canva Connect (scaffolded)", "Design APIs: Placid, Templated.io, Canva Connect (scaffolded)"),
      b("6,930+ LOC de Python async, testes de segurança, zero hardcoded secrets", "6,930+ LOC async Python, security tests, zero hardcoded secrets"),
    ],
codeSnippets: [
{
language: "python",
title: b("Pipeline Agentic — Tool Calling", "Agentic Pipeline — Tool Calling"),
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
gallery: [
{ src: "/images/harpia-pipeline.png", alt: b("Pipeline de automação HarpIA", "HarpIA automation pipeline") },
{ src: "/images/hellosocial.png", alt: b("Interface HelloSocial", "HelloSocial interface") },
],
},
  "srf-system": {
    challenge: b(
      "Planejar operações de restauração florestal em larga escala envolve dezenas de variáveis: territórios, equipes, tarifas, cronogramas e dossiês executivos. O processo manual era lento e propenso a erros.",
      "Planning large-scale forest restoration operations involves dozens of variables: territories, crews, tariffs, schedules, and executive dossiers. The manual process was slow and error-prone."
    ),
    approach: b(
      "Motor de planejamento em Python que processa dados de entrada e gera dossiês completos automaticamente. Interface NiceGUI para visualização + CLI para automação. Testes unitários garantem integridade dos outputs.",
      "Python planning engine that processes input data and generates complete dossiers automatically. NiceGUI interface for visualization + CLI for automation. Unit tests ensure output integrity."
    ),
    results: [
      b("Geração automática de dossiês executivos completos", "Automatic generation of complete executive dossiers"),
      b("Cronogramas de atividades com alocação de equipes e territórios", "Activity schedules with crew and territory allocation"),
      b("Gerenciamento de tarifas e custos operacionais", "Tariff and operational cost management"),
      b("Interface NiceGUI + CLI para flexibilidade de uso", "NiceGUI + CLI interface for usage flexibility"),
      b("Suite de testes unitários para garantia de qualidade", "Unit test suite for quality assurance"),
    ],
    keyFeatures: [
      b("Motor de planejamento operacional com lógica de domínio complexa", "Operational planning engine with complex domain logic"),
      b("Exportação de dossiês em formato estruturado (openpyxl)", "Dossier export in structured format (openpyxl)"),
      b("Interface web NiceGUI + CLI Rich", "NiceGUI web interface + Rich CLI"),
      b("Arquitetura modular com separação clara de responsabilidades", "Modular architecture with clear separation of concerns"),
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
    console.rule("[bold green]SRF Planning Engine[/]")
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
  "flora-sensus": {
    challenge: b(
      "Inventário florestal em campo requer app mobile que funciona sem internet, sincroniza dados quando conectado, e detecta conflitos entre edições simultâneas. Nenhuma solução existente atendia as necessidades específicas.",
      "Forest inventory in the field requires a mobile app that works without internet, syncs data when connected, and detects conflicts between simultaneous edits. No existing solution met the specific needs."
    ),
    approach: b(
      "App Flutter offline-first com banco Drift/SQLite local e motor de sincronização custom. UUID remapping para conciliar IDs cliente-servidor. Rollback atômico em falhas parciais. Painel admin React para gestão centralizada.",
      "Flutter offline-first app with local Drift/SQLite database and custom sync engine. UUID remapping to reconcile client-server IDs. Atomic rollback on partial failures. React admin panel for centralized management."
    ),
    results: [
      b("~24K LOC — arquitetura e lógica de sync construídas do zero; código gerado com apoio de LLM (web) e revisado manualmente", "~24K LOC — architecture and sync logic built from scratch; code generated with LLM assistance (web) and manually reviewed"),
      b("Motor de sync com detecção de conflitos e rollback atômico", "Sync engine with conflict detection and atomic rollback"),
      b("Exportação XLSX/PDF com filtragem por usuário e data", "XLSX/PDF export with user and date filtering"),
      b("Modo alto contraste para uso em campo com sol direto", "High contrast mode for field use in direct sunlight"),
      b("Painel admin React com auth, fotos, relatórios e exportação", "React admin panel with auth, photos, reports, and export"),
    ],
    keyFeatures: [
      b("5-tier hierarchy: Propriedade > UT > Parcela > Planta > Foto", "5-tier hierarchy: Propriedade > UT > Parcela > Planta > Foto"),
      b("Sync: exponential backoff with jitter, auth retry wrapper, ngrok bypass", "Sync: exponential backoff with jitter, auth retry wrapper, ngrok bypass"),
      b("Design system 'Deep Forest Industrial' (332 LOC)", "'Deep Forest Industrial' design system (332 LOC)"),
      b("Backup/restore SQLite com padrão pending-restore-on-next-boot", "SQLite backup/restore with pending-restore-on-next-boot pattern"),
      b("Species lookup com busca accent-normalized a partir de XLSX", "Species lookup with accent-normalized search from XLSX"),
      b("Deploy scripts para Windows (PowerShell + BAT)", "Windows deployment scripts (PowerShell + BAT)"),
    ],
    codeSnippets: [
      {
        language: "dart",
        title: b("Motor de Sincronização — Sync Engine", "Sync Engine — Core Loop"),
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
    // Cascade remap through FK chain:
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
      "Usuários de Excel precisam manipular planilhas complexas mas não conhecem fórmulas avançadas. Conectar IA local a planilhas permite conversar com dados em linguagem natural.",
      "Excel users need to manipulate complex spreadsheets but don't know advanced formulas. Connecting local AI to spreadsheets enables conversing with data in natural language."
    ),
    approach: b(
      "App desktop Python com CustomTkinter e agente Ollama/qwen2.5. Comando ReAct: filtrar, ordenar, renomear abas, duplicar dados. Checkpoint automático antes de cada alteração com confirmação do usuário.",
      "Python desktop app with CustomTkinter and Ollama/qwen2.5 agent. ReAct commands: filter, sort, rename sheets, duplicate data. Auto-checkpoint before each change with user confirmation."
    ),
    results: [
      b("Design visual feito à mão com paleta pastel e mascote original (Fennec)", "Hand-crafted visual design with pastel palette and original mascot (Fennec)"),
      b("6+ integrações OAuth: Gmail, Teams, Calendar, Drive, Outlook, Trello", "6+ OAuth integrations: Gmail, Teams, Calendar, Drive, Outlook, Trello"),
      b("Instalador nativo Windows (Inno Setup) com PyInstaller", "Native Windows installer (Inno Setup) with PyInstaller"),
      b("Checkpoint automático e confirmação antes de modificações", "Auto-checkpoint and confirmation before modifications"),
      b("Agente ReAct com memória de contexto entre comandos", "ReAct agent with context memory between commands"),
    ],
    keyFeatures: [
      b("IA local via Ollama — sem custo de API, sem dados na nuvem", "Local AI via Ollama — no API cost, no cloud data"),
      b("xlwings / COM para manipulação avançada do Excel", "xlwings / COM for advanced Excel manipulation"),
      b("Interface bilíngue (PT/EN) com tema claro customizado", "Bilingual interface (PT/EN) with custom light theme"),
      b("Suite de smoke tests para validação de funcionalidades", "Smoke test suite for functionality validation"),
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
  inovesa: {
    challenge: b(
      "Empresa de engenharia florestal precisava de um site profissional que transmitisse credibilidade e sofisticação, com informações sobre serviços, equipe e ouvidoria.",
      "Forestry engineering company needed a professional website conveying credibility and sophistication, with service information, team, and ombudsman channel."
    ),
    approach: b(
      "React 19 + Motion + Lenis com design editorial/cinemático. Sistema de motion centralizado com springs e variantes reutilizáveis. Multi-página com transições, parallax em hero e galeria, formulários animados.",
      "React 19 + Motion + Lenis with editorial/cinematic design. Centralized motion system with reusable springs and variants. Multi-page with transitions, hero and gallery parallax, animated forms."
    ),
    results: [
      b("6 páginas completas com dados reais da empresa", "6 complete pages with real company data"),
      b("Sistema de motion reutilizável (7 variantes + 3 springs + 2 easings)", "Reusable motion system (7 variants + 3 springs + 2 easings)"),
      b("Ouvidoria com wizard multi-step e submit animado", "Ombudsman with multi-step wizard and animated submit"),
      b("Scroll suave Lenis sincronizado com Motion", "Lenis smooth scroll synced with Motion"),
      b("Custom cursor com física de spring e mix-blend-difference", "Custom cursor with spring physics and mix-blend-difference"),
    ],
    keyFeatures: [
      b("Parallax multi-camada com useScroll por seção", "Multi-layer parallax with per-section useScroll"),
      b("AnimatedText: reveal por palavras/linhas/caracteres com highlight", "AnimatedText: word/line/char reveal with highlight"),
      b("PageOverlay + AnimatePresence para transições de página", "PageOverlay + AnimatePresence for page transitions"),
      b("Tailwind v4 CSS-first com @theme customizado", "Tailwind v4 CSS-first with custom @theme"),
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
};

