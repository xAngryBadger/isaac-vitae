import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HeroCornersProps {
  className?: string;
}

export function HeroCorners({ className = "" }: HeroCornersProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = svgRef.current?.querySelectorAll("path");
      if (!paths) return;
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
        path.style.setProperty("--stroke-length", String(length));
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: "var(--ease-quart-in-out)",
        stagger: 0.15,
        delay: 0.4,
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);
  
    return (
      <svg ref={svgRef} className={`absolute inset-0 pointer-events-none -z-10 ${className}`} style={{ width: "100%", height: "100%" }} aria-hidden="true">
      <path d="M 60 60 h 80 M 60 60 v 80" stroke="var(--color-border-2)" strokeWidth="1" fill="none" />
      <path d="M calc(100% - 60) 60 h -80 M calc(100% - 60) 60 v 80" stroke="var(--color-border-2)" strokeWidth="1" fill="none" />
      <path d="M 60 calc(100% - 60) h 80 M 60 calc(100% - 60) v -80" stroke="var(--color-border-2)" strokeWidth="1" fill="none" />
      <path d="M calc(100% - 60) calc(100% - 60) h -80 M calc(100% - 60) calc(100% - 60) v -80" stroke="var(--color-border-2)" strokeWidth="1" fill="none" />
      <circle cx="60" cy="60" r="2" fill="var(--color-text-3)" opacity="0.5" />
      <circle cx="calc(100% - 60)" cy="60" r="2" fill="var(--color-text-3)" opacity="0.5" />
      <circle cx="60" cy="calc(100% - 60)" r="2" fill="var(--color-text-3)" opacity="0.5" />
      <circle cx="calc(100% - 60)" cy="calc(100% - 60)" r="2" fill="var(--color-text-3)" opacity="0.5" />
    </svg>
  );
}
