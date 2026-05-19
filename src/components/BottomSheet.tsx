import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useLang } from "../lib/LanguageContext";
import { menuLinks } from "../data/menu-links";
import { Globe, Volume2, VolumeX } from "lucide-react";
import { useSounds } from "../lib/useSounds";
import { scrambleText } from "../lib/scramble";

export default function BottomSheet() {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const { lang, toggle, t } = useLang();
  const location = useLocation();
  const { enabled: soundsEnabled, playMenuOpen, playMenuClose, toggleSounds } = useSounds();

  useEffect(() => {
    if (open) {
      playMenuOpen();
      if (backdropRef.current) gsap.to(backdropRef.current, { opacity: 1, duration: 0.35 });
      if (sheetRef.current) gsap.to(sheetRef.current, { y: "0%", duration: 0.35, ease: "power3.out" });
      itemsRef.current.forEach((el, i) => {
        if (el) gsap.fromTo(el, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.25, delay: 0.04 * i, ease: "power2.out" });
      });
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      const lenis = (window as unknown as { lenis?: { stop: () => void } }).lenis;
      lenis?.stop();
    } else {
      playMenuClose();
      if (backdropRef.current) gsap.to(backdropRef.current, { opacity: 0, duration: 0.25 });
      if (sheetRef.current) gsap.to(sheetRef.current, { y: "calc(100% - 48px)", duration: 0.25, ease: "power3.out" });
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      const lenis = (window as unknown as { lenis?: { start: () => void } }).lenis;
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open, playMenuOpen, playMenuClose]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleScramble = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const text = el.getAttribute("data-scramble") || el.textContent || "";
    scrambleText({ el, text, duration: 380, scramblePct: 0.45 });
  };

  return (
    <>
      <div
        ref={backdropRef}
        className="sheet-backdrop"
        style={{ opacity: 0, pointerEvents: open ? "auto" : "none" }}
        onClick={() => setOpen(false)}
      />
      <div ref={sheetRef} className="sheet" style={{ transform: "translateY(calc(100% - 48px))" }}>
        <button className="sheet-toggle" onClick={() => setOpen((v) => !v)}>
          <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--color-text)" }}>
            {t({ pt: "Menu", en: "Menu" })}
          </span>
          <span className="font-mono text-xs tracking-[0.1em] uppercase" style={{ color: "var(--color-accent)" }}>
            {open ? "↑" : "↓"}
          </span>
        </button>
        <nav className="flex flex-col overflow-y-auto" style={{ maxHeight: "calc(80dvh - 48px)" }}>
          {menuLinks.map((link, i) => (
            <Link
              key={link.href}
              ref={(el) => { itemsRef.current[i] = el; }}
              to={link.href}
              onMouseEnter={handleScramble}
              data-scramble={t(link.label)}
              className="sheet-item"
            >
              <span>
                <span className="font-mono text-xs" style={{ color: "var(--color-accent)", marginRight: "0.75rem" }}>{link.num}</span>
                <span style={{ color: "var(--color-text)" }}>{t(link.label)}</span>
              </span>
              <span className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>→</span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 p-4" style={{ borderTop: "1px solid var(--color-border)" }}>
          <button onClick={toggle} className="font-mono text-xs tracking-[0.1em] uppercase" style={{ color: "var(--color-text-3)", background: "none", border: "none" }}>
            <Globe className="w-3 h-3 inline mr-1" />{lang.toUpperCase()}
          </button>
          <button onClick={toggleSounds} className="font-mono text-xs tracking-[0.1em] uppercase" style={{ color: "var(--color-text-3)", background: "none", border: "none" }}>
            {soundsEnabled ? <Volume2 className="w-3 h-3 inline mr-1" /> : <VolumeX className="w-3 h-3 inline mr-1" />}
            {soundsEnabled ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </>
  );
}
