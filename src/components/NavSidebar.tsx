import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Volume2, VolumeX } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import { useSounds } from "../lib/useSounds";
import { personal } from "../data/content";
import { DyslexiaToggle } from "./DyslexiaToggle";

interface NavSection {
  label: { pt: string; en: string };
  items: NavItem[];
  accent?: boolean;
}

interface NavItem {
  label: { pt: string; en: string };
  href: string;
  num: string;
}

const navSections: NavSection[] = [
  {
    label: { pt: "TRABALHO", en: "WORK" },
    items: [
      { label: { pt: "Início", en: "Home" }, href: "/", num: "01" },
      { label: { pt: "Sobre", en: "About" }, href: "/about", num: "02" },
      { label: { pt: "Experiência", en: "Experience" }, href: "/experience", num: "03" },
      { label: { pt: "Habilidades", en: "Skills" }, href: "/skills", num: "04" },
      { label: { pt: "Currículo", en: "Resume" }, href: "/cv", num: "05" },
    ],
  },
  {
    label: { pt: "VITRINE", en: "SHOWCASE" },
    items: [
      { label: { pt: "Projetos", en: "Projects" }, href: "/projects", num: "06" },
      { label: { pt: "Certificações", en: "Certificates" }, href: "/certificates", num: "07" },
      // { label: { pt: "Galeria", en: "Gallery" }, href: "/gallery", num: "08" },
      // { label: { pt: "Playground", en: "Playground" }, href: "/playground", num: "09" },
    ],
  },
  {
    label: { pt: "SEGURANÇA", en: "SECURITY" },
    items: [
      { label: { pt: "Segurança", en: "Security" }, href: "/security", num: "09" },
    ],
    accent: true,
  },
];

export default function NavSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const { t, lang, toggle } = useLang();
  const { enabled: soundsEnabled, playMenuOpen, playMenuClose, toggleSounds } = useSounds();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      if (progressRef.current) {
        const h = document.documentElement;
        const scrollable = h.scrollHeight - h.clientHeight;
        const pct = scrollable > 0 ? h.scrollTop / scrollable : 0;
        progressRef.current.style.transform = `scaleX(${pct})`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (sidebarOpen) {
      playMenuOpen();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      if (backdropRef.current) {
        backdropRef.current.classList.add("sidebar-backdrop-visible");
      }
      if (sidebarRef.current) {
        sidebarRef.current.classList.add("sidebar-open");
      }

      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      lenis?.stop();
    } else {
      playMenuClose();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (backdropRef.current) {
        backdropRef.current.classList.remove("sidebar-backdrop-visible");
      }
      if (sidebarRef.current) {
        sidebarRef.current.classList.remove("sidebar-open");
      }

      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      lenis?.start();
      hamburgerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [sidebarOpen, playMenuOpen, playMenuClose]);

  useEffect(() => {
    if (!sidebarOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sidebarOpen]);

  const isActive = (href: string) => location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 lg:hidden`}
        style={{
          backgroundColor: scrolled ? "var(--color-bg-deep)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              ref={hamburgerRef}
              onClick={() => setSidebarOpen((v) => !v)}
              aria-expanded={sidebarOpen}
              aria-controls="sidebar-menu"
              aria-label={sidebarOpen ? t({ pt: "Fechar menu", en: "Close menu" }) : t({ pt: "Abrir menu", en: "Open menu" })}
              className="flex items-center gap-3 p-2 custom-cursor-target"
              style={{ background: "none", border: "none" }}
            >
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{ backgroundColor: "var(--color-text)", transform: sidebarOpen ? "translateY(6px) rotate(45deg)" : "none" }}
              />
              <span
                className="block w-4 h-px transition-all duration-300"
                style={{ backgroundColor: "var(--color-text)", opacity: sidebarOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{ backgroundColor: "var(--color-text)", transform: sidebarOpen ? "translateY(-6px) rotate(-45deg)" : "none" }}
              />
            </button>

            <Link
              to="/"
              className="font-sans text-sm tracking-[0.2em] uppercase custom-cursor-target"
              style={{ color: "var(--color-text)", textDecoration: "none" }}
            >
              Isaac
            </Link>
          </div>
        </div>
      </header>

      <aside
        id="sidebar-menu"
        ref={sidebarRef}
        className="fixed top-0 left-0 z-[99] h-screen w-[300px] max-w-[90vw] flex flex-col hidden lg:flex"
        style={{
          backgroundColor: "var(--color-bg-deep)",
          borderRight: "1px solid var(--color-border)",
          transform: "translateX(0)",
          transition: "transform 0.5s var(--ease-spring-soft)",
        }}
        role="navigation"
        aria-label={t({ pt: "Menu principal", en: "Primary menu" })}
      >
        <div className="flex-1 flex flex-col overflow-y-auto py-12 px-8 lg:px-10">
          <div className="flex flex-col gap-14">
            {navSections.map((section) => (
              <div key={section.label.pt} className="flex flex-col gap-4">
                <span
                  className="font-sans text-[0.65rem] tracking-[0.2em] uppercase"
                  style={{
                    color: section.accent ? "var(--color-accent)" : "var(--color-text-3)",
                    letterSpacing: "0.2em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {t(section.label)}
                </span>
                <nav className="flex flex-col gap-2" role="menu">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      role="menuitem"
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="flex items-center gap-3 group custom-cursor-target"
                      style={{
                        color: isActive(item.href) ? "var(--color-accent)" : "var(--color-text)",
                        textDecoration: "none",
                        padding: "0.5rem 0",
                        borderRadius: "4px",
                        transition: "color 0.3s var(--ease-project), background-color 0.3s var(--ease-project)",
                        fontFamily: "var(--font-menu)",
                        fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(item.href)) {
                          e.currentTarget.style.color = "var(--color-accent)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href)) {
                          e.currentTarget.style.color = "var(--color-text)";
                        }
                      }}
                    >
                      <span
                        className="font-mono text-xs tracking-[0.15em] shrink-0"
                        style={{
                          color: isActive(item.href) ? "var(--color-accent)" : "var(--color-text-3)",
                          fontVariantNumeric: "tabular-nums",
                          opacity: 0.7,
                          transition: "opacity 0.3s var(--ease-project), color 0.3s var(--ease-project)",
                        }}
                      >
                        {item.num} —
                      </span>
                      <span style={{ transition: "color 0.3s var(--ease-project)" }}>{t(item.label)}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-8 pb-10 px-8 lg:px-10" style={{ borderColor: "var(--color-border)", marginTop: "auto" }}>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="font-mono text-xs tracking-[0.15em] custom-cursor-target flex items-center gap-2"
              style={{ color: "var(--color-text-3)", textDecoration: "none", transition: "color 0.3s var(--ease-project)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-3)"; }}
            >
              <span style={{ opacity: 0.6 }}>{personal.email}</span>
            </a>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={toggle}
                className="font-mono text-xs tracking-[0.1em] uppercase custom-cursor-target flex items-center gap-1"
                style={{ color: "var(--color-text-3)", background: "none", border: "none", transition: "color 0.3s var(--ease-project)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-3)"; }}
              >
                <Globe className="w-3 h-3" />
                {lang === "pt" ? "EN" : "PT"}
              </button>
              <DyslexiaToggle />
              <button
                onClick={toggleSounds}
                className="font-mono text-xs tracking-[0.1em] uppercase custom-cursor-target flex items-center gap-1"
                style={{ color: "var(--color-text-3)", background: "none", border: "none", transition: "color 0.3s var(--ease-project)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-3)"; }}
              >
                {soundsEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div
        ref={backdropRef}
        className="fixed inset-0 z-[98] lg:hidden opacity-0 pointer-events-none transition-opacity duration-500"
        style={{ backgroundColor: "rgba(24, 24, 37, 0.8)", backdropFilter: "blur(4px)" }}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}