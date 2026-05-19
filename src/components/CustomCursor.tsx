import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
const dotRef = useRef<HTMLDivElement>(null);
const [isFinePointer, setIsFinePointer] = useState(false);

useEffect(() => {
if (typeof window === "undefined") return;
const fine = !window.matchMedia("(pointer: coarse)").matches;
if (!fine) return;
setIsFinePointer(true);

const handleMove = (e: MouseEvent) => {
if (dotRef.current) {
dotRef.current.style.left = `${e.clientX}px`;
dotRef.current.style.top = `${e.clientY}px`;
}
};

const handleHover = (e: MouseEvent) => {
const target = e.target as HTMLElement;
const isClickable =
target.tagName.toLowerCase() === "a" ||
target.tagName.toLowerCase() === "button" ||
target.closest("a") ||
target.closest("button") ||
target.classList.contains("custom-cursor-target");

dotRef.current?.classList.toggle("hovering", !!isClickable);
};

window.addEventListener("mousemove", handleMove);
window.addEventListener("mouseover", handleHover);

return () => {
window.removeEventListener("mousemove", handleMove);
window.removeEventListener("mouseover", handleHover);
};
}, []);

if (!isFinePointer) return null;

return <div ref={dotRef} className="cursor-dot" />;
}
