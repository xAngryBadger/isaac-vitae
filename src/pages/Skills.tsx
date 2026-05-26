import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useTransform } from "motion/react";
import { skillGroups, projects } from "../data/content";
import { useLang } from "../lib/LanguageContext";
import { Cpu, Server, Cloud, Brain, Plug, Wrench, Code2, ChevronDown, ArrowRight, Terminal, Layers, Activity, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import { EASE_PRIMARY, SCROLL_START } from "../lib/scroll-anim";

gsap.registerPlugin(ScrollTrigger, Draggable);

const DRAG_SPRING = "elastic.out(1, 0.5)";

const categoryIcons: Record<string, typeof Cpu> = {
  Frontend: Cpu,
  Backend: Server,
  "Cloud & Infra": Cloud,
  "IA & Data": Brain,
  Integrações: Plug,
  Outros: Wrench,
};

function CodeReveal({ language, code, color }: { language: string; code: string; color: string }) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 group"
        style={{
          padding: "0.35rem 0.85rem",
          border: `1px solid ${color}30`,
borderRadius: "0",
  background: "transparent",
  fontFamily: "var(--font-mono)",
  fontSize: "0.65rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: color,
          cursor: "pointer",
          transition: "border-color 0.3s, background-color 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = color;
          el.style.backgroundColor = `${color}10`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = `${color}30`;
          el.style.backgroundColor = "transparent";
        }}
      >
        <Code2 className="w-3 h-3" />
        {open ? t({ pt: "Ocultar Código", en: "Hide Code" }) : t({ pt: "Ver Código", en: "View Code" })}
        <ChevronDown
          className="w-3 h-3 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <div
        style={{
          maxHeight: open ? "400px" : "0",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s var(--ease-spring-1, ease), opacity 0.4s ease",
          marginTop: "0.75rem",
        }}
      >
        <div style={{ position: "relative" }}>
          <span
            className="absolute top-2 right-2 z-10"
            style={{
              padding: "0.15rem 0.5rem",
              border: `1px solid ${color}25`,
borderRadius: "0",
  fontFamily: "var(--font-mono)",
  fontSize: "0.55rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: color,
              backgroundColor: `${color}08`,
              opacity: 0.7,
            }}
          >
            {language}
          </span>
          <pre
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              lineHeight: "1.65",
              background: "var(--color-bg-deep)",
borderRadius: "0",
  padding: "1rem 1.25rem",
              overflowX: "auto" as const,
              color: "var(--color-text-2)",
              border: "1px solid var(--color-border)",
              margin: 0,
            }}
          >
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function SpringDemo() {
  const boxRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const box = boxRef.current;
    const track = trackRef.current;
    if (!box || !track) return;

    const dragger = Draggable.create(box, {
      type: "x",
      bounds: track,
      inertia: false,
      onDragEnd() {
        gsap.to(box, {
          x: 0,
          duration: 1.4,
          ease: DRAG_SPRING,
        });
      },
    });

    return () => {
      dragger[0]?.kill();
    };
  }, []);

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-3.5 h-3.5" style={{ color: "var(--color-text-2)", opacity: 0.7 }} />
        <span className="font-mono text-xs tracking-wider uppercase" style={{ color: "var(--color-text-2)", opacity: 0.7 }}>
          {t({ pt: "Física de Mola", en: "Spring Physics" })}
        </span>
      </div>
      <p className="text-xs mb-5" style={{ color: "var(--color-text-3)", lineHeight: 1.6 }}>
      {t({ pt: "Arraste o bloco e solte. Ele volta com a mesma curva spring usada no site inteiro.", en: "Drag the block and release. It snaps back with the same spring curve used across the entire site." })}
      </p>
      <div
        ref={trackRef}
        style={{
          position: "relative",
          height: "80px",
          border: "1px solid var(--color-border)",
borderRadius: "0",
  background: "var(--color-bg)",
  overflow: "hidden",
}}
>
<div
style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "var(--color-text-2)",
            opacity: 0.15,
          }}
        />
        <div
          ref={boxRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(50% - 24px)",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
borderRadius: "2px",
  background: "var(--color-text-2)",
            cursor: "grab",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px var(--color-accent-20)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-bg)" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="font-mono" style={{ fontSize: "0.55rem", color: "var(--color-text-3)", opacity: 0.4, letterSpacing: "0.1em" }}>-X</span>
        <span className="font-mono" style={{ fontSize: "0.55rem", color: "var(--color-text-2)", opacity: 0.5, letterSpacing: "0.1em" }}>0</span>
        <span className="font-mono" style={{ fontSize: "0.55rem", color: "var(--color-text-3)", opacity: 0.4, letterSpacing: "0.1em" }}>+X</span>
      </div>
    </div>
  );
}

function ParallaxDemo() {
  const { t } = useLang();
  const scrollY = useMotionValue(0);
  const layer1Y = useTransform(scrollY, [0, 300], [0, -15]);
  const layer2Y = useTransform(scrollY, [0, 300], [0, -35]);
  const layer3Y = useTransform(scrollY, [0, 300], [0, -60]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Layers className="w-3.5 h-3.5" style={{ color: "var(--color-text-2)", opacity: 0.7 }} />
        <span className="font-mono text-xs tracking-wider uppercase" style={{ color: "var(--color-text-2)", opacity: 0.7 }}>
          {t({ pt: "Profundidade Parallax", en: "Parallax Depth" })}
        </span>
      </div>
      <p className="text-xs mb-5" style={{ color: "var(--color-text-3)", lineHeight: 1.6 }}>
      {t({ pt: "Mova o controle para ver camadas se deslocando em velocidades diferentes — o mesmo efeito do hero.", en: "Move the control to see layers shifting at different speeds — the same effect as the hero." })}
      </p>
      <div
        style={{
          position: "relative",
height: "120px",
border: "1px solid var(--color-border)",
borderRadius: "0",
background: "var(--color-bg)",
          overflow: "hidden",
        }}
      >
        <motion.div style={{ y: layer1Y, position: "absolute", inset: 0 }}>
          <div style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "1.5px solid var(--color-accent)",
            opacity: 0.12,
          }} />
        </motion.div>
        <motion.div style={{ y: layer2Y, position: "absolute", inset: 0 }}>
          <div style={{
            position: "absolute",
            top: "30%",
            left: "45%",
width: "40px",
height: "40px",
borderRadius: "2px",
            background: "var(--color-text-2)",
            opacity: 0.15,
          }} />
          <div style={{
            position: "absolute",
            top: "55%",
            left: "25%",
width: "24px",
height: "24px",
borderRadius: "0",
            border: "1px solid var(--color-accent)",
            opacity: 0.2,
            transform: "rotate(45deg)",
          }} />
        </motion.div>
        <motion.div style={{ y: layer3Y, position: "absolute", inset: 0 }}>
          <div style={{
            position: "absolute",
            top: "15%",
            right: "15%",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--color-text-2)",
            opacity: 0.5,
          }} />
          <div style={{
            position: "absolute",
            bottom: "20%",
            left: "65%",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--color-text-2)",
            opacity: 0.4,
          }} />
          <div style={{
            position: "absolute",
            top: "60%",
            left: "75%",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "var(--color-text-2)",
            opacity: 0.35,
          }} />
        </motion.div>
        <div style={{
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.5rem",
          letterSpacing: "0.12em",
          color: "var(--color-text-3)",
          opacity: 0.4,
          textTransform: "uppercase",
        }}>
          parallax layers
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={300}
        defaultValue={150}
        style={{
          width: "100%",
          marginTop: "0.75rem",
          accentColor: "var(--color-accent)",
          height: "2px",
        }}
        onInput={(e) => {
          scrollY.set(Number((e.target as HTMLInputElement).value));
        }}
      />
    </div>
  );
}

function ReActDemo() {
  const { t } = useLang();
  const [phase, setPhase] = useState<"idle" | "thinking" | "acting" | "observing" | "responding">("idle");
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const steps = [
    { key: "thinking" as const, label: t({ pt: "Pensando", en: "Thinking" }), text: t({ pt: "Consultando base de conhecimento sobre espécies da Mata Atlântica...", en: "Querying knowledge base about Atlantic Forest species..." }) },
  { key: "acting" as const, label: t({ pt: "Agindo", en: "Acting" }), text: t({ pt: "deepforest.predict(imagem_usuario, modelo='atlantic_v3')", en: "deepforest.predict(user_image, model='atlantic_v3')" }) },
  { key: "observing" as const, label: t({ pt: "Observando", en: "Observing" }), text: t({ pt: "Resultado: Jacarandá (Dalbergia nigra) — confiança 94.2%. Espécie ameaçada.", en: "Result: Jacarandá (Dalbergia nigra) — 94.2% confidence. Endangered species." }) },
  { key: "responding" as const, label: t({ pt: "Respondendo", en: "Responding" }), text: t({ pt: "Esta é uma Jacarandá-da-Bahia, espécie ameaçada de extinção. Coordenadas registradas no banco para monitoramento.", en: "This is a Jacarandá-da-Bahia, an endangered species. Coordinates logged in the database for monitoring." }) },
  ];

  const runCycle = useCallback(() => {
    setPhase("thinking");
    setDisplayedText("");

    let stepIndex = 0;

    const typeStep = () => {
      if (stepIndex >= steps.length) {
        setTimeout(() => {
          setPhase("idle");
          setDisplayedText("");
        }, 2000);
        return;
      }

      const step = steps[stepIndex];
      setPhase(step.key);
      setDisplayedText("");

      let charIndex = 0;
      const typeChar = () => {
        if (charIndex <= step.text.length) {
          setDisplayedText(step.text.slice(0, charIndex));
          charIndex++;
          timeoutRef.current = setTimeout(typeChar, 18);
        } else {
          stepIndex++;
          timeoutRef.current = setTimeout(typeStep, 800);
        }
      };
      typeChar();
    };

    typeStep();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [steps]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

const phaseColor: Record<string, string> = {
idle: "var(--color-text-3)",
thinking: "#8B6914",
acting: "var(--color-accent)",
observing: "#6B5B3D",
responding: "var(--color-accent)",
};

  const phaseIcons: Record<string, string> = {
    idle: "◇",
    thinking: "◎",
    acting: "▶",
    observing: "◉",
    responding: "✦",
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Terminal className="w-3.5 h-3.5" style={{ color: "var(--color-text-2)", opacity: 0.7 }} />
        <span className="font-mono text-xs tracking-wider uppercase" style={{ color: "var(--color-text-2)", opacity: 0.7 }}>
          {t({ pt: "Agente ReAct", en: "ReAct Agent" })}
        </span>
      </div>
      <p className="text-xs mb-5" style={{ color: "var(--color-text-3)", lineHeight: 1.6 }}>
      {t({ pt: "O loop Think → Act → Observe que impulsiona o HarpIA. Clique para simular.", en: "The Think → Act → Observe loop that powers HarpIA. Click to simulate." })}
      </p>
      <div
        style={{
border: "1px solid var(--color-border)",
borderRadius: "0",
background: "var(--color-bg)",
overflow: "hidden",
        }}
      >
        <div style={{
          padding: "0.5rem 0.85rem",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}>
          {steps.map((s, i) => (
            <span
              key={s.key}
              className="font-mono"
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: phase === s.key ? phaseColor[s.key] : "var(--color-text-3)",
                opacity: phase === s.key ? 1 : 0.35,
                transition: "color 0.3s, opacity 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <span style={{ opacity: phase === s.key ? 1 : 0.3 }}>{phaseIcons[s.key]}</span>
              {s.label}
              {i < steps.length - 1 && <span style={{ opacity: 0.2, margin: "0 0.15rem" }}>→</span>}
            </span>
          ))}
        </div>
        <div style={{ padding: "1rem 1.25rem", minHeight: "60px" }}>
          {phase === "idle" ? (
            <button
              onClick={runCycle}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--color-text-2)",
                background: "var(--color-sage-05)",
border: "1px solid var(--color-accent-20)",
borderRadius: "0",
padding: "0.5rem 1.2rem",
cursor: "pointer",
transition: "border-color 0.2s, background-color 0.2s",
}}
onMouseEnter={(e) => {
const el = e.currentTarget as HTMLElement;
el.style.borderColor = "var(--color-accent)";
el.style.backgroundColor = "var(--color-accent-12)";
}}
onMouseLeave={(e) => {
const el = e.currentTarget as HTMLElement;
el.style.borderColor = "var(--color-accent-20)";
el.style.backgroundColor = "var(--color-accent-06)";
}}
>
{t({ pt: "Executar Ciclo ReAct", en: "Run ReAct Cycle" })}
            </button>
          ) : (
            <div className="flex items-start gap-2">
              <span
                className="font-mono shrink-0"
                style={{ fontSize: "0.65rem", color: phaseColor[phase], opacity: 0.8, marginTop: "1px" }}
              >
                {phaseIcons[phase]}
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: "0.72rem",
                  lineHeight: "1.65",
                  color: phase === "acting" ? "var(--color-accent)" : "var(--color-text-2)",
                }}
              >
                {displayedText}
                <span style={{ animation: "blink 1s step-end infinite", opacity: 0.6 }}>▎</span>
              </span>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function PipelineDemo() {
  const { t } = useLang();
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const nodes = [
    { id: "req", label: "POST /webhook", sublabel: "FastAPI", color: "var(--color-text-2)" },
    { id: "auth", label: "validate_token()", sublabel: "Auth Middleware", color: "#6B5B3D" },
    { id: "db", label: "cosmos.read()", sublabel: "Azure Cosmos DB", color: "var(--color-accent)" },
    { id: "res", label: "200 OK + JSON", sublabel: "Response", color: "var(--color-text-2)" },
  ];

  const run = () => {
    if (running) return;
    setRunning(true);
    setActiveStep(0);

    const advance = (i: number) => {
      if (i >= nodes.length) {
        timeoutRef.current = setTimeout(() => {
          setActiveStep(-1);
          setRunning(false);
        }, 1200);
        return;
      }
      setActiveStep(i);
      timeoutRef.current = setTimeout(() => advance(i + 1), 700);
    };

    advance(0);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <GitBranch className="w-3.5 h-3.5" style={{ color: "var(--color-text-2)", opacity: 0.7 }} />
        <span className="font-mono text-xs tracking-wider uppercase" style={{ color: "var(--color-text-2)", opacity: 0.7 }}>
          {t({ pt: "Pipeline de API", en: "API Pipeline" })}
        </span>
      </div>
      <p className="text-xs mb-5" style={{ color: "var(--color-text-3)", lineHeight: 1.6 }}>
      {t({ pt: "Fluxo de dados FastAPI → Auth → Cosmos DB → Response. O mesmo padrão do backend do HarpIA.", en: "Data flow FastAPI → Auth → Cosmos DB → Response. The same pattern from HarpIA's backend." })}
      </p>
      <div
        style={{
border: "1px solid var(--color-border)",
borderRadius: "0",
background: "var(--color-bg)",
padding: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
          {nodes.map((node, i) => (
            <div key={node.id} style={{ display: "flex", alignItems: "center", gap: "0.5rem", flex: i < nodes.length - 1 ? 1 : "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.35rem",
                  minWidth: "80px",
                }}
              >
                <div
                  style={{
width: "44px",
height: "44px",
borderRadius: "2px",
                    border: `1.5px solid ${activeStep === i ? node.color : "var(--color-border)"}`,
                    background: activeStep === i ? `${node.color}12` : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "border-color 0.3s, background-color 0.3s, box-shadow 0.3s",
                    boxShadow: activeStep === i ? `0 0 16px ${node.color}20` : "none",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.55rem",
                      color: activeStep === i ? node.color : "var(--color-text-3)",
                      opacity: activeStep === i ? 1 : 0.4,
                      transition: "color 0.3s, opacity 0.3s",
                    }}
                  >
                    {i === 0 ? "→" : i === 1 ? "🔒" : i === 2 ? "⬡" : "✓"}
                  </span>
                </div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.55rem",
                    color: activeStep === i ? node.color : "var(--color-text-3)",
                    opacity: activeStep === i ? 1 : 0.4,
                    transition: "color 0.3s, opacity 0.3s",
                    letterSpacing: "0.04em",
                    textAlign: "center",
                  }}
                >
                  {node.label}
                </span>
                <span
                  style={{
                    fontSize: "0.45rem",
                    color: "var(--color-text-3)",
                    opacity: 0.35,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {node.sublabel}
                </span>
              </div>
              {i < nodes.length - 1 && (
                <div style={{ flex: 1, minWidth: "16px", position: "relative", height: "44px", display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      height: "1px",
                      width: "100%",
                      background: activeStep > i ? `linear-gradient(to right, ${nodes[i].color}40, ${nodes[i + 1].color}40)` : "var(--color-border)",
                      transition: "background 0.4s",
                    }}
                  />
                  {activeStep > i && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: nodes[i + 1].color,
                        transform: "translateY(-50%)",
                        animation: "pipelinePulse 0.6s ease-out",
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={run}
          disabled={running}
          style={{
            marginTop: "1.25rem",
            width: "100%",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            color: running ? "var(--color-text-3)" : "var(--color-accent)",
            background: running ? "transparent" : "var(--color-accent-06)",
border: `1px solid ${running ? "var(--color-border)" : "var(--color-accent-20)"}`,
borderRadius: "0",
padding: "0.5rem 1.2rem",
            cursor: running ? "not-allowed" : "pointer",
            transition: "border-color 0.2s, background-color 0.2s",
            opacity: running ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (running) return;
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--color-accent)";
            el.style.backgroundColor = "var(--color-accent-12)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--color-accent-20)";
            el.style.backgroundColor = "var(--color-accent-06)";
          }}
        >
          {running
            ? t({ pt: "Executando...", en: "Running..." })
            : t({ pt: "Executar Pipeline", en: "Run Pipeline" })}
        </button>
      </div>
      <style>{`
        @keyframes pipelinePulse {
          0% { left: 0; opacity: 1; }
          100% { left: calc(100% - 6px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

type DemoKey = "spring" | "parallax" | "react" | "pipeline";

function Playground() {
  const { t } = useLang();
  const [active, setActive] = useState<DemoKey>("spring");

  const tabs: { key: DemoKey; label: { pt: string; en: string } }[] = [
    { key: "spring", label: { pt: "Mola", en: "Spring" } },
    { key: "parallax", label: { pt: "Parallax", en: "Parallax" } },
    { key: "react", label: { pt: "ReAct", en: "ReAct" } },
    { key: "pipeline", label: { pt: "Pipeline", en: "Pipeline" } },
  ];

  return (
    <div className="skills-playground" style={{ marginTop: "3rem" }}>
      <div className="flex items-center gap-3 mb-6">
        <Code2 className="w-4 h-4" style={{ color: "var(--color-text-2)", opacity: 0.6 }} />
        <h3
          className="font-mono text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--color-text-2)", opacity: 0.7 }}
        >
          {t({ pt: "Campus de Testes", en: "Playground" })}
        </h3>
      </div>

      <div
        className="flex gap-1 mb-6"
        style={{
padding: "0.25rem",
border: "1px solid var(--color-border)",
borderRadius: "0",
background: "var(--color-bg)",
          display: "inline-flex",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
padding: "0.4rem 0.9rem",
borderRadius: "0",
border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
              color: active === tab.key ? "var(--color-accent)" : "var(--color-text-3)",
              backgroundColor: active === tab.key ? "var(--color-accent-08)" : "transparent",
            }}
            onMouseEnter={(e) => {
              if (active === tab.key) return;
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "var(--color-accent-04)";
            }}
            onMouseLeave={(e) => {
              if (active === tab.key) return;
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "transparent";
            }}
          >
            {t(tab.label)}
          </button>
        ))}
      </div>

      <div
        style={{
padding: "1.5rem",
border: "1px solid var(--color-border)",
borderRadius: "0",
background: "var(--color-bg-card)",
          position: "relative" as const,
          overflow: "hidden" as const,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.02,
            backgroundImage: "radial-gradient(circle at 50% 0%, var(--color-accent) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10">
          {active === "spring" && <SpringDemo />}
          {active === "parallax" && <ParallaxDemo />}
          {active === "react" && <ReActDemo />}
          {active === "pipeline" && <PipelineDemo />}
        </div>
      </div>
    </div>
  );
}

function StoryCard({ group }: { group: typeof skillGroups[0] }) {
const { t } = useLang();
const label = typeof group.label === "string" ? group.label : t(group.label);
const labelKey = typeof group.label === "string" ? group.label : group.label.pt;
const Icon = categoryIcons[labelKey] || Cpu;

  const linkedProjects = group.storyProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div
      className="skill-story-card"
      style={{
padding: "2rem",
border: "1px solid var(--color-border)",
borderRadius: "0",
backgroundColor: "var(--color-bg-deep)",
        position: "relative" as const,
        overflow: "hidden" as const,
        transition: "border-color 0.4s ease, transform 0.5s var(--ease-spring-1, ease), box-shadow 0.4s ease",
        cursor: "default" as const,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = group.color;
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = `0 8px 32px ${group.color}12`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--color-border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 80% 20%, ${group.color} 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex items-center justify-center"
            style={{
width: "2rem",
height: "2rem",
borderRadius: "2px",
backgroundColor: `${group.color}12`,
              border: `1px solid ${group.color}25`,
            }}
          >
            <Icon className="w-4 h-4" style={{ color: group.color }} />
          </div>
          <h3
            className="font-mono text-xs tracking-[0.2em] uppercase"
            style={{ color: group.color }}
          >
            {label}
          </h3>
        </div>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{
            color: "var(--color-text-2)",
            fontStyle: group.storySnippet ? "normal" : "italic",
            opacity: group.storySnippet ? 0.85 : 0.75,
            borderLeft: group.storySnippet ? "none" : `2px solid ${group.color}30`,
            paddingLeft: group.storySnippet ? 0 : "1rem",
          }}
        >
          {t(group.storyProof)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {group.skills.map((skill) => {
            const skillLabel = typeof skill === "string" ? skill : t(skill);
            const skillKey = typeof skill === "string" ? skill : skill.pt;
            return (
              <span
                key={skillKey}
                style={{
padding: "0.25rem 0.6rem",
border: `1px solid ${group.color}20`,
borderRadius: "0",
fontFamily: "var(--font-mono)",
fontSize: "0.65rem",
letterSpacing: "0.08em",
color: "var(--color-text-2)",
                  backgroundColor: `${group.color}06`,
                  transition: "border-color 0.2s, color 0.2s, background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${group.color}60`;
                  el.style.color = group.color;
                  el.style.backgroundColor = `${group.color}12`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${group.color}20`;
                  el.style.color = "var(--color-text-2)";
                  el.style.backgroundColor = `${group.color}06`;
                }}
              >
                {skillLabel}
              </span>
            );
          })}
        </div>

        {group.storySnippet && (
          <CodeReveal
            language={group.storySnippet.language}
            code={group.storySnippet.code}
            color={group.color}
          />
        )}

        {linkedProjects.length > 0 && (
          <div
            className="flex flex-wrap gap-2 mt-5 pt-4"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {linkedProjects.map((project) =>
              project ? (
                <Link
                  key={project.id}
                  to={project.hasCaseStudy && project.caseStudySlug
                    ? `/projects/${project.caseStudySlug}`
                    : "/projects"}
                  className="flex items-center gap-1 group/link"
                  style={{
padding: "0.2rem 0.6rem",
border: "1px solid var(--color-border)",
borderRadius: "0",
fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text-3)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = group.color;
                    el.style.color = group.color;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-border)";
                    el.style.color = "var(--color-text-3)";
                  }}
                >
                  {project.title}
                  <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover/link:opacity-70 transition-opacity" />
                </Link>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
gsap.from(".skills-header > *", {
y: 60,
opacity: 0,
stagger: 0.12,
duration: 1.2,
ease: EASE_PRIMARY,
scrollTrigger: { trigger: ".skills-header", start: SCROLL_START, once: true },
});

        gsap.utils.toArray<HTMLElement>(".skill-story-card").forEach((card) => {
          gsap.from(card, {
            y: 60,
            opacity: 0,
            scale: 0.96,
            duration: 1,
    ease: EASE_PRIMARY,
    scrollTrigger: { trigger: card, start: SCROLL_START, once: true },
          });
        });

gsap.from(".skills-playground", {
y: 80,
opacity: 0,
duration: 1.2,
ease: EASE_PRIMARY,
scrollTrigger: { trigger: ".skills-playground", start: SCROLL_START, once: true },
});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
<div ref={sectionRef} className="section-root relative overflow-hidden">
<div
className="absolute inset-0 pointer-events-none dot-grid-bg"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        <div className="skills-header max-w-3xl mb-16">
          <span className="section-label">{t({ pt: "Habilidades", en: "Skills" })}</span>
          <h2
            className="font-serif font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-text)" }}
          >
            {t({ pt: "A história das minhas ", en: "Story of my " })}
            <span className="italic" style={{ color: "var(--color-text-2)" }}>
              {t({ pt: "habilidades.", en: "skills." })}
            </span>
          </h2>
          <p className="text-sm" style={{ color: "var(--color-text-2)", lineHeight: "1.8" }}>
        {t({ pt: "Não porcentagens — prova. Cada grupo de habilidades respaldado por projetos reais e o código que entrega.", en: "Not percentages — proof. Each skill group backed by real projects and the code that ships." })}
          </p>
        </div>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
          }}
        >
        {skillGroups.map((group) => {
          const key = typeof group.label === "string" ? group.label : group.label.pt;
          return <StoryCard key={key} group={group} />;
        })}
        </div>

        <Playground />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
