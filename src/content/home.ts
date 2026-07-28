export const companionFeatures = [
  {
    title: "Trag ein, was ansteht",
    text: "Trage deine Aufgaben und Prüfungen ein. Über deine Lernzeiten weiß Dayova, wann du lernen kannst und was bis dahin wichtig wird.",
    image: "/images/dayova-home-phone.png",
    alt: "Der persönliche Tagesplan in Dayova",
    width: 872,
    height: 1080,
  },
  {
    title: "Bekomm deinen Lernplan",
    text: "Dayova erstellt daraus einen Plan, der dir zeigt, was du lernen musst und wie viel bis zur Prüfung sinnvoll ist.",
    image: "/images/dayova-hand-home.png",
    alt: "Eine Hand hält Dayova mit einem persönlichen Lernplan",
    width: 1206,
    height: 2622,
  },
  {
    title: "Lerne und sieh, was noch fehlt",
    text: "Während du lernst, passt sich dein Plan an deinen Lernstand an. So siehst du Stärken, Schwächen und was du noch üben solltest.",
    image: "/images/dayova-feedback-phone.png",
    alt: "Eine Lernstandsauswertung in Dayova",
    width: 512,
    height: 512,
  },
] as const;

export const comparisonRows = [
  {
    need: "Klarer nächster Schritt",
    generic: "Gibt Hilfe auf Anfrage",
    dayova: "Erkennt Lücken in deinen Antworten",
  },
  {
    need: "Individuelle Planung",
    generic: "Unterstützt beim Lernen",
    dayova: "Plant mit Aufgaben und Terminen",
  },
  {
    need: "Rückmeldung zum Lernstand",
    generic: "Erstellt allgemeine Lernpläne",
    dayova: "Passt sich deinen Stärken und Schwächen an",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    icon: "/images/step-download.svg",
    title: "Registrieren",
    text: "Trag dich in die Warteliste ein und sichere dir deinen Platz zum Start von Dayova.",
  },
  {
    number: "02",
    icon: "/images/step-plan.svg",
    title: "Lernplan",
    text: "Gib an, was ansteht und wann du Zeit zum Lernen hast. Dayova erstellt deinen Plan.",
  },
  {
    number: "03",
    icon: "/images/step-learn.svg",
    title: "Mit Plan lernen",
    text: "Lerne Schritt für Schritt mit dem, was für dich gerade wichtig ist – direkt in Dayova.",
  },
] as const;

export const faqs = [
  {
    question: "Wie kann ich mich anmelden?",
    answer:
      "Trag dich einfach auf die Warteliste ein und sichere dir deinen Platz zum Start von Dayova.",
  },
  {
    question: "Was kostet Dayova?",
    answer:
      "Die Preise werden zum App-Start transparent veröffentlicht. Mitglieder der Warteliste erfahren alle Details rechtzeitig.",
  },
  {
    question: "Wie erstelle ich meinen Lernplan?",
    answer:
      "Du trägst deine Prüfung, Aufgaben und verfügbaren Lernzeiten ein. Dayova strukturiert daraus passende Lernblöcke und zeigt dir, was wann sinnvoll ist.",
  },
] as const;
