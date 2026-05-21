import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useLang } from "../lib/LanguageContext";
import { useSounds } from "../lib/useSounds";
import { useDarkMode } from "../lib/useDarkMode";
import { useDyslexiaFont } from "../lib/useDyslexiaFont";
import { projects, caseStudies, skillGroups, personal } from "../data/content";
import { X, ChevronRight, Search, Globe, Volume2, VolumeX, Sun, Type } from "lucide-react";

type Bilingual = { pt: string; en: string };

function t(b: Bilingual | string, lang: "pt" | "en"): string {
  return typeof b === "string" ? b : b[lang];
}

type NavItem = { label: Bilingual | string; href: string; num: string; color?: string };

type SearchResult = {
  type: "project" | "page" | "skill" | "content";
  title: string;
  description: string;
  href: string;
  match: string;
};

const navItems: NavItem[] = [
  { label: { pt: "Início", en: "Home" }, href: "/", num: "01" },
  { label: { pt: "Sobre", en: "About" }, href: "/about", num: "02" },
  { label: { pt: "Experiência", en: "Experience" }, href: "/experience", num: "03" },
  { label: { pt: "Habilidades", en: "Skills" }, href: "/skills", num: "04" },
  { label: { pt: "Galeria", en: "Gallery" }, href: "/gallery", num: "05" },
  { label: { pt: "Certificações", en: "Certificates" }, href: "/certificates", num: "06" },
  { label: { pt: "Currículo", en: "Resume" }, href: "/cv", num: "07" },
  { label: { pt: "Contato", en: "Contact" }, href: "/contact", num: "08" },
];

const searchPages = [
  { title: { pt: "Início", en: "Home" }, href: "/", keywords: "home inicio portfolio isaac" },
  { title: { pt: "Sobre", en: "About" }, href: "/about", keywords: "about sobre bio" },
  { title: { pt: "Experiência", en: "Experience" }, href: "/experience", keywords: "experience experiencia paware supernerds" },
  { title: { pt: "Projetos", en: "Projects" }, href: "/projects", keywords: "projects projetos" },
  { title: { pt: "Habilidades", en: "Skills" }, href: "/skills", keywords: "skills habilidades stack" },
  { title: { pt: "Galeria", en: "Gallery" }, href: "/gallery", keywords: "gallery galeria imagens" },
  { title: { pt: "Certificações", en: "Certificates" }, href: "/certificates", keywords: "certificates certificacoes cisco" },
  { title: { pt: "Currículo", en: "Resume" }, href: "/cv", keywords: "cv resume curriculo" },
  { title: { pt: "Playground", en: "Playground" }, href: "/playground", keywords: "playground demos" },
  { title: { pt: "Contato", en: "Contact" }, href: "/contact", keywords: "contact contato email" },
];

function fuzzyMatch(query: string, text: string): boolean {
  const q = query.toLowerCase();
  const txt = text.toLowerCase();
  if (txt.includes(q)) return true;
  let qi = 0;
  for (let i = 0; i < txt.length && qi < q.length; i++) {
    if (txt[i] === q[qi]) qi++;
  }
  return qi === q.length;
}

function highlightMatch(text: string, query: string): string {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return text.slice(0, idx) + "\u200b" + text.slice(idx, idx + query.length) + "\u200b" + text.slice(idx + query.length);
}

export function SidebarNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, toggle: toggleLang } = useLang();
  const { enabled: soundsEnabled, toggleSounds } = useSounds();
  const { isEnabled: darkEnabled, toggle: toggleDark } = useDarkMode();
  const { isEnabled: dyslexiaEnabled, toggle: toggleDyslexia } = useDyslexiaFont();
  const [navExpanded, setNavExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const projectItems: NavItem[] = projects
    .filter((p) => p.hasCaseStudy || p.featured)
    .map((p) => ({
      label: { pt: p.title, en: p.title },
      href: p.hasCaseStudy && p.caseStudySlug ? `/projects/${p.caseStudySlug}` : "/projects",
      num: p.year.slice(-2),
      color: p.color,
    }));

  useEffect(() => {
    if (open && searchRef.current) {
      const timer = setTimeout(() => searchRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
    setQuery("");
    setResults([]);
    setSelectedIndex(0);
  }, [open]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const q = query.trim();
    const found: SearchResult[] = [];

    searchPages.forEach((page) => {
      const title = t(page.title, lang);
      if (fuzzyMatch(q, title) || fuzzyMatch(q, page.keywords)) {
        found.push({ type: "page", title, description: page.href, href: page.href, match: highlightMatch(title, q) });
      }
    });

    projects.forEach((proj) => {
      const title = proj.title;
      const desc = t(proj.description, lang);
      const cat = t(proj.category, lang);
      if (fuzzyMatch(q, title) || fuzzyMatch(q, desc) || fuzzyMatch(q, cat) || proj.tech.some((tech) => fuzzyMatch(q, tech))) {
        found.push({
          type: "project",
          title,
          description: cat,
          href: proj.hasCaseStudy && proj.caseStudySlug ? `/projects/${proj.caseStudySlug}` : "/projects",
          match: highlightMatch(title, q),
        });
      }
    });

    skillGroups.forEach((group) => {
      const label = t(group.label, lang);
      const proof = t(group.storyProof, lang);
      if (fuzzyMatch(q, label) || fuzzyMatch(q, proof) || group.skills.some((s) => fuzzyMatch(q, typeof s === "string" ? s : s[lang]))) {
        found.push({
          type: "skill",
          title: typeof group.label === "string" ? group.label : group.label[lang],
          description: group.skills.slice(0, 4).join(", "),
          href: "/skills",
          match: highlightMatch(label, q),
        });
      }
    });

    Object.entries(caseStudies).forEach(([slug, cs]) => {
      const challenge = t(cs.challenge, lang);
      const approach = t(cs.approach, lang);
      if (fuzzyMatch(q, challenge) || fuzzyMatch(q, approach)) {
        const proj = projects.find((p) => p.caseStudySlug === slug);
        found.push({
          type: "content",
          title: proj?.title ?? slug,
          description: challenge.slice(0, 80) + "...",
          href: `/projects/${slug}`,
          match: highlightMatch(proj?.title ?? slug, q),
        });
      }
    });

    setResults(found.slice(0, 12));
    setSelectedIndex(0);
  }, [query, lang]);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      navigate(result.href);
      onClose();
    },
    [navigate, onClose]
  );

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (query) {
          setQuery("");
          searchRef.current?.focus();
        } else {
          onClose();
        }
        return;
      }
      if (searchFocused && results.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((i) => Math.max(i - 1, 0));
        }
        if (e.key === "Enter" && results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, query, searchFocused, results, selectedIndex, handleSelect, onClose]);

  const typeIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "project": return "◆";
      case "page": return "◇";
      case "skill": return "▸";
      case "content": return "•";
    }
  };

  const typeLabel = (type: SearchResult["type"]) => {
    switch (type) {
      case "project": return lang === "pt" ? "Proj" : "Proj";
      case "page": return lang === "pt" ? "Pág" : "Page";
      case "skill": return lang === "pt" ? "Skill" : "Skill";
      case "content": return lang === "pt" ? "Cnte" : "Cont";
    }
  };

  const showingResults = query.trim().length > 0;

  const renderNavItem = (item: NavItem, isActive: boolean) => (
    <Link
      key={item.href + item.num}
      to={item.href}
      onClick={onClose}
      className="flex items-center gap-2 px-5 py-1 no-underline"
      style={{
        color: isActive ? "var(--color-accent)" : "var(--color-text-3)",
        backgroundColor: isActive ? "var(--color-accent-04)" : "transparent",
        textDecoration: "none",
        borderLeft: isActive ? "2px solid var(--color-accent)" : "2px solid transparent",
        paddingLeft: "18px",
        transition: "all 0.15s",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
          (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent-03)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.color = "var(--color-text-3)";
          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
        }
      }}
    >
      <span
        className="text-[9px] tracking-[0.1em]"
        style={{ fontVariantNumeric: "tabular-nums", opacity: 0.5, width: "18px" }}
      >
        {item.num}
      </span>
      <span className="truncate">{t(item.label, lang)}</span>
      {"color" in item && item.color && (
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0 ml-auto"
          style={{ backgroundColor: item.color }}
        />
      )}
    </Link>
  );

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[150]"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(2px)",
          }}
          onClick={onClose}
        />
      )}

      <div
        className="fixed top-0 left-0 h-full z-[151] overflow-y-auto border-r flex flex-col"
        style={{
          width: "360px",
          backgroundColor: "var(--color-bg-card)",
          borderColor: "var(--color-border)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: open ? "4px 0 24px rgba(0,0,0,0.15)" : "none",
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b shrink-0"
          style={{ borderColor: "var(--color-border)" }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--color-text-3)" }}>
            {lang === "pt" ? "Índice" : "Index"}
          </span>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "var(--color-text-3)", cursor: "pointer" }}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-3 px-5 py-2.5 border-b shrink-0"
          style={{ borderColor: "var(--color-border)" }}
        >
          <Search className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-text-3)" }} />
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder={lang === "pt" ? "Buscar..." : "Search..."}
            className="flex-1 bg-transparent outline-none text-xs"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-mono)" }}
          />
          {query && (
            <button
              onClick={() => { setQuery(""); searchRef.current?.focus(); }}
              style={{ background: "none", border: "none", color: "var(--color-text-3)", cursor: "pointer", lineHeight: 1, fontSize: "14px" }}
            >
              ×
            </button>
          )}
          {!query && (
            <kbd
              className="text-[9px] px-1.5 py-0.5 border"
              style={{ color: "var(--color-text-3)", borderColor: "var(--color-border)", borderRadius: "3px" }}
            >
              ⌘K
            </kbd>
          )}
        </div>

        {/* Content: search results OR nav */}
        <div className="flex-1 overflow-y-auto">
          {showingResults ? (
            <div className="py-1">
              {results.length > 0 ? (
                results.map((result, i) => (
                  <button
                    key={`${result.type}-${result.href}-${i}`}
                    onClick={() => handleSelect(result)}
                    className="w-full flex items-center gap-2.5 px-5 py-2 text-left"
                    style={{
                      backgroundColor: i === selectedIndex ? "var(--color-accent-08)" : "transparent",
                      transition: "background-color 0.1s",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setSelectedIndex(i)}
                  >
                    <span className="text-[10px] shrink-0" style={{ color: "var(--color-accent)", width: "12px" }}>
                      {typeIcon(result.type)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs truncate" style={{ color: "var(--color-text)" }}>
                        {result.match.split("\u200b")[0]}
                        {result.match.includes("\u200b") && (
                          <mark style={{ backgroundColor: "var(--color-accent-15)", color: "inherit", padding: "0 1px" }}>
                            {result.match.split("\u200b")[1]}
                          </mark>
                        )}
                        {result.match.split("\u200b")[2]}
                      </div>
                      <div className="text-[10px] truncate" style={{ color: "var(--color-text-3)" }}>
                        {result.description}
                      </div>
                    </div>
                    <span
                      className="text-[8px] uppercase tracking-wider shrink-0"
                      style={{ color: "var(--color-text-3)", opacity: 0.6 }}
                    >
                      {typeLabel(result.type)}
                    </span>
                  </button>
                ))
              ) : (
                <div className="py-8 text-center">
                  <p className="text-xs" style={{ color: "var(--color-text-3)" }}>
                    {lang === "pt" ? "Nenhum resultado para" : "No results for"} "{query}"
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="py-3">
              {/* Projects — always visible, no chevron */}
              <div className="mb-1">
                <span
                  className="block px-5 py-1.5 text-[10px] tracking-[0.15em] uppercase"
                  style={{ color: "var(--color-text-2)" }}
                >
                  {lang === "pt" ? "Projetos" : "Projects"}
                </span>
                <div className="pb-2">
                  {projectItems.map((item) => renderNavItem(item, location.pathname === item.href))}
                </div>
              </div>

              {/* Navigation — collapsible */}
              <div>
                <button
                  onClick={() => setNavExpanded((v) => !v)}
                  className="w-full flex items-center gap-2 px-5 py-1.5 text-left"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <ChevronRight
                    className="w-3 h-3 shrink-0 transition-transform duration-200"
                    style={{
                      color: "var(--color-text-3)",
                      transform: navExpanded ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: "var(--color-text-2)" }}
                  >
                    {lang === "pt" ? "Navegação" : "Navigation"}
                  </span>
                </button>

                {navExpanded && (
                  <div className="pb-2">
                    {navItems.map((item) => renderNavItem(item, location.pathname === item.href))}
                  </div>
                )}
              </div>

              {/* All projects link */}
              <div className="px-5 py-2 border-t mt-2" style={{ borderColor: "var(--color-border)" }}>
                <Link
                  to="/projects"
                  onClick={onClose}
                  className="flex items-center gap-2 text-[10px] tracking-[0.12em] uppercase no-underline"
                  style={{ color: "var(--color-text-3)", textDecoration: "none" }}
                >
                  {lang === "pt" ? "Todos os Projetos →" : "All Projects →"}
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer: toggles + contact */}
        <div
          className="shrink-0 border-t px-5 py-3 flex flex-col gap-3"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-[10px] tracking-[0.08em] uppercase"
              style={{ color: "var(--color-text-3)", background: "none", border: "1px solid var(--color-border)", padding: "2px 8px", borderRadius: "4px", cursor: "pointer" }}
            >
              <Globe className="w-2.5 h-2.5" />
              {lang.toUpperCase()}
            </button>

            <button
              onClick={toggleSounds}
              className="flex items-center gap-1 text-[10px] tracking-[0.08em] uppercase"
              style={{ color: "var(--color-text-3)", background: "none", border: "1px solid var(--color-border)", padding: "2px 8px", borderRadius: "4px", cursor: "pointer" }}
            >
              {soundsEnabled ? <Volume2 className="w-2.5 h-2.5" /> : <VolumeX className="w-2.5 h-2.5" />}
              {soundsEnabled ? "ON" : "OFF"}
            </button>

            <button
              onClick={toggleDark}
              className="flex items-center gap-1 text-[10px]"
              style={{ color: "var(--color-text-3)", background: "none", border: "1px solid var(--color-border)", padding: "2px 8px", borderRadius: "4px", cursor: "pointer" }}
              title={darkEnabled
                ? (lang === "pt" ? "Modo claro" : "Light mode")
                : (lang === "pt" ? "Modo escuro" : "Dark mode")
              }
            >
              <Sun className="w-2.5 h-2.5" />
            </button>

            <button
              onClick={toggleDyslexia}
              className="flex items-center gap-1 text-[10px]"
              style={{ color: "var(--color-text-3)", background: "none", border: "1px solid var(--color-border)", padding: "2px 8px", borderRadius: "4px", cursor: "pointer" }}
              title={lang === "pt" ? "Fonte dislexia" : "Dyslexia font"}
            >
              <Type className="w-2.5 h-2.5" />
              {dyslexiaEnabled ? "D✓" : "D"}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[9px] tracking-[0.08em]" style={{ color: "var(--color-text-3)" }} data-selectable>
              {personal.email}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] uppercase tracking-[0.1em] no-underline"
                style={{ color: "var(--color-text-3)" }}
              >
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] uppercase tracking-[0.1em] no-underline"
                style={{ color: "var(--color-text-3)" }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
