"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileCheck2 } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { chapters } from "@/lib/content";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Tilt } from "@/components/ui/tilt";
import { PartnerBadge } from "@/components/ui/partner-badge";

const stats = [
  { value: "100 %", label: "Microsoft-Fokus. Kein Bauchladen." },
  { value: "24/7", label: "Automatisiertes Monitoring & Alerting" },
  { value: "1", label: "Fester Ansprechpartner für alles" },
  { value: "9", label: "Kernleistungen in jeder Preisstufe" },
];

const reportRows = [
  { label: "Patch-Compliance", value: "98 %" },
  { label: "Secure Score", value: "74 % (+3)" },
  { label: "Incidents gelöst", value: "2 von 2" },
  { label: "Lizenz-Delta", value: "−340 €/Monat" },
  { label: "MFA-Abdeckung", value: "100 %" },
];

const trustItems = ["GDAP statt Global Admin", "AVV nach Art. 28 DSGVO", "Standort Frankfurt"];

/** Kapitel 03: Der Nachweis. Report-Dokument, Zahlen, Partner-Nachweise. */
export function Proof() {
  return (
    <section id="nachweis" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-96 w-[700px] -translate-x-1/2 rounded-full bg-azure/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute right-[5%] top-2/3 h-72 w-72 rounded-full bg-mint/10 blur-[110px]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          chapter={chapters[2]}
          title="Vertrauen ist gut. Ein Report ist besser."
          lead="Jeden Monat bekommen Sie ein Dokument, das Sie der Geschäftsführung, dem Auditor oder Ihrem Auftraggeber vorlegen können. Ohne es vorher übersetzen zu müssen."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Tilt max={6}>
              <div className="relative mx-auto max-w-md rounded-2xl border border-line bg-raised/70 p-7 shadow-card">
                <span className="absolute -right-3 top-6 rotate-6 rounded-md border border-mint/50 px-3 py-1 font-mono text-xs uppercase tracking-widest text-mint">
                  Audit-ready
                </span>
                <div className="flex items-center gap-2.5 border-b border-line pb-4">
                  <FileCheck2 className="h-5 w-5 text-azure-bright" />
                  <span className="font-mono text-xs text-ink-soft">
                    Monatsreport_Juni-2026.pdf
                  </span>
                </div>
                <ul className="mt-5 space-y-3.5">
                  {reportRows.map((row) => (
                    <li key={row.label} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-ink-soft">{row.label}</span>
                      <span className="flex items-center gap-2 font-mono text-sm tabular-nums text-ink">
                        {row.value}
                        <BadgeCheck className="h-4 w-4 text-mint" />
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[0.65rem] uppercase tracking-wider text-ink-mute">
                  Erstellt von CloudOptima · Quartals-Review am 14.07.
                </p>
              </div>
            </Tilt>
          </Reveal>

          <div>
            <motion.dl
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 gap-8"
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="bg-gradient-to-r from-azure-bright to-mint bg-clip-text font-display text-4xl font-semibold tabular-nums text-transparent">
                    {s.value}
                  </dd>
                  <dd className="mt-2 text-sm text-ink-soft">{s.label}</dd>
                </motion.div>
              ))}
            </motion.dl>

            <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-3">
              <PartnerBadge />
              {trustItems.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-raised/60 px-4 py-2 font-display text-sm text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal className="mx-auto mt-20 max-w-3xl text-center" delay={0.1}>
          <blockquote className="text-balance font-display text-xl text-ink md:text-2xl">
            „Ich bin kein Ticket-Schubser. Ich betreibe Ihre Umgebung, als wäre es
            meine eigene. Und Sie wissen jeden Monat schwarz auf weiß, was passiert ist.“
          </blockquote>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
            Cengiz Gümüsdere, Gründer CloudOptima
          </p>
        </Reveal>
      </div>
    </section>
  );
}
