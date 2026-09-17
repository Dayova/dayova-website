export type BlogSeoPriority = {
  title: string;
  description: string;
};

export const blogSeoPriorities: Readonly<
  Partial<Record<string, BlogSeoPriority>>
> = {
  "mehrere-pruefungen-gleichzeitig-was-lerne-ich-zuerst": {
    title: "Mehrere Prüfungen: Was soll ich zuerst lernen?",
    description:
      "Mehrere Prüfungen gleichzeitig lernen: So priorisierst du Fächer nach Termin, Wissenslücke und Bedeutung, ohne ständig zu wechseln.",
  },
  "was-soll-ich-heute-fuer-die-pruefung-lernen": {
    title: "Was soll ich heute für die Prüfung lernen?",
    description:
      "Was soll ich heute lernen? So findest du vor einer Prüfung die wichtigste Wissenslücke und formulierst einen konkreten nächsten Lernschritt.",
  },
  "ein-lernplan-der-in-deinen-alltag-passt": {
    title: "Lernplan erstellen: So passt er in deinen Alltag",
    description:
      "Einen realistischen Lernplan erstellen: So verbindest du Prüfungen, Aufgaben und freie Zeiten zu machbaren Lernschritten für deinen Alltag.",
  },
  "wiederholen-allein-reicht-nicht": {
    title: "Lernstoff richtig wiederholen: Lesen reicht nicht",
    description:
      "Lernstoff richtig wiederholen heißt abrufen, anwenden und Abstände nutzen. Warum wiederholtes Lesen allein kaum verlässliches Wissen schafft.",
  },
  "warum-schlaf-beim-lernen-gewinnt": {
    title: "Schlaf und Lernen: Warum Schlaf Wissen festigt",
    description:
      "Schlaf unterstützt Gedächtnis, Aufmerksamkeit und Abruf. Warum eine zusätzliche Lernstunde nachts die Prüfungsvorbereitung verschlechtern kann.",
  },
  "wie-lange-sollte-ich-fuer-eine-pruefung-lernen": {
    title: "Wie lange für eine Prüfung lernen? Realistisch planen",
    description:
      "Wie lange sollte man für eine Prüfung lernen? So schätzt du den Aufwand nach Lernstand und Stoff und planst Wiederholungen mit Puffer.",
  },
};

export const strategicRelatedArticleSlugs: Readonly<
  Partial<Record<string, readonly string[]>>
> = {
  "mehrere-pruefungen-gleichzeitig-was-lerne-ich-zuerst": [
    "was-soll-ich-heute-fuer-die-pruefung-lernen",
    "wie-lange-sollte-ich-fuer-eine-pruefung-lernen",
    "ein-lernplan-der-in-deinen-alltag-passt",
  ],
  "was-soll-ich-heute-fuer-die-pruefung-lernen": [
    "mehrere-pruefungen-gleichzeitig-was-lerne-ich-zuerst",
    "wie-lange-sollte-ich-fuer-eine-pruefung-lernen",
    "ein-lernplan-der-in-deinen-alltag-passt",
  ],
  "wie-lange-sollte-ich-fuer-eine-pruefung-lernen": [
    "was-soll-ich-heute-fuer-die-pruefung-lernen",
    "mehrere-pruefungen-gleichzeitig-was-lerne-ich-zuerst",
    "uebungszeit-allein-genuegt-nicht",
  ],
  "ein-lernplan-der-in-deinen-alltag-passt": [
    "was-soll-ich-heute-fuer-die-pruefung-lernen",
    "mehrere-pruefungen-gleichzeitig-was-lerne-ich-zuerst",
    "lernen-ohne-plan-erzeugt-stress",
  ],
  "wiederholen-allein-reicht-nicht": [
    "selbsttests-staerken-das-lernen",
    "lernpause-macht-wissen-haltbarer",
    "abrufen-statt-passiv-lesen",
  ],
  "warum-schlaf-beim-lernen-gewinnt": [
    "wenn-stress-das-lernen-blockiert",
    "lernpause-macht-wissen-haltbarer",
    "bewegung-bringt-denken-in-gang",
  ],
  "abstrakten-lernstoff-greifbar-machen": [
    "bilder-und-woerter-gemeinsam-nutzen",
    "feynman-technik-komplexes-erklaeren",
    "vertraut-ist-noch-nicht-verstanden",
  ],
  "bilder-und-woerter-gemeinsam-nutzen": [
    "abstrakten-lernstoff-greifbar-machen",
    "feynman-technik-komplexes-erklaeren",
    "vertraut-ist-noch-nicht-verstanden",
  ],
  "uebungszeit-allein-genuegt-nicht": [
    "die-richtige-schwierigkeit-beim-lernen",
    "pomodoro-25-minuten-passen-nicht-immer",
    "selbsttests-staerken-das-lernen",
  ],
  "die-richtige-schwierigkeit-beim-lernen": [
    "uebungszeit-allein-genuegt-nicht",
    "fehler-als-werkzeuge-nutzen",
    "feedback-das-dich-weiterbringt",
  ],
  "was-hinter-dem-aufschieben-steckt": [
    "warum-lernen-erst-spaet-beginnt",
    "warum-gute-vorsaetze-scheitern",
    "fehlende-lust-als-schutz",
  ],
  "warum-lernen-erst-spaet-beginnt": [
    "was-hinter-dem-aufschieben-steckt",
    "warum-gute-vorsaetze-scheitern",
    "fehlende-lust-als-schutz",
  ],
  "vom-lernstand-zum-naechsten-schritt": [
    "wenn-der-lernstand-den-unterricht-mitplant",
    "wenn-ki-unterricht-vorbereitet-aber-nicht-entscheidet",
    "feedback-das-dich-weiterbringt",
  ],
  "wenn-der-lernstand-den-unterricht-mitplant": [
    "vom-lernstand-zum-naechsten-schritt",
    "wenn-ki-unterricht-vorbereitet-aber-nicht-entscheidet",
    "feedback-das-dich-weiterbringt",
  ],
  "wenn-ki-unterricht-vorbereitet-aber-nicht-entscheidet": [
    "wenn-der-lernstand-den-unterricht-mitplant",
    "vom-lernstand-zum-naechsten-schritt",
    "feedback-das-dich-weiterbringt",
  ],
};
