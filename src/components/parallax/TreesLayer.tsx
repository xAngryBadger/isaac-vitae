export default function TreesLayer() {
  return (
    <svg
      className="parallax-layer"
      style={{ zIndex: 3 }}
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="rgba(45,58,47,0.25)">
        <path d="M60 400 L60 280 Q50 260 70 240 Q55 220 75 200 Q60 180 80 160 L80 400 Z" />
        <path d="M120 400 L120 300 Q110 280 130 260 Q115 240 135 220 L135 400 Z" />

        <path d="M300 400 L310 240 Q290 220 320 200 Q300 180 330 160 Q310 140 340 120 L330 400 Z" />
        <ellipse cx="320" cy="130" rx="30" ry="40" fill="rgba(45,58,47,0.18)" />
        <ellipse cx="340" cy="160" rx="25" ry="35" fill="rgba(45,58,47,0.15)" />

        <path d="M560 400 L565 220 Q545 195 575 170 Q555 145 585 125 Q570 105 590 90 L585 400 Z" />
        <ellipse cx="580" cy="100" rx="35" ry="45" fill="rgba(45,58,47,0.2)" />
        <ellipse cx="600" cy="135" rx="30" ry="38" fill="rgba(45,58,47,0.16)" />

        <path d="M880 400 L885 260 Q865 240 895 220 Q875 200 905 180 L900 400 Z" />
        <ellipse cx="900" cy="190" rx="28" ry="35" fill="rgba(45,58,47,0.18)" />

        <path d="M1100 400 L1105 200 Q1085 175 1115 155 Q1095 135 1125 115 Q1110 95 1130 80 L1125 400 Z" />
        <ellipse cx="1120" cy="90" rx="32" ry="42" fill="rgba(45,58,47,0.2)" />
        <ellipse cx="1140" cy="125" rx="28" ry="36" fill="rgba(45,58,47,0.15)" />

        <path d="M1320 400 L1325 280 Q1305 255 1335 235 Q1315 215 1345 195 L1340 400 Z" />
        <ellipse cx="1340" cy="200" rx="26" ry="32" fill="rgba(45,58,47,0.17)" />
      </g>
    </svg>
  );
}
