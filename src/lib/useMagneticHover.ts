import { useEffect, useRef } from "react";

export function useMagneticHover(strength = 0.3) {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const handleMove = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
		};

		const handleLeave = () => {
			el.style.transform = "translate(0, 0)";
			el.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
		};

		const handleEnter = () => {
			el.style.transition = "none";
		};

		el.addEventListener("mousemove", handleMove);
		el.addEventListener("mouseleave", handleLeave);
		el.addEventListener("mouseenter", handleEnter);

		return () => {
			el.removeEventListener("mousemove", handleMove);
			el.removeEventListener("mouseleave", handleLeave);
			el.removeEventListener("mouseenter", handleEnter);
		};
	}, [strength]);

	return ref;
}
