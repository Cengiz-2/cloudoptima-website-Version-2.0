"use client";

import { motion } from "framer-motion";
import { Check, LineChart, MonitorCog, ShieldCheck, type LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";

type Feature = {
  index: string;
  icon: LucideIcon;
  title: string;
  text: string;
  points: string[];
};

const features: Feature[] = [
  {
    index: "01",
    icon: ShieldCheck,
    title: "Security & NIS2",
    text: "Ihre Umgebung wird gehärtet und bleibt es. Dazu bekommen Sie die Nachweise, die Auditoren und Auftraggeber sehen wollen.",
    points: [
      "MFA für alle Accounts, Conditional Access, Break-Glass dokumentiert",
      "Monatlicher Security-Check mit Secure-Score-Tracking",
      "NIS2-Dokumentation und Lieferanten-Nachweise",
    ],
  },
  {
    index: "02",
    icon: MonitorCog,
    title: "Regelbetrieb & Monitoring",
    text: "Wir halten M365 und Azure am Laufen, bevor Sie Probleme bemerken. Störungen erzeugen automatisch ein Ticket bei uns, nicht bei Ihnen.",
    points: [
      "24/7 automatisiertes Monitoring mit Alerting",
      "Patch Management mit abgestimmten Wartungsfenstern",
      "Monatlicher Tenant-Health-Check, Konfigurations-Drift wird korrigiert",
    ],
  },
  {
    index: "03",
    icon: LineChart,
    title: "Kosten & Reporting",
    text: "Sie sehen jeden Monat, was Ihre IT kostet, was sie leistet und wo Geld versickert. Lizenzleichen fliegen raus.",
    points: [
      "Monatliche Lizenz-Analyse mit Quick Wins zur Kostenreduktion",
      "Management-Report: Security-Status, Patches, Incidents",
      "Quartals-Review mit Risikobewertung und Planung",
    ],
  },
];

export function Features() {
  return (
    <section id="leistungen" className="section relative">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="kicker">Leistungen</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
            Drei Bereiche, ein Vertrag
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Jede Preisstufe enthält dieselben neun Kernleistungen. Sie kaufen keinen
            Support-Topf, sondern einen laufenden Betrieb mit Belegen.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.index} variants={fadeUp} className="h-full">
                <SpotlightCard className="h-full p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-azure/25 bg-azure/10 text-azure-bright">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-ink-mute">{f.index}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {f.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
