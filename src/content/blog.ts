export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Lernplanung" | "Prüfungen" | "Für Eltern";
  readingTime: string;
  publishedAt: string;
  intro: string;
  sections: readonly {
    title: string;
    paragraphs: readonly string[];
    bullets?: readonly string[];
  }[];
  takeaway: string;
};

export const blogArticles: readonly BlogArticle[] = [
  {
    slug: "lernplan-der-wirklich-funktioniert",
    title: "Ein Lernplan, der wirklich in deinen Alltag passt",
    excerpt:
      "Warum ein guter Plan nicht möglichst voll sein muss – sondern klar, realistisch und anpassbar.",
    category: "Lernplanung",
    readingTime: "5 Min.",
    publishedAt: "6. August 2026",
    intro:
      "Ein guter Lernplan nimmt dir Entscheidungen ab. Er zeigt dir nicht alles, was irgendwann wichtig wird, sondern genau das, was als Nächstes sinnvoll ist.",
    sections: [
      {
        title: "Warum volle Pläne selten funktionieren",
        paragraphs: [
          "Viele Lernpläne scheitern nicht an fehlender Motivation. Sie scheitern daran, dass sie jeden freien Moment verplanen und keinen Raum für den echten Alltag lassen.",
          "Fällt eine Einheit aus, verschiebt sich sofort der ganze Plan. Aus Orientierung wird zusätzlicher Druck – und irgendwann schaut man lieber gar nicht mehr hinein.",
        ],
      },
      {
        title: "Beginne mit festen Terminen",
        paragraphs: [
          "Trage zuerst Prüfungen, Abgaben und andere feste Termine ein. Danach notierst du realistisch, wann du überhaupt lernen kannst. Erst aus diesen beiden Informationen entsteht ein Plan, der zu deinem Alltag passt.",
        ],
        bullets: [
          "Prüfungstermine und Abgaben sammeln",
          "verfügbare Lernzeiten ehrlich einschätzen",
          "Puffer für Schule, Freizeit und Unerwartetes lassen",
        ],
      },
      {
        title: "Plane den nächsten machbaren Schritt",
        paragraphs: [
          "Eine Aufgabe wie „Mathe lernen“ ist zu groß und zu unklar. Besser ist eine konkrete Einheit: „Drei Aufgaben zu linearen Gleichungen lösen und Fehler prüfen“.",
          "Je klarer der nächste Schritt formuliert ist, desto weniger Energie brauchst du, um anzufangen. Genau dabei unterstützt dich Dayova: aus großen Zielen werden überschaubare Lerneinheiten.",
        ],
      },
      {
        title: "Ein Plan darf sich verändern",
        paragraphs: [
          "Lernen verläuft nicht linear. Manche Themen sitzen schneller, andere brauchen mehr Wiederholung. Ein sinnvoller Plan reagiert darauf, statt dich für eine Abweichung zu bestrafen.",
          "Prüfe deshalb regelmäßig, was bereits sicher ist und wo noch Lücken bestehen. Passe die kommenden Einheiten entsprechend an.",
        ],
      },
    ],
    takeaway:
      "Der beste Lernplan ist nicht der vollste. Es ist der Plan, der dir heute einen klaren und machbaren nächsten Schritt zeigt.",
  },
  {
    slug: "pruefungsvorbereitung-ohne-ueberforderung",
    title: "Prüfungsvorbereitung ohne das Gefühl, zu spät zu sein",
    excerpt:
      "Wie du aus einer großen Prüfung konkrete nächste Schritte machst und wieder Orientierung bekommst.",
    category: "Prüfungen",
    readingTime: "6 Min.",
    publishedAt: "6. August 2026",
    intro:
      "Das Gefühl, zu spät zu sein, entsteht oft durch fehlende Übersicht. Sobald du weißt, was noch vor dir liegt und womit du beginnst, wird aus Stress wieder ein konkreter Weg.",
    sections: [
      {
        title: "Mach die Prüfung sichtbar",
        paragraphs: [
          "Schreibe alle Themen auf, die für die Prüfung relevant sind. Bewerte anschließend nicht, wie viel Angst sie dir machen, sondern wie sicher du sie bereits beherrschst.",
          "So wird aus einem großen, diffusen Prüfungsgefühl eine Liste konkreter Lernbereiche.",
        ],
      },
      {
        title: "Setze Prioritäten statt alles gleichzeitig zu lernen",
        paragraphs: [
          "Beginne mit Themen, die wichtig sind und bei denen dir Grundlagen fehlen. Kleine Lücken in einem Basisthema wirken sich oft auf viele spätere Aufgaben aus.",
        ],
        bullets: [
          "Grundlagen vor Spezialfällen sichern",
          "unsichere Themen häufiger einplanen",
          "bereits sichere Inhalte nur gezielt wiederholen",
        ],
      },
      {
        title: "Lerne in kurzen, überprüfbaren Einheiten",
        paragraphs: [
          "Eine Lerneinheit braucht ein klares Ergebnis. Nach 25 oder 30 Minuten solltest du sagen können, was du bearbeitet und verstanden hast.",
          "Teste dich dabei aktiv: Löse Aufgaben ohne Vorlage, erkläre einen Zusammenhang in eigenen Worten oder beantworte Fragen zum Thema.",
        ],
      },
      {
        title: "Plane Wiederholung bewusst ein",
        paragraphs: [
          "Ein Thema einmal zu verstehen reicht selten. Mit zeitlichem Abstand erneut darauf zuzugreifen, macht Wissen stabiler und zeigt dir früh, was noch nicht sicher sitzt.",
          "Die letzte Phase vor der Prüfung dient dann nicht mehr dazu, alles neu zu lernen, sondern bekannte Inhalte zu festigen.",
        ],
      },
    ],
    takeaway:
      "Du musst nicht alles auf einmal schaffen. Du brauchst einen Überblick, eine sinnvolle Reihenfolge und einen nächsten Schritt, den du heute erledigen kannst.",
  },
  {
    slug: "wie-eltern-beim-lernen-unterstuetzen",
    title: "Wie Eltern beim Lernen unterstützen können",
    excerpt:
      "Weniger Nachfragen, mehr Klarheit: Was Schülerinnen und Schüler in stressigen Lernphasen wirklich brauchen.",
    category: "Für Eltern",
    readingTime: "5 Min.",
    publishedAt: "6. August 2026",
    intro:
      "Unterstützung hilft am meisten, wenn sie Orientierung gibt, ohne die Verantwortung vollständig zu übernehmen. Gerade in stressigen Lernphasen macht die Art der Begleitung einen großen Unterschied.",
    sections: [
      {
        title: "Erst verstehen, dann Lösungen anbieten",
        paragraphs: [
          "Die Frage „Hast du schon gelernt?“ klingt schnell wie Kontrolle. Hilfreicher ist eine offene Frage: „Was ist gerade das Schwierigste an der Vorbereitung?“",
          "So entsteht ein Gespräch über das eigentliche Problem – fehlende Übersicht, ein schwieriges Thema oder zu wenig Zeit.",
        ],
      },
      {
        title: "Gemeinsam Klarheit schaffen",
        paragraphs: [
          "Eltern können helfen, Termine, Aufgaben und verfügbare Zeit einmal gemeinsam zu sortieren. Die konkreten Entscheidungen über den Lernweg sollte das Kind anschließend möglichst selbst treffen.",
        ],
        bullets: [
          "wichtige Termine gemeinsam sichtbar machen",
          "realistische Zeitfenster statt starrer Stundenpläne finden",
          "bei der Priorisierung helfen, ohne jede Aufgabe vorzugeben",
        ],
      },
      {
        title: "Fortschritt konkreter wahrnehmen",
        paragraphs: [
          "Lob wirkt stärker, wenn es sich auf einen beobachtbaren Schritt bezieht. Statt „Gut gemacht“ kann es heißen: „Du hast heute trotz Unsicherheit angefangen und das erste Thema abgeschlossen.“",
          "Das stärkt nicht nur die Motivation, sondern zeigt auch, welche Strategien beim nächsten Mal wieder helfen können.",
        ],
      },
      {
        title: "Pausen gehören zum Lernen",
        paragraphs: [
          "Erholung ist kein Gegenstück zu erfolgreichem Lernen. Schlaf, Bewegung und freie Zeit helfen dabei, Wissen zu verarbeiten und konzentriert weiterzuarbeiten.",
          "Ein guter Lernplan schützt deshalb auch Zeiten, in denen bewusst nicht gelernt wird.",
        ],
      },
    ],
    takeaway:
      "Gute Unterstützung schafft Klarheit und Vertrauen. Sie hilft beim Sortieren – und lässt den Lernenden trotzdem die Verantwortung für den eigenen Weg.",
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
