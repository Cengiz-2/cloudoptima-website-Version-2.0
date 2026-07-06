"use client";

import { motion } from "framer-motion";
import { EASE, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  chapter?: { nr: string; label: string };
  kicker?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Kapitel-Header des roten Fadens: einlaufender Leitstrahl,
 * Kapitelnummer, Titel und Vorspann.
 */
export function SectionHeader({
  chapter,
  kicker,
  title,
  lead,
  align = "left",
  className,
}: SectionHeaderProps) {
  const center = align === "center";
  return (
    <div
      className={cn(
        center ? "mx-auto flex max-w-2xl flex-col items-center text-center" : "max-w-2xl",
        className
      )}
    >
      <motion.span
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-6 block h-14 w-px origin-top bg-gradient-to-b from-transparent via-azure/40 to-azure"
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="kicker"
      >
        {chapter ? `Kapitel ${chapter.nr} · ${chapter.label}` : kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
        className="mt-4 text-balance font-display text-4xl font-semibold text-ink md:text-5xl"
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="mt-5 text-lg text-ink-soft"
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}
