import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import { personal } from "../data/content";
import { DyslexiaToggle } from "./DyslexiaToggle";
import ThemeSwitcher from "./ThemeSwitcher";

const menuLinks = [
  { label: { pt: "Início", en: "Home" }, href: "/", num: "01" },
  { label: { pt: "Sobre", en: "About" }, href: "/about", num: "02" },
  { label: { pt: "Experiência", en: "Experience" }, href: "/experience", num: "03" },
  { label: { pt: "Projetos", en: "Projects" }, href: "/projects", num: "04" },
  { label: { pt: "Habilidades", en: "Skills" }, href: "/skills", num: "05" },
  // Galeria desativada temporariamente (pedido do usuário) — reativar junto com a rota em App.tsx
  // { label: { pt: "Galeria", en: "Gallery" }, href: "/gallery", num: "06" },
  { label: { pt: "Certificações", en: "Certificates" }, href: "/certificates", num: "06" },
  { label: { pt: "Currículo", en: "Resume" }, href: "/cv", num: "07" },
  { label: { pt: "Contato", en: "Contact" }, href: "/contact", num: "08" },
  { label: { pt: "Playground", en: "Playground" }, href: "/playground", num: "09" },
  { label: { pt: "Disclosures", en: "Disclosures" }, href: "/security", num: "10", muted: true },
];

// links principais visíveis em desktop (lg+)
const primaryLinks = ["/", "/about", "/experience", "/projects", "/skills", "/contact"];

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
      if (menuBackdropRef.current) menuBackdropRef.current.classList.add("clip-reveal-up");
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (menuBackdropRef.current) menuBackdropRef.current.classList.remove("clip-reveal-up");
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

  const desktopLinks = menuLinks.filter((l) => primaryLinks.includes(l.href));
  const isActive = (href: string) => location.pathname === href || location.pathname === href.replace(/\/$/, "");

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />

      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          backgroundColor: scrolled || menuOpen ? "var(--color-bg-deep)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* esquerda: hamburger (mobile) / logo */}
            <div className="flex items-center gap-6">
              <button
                ref={hamburgerRef}
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="primary-menu"
                aria-label={menuOpen ? t({ pt: "Fechar menu", en: "Close menu" }) : t({ pt: "Abrir menu", en: "Open menu" })}
                className="lg:hidden flex items-center p-2 custom-cursor-target"
                style={{ background: "none", border: "none", color: "var(--color-text)" }}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <Link
                to="/"
                className="font-sans text-sm tracking-[0.2em] uppercase custom-cursor-target"
                style={{ color: "var(--color-text)", textDecoration: "none" }}
              >
                Isaac
                <span style={{ color: "var(--color-text-3)" }}>.</span>
              </Link>
            </div>

            {/* centro: nav desktop */}
            <nav className="hidden lg:flex items-center gap-7">
              {desktopLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase custom-cursor-target relative"
                  style={{
                    color: isActive(link.href) ? "var(--color-accent)" : "var(--color-text-2)",
                    textDecoration: "none",
                    transition: "color 0.2s var(--ease-quart-out)",
                  }}
                >
                  {t(link.label)}
                  {isActive(link.href) && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* direita: controles */}
            <div className="flex items-center gap-3">
              <ThemeSwitcher />
              <span className="w-px h-4 hidden sm:block" style={{ backgroundColor: "var(--color-border-2)" }} />
              <button
                onClick={toggle}
                className="font-mono text-[10px] tracking-[0.1em] uppercase custom-cursor-target items-center gap-1 hidden sm:flex"
                style={{ color: "var(--color-text-3)", background: "none", border: "none" }}
                aria-label={t({ pt: "Alternar idioma", en: "Switch language" })}
              >
                <Globe className="w-3 h-3" />
                {lang === "pt" ? "EN" : "PT"}
              </button>
              <span className="w-px h-4 hidden sm:block" style={{ backgroundColor: "var(--color-border-2)" }} />
              <DyslexiaToggle />
            </div>
          </div>
        </div>
      </header>

      {/* menu fullscreen — MOBILE ONLY (desktop usa a nav inline acima) */}
      <div
        id="primary-menu"
        ref={menuBackdropRef}
        className="lg:hidden fixed inset-0 z-[99] flex flex-col justify-center px-10"
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
        <div className="absolute inset-0" style={{ backgroundColor: "var(--color-bg-deep)", opacity: 0 }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--color-bg)",
            clipPath: "inset(0 0 100% 0)",
            transition: "clip-path 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        <nav className="relative z-10 flex flex-col gap-3 lg:gap-4">
          {menuLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              tabIndex={menuOpen ? 0 : -1}
              className="text-left custom-cursor-target group"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: isActive(link.href) ? "var(--color-accent)" : "var(--color-text)",
                background: "none",
                border: "none",
                textDecoration: "none",
                display: "block",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(100%)",
                transition: `opacity 0.25s var(--ease-project) ${0.02 * i + 0.05}s, transform 0.25s var(--ease-project) ${0.02 * i + 0.05}s, color 0.2s`,
              }}
            >
              <span
                className="font-mono text-[10px] tracking-[0.15em] mr-4"
                style={{ color: "var(--color-text-3)" }}
              >
                {link.num} —
              </span>
              {t(link.label)}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-10 left-10 lg:left-20 flex items-center gap-4 flex-wrap">
          <span className="font-mono text-[11px]" style={{ color: "var(--color-text-3)", letterSpacing: "0.12em" }}>
            {personal.email}
          </span>
          <span className="w-px h-3" style={{ backgroundColor: "var(--color-border-2)" }} />
          <span className="font-mono text-[11px]" style={{ color: "var(--color-text-3)" }}>
            {t(personal.location)}
          </span>
        </div>
      </div>
    </>
  );
}
