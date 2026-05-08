import { useEffect, useRef, useState } from "react";
import { useLang } from "../lib/LanguageContext";
import { personal } from "../data/content";
import { scrambleText } from "../lib/scramble";
import { useSounds } from "../lib/useSounds";
import { Link, useLocation } from "react-router-dom";
import { Globe, Volume2, VolumeX } from "lucide-react";

const menuLinks = [
  { label: { pt: "Início", en: "Home" }, href: "/", num: "01" },
  { label: { pt: "Sobre", en: "About" }, href: "/about", num: "02" },
  { label: { pt: "Experiência", en: "Experience" }, href: "/experience", num: "03" },
  { label: { pt: "Projetos", en: "Projects" }, href: "/projects", num: "04" },
  { label: { pt: "Habilidades", en: "Skills" }, href: "/skills", num: "05" },
  { label: { pt: "Galeria", en: "Gallery" }, href: "/gallery", num: "06" },
  { label: { pt: "Certificações", en: "Certificates" }, href: "/certificates", num: "07" },
  { label: { pt: "Contato", en: "Contact" }, href: "/contact", num: "08" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const { lang, toggle, t } = useLang();
  const location = useLocation();
  const { enabled: soundsEnabled, playMenuOpen, playMenuClose, toggleSounds } = useSounds();

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
      playMenuOpen();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      lenis?.stop();
    } else {
      playMenuClose();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen, playMenuOpen, playMenuClose]);

  const handleScramble = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const text = el.getAttribute("data-scramble") || el.textContent || "";
    scrambleText({ el, text, duration: 380, scramblePct: 0.45 });
  };  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500`}
        style={{
          backgroundColor: scrolled ? "rgba(239,234,230,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className="font-mono text-sm tracking-[0.2em] uppercase custom-cursor-target"
              style={{ color: "var(--color-accent)", textDecoration: "none" }}
            >
              {personal.name.split(" ")[0]}
              <span style={{ color: "var(--color-text-3)" }}>.</span>
            </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="hidden lg:flex items-center gap-1.5 font-mono text-xs tracking-[0.1em] uppercase custom-cursor-target"
            style={{ color: "var(--color-text-3)", background: "none", border: "none" }}
          >
            <Globe className="w-3.5 h-3.5" />
            {lang.toUpperCase()}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex items-center gap-3 p-2 custom-cursor-target"
            style={{ background: "none", border: "none" }}
          >
            <span
              className="hidden lg:inline font-mono text-xs tracking-[0.15em] uppercase"
              style={{ color: "var(--color-text-3)", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }}
            >
              Menu
            </span>
                <span
                  className="block w-6 h-px transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-text)",
                    transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="block w-4 h-px transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-text)",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  className="block w-6 h-px transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-text)",
                    transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className="fixed inset-0 z-[99] flex flex-col justify-center px-10 lg:px-20"
        style={{
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "visibility 0s " + (menuOpen ? "0s" : "0.8s"),
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--color-bg-deep)",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--color-bg)",
            clipPath: menuOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
            transition: "clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        <nav className="relative z-10 flex flex-col gap-4 lg:gap-6">
          {menuLinks.map((link, i) => (
          <Link
            key={link.href}
            to={link.href}
            onMouseEnter={handleScramble}
            data-scramble={t(link.label)}
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
                transition: `opacity 0.5s ease ${0.05 * i + 0.2}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.05 * i + 0.2}s`,
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
            data-selectable
          >
            {personal.email}
          </span>
          <span className="w-px h-3" style={{ backgroundColor: "var(--color-border-2)" }} />
        <button
          onClick={() => { toggle(); }}
          className="font-mono text-xs tracking-[0.1em] uppercase custom-cursor-target"
          style={{ color: "var(--color-text-3)", background: "none", border: "none" }}
        >
          <Globe className="w-3 h-3 inline mr-1" />
          {lang === "pt" ? "EN" : "PT"}
        </button>
        <span className="w-px h-3" style={{ backgroundColor: "var(--color-border-2)" }} />
        <button
          onClick={toggleSounds}
          className="font-mono text-xs tracking-[0.1em] uppercase custom-cursor-target"
          style={{ color: "var(--color-text-3)", background: "none", border: "none" }}
        >
          {soundsEnabled ? <Volume2 className="w-3 h-3 inline mr-1" /> : <VolumeX className="w-3 h-3 inline mr-1" />}
          {soundsEnabled ? "ON" : "OFF"}
        </button>
        </div>
      </div>
    </>
  );
}
