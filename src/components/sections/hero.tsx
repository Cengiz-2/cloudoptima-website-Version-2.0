"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { site } from "@/lib/site";
import { ParticleButton } from "@/components/ui/particle-button";
import { FlipButton } from "@/components/ui/flip-button";
import { ProgressiveBlur } from "@/components/ui/sparkles";
import { AetherFlow } from "@/components/ui/aether-flow";
import { DeadlineChip } from "@/components/ui/countdown";
import { PartnerBadge } from "@/components/ui/partner-badge";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { DashboardMock } from "@/components/ui/dashboard-mock";
import { Hero3DLazy } from "@/components/ui/hero-3d-lazy";

/**
 * Hero: Aether-Flow-Partikelnetz (21st.dev), Lichtflächen, 3D-Kern (Desktop)
 * und der Aceternity Container-Scroll, der den Monatsreport aufrichtet.
 */
export function Hero() {
  return (
    <section id="start" className="noise relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
      <div aria-hidden className="absolute inset-0">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_28%,black,transparent)]" />
        <motion.div
          className="absolute -top-44 left-1/2 h-[520px] w-[840px] -translate-x-1/2 rounded-full bg-azure/20 blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[6%] top-24 h-72 w-72 rounded-full bg-azure-deep/50 blur-[110px]"
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[8%] top-40 h-56 w-56 rounded-full bg-amber/10 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <AetherFlow />
      </div>

      <Hero3DLazy className="pointer-events-none absolute left-1/2 top-4 z-[1] h-[540px] w-[640px] -translate-x-1/2 opacity-60" />

      <motion.div
        variants={staggerContainer(0.12, 0.15)}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
          <DeadlineChip />
          <PartnerBadge className="py-1.5" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-balance font-display text-5xl font-semibold text-ink md:text-7xl"
        >
          Ihre Microsoft-Umgebung.{" "}
          <span className="bg-gradient-to-r from-azure-bright via-azure to-mint bg-clip-text text-transparent">
            Sicher betrieben, sauber nachgewiesen.
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-ink-soft">
          CloudOptima übernimmt Betrieb, Security und Compliance Ihrer M365- und
          Azure-Umgebung. Zum festen Monatspreis, mit einem festen Ansprechpartner
          statt wechselnder Ticketnummern.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ParticleButton href={site.cta.href}>
            Kostenlosen Control-Check starten
            <ArrowRight className="h-4 w-4" />
          </ParticleButton>
          <FlipButton front="Preise ansehen" back="Ab 1.490 € im Monat" href="/preise" />
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
          Managed Services für M365 & Azure · 10 bis 300 Mitarbeitende
        </motion.p>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ContainerScroll>
          <DashboardMock />
        </ContainerScroll>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-mute"
        >
          Ihr Monatsreport. Jeden Monat. Ohne Nachfragen.
        </motion.p>
      </div>

      <ProgressiveBlur />
    </section>
  );
}
