import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | CloudOptima",
  description: "Datenschutzerklärung von CloudOptima: welche Daten wir verarbeiten und Ihre Rechte nach DSGVO.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-36 md:pt-44">
      <h1 className="font-display text-4xl font-semibold text-ink">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            1. Datenschutz auf einen Blick
          </h2>
          <p className="mt-3">
            Die Website von CloudOptima verarbeitet personenbezogene Daten nur im
            erforderlichen Umfang. Rechtsgrundlage ist die DSGVO. Betroffene haben
            Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
            Datenübertragbarkeit und Widerspruch (Art. 15–22 DSGVO). Beschwerden
            richten Sie an die zuständige Aufsichtsbehörde (z. B. Hessisches LDI).
          </p>
          <p className="mt-3">
            Diese Website setzt keine Tracking-Cookies und keine Analyse-Tools ein.
            Schriften werden lokal ausgeliefert, es findet keine Verbindung zu
            Google Fonts statt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            2. Hosting und Formulare
          </h2>
          <p className="mt-3">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Netlify
            &amp; Formspree
            <br />
            <strong className="text-ink">Externes Hosting</strong>
          </p>
          <p className="mt-3">
            Die Website wird auf Netlify (Netlify Inc., 2325 3rd Street #296, San
            Francisco, CA 94107, USA) gehostet. Erfasst werden Logs mit IP-Adresse,
            Geräteinformationen, Zugriffszeit. Zweck: Bereitstellung und Sicherheit
            der Website. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer:
            30 Tage. Datenübermittlung in die USA gemäß EU-US Data Privacy Framework
            und Standardvertragsklauseln (Art. 46 DSGVO).
          </p>
          <p className="mt-3">
            Kontakt- und Anfrageformulare (einschließlich des Control-Checks) nutzen
            Formspree (Formspree Inc., USA). Erfasst: Name, E-Mail, Nachricht bzw.
            Ihre Angaben im Formular, IP. Zweck: Anfragenbearbeitung. Speicherdauer:
            bis Zweck erfüllt. Rechtsgrundlage: Art. 6 Abs. 1 lit. b/f DSGVO.
            Transfer: wie oben.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <p className="mt-3">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
            sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
          <p className="mt-3">
            <strong className="text-ink">Hinweis zur verantwortlichen Stelle</strong>
            <br />
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
            ist:
          </p>
          <p className="mt-3">
            {site.name}
            <br />
            {site.owner}
            <br />
            {site.address.street}
            <br />
            {site.address.city}
          </p>
          <p className="mt-3">
            Telefon: {site.phone}
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${site.emailPrivacy}`}
              className="text-azure-bright underline-offset-4 hover:underline"
            >
              {site.emailPrivacy}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            4. Datenerfassung auf dieser Website
          </h2>
          <p className="mt-3">
            <strong className="text-ink">Kontakt- und Anfrageformulare</strong>
            <br />
            Kontaktdaten werden nur für die Bearbeitung Ihrer Anfrage gespeichert.
            Keine Weitergabe an Dritte. Der interaktive Control-Check läuft
            vollständig in Ihrem Browser, Ihre Antworten werden erst übertragen,
            wenn Sie das Ergebnis aktiv absenden.
          </p>
        </section>
      </div>
    </main>
  );
}
