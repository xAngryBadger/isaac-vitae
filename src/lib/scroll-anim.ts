import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const EASE_PRIMARY = "expo.out";
export const EASE_SECONDARY = "power3.out";
export const SCROLL_START = "top 85%";

export function scrollFrom(
  target: gsap.TweenTarget,
  vars: Omit<gsap.TweenVars, "scrollTrigger">,
  trigger?: string | Element,
) {
  return gsap.from(target, {
    ...vars,
    scrollTrigger: {
      trigger: trigger ?? (typeof target === "string" ? target : undefined),
      start: SCROLL_START,
      once: true,
    },
  });
}
