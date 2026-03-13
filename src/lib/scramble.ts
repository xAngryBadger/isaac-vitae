// Scramble Text — inspirado no efeito OSE Engineering
// Revela texto caractere-a-caractere com aleatorização antes de fixar

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

interface ScrambleOptions {
  el: HTMLElement;
  text: string;
  duration?: number;      // total ms
  scramblePct?: number;   // 0–1, quanto do tempo fica aleatório
  onComplete?: () => void;
}

export function scrambleText({
  el,
  text,
  duration = 500,
  scramblePct = 0.5,
  onComplete,
}: ScrambleOptions) {
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
      requestAnimationFrame(tick);
    } else {
      el.textContent = text;
      onComplete?.();
    }
  };

  requestAnimationFrame(tick);
}

// Hook para usar com evento de hover em elementos React
export function useScrambleHover() {
  const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const text = el.getAttribute("data-scramble") || el.textContent || "";
    scrambleText({ el, text, duration: 400, scramblePct: 0.45 });
  };
  return { onMouseEnter };
}
