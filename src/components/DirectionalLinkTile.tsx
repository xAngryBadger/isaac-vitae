import { useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { scrambleText } from "../lib/scramble";

interface DirectionalLinkTileProps {
  to: string;
  num: string;
  children: string;
}

function getDirection(e: React.MouseEvent, el: HTMLElement): "top" | "bottom" {
  const { top, height } = el.getBoundingClientRect();
  return e.clientY - top < height / 2 ? "top" : "bottom";
}

export default function DirectionalLinkTile({ to, num, children }: DirectionalLinkTileProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const tileRef = useRef<HTMLSpanElement>(null);
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));

  useEffect(() => {
    if (tileRef.current && isActive) {
      gsap.set(tileRef.current, { y: "0%" });
    }
  }, [isActive]);

  const onEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!tileRef.current || !ref.current) return;
    const dir = getDirection(e, ref.current);
    gsap.set(tileRef.current, { y: dir === "top" ? "-101%" : "101%" });
    gsap.to(tileRef.current, { y: "0%", duration: 0.35, ease: "power3.out" });

    const textEl = ref.current.querySelector("[data-scramble]") as HTMLElement | null;
    if (textEl) {
      scrambleText({ el: textEl, text: textEl.getAttribute("data-scramble") || textEl.textContent || "", duration: 380, scramblePct: 0.45 });
    }
  }, []);

  const onLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!tileRef.current || !ref.current) return;
    const dir = getDirection(e, ref.current);
    gsap.to(tileRef.current, { y: dir === "top" ? "-101%" : "101%", duration: 0.25, ease: "power3.out" });
  }, []);

  return (
    <Link
      ref={ref}
      to={to}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="nav-tile relative block overflow-hidden custom-cursor-target"
    >
      <span className="nav-tile-num font-mono">{num} —</span>
      <span className="nav-tile-text relative z-10 mix-blend-difference" data-scramble={children}>
        {children}
      </span>
      <span ref={tileRef} className="nav-tile-bg" />
    </Link>
  );
}
