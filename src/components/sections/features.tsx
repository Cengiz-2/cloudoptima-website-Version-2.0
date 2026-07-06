"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, LineChart, MonitorCog, ShieldCheck, type LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { chapters } from "@/lib/content";
import { SectionHeader } from "@/components/ui/section-header";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Tilt } from "@/components/ui/tilt";
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

/** Kapitel 02: Der Betrieb. Drei Säulen mit 3D-Tilt und Spotlight. */
export function Features() {
  return (
    <section id="betrieb" className="section relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          chapter={chapters[1]}
          title="Drei Bereiche, ein Vertrag"
          lead="Jede Preisstufe enthält dieselben neun Kernleistungen. Sie kaufen keinen Support-Topf, sondern einen laufenden Betrieb mit Belegen."
        />

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
                <Tilt className="h-full">
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
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal className="mt-10 text-center" delay={0.1}>
          <a
            href="/leistungen"
            className="inline-flex items-center gap-2 font-display text-sm text-azure-bright underline-offset-4 hover:underline"
          >
            Alle neun Kernleistungen im Detail
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal className="mt-16" delay={0.1}>
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
      </div>
    </section>
  );
}
