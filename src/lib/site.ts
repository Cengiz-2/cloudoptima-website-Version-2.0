export const site = {
  name: "CloudOptima",
  domain: "cloudoptima.de",
  email: "cengiz.guemuesdere@cloudoptima.de",
  /** Ende der BSI-Nachfrist für NIS2-Registrierung */
  nis2Deadline: "2026-07-31T23:59:59+02:00",
  nav: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Vergleich", href: "#vergleich" },
    { label: "Preise", href: "#preise" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    label: "Control-Check starten",
    /** 15-Minuten Control-Check, aktuell per E-Mail-Erstkontakt */
    href: "#kontakt",
  },
} as const;

export const pricingTiers = [
  {
    name: "Small",
    range: "10 bis 25 Mitarbeitende",
    price: 1490,
    setup: "2.490 €",
    highlighted: false,
  },
  {
    name: "Medium",
    range: "26 bis 60 Mitarbeitende",
    price: 2490,
    setup: "4.990 €",
    highlighted: true,
  },
  {
    name: "Large",
    range: "61 bis 120 Mitarbeitende",
    price: 3990,
    setup: "9.990 €",
    highlighted: false,
  },
] as const;

export const enterpriseTiers = [
  { name: "Enterprise", range: "121 bis 200 Mitarbeitende", price: "5.990 €" },
  { name: "Corporate", range: "201 bis 300 Mitarbeitende", price: "7.990 €" },
] as const;

export const addons = [
  {
    name: "Backup & Restore",
    price: "ab 390 €/Monat",
    note: "Tägliche Sicherung für Exchange, SharePoint, OneDrive und Teams. 1 Jahr Aufbewahrung.",
  },
  {
    name: "Purview Governance",
    price: "590 €/Monat",
    note: "Sensitivity Labels, DLP-Policies und monatlicher Purview Control-Check.",
  },
  {
    name: "24/7 On-Call (P1)",
    price: "ab 1.990 €/Monat",
    note: "Rufbereitschaft bei Totalausfall oder aktivem Sicherheitsvorfall. Reaktion in 30 Minuten.",
  },
  {
    name: "Copilot Readiness",
    price: "1.490 € einmalig",
    note: "Oversharing-Analyse, Labeling-Konzept und Berechtigungs-Cleanup vor dem Rollout.",
  },
] as const;
