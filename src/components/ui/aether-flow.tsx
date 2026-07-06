"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AetherFlowProps = {
  className?: string;
  /** Partikel pro Fläche, kleiner = dichter (Original: 9000) */
  density?: number;
};

type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
};

/**
 * Aether-Flow-Hintergrund nach 21st.dev (dhiluxui/aether-flow-hero):
 * Partikelnetz, das dem Cursor ausweicht und sich mit Linien verbindet.
 * Angepasst: Container- statt Fullscreen-Canvas, transparenter Hintergrund,
 * Farben aus den CSS-Tokens (azure statt lila), pausiert außerhalb des
 * Viewports und respektiert prefers-reduced-motion.
 */
export function AetherFlow({ className, density = 11000 }: AetherFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Token-Farben aus dem :root lesen, damit das Canvas im Design-System bleibt
    const styles = getComputedStyle(document.documentElement);
    const azure = styles.getPropertyValue("--azure").trim().split(" ").join(", ");
    const azureBright = styles.getPropertyValue("--azure-bright").trim().split(" ").join(", ");
    const mint = styles.getPropertyValue("--mint").trim().split(" ").join(", ");

    let raf = 0;
    let running = true;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 170 };

    const init = () => {
      particles = [];
      const count = Math.min(150, Math.floor((canvas.width * canvas.height) / density));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: Math.random() * 0.4 - 0.2,
          dy: Math.random() * 0.4 - 0.2,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width ?? window.innerWidth;
      canvas.height = rect?.height ?? window.innerHeight;
      init();
    };

    const connect = () => {
      const maxDist = (canvas.width / 7) * (canvas.height / 9);
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = dx * dx + dy * dy;
          if (dist < maxDist) {
            const opacity = Math.max(0, 1 - dist / 20000);
            const mdx = particles[a].x - (mouse.x ?? -9999);
            const mdy = particles[a].y - (mouse.y ?? -9999);
            const nearMouse = Math.sqrt(mdx * mdx + mdy * mdy) < mouse.radius;
            ctx.strokeStyle = nearMouse
              ? `rgba(${azureBright}, ${opacity * 0.9})`
              : `rgba(${azure}, ${opacity * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        if (p.x > canvas.width || p.x < 0) p.dx = -p.dx;
        if (p.y > canvas.height || p.y < 0) p.dy = -p.dy;

        if (!reduce && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + p.size && distance > 0) {
            const force = (mouse.radius - distance) / mouse.radius;
            p.x -= (dx / distance) * force * 4;
            p.y -= (dy / distance) * force * 4;
          }
        }

        if (!reduce) {
          p.x += p.dx;
          p.y += p.dy;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
        ctx.fillStyle = p.size > 2.2 ? `rgba(${mint}, 0.6)` : `rgba(${azureBright}, 0.7)`;
        ctx.fill();
      }
      connect();
    };

    const animate = () => {
      if (!running) return;
      drawFrame();
      raf = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Außerhalb des Viewports keine Frames rechnen
    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      if (visible && !running) {
        running = true;
        if (!reduce) animate();
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);
    observer.observe(canvas);

    if (reduce) {
      drawFrame(); // ein statisches Bild statt Animation
    } else {
      animate();
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn(
        "absolute inset-0 h-full w-full",
        "[mask-image:linear-gradient(to_bottom,transparent,black_8%,black_78%,transparent)]",
        className
      )}
    />
  );
}
