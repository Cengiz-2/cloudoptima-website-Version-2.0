"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ParticleButton } from "@/components/ui/particle-button";
import { FlipButton } from "@/components/ui/flip-button";
import { Sparkles, ProgressiveBlur } from "@/components/ui/sparkles";
import { DeadlineChip } from "@/components/ui/countdown";

/**
 * Hero im Aether-Flow-Stil: langsam driftende Lichtflächen,
 * Sparkles-Partikelfeld und Progressive Blur zum nächsten Abschnitt.
 */
export function Hero() {
  return (
    <section id="start" className="noise relative overflow-hidden pb-28 pt-40 md:pb-36 md:pt-48">
      <div aria-hidden className="absolute inset-0">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <motion.div
          className="absolute -top-44 left-1/2 h-[520px] w-[840px] -translate-x-1/2 rounded-full bg-azure/20 blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-azure-deep/50 blur-[110px]"
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[10%] top-40 h-56 w-56 rounded-full bg-amber/10 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0">
          <Sparkles density={90} />
        </div>
      </div>

      <motion.div
        variants={staggerContainer(0.12, 0.15)}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={fadeUp}>
          <DeadlineChip />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-balance font-display text-5xl font-semibold text-ink md:text-7xl"
        >
          Ihre Microsoft-Umgebung.{" "}
          <span className="bg-gradient-to-r from-azure-bright via-azure to-azure-bright bg-clip-text text-transparent">
            Sicher betrieben, sauber nachgewiesen.
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-ink-soft">
          CloudOptima übernimmt Betrieb, Security und Compliance Ihrer M365- und
          Azure-Umgebung. Zum festen Monatspreis, mit einem festen Ansprechpartner
          statt wechselnder Ticketnummern.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ParticleButton href="#kontakt">
            Kostenlosen Control-Check starten
            <ArrowRight className="h-4 w-4" />
          </ParticleButton>
          <FlipButton front="Preise ansehen" back="Ab 1.490 € im Monat" href="#preise" />
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
          Für Unternehmen mit 10 bis 300 Mitarbeitenden
        </motion.p>
      </motion.div>

      <ProgressiveBlur />
    </section>
  );
}
