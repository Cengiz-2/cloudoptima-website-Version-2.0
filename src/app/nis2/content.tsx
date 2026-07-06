"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, FileCheck2, Gauge, Scale, Siren, Users } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { site } from "@/lib/site";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { DeadlineCountdown } from "@/components/ui/countdown";
import { Reveal } from "@/components/ui/reveal";
import { ParticleButton } from "@/components/ui/particle-button";
import { FlipButton } from "@/components/ui/flip-button";

const sectors = [
  "Energie",
  "Transport & Verkehr",
  "Finanzwesen",
  "Gesundheit",
  "Trink- & Abwasser",
  "Digitale Infrastruktur",
  "IKT-Dienstleister",
  "Post & Kurier",
  "Abfallwirtschaft",
  "Chemie",
  "Lebensmittel",
  "Verarbeitendes Gewerbe",
  "Digitale Dienste",
  "Forschung",
];

const duties = [
  {
    icon: Building2,
    title: "Registrierung beim BSI",
    text: "Betroffene Einrichtungen müssen sich selbst registrieren. Genau dafür läuft die Nachfrist bis 31.07.2026.",
  },
  {
    icon: Gauge,
    title: "Risikomanagement",
    text: "Technische und organisatorische Maßnahmen: Zugriffskontrolle, MFA, Backup, Verschlüsselung, Patch-Prozesse.",
  },
  {
    icon: Siren,
    title: "Meldepflichten",
    text: "Erhebliche Sicherheitsvorfälle: Erstmeldung in 24 Stunden, Bewertung in 72 Stunden, Abschlussbericht in einem Monat.",
  },
  {
    icon: Users,
    title: "Lieferkette",
    text: "Die Sicherheit von Zulieferern und Dienstleistern muss bewertet werden. Deshalb bekommen Zulieferer gerade Fragebögen.",
  },
  {
    icon: Scale,
    title: "Haftung der Leitung",
    text: "Die Geschäftsleitung muss Maßnahmen billigen und überwachen. Bei Verstößen haftet sie persönlich.",
  },
  {
    icon: FileCheck2,
    title: "Nachweise",
    text: "Ohne Dokumentation zählt nichts davon. Maßnahmen müssen belegbar sein, nicht nur vorhanden.",
  },
];

export function Nis2Content() {
  return (
    <main>
      <PageHero
        kicker="NIS2"
        title="NIS2 ist kein IT-Projekt. Es ist eine Chefsache mit Frist."
        lead="Seit Dezember 2025 ist das Umsetzungsgesetz in Kraft. Die BSI-Nachfrist für die Registrierung endet am 31.07.2026. So kommen Sie mit einer Microsoft-Umgebung sauber durch."
      >
        <DeadlineCountdown />
      </PageHero>

      <section className="section pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="Betroffenheit"
            title="Fallen Sie unter NIS2?"
            lead="Die Kurzformel: regulierter Sektor plus mindestens 50 Mitarbeitende oder 10 Millionen Euro Jahresumsatz. Wer knapp darunter liegt, ist oft trotzdem betroffen, als Zulieferer eines regulierten Unternehmens."
          />
          <Reveal className="mt-10" delay={0.1}>
            <div className="flex flex-wrap gap-2.5">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-raised/60 px-4 py-2 font-display text-sm text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-mute">
              Auszug der regulierten Sektoren. Ob Sie konkret betroffen sind, klären
              wir im Control-Check anhand von Sektor, Größe und Kundenstruktur.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="Pflichten"
            title="Was NIS2 konkret verlangt"
          />
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {duties.map((d) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-azure/25"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-azure/25 bg-azure/10 text-azure-bright">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <Reveal className="mt-10" delay={0.1}>
            <p className="rounded-2xl border border-line bg-surface/50 px-6 py-5 text-sm leading-relaxed text-ink-soft">
              Die gute Nachricht: In einer Microsoft-Umgebung existiert das Werkzeug
              dafür bereits. Entra ID, Intune, Defender und Purview decken die
              technischen Anforderungen ab, sie müssen nur konsequent konfiguriert
              und dokumentiert werden. Genau das ist unser Kerngeschäft:{" "}
              <span className="text-ink">6 bis 12 Wochen bis zur nachweisbaren Compliance</span>,
              je nach Ausgangslage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-amber/25 bg-amber/5 px-7 py-10 md:px-12">
              <p className="kicker !text-amber">Für Zulieferer</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink md:text-4xl">
                Ihr Auftraggeber will Sicherheitsnachweise. Wir liefern sie.
              </h2>
              <p className="mt-4 max-w-2xl text-ink-soft">
                Das Lieferanten-Nachweis-Paket: Bestandsaufnahme Ihrer M365/Azure-Umgebung,
                dokumentiertes Risikoregister, Sicherheitskonzept-Nachweis für den
                Auftraggeber und Antworten auf bis zu zwei Kundenfragebögen. Festpreis
                2.490 € netto, fertig in 2 bis 3 Wochen.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ParticleButton
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Anfrage Lieferanten-Nachweis-Paket")}`}
                >
                  Fragebogen einschicken
                  <ArrowRight className="h-4 w-4" />
                </ParticleButton>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                  Einschätzung innerhalb von 48 Stunden
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16 text-center" delay={0.1}>
            <p className="font-display text-2xl font-semibold text-ink">
              Unsicher, wo Sie stehen?
            </p>
            <div className="mt-6">
              <FlipButton
                front="15-Minuten Control-Check starten"
                back="Kostenlos & unverbindlich"
                href="/control-check"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
