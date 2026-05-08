import { Link } from "react-router-dom";
import { useLang } from "../lib/LanguageContext";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { t } = useLang();

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="text-center px-6">
        <span
          className="font-serif font-bold italic block mb-4"
          style={{ fontSize: "clamp(6rem, 15vw, 12rem)", color: "var(--color-accent)", lineHeight: 1 }}
        >
          404
        </span>
        <p className="font-mono text-xs tracking-[0.2em] uppercase mb-8" style={{ color: "var(--color-text-3)" }}>
          {t({ pt: "Página não encontrada", en: "Page not found" })}
        </p>
        <Link to="/" className="clip-btn custom-cursor-target">
          <ArrowLeft className="w-4 h-4" />
          {t({ pt: "Voltar ao Início", en: "Back to Home" })}
        </Link>
      </div>
    </div>
  );
}
