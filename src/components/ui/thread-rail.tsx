"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { chapters } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Der rote Faden als Navigations-Rail: Scroll-Fortschritt als Leitstrahl,
 * Kapitel als anspringbare Punkte mit Scroll-Spy.
 */
export function ThreadRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Kapitel"
      className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="relative flex h-[44vh] flex-col items-center">
        <div aria-hidden className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line" />
        <motion.div
          aria-hidden
          style={{ scaleY }}
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-azure-bright to-azure shadow-glow-sm"
        />
        <div className="relative flex h-full flex-col justify-between">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              aria-label={`Kapitel ${c.nr}: ${c.label}`}
              className="group relative flex items-center justify-center p-1"
            >
              <span
                className={cn(
                  "block h-2 w-2 rounded-full border transition-all duration-300",
                  active === c.id
                    ? "scale-150 border-azure bg-azure shadow-glow-sm"
                    : "border-ink-mute/50 bg-raised group-hover:border-azure/60"
                )}
              />
              <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md border border-line bg-void px-2 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-ink-soft opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {c.nr} · {c.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
