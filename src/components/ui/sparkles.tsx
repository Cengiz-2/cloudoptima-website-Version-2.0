"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SparklesProps = {
  className?: string;
  density?: number;
  maxSize?: number;
  /** RGB-Tripel als String, Default: azure-bright */
  color?: string;
};

/**
 * Leichtgewichtiges Canvas-Partikelfeld (21st.dev sparkles).
 * Pausiert außerhalb des Viewports, statisches Bild bei prefers-reduced-motion.
 */
export function Sparkles({
  className,
  density = 70,
  maxSize = 1.8,
  color = "124, 192, 255",
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let running = true;
    let t = 0;

    type P = { x: number; y: number; r: number; vy: number; tw: number; phase: number };
    let parts: P[] = [];

    const size = () => canvas.getBoundingClientRect();

    const resize = () => {
      const { width, height } = size();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      parts = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * maxSize + 0.4,
        vy: Math.random() * 0.18 + 0.04,
        tw: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const paint = () => {
      const { width, height } = size();
      ctx.clearRect(0, 0, width, height);
      for (const p of parts) {
        const a = 0.25 + 0.75 * Math.abs(Math.sin(p.phase + t * p.tw));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${a})`;
        ctx.fill();
      }
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!running) return;
      t += 1;
      const { width, height } = size();
      for (const p of parts) {
        p.y -= p.vy;
        if (p.y < -4) {
          p.y = height + 4;
          p.x = Math.random() * width;
        }
      }
      paint();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
    });
    io.observe(canvas);

    if (reduce) {
      paint();
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [density, maxSize, color]);

  return <canvas ref={canvasRef} aria-hidden className={cn("h-full w-full", className)} />;
}

/**
 * Progressiver Weichzeichner am unteren Rand einer Sektion
 * (21st.dev sparkles "with progressive blur").
 */
export function ProgressiveBlur({ className }: { className?: string }) {
  const layers = [
    { blur: "2px", stop: "0%" },
    { blur: "4px", stop: "20%" },
    { blur: "8px", stop: "40%" },
    { blur: "16px", stop: "60%" },
  ];
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-x-0 bottom-0 h-32", className)}>
      {layers.map((l, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${l.blur})`,
            WebkitBackdropFilter: `blur(${l.blur})`,
            maskImage: `linear-gradient(to bottom, transparent ${l.stop}, black ${Math.min(
              parseInt(l.stop) + 40,
              100
            )}%)`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent ${l.stop}, black ${Math.min(
              parseInt(l.stop) + 40,
              100
            )}%)`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-void" />
    </div>
  );
}
