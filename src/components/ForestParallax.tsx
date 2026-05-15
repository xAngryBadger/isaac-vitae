import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FIREWATCH_SPEEDS = [2, 5, 11, 16, 26, 36, 49, 69, 100];

const LAYER_IMAGES = FIREWATCH_SPEEDS.map((_, i) => {
  const base = import.meta.env.BASE_URL;
  return `${base}images/parallax/fw-layer${i}.png`;
});

type LayerConfig = {
  dataSpeed: number;
  mouseXFactor: number;
};

const LAYERS: LayerConfig[] = FIREWATCH_SPEEDS.map((speed, i) => ({
  dataSpeed: speed,
  mouseXFactor: 0.001 + (i / FIREWATCH_SPEEDS.length) * 0.04,
}));

const LERP = 0.06;

export default function ForestParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseSmooth = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = /Android|iPhone/i.test(navigator.userAgent) || window.innerWidth < 768;
    setIsMobile(mobile);
  }, []);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const ctx = gsap.context(() => {
      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        const cfg = LAYERS[i];
        if (!cfg) return;
        const speedNorm = cfg.dataSpeed / 100;
        gsap.to(el, {
          y: () => window.innerHeight * speedNorm,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8 + (1 - speedNorm) * 1.5,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      mouseTarget.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      const mt = mouseTarget.current;
      const ms = mouseSmooth.current;
      mouseSmooth.current = {
        x: ms.x + (mt.x - ms.x) * LERP,
        y: ms.y + (mt.y - ms.y) * LERP,
      };

      const s = mouseSmooth.current;
      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        const cfg = LAYERS[i];
        if (!cfg) return;
        const tx = s.x * cfg.mouseXFactor * window.innerWidth;
        el.style.transform = `translate3d(${tx}px, 0, 0)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    layerRefs.current[i] = el;
  };

  if (isMobile) {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #ffaf1b 0%, #c25a00 40%, #210002 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" style={{ backgroundColor: "#ffaf1b" }}>
      {LAYERS.map((cfg, i) => (
        <div
          key={i}
          ref={setRef(i)}
          className="parallax-layer"
          data-speed={cfg.dataSpeed}
          style={{
            zIndex: i + 1,
            backgroundImage: `url(${LAYER_IMAGES[i]})`,
            backgroundPosition: "bottom center",
            backgroundSize: "auto 1038px",
            backgroundRepeat: "repeat-x",
          }}
        />
      ))}
    </div>
  );
}
