import { useState, useRef, useEffect } from "react";
import { useLang } from "../lib/LanguageContext";
import { Globe, Maximize2, X, ExternalLink } from "lucide-react";

type Props = {
  src: string;
  title: string;
};

export default function SitePreview({ src, title }: Props) {
  const { t } = useLang();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const resolvedSrc = src.startsWith("/")
    ? import.meta.env.DEV
      ? src
      : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`
    : src;

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  const browserChrome = (
    <div
      className="flex items-center gap-2 px-4 py-2.5 border-b"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-bg-card)",
      }}
    >
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
      </div>
      <div
        className="flex-1 flex items-center gap-2 px-3 py-1 rounded text-xs font-mono"
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text-3)",
        }}
      >
        <Globe className="w-3 h-3 shrink-0" />
        <span className="truncate">{title}</span>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setIsFullscreen(true)}
          className="p-1.5 transition-colors custom-cursor-target"
          style={{ color: "var(--color-text-3)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-3)"; }}
          title={t({ pt: "Tela cheia", en: "Fullscreen" })}
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
        <a
          href={resolvedSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 transition-colors custom-cursor-target"
          style={{ color: "var(--color-text-3)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-3)"; }}
          title={t({ pt: "Abrir em nova aba", en: "Open in new tab" })}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );

  const loadingSpinner = (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: "var(--color-accent)", borderTopColor: "transparent" }}
        />
        <span className="font-mono text-xs" style={{ color: "var(--color-text-3)" }}>
          {t({ pt: "Carregando preview...", en: "Loading preview..." })}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="border overflow-hidden"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-bg-card)",
          borderRadius: 0,
        }}
      >
        {browserChrome}
        <div className="relative" style={{ aspectRatio: "16/10" }}>
          {!iframeLoaded && loadingSpinner}
          <iframe
            ref={iframeRef}
            src={resolvedSrc}
            title={title}
            className="w-full h-full border-0"
            onLoad={() => setIframeLoaded(true)}
            sandbox="allow-scripts allow-popups allow-forms"
            loading="lazy"
          />
        </div>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div
            className="flex items-center justify-between px-4 py-2.5 border-b"
            style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-card)" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="w-2.5 h-2.5 rounded-full flex items-center justify-center custom-cursor-target"
                  style={{ backgroundColor: "#ff5f57" }}
                  title={t({ pt: "Fechar", en: "Close" })}
                >
                  <X className="w-1.5 h-1.5" style={{ color: "#4c0002" }} />
                </button>
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
              </div>
              <span className="font-mono text-xs ml-2" style={{ color: "var(--color-text-3)" }}>
                {title}
              </span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-1.5 custom-cursor-target transition-colors"
              style={{ color: "var(--color-text-3)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-3)"; }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 relative">
            {!iframeLoaded && loadingSpinner}
            <iframe
              src={resolvedSrc}
              title={title}
              className="w-full h-full border-0"
              onLoad={() => setIframeLoaded(true)}
              sandbox="allow-scripts allow-popups allow-forms"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
