"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, CircleX } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { services } from "@/lib/content";
import { addons, site } from "@/lib/site";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";
import { ParticleButton } from "@/components/ui/particle-button";

const outOfScope = [
  "Endanwender-Helpdesk („mein Drucker druckt nicht“)",
  "Hardware-Reparatur vor Ort",
  "Schulungen (separat buchbar)",
  "Projekte und Migrationen (separat als Festpreis-Angebot)",
];

export function LeistungenContent() {
  return (
    <main>
      <PageHero
        kicker="Leistungen"
        title="Neun Kernleistungen. In jeder Stufe. Ohne Sternchen."
        lead="Der Core Managed Service ist kein Baukasten mit versteckten Aufpreisen. Jede Preisstufe enthält denselben vollen Betrieb, der Preis skaliert nur mit der Größe Ihrer Umgebung."
      />

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              const tone = (["azure", "mint", "amber"] as const)[i % 3];
              const iconTone = {
                azure: "border-azure/25 bg-azure/10 text-azure-bright",
                mint: "border-mint/25 bg-mint/10 text-mint",
                amber: "border-amber/25 bg-amber/10 text-amber",
              }[tone];
              return (
                <motion.div key={s.title} variants={fadeUp} className="h-full">
                  <SpotlightCard tone={tone} className="h-full p-6">
                    <div className="flex items-start justify-between">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border ${iconTone}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-ink-mute">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="Abrechnung"
            title="Incident oder Request? Der Unterschied in einem Satz."
            lead="Wenn etwas kaputt ist, das vorher lief, zahlen Sie nichts extra. Wenn etwas Neues entstehen soll, rechnen wir transparent nach Aufwand ab."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-mint/25 bg-mint/5 p-7">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-mint">
                  Im Preis enthalten
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  „E-Mail geht nicht mehr“ – und der ganz normale Alltag
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Störungen eines bestehenden Service behebt das Monitoring meist,
                  bevor Sie sie merken. Auch der laufende Mitarbeiter-Ein- und
                  Austritt (Joiner/Mover/Leaver) und die Lizenzverwaltung gehören
                  zum Regelbetrieb. Ohne Zusatzkosten, so oft es nötig ist – und
                  2 Managed Devices pro Kopf sind immer dabei.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-line bg-surface/60 p-7">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-azure-bright">
                  Request · 125 €/Std., min. 0,5 Std.
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  „Wir übernehmen einen Standort mit 30 Leuten“
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Alles, was über den Regelbetrieb hinausgeht: Bulk-Onboarding
                  ganzer Teams, neue Freigabe-Strukturen, Migrationen und Projekte.
                  Läuft nur nach Ihrer Freigabe (Work Order), und Sie sehen jeden
                  Request im Monatsreport, inklusive Aufwand.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="Add-ons"
            title="Zubuchbar, wenn Ihre Lage es braucht"
          />
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {addons.map((addon) => (
              <motion.div
                key={addon.name}
                variants={fadeUp}
                className="rounded-2xl border border-line bg-surface/50 p-5 transition-colors duration-300 hover:border-azure/25"
              >
                <p className="font-display text-base font-semibold text-ink">{addon.name}</p>
                <p className="mt-1 font-mono text-sm text-azure-bright">{addon.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{addon.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-surface/50 p-7">
                <p className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <CircleCheck className="h-5 w-5 text-mint" />
                  Das übernehmen wir
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Alles, was Ihre Microsoft-Umgebung am Laufen, sicher und
                  nachweisbar hält: Betrieb, Härtung, Monitoring, Patches, Kosten,
                  Reporting und die Kommunikation dazu.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-line bg-surface/50 p-7">
                <p className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <CircleX className="h-5 w-5 text-danger" />
                  Das bewusst nicht
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                  {outOfScope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16 text-center" delay={0.1}>
            <ParticleButton href="/control-check">
              Passt das zu uns? Control-Check starten
              <ArrowRight className="h-4 w-4" />
            </ParticleButton>
            <p className="mt-4 text-sm text-ink-mute">
              Oder direkt fragen:{" "}
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
