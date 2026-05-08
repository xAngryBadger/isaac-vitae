import { useEffect, useRef, useState } from "react";
import { useLang } from "../lib/LanguageContext";
import { personal } from "../data/content";

export default function Preloader({ onDone }: { onDone: () => void }) {
const [exiting, setExiting] = useState(false);
const { t } = useLang();
const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    let cancelled = false;
    const totalFrames = 90;
    let rafId: number;
    const tick = () => {
      if (cancelled) return;
      frame++;
      const p = frame / totalFrames;
      const eased = 1 - Math.pow(1 - p, 3);
      const pct = Math.min(100, Math.round(eased * 100));
      if (counterRef.current) {
        counterRef.current.textContent = String(pct).padStart(3, "0");
      }
      if (frame < totalFrames) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          if (cancelled) return;
          setExiting(true);
          setTimeout(() => {
            if (!cancelled) onDone();
          }, 600);
        }, 300);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [onDone]);

return (
<div
className="fixed inset-0 z-[10000] flex items-center justify-center"
style={{
backgroundColor: "var(--color-bg)",
clipPath: exiting
? "inset(0 0 100% 0)"
: "inset(0 0 0 0)",
transition: exiting ? "clip-path 0.6s cubic-bezier(.16,1,.3,1)" : "none",
}}
>
<div className="flex flex-col items-center gap-6">
<span
className="font-serif font-bold italic"
style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--color-accent)" }}
>
{personal.name}
</span>
<div className="flex items-center gap-4">
<div
className="h-px"
style={{
width: "120px",
backgroundImage: `linear-gradient(to right, transparent, var(--color-accent))`,
}}
/>
<span
ref={counterRef}
className="font-mono text-sm tabular-nums"
style={{ color: "var(--color-accent)", letterSpacing: "0.1em" }}
data-selectable
>
000
</span>
<div
className="h-px"
style={{
width: "120px",
backgroundImage: `linear-gradient(to left, transparent, var(--color-accent))`,
}}
/>
</div>
<span
className="font-mono text-xs uppercase text-muted"
style={{ letterSpacing: "0.2em" }}
>
{t({ pt: "Carregando", en: "Loading" })}
</span>
</div>
</div>
);
}
