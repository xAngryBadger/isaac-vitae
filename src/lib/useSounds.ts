import { useRef, useState, useCallback } from "react";

const STORAGE_KEY = "isaac-portfolio-sounds";

function getStored(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === null ? true : stored === "on";
  } catch {
    return true;
  }
}

function createCtx(): AudioContext | null {
  try {
    return new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  } catch {
    return null;
  }
}

export function useSounds() {
  const ctxRef = useRef<AudioContext | null>(null);
  const [enabled, setEnabled] = useState(getStored);

  const ensureCtx = useCallback(() => {
    if (!ctxRef.current) ctxRef.current = createCtx();
    if (ctxRef.current?.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  }, []);

  const playTone = useCallback(
    (freq: number, duration: number, vol: number, type: OscillatorType = "sine") => {
      if (!enabled) return;
      const ctx = ensureCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    },
    [enabled, ensureCtx],
  );

  const playNoise = useCallback(
    (duration: number, vol: number) => {
      if (!enabled) return;
      const ctx = ensureCtx();
      if (!ctx) return;
      const size = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < size; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 800;
      filter.Q.value = 1.2;
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start(ctx.currentTime);
      src.stop(ctx.currentTime + duration);
    },
    [enabled, ensureCtx],
  );

  const playMenuOpen = useCallback(() => {
    playTone(400, 0.1, 0.08, "sine");
  }, [playTone]);

  const playMenuClose = useCallback(() => {
    playTone(300, 0.08, 0.06, "sine");
  }, [playTone]);

  const playRouteChange = useCallback(() => {
    playNoise(0.06, 0.04);
  }, [playNoise]);

  const toggleSounds = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
      } catch {}
      if (next) {
        const ctx = ensureCtx();
        if (ctx) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.value = 600;
          gain.gain.setValueAtTime(0.06, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.08);
        }
      }
      return next;
    });
  }, [ensureCtx]);

  return { enabled, playMenuOpen, playMenuClose, playRouteChange, toggleSounds };
}
