"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE, viewportOnce } from "@/lib/motion";
import { site } from "@/lib/site";
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
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3281CC] to-[#103B69] font-display text-base font-bold text-void">
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
              <Link
                href="/leistungen"
                className="block text-sm text-ink-soft transition-colors hover:text-ink"
              >
                Leistungsbedingungen
              </Link>
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
