"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Card mit Maus-folgendem Spotlight. Nach 21st.dev spotlight-card,
 * Farbe über --azure Token statt fixem Hex.
 */
export function SpotlightCard({ className, children }: SpotlightCardProps) {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgb(var(--azure) / 0.13), transparent 70%)`;

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
        "transition-colors duration-300 hover:border-azure/30",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
