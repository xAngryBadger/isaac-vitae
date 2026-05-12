import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../lib/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";

export default function NotFound() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".notfound-404", { scale: 0.8, opacity: 0, duration: 0.8, ease: "expo.out" });
      gsap.from(".notfound-msg", { y: 20, opacity: 0, duration: 0.6, delay: 0.3, ease: "power3.out" });
      gsap.from(".notfound-btn", { y: 10, opacity: 0, duration: 0.5, delay: 0.5, ease: "power3.out" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="text-center px-6">
        <span
          className="notfound-404 font-serif font-bold italic block mb-4"
          style={{ fontSize: "clamp(6rem, 15vw, 12rem)", color: "var(--color-accent)", lineHeight: 1 }}
        >
          404
        </span>
        <p className="notfound-msg font-mono text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "var(--color-text-3)" }}>
          {t({ pt: "Essa rota se perdeu num loop ReAct.", en: "This route got lost in a ReAct loop." })}
        </p>
        <p className="notfound-msg text-sm mb-8" style={{ color: "var(--color-text-2)", opacity: 0.6 }}>
          {t({ pt: "Página não encontrada.", en: "Page not found." })}
        </p>
        <Link to="/" className="notfound-btn clip-btn custom-cursor-target">
          <ArrowLeft className="w-4 h-4" />
          {t({ pt: "Voltar ao Início", en: "Back to Home" })}
        </Link>
      </div>
    </div>
  );
}
