export default function SkyLayer() {
  return (
    <div
      className="parallax-layer"
      style={{
        zIndex: 1,
        background:
          "radial-gradient(ellipse at 25% 20%, rgba(234,178,121,0.25) 0%, transparent 50%), radial-gradient(ellipse at 75% 15%, rgba(168,97,26,0.12) 0%, transparent 40%), linear-gradient(to bottom, #d8d0c4 0%, #e5dfd8 30%, #d4cfc5 60%, #b8c4b2 100%)",
        animation: "ken-burns 25s ease-in-out infinite alternate",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "22%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234,178,121,0.6) 0%, rgba(234,178,121,0.15) 40%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
