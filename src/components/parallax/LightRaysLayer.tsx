export default function LightRaysLayer() {
  return (
    <div
      className="parallax-layer"
      style={{
        zIndex: 5,
        background:
          "conic-gradient(from 210deg at 25% 0%, transparent 0deg, rgba(234,178,121,0.06) 3deg, transparent 6deg, rgba(234,178,121,0.04) 9deg, transparent 12deg, rgba(234,178,121,0.07) 15deg, transparent 20deg, rgba(234,178,121,0.05) 23deg, transparent 26deg, rgba(234,178,121,0.03) 30deg, transparent 35deg, rgba(234,178,121,0.06) 38deg, transparent 42deg, transparent 360deg)",
        mixBlendMode: "screen",
        animation: "light-ray-shift 30s ease-in-out infinite alternate",
        pointerEvents: "none",
      }}
    />
  );
}
