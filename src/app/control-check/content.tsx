"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CircleCheck,
  Loader2,
  RotateCcw,
  TriangleAlert,
} from "lucide-react";
import { EASE } from "@/lib/motion";
import { checkQuestions } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/page-hero";
import { ParticleButton } from "@/components/ui/particle-button";

const inputCls =
  "w-full rounded-xl border border-line bg-raised/60 px-4 py-3 text-sm text-ink placeholder:text-ink-mute transition-colors focus:border-azure/50 focus:outline-none";

const zones = {
  mint: {
    badge: "border-mint/40 bg-mint/10 text-mint",
    label: "Solide Basis",
    text: "Die Grundpfeiler stehen. Jetzt geht es um Feinschliff, Nachweisbarkeit und darum, dass es so bleibt.",
  },
  amber: {
    badge: "border-amber/40 bg-amber/10 text-amber",
    label: "Lücken mit Ansage",
    text: "Einiges läuft, aber die offenen Punkte sind genau die, die bei einem Vorfall oder Audit wehtun. Planbar lösbar.",
  },
  danger: {
    badge: "border-danger/40 bg-danger/10 text-danger",
    label: "Akuter Handlungsbedarf",
    text: "Ihre Umgebung ist in diesem Zustand ein offenes Tor. Die gute Nachricht: Mit den richtigen Schritten ist das in wenigen Wochen behoben.",
  },
} as const;

/** Der Control-Check: 8 Fragen, Sofort-Auswertung, Ergebnis als E-Mail-Anfrage */
export function ControlCheckContent() {
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(() =>
    Array(checkQuestions.length).fill(null)
  );
  const [contact, setContact] = useState({ name: "", firma: "", email: "" });
  const [sendStatus, setSendStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const total = checkQuestions.length;
  const q = checkQuestions[step];

  const score = useMemo(
    () =>
      answers.reduce<number>(
        (sum, a, i) => sum + (a === null ? 0 : checkQuestions[i].options[a].points),
        0
      ),
    [answers]
  );
  const maxScore = total * 2;
  const zone = zones[score >= 13 ? "mint" : score >= 7 ? "amber" : "danger"];

  const weakSpots = checkQuestions.filter(
    (question, i) => answers[i] !== null && question.options[answers[i]!].points === 0
  );

  /** Ergebnis über Formspree (info@cloudoptima.de) senden, wie die Formulare der alten Website */
  const submitResult = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sendStatus === "sending") return;
    setSendStatus("sending");
    try {
      const summary = checkQuestions
        .map((question, i) => {
          const a = answers[i];
          return `${i + 1}. ${question.question}\n   Antwort: ${a === null ? "-" : question.options[a].label}`;
        })
        .join("\n");

      const formData = new FormData();
      formData.append("name", contact.name);
      formData.append("firma", contact.firma);
      formData.append("email", contact.email);
      formData.append("ergebnis", `${score} von ${maxScore} Punkten (${zone.label})`);
      formData.append("antworten", summary);
      formData.append(
        "_subject",
        `Control-Check Ergebnis${contact.firma ? ` (${contact.firma})` : ""} • ${score}/${maxScore}`
      );
      formData.append("_gotcha", "");

      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree (${res.status})`);
      setSendStatus("success");
    } catch (error) {
      console.error(error);
      setSendStatus("error");
    }
  };

  const choose = (optionIndex: number) => {
    const next = [...answers];
    next[step] = optionIndex;
    setAnswers(next);
    window.setTimeout(() => {
      if (step < total - 1) setStep(step + 1);
      else setPhase("result");
    }, 260);
  };

  const restart = () => {
    setAnswers(Array(total).fill(null));
    setStep(0);
    setSendStatus("idle");
    setPhase("quiz");
  };

  return (
    <main>
      <PageHero
        kicker="Control-Check"
        title="Wo steht Ihre Microsoft-Umgebung wirklich?"
        lead="Acht Fragen, keine Anmeldung, sofortige Einschätzung. Antworten Sie ehrlich, das Ergebnis sieht außer Ihnen niemand, solange Sie es nicht senden."
      />

      <section className="section pt-0">
        <div className="mx-auto max-w-2xl px-6">
          {phase === "quiz" ? (
            <div className="glass overflow-hidden rounded-3xl p-6 md:p-10">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-ink-mute">
                <span>
                  Frage {step + 1} von {total}
                </span>
                <span className="text-azure-bright">{q.area}</span>
              </div>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-raised">
                <motion.div
                  className="h-full bg-gradient-to-r from-azure to-azure-bright"
                  animate={{ width: `${(step / total) * 100}%` }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <h2 className="mt-8 font-display text-2xl font-semibold text-ink">
                    {q.question}
                  </h2>
                  <div className="mt-6 space-y-3">
                    {q.options.map((option, i) => (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => choose(i)}
                        className={cn(
                          "w-full rounded-xl border px-5 py-4 text-left text-sm transition-all duration-200",
                          answers[step] === i
                            ? "border-azure bg-azure/10 text-ink shadow-glow-sm"
                            : "border-line bg-raised/40 text-ink-soft hover:border-azure/40 hover:text-ink"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-5 text-xs leading-relaxed text-ink-mute">{q.hint}</p>
                </motion.div>
              </AnimatePresence>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-mute transition-colors hover:text-ink"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Zurück
                </button>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="glass rounded-3xl p-6 md:p-10"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">
                Ihr Ergebnis
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <p className="font-display text-6xl font-semibold tabular-nums text-ink">
                  {score}
                  <span className="text-2xl text-ink-mute"> / {maxScore}</span>
                </p>
                <span
                  className={cn(
                    "rounded-full border px-4 py-1.5 font-display text-sm",
                    zone.badge
                  )}
                >
                  {zone.label}
                </span>
              </div>
              <p className="mt-4 text-ink-soft">{zone.text}</p>

              {weakSpots.length > 0 && (
                <div className="mt-8">
                  <p className="font-display text-sm font-semibold text-ink">
                    Ihre kritischsten Baustellen:
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {weakSpots.slice(0, 3).map((w) => (
                      <li key={w.id} className="flex gap-2.5 text-sm text-ink-soft">
                        <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                        {w.hint}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 border-t border-line pt-8">
                {sendStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-4 py-6 text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-mint/40 bg-mint/10">
                      <CircleCheck className="h-7 w-7 text-mint" />
                    </span>
                    <p className="font-display text-xl font-semibold text-ink">
                      Ergebnis gesendet
                    </p>
                    <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                      Danke{contact.name ? `, ${contact.name}` : ""}! Sie erhalten
                      innerhalb von 48 Stunden eine ehrliche Einschätzung an{" "}
                      {contact.email || "Ihre E-Mail-Adresse"}.
                    </p>
                    <button
                      type="button"
                      onClick={restart}
                      className="inline-flex items-center gap-1.5 text-sm text-ink-mute transition-colors hover:text-ink"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Check neu starten
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={submitResult}>
                    <p className="font-display text-sm font-semibold text-ink">
                      Ergebnis senden, Einschätzung in 48 Stunden erhalten:
                    </p>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="cc-name" className="mb-2 block text-sm text-ink-soft">
                          Name
                        </label>
                        <input
                          id="cc-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={contact.name}
                          onChange={(e) => setContact({ ...contact, name: e.target.value })}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="cc-firma" className="mb-2 block text-sm text-ink-soft">
                          Firma
                        </label>
                        <input
                          id="cc-firma"
                          type="text"
                          autoComplete="organization"
                          value={contact.firma}
                          onChange={(e) => setContact({ ...contact, firma: e.target.value })}
                          className={inputCls}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="cc-email" className="mb-2 block text-sm text-ink-soft">
                          E-Mail für die Rückmeldung
                        </label>
                        <input
                          id="cc-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={contact.email}
                          onChange={(e) => setContact({ ...contact, email: e.target.value })}
                          className={inputCls}
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <ParticleButton type="submit" disabled={sendStatus === "sending"}>
                        {sendStatus === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Wird gesendet …
                          </>
                        ) : (
                          <>
                            Ergebnis an CloudOptima senden
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </ParticleButton>
                      <button
                        type="button"
                        onClick={restart}
                        className="inline-flex items-center gap-1.5 text-sm text-ink-mute transition-colors hover:text-ink"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Neu starten
                      </button>
                    </div>
                    {sendStatus === "error" && (
                      <p className="mt-4 flex items-center gap-2 text-sm text-danger">
                        <TriangleAlert className="h-4 w-4 shrink-0" />
                        Senden fehlgeschlagen. Bitte erneut versuchen oder direkt an{" "}
                        <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                          {site.email}
                        </a>{" "}
                        schreiben.
                      </p>
                    )}
                    <p className="mt-4 text-xs text-ink-mute">
                      Ihr Ergebnis geht direkt an {site.email}. Übertragen wird nur,
                      was Sie hier sehen: Ihre Antworten, die Punktzahl und Ihre
                      Kontaktdaten.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
