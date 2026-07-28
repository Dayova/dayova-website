# Dayova Website

Die Launch-Website für Dayova – gebaut mit Next.js App Router, TypeScript und
Tailwind CSS.

## Lokal starten

```bash
npm install
npm run dev
```

Die Website ist anschließend unter
[http://localhost:3000](http://localhost:3000) erreichbar.

## Launch-Logik

Der Launch-Termin und alle zentralen Links liegen in
`src/config/site.ts`. Vor dem dort gesetzten Termin verweist der primäre CTA auf
Instagram. Ab dem Launch-Termin wechselt die Website automatisch zu den
Download-Buttons für App Store und Google Play, sobald beide finalen Store-Links
konfiguriert sind.

Die finalen Store-URLs können ohne Codeänderung als Umgebungsvariablen gesetzt
werden:

```bash
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/...
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/...
```

Solange die finalen Links fehlen, bleibt der Instagram-CTA aktiv. Dadurch führt
die Website nie zu einer ungenauen Store-Suche oder einem nicht veröffentlichten
Produkt.

## Wichtige Befehle

```bash
npm run lint
npm run build
npm run start
```

## Routen

- `/` – Startseite
- `/blog` – Blog-Shell mit vorbereiteten Artikelkarten
- `/parents` – Dayova für Eltern
- `/schools` – Schulangebot
- `/pricing` – Schülerabos und individuelle Schulangebote
- `/impressum` und `/datenschutz` – rechtliche Seiten

Ein zukünftiger geschützter Zugang für Lehrkräfte wird als eigene
Produktfläche ergänzt und nicht mit den öffentlichen Marketingseiten
vermischt.

## Struktur

- `src/app/(marketing)` – öffentliches Marketing-Layout und alle Zielgruppen-Routen
- `src/components/sections` – eigenständige Homepage-Sektionen
- `src/components/blog` und `src/components/pricing` – domänenspezifische Komponenten
- `src/components/ui` – wiederverwendbare UI-Grundbausteine
- `src/content` – zentral gepflegte Navigation, Artikel, Preise und Marketingtexte
- `src/config/site.ts` – Launch-Termin, Social-, Kontakt- und Store-Links
- `src/app/tokens.css` – Farb-, Oberflächen-, Spacing- und Theme-Tokens
- `public/images` – Produkt-Screens und Mockups aus der Dayova App

Weitere Architekturentscheidungen und die vorbereitete Checkout-Grenze sind in
[`docs/architecture.md`](docs/architecture.md) dokumentiert.
