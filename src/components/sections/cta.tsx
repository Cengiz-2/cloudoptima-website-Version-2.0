"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { ParticleButton } from "@/components/ui/particle-button";
import { FlipButton } from "@/components/ui/flip-button";

/** Kapitel 06: Der erste Schritt. Führt in den interaktiven Control-Check. */
export function Cta() {
  return (
    <section id="kontakt" className="section relative">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-3xl border border-line bg-surface/60 px-6 py-16 text-center md:px-16 md:py-20">
            <div
              aria-hidden
              className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_40%,black,transparent)]"
            />
            <motion.div
              aria-hidden
              className="absolute -top-32 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-azure/15 blur-[110px]"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-24 right-[12%] h-56 w-56 rounded-full bg-amber/10 blur-[100px]"
              animate={{ opacity: [0.4, 0.8, 0.4], x: [0, -20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <p className="kicker">Kapitel 06 · Der erste Schritt</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-4xl font-semibold text-ink md:text-5xl">
                In 15 Minuten wissen Sie, wo Sie stehen
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
                Acht Fragen zu MFA, Offboarding, Datenfreigaben und Geräten. Direkt
                hier auf der Seite, mit sofortiger Einschätzung. Keine Anmeldung,
                keine Verkaufsshow.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <ParticleButton href="/control-check">
                  Control-Check starten
                  <ArrowRight className="h-4 w-4" />
                </ParticleButton>
                <FlipButton
                  front={
                    <>
                      <Mail className="h-4 w-4" /> Lieber direkt schreiben
                    </>
                  }
                  back="Antwort in 48 Stunden"
                  href={`mailto:${site.email}`}
                />
              </div>
              <p className="mt-6 text-sm text-ink-mute">
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink-soft underline-offset-4 hover:text-azure-bright hover:underline"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
