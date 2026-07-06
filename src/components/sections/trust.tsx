"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: "100 %", label: "Microsoft-Fokus. Kein Bauchladen." },
  { value: "24/7", label: "Automatisiertes Monitoring & Alerting" },
  { value: "1", label: "Fester Ansprechpartner für alles" },
  { value: "9", label: "Kernleistungen in jeder Preisstufe" },
];

const platforms = [
  "Microsoft 365",
  "Azure",
  "Entra ID",
  "Intune",
  "Defender",
  "Purview",
  "Exchange Online",
  "SharePoint",
  "Teams",
];

/** Social Proof über Zahlen und Stack statt erfundener Kundenlogos */
export function Trust() {
  return (
    <section className="relative border-y border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.dl
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center md:text-left">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold tabular-nums text-ink">
                {s.value}
              </dd>
              <dd className="mt-2 text-sm text-ink-soft">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>

        <Reveal className="mt-14" delay={0.1}>
          <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-ink-mute">
            Wir betreiben Ihren kompletten Microsoft-Stack
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee gap-3 pr-3">
              {[...platforms, ...platforms].map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="whitespace-nowrap rounded-full border border-line bg-raised/60 px-5 py-2 font-display text-sm text-ink-soft"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center" delay={0.15}>
          <blockquote className="text-balance font-display text-xl text-ink md:text-2xl">
            „Ich bin kein Ticket-Schubser. Ich betreibe Ihre Umgebung, als wäre es
            meine eigene. Und Sie wissen jeden Monat schwarz auf weiß, was passiert ist.“
          </blockquote>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
            Cengiz Gümüşdere, Gründer CloudOptima
          </p>
        </Reveal>
      </div>
    </section>
  );
}
