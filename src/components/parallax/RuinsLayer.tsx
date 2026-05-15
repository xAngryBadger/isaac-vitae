export default function RuinsLayer() {
  return (
    <svg
      className="parallax-layer"
      style={{ zIndex: 2 }}
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="rgba(69,106,75,0.15)">
        <rect x="180" y="140" width="18" height="180" rx="2" />
        <rect x="178" y="135" width="22" height="8" rx="1" />
        <rect x="175" y="128" width="28" height="8" rx="1" />
        <rect x="182" y="280" width="14" height="40" rx="1" opacity="0.7" />

        <rect x="380" y="160" width="14" height="160" rx="2" />
        <rect x="376" y="155" width="22" height="7" rx="1" />
        <path d="M376 155 Q387 148 398 155" fill="rgba(69,106,75,0.1)" />

        <rect x="620" y="100" width="22" height="220" rx="2" />
        <rect x="616" y="95" width="30" height="9" rx="1" />
        <rect x="613" y="86" width="36" height="10" rx="1" />
        <path d="M620 180 L630 175 L640 182" strokeWidth="3" stroke="rgba(69,106,75,0.12)" fill="none" />

        <rect x="980" y="130" width="16" height="190" rx="2" />
        <rect x="976" y="125" width="24" height="8" rx="1" />
        <rect x="983" y="260" width="10" height="60" rx="1" opacity="0.6" />

        <rect x="1180" y="150" width="20" height="170" rx="2" />
        <rect x="1176" y="145" width="28" height="8" rx="1" />
        <rect x="1173" y="137" width="34" height="9" rx="1" />

        <rect x="280" y="200" width="120" height="12" rx="2" opacity="0.5" transform="rotate(-2 340 206)" />
        <rect x="850" y="190" width="100" height="10" rx="2" opacity="0.4" transform="rotate(1 900 195)" />
      </g>

      <g fill="rgba(69,106,75,0.06)">
        <ellipse cx="189" cy="322" rx="20" ry="6" />
        <ellipse cx="631" cy="322" rx="24" ry="7" />
        <ellipse cx="989" cy="322" rx="18" ry="5" />
        <ellipse cx="1190" cy="322" rx="22" ry="6" />
      </g>
    </svg>
  );
}
