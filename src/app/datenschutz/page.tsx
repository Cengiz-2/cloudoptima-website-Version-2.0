import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | CloudOptima",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-36 md:pt-44">
      <h1 className="font-display text-4xl font-semibold text-ink">Datenschutzerklärung</h1>
      <p className="mt-4 inline-block rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 font-mono text-xs text-amber">
        Platzhalter · vor Launch mit der Fassung von cloudoptima.de vervollständigen
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Verantwortlicher</h2>
          <p className="mt-3">
            CloudOptima, Cengiz Gümüşdere, Frankfurt am Main
            <br />
            E-Mail:{" "}
            <a href={`mailto:${site.email}`} className="text-azure-bright underline-offset-4 hover:underline">
              {site.email}
            </a>
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Datenverarbeitung auf dieser Website
          </h2>
          <p className="mt-3">
            Diese Website setzt keine Tracking-Cookies und keine Analyse-Tools ein.
            Schriften werden lokal über Next.js ausgeliefert, es findet keine
            Verbindung zu Google Fonts statt. Der interaktive Control-Check läuft
            vollständig in Ihrem Browser, Antworten werden erst übertragen, wenn Sie
            das Ergebnis aktiv per E-Mail senden.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Hosting</h2>
          <p className="mt-3">
            [Hosting-Anbieter und Server-Log-Informationen werden vor Launch ergänzt.]
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
            der Verarbeitung, Datenübertragbarkeit und Widerspruch nach Art. 15 bis
            21 DSGVO sowie ein Beschwerderecht bei einer Aufsichtsbehörde.
          </p>
        </section>
      </div>
    </main>
  );
}
