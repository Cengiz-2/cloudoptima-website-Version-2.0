"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce, EASE } from "@/lib/motion";
import { chapters, onboardingSteps } from "@/lib/content";
import { SectionHeader } from "@/components/ui/section-header";

/** Kapitel 04: Der Weg. Onboarding-Timeline mit durchlaufendem Faden. */
export function Process() {
  return (
    <section id="weg" className="section relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          chapter={chapters[3]}
          title="Von Blindflug zu Betrieb in fünf Schritten"
          lead="Onboarding heißt bei uns: kontrollierter Zugriff über GDAP statt Global Admin, Härtung vor Deployment und am Ende ein Bericht, den Sie vorzeigen können."
        />

        <div className="relative mt-16">
          {/* Der Faden: horizontal auf Desktop, vertikal auf Mobile */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: EASE }}
            className="absolute left-0 right-0 top-[22px] hidden h-px origin-left bg-gradient-to-r from-azure via-azure/60 to-azure/20 lg:block"
          />
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: EASE }}
            className="absolute bottom-4 left-[21px] top-2 w-px origin-top bg-gradient-to-b from-azure via-azure/60 to-azure/20 lg:hidden"
          />

          <motion.ol
            variants={staggerContainer(0.14)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-10 lg:grid-cols-5 lg:gap-4"
          >
            {onboardingSteps.map((step) => (
              <motion.li key={step.nr} variants={fadeUp} className="relative flex gap-5 lg:block">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-azure/40 bg-raised font-mono text-sm text-azure-bright shadow-glow-sm">
                  {step.nr}
                </span>
                <div className="lg:mt-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-mute">
                    {step.duration}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft lg:pr-4">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-mute"
        >
          6 bis 12 Wochen bis zur nachweisbaren Compliance, je nach Ausgangslage
        </motion.p>
      </div>
    </section>
  );
}
