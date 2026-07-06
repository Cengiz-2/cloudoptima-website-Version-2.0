# CloudOptima Website

Neue Landingpage für [cloudoptima.de](https://cloudoptima.de): Managed Services für Microsoft 365 & Azure mit NIS2-Fokus. Kompletter Neubau, unabhängig von der alten Website.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS mit eigenem Token-System
- Framer Motion für alle Animationen
- Radix UI (Dialog)

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Produktions-Build inkl. Typecheck & Lint
```

## Design-System

Alle Werte liegen als Tokens in `tailwind.config.ts` und `src/app/globals.css`:

- **Farben:** `void` (Hintergrund), `surface`/`raised` (Flächen), `ink`/`ink-soft`/`ink-mute` (Text), `azure` (Primär), `amber` (Signal/NIS2), `mint` (Erfolg), `danger`. Keine rohen Hex-Werte in Komponenten.
- **Typografie:** Space Grotesk (Headlines), Inter (Fließtext), JetBrains Mono (Labels, Zahlen). Skala Major Third (1.25), Basis 16px.
- **Spacing:** 8px-Raster, Sektionsrhythmus über die `.section`-Utility.
- **Motion:** Gemeinsame Easing-Kurve und Varianten in `src/lib/motion.ts`, `prefers-reduced-motion` wird respektiert.

## Komponenten (nach 21st.dev-Vorlagen, an Tokens angepasst)

| Komponente | Datei | Einsatz |
|---|---|---|
| Particle Button | `ui/particle-button.tsx` | Primäre CTAs |
| Flip Button | `ui/flip-button.tsx` | Sekundäre CTAs, Navbar |
| Spotlight Card | `ui/spotlight-card.tsx` | Feature-Cards |
| Sparkles + Progressive Blur | `ui/sparkles.tsx` | Hero |
| Aether Flow Hero | `sections/hero.tsx` | Hero-Hintergrund |
| Container Scroll | `ui/container-scroll.tsx` | Reporting-Dashboard |
| Image Comparison | `ui/comparison-slider.tsx` | Vorher/Nachher |
| Apple Dock | `ui/dock.tsx` | Schnellnavigation (Desktop) |
| Terms Dialog | `ui/terms-dialog.tsx` | Rechtstexte im Footer |
| Animated Footer | `sections/footer.tsx` | Footer-Schriftzug |
| Ghost 404 | `app/not-found.tsx` | Fehlerseite |
| Feature Section | `sections/features.tsx` | Leistungen |

## Inhalte

Texte und Preise kommen aus dem Angebots-Stand vom 2026-07-05 (`src/lib/site.ts`). Vor dem Launch zu erledigen:

- [ ] Impressum und Datenschutz von cloudoptima.de übernehmen (aktuell Platzhalter im Footer-Dialog)
- [ ] Nach dem 31.07.2026 die NIS2-Nachfrist-Texte prüfen (Countdown hat einen Fallback)
- [ ] Control-Check-Fragebogen als eigene Route bauen (CTA verlinkt aktuell auf E-Mail)
