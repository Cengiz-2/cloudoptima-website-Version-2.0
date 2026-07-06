"use client";

import { motion } from "framer-motion";
import {
  DatabaseBackup,
  Download,
  FileBarChart,
  LineChart,
  ShieldAlert,
  ShieldCheck,
  UserPlus,
  Coins,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type OpsTask = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  tone: "azure" | "mint" | "amber";
};

const tasks: OpsTask[] = [
  {
    title: "MFA-Lücke geschlossen",
    subtitle: "Neuer Account ohne MFA erkannt und gehärtet",
    icon: ShieldCheck,
    tone: "mint",
  },
  {
    title: "Kritischer Patch ausgerollt",
    subtitle: "23 Geräte, Wartungsfenster 22:00 Uhr",
    icon: Download,
    tone: "azure",
  },
  {
    title: "Lizenz-Leiche entfernt",
    subtitle: "3 ungenutzte Lizenzen gekündigt, 174 €/Monat gespart",
    icon: Coins,
    tone: "amber",
  },
  {
    title: "Alert triagiert",
    subtitle: "Ungewöhnlicher Login geblockt, Konto gesichert",
    icon: ShieldAlert,
    tone: "azure",
  },
  {
    title: "Neuer Mitarbeiter onboarded",
    subtitle: "Account, Lizenzen, Intune – im Regelbetrieb inklusive",
    icon: UserPlus,
    tone: "mint",
  },
  {
    title: "Backup verifiziert",
    subtitle: "Restore-Test für Exchange und SharePoint bestanden",
    icon: DatabaseBackup,
    tone: "azure",
  },
  {
    title: "Secure Score gestiegen",
    subtitle: "Conditional-Access-Policy nachgeschärft, +4 Punkte",
    icon: LineChart,
    tone: "mint",
  },
  {
    title: "Monatsreport verschickt",
    subtitle: "Security, Patches und Kosten, ohne Nachfragen",
    icon: FileBarChart,
    tone: "amber",
  },
];

const toneCls = {
  azure: "border-azure/25 bg-azure/10 text-azure-bright",
  mint: "border-mint/25 bg-mint/10 text-mint",
  amber: "border-amber/25 bg-amber/10 text-amber",
} as const;

/**
 * Regelbetrieb im Zeitraffer, nach 21st.dev ruixenui/feature-section:
 * links eine endlos durchlaufende Liste echter Betriebs-Ereignisse,
 * rechts die Einordnung mit Badges.
 */
export function OpsLoop() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 md:grid-cols-2 md:pb-32">
        {/* Links: durchlaufende Betriebs-Ereignisse */}
        <Reveal>
          <div className="glass relative overflow-hidden rounded-2xl shadow-card">
            <div className="relative h-[340px] overflow-hidden">
              <motion.div
                className="absolute flex w-full flex-col"
                animate={{ y: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" }}
              >
                {[...tasks, ...tasks].map((task, i) => {
                  const Icon = task.icon;
                  return (
                    <div
                      key={`${task.title}-${i}`}
                      className="flex items-center gap-4 border-b border-line px-5 py-4"
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                          toneCls[task.tone]
                        )}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-ink">{task.title}</p>
                        <p className="truncate text-xs text-ink-mute">{task.subtitle}</p>
                      </div>
                      <span className="ml-auto h-1.5 w-1.5 shrink-0 animate-pulse-dot rounded-full bg-mint" />
                    </div>
                  );
                })}
              </motion.div>
              {/* Fade oben/unten, nur innerhalb der Karte */}
              <div className="pointer-events-none absolute left-0 top-0 h-14 w-full bg-gradient-to-b from-surface via-surface/70 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-14 w-full bg-gradient-to-t from-surface via-surface/70 to-transparent" />
            </div>
          </div>
        </Reveal>

        {/* Rechts: Einordnung */}
        <Reveal delay={0.1}>
          <span className="inline-block rounded-full border border-azure/30 bg-azure/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-azure-bright">
            Regelbetrieb im Zeitraffer
          </span>
          <h3 className="mt-5 font-display text-3xl font-semibold text-ink md:text-4xl">
            Das passiert, während Sie{" "}
            <span className="bg-gradient-to-r from-azure-bright to-mint bg-clip-text text-transparent">
              nichts davon merken
            </span>
          </h3>
          <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
            So sieht ein ganz normaler Monat im Managed Service aus: Lücken werden
            geschlossen, bevor sie jemand ausnutzt, Patches laufen nachts, Kosten
            werden aufgeräumt und am Ende steht alles nachvollziehbar im Report.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["24/7 Monitoring", "9 Kernleistungen", "Feste Pauschale"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-line bg-raised/60 px-4 py-2 font-display text-sm text-ink-soft"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
