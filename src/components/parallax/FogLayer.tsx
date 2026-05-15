export default function FogLayer() {
  return (
    <div
      className="parallax-layer"
      style={{
        zIndex: 11,
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(69,106,75,0.04) 30%, rgba(69,106,75,0.08) 50%, rgba(69,106,75,0.04) 70%, transparent 100%)",
        animation: "fog-drift 20s ease-in-out infinite alternate",
        pointerEvents: "none",
      }}
    />
  );
}
