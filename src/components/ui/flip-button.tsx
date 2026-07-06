"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FlipButtonProps = {
  front: React.ReactNode;
  back?: React.ReactNode;
  href: string;
  className?: string;
};

/**
 * Sekundärer CTA: Label klappt beim Hover nach oben weg, Alternativtext kommt von unten.
 * Nach 21st.dev flip-button.
 */
export function FlipButton({ front, back, href, className }: FlipButtonProps) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full",
        "border border-line bg-raised/60 px-6 font-display text-sm font-medium text-ink",
        "transition-colors duration-300 hover:border-azure/40",
        className
      )}
    >
      <motion.span
        variants={{ rest: { y: 0, opacity: 1 }, hover: { y: "-130%", opacity: 0 } }}
        transition={{ duration: 0.28, ease: EASE }}
        className="flex items-center gap-2"
      >
        {front}
      </motion.span>
      <motion.span
        aria-hidden
        variants={{ rest: { y: "130%", opacity: 0 }, hover: { y: 0, opacity: 1 } }}
        transition={{ duration: 0.28, ease: EASE }}
        className="absolute inset-0 flex items-center justify-center gap-2 text-azure-bright"
      >
        {back ?? front}
      </motion.span>
    </motion.a>
  );
}
