import type { JSX } from "react";

export function HarpIAWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="24" width="28" height="32" rx="4" stroke="#FFB800" strokeWidth="1.5" fill="#FFB80010" />
      <text x="18" y="44" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#FFB800" fontWeight="600">TXT</text>
      <line x1="34" y1="40" x2="44" y2="40" stroke="#FFB80060" strokeWidth="1" />
      <polyline points="41,37 44,40 41,43" fill="none" stroke="#FFB80060" strokeWidth="1" />
      <rect x="46" y="18" width="28" height="44" rx="4" stroke="#FFB800" strokeWidth="1.5" fill="#FFB80018" />
      <circle cx="60" cy="34" r="6" stroke="#FFB800" strokeWidth="1" fill="none" />
      <circle cx="60" cy="34" r="2.5" fill="#FFB800" />
      <rect x="52" y="46" width="16" height="2" rx="1" fill="#FFB80050" />
      <rect x="54" y="51" width="12" height="2" rx="1" fill="#FFB80035" />
      <rect x="56" y="56" width="8" height="2" rx="1" fill="#FFB80025" />
      <line x1="76" y1="40" x2="86" y2="40" stroke="#FFB80060" strokeWidth="1" />
      <polyline points="83,37 86,40 83,43" fill="none" stroke="#FFB80060" strokeWidth="1" />
      <rect x="88" y="24" width="28" height="32" rx="4" stroke="#FFB800" strokeWidth="1.5" fill="#FFB80010" />
      <polygon points="102,30 112,38 108,38 108,50 96,50 96,38 92,38" fill="#FFB80030" stroke="#FFB800" strokeWidth="0.75" />
    </svg>
  );
}

export function SRFWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="16" y="8" width="88" height="64" rx="3" stroke="#2d5a3d" strokeWidth="1.5" fill="#2d5a3d08" />
      <line x1="16" y1="24" x2="104" y2="24" stroke="#2d5a3d30" strokeWidth="1" />
      <rect x="22" y="12" width="20" height="3" rx="1.5" fill="#2d5a3d50" />
      <rect x="78" y="12" width="20" height="3" rx="1.5" fill="#2d5a3d30" />
      <rect x="24" y="30" width="24" height="6" rx="1" fill="#2d5a3d20" />
      <rect x="52" y="30" width="24" height="6" rx="1" fill="#2d5a3d20" />
      <rect x="80" y="30" width="16" height="6" rx="1" fill="#2d5a3d15" />
      <rect x="24" y="40" width="24" height="6" rx="1" fill="#2d5a3d20" />
      <rect x="52" y="40" width="24" height="6" rx="1" fill="#2d5a3d20" />
      <rect x="80" y="40" width="16" height="6" rx="1" fill="#2d5a3d15" />
      <rect x="24" y="50" width="24" height="6" rx="1" fill="#2d5a3d20" />
      <rect x="52" y="50" width="24" height="6" rx="1" fill="#2d5a3d20" />
      <rect x="80" y="50" width="16" height="6" rx="1" fill="#2d5a3d15" />
      <line x1="44" y1="62" x2="44" y2="70" stroke="#2d5a3d60" strokeWidth="1.5" />
      <ellipse cx="44" cy="62" rx="8" ry="5" fill="#2d5a3d25" stroke="#2d5a3d" strokeWidth="1" />
      <line x1="40" y1="62" x2="40" y2="58" stroke="#2d5a3d50" strokeWidth="1" />
      <line x1="48" y1="62" x2="48" y2="56" stroke="#2d5a3d50" strokeWidth="1" />
    </svg>
  );
}

export function FloraSensusWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="8" y="8" width="44" height="64" rx="6" stroke="#2d6b3f" strokeWidth="1.5" fill="#2d6b3f08" />
      <rect x="16" y="16" width="28" height="4" rx="2" fill="#2d6b3f30" />
      <rect x="16" y="24" width="28" height="4" rx="2" fill="#2d6b3f20" />
      <rect x="16" y="32" width="28" height="4" rx="2" fill="#2d6b3f15" />
      <circle cx="30" cy="50" r="8" stroke="#2d6b3f" strokeWidth="1" fill="none" />
      <path d="M30 46 L30 54 M26 50 L34 50" stroke="#2d6b3f" strokeWidth="1.5" />
      <path d="M18 64 L30 58 L42 64" stroke="#2d6b3f50" strokeWidth="1" fill="none" />
      <rect x="60" y="12" width="52" height="56" rx="4" stroke="#2d6b3d" strokeWidth="1" fill="#2d6b3f05" />
      <rect x="66" y="18" width="40" height="6" rx="1" fill="#2d6b3d18" />
      <rect x="66" y="28" width="40" height="6" rx="1" fill="#2d6b3d18" />
      <rect x="66" y="38" width="40" height="6" rx="1" fill="#2d6b3d18" />
      <rect x="66" y="48" width="40" height="6" rx="1" fill="#2d6b3d12" />
      <circle cx="100" cy="56" r="6" stroke="#2d6b3f" strokeWidth="1" fill="#2d6b3f15" />
      <path d="M98 56 L102 56 M100 54 L100 58" stroke="#2d6b3f" strokeWidth="1" />
    </svg>
  );
}

export function FennecWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M30 72 L30 38 C30 20 45 12 60 12 C75 12 90 20 90 38 L90 72" stroke="#c4853a" strokeWidth="1.5" fill="#c4853a08" />
      <path d="M30 38 L18 14" stroke="#c4853a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M90 38 L102 14" stroke="#c4853a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="48" cy="38" r="3" fill="#c4853a" />
      <circle cx="72" cy="38" r="3" fill="#c4853a" />
      <ellipse cx="60" cy="46" rx="4" ry="3" stroke="#c4853a" strokeWidth="1" fill="none" />
      <rect x="50" y="56" width="20" height="2" rx="1" fill="#c4853a40" />
      <rect x="48" y="60" width="24" height="2" rx="1" fill="#c4853a25" />
      <circle cx="38" cy="28" r="8" stroke="#c4853a40" strokeWidth="1" fill="none" strokeDasharray="2 2" />
      <circle cx="82" cy="28" r="8" stroke="#c4853a40" strokeWidth="1" fill="none" strokeDasharray="2 2" />
    </svg>
  );
}

export function InovesaWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="112" height="72" rx="4" stroke="#2a3a2a" strokeWidth="1.5" fill="#2a3a2a06" />
      <rect x="10" y="10" width="100" height="12" rx="2" stroke="#2a3a2a30" strokeWidth="0.75" fill="#2a3a2a08" />
      <circle cx="16" cy="16" r="2" fill="#2a3a2a40" />
      <circle cx="22" cy="16" r="2" fill="#2a3a2a30" />
      <circle cx="28" cy="16" r="2" fill="#2a3a2a20" />
      <rect x="14" y="28" width="24" height="3" rx="1.5" fill="#2a3a2a25" />
      <rect x="14" y="34" width="36" height="2" rx="1" fill="#2a3a2a15" />
      <rect x="14" y="39" width="30" height="2" rx="1" fill="#2a3a2a12" />
      <rect x="14" y="44" width="20" height="2" rx="1" fill="#2a3a2a10" />
      <path d="M70 28 L80 28 L80 44 L70 44 Z" stroke="#2a3a2a" strokeWidth="1" fill="#2a3a2a08" />
      <line x1="70" y1="34" x2="80" y2="34" stroke="#2a3a2a30" strokeWidth="0.5" />
      <line x1="70" y1="38" x2="80" y2="38" stroke="#2a3a2a30" strokeWidth="0.5" />
      <path d="M86 28 L106 28 L106 44 L86 44 Z" stroke="#2a3a2a" strokeWidth="1" fill="#2a3a2a08" />
      <circle cx="96" cy="36" r="4" stroke="#2a3a2a" strokeWidth="0.75" fill="none" />
      <path d="M14 52 L46 52 L46 68 L14 68 Z" stroke="#2a3a2a40" strokeWidth="0.75" fill="#2a3a2a06" />
      <path d="M54 52 L106 52 L106 68 L54 68 Z" stroke="#2a3a2a40" strokeWidth="0.75" fill="#2a3a2a06" />
      <path d="M60 62 L66 56 L72 64 L78 58 L84 66 L96 66" stroke="#2a3a2a50" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function AguaQualityWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M60 10 C60 10 36 30 36 48 C36 61 47 70 60 70 C73 70 84 61 84 48 C84 30 60 10 60 10Z" stroke="#1a3a4a" strokeWidth="1.5" fill="#1a3a4a08" />
      <path d="M48 44 C48 38 54 34 60 34 C66 34 72 38 72 44" stroke="#1a3a4a40" strokeWidth="1" fill="none" />
      <circle cx="52" cy="50" r="2" fill="#1a3a4a" />
      <circle cx="60" cy="48" r="2" fill="#1a3a4a" />
      <circle cx="68" cy="50" r="2" fill="#1a3a4a" />
      <path d="M24 56 L24 40 L36 40" stroke="#1a3a4a60" strokeWidth="1" fill="none" />
      <circle cx="24" cy="56" r="4" stroke="#1a3a4a" strokeWidth="1" fill="none" />
      <path d="M24 53 L24 59 M21 56 L27 56" stroke="#1a3a4a" strokeWidth="1" />
      <rect x="84" y="38" width="20" height="24" rx="3" stroke="#1a3a4a" strokeWidth="1" fill="#1a3a4a08" />
      <rect x="88" y="42" width="12" height="2" rx="1" fill="#1a3a4a25" />
      <rect x="88" y="47" width="12" height="2" rx="1" fill="#1a3a4a18" />
      <rect x="88" y="52" width="12" height="2" rx="1" fill="#1a3a4a12" />
    </svg>
  );
}

export function HelloSocialWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="10" y="8" width="100" height="64" rx="8" stroke="#2a1a3a" strokeWidth="1.5" fill="#2a1a3a08" />
      <circle cx="40" cy="30" r="14" stroke="#2a1a3a" strokeWidth="1" fill="#2a1a3a10" />
      <circle cx="40" cy="30" r="6" fill="#2a1a3a20" />
      <circle cx="40" cy="30" r="2" fill="#2a1a3a" />
      <rect x="60" y="18" width="40" height="4" rx="2" fill="#2a1a3a25" />
      <rect x="60" y="26" width="30" height="3" rx="1.5" fill="#2a1a3a15" />
      <rect x="60" y="33" width="36" height="3" rx="1.5" fill="#2a1a3a12" />
      <rect x="20" y="52" width="80" height="12" rx="6" stroke="#2a1a3a40" strokeWidth="1" fill="#2a1a3a06" />
      <circle cx="34" cy="58" r="2.5" fill="#2a1a3a30" />
      <circle cx="44" cy="58" r="2.5" fill="#2a1a3a20" />
      <circle cx="54" cy="58" r="2.5" fill="#2a1a3a15" />
      <path d="M78 54 L86 58 L78 62 Z" fill="#2a1a3a25" />
    </svg>
  );
}

export function MaineCoonWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M24 72 L24 40 L36 24 L60 24 L84 24 L96 40 L96 72" stroke="#2a2a1a" strokeWidth="1.5" fill="#2a2a1a08" />
      <path d="M36 24 L30 10" stroke="#2a2a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M84 24 L90 10" stroke="#2a2a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="42" y="34" width="12" height="16" rx="2" stroke="#2a2a1a" strokeWidth="1" fill="#2a2a1a12" />
      <rect x="66" y="34" width="12" height="16" rx="2" stroke="#2a2a1a" strokeWidth="1" fill="#2a2a1a12" />
      <rect x="44" y="38" width="8" height="4" rx="1" fill="#2a2a1a30" />
      <rect x="68" y="38" width="8" height="4" rx="1" fill="#2a2a1a30" />
      <rect x="48" y="54" width="24" height="8" rx="2" stroke="#2a2a1a" strokeWidth="1" fill="#2a2a1a10" />
      <rect x="52" y="56" width="4" height="2" rx="0.5" fill="#2a2a1a30" />
      <rect x="58" y="56" width="4" height="2" rx="0.5" fill="#2a2a1a30" />
      <rect x="64" y="56" width="4" height="2" rx="0.5" fill="#2a2a1a30" />
      <path d="M24 48 L14 52 L14 64 L24 64" stroke="#2a2a1a50" strokeWidth="0.75" fill="none" strokeDasharray="2 2" />
      <text x="14" y="70" fontSize="5" fontFamily="monospace" fill="#2a2a1a40">/cmd</text>
    </svg>
  );
}

export function FinanceTrackerWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="20" y="4" width="80" height="72" rx="10" stroke="#1a2a3a" strokeWidth="1.5" fill="#1a2a3a06" />
      <rect x="28" y="14" width="64" height="8" rx="4" stroke="#1a2a3a30" strokeWidth="0.75" fill="#1a2a3a08" />
      <text x="60" y="20" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="#1a2a3a40">$ 1,240.00</text>
      <rect x="28" y="28" width="30" height="20" rx="3" stroke="#1a2a3a" strokeWidth="1" fill="#1a2a3a08" />
      <path d="M32 44 L38 38 L44 42 L52 34 L56 40" stroke="#1a2a3a" strokeWidth="1.2" fill="none" />
      <circle cx="32" cy="44" r="1.5" fill="#1a2a3a" />
      <circle cx="38" cy="38" r="1.5" fill="#1a2a3a" />
      <circle cx="44" cy="42" r="1.5" fill="#1a2a3a" />
      <circle cx="52" cy="34" r="1.5" fill="#1a2a3a" />
      <circle cx="56" cy="40" r="1.5" fill="#1a2a3a" />
      <rect x="62" y="28" width="30" height="20" rx="3" stroke="#1a2a3a40" strokeWidth="0.75" fill="#1a2a3a05" />
      <rect x="66" y="32" width="22" height="3" rx="1.5" fill="#1a2a3a20" />
      <rect x="66" y="38" width="18" height="3" rx="1.5" fill="#1a2a3a15" />
      <rect x="66" y="44" width="20" height="3" rx="1.5" fill="#1a2a3a12" />
      <rect x="28" y="52" width="64" height="14" rx="3" stroke="#1a2a3a30" strokeWidth="0.75" fill="#1a2a3a05" />
      <rect x="34" y="56" width="24" height="6" rx="3" fill="#1a2a3a15" />
      <rect x="62" y="56" width="24" height="6" rx="3" fill="#1a2a3a10" />
    </svg>
  );
}

export function ForestAIWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="112" height="72" rx="4" stroke="#2a301a" strokeWidth="1.5" fill="#2a301a06" />
      <rect x="10" y="10" width="50" height="50" rx="2" stroke="#2a301a30" strokeWidth="0.75" fill="#2a301a08" />
      <rect x="22" y="20" width="14" height="14" rx="1" stroke="#2a301a" strokeWidth="1" fill="none" />
      <rect x="42" y="24" width="12" height="12" rx="1" stroke="#2a301a80" strokeWidth="1" fill="none" strokeDasharray="2 1" />
      <rect x="14" y="38" width="10" height="10" rx="1" stroke="#2a301a80" strokeWidth="1" fill="none" strokeDasharray="2 1" />
      <rect x="30" y="40" width="16" height="12" rx="1" stroke="#2a301a" strokeWidth="1" fill="none" />
      <line x1="10" y1="50" x2="60" y2="50" stroke="#2a301a20" strokeWidth="0.5" />
      <line x1="10" y1="40" x2="60" y2="40" stroke="#2a301a20" strokeWidth="0.5" />
      <line x1="10" y1="30" x2="60" y2="30" stroke="#2a301a20" strokeWidth="0.5" />
      <rect x="66" y="10" width="46" height="12" rx="2" stroke="#2a301a30" strokeWidth="0.75" fill="#2a301a08" />
      <rect x="70" y="14" width="16" height="3" rx="1" fill="#2a301a25" />
      <rect x="88" y="14" width="8" height="3" rx="1" fill="#2a301a15" />
      <rect x="66" y="26" width="46" height="12" rx="2" stroke="#2a301a30" strokeWidth="0.75" fill="#2a301a08" />
      <rect x="70" y="30" width="20" height="3" rx="1" fill="#2a301a20" />
      <rect x="92" y="30" width="12" height="3" rx="1" fill="#2a301a12" />
      <circle cx="90" cy="52" r="8" stroke="#2a301a" strokeWidth="1" fill="none" />
      <line x1="90" y1="46" x2="90" y2="58" stroke="#2a301a40" strokeWidth="0.75" />
      <line x1="84" y1="52" x2="96" y2="52" stroke="#2a301a40" strokeWidth="0.75" />
      <path d="M90 48 L93 52 L90 56 L87 52 Z" fill="#2a301a30" stroke="#2a301a" strokeWidth="0.5" />
    </svg>
  );
}

export const projectWidgets: Record<string, (props: { className?: string }) => JSX.Element> = {
  harpia: HarpIAWidget,
  "srf-system": SRFWidget,
  florasensus: FloraSensusWidget,
  fennec: FennecWidget,
  inovesa: InovesaWidget,
  aguaquality: AguaQualityWidget,
  hellosocial: HelloSocialWidget,
  mainecoon: MaineCoonWidget,
  "finance-tracker": FinanceTrackerWidget,
  forestai: ForestAIWidget,
};
