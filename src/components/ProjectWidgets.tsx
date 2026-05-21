import type { JSX } from "react";

export function HarpIAWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="24" width="28" height="32" rx="4" stroke="#FFB800" strokeWidth="1.5" fill="#FFB80010" />
      <text x="18" y="44" textAnchor="middle" fontSize="8" fontFamily="'Space Mono', monospace" fill="#FFB800" fontWeight="600">TXT</text>
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

export function OrcaWidget({ className }: { className?: string }) {
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
      <text x="14" y="70" fontSize="5" fontFamily="'Space Mono', monospace" fill="#2a2a1a40">/cmd</text>
    </svg>
  );
}

export function FinanceTrackerWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="20" y="4" width="80" height="72" rx="10" stroke="#1a2a3a" strokeWidth="1.5" fill="#1a2a3a06" />
      <rect x="28" y="14" width="64" height="8" rx="4" stroke="#1a2a3a30" strokeWidth="0.75" fill="#1a2a3a08" />
      <text x="60" y="20" textAnchor="middle" fontSize="5" fontFamily="'Space Mono', monospace" fill="#1a2a3a40">$ 1,240.00</text>
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

export function AppleProductPageWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="112" height="72" rx="4" stroke="#0a0a0a" strokeWidth="1.5" fill="#0a0a0a06" />
      <rect x="10" y="10" width="100" height="12" rx="2" fill="#0a0a0a08" />
      <circle cx="18" cy="16" r="2" fill="#0a0a0a30" />
      <circle cx="24" cy="16" r="2" fill="#0a0a0a20" />
      <circle cx="30" cy="16" r="2" fill="#0a0a0a15" />
      <text x="60" y="18" textAnchor="middle" fontSize="5" fontFamily="'Space Mono', monospace" fill="#0a0a0a40">SCROLL</text>
      <line x1="60" y1="28" x2="60" y2="68" stroke="#0a0a0a15" strokeWidth="0.5" />
      <circle cx="60" cy="44" r="12" stroke="#0a0a0a" strokeWidth="1" fill="#0a0a0a08" />
      <circle cx="60" cy="44" r="5" stroke="#0a0a0a60" strokeWidth="0.75" fill="none" />
      <circle cx="60" cy="44" r="1.5" fill="#0a0a0a" />
      <path d="M30 34 L40 30" stroke="#0a0a0a20" strokeWidth="0.75" />
      <path d="M80 30 L90 34" stroke="#0a0a0a20" strokeWidth="0.75" />
      <path d="M30 54 L40 58" stroke="#0a0a0a20" strokeWidth="0.75" />
      <path d="M80 58 L90 54" stroke="#0a0a0a20" strokeWidth="0.75" />
      <rect x="14" y="64" width="20" height="2" rx="1" fill="#0a0a0a20" />
      <rect x="86" y="64" width="20" height="2" rx="1" fill="#0a0a0a20" />
      <rect x="44" y="62" width="32" height="3" rx="1.5" fill="#0a0a0a25" />
    </svg>
  );
}

export function JsonForgeWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="56" height="72" rx="3" stroke="#1a1a2e" strokeWidth="1.5" fill="#1a1a2e06" />
      <text x="32" y="16" textAnchor="middle" fontSize="7" fontFamily="'Space Mono', monospace" fill="#1a1a2e50" fontWeight="700">{}</text>
      <rect x="10" y="22" width="44" height="2" rx="1" fill="#1a1a2e18" />
      <rect x="14" y="28" width="36" height="2" rx="1" fill="#1a1a2e12" />
      <rect x="14" y="34" width="28" height="2" rx="1" fill="#1a1a2e15" />
      <rect x="18" y="40" width="32" height="2" rx="1" fill="#1a1a2e10" />
      <rect x="14" y="46" width="24" height="2" rx="1" fill="#1a1a2e12" />
      <rect x="10" y="52" width="44" height="2" rx="1" fill="#1a1a2e08" />
      <rect x="66" y="4" width="50" height="36" rx="3" stroke="#1a1a2e" strokeWidth="1" fill="#1a1a2e05" />
      <circle cx="78" cy="14" r="4" stroke="#1a1a2e60" strokeWidth="0.75" fill="#1a1a2e10" />
      <circle cx="104" cy="14" r="4" stroke="#1a1a2e60" strokeWidth="0.75" fill="#1a1a2e10" />
      <line x1="78" y1="18" x2="104" y2="18" stroke="#1a1a2e40" strokeWidth="0.75" />
      <line x1="82" y1="14" x2="100" y2="14" stroke="#1a1a2e25" strokeWidth="0.75" />
      <circle cx="91" cy="30" r="5" stroke="#1a1a2e40" strokeWidth="0.75" fill="#1a1a2e08" />
      <rect x="66" y="44" width="50" height="32" rx="3" stroke="#1a1a2e30" strokeWidth="0.75" fill="#1a1a2e04" />
      <rect x="72" y="50" width="16" height="2" rx="1" fill="#1a1a2e20" />
      <rect x="72" y="55" width="38" height="2" rx="1" fill="#1a1a2e12" />
      <rect x="72" y="60" width="30" height="2" rx="1" fill="#1a1a2e15" />
      <rect x="72" y="65" width="34" height="2" rx="1" fill="#1a1a2e10" />
    </svg>
  );
}

export function NotionEditorWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="112" height="72" rx="4" stroke="#191919" strokeWidth="1.5" fill="#19191906" />
      <rect x="4" y="4" width="24" height="72" rx="4" stroke="#19191930" strokeWidth="0.75" fill="#19191904" />
      <rect x="10" y="12" width="12" height="2" rx="1" fill="#19191925" />
      <rect x="10" y="18" width="10" height="2" rx="1" fill="#19191918" />
      <rect x="10" y="24" width="12" height="2" rx="1" fill="#19191915" />
      <rect x="10" y="30" width="8" height="2" rx="1" fill="#19191912" />
      <rect x="34" y="14" width="40" height="4" rx="1" fill="#19191930" />
      <rect x="34" y="22" width="70" height="2" rx="1" fill="#19191912" />
      <rect x="34" y="28" width="60" height="2" rx="1" fill="#19191910" />
      <rect x="34" y="34" width="65" height="2" rx="1" fill="#19191908" />
      <rect x="34" y="42" width="28" height="3" rx="1" fill="#19191922" />
      <rect x="34" y="49" width="70" height="2" rx="1" fill="#19191910" />
      <rect x="34" y="55" width="55" height="2" rx="1" fill="#19191908" />
      <rect x="34" y="61" width="62" height="2" rx="1" fill="#19191906" />
      <rect x="34" y="67" width="48" height="2" rx="1" fill="#19191905" />
      <circle cx="104" cy="68" r="4" stroke="#19191950" strokeWidth="0.75" fill="#19191908" />
      <text x="104" y="70" textAnchor="middle" fontSize="4" fontFamily="'Space Mono', monospace" fill="#19191950">/</text>
    </svg>
  );
}

export function LinearAppUIWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="20" height="72" rx="3" stroke="#5e6ad2" strokeWidth="1" fill="#5e6ad205" />
      <circle cx="14" cy="14" r="3" fill="#5e6ad225" />
      <rect x="10" y="22" width="8" height="2" rx="1" fill="#5e6ad220" />
      <rect x="10" y="28" width="8" height="2" rx="1" fill="#5e6ad215" />
      <rect x="10" y="34" width="8" height="2" rx="1" fill="#5e6ad210" />
      <rect x="28" y="4" width="88" height="72" rx="3" stroke="#5e6ad2" strokeWidth="1.5" fill="#5e6ad204" />
      <rect x="28" y="4" width="88" height="14" rx="3" stroke="#5e6ad225" strokeWidth="0.75" fill="#5e6ad206" />
      <rect x="34" y="8" width="20" height="2" rx="1" fill="#5e6ad220" />
      <rect x="58" y="8" width="14" height="2" rx="1" fill="#5e6ad212" />
      <rect x="96" y="8" width="14" height="4" rx="2" stroke="#5e6ad240" strokeWidth="0.75" fill="#5e6ad208" />
      <text x="103" y="11.5" textAnchor="middle" fontSize="4" fontFamily="'Space Mono', monospace" fill="#5e6ad250">⌘K</text>
      <rect x="34" y="24" width="24" height="8" rx="2" stroke="#5e6ad250" strokeWidth="0.75" fill="#5e6ad210" />
      <rect x="38" y="28" width="16" height="2" rx="1" fill="#5e6ad225" />
      <rect x="62" y="24" width="24" height="8" rx="2" stroke="#5e6ad225" strokeWidth="0.75" fill="#5e6ad206" />
      <rect x="66" y="28" width="16" height="2" rx="1" fill="#5e6ad215" />
      <rect x="34" y="38" width="76" height="6" rx="1" fill="#5e6ad208" />
      <rect x="38" y="40" width="4" height="2" rx="0.5" fill="#5e6ad240" />
      <rect x="46" y="40" width="24" height="2" rx="1" fill="#5e6ad218" />
      <rect x="34" y="48" width="76" height="6" rx="1" fill="#5e6ad205" />
      <rect x="38" y="50" width="4" height="2" rx="0.5" fill="#5e6ad230" />
      <rect x="46" y="50" width="20" height="2" rx="1" fill="#5e6ad212" />
      <rect x="34" y="58" width="76" height="6" rx="1" fill="#5e6ad208" />
      <rect x="38" y="60" width="4" height="2" rx="0.5" fill="#5e6ad235" />
      <rect x="46" y="60" width="28" height="2" rx="1" fill="#5e6ad215" />
      <rect x="34" y="68" width="76" height="6" rx="1" fill="#5e6ad204" />
      <rect x="38" y="70" width="4" height="2" rx="0.5" fill="#5e6ad225" />
      <rect x="46" y="70" width="22" height="2" rx="1" fill="#5e6ad210" />
    </svg>
  );
}

export function DiskVisorWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="44" cy="40" r="28" stroke="#456A4B" strokeWidth="1.5" fill="#456A4B06" />
      <circle cx="44" cy="40" r="20" stroke="#456A4B30" strokeWidth="0.75" fill="none" />
      <circle cx="44" cy="40" r="12" stroke="#456A4B25" strokeWidth="0.75" fill="none" />
      <circle cx="44" cy="40" r="4" stroke="#456A4B" strokeWidth="1" fill="#456A4B15" />
      <path d="M44 12 L44 16" stroke="#456A4B" strokeWidth="1" />
      <path d="M44 64 L44 68" stroke="#456A4B40" strokeWidth="0.75" />
      <path d="M16 40 L20 40" stroke="#456A4B40" strokeWidth="0.75" />
      <path d="M68 40 L72 40" stroke="#456A4B40" strokeWidth="0.75" />
      <path d="M24 20 L27 23" stroke="#456A4B30" strokeWidth="0.75" />
      <path d="M61 57 L64 60" stroke="#456A4B30" strokeWidth="0.75" />
      <rect x="80" y="10" width="32" height="56" rx="3" stroke="#456A4B30" strokeWidth="0.75" fill="#456A4B04" />
      <rect x="84" y="16" width="24" height="2" rx="1" fill="#456A4B18" />
      <rect x="84" y="22" width="20" height="2" rx="1" fill="#456A4B12" />
      <rect x="84" y="28" width="22" height="2" rx="1" fill="#456A4B10" />
      <rect x="84" y="34" width="18" height="2" rx="1" fill="#456A4B08" />
      <rect x="88" y="16" width="4" height="2" rx="0.5" fill="#456A4B30" />
      <rect x="88" y="22" width="4" height="2" rx="0.5" fill="#456A4B25" />
      <rect x="88" y="28" width="4" height="2" rx="0.5" fill="#456A4B20" />
      <rect x="88" y="34" width="4" height="2" rx="0.5" fill="#456A4B15" />
    </svg>
  );
}

export function SysVisorWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="112" height="72" rx="4" stroke="#0D1117" strokeWidth="1.5" fill="#0D111708" />
      <rect x="10" y="10" width="48" height="28" rx="2" stroke="#0D111740" strokeWidth="0.75" fill="#0D111706" />
      <text x="34" y="20" textAnchor="middle" fontSize="5" fontFamily="'Space Mono', monospace" fill="#0D111740">CPU</text>
      <rect x="14" y="24" width="8" height="10" rx="1" fill="#0D111715" stroke="#0D111730" strokeWidth="0.5" />
      <rect x="24" y="26" width="8" height="8" rx="1" fill="#0D111718" stroke="#0D111730" strokeWidth="0.5" />
      <rect x="34" y="28" width="8" height="6" rx="1" fill="#0D111712" stroke="#0D111730" strokeWidth="0.5" />
      <rect x="44" y="25" width="8" height="9" rx="1" fill="#0D111716" stroke="#0D111730" strokeWidth="0.5" />
      <rect x="62" y="10" width="48" height="28" rx="2" stroke="#0D111740" strokeWidth="0.75" fill="#0D111706" />
      <text x="86" y="20" textAnchor="middle" fontSize="5" fontFamily="'Space Mono', monospace" fill="#0D111740">MEM</text>
      <rect x="66" y="24" width="6" height="10" rx="1" fill="#0D111720" stroke="#0D111740" strokeWidth="0.5" />
      <rect x="74" y="26" width="6" height="8" rx="1" fill="#0D111715" stroke="#0D111740" strokeWidth="0.5" />
      <rect x="82" y="22" width="6" height="12" rx="1" fill="#0D111722" stroke="#0D111740" strokeWidth="0.5" />
      <rect x="90" y="28" width="6" height="6" rx="1" fill="#0D111710" stroke="#0D111740" strokeWidth="0.5" />
      <rect x="98" y="24" width="6" height="10" rx="1" fill="#0D111718" stroke="#0D111740" strokeWidth="0.5" />
      <rect x="10" y="42" width="100" height="28" rx="2" stroke="#0D111730" strokeWidth="0.75" fill="#0D111704" />
      <rect x="14" y="48" width="92" height="2" rx="1" fill="#0D111712" />
      <rect x="14" y="54" width="92" height="2" rx="1" fill="#0D111710" />
      <rect x="14" y="60" width="92" height="2" rx="1" fill="#0D111708" />
      <circle cx="18" cy="49" r="1" fill="#0D111740" />
      <circle cx="18" cy="55" r="1" fill="#0D111730" />
      <circle cx="18" cy="61" r="1" fill="#0D111725" />
    </svg>
  );
}

export function ForgeUSBWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="30" y="8" width="60" height="24" rx="3" stroke="#A8611A" strokeWidth="1.5" fill="#A8611A08" />
      <rect x="36" y="12" width="24" height="16" rx="2" stroke="#A8611A50" strokeWidth="0.75" fill="#A8611A10" />
      <rect x="40" y="16" width="16" height="2" rx="1" fill="#A8611A30" />
      <rect x="40" y="20" width="12" height="2" rx="1" fill="#A8611A20" />
      <rect x="66" y="14" width="8" height="4" rx="1" fill="#A8611A30" />
      <rect x="66" y="22" width="8" height="4" rx="1" fill="#A8611A20" />
      <rect x="78" y="14" width="8" height="4" rx="1" fill="#A8611A15" />
      <rect x="78" y="22" width="8" height="4" rx="1" fill="#A8611A12" />
      <path d="M60 32 L60 44" stroke="#A8611A40" strokeWidth="1" />
      <path d="M56 40 L60 44 L64 40" stroke="#A8611A40" strokeWidth="1" fill="none" />
      <rect x="20" y="48" width="80" height="24" rx="4" stroke="#A8611A" strokeWidth="1.5" fill="#A8611A06" />
      <rect x="40" y="52" width="14" height="6" rx="2" stroke="#A8611A50" strokeWidth="0.75" fill="#A8611A10" />
      <rect x="58" y="52" width="14" height="6" rx="2" stroke="#A8611A50" strokeWidth="0.75" fill="#A8611A10" />
      <path d="M44 55 L50 55" stroke="#A8611A60" strokeWidth="0.75" />
      <path d="M62 55 L68 55" stroke="#A8611A60" strokeWidth="0.75" />
      <rect x="30" y="62" width="60" height="4" rx="2" fill="#A8611A12" />
      <rect x="30" y="62" width="24" height="4" rx="2" fill="#A8611A25" />
    </svg>
  );
}

export function DocXPDFConverterWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="8" width="50" height="64" rx="3" stroke="#3a5a8a" strokeWidth="1.5" fill="#3a5a8a06" />
      <rect x="10" y="14" width="38" height="4" rx="1" fill="#3a5a8a25" />
      <rect x="10" y="22" width="32" height="3" rx="1" fill="#3a5a8a15" />
      <rect x="10" y="28" width="36" height="3" rx="1" fill="#3a5a8a12" />
      <rect x="10" y="34" width="28" height="3" rx="1" fill="#3a5a8a10" />
      <text x="29" y="58" textAnchor="middle" fontSize="8" fontFamily="'Space Mono', monospace" fill="#3a5a8a40" fontWeight="700">DOC</text>
      <line x1="56" y1="40" x2="64" y2="40" stroke="#3a5a8a50" strokeWidth="1" />
      <polyline points="61,37 64,40 61,43" fill="none" stroke="#3a5a8a50" strokeWidth="1" />
      <rect x="66" y="8" width="50" height="64" rx="3" stroke="#3a5a8a" strokeWidth="1.5" fill="#3a5a8a08" />
      <rect x="72" y="14" width="38" height="4" rx="1" fill="#3a5a8a20" />
      <rect x="72" y="22" width="32" height="3" rx="1" fill="#3a5a8a12" />
      <rect x="72" y="28" width="36" height="3" rx="1" fill="#3a5a8a10" />
      <rect x="72" y="34" width="28" height="3" rx="1" fill="#3a5a8a08" />
      <circle cx="91" cy="56" r="10" stroke="#3a5a8a" strokeWidth="1" fill="none" />
      <path d="M88 56 L91 53 L94 56 M91 53 L91 60" stroke="#3a5a8a" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function PDFCompressorWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="16" y="8" width="88" height="64" rx="4" stroke="#5a3a6a" strokeWidth="1.5" fill="#5a3a6a06" />
      <rect x="24" y="16" width="44" height="48" rx="2" stroke="#5a3a6a40" strokeWidth="1" fill="#5a3a6a08" />
      <rect x="30" y="22" width="32" height="3" rx="1" fill="#5a3a6a20" />
      <rect x="30" y="28" width="28" height="2" rx="1" fill="#5a3a6a15" />
      <rect x="30" y="33" width="32" height="2" rx="1" fill="#5a3a6a12" />
      <rect x="30" y="38" width="24" height="2" rx="1" fill="#5a3a6a10" />
      <path d="M36 50 L42 44 L48 50" stroke="#5a3a6a50" strokeWidth="1.5" fill="none" />
      <line x1="42" y1="44" x2="42" y2="58" stroke="#5a3a6a50" strokeWidth="1.5" />
      <rect x="76" y="20" width="20" height="40" rx="2" stroke="#5a3a6a30" strokeWidth="1" fill="#5a3a6a04" />
      <rect x="80" y="24" width="12" height="32" rx="1" fill="#5a3a6a15" />
      <rect x="80" y="44" width="12" height="12" rx="1" fill="#5a3a6a30" />
      <circle cx="86" cy="50" r="2" fill="#5a3a6a60" />
    </svg>
  );
}

export function CVGeneratorWidget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="56" height="72" rx="3" stroke="#4a6a3a" strokeWidth="1.5" fill="#4a6a3a06" />
      <rect x="10" y="10" width="44" height="8" rx="1" fill="#4a6a3a25" />
      <rect x="10" y="22" width="44" height="4" rx="1" fill="#4a6a3a15" />
      <rect x="10" y="30" width="20" height="3" rx="1" fill="#4a6a3a20" />
      <rect x="10" y="36" width="44" height="2" rx="1" fill="#4a6a3a12" />
      <rect x="10" y="41" width="40" height="2" rx="1" fill="#4a6a3a10" />
      <rect x="10" y="46" width="44" height="2" rx="1" fill="#4a6a3a08" />
      <rect x="10" y="54" width="20" height="3" rx="1" fill="#4a6a3a20" />
      <rect x="10" y="60" width="44" height="2" rx="1" fill="#4a6a3a12" />
      <rect x="10" y="65" width="36" height="2" rx="1" fill="#4a6a3a10" />
      <line x1="62" y1="40" x2="70" y2="40" stroke="#4a6a3a50" strokeWidth="1" />
      <polyline points="67,37 70,40 67,43" fill="none" stroke="#4a6a3a50" strokeWidth="1" />
      <rect x="72" y="8" width="44" height="64" rx="3" stroke="#4a6a3a" strokeWidth="1.5" fill="#4a6a3a08" />
      <rect x="78" y="14" width="32" height="6" rx="1" fill="#4a6a3a30" />
      <circle cx="86" cy="30" r="6" stroke="#4a6a3a50" strokeWidth="0.75" fill="#4a6a3a10" />
      <rect x="78" y="40" width="32" height="2" rx="1" fill="#4a6a3a18" />
      <rect x="78" y="45" width="28" height="2" rx="1" fill="#4a6a3a14" />
      <rect x="78" y="50" width="32" height="2" rx="1" fill="#4a6a3a12" />
      <rect x="78" y="58" width="16" height="6" rx="2" stroke="#4a6a3a40" strokeWidth="0.75" fill="#4a6a3a08" />
      <rect x="96" y="58" width="14" height="6" rx="2" stroke="#4a6a3a50" strokeWidth="0.75" fill="#4a6a3a12" />
    </svg>
  );
}

export const projectWidgets: Record<string, (props: { className?: string }) => JSX.Element> = {
  harpia: HarpIAWidget,
  orca: OrcaWidget,
  florasensus: FloraSensusWidget,
  fennec: FennecWidget,
  inovesa: InovesaWidget,
  aguaquality: AguaQualityWidget,
  hellosocial: HelloSocialWidget,
  mainecoon: MaineCoonWidget,
  "finance-tracker": FinanceTrackerWidget,
  forestai: ForestAIWidget,
  "apple-product-page": AppleProductPageWidget,
  "json-forge": JsonForgeWidget,
  "notion-editor": NotionEditorWidget,
  "linear-app-ui": LinearAppUIWidget,
  diskvisor: DiskVisorWidget,
  sysvisor: SysVisorWidget,
  "forge-usb": ForgeUSBWidget,
  "docx-pdf-converter": DocXPDFConverterWidget,
  "pdf-compressor": PDFCompressorWidget,
  "cegonha": CVGeneratorWidget,
};
