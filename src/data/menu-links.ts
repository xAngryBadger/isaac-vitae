import type { Bilingual } from "../lib/LanguageContext";

const b = (pt: string, en: string): Bilingual => ({ pt, en });

export const menuLinks = [
  { label: b("Início", "Home"), href: "/", num: "01" },
  { label: b("Sobre", "About"), href: "/about", num: "02" },
  { label: b("Experiência", "Experience"), href: "/experience", num: "03" },
  { label: b("Projetos", "Projects"), href: "/projects", num: "04" },
  { label: b("Habilidades", "Skills"), href: "/skills", num: "05" },
  { label: b("Galeria", "Gallery"), href: "/gallery", num: "06" },
  { label: b("Certificações", "Certificates"), href: "/certificates", num: "07" },
  { label: b("Contato", "Contact"), href: "/contact", num: "08" },
  { label: b("Playground", "Playground"), href: "/playground", num: "09" },
];
