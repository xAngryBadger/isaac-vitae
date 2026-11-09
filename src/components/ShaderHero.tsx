import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec3  u_accent;
uniform float u_intensity;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i),               hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (uv - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0);

  float t = u_time * 0.055;

  // domain-warped fbm: um campo de fluxo que se dobra sobre si mesmo
  vec2 q = vec2(fbm(p * 1.5 + t), fbm(p * 1.5 - t + 5.2));
  float n = fbm(p * 2.1 + q * 1.35 + t * 0.4);

  // halo radial central — onde o rosto/nome ficam
  float r = length(p);
  float glow = exp(-r * 1.7);

  vec3 col = u_accent * pow(n, 2.0) * 0.85;
  col += u_accent * glow * 0.20;

  float alpha = (n * 0.5 + glow * 0.3) * u_intensity;
  gl_FragColor = vec4(col, alpha);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error("[ShaderHero] shader não compilou:", gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

function hexToVec3(hex: string): [number, number, number] {
  const clean = hex.trim().replace("#", "");
  if (clean.length !== 6 || /[^0-9a-fA-F]/.test(clean)) return [1, 1, 1];
  const n = parseInt(clean, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function readAccent(): [number, number, number] {
  if (typeof window === "undefined") return [1, 1, 1];
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--color-accent");
  return hexToVec3(raw || "#fe8019");
}

export default function ShaderHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const accentRef = useRef<[number, number, number]>(readAccent());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl2", { alpha: true, antialias: false, depth: false }) as WebGL2RenderingContext | null) ??
      (canvas.getContext("webgl", { alpha: true, antialias: false, depth: false }) as WebGLRenderingContext | null);
    if (!gl) return; // sem WebGL: gradiente CSS continua visível

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("[ShaderHero] link falhou:", gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uAccent = gl.getUniformLocation(prog, "u_accent");
    const uIntensity = gl.getUniformLocation(prog, "u_intensity");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // accent muda junto com o tema (ThemeSwitcher seta data-theme no <html>)
    const mo = new MutationObserver(() => { accentRef.current = readAccent(); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const NEBULA_INTENSITY = 0.42;
    gl.uniform1f(uIntensity, NEBULA_INTENSITY);
    gl.uniform3fv(uAccent, accentRef.current);

    const start = performance.now();
    let raf = 0;

    const frame = () => {
      resize();
      const t = (performance.now() - start) / 1000;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, reduce ? 0 : t);
      gl.uniform3fv(uAccent, accentRef.current);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    frame();

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
      mo.disconnect();
      gl.deleteBuffer(quad);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-shader-hero
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.55,
      }}
    />
  );
}
