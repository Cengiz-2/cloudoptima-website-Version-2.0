"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, Loader2, TriangleAlert } from "lucide-react";
import { site } from "@/lib/site";
import { ParticleButton } from "@/components/ui/particle-button";

const sizes = ["10 bis 25", "26 bis 60", "61 bis 120", "121 bis 200", "201 bis 300"];

const inputCls =
  "w-full rounded-xl border border-line bg-raised/60 px-4 py-3 text-sm text-ink placeholder:text-ink-mute transition-colors focus:border-azure/50 focus:outline-none";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Anfrageformular über Formspree (verknüpft mit info@cloudoptima.de),
 * gleicher Endpoint wie auf der alten Website. Formspree erwartet FormData
 * mit Accept: application/json; _gotcha ist der Spam-Honeypot.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [firma, setFirma] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState(sizes[1]);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("firma", firma);
      formData.append("email", email);
      formData.append("mitarbeitende", size);
      formData.append("nachricht", msg || "Bitte melden Sie sich für ein Erstgespräch.");
      formData.append("_subject", `Neue Website-Anfrage (CloudOptima)${firma ? ` • ${firma}` : ""} • ${size} MA`);
      formData.append("_gotcha", "");

      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree (${res.status})`);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4 py-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-mint/40 bg-mint/10">
          <CircleCheck className="h-7 w-7 text-mint" />
        </span>
        <p className="font-display text-xl font-semibold text-ink">Anfrage gesendet</p>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Danke{name ? `, ${name}` : ""}! Ihre Anfrage ist bei uns eingegangen.
          Sie erhalten innerhalb von 48 Stunden eine Antwort an {email || "Ihre E-Mail-Adresse"}.
        </p>
      </motion.div>
    );
  }

  return (
    <form className="grid gap-5 md:grid-cols-2" onSubmit={onSubmit}>
      <div>
        <label htmlFor="cf-name" className="mb-2 block text-sm text-ink-soft">
          Ihr Name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vor- und Nachname"
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor="cf-firma" className="mb-2 block text-sm text-ink-soft">
          Firma
        </label>
        <input
          id="cf-firma"
          type="text"
          autoComplete="organization"
          value={firma}
          onChange={(e) => setFirma(e.target.value)}
          placeholder="Firmenname"
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-2 block text-sm text-ink-soft">
          E-Mail für die Rückmeldung
        </label>
        <input
          id="cf-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@firma.de"
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor="cf-size" className="mb-2 block text-sm text-ink-soft">
          Mitarbeitende
        </label>
        <select
          id="cf-size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className={inputCls}
        >
          {sizes.map((s) => (
            <option key={s} value={s} className="bg-surface text-ink">
              {s} Mitarbeitende
            </option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="cf-msg" className="mb-2 block text-sm text-ink-soft">
          Worum geht es? <span className="text-ink-mute">(optional)</span>
        </label>
        <textarea
          id="cf-msg"
          rows={4}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Aktuelle Situation, Zeitdruck, NIS2, was auch immer ansteht."
          className={inputCls}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4 md:col-span-2">
        <ParticleButton type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Wird gesendet …
            </>
          ) : (
            <>
              Anfrage senden
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </ParticleButton>
        <p className="text-xs leading-relaxed text-ink-mute">
          Geht direkt an {site.email}.
          <br />
          Antwort innerhalb von 48 Stunden.
        </p>
      </div>
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-danger md:col-span-2">
          <TriangleAlert className="h-4 w-4 shrink-0" />
          Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
