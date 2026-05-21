import { useState, useRef, useEffect } from "react";
import { useLang } from "../lib/LanguageContext";

type Bilingual = { pt: string; en: string };

export function InlineAnnotation({
  id,
  children,
}: {
  id: string;
  children: Bilingual | string;
}) {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const ref = useRef<HTMLSpanElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  const content = typeof children === "string" ? children : children[lang];

  useEffect(() => {
    if (show && ref.current && popupRef.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      setPosition(spaceAbove > 120 ? "top" : "bottom");
    }
  }, [show]);

  return (
    <span
      ref={ref}
      className="annotation-container"
      style={{ position: "relative", display: "inline", zIndex: show ? 50 : 0 }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span
        className="annotation-term"
        style={{
          fontWeight: "600",
          color: "var(--color-text)",
          textDecoration: "underline",
          textDecorationStyle: "dotted",
          textDecorationThickness: "1px",
          textUnderlineOffset: "3px",
          textDecorationColor: "var(--color-accent)",
          cursor: "help",
          transition: "color 0.2s, text-decoration-color 0.2s",
        }}
        aria-label={content}
      >
        {id.replace(/-/g, " ")}
      </span>
      {show && (
        <div
          ref={popupRef}
          className="annotation-popup"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            ...(position === "top"
              ? { bottom: "100%", marginBottom: "8px" }
              : { top: "100%", marginTop: "8px" }),
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            padding: "10px 14px",
            borderRadius: "6px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            fontSize: "12px",
            lineHeight: "1.6",
            maxWidth: "300px",
            minWidth: "200px",
            zIndex: 50,
            color: "var(--color-text-2)",
            fontFamily: "var(--font-sans)",
            pointerEvents: "auto",
          }}
        >
          {content}
        </div>
      )}
    </span>
  );
}

export type { Bilingual };
