"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { ParticleButton } from "@/components/ui/particle-button";

const sizes = ["10 bis 25", "26 bis 60", "61 bis 120", "121 bis 200", "201 bis 300"];

const inputCls =
  "w-full rounded-xl border border-line bg-raised/60 px-4 py-3 text-sm text-ink placeholder:text-ink-mute transition-colors focus:border-azure/50 focus:outline-none";

/**
 * Anfrageformular ohne Backend: baut aus den Feldern eine vorausgefüllte
 * E-Mail und öffnet den Mail-Client des Besuchers.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [firma, setFirma] = useState("");
  const [size, setSize] = useState(sizes[1]);
  const [msg, setMsg] = useState("");

  const href = useMemo(() => {
    const subject = `Anfrage Managed Service${firma ? ` (${firma})` : ""}`;
    const body = [
      `Name: ${name || "-"}`,
      `Firma: ${firma || "-"}`,
      `Mitarbeitende: ${size}`,
      "",
      msg || "Bitte melden Sie sich für ein Erstgespräch.",
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, firma, size, msg]);

  return (
    <form className="grid gap-5 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="cf-name" className="mb-2 block text-sm text-ink-soft">
          Ihr Name
        </label>
        <input
          id="cf-name"
          type="text"
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
      <div className="md:col-span-2">
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
        <ParticleButton href={href}>
          Anfrage senden
          <ArrowRight className="h-4 w-4" />
        </ParticleButton>
        <p className="text-xs leading-relaxed text-ink-mute">
          Öffnet Ihre Mail-App mit vorausgefüllter Nachricht.
          <br />
          Antwort innerhalb von 48 Stunden.
        </p>
      </div>
    </form>
  );
}
