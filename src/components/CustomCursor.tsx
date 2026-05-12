import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = !window.matchMedia("(pointer: coarse)").matches;
    if (!fine) return;
    setIsFinePointer(true);

    const handleMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("custom-cursor-target");

      dotRef.current?.classList.toggle("hovering", !!isClickable);
      ringRef.current?.classList.toggle("hovering", !!isClickable);
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let raf: number;
    const updateRing = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      if (svgRef.current) {
        svgRef.current.style.left = `${ringPos.current.x}px`;
        svgRef.current.style.top = `${ringPos.current.y}px`;
      }
      raf = requestAnimationFrame(updateRing);
    };
    raf = requestAnimationFrame(updateRing);

    const updateScrollProgress = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const pct = scrollable > 0 ? h.scrollTop / scrollable : 0;
      const circle = svgRef.current?.querySelector("[data-scroll-fill]") as SVGCircleElement | null;
      if (circle) {
        const circumference = 2 * Math.PI * 14;
        circle.style.strokeDashoffset = String(circumference * (1 - pct));
      }
    };
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("scroll", updateScrollProgress);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!isFinePointer) return null;

  const circumference = 2 * Math.PI * 14;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <svg
        ref={svgRef}
        className="cursor-ring"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9997,
          transform: "translate(-50%, -50%)",
          transition: "width .8s var(--ease-spring-1, ease), height .8s var(--ease-spring-1, ease)",
        }}
      >
        <circle
          data-scroll-fill
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          transform="rotate(-90 18 18)"
          style={{ transition: "stroke-dashoffset 0.15s linear", opacity: 0.5 }}
        />
      </svg>
    </>
  );
}
