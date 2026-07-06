import {
  BellRing,
  CalendarCheck,
  ClipboardCheck,
  Coins,
  FileBarChart,
  KeyRound,
  RefreshCcw,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

/** Kapitel des roten Fadens auf der Startseite */
export const chapters = [
  { id: "ausgangslage", nr: "01", label: "Ausgangslage" },
  { id: "betrieb", nr: "02", label: "Der Betrieb" },
  { id: "nachweis", nr: "03", label: "Der Nachweis" },
  { id: "weg", nr: "04", label: "Der Weg" },
  { id: "kontakt", nr: "05", label: "Der erste Schritt" },
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
};

/** Die neun Kernleistungen aus dem Core Managed Service */
export const services: Service[] = [
  {
    icon: RefreshCcw,
    title: "M365 & Azure Regelbetrieb",
    text: "Monatlicher Tenant-Health-Check, Lizenz-Audit und Korrektur von Konfigurations-Drift, bevor er Probleme macht.",
  },
  {
    icon: KeyRound,
    title: "Identity & Access",
    text: "MFA für alle Accounts, Conditional-Access-Policies und dokumentierte, getestete Break-Glass-Accounts.",
  },
  {
    icon: ShieldCheck,
    title: "Security Baselines",
    text: "Monatlicher Security-Check, Secure-Score-Tracking und nachvollziehbar kommunizierte Policy-Änderungen.",
  },
  {
    icon: ClipboardCheck,
    title: "Patch Management",
    text: "Kritische Patches zeitnah nach Release, abgestimmte Wartungsfenster und ein monatlicher Compliance-Report.",
  },
  {
    icon: BellRing,
    title: "Monitoring & Alerting",
    text: "24/7 automatisierte Überwachung mit automatischer Ticketerstellung. Bearbeitung in den Servicezeiten.",
  },
  {
    icon: Coins,
    title: "Cost Control",
    text: "Monatliche Lizenz-Analyse, Quick Wins zur Kostenreduktion und ein Kostenreport ohne Überraschungen.",
  },
  {
    icon: FileBarChart,
    title: "Management Reporting",
    text: "Security-Status, Patch-Compliance und Incident-Zusammenfassung. Lesbar für Geschäftsführung und Audit.",
  },
  {
    icon: UserRound,
    title: "Fester Ansprechpartner",
    text: "Ein persönlicher Kontakt, der Ihre Umgebung kennt. Priorisierung von Anfragen, regelmäßige Abstimmung.",
  },
  {
    icon: CalendarCheck,
    title: "Quartals-Review",
    text: "Rückblick auf drei Monate, Bewertung offener Risiken und ein konkreter Plan für die nächsten Schritte.",
  },
];

/** Onboarding in fünf Schritten (Kapitel „Der Weg“) */
export const onboardingSteps = [
  {
    nr: "1",
    title: "Kickoff & Access",
    text: "GDAP-Zugriff einrichten, Ansprechpartner und Ziele festlegen. Sie geben keinen Global Admin aus der Hand.",
    duration: "Woche 1",
  },
  {
    nr: "2",
    title: "Härtung & Baseline",
    text: "Conditional Access, MFA-Erzwingung und Intune-Profile. Die Basis, auf der alles Weitere aufsetzt.",
    duration: "Woche 2 bis 3",
  },
  {
    nr: "3",
    title: "Deployment",
    text: "Monitoring-Agent via Intune auf alle Geräte, Defender-Integration aktivieren.",
    duration: "Woche 3 bis 4",
  },
  {
    nr: "4",
    title: "Monitoring & Tuning",
    text: "Alert-Schwellenwerte anpassen, erster Patch-Zyklus, Secure-Score-Check gegen die Baseline.",
    duration: "Woche 5 bis 6",
  },
  {
    nr: "5",
    title: "Go-Live & Report",
    text: "Abschlussbericht mit Secure Score vorher und nachher, Übergang in den Regelbetrieb.",
    duration: "Ab Woche 6",
  },
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tag: string;
  blocks: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
  >;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "nis2-nachfrist-2026",
    title: "NIS2-Nachfrist bis 31.07.2026: Was Sie jetzt noch schaffen können",
    description:
      "Die BSI-Nachfrist für die Registrierung läuft ab. Wer betroffen ist, was bis Ende Juli passieren muss und was danach realistisch bleibt.",
    date: "2026-06-28",
    readingTime: "5 Min.",
    tag: "NIS2",
    blocks: [
      {
        type: "p",
        text: "Das NIS2-Umsetzungsgesetz ist seit Dezember 2025 in Kraft. Für die Registrierung beim BSI läuft aktuell die Nachfrist, sie endet am 31. Juli 2026. Danach drohen bei Verstößen Bußgelder, die je nach Einrichtung bis in den siebenstelligen Bereich gehen.",
      },
      { type: "h2", text: "Wer überhaupt betroffen ist" },
      {
        type: "p",
        text: "Die Grundregel: Ihr Unternehmen arbeitet in einem der regulierten Sektoren und hat mindestens 50 Mitarbeitende oder 10 Millionen Euro Jahresumsatz. Zu den Sektoren zählen unter anderem Energie, Transport, Gesundheit, digitale Infrastruktur, aber auch verarbeitendes Gewerbe und Chemie. Viele Mittelständler sind betroffen, ohne es zu wissen.",
      },
      {
        type: "p",
        text: "Dazu kommt die Lieferkette: Wer Zulieferer oder Dienstleister eines NIS2-pflichtigen Unternehmens ist, fällt oft nicht selbst unter das Gesetz, muss seinen Auftraggebern aber Sicherheitsnachweise liefern. Paragraf 30 BSIG verpflichtet die Betroffenen, ihre Lieferkette abzusichern. Diese Anforderungen landen gerade reihenweise als Fragebögen in den Postfächern von Zulieferern.",
      },
      { type: "h2", text: "Was bis zum 31. Juli passieren muss" },
      {
        type: "ul",
        items: [
          "Betroffenheit klären: Sektor und Unternehmensgröße prüfen, Ergebnis dokumentieren",
          "Registrierung beim BSI durchführen, falls betroffen",
          "Verantwortlichkeiten festlegen: Wer haftet, wer meldet Vorfälle, wer entscheidet",
          "Bestandsaufnahme der IT-Umgebung als Basis für alles Weitere",
        ],
      },
      { type: "h2", text: "Und wenn die Frist nicht mehr reicht?" },
      {
        type: "p",
        text: "Dann gilt: Registrierung nachholen und die technische Umsetzung sauber aufsetzen statt in Panik Einzelmaßnahmen zu kaufen. Eine Microsoft-Umgebung lässt sich in 6 bis 12 Wochen auf ein nachweisbares Niveau bringen, inklusive Dokumentation. Wer nachweisen kann, dass die Umsetzung läuft, steht bei einer Prüfung deutlich besser da als jemand ohne Plan.",
      },
      {
        type: "p",
        text: "Wenn Sie nicht sicher sind, wo Sie stehen: Der 15-Minuten Control-Check gibt Ihnen eine ehrliche Ersteinschätzung, kostenlos und ohne Verkaufsgespräch.",
      },
    ],
  },
  {
    slug: "m365-backup-irrtum",
    title: "Microsoft sichert Ihre Daten nicht. Der teuerste Irrtum in M365",
    description:
      "Verfügbarkeit ist nicht Backup. Warum gelöschte Mails nach 30 Tagen weg sind und was ein echtes M365-Backup leisten muss.",
    date: "2026-05-19",
    readingTime: "4 Min.",
    tag: "Microsoft 365",
    blocks: [
      {
        type: "p",
        text: "Die Annahme klingt logisch: Die Daten liegen bei Microsoft in der Cloud, also sichert Microsoft sie auch. Das stimmt nur zur Hälfte, und die falsche Hälfte wird teuer.",
      },
      { type: "h2", text: "Was Microsoft wirklich garantiert" },
      {
        type: "p",
        text: "Microsoft garantiert die Verfügbarkeit der Plattform. Fällt ein Rechenzentrum aus, laufen Ihre Dienste weiter. Das ist Geo-Redundanz, kein Backup. Löscht ein Mitarbeiter ein SharePoint-Verzeichnis, verschlüsselt Ransomware Ihre OneDrive-Dateien oder räumt ein kompromittiertes Konto das Postfach leer, repliziert Microsoft diese Änderung zuverlässig in alle Rechenzentren. Auch das Löschen wird hochverfügbar ausgeführt.",
      },
      {
        type: "p",
        text: "Die eingebauten Papierkörbe helfen nur begrenzt: Standardmäßig sind gelöschte Elemente nach 30 bis 93 Tagen endgültig weg, je nach Dienst. Ein Wiederherstellungspunkt von vor sechs Monaten existiert schlicht nicht.",
      },
      { type: "h2", text: "Was ein echtes M365-Backup braucht" },
      {
        type: "ul",
        items: [
          "Tägliche Sicherung von Exchange, SharePoint, OneDrive und Teams",
          "Aufbewahrung von mindestens einem Jahr, getrennt vom Microsoft-Tenant",
          "Wiederherstellung einzelner Elemente statt Alles-oder-nichts-Restore",
          "Dokumentation, die im Audit und im Versicherungsfall standhält",
        ],
      },
      {
        type: "p",
        text: "Für NIS2-betroffene Unternehmen ist das Thema doppelt relevant: Ohne nachgewiesene Backup- und Wiederherstellungsstrategie fehlt ein Kernbaustein der geforderten Maßnahmen. Prüfen Sie deshalb zuerst, was heute tatsächlich gesichert wird. Bei den meisten Umgebungen, die wir übernehmen, lautet die ehrliche Antwort: nichts.",
      },
    ],
  },
  {
    slug: "copilot-oversharing",
    title: "Copilot findet alles. Auch die Gehaltsliste im falschen Ordner",
    description:
      "Warum Microsoft 365 Copilot Berechtigungsfehler gnadenlos sichtbar macht und welche drei Schritte vor dem Rollout Pflicht sind.",
    date: "2026-04-07",
    readingTime: "4 Min.",
    tag: "Copilot",
    blocks: [
      {
        type: "p",
        text: "Microsoft 365 Copilot beantwortet Fragen mit allem, worauf der fragende Benutzer Zugriff hat. Genau da liegt das Problem: In gewachsenen Umgebungen haben Benutzer auf weit mehr Zugriff, als irgendjemand glaubt.",
      },
      { type: "h2", text: "Das Oversharing-Problem" },
      {
        type: "p",
        text: "Jahrelang war die Freigabe „Jeder in der Organisation“ der bequeme Weg, Dateien zu teilen. Das fiel nicht auf, weil niemand danach gesucht hat. Copilot sucht. Fragt ein Mitarbeiter nach Gehältern, Kündigungen oder dem Stand einer Übernahme, liefert Copilot jede erreichbare Datei als Antwort. Kein Hack, keine Lücke, nur die eigenen Berechtigungen, endlich sichtbar gemacht.",
      },
      { type: "h2", text: "Drei Schritte vor dem Rollout" },
      {
        type: "ul",
        items: [
          "Oversharing-Analyse: Welche Inhalte sind organisationsweit oder extern freigegeben, welche davon sind sensibel",
          "Labeling-Konzept: Sensitivity Labels für vertrauliche Inhalte, damit Copilot und DLP-Policies greifen können",
          "Berechtigungs-Cleanup: Alte Freigaben, verwaiste Gruppen und Everyone-Links systematisch zurückbauen",
        ],
      },
      {
        type: "p",
        text: "Der Aufwand ist überschaubar, wenn er vor dem Rollout passiert. Danach wird er zum Incident. Unser Copilot-Readiness-Paket erledigt genau diese drei Schritte zum Festpreis, damit der Assistent produktiv wird statt gefährlich.",
      },
    ],
  },
];

export type CheckQuestion = {
  id: string;
  area: string;
  question: string;
  options: Array<{ label: string; points: 0 | 1 | 2 }>;
  hint: string;
};

/** Fragen des 15-Minuten Control-Checks, Punkte 0 (kritisch) bis 2 (gut) */
export const checkQuestions: CheckQuestion[] = [
  {
    id: "mfa",
    area: "Identity",
    question: "Ist MFA für alle Benutzerkonten erzwungen, ohne Ausnahmen?",
    options: [
      { label: "Ja, für alle erzwungen", points: 2 },
      { label: "Für die meisten, es gibt Ausnahmen", points: 1 },
      { label: "Nein oder nur freiwillig", points: 0 },
    ],
    hint: "Konten ohne MFA sind der häufigste Einstiegspunkt bei Angriffen auf M365-Umgebungen.",
  },
  {
    id: "admins",
    area: "Identity",
    question: "Sind Admin-Rechte auf separate, besonders geschützte Konten beschränkt?",
    options: [
      { label: "Ja, getrennte Admin-Konten", points: 2 },
      { label: "Teilweise, Admins arbeiten auch mit Adminrechten im Alltag", points: 1 },
      { label: "Nein, Adminrechte auf normalen Konten", points: 0 },
    ],
    hint: "Ein kompromittiertes Alltagskonto mit Adminrechten kompromittiert die ganze Umgebung.",
  },
  {
    id: "offboarding",
    area: "Prozesse",
    question: "Verlieren ausscheidende Mitarbeitende ihren Zugriff noch am selben Tag?",
    options: [
      { label: "Ja, fester dokumentierter Prozess", points: 2 },
      { label: "Meistens, aber ohne festen Prozess", points: 1 },
      { label: "Unklar, alte Konten existieren vermutlich noch", points: 0 },
    ],
    hint: "Verwaiste Konten mit aktiven Lizenzen sind ein Sicherheits- und ein Kostenproblem.",
  },
  {
    id: "sharing",
    area: "Daten",
    question: "Wissen Sie, welche Daten extern oder organisationsweit freigegeben sind?",
    options: [
      { label: "Ja, Freigaben werden regelmäßig geprüft", points: 2 },
      { label: "Grob, aber ohne regelmäßige Prüfung", points: 1 },
      { label: "Nein, das hat nie jemand geprüft", points: 0 },
    ],
    hint: "Unkontrollierte Freigaben werden spätestens mit Copilot zum akuten Problem.",
  },
  {
    id: "devices",
    area: "Geräte",
    question: "Werden alle Geräte zentral verwaltet und automatisch gepatcht?",
    options: [
      { label: "Ja, zentral via Intune oder vergleichbar", points: 2 },
      { label: "Teilweise, nicht alle Geräte erfasst", points: 1 },
      { label: "Nein, Updates macht jeder selbst", points: 0 },
    ],
    hint: "Ungepatchte Geräte sind nach Phishing der zweithäufigste Weg in Unternehmensnetze.",
  },
  {
    id: "backup",
    area: "Daten",
    question: "Gibt es ein echtes Backup für Exchange, SharePoint, OneDrive und Teams?",
    options: [
      { label: "Ja, tägliche Sicherung mit langer Aufbewahrung", points: 2 },
      { label: "Nur die Microsoft-Papierkörbe und Aufbewahrungsrichtlinien", points: 1 },
      { label: "Nein beziehungsweise unklar", points: 0 },
    ],
    hint: "Microsoft garantiert Verfügbarkeit, nicht die Wiederherstellung Ihrer Daten.",
  },
  {
    id: "monitoring",
    area: "Betrieb",
    question: "Fällt es automatisch auf, wenn sich jemand verdächtig anmeldet?",
    options: [
      { label: "Ja, Alerts mit definierter Reaktion", points: 2 },
      { label: "Alerts existieren, schaut aber selten jemand rein", points: 1 },
      { label: "Nein, so etwas gibt es nicht", points: 0 },
    ],
    hint: "Ohne Monitoring vergehen im Schnitt Wochen, bis ein kompromittiertes Konto auffällt.",
  },
  {
    id: "nis2",
    area: "Compliance",
    question: "Ist Ihre NIS2-Betroffenheit geklärt und dokumentiert?",
    options: [
      { label: "Ja, geklärt und dokumentiert", points: 2 },
      { label: "Grob geprüft, nichts dokumentiert", points: 1 },
      { label: "Nein, beziehungsweise unsicher", points: 0 },
    ],
    hint: "Auch Zulieferer betroffener Unternehmen müssen zunehmend Nachweise liefern.",
  },
];
