"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE, viewportOnce } from "@/lib/motion";
import { site } from "@/lib/site";
import { TermsDialog } from "@/components/ui/terms-dialog";
import { PartnerBadge } from "@/components/ui/partner-badge";

const letters = "CloudOptima".split("");

/** Footer mit gestaffeltem Riesen-Schriftzug (21st.dev animated-footer) */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-16">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-azure to-azure-deep font-display text-base font-bold text-void">
                C
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                Cloud<span className="text-azure-bright">Optima</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              Managed Services für Microsoft 365 und Azure. Betrieb, Security und
              NIS2-Nachweise aus einer Hand, für Unternehmen mit 10 bis 300
              Mitarbeitenden.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <PartnerBadge />
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-sm text-azure-bright underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer-Navigation">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {[...site.nav, { label: "Control-Check", href: site.cta.href }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
              Rechtliches
            </p>
            <div className="mt-4 space-y-2.5">
              <Link
                href="/impressum"
                className="block text-sm text-ink-soft transition-colors hover:text-ink"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block text-sm text-ink-soft transition-colors hover:text-ink"
              >
                Datenschutz
              </Link>
              <TermsDialog
                title="Leistungsbedingungen (Kurzfassung)"
                trigger={
                  <button
                    type="button"
                    className="block text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    Leistungsbedingungen
                  </button>
                }
              >
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    Mindestlaufzeit 6 Monate, danach monatlich kündbar. Abrechnung
                    monatlich im Voraus, alle Preise netto zzgl. MwSt.
                  </li>
                  <li>
                    Incidents (Störung eines bestehenden Service) sind im Pauschalpreis
                    enthalten. Requests (Neues oder Änderungen) rechnen wir mit
                    125 €/Std. ab, mindestens 0,5 Std.
                  </li>
                  <li>
                    2 Managed Devices pro Mitarbeitendem inklusive, jedes weitere Gerät
                    6 €/Monat.
                  </li>
                  <li>
                    Servicezeiten Montag bis Freitag, 9 bis 17 Uhr. Das Monitoring läuft
                    rund um die Uhr automatisiert. 24/7-Rufbereitschaft für P1 gibt es
                    als Add-on.
                  </li>
                  <li>
                    Nicht enthalten: Endanwender-Helpdesk, Hardware-Reparatur vor Ort,
                    Schulungen sowie Projekte und Migrationen. Alles davon ist separat
                    buchbar.
                  </li>
                </ul>
                <p className="mt-5 text-xs text-ink-mute">
                  Kurzfassung zur Orientierung. Maßgeblich ist der jeweilige Vertrag.
                </p>
              </TermsDialog>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-line pt-6 text-xs text-ink-mute md:flex-row">
          <p>© 2026 CloudOptima. Alle Rechte vorbehalten.</p>
          <p>Managed Services für Microsoft 365 & Azure</p>
        </div>
      </div>

      <motion.div
        aria-hidden
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
        className="pointer-events-none flex justify-center overflow-hidden px-2"
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { y: "70%", opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
            }}
            className="font-display text-[13vw] font-bold leading-[0.85] text-transparent [-webkit-text-stroke:1px_rgb(159_176_199/0.22)]"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </footer>
  );
}
