import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const animate = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.15;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.15;

      if (cursor) {
        cursor.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
      }
      if (follower) {
        follower.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "var(--color-text)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1px solid var(--color-accent)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}