"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  tone: "azure" | "amber";
};

let particleId = 0;

type ParticleButtonProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

/**
 * Primärer CTA: feuert beim Klick einen Partikel-Burst ab.
 * Nach 21st.dev particle-button, umgesetzt mit Framer Motion und Design-Tokens.
 */
export function ParticleButton({ href, onClick, className, children }: ParticleButtonProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const reduce = useReducedMotion();

  const burst = () => {
    if (reduce) return;
    const next: Particle[] = Array.from({ length: 16 }, () => ({
      id: particleId++,
      x: (Math.random() - 0.5) * 160,
      y: -(Math.random() * 110 + 20),
      size: Math.random() * 5 + 3,
      tone: Math.random() > 0.35 ? "azure" : "amber",
    }));
    const ids = new Set(next.map((p) => p.id));
    setParticles((p) => [...p, ...next]);
    setTimeout(() => {
      setParticles((p) => p.filter((pt) => !ids.has(pt.id)));
    }, 900);
  };

  const Tag = (href ? motion.a : motion.button) as typeof motion.button;

  return (
    <span className="relative inline-block">
      <Tag
        {...(href ? ({ href } as object) : { type: "button" as const })}
        onClick={() => {
          burst();
          onClick?.();
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className={cn(
          "relative z-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-azure px-7 py-3.5",
          "font-display text-base font-medium text-void",
          "shadow-glow-sm transition-shadow duration-300 hover:shadow-glow",
          className
        )}
      >
        {children}
      </Tag>
      <span aria-hidden className="pointer-events-none absolute inset-0 z-20">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className={cn(
                "absolute left-1/2 top-1/2 rounded-full",
                p.tone === "azure" ? "bg-azure-bright" : "bg-amber"
              )}
              style={{ width: p.size, height: p.size }}
              initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              animate={{ opacity: 0, x: p.x, y: p.y, scale: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>
      </span>
    </span>
  );
}
