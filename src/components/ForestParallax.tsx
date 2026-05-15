import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkyLayer from "./parallax/SkyLayer";
import RuinsLayer from "./parallax/RuinsLayer";
import TreesLayer from "./parallax/TreesLayer";
import ColumnsLayer from "./parallax/ColumnsLayer";
import GroundLayer from "./parallax/GroundLayer";
import FoliageLayer from "./parallax/FoliageLayer";
import LightRaysLayer from "./parallax/LightRaysLayer";
import FogLayer from "./parallax/FogLayer";

gsap.registerPlugin(ScrollTrigger);

type LayerConfig = {
  scrollSpeed: number;
  mouseXFactor: number;
  mouseYFactor: number;
};

const LAYERS: LayerConfig[] = [
  { scrollSpeed: 0.05, mouseXFactor: 0.003, mouseYFactor: 0.002 },
  { scrollSpeed: 0.12, mouseXFactor: 0.008, mouseYFactor: 0.005 },
  { scrollSpeed: 0.25, mouseXFactor: 0.015, mouseYFactor: 0.01 },
  { scrollSpeed: 0.4, mouseXFactor: 0.024, mouseYFactor: 0.016 },
  { scrollSpeed: 0.15, mouseXFactor: 0.005, mouseYFactor: 0.003 },
  { scrollSpeed: 0.6, mouseXFactor: 0.03, mouseYFactor: 0.02 },
  { scrollSpeed: 0.8, mouseXFactor: 0.04, mouseYFactor: 0.028 },
  { scrollSpeed: 0.1, mouseXFactor: 0.002, mouseYFactor: 0.001 },
];

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
        const speed = LAYERS[i]?.scrollSpeed ?? 0;
        gsap.to(el, {
          y: () => window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5 + (1 - speed) * 2,
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
        const ty = s.y * cfg.mouseYFactor * window.innerHeight;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
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
              "linear-gradient(to bottom, #d8d0c4 0%, #e5dfd8 30%, #b8c4b2 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div ref={setRef(0)} className="parallax-layer"><SkyLayer /></div>
      <div ref={setRef(1)} className="parallax-layer"><RuinsLayer /></div>
      <div ref={setRef(2)} className="parallax-layer"><TreesLayer /></div>
      <div ref={setRef(3)} className="parallax-layer"><ColumnsLayer /></div>
      <div ref={setRef(4)} className="parallax-layer"><LightRaysLayer /></div>
      <div ref={setRef(5)} className="parallax-layer"><GroundLayer /></div>
      <div ref={setRef(6)} className="parallax-layer"><FoliageLayer /></div>
      <div ref={setRef(7)} className="parallax-layer"><FogLayer /></div>
    </div>
  );
}
