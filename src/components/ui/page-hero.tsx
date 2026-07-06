"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

type PageHeroProps = {
  kicker: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
};

/** Kompakter Hero für Unterseiten, gleiche Lichtsprache wie die Startseite */
export function PageHero({ kicker, title, lead, children }: PageHeroProps) {
  return (
    <section className="noise relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
      <div aria-hidden className="absolute inset-0">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
        <motion.div
          className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-azure/15 blur-[130px]"
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.p variants={fadeUp} className="kicker">
          {kicker}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-4 text-balance font-display text-4xl font-semibold text-ink md:text-6xl"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg text-ink-soft">
            {lead}
          </motion.p>
        )}
        {children && (
          <motion.div variants={fadeUp} className="mt-8">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
