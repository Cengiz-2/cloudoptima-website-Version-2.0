"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, viewportOnce, EASE } from "@/lib/motion";
import { ContainerScroll } from "@/components/ui/container-scroll";

const bars = [32, 38, 35, 44, 48, 52, 58, 56, 63, 68, 72, 74];

const actions = [
  "Kritische Patches installiert (23 Geräte)",
  "Conditional-Access-Policy aktualisiert",
  "3 verwaiste Lizenzen entfernt",
  "Break-Glass-Account getestet",
];

function DashboardMock() {
  return (
    <div className="bg-surface p-4 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
          </span>
          <span className="font-mono text-xs text-ink-soft">
            CloudOptima Monatsreport · Juni 2026
          </span>
        </div>
        <span className="flex items-center gap-1 font-mono text-xs text-mint">
          <ArrowUpRight className="h-3.5 w-3.5" />
          Secure Score +18 % seit Onboarding
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "Secure Score", value: "74 %", tone: "text-mint" },
          { label: "Patch-Compliance", value: "98 %", tone: "text-mint" },
          { label: "Offene Incidents", value: "0", tone: "text-ink" },
          { label: "Lizenzkosten", value: "−12 %", tone: "text-azure-bright" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-xl border border-line bg-raised/50 p-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-mute">
              {kpi.label}
            </p>
            <p className={`mt-1.5 font-display text-2xl font-semibold tabular-nums ${kpi.tone}`}>
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-5">
        <div className="rounded-xl border border-line bg-raised/50 p-4 md:col-span-3">
          <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-mute">
            Secure Score, letzte 12 Monate
          </p>
          <motion.div
            variants={staggerContainer(0.05, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 flex h-32 items-end gap-1.5 md:gap-2"
          >
            {bars.map((h, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { scaleY: 0 },
                  visible: { scaleY: 1, transition: { duration: 0.5, ease: EASE } },
                }}
                style={{ height: `${h}%` }}
                className={`flex-1 origin-bottom rounded-t-sm ${
                  i === bars.length - 1 ? "bg-azure" : "bg-azure/30"
                }`}
              />
            ))}
          </motion.div>
        </div>
        <div className="rounded-xl border border-line bg-raised/50 p-4 md:col-span-2">
          <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-mute">
            Maßnahmen diesen Monat
          </p>
          <ul className="mt-4 space-y-3">
            {actions.map((a) => (
              <li key={a} className="flex gap-2.5 text-sm text-ink-soft">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Report() {
  return (
    <section id="reporting" className="section relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <ContainerScroll
          header={
            <>
              <p className="kicker">Reporting</p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
                Sie sehen jeden Monat, was Ihre IT macht
              </h2>
              <p className="mt-5 text-lg text-ink-soft">
                Kein Blindflug und kein Vertrauensvorschuss. Der Monatsreport zeigt
                Security-Status, Patch-Stand, Incidents und Kosten. Verständlich genug
                für die Geschäftsführung, konkret genug fürs Audit.
              </p>
            </>
          }
        >
          <DashboardMock />
        </ContainerScroll>
      </div>
    </section>
  );
}
