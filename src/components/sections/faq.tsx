"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { EASE } from "@/lib/motion";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    q: "Woher weiß ich, ob mein Unternehmen unter NIS2 fällt?",
    a: "Grob gilt: Sie fallen unter NIS2, wenn Ihr Unternehmen in einem der regulierten Sektoren arbeitet und mindestens 50 Mitarbeitende oder 10 Millionen Euro Jahresumsatz hat. Auch als Zulieferer eines betroffenen Unternehmens brauchen Sie oft Sicherheitsnachweise für Ihre Auftraggeber. Im Control-Check klären wir das in 15 Minuten.",
  },
  {
    q: "Was ist im Monatspreis enthalten und was nicht?",
    a: "Enthalten sind alle neun Kernleistungen, von Regelbetrieb über Security bis Reporting, sowie die Behebung von Störungen (Incidents). Neues und Änderungen (Requests, etwa neue User anlegen) rechnen wir separat mit 125 €/Std. ab. Pro Mitarbeitendem sind zwei Geräte inklusive, typischerweise Laptop und Smartphone.",
  },
  {
    q: "Wie schnell reagieren Sie bei Störungen?",
    a: "Das Monitoring läuft rund um die Uhr automatisiert und erzeugt bei Störungen sofort ein Ticket. Bearbeitet wird montags bis freitags von 9 bis 17 Uhr. Wer eine Rufbereitschaft für Totalausfälle braucht, bucht das 24/7 On-Call Add-on mit 30 Minuten Reaktionszeit bei P1.",
  },
  {
    q: "Wie läuft das Onboarding ab?",
    a: "In fünf Schritten: Kickoff mit Zugriffseinrichtung (GDAP), Härtung der Umgebung mit MFA und Conditional Access, Agent-Rollout auf alle Geräte, Feintuning von Monitoring und Alerts, dann Go-Live mit Abschlussbericht inklusive Secure Score vorher und nachher. Bis zur nachweisbaren Compliance dauert es je nach Umgebung 6 bis 12 Wochen.",
  },
  {
    q: "Wie lange bin ich gebunden?",
    a: "Sechs Monate Mindestlaufzeit, danach monatlich kündbar. Abgerechnet wird monatlich im Voraus. Keine automatische Verlängerung um ein weiteres Jahr, kein Kleingedrucktes.",
  },
  {
    q: "Brauche ich das Backup-Add-on wirklich?",
    a: "Sehr wahrscheinlich ja. Microsoft garantiert die Verfügbarkeit der Plattform, aber nicht die Wiederherstellung Ihrer Daten nach versehentlichem Löschen oder Ransomware. Wenn Sie kein eigenes, nachgewiesenes Backup für Exchange, SharePoint, OneDrive und Teams haben, ist das Add-on de facto Pflicht.",
  },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-medium text-ink transition-colors hover:text-azure-bright md:text-lg"
      >
        {q}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="shrink-0 text-ink-mute"
        >
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-soft md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section relative">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="kicker">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
            Die Fragen, die uns jeder stellt
          </h2>
        </Reveal>

        <Reveal className="mt-12" delay={0.1}>
          <div className="rounded-2xl border border-line bg-surface/50 px-6 md:px-8">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-soft">
            Ihre Frage war nicht dabei?{" "}
            <a href={`mailto:${site.email}`} className="text-azure-bright underline-offset-4 hover:underline">
              Schreiben Sie uns
            </a>
            , Sie bekommen eine ehrliche Antwort.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
