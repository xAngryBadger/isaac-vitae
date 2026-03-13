import React, { useEffect, useRef, useState } from "react";
import { personal } from "../data/content";
import { scrambleText } from "../lib/scramble";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      // Scroll progress bar
      if (progressRef.current) {
        const h = document.documentElement;
        const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
        progressRef.current.style.transform = `scaleX(${pct})`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScramble = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const text = el.getAttribute("data-scramble") || el.textContent || "";
    scrambleText({ el, text, duration: 380, scramblePct: 0.45 });
  };

  return (
    <>
      {/* Scroll progress */}
      <div
        ref={progressRef}
        className="scroll-progress"
        style={{ transform: "scaleX(0)" }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(8,11,9,0.9)" : "transparent",
          borderBottomColor: scrolled ? "var(--color-border)" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="font-mono text-sm tracking-[0.2em] uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              {personal.name.split(" ")[0]}
              <span style={{ color: "var(--color-text-3)" }}>.</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  onMouseEnter={handleScramble}
                  data-scramble={link.label}
                  className="font-mono text-xs tracking-[0.15em] uppercase gold-underline transition-colors duration-300 cursor-none"
                  style={{ color: "var(--color-text-2)", background: "none", border: "none" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Desktop */}
            <a
              href={`mailto:${personal.email}`}
              className="hidden lg:flex items-center gap-2 px-5 py-2 border text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-none"
              style={{
                borderColor: "var(--color-border-2)",
                color: "var(--color-gold)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(196,165,116,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-2)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              Contato
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-none"
            >
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
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 z-[99] flex flex-col justify-center px-10 transition-all duration-500"
        style={{
          backgroundColor: "var(--color-bg-100)",
          clipPath: menuOpen ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-left cursor-none"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.5rem",
                color: "var(--color-text)",
                background: "none",
                border: "none",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease ${0.05 * i + 0.15}s, transform 0.4s ease ${0.05 * i + 0.15}s`,
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div
          className="absolute bottom-10 left-10 font-mono text-xs"
          style={{ color: "var(--color-text-3)", letterSpacing: "0.2em" }}
        >
          {personal.email}
        </div>
      </div>
    </>
  );
}
