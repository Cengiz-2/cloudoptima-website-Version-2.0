"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { ComparisonSlider } from "@/components/ui/comparison-slider";

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

export function Comparison() {
  return (
    <section id="vergleich" className="section relative">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker">Vorher / Nachher</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
            So sieht Ihre Umgebung nach dem Onboarding aus
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Das links ist keine Übertreibung. So finden wir die meisten
            Microsoft-Umgebungen vor. Ziehen Sie den Regler.
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={0.1}>
          <ComparisonSlider
            beforeLabel="Vorher"
            afterLabel="Mit CloudOptima"
            before={<Panel tone="before" rows={beforeRows} />}
            after={<Panel tone="after" rows={afterRows} />}
          />
          <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
            Regler ziehen oder mit Pfeiltasten steuern
          </p>
        </Reveal>
      </div>
    </section>
  );
}
