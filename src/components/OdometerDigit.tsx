import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
  target: number;
  duration?: number;
}

export function OdometerDigit({ target, duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (ref.current) ref.current.textContent = target.toString();
      return;
    }
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) ref.current.textContent = Math.floor(obj.val).toString();
      },
    });
  }, [target, duration]);
  return <span ref={ref}>0</span>;
}
