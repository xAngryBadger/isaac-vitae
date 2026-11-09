import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import { personal } from "../data/content";
import { DyslexiaToggle } from "./DyslexiaToggle";
import ThemeSwitcher from "./ThemeSwitcher";

const BASE_PATH = "/isaac-vitae";

const menuLinks = [
  { label: { pt: "Início", en: "Home" }, href: `${BASE_PATH}/`, num: "01" },
  { label: { pt: "Sobre", en: "About" }, href: `${BASE_PATH}/about`, num: "02" },
  { label: { pt: "Experiência", en: "Experience" }, href: `${BASE_PATH}/experience`, num: "03" },
  { label: { pt: "Projetos", en: "Projects" }, href: `${BASE_PATH}/projects`, num: "04" },
  { label: { pt: "Habilidades", en: "Skills" }, href: `${BASE_PATH}/skills`, num: "05" },
  { label: { pt: "Galeria", en: "Gallery" }, href: `${BASE_PATH}/gallery`, num: "06" },
  { label: { pt: "Certificações", en: "Certificates" }, href: `${BASE_PATH}/certificates`, num: "07" },
  { label: { pt: "Currículo", en: "Resume" }, href: `${BASE_PATH}/cv`, num: "08" },
  { label: { pt: "Playground", en: "Playground" }, href: `${BASE_PATH}/playground`, num: "09" },
  { label: { pt: "Disclosures", en: "Disclosures" }, href: `${BASE_PATH}/security`, num: "10", muted: true },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const menuBackdropRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const { t, lang, toggle } = useLang();
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
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      if (menuBackdropRef.current) {
        menuBackdropRef.current.classList.add("clip-reveal-up");
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (menuBackdropRef.current) {
        menuBackdropRef.current.classList.remove("clip-reveal-up");
      }
      hamburgerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500`}
        style={{
          backgroundColor: scrolled ? "var(--color-bg-deep)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="primary-menu"
              aria-label={menuOpen ? t({ pt: "Fechar menu", en: "Close menu" }) : t({ pt: "Abrir menu", en: "Open menu" })}
              className="flex items-center gap-3 p-2 custom-cursor-target"
              style={{ background: "none", border: "none" }}
            >
              <span
                className="hidden lg:inline font-sans text-xs tracking-[0.15em] uppercase"
                style={{ color: "var(--color-text-3)", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }}
              >
                Menu
              </span>
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{ backgroundColor: "var(--color-text)", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }}
              />
              <span
                className="block w-4 h-px transition-all duration-300"
                style={{ backgroundColor: "var(--color-text)", opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{ backgroundColor: "var(--color-text)", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }}
              />
            </button>

            <Link
              to={`${BASE_PATH}/`}
              className="font-sans text-sm tracking-[0.2em] uppercase custom-cursor-target"
              style={{ color: "var(--color-text)", textDecoration: "none" }}
            >
              Isaac
              <span style={{ color: "var(--color-text-3)" }}>.</span>
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <div
        id="primary-menu"
        ref={menuBackdropRef}
        className="fixed inset-0 z-[99] flex flex-col justify-center px-10 lg:px-20"
        style={{
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "visibility 0s " + (menuOpen ? "0s" : "0.25s"),
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMenuOpen(false);
        }}
        role="dialog"
        aria-modal={menuOpen}
        aria-label={t({ pt: "Menu principal", en: "Primary menu" })}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--color-bg-deep)",
            opacity: 0,
            transition: "opacity 0s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--color-bg)",
            clipPath: "inset(0 0 100% 0)",
            transition: "clip-path 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        <nav className="relative z-10 flex flex-col gap-4 lg:gap-6">
          {menuLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              tabIndex={menuOpen ? 0 : -1}
              className="text-left custom-cursor-target group"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--color-text)",
                background: "none",
                border: "none",
                textDecoration: "none",
                display: "block",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(100%)",
                transition: `opacity 0.25s var(--ease-project) ${0.02 * i + 0.05}s, transform 0.25s var(--ease-project) ${0.02 * i + 0.05}s`,
              }}
            >
              <span
                className="font-mono text-xs tracking-[0.15em] mr-4"
                style={{ color: "var(--color-text-3)", fontVariantNumeric: "tabular-nums" }}
              >
                {link.num} —
              </span>
              {t(link.label)}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-10 left-10 lg:left-20 flex items-center gap-6">
          <span
            className="font-mono text-xs"
            style={{ color: "var(--color-text-3)", letterSpacing: "0.15em" }}
          >
            {personal.email}
          </span>
          <span className="w-px h-3" style={{ backgroundColor: "var(--color-border-2)" }} />
          <button
            onClick={toggle}
            tabIndex={menuOpen ? 0 : -1}
            className="font-mono text-xs tracking-[0.1em] uppercase custom-cursor-target flex items-center gap-1"
            style={{ color: "var(--color-text-3)", background: "none", border: "none" }}
          >
            <Globe className="w-3 h-3" />
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <span className="w-px h-3" style={{ backgroundColor: "var(--color-border-2)" }} />
          <DyslexiaToggle />
        </div>
      </div>
    </>
  );
}
