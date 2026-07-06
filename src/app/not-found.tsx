"use client";

import { motion } from "framer-motion";
import { ParticleButton } from "@/components/ui/particle-button";

/** Ghost-404 (21st.dev ghost-404-page), schwebender Geist mit Schattenwurf */
export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,black,transparent)]"
      />
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="132" height="143" viewBox="0 0 120 130" fill="none" aria-hidden>
            <path
              d="M60 8 C33 8 20 30 20 54 V112 L31 102 L42 114 L60 102 L78 114 L89 102 L100 112 V54 C100 30 87 8 60 8 Z"
              fill="rgb(var(--raised))"
              stroke="rgb(var(--azure) / 0.45)"
              strokeWidth="2"
            />
            <circle cx="47" cy="52" r="5" fill="rgb(var(--azure-bright))" />
            <circle cx="73" cy="52" r="5" fill="rgb(var(--azure-bright))" />
            <ellipse cx="60" cy="72" rx="6" ry="8" fill="rgb(var(--void))" />
          </svg>
        </motion.div>
        <motion.div
          aria-hidden
          animate={{ scaleX: [1, 0.72, 1], opacity: [0.5, 0.25, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-5 h-2.5 w-24 rounded-full bg-azure/20 blur-[2px]"
        />

        <p className="mt-12 font-mono text-sm uppercase tracking-[0.3em] text-azure-bright">
          Fehler 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
          Diese Seite gibt es nicht
        </h1>
        <p className="mt-4 max-w-md text-ink-soft">
          Vielleicht verschoben, vielleicht nie gebaut. Der Geist hier weiß es
          auch nicht.
        </p>
        <div className="mt-10">
          <ParticleButton href="/">Zur Startseite</ParticleButton>
        </div>
      </div>
    </main>
  );
}
