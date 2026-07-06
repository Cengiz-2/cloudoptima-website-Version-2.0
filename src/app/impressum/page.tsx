import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | CloudOptima",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-36 md:pt-44">
      <h1 className="font-display text-4xl font-semibold text-ink">Impressum</h1>
      <p className="mt-4 inline-block rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 font-mono text-xs text-amber">
        Platzhalter · vor Launch mit den Angaben von cloudoptima.de vervollständigen
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Angaben gemäß § 5 DDG</h2>
          <p className="mt-3">
            CloudOptima
            <br />
            Inhaber: Cengiz Gümüşdere
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ] Frankfurt am Main
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Kontakt</h2>
          <p className="mt-3">
            E-Mail:{" "}
            <a href={`mailto:${site.email}`} className="text-azure-bright underline-offset-4 hover:underline">
              {site.email}
            </a>
            <br />
            Telefon: [wird ergänzt]
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Umsatzsteuer-ID</h2>
          <p className="mt-3">[USt-IdNr. wird ergänzt]</p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">
            Verantwortlich für den Inhalt
          </h2>
          <p className="mt-3">Cengiz Gümüşdere, Anschrift wie oben</p>
        </section>
      </div>
    </main>
  );
}
