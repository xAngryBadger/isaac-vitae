const RUNES = [
  { glyph: "\u16A0", x: 80, y: 30, rot: -5 },
  { glyph: "\u16A2", x: 220, y: 50, rot: 3 },
  { glyph: "\u16A6", x: 380, y: 25, rot: -8 },
  { glyph: "\u16A8", x: 540, y: 45, rot: 6 },
  { glyph: "\u16B1", x: 700, y: 30, rot: -3 },
  { glyph: "\u16B2", x: 860, y: 55, rot: 7 },
  { glyph: "\u16B7", x: 1020, y: 28, rot: -4 },
  { glyph: "\u16B9", x: 1180, y: 48, rot: 5 },
  { glyph: "\u16BA", x: 1340, y: 35, rot: -6 },
  { glyph: "\u16C1", x: 150, y: 65, rot: 8 },
  { glyph: "\u16C3", x: 460, y: 60, rot: -2 },
  { glyph: "\u16C7", x: 780, y: 58, rot: 4 },
  { glyph: "\u16CA", x: 1100, y: 62, rot: -7 },
];

const SLABS = [
  { x: 0, w: 320, h: 120 },
  { x: 300, w: 280, h: 110 },
  { x: 560, w: 340, h: 125 },
  { x: 880, w: 300, h: 115 },
  { x: 1160, w: 300, h: 120 },
];

export default function GroundLayer() {
  return (
    <svg
      className="parallax-layer"
      style={{ zIndex: 6, bottom: 0, top: "auto", height: "35%" }}
      viewBox="0 0 1440 120"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {SLABS.map((s, i) => (
        <g key={i}>
          <rect
            x={s.x}
            y={0}
            width={s.w}
            height={s.h}
            rx="1"
            fill={i % 2 === 0 ? "rgba(69,106,75,0.85)" : "rgba(92,110,96,0.8)"}
          />
          <line
            x1={s.x + 10}
            y1={20 + (i % 3) * 15}
            x2={s.x + s.w - 10}
            y2={22 + (i % 3) * 15}
            stroke="rgba(45,58,47,0.15)"
            strokeWidth="0.5"
          />
          <line
            x1={s.x + 20}
            y1={50 + (i % 2) * 20}
            x2={s.x + s.w - 20}
            y2={48 + (i % 2) * 20}
            stroke="rgba(45,58,47,0.1)"
            strokeWidth="0.5"
          />
        </g>
      ))}

      {RUNES.map((r, i) => (
        <text
          key={i}
          x={r.x}
          y={r.y}
          fill="rgba(168,97,26,0.3)"
          fontSize={14 + (i % 3) * 2}
          fontFamily="serif"
          transform={`rotate(${r.rot} ${r.x} ${r.y})`}
          opacity={0.5 + (i % 3) * 0.15}
        >
          {r.glyph}
        </text>
      ))}
    </svg>
  );
}
