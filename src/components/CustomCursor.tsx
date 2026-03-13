import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

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
        target.classList.contains("cursor-none");

      dotRef.current?.classList.toggle("hovering", !!isClickable);
      ringRef.current?.classList.toggle("hovering", !!isClickable);
    };

    // LERP para o anel (lag intencional)
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let raf: number;
    const updateRing = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      raf = requestAnimationFrame(updateRing);
    };
    raf = requestAnimationFrame(updateRing);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Touch devices: não renderiza
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
