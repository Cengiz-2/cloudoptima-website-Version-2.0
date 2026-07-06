"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock3, Euro, ShieldAlert } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { chapters } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ComparisonSlider } from "@/components/ui/comparison-slider";

const pains = [
  {
    icon: Clock3,
    title: "Keine Zeit für IT",
    text: "Das Kerngeschäft frisst den Tag. Updates, Benutzerverwaltung und Alerts laufen nebenher oder gar nicht.",
  },
  {
    icon: Euro,
    title: "Kosten ohne Kontur",
    text: "Lizenzen wachsen mit jedem Jahr, geprüft hat sie nie jemand. Was die IT wirklich kostet, weiß keiner genau.",
  },
  {
    icon: ShieldAlert,
    title: "Sicherheit nach Gefühl",
    text: "MFA halb ausgerollt, Freigaben historisch gewachsen, NIS2 ungeklärt. Es funktioniert, bis es das nicht mehr tut.",
  },
];

const beforeRows = [
  "MFA-Abdeckung 61 %, drei Admin-Konten ohne Schutz",
  "214 Gastzugänge, niemand weiß mehr von wem",
  "Patches laufen, wenn gerade Zeit ist",
  "Lizenzkosten gewachsen, nie geprüft",
  "NIS2 steht seit Monaten auf der Liste",
];

const afterRows = [
  "MFA-Abdeckung 100 %, Conditional Access aktiv",
  "Gastzugänge geprüft und dokumentiert",
  "Patch-Compliance 98 %, feste Wartungsfenster",
  "Lizenz-Audit monatlich, Kosten um 12 % gesenkt",
  "NIS2-Nachweise liegen fertig im Ordner",
];

function Panel({ tone, rows }: { tone: "before" | "after"; rows: string[] }) {
  const ok = tone === "after";
  return (
    <div
      className={cn(
        "flex h-[440px] flex-col justify-center gap-3 px-6 py-12 md:px-16",
        ok
          ? "bg-surface bg-[radial-gradient(ellipse_at_top,rgb(var(--mint)/0.07),transparent_65%)]"
          : "bg-surface bg-[radial-gradient(ellipse_at_top,rgb(var(--danger)/0.07),transparent_65%)]"
      )}
    >
      {rows.map((row) => (
        <div
          key={row}
          className={cn(
            "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm text-ink-soft",
            ok ? "border-mint/20 bg-mint/5" : "border-danger/20 bg-danger/5"
          )}
        >
          {ok ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 text-mint" />
          ) : (
            <AlertTriangle className="h-4 w-4 shrink-0 text-danger" />
          )}
          {row}
        </div>
      ))}
    </div>
  );
}

/** Kapitel 01: Ausgangslage. Schmerzpunkte plus Vorher/Nachher-Slider. */
export function Problem() {
  return (
    <section id="ausgangslage" className="section relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          chapter={chapters[0]}
          title="Kommt Ihnen das bekannt vor?"
          lead="Zwischen Tagesgeschäft und Compliance bleibt die IT liegen. Nicht aus Nachlässigkeit, sondern weil Zeit, Personal und Microsoft-Tiefenwissen fehlen."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-danger/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-danger/25 bg-danger/10 text-danger">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal className="mx-auto mt-20 max-w-5xl" delay={0.1}>
          <p className="mb-6 text-center font-display text-2xl font-semibold text-ink">
            Der Unterschied, konkret. Ziehen Sie den Regler.
          </p>
          <ComparisonSlider
            beforeLabel="Vorher"
            afterLabel="Mit CloudOptima"
            before={<Panel tone="before" rows={beforeRows} />}
            after={<Panel tone="after" rows={afterRows} />}
          />
          <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
            So finden wir die meisten Umgebungen vor. Das ist keine Übertreibung.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
