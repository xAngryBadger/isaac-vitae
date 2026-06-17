import { useEffect, useState, type RefObject } from "react";

export const EASE_PRIMARY = "var(--ease-spring-soft)";
export const EASE_SECONDARY = "var(--ease-quart-out)";
export const SCROLL_START = "top 85%";

export function useScroll({ target, offset = 0 }: { target: RefObject<HTMLElement> | null; offset?: number }) {
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!target?.current) return;

    const el = target.current;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const view = { top: rect.top + offset, bottom: rect.bottom - offset };

      const isVisible = view.top < viewportHeight && view.bottom > 0;
      setInView(isVisible);

      if (isVisible) {
        const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - view.top) / (viewportHeight + rect.height - offset * 2)));
        setProgress(scrollProgress);
      }
    };

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    update(); // Initial call

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [target, offset]);

  return { progress, inView };
}

export function useScrollTransform(range: [number, number], output: [number, number]) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollY / (viewportHeight - 100)));
      setProgress(progress);
    };

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const outputRange = output[1] - output[0];
  const inputRange = range[1] - range[0];
  const progressScaled = (progress - range[0]) / inputRange;
  const outputValue = output[0] + progressScaled * outputRange;

  return outputValue;
}
