import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE_PRIMARY, SCROLL_START } from "../lib/scroll-anim";

gsap.registerPlugin(ScrollTrigger);

export function LineReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.2,
        ease: EASE_PRIMARY,
        scrollTrigger: { trigger: el, start: SCROLL_START, once: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function HairlineDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        height: "1.34px",
        background: "var(--color-border)",
        width: "100%",
      }}
    />
  );
}

export function DirectionalUnderline({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`accent-underline ${className}`}>
      {children}
    </span>
  );
}
