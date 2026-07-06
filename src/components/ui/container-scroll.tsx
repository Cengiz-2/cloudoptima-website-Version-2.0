"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ContainerScrollProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

/**
 * 3D-Karte, die sich beim Scrollen aufrichtet (Aceternity container-scroll-animation).
 */
export function ContainerScroll({ header, children }: ContainerScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [24, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.06, 1]);
  const headerY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);

  return (
    <div ref={ref} className="relative flex flex-col items-center" style={{ perspective: "1100px" }}>
      {header && (
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mx-auto max-w-2xl text-center">
          {header}
        </motion.div>
      )}
      <motion.div
        style={{ rotateX, scale, transformStyle: "preserve-3d" }}
        className={cn(
          "w-full max-w-5xl rounded-3xl border border-line bg-raised/70 p-2 shadow-card md:p-4",
          header ? "mt-12" : "mt-14"
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-surface">{children}</div>
      </motion.div>
    </div>
  );
}
