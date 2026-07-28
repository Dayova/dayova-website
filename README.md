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

## Struktur

- `src/app` – App-Router-Seite, Design-Tokens, Typografie und globale Styles
- `src/components/sections` – eigenständige Marketing-Sektionen
- `src/components/ui` – wiederverwendbare UI-Grundbausteine
- `src/content` – zentral gepflegte Seiteninhalte
- `src/config/site.ts` – Launch-Termin, Social-, Kontakt- und Store-Links
- `public/images` – Produkt-Screens und Mockups aus der Dayova App
