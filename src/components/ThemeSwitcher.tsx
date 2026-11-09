import { useState, useEffect } from "react";
import { useLang } from "../lib/LanguageContext";

const THEMES = [
  { id: "gruvbox", label: "Gruvbox", swatch: "#fe8019" },
  { id: "noctalia", label: "Noctalia", swatch: "#fff59b" },
  { id: "kanagawa", label: "Kanagawa", swatch: "#76946a" },
  { id: "dragon", label: "Dragon", swatch: "#a7c080" },
  { id: "adw", label: "ADW", swatch: "#3584e4" },
  { id: "umbral", label: "Umbral", swatch: "#b84a4a" },
  { id: "hexa34c", label: "Hexa34C", swatch: "#9ad4a1" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

const STORAGE_KEY = "vitae-theme";

function readTheme(): ThemeId {
  if (typeof document === "undefined") return "gruvbox";
  const current = document.documentElement.dataset.theme;
  return THEMES.some((item) => item.id === current) ? (current as ThemeId) : "gruvbox";
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>(readTheme);
  const { t } = useLang();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* modo privado: tema só nesta sessão */
    }
  }, [theme]);

  const current = THEMES.find((item) => item.id === theme) ?? THEMES[0];

  const cycle = () => {
    const index = THEMES.findIndex((item) => item.id === theme);
    setTheme(THEMES[(index + 1) % THEMES.length].id);
  };

  return (
    <button
      onClick={cycle}
      className="font-mono text-[10px] tracking-[0.15em] uppercase custom-cursor-target flex items-center gap-1.5"
      style={{
        color: "var(--color-text-3)",
        background: "none",
        border: "none",
        padding: "0.5rem",
        transition: "opacity 0.2s var(--ease-quart-out)",
      }}
      aria-label={t({
        pt: `Trocar tema (atual: ${current.label})`,
        en: `Switch theme (current: ${current.label})`,
      })}
      title={t({ pt: `Tema: ${current.label}`, en: `Theme: ${current.label}` })}
    >
      <span
        className="block w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: current.swatch }}
      />
      TH
    </button>
  );
}
