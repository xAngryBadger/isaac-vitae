import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

type Lang = "pt" | "en";

type Bilingual = { pt: string; en: string };

type BilingualOrString = Bilingual | string;

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem("lang");
  if (stored === "pt" || stored === "en") return stored;
  const nav = navigator.language.slice(0, 2).toLowerCase();
  if (nav === "en") return "en";
  return "pt";
}

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
  t: (b: BilingualOrString) => string;
}>({
  lang: "pt",
  toggle: () => {},
  t: (b) => (typeof b === "string" ? b : b.pt),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (b: BilingualOrString) => (typeof b === "string" ? b : b[lang]),
    [lang],
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export type { Bilingual, BilingualOrString };
