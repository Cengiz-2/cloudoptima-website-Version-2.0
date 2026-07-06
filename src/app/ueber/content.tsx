"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, FileCheck2, MessageSquareText } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { site } from "@/lib/site";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Tilt } from "@/components/ui/tilt";
import { PartnerBadge } from "@/components/ui/partner-badge";
import { ParticleButton } from "@/components/ui/particle-button";

const values = [
  {
    icon: MessageSquareText,
    title: "Klartext",
    text: "Sie bekommen Einschätzungen, keine Verkaufsprosa. Wenn Sie etwas nicht brauchen, sagen wir das. Wenn etwas brennt, auch.",
  },
  {
    icon: FileCheck2,
    title: "Nachweisbarkeit",
    text: "Jede Maßnahme landet dokumentiert im Monatsreport. Was wir tun, können Sie jederzeit belegen, im Audit und gegenüber Kunden.",
  },
  {
    icon: Compass,
    title: "Fokus",
    text: "Nur Microsoft, nur Managed Services. Keine Webseiten, keine Drucker, kein Bauchladen. Dafür Tiefe statt Breite.",
  },
];

const facts = [
  ["Standort", "Frankfurt am Main"],
  ["Fokus", "100 % Microsoft (M365 & Azure)"],
  ["Zielgruppe", "10 bis 300 Mitarbeitende"],
  ["Zugriff", "GDAP statt Global Admin"],
  ["Vertrag", "AVV nach Art. 28 DSGVO"],
];

export function UeberContent() {
  return (
    <main>
      <PageHero
        kicker="Über CloudOptima"
        title="Ein Ansprechpartner. Ein Fokus. Keine Ausreden."
        lead="CloudOptima wurde gegründet, weil der Mittelstand zwischen Billig-MSPs und Enterprise-Beratungen schlecht bedient wird. Die einen schieben Tickets, die anderen schreiben Konzepte. Beides betreibt keine Umgebung."
      />

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-5 text-ink-soft">
                <p>
                  Hinter CloudOptima steht Cengiz Gümüşdere, ausgebildeter Kaufmann
                  für IT-Systemmanagement. Der Grund für die Gründung war einfach:
                  In den meisten Microsoft-Umgebungen im Mittelstand ist niemand
                  wirklich verantwortlich. Der IT-Dienstleister reagiert auf Tickets,
                  intern fehlt die Zeit, und dazwischen wachsen Sicherheitslücken
                  und Lizenzkosten.
                </p>
                <p>
                  CloudOptima besetzt genau diese Lücke: als Governance-Partner, der
                  die Umgebung laufend betreibt, härtet und nachweisbar macht. Ein
                  fester Ansprechpartner, der Ihre Umgebung kennt, statt wechselnder
                  Kontakte, die bei null anfangen.
                </p>
                <p>
                  Deshalb gibt es hier auch keine zwanzig Technologien im Portfolio.
                  Nur Microsoft 365 und Azure, dafür in der Tiefe: Entra ID, Intune,
                  Defender, Purview und das, was NIS2 daraus verlangt.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Tilt max={5}>
                <div className="rounded-2xl border border-line bg-raised/60 p-7 shadow-card">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                    Eckdaten
                  </p>
                  <ul className="mt-5 space-y-3.5">
                    {facts.map(([label, value]) => (
                      <li key={label} className="flex items-center justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                        <span className="text-sm text-ink-soft">{label}</span>
                        <span className="text-right font-display text-sm text-ink">{value}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <PartnerBadge />
                  </div>
                </div>
              </Tilt>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader kicker="Arbeitsweise" title="Woran Sie uns messen können" />
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-line bg-surface/60 p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-azure/25 bg-azure/10 text-azure-bright">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <Reveal className="mt-16 text-center" delay={0.1}>
            <ParticleButton href="/control-check">
              Lernen wir uns kennen: Control-Check
              <ArrowRight className="h-4 w-4" />
            </ParticleButton>
            <p className="mt-4 text-sm text-ink-mute">
              Oder direkt:{" "}
              <a href={`mailto:${site.email}`} className="text-ink-soft underline-offset-4 hover:text-azure-bright hover:underline">
                {site.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
