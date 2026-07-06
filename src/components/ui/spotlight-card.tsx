"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export type GlowTone = "azure" | "mint" | "amber";

const toneVar: Record<GlowTone, string> = {
  azure: "var(--azure)",
  mint: "var(--mint)",
  amber: "var(--amber)",
};

type SpotlightCardProps = {
  className?: string;
  /** Farbe von Spotlight und Glow-Rand, Standard azure */
  tone?: GlowTone;
  children: React.ReactNode;
};

/**
 * GlowCard nach 21st.dev spotlight-card: Maus-folgender Spotlight im
 * Kartenkörper plus leuchtender Rand, der dem Cursor folgt. Der Rand
 * entsteht über eine Gradient-Fläche, die per Mask auf einen 1px-Ring
 * beschnitten wird. Farben über Tokens (azure/mint/amber).
 */
export function GlowCard({ className, tone = "azure", children }: SpotlightCardProps) {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const rgb = toneVar[tone];

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgb(${rgb} / 0.13), transparent 70%)`;
  const borderGlow = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, rgb(${rgb} / 0.65), transparent 75%)`;

  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mx.set(-300);
        my.set(-300);
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-surface/70 shadow-card",
        "transition-colors duration-300",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: borderGlow,
          padding: 1,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/** Bisheriger Name, damit bestehende Verwendungen weiterlaufen */
export { GlowCard as SpotlightCard };
