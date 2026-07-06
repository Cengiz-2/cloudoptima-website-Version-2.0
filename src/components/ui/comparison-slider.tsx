"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

type ComparisonSliderProps = {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel: string;
  afterLabel: string;
  className?: string;
};

/**
 * Ziehbarer Vorher/Nachher-Vergleich (21st.dev feature-with-image-comparison),
 * hier mit gerenderten Panels statt Bildern. Per Tastatur bedienbar.
 */
export function ComparisonSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
  className,
}: ComparisonSliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const pct = useMotionValue(50);
  const [dragging, setDragging] = useState(false);

  const clip = useMotionTemplate`inset(0 0 0 ${pct}%)`;
  const handleLeft = useMotionTemplate`${pct}%`;

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    pct.set(Math.min(94, Math.max(6, next)));
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative select-none overflow-hidden rounded-2xl border border-line bg-surface shadow-card",
        dragging ? "cursor-grabbing" : "cursor-ew-resize",
        className
      )}
      onPointerDown={(e) => {
        setDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging) setFromClientX(e.clientX);
      }}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* Ebene "vorher": volle Fläche */}
      <div className="relative">{before}</div>

      {/* Ebene "nachher": von links beschnitten */}
      <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
        {after}
      </motion.div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-line bg-void/70 px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-soft backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-mint/30 bg-void/70 px-3 py-1 font-mono text-xs uppercase tracking-widest text-mint backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* Griff */}
      <motion.div
        role="slider"
        aria-label={`Vergleich zwischen ${beforeLabel} und ${afterLabel}`}
        aria-valuemin={6}
        aria-valuemax={94}
        aria-valuenow={Math.round(pct.get())}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") pct.set(Math.max(6, pct.get() - 4));
          if (e.key === "ArrowRight") pct.set(Math.min(94, pct.get() + 4));
        }}
        style={{ left: handleLeft }}
        className="absolute inset-y-0 z-20 w-px -translate-x-1/2 bg-azure/70"
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-azure/50 bg-raised text-azure shadow-glow-sm">
          <GripVertical className="h-5 w-5" />
        </span>
      </motion.div>
    </div>
  );
}
