import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

type AsType = "h1" | "h2" | "h3" | "p" | "span";

interface SplitTextProps {
  children: React.ReactNode;
  className?: string;
  as?: AsType;
  delay?: number;
  duration?: number;
  stagger?: number;
  splitType?: "chars" | "words" | "lines";
}

export function SplitText({ 
  children, 
  className = "", 
  as = "span", 
  delay = 0, 
  duration = 1.1, 
  stagger = 0.05,
  splitType = "chars"
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
   
  useEffect(() => {
    if (!ref.current) return;
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.style.opacity = "1";
      }
      return;
    }
    
    const split = new SplitType(ref.current, { 
      types: splitType === "chars" ? "chars" : splitType === "words" ? "words" : "lines",
      charClass: "split-char",
      wordClass: "split-word", 
      lineClass: "split-line"
    });
    
    const targets = splitType === "chars" ? split.chars : splitType === "words" ? split.words : split.lines;
    
    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y: splitType === "chars" ? "100%" : "120%",
        opacity: 0,
        duration,
        ease: "var(--ease-spring-soft)",
        stagger,
        delay,
      });
    }, ref);
    
    return () => { split.revert(); ctx.revert(); };
  }, [children, delay, duration, stagger, splitType]);
  
  return React.createElement(as, { ref, className }, children);
}