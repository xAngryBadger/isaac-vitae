// ─── Dados do portfólio de Isaac Nathan ───────────────────────────
export const personal = {
  name: "Isaac Nathan",
  fullName: "Isaac Nathan da Silva Barbosa",
  title: "Full-Stack Developer",
  subtitle: "Engenharia de Computação · IA · Cloud · IoT",
  bio: "Desenvolvedor Full-Stack com foco em sistemas escaláveis, automação e inteligência artificial. Construo desde pipelines de visão computacional até integrações de pagamento e dispositivos IoT.",
  email: "isaacnathandasilva@gmail.com",
  phone: "+55 (31) 99441-7786",
  location: "Mariana, MG — Brasil",
  linkedin: "https://www.linkedin.com/in/isaac-nathan-da-silva-barbosa-815b212ab/",
  github: "https://github.com/xAngryBadger",
  portfolio: "https://nathancurriculumvitae.neocities.org",
};

export const experiences = [
  {
    company: "Paware Softwares",
    role: "Desenvolvedor Full-Stack",
    period: "Out 2025 — Presente",
    current: true,
    highlights: [
      "Migração de bases de dados complexas para Azure Cloud para a Meritage Homes (EUA), assegurando integridade e segurança de dados.",
      "Implementação de ambientes Docker para testes de funcionalidade e consistência em agentes de IA conversacionais.",
      "Refatoração e evolução da IA do HelloSocial — agentes de criação de anúncios com Flux, DALL-E 3 e APIs Placid/Canva.",
    ],
  },
  {
    company: "Compasso Engenharia",
    role: "Entrevistador de Campo — Censitário",
    period: "Jan 2024 — Abr 2024",
    current: false,
    highlights: [
      "Coleta e análise de dados demográficos em campo.",
      "Verificação de consistência e veracidade das informações para relatórios técnicos.",
    ],
  },
];

export const education = [
  {
    degree: "Engenharia de Computação",
    institution: "Cruzeiro do Sul",
    period: "2024 — 2029",
    status: "5º Semestre — Cursando",
  },
  {
    degree: "Técnico em ADS",
    institution: "Senac EAD",
    period: "2023",
    status: "Trancado",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["React 18", "TypeScript", "JavaScript", "Tailwind CSS", "Flutter", "Vite"],
  },
  {
    label: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express", "Java", "SQL"],
  },
  {
    label: "Cloud & Infra",
    skills: ["Azure", "Azure Cosmos DB", "Docker", "Git / GitHub"],
  },
  {
    label: "IA & Data",
    skills: ["PyTorch", "DeepForest", "Azure OpenAI", "DALL-E 3", "Flux", "scikit-learn", "OpenCV"],
  },
  {
    label: "Integrações",
    skills: ["Mercado Pago PIX", "Canva API", "Placid API", "Templated", "PocketBase"],
  },
  {
    label: "Outros",
    skills: ["Cibersegurança", "Metodologias Ágeis", "Testes de API", "Inglês Fluente"],
  },
];

export const projects = [
  {
    id: "aguaquality",
    title: "AguaQuality",
    year: "2026",
    category: "IoT · Pagamentos · Full-Stack",
    description:
      "Sistema de gestão de posto de água com venda de créditos, controle remoto de válvula e pagamentos via PIX. Integração com relé WiFi Refoss R11 e geração de QR Code Mercado Pago.",
    tech: ["Python", "FastAPI", "Azure Cosmos DB", "React", "TypeScript", "Docker", "PIX / Mercado Pago"],
    color: "#1a3a4a",
    image: "/images/aguaquality.png",
    featured: true,
    inProgress: false,
  },
  {
    id: "hellosocial",
    title: "Hello Social",
    year: "2026",
    category: "IA · Social Media · Full-Stack",
    description:
      "Plataforma de criação e agendamento de posts com IA. Pipeline de geração de imagens com Flux Kontext Pro e DALL-E 3, integração com Canva, Placid e Templated. Agentes que definem copy, headline e template a partir de briefing.",
    tech: ["Python", "FastAPI", "Azure OpenAI", "Flux", "Canva API", "React", "TypeScript"],
    color: "#2a1a3a",
    image: "/images/hellosocial.png",
    featured: true,
    inProgress: false,
  },
  {
    id: "fennec",
    title: "Fennec Excel",
    year: "2025",
    category: "IA Local · Desktop · Python",
    description:
      "App desktop que conecta planilhas Excel a um agente de IA local (Ollama/qwen2.5). Converse com sua planilha em linguagem natural — filtre, ordene, renomeie abas, duplique dados — com checkpoint automático e confirmação antes de qualquer alteração.",
    tech: ["Python", "CustomTkinter", "Ollama", "openpyxl", "win32com", "ReAct"],
    color: "#3a2a0a",
    image: "/images/fennec.png",
    featured: true,
    inProgress: true,
  },
  {
    id: "meritage",
    title: "Meritage Homes",
    year: "2025",
    category: "Cloud · Banco de Dados · Migração",
    description:
      "Migração e otimização de banco de dados para a Meritage Homes (EUA) via Azure Cloud. Projeto de integridade de dados, reestruturação de schemas e garantia de segurança em ambiente de produção.",
    tech: ["Azure", "Azure Cosmos DB", "SQL", "Python", "Docker"],
    color: "#1a2a3a",
    image: "/images/meritage.png",
    featured: false,
    inProgress: false,
  },
  {
    id: "florasensus",
    title: "Flora Sensus",
    year: "2026",
    category: "Mobile · Offline-First · Flutter",
    description:
      "App mobile para inventário florestal offline-first. Sincronização via PocketBase, detecção de conflitos, exportação XLSX/PDF e modo alto contraste para uso em campo.",
    tech: ["Flutter", "Dart", "Drift / SQLite", "PocketBase", "Provider", "Workmanager"],
    color: "#1a3a1e",
    image: null,
    featured: false,
    inProgress: false,
  },
  {
    id: "forestai",
    title: "ForestAI",
    year: "2025",
    category: "IA · Visão Computacional · PyTorch",
    description:
      "Detecção e classificação de espécies florestais com Deep Learning. Pipeline completo: treinamento com DeepForest, divisão estratificada de dados, validação com bounding boxes e inferência em tempo real.",
    tech: ["Python", "PyTorch", "DeepForest", "OpenCV", "scikit-learn", "TensorBoard"],
    color: "#2a301a",
    image: null,
    featured: false,
    inProgress: false,
  },
];

export const courses = [
  { name: "Networking Basics", issuer: "Cisco Networking Academy", hours: "120h" },
  { name: "Introdução à Cibersegurança", issuer: "Cisco Networking Academy", hours: "" },
  { name: "Segurança em TI", issuer: "Fundação Bradesco", hours: "" },
  { name: "Inglês Fluente", issuer: "KUMON", hours: "3 anos" },
];
