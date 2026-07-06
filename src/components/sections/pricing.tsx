"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { addons, enterpriseTiers, pricingTiers, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { FlipButton } from "@/components/ui/flip-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const included = [
  "M365 & Azure Regelbetrieb mit Tenant-Health-Check",
  "Security Baselines und Secure-Score-Tracking",
  "Patch Management mit Compliance-Report",
  "24/7 automatisiertes Monitoring & Alerting",
  "Monatliches Management-Reporting",
  "Fester Ansprechpartner und Quartals-Review",
];

const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

type PricingProps = {
  /** Auf der Startseite Teil des roten Fadens (Kapitel 05) */
  asChapter?: boolean;
};

export function Pricing({ asChapter = false }: PricingProps) {
  return (
    <section id={asChapter ? "entscheidung" : "preise"} className="section relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          align="center"
          chapter={asChapter ? { nr: "05", label: "Die Entscheidung" } : undefined}
          kicker="Preise"
          title="Planbar nach Unternehmensgröße"
          lead="Jede Stufe enthält dieselben neun Kernleistungen. Der Preis richtet sich nur nach der Größe Ihrer Umgebung, nicht nach Kleingedrucktem."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {pricingTiers.map((tier) => (
            <motion.div key={tier.name} variants={fadeUp} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-7 shadow-card transition-colors duration-300",
                  tier.highlighted
                    ? "border-azure/40 bg-raised/70 shadow-glow-sm"
                    : "border-line bg-surface/70 hover:border-azure/20"
                )}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-azure px-4 py-1 font-mono text-xs font-medium text-void">
                    Meistgewählt
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-ink">{tier.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{tier.range}</p>
                <p className="mt-6">
                  <span className="font-display text-4xl font-semibold tabular-nums text-ink">
                    {tier.price.toLocaleString("de-DE")} €
                  </span>
                  <span className="text-sm text-ink-soft"> / Monat</span>
                </p>
                <p className="mt-1 font-mono text-xs text-ink-mute">
                  zzgl. einmalige Setup-Fee {tier.setup}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {included.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
                <FlipButton
                  front={`${tier.name} anfragen`}
                  back="Unverbindlich per E-Mail"
                  href={mailto(`Anfrage Managed Service ${tier.name}`)}
                  className={cn("mt-7 w-full", tier.highlighted && "border-azure/40")}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-6" delay={0.1}>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-surface/50 px-7 py-6 md:flex-row">
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                Mehr als 120 Mitarbeitende?
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                {enterpriseTiers.map((t) => `${t.name} (${t.range}): ${t.price}/Monat`).join(" · ")}
                {" · "}Setup auf Anfrage
              </p>
            </div>
            <FlipButton
              front="Gespräch anfragen"
              back="Wir melden uns"
              href={mailto("Anfrage Enterprise / Corporate")}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16" delay={0.05}>
          <h3 className="text-center font-display text-2xl font-semibold text-ink">
            Add-ons, wenn Sie mehr brauchen
          </h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="rounded-2xl border border-line bg-surface/50 p-5 transition-colors duration-300 hover:border-azure/25"
              >
                <p className="font-display text-base font-semibold text-ink">{addon.name}</p>
                <p className="mt-1 font-mono text-sm text-azure-bright">{addon.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{addon.note}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <div className="rounded-2xl border border-amber/25 bg-amber/5 px-7 py-6 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                Zulieferer eines NIS2-pflichtigen Unternehmens?
              </p>
              <p className="mt-1 max-w-2xl text-sm text-ink-soft">
                Das Lieferanten-Nachweis-Paket liefert Risikoregister, Sicherheitskonzept
                und Antworten auf bis zu zwei Kundenfragebögen. Festpreis 2.490 €,
                fertig in 2 bis 3 Wochen. Fragebogen einschicken, Einschätzung in 48 Stunden.
              </p>
            </div>
            <FlipButton
              front="Nachweis-Paket anfragen"
              back="Festpreis 2.490 €"
              href={mailto("Anfrage Lieferanten-Nachweis-Paket")}
              className="mt-4 shrink-0 border-amber/30 md:mt-0"
            />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-10 text-center text-xs leading-relaxed text-ink-mute">
            Alle Preise netto zzgl. MwSt., monatlich im Voraus. Mindestlaufzeit 6 Monate,
            danach monatlich kündbar. Incidents sind im Preis enthalten, Requests rechnen
            wir mit 125 €/Std. ab. 2 Managed Devices pro Mitarbeitendem inklusive.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
