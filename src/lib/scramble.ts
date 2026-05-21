const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

interface ScrambleOptions {
  el: HTMLElement;
  text: string;
  duration?: number;
  scramblePct?: number;
  onComplete?: () => void;
}

const activeAnimations = new WeakMap<HTMLElement, number>();

export function scrambleText({
  el,
  text,
  duration = 500,
  scramblePct = 0.5,
  onComplete,
}: ScrambleOptions) {
  if (isTouchDevice) return;
  const prev = activeAnimations.get(el);
  if (prev) cancelAnimationFrame(prev);

  let frame = 0;
  const totalFrames = Math.round((duration / 1000) * 60);
  const scrambleFrames = Math.round(totalFrames * scramblePct);

  const tick = () => {
    const progress = frame / totalFrames;
    const revealCount = Math.floor(progress * text.length);

    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") { result += " "; continue; }
      if (i < revealCount) {
        result += text[i];
      } else if (frame < scrambleFrames + revealCount * 2) {
        result += CHARS[Math.floor(Math.random() * CHARS.length)];
      } else {
        result += text[i];
      }
    }

    el.textContent = result;
    frame++;
    if (frame <= totalFrames) {
      const id = requestAnimationFrame(tick);
      activeAnimations.set(el, id);
    } else {
      el.textContent = text;
      activeAnimations.delete(el);
      onComplete?.();
    }
  };

  const id = requestAnimationFrame(tick);
  activeAnimations.set(el, id);
}

export function useScrambleHover() {
  const onMouseEnter = isTouchDevice
    ? undefined
    : (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget;
        const text = el.getAttribute("data-scramble") || el.textContent || "";
        scrambleText({ el, text, duration: 400, scramblePct: 0.45 });
      };
  return { onMouseEnter };
}
