# Dayova on-page SEO audit — 18 September 2026

Scope: all 53 indexable sitemap pages (8 entry pages and 45 articles). Changes are based on each page's actual content and audience, not assumed search-volume figures. Existing English application routes and established article URLs are retained. Website copy remains German; code identifiers remain English.

## Implemented

- Refined 19 page titles and 20 meta descriptions. The blog overview already had an appropriate title. All 53 pages have unique, nonempty titles and descriptions.
- Made the intent of the parents, schools, pricing, downloads, support and blog H1s explicit. Preserved the fixed homepage claim “Einfach loslernen. Der Plan steht schon.” and introduced “Lernplan-App” naturally in its opening paragraph.
- Corrected the about timeline from H1 → H3 to H1 → H2, preserving its existing typography. No skipped heading levels remain in the main content of sitemap pages.
- Added targeted search metadata for 12 articles with abstract titles: Active Recall, Dual Coding, Interleaving, Spaced Repetition, Pomodoro, understanding vs. recognition, learning feedback, lack of motivation, learning past/present, learning intentions, starting earlier, adaptive learning. Original editorial headlines and excerpts remain intact. Four introductory subheadings now name their method explicitly.
- Gave downloads and support their own Open Graph/Twitter title, description and URL instead of inherited homepage previews. Article social metadata uses the same targeted search description. Updated articles expose their actual revision date in the sitemap, JSON-LD and Open Graph.
- Inspected product artwork and corrected image descriptions to what is shown: next task/weekly progress; learning goal/duration; learning status per exam topic. Informative dark-theme alternatives now have alt text too, because CSS hides the light image. Decorative CTA artwork stays empty/hidden. The school illustration already has one descriptive accessible group label.
- Replaced vague in-content links with destination-specific wording (pricing, school pilot information, download stores, company history and blog overview). Secondary blog-card links now include the article title in their accessible name; their adjacent visible title remains a descriptive link.
- Extended the existing rendered-HTML SEO audit to catch heading jumps, missing image alt attributes, empty themed product alternatives, generic accessible link names and page/social metadata mismatches.

## Entry-page focus and search metadata

| Page | Search intent | Final title | Final description |
| --- | --- | --- | --- |
| [/](https://dayova.com/) | Lernplan-App; Prüfungsvorbereitung | Lernplan-App für Schüler: Prüfungen planen \| Dayova | Plane deine Prüfungsvorbereitung mit Dayova: Die Lernplan-App verteilt den Stoff auf deine freien Zeiten und zeigt den nächsten Schritt. 14 Tage testen. |
| [/blog](https://dayova.com/blog) | Lernmethoden, Lernplanung und Motivation | Lernblog: Methoden, Planung und Motivation \| Dayova | Finde Lernmethoden und Tipps zur Prüfungsvorbereitung: Der Dayova Lernblog erklärt Lernplanung, Motivation und Konzentration mit Beispielen für den Schulalltag. |
| [/parents](https://dayova.com/parents) | Eltern; selbstständiges Lernen | Für Eltern: Selbstständig lernen mit einem Lernplan \| Dayova | Wie du dein Kind beim selbstständigen Lernen unterstützt: Dayova plant Prüfungen und Lernzeiten, damit der nächste Schritt klar ist. Für Eltern erklärt. |
| [/schools](https://dayova.com/schools) | Lern-App für Schulen; Pilotprojekt | Lern-App für Schulen: begleitetes Pilotprojekt \| Dayova | Erproben Sie die Lern-App Dayova mit einer Lerngruppe Ihrer Schule. Pilotumfang, Begleitung und Auswertung stimmen wir gemeinsam ab. Jetzt informieren. |
| [/pricing](https://dayova.com/pricing) | Preise; Monats- und Jahresabo | Preise & Abos für Schüler und Schulen \| Dayova | Vergleiche Monats- und Jahresabo für die Dayova Lern-App. Teste alle Funktionen 14 Tage ohne Zahlungsdaten. Schulen erhalten ein individuelles Pilotangebot. |
| [/downloads](https://dayova.com/downloads) | App herunterladen; iOS und Android | Lern-App herunterladen für iOS & Android \| Dayova | Lade die Dayova Lernplan-App für iPhone, iPad oder Android herunter. Hier findest du die offiziellen Store-Links und die Schritte zu deinem ersten Lernplan. |
| [/about](https://dayova.com/about) | Unternehmen und Entstehungsgeschichte | Über uns: Von der Lernbegleitung zur Lern-App \| Dayova | Lerne die Geschichte von Dayova kennen: Wie aus der Lernbegleitung seit 2023 eine App für Lernplanung und Prüfungsvorbereitung entstand. |
| [/support](https://dayova.com/support) | Hilfe zu Konto, Lernplan und Abo | Support: Hilfe zu Konto, Lernplan & Abo \| Dayova | Probleme mit Dayova? Finde Hilfe zu Anmeldung, Lernplan, Uploads und Abonnements sowie den direkten Kontakt zum Support und Hinweise zur Kontolöschung. |

## Verification

- `npm run build`: passed; 80 generated routes.
- `npm run typecheck`: passed.
- `npm run lint` and `git diff --check`: passed.
- `SEO_BASE_URL=http://127.0.0.1:3118 npm run seo:audit`: 53 pages, 0 errors. Two existing advisory notices: downloads and support have no JSON-LD. Structured data is outside this task and is not required for indexing.
- `SEO_BASE_URL=http://127.0.0.1:3118 npm run seo:technical`: 53 sitemap pages, 57 internal targets, 32 legacy redirect cases, 0 failures.
- `SMOKE_BASE_URL=http://127.0.0.1:3118 SMOKE_INCLUDE_DASHBOARD=false npm run smoke`: 72 pages and 14 images passed.
- Chrome: all eight entry pages at 390px and 1440px; article template at 390px. No horizontal document overflow after shortening the blog overview link. Visually inspected mobile parents/article and desktop parents/about/blog. Confirmed informative parent-page images in both themes and restored the browser viewport.

## All audited search titles

| URL | Title |
| --- | --- |
| [/](https://dayova.com/) | Lernplan-App für Schüler: Prüfungen planen \| Dayova |
| [/blog](https://dayova.com/blog) | Lernblog: Methoden, Planung und Motivation \| Dayova |
| [/parents](https://dayova.com/parents) | Für Eltern: Selbstständig lernen mit einem Lernplan \| Dayova |
| [/schools](https://dayova.com/schools) | Lern-App für Schulen: begleitetes Pilotprojekt \| Dayova |
| [/pricing](https://dayova.com/pricing) | Preise & Abos für Schüler und Schulen \| Dayova |
| [/downloads](https://dayova.com/downloads) | Lern-App herunterladen für iOS & Android \| Dayova |
| [/about](https://dayova.com/about) | Über uns: Von der Lernbegleitung zur Lern-App \| Dayova |
| [/support](https://dayova.com/support) | Support: Hilfe zu Konto, Lernplan & Abo \| Dayova |
| [/blog/wie-lange-sollte-ich-fuer-eine-pruefung-lernen](https://dayova.com/blog/wie-lange-sollte-ich-fuer-eine-pruefung-lernen) | Wie lange sollte ich für eine Prüfung lernen? \| Dayova |
| [/blog/mehrere-pruefungen-gleichzeitig-was-lerne-ich-zuerst](https://dayova.com/blog/mehrere-pruefungen-gleichzeitig-was-lerne-ich-zuerst) | Mehrere Prüfungen gleichzeitig: Was lerne ich zuerst? \| Dayova |
| [/blog/was-soll-ich-heute-fuer-die-pruefung-lernen](https://dayova.com/blog/was-soll-ich-heute-fuer-die-pruefung-lernen) | Was soll ich heute für die Prüfung lernen? \| Dayova |
| [/blog/wenn-ki-unterricht-vorbereitet-aber-nicht-entscheidet](https://dayova.com/blog/wenn-ki-unterricht-vorbereitet-aber-nicht-entscheidet) | Wenn KI Unterricht vorbereitet, aber nicht entscheidet \| Dayova |
| [/blog/wenn-der-lernstand-den-unterricht-mitplant](https://dayova.com/blog/wenn-der-lernstand-den-unterricht-mitplant) | Wenn der Lernstand den Unterricht mitplant \| Dayova |
| [/blog/die-richtige-schwierigkeit-beim-lernen](https://dayova.com/blog/die-richtige-schwierigkeit-beim-lernen) | Die richtige Schwierigkeit beim Lernen \| Dayova |
| [/blog/vom-lernstand-zum-naechsten-schritt](https://dayova.com/blog/vom-lernstand-zum-naechsten-schritt) | Adaptives Lernen: Vom Lernstand zur nächsten Aufgabe \| Dayova |
| [/blog/eine-lern-app-sollte-dir-arbeit-abnehmen](https://dayova.com/blog/eine-lern-app-sollte-dir-arbeit-abnehmen) | Eine Lern-App sollte dir Arbeit abnehmen \| Dayova |
| [/blog/feedback-das-dich-weiterbringt](https://dayova.com/blog/feedback-das-dich-weiterbringt) | Feedback beim Lernen: Vom Fehler zur nächsten Übung \| Dayova |
| [/blog/ein-lernplan-der-in-deinen-alltag-passt](https://dayova.com/blog/ein-lernplan-der-in-deinen-alltag-passt) | Ein Lernplan, der in deinen Alltag passt \| Dayova |
| [/blog/vertraut-ist-noch-nicht-verstanden](https://dayova.com/blog/vertraut-ist-noch-nicht-verstanden) | Lernstoff verstehen statt nur wiedererkennen \| Dayova |
| [/blog/warum-fortschritt-unsichtbar-bleibt](https://dayova.com/blog/warum-fortschritt-unsichtbar-bleibt) | Warum Fortschritt oft unsichtbar bleibt \| Dayova |
| [/blog/lernen-ohne-plan-erzeugt-stress](https://dayova.com/blog/lernen-ohne-plan-erzeugt-stress) | Lernen ohne Plan erzeugt Stress \| Dayova |
| [/blog/wiederholen-allein-reicht-nicht](https://dayova.com/blog/wiederholen-allein-reicht-nicht) | Warum Wiederholen allein nicht reicht \| Dayova |
| [/blog/ich-kann-das-nicht](https://dayova.com/blog/ich-kann-das-nicht) | Wenn „Ich kann das nicht“ bremst \| Dayova |
| [/blog/was-hinter-dem-aufschieben-steckt](https://dayova.com/blog/was-hinter-dem-aufschieben-steckt) | Was hinter dem Aufschieben steckt \| Dayova |
| [/blog/wenn-stress-das-lernen-blockiert](https://dayova.com/blog/wenn-stress-das-lernen-blockiert) | Wenn Stress das Lernen blockiert \| Dayova |
| [/blog/wie-dein-lernplatz-mitentscheidet](https://dayova.com/blog/wie-dein-lernplatz-mitentscheidet) | Wie dein Lernplatz mitentscheidet \| Dayova |
| [/blog/raus-aus-der-vergleichsfalle](https://dayova.com/blog/raus-aus-der-vergleichsfalle) | Raus aus der Vergleichsfalle \| Dayova |
| [/blog/bewegung-bringt-denken-in-gang](https://dayova.com/blog/bewegung-bringt-denken-in-gang) | Bewegung bringt Denken in Gang \| Dayova |
| [/blog/warum-schlaf-beim-lernen-gewinnt](https://dayova.com/blog/warum-schlaf-beim-lernen-gewinnt) | Warum Schlaf beim Lernen gewinnt \| Dayova |
| [/blog/gewohnheiten-tragen-weiter-als-motivation](https://dayova.com/blog/gewohnheiten-tragen-weiter-als-motivation) | Gewohnheiten tragen weiter als Motivation \| Dayova |
| [/blog/wie-dein-selbstbild-lernen-praegt](https://dayova.com/blog/wie-dein-selbstbild-lernen-praegt) | Wie dein Selbstbild Lernen prägt \| Dayova |
| [/blog/fehler-als-werkzeuge-nutzen](https://dayova.com/blog/fehler-als-werkzeuge-nutzen) | Fehler als Werkzeuge nutzen \| Dayova |
| [/blog/was-noten-zeigen-und-verschweigen](https://dayova.com/blog/was-noten-zeigen-und-verschweigen) | Was Noten zeigen und verschweigen \| Dayova |
| [/blog/kleine-erfolge-halten-dich-im-lernen](https://dayova.com/blog/kleine-erfolge-halten-dich-im-lernen) | Kleine Erfolge tragen dein Lernen \| Dayova |
| [/blog/multitasking-kostet-fokus](https://dayova.com/blog/multitasking-kostet-fokus) | Warum Multitasking deinen Fokus kostet \| Dayova |
| [/blog/eltern-begleiten-ohne-druck](https://dayova.com/blog/eltern-begleiten-ohne-druck) | Eltern begleiten ohne zusätzlichen Druck \| Dayova |
| [/blog/fehlende-lust-als-schutz](https://dayova.com/blog/fehlende-lust-als-schutz) | Keine Lust zu lernen? Ursachen und erste Schritte \| Dayova |
| [/blog/abstrakten-lernstoff-greifbar-machen](https://dayova.com/blog/abstrakten-lernstoff-greifbar-machen) | Abstrakten Lernstoff greifbar machen \| Dayova |
| [/blog/bilder-und-woerter-gemeinsam-nutzen](https://dayova.com/blog/bilder-und-woerter-gemeinsam-nutzen) | Dual Coding: Mit Bildern und Wörtern lernen \| Dayova |
| [/blog/mit-lernplanung-pruefungsdruck-senken](https://dayova.com/blog/mit-lernplanung-pruefungsdruck-senken) | Mit Lernplanung Prüfungsdruck senken \| Dayova |
| [/blog/abrufen-statt-passiv-lesen](https://dayova.com/blog/abrufen-statt-passiv-lesen) | Active Recall: Lernen durch aktives Abrufen \| Dayova |
| [/blog/feynman-technik-komplexes-erklaeren](https://dayova.com/blog/feynman-technik-komplexes-erklaeren) | Komplexes mit der Feynman-Technik erklären \| Dayova |
| [/blog/pomodoro-25-minuten-passen-nicht-immer](https://dayova.com/blog/pomodoro-25-minuten-passen-nicht-immer) | Pomodoro beim Lernen: Wann 25 Minuten passen \| Dayova |
| [/blog/was-fruehere-generationen-anders-machten](https://dayova.com/blog/was-fruehere-generationen-anders-machten) | Lernen früher und heute: Was gegen Ablenkung hilft \| Dayova |
| [/blog/wenn-selbstvertrauen-wissen-vortaeuscht](https://dayova.com/blog/wenn-selbstvertrauen-wissen-vortaeuscht) | Wenn Selbstvertrauen Wissen vortäuscht \| Dayova |
| [/blog/gemischtes-ueben-statt-blocklernen](https://dayova.com/blog/gemischtes-ueben-statt-blocklernen) | Interleaving: Gemischtes Üben sinnvoll einsetzen \| Dayova |
| [/blog/selbsttests-staerken-das-lernen](https://dayova.com/blog/selbsttests-staerken-das-lernen) | Warum Selbsttests das Lernen stärken \| Dayova |
| [/blog/lernpause-macht-wissen-haltbarer](https://dayova.com/blog/lernpause-macht-wissen-haltbarer) | Spaced Repetition: Mit Abständen wiederholen \| Dayova |
| [/blog/gute-noten-und-verstaendnis](https://dayova.com/blog/gute-noten-und-verstaendnis) | Wenn gute Noten Verständnis vortäuschen \| Dayova |
| [/blog/uebungszeit-allein-genuegt-nicht](https://dayova.com/blog/uebungszeit-allein-genuegt-nicht) | Warum Übungszeit allein nicht genügt \| Dayova |
| [/blog/warum-gute-vorsaetze-scheitern](https://dayova.com/blog/warum-gute-vorsaetze-scheitern) | Lernvorsätze umsetzen: Mit Wenn-dann-Plänen starten \| Dayova |
| [/blog/warum-lernen-erst-spaet-beginnt](https://dayova.com/blog/warum-lernen-erst-spaet-beginnt) | Früher mit dem Lernen anfangen: Den Einstieg planen \| Dayova |
| [/blog/wenn-lernen-nicht-zur-note-passt](https://dayova.com/blog/wenn-lernen-nicht-zur-note-passt) | Wenn Lernen nicht zur Note passt \| Dayova |

## Interpretation

Passing these checks confirms the implementation and crawlable HTML, not a ranking or click-through-rate gain. Google can choose different title links and snippets and needs to recrawl changes. No ranking, traffic or indexing result is claimed by this audit.

Reference: [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
