import type { BlogArticle } from "./types";

type ArticleSection = BlogArticle["sections"][number];

export const articlePracticeSections: Readonly<
  Record<string, readonly ArticleSection[]>
> = {
  "die-richtige-schwierigkeit-beim-lernen": [
    {
      title: "Der Drei-Versuche-Check",
      paragraphs: [
        "Bearbeite drei ähnliche Aufgaben und notiere nach jedem Versuch, ob du ohne Hilfe beginnen konntest, an welcher Stelle du gestockt hast und welcher Hinweis geholfen hätte. Sind alle drei Lösungen sofort klar, erhöhe die Anforderung leicht. Fehlt bei jedem Versuch schon der Einstieg, gehe einen Schritt zurück und kläre die gemeinsame Grundlage.",
        "Liegt mindestens ein eigener Lösungsansatz vor und wird dein Vorgehen durch die Auswertung genauer, befindest du dich wahrscheinlich in einer produktiven Lernzone. Entscheidend ist nicht eine bestimmte Fehlerquote, sondern ob deine Versuche verwertbare Rückmeldung erzeugen und zunehmend selbstständiger werden.",
      ],
      bullets: [
        "Zu leicht: Bedingungen verändern oder Hilfen entfernen.",
        "Passend: einen ähnlichen Versuch mit etwas Abstand wiederholen.",
        "Zu schwer: fehlende Grundlage bestimmen und separat üben.",
        "Danach erneut prüfen, ob der Einstieg nun ohne Hilfe gelingt.",
      ],
    },
  ],
  "vom-lernstand-zum-naechsten-schritt": [
    {
      title: "Was Schüler, Eltern und Lehrkräfte jeweils sehen sollten",
      paragraphs: [
        "Schüler brauchen eine nächste Aufgabe, die weder unter- noch überfordert. Eltern benötigen keine lückenlose Kontrolle, sondern ein verlässliches Signal, dass Termine, Belastung und Fortschritt berücksichtigt werden. Lehrkräfte profitieren von einer Beschreibung konkreter Fehlermuster. Werden diese drei Perspektiven getrennt dargestellt, kann dieselbe Lernstandsanalyse Orientierung geben, ohne Lernende auf eine Punktzahl oder ein Defizit zu reduzieren.",
        "In Dayova bleibt die Auswertung deshalb mit dem Plan verbunden. Eine erkannte Lücke verändert kommende Einheiten, ein sicherer Inhalt erhält größere Abstände und neue Termine verschieben Prioritäten. Der Lernweg reagiert auf Entwicklung, statt einen einmal erstellten Plan nur abzuarbeiten.",
      ],
    },
  ],
  "eine-lern-app-sollte-dir-arbeit-abnehmen": [
    {
      title: "Der Werkzeug-Check für deinen Lernalltag",
      paragraphs: [
        "Notiere eine Woche lang, an welchen Stellen du Informationen doppelt überträgst, Aufgaben suchst oder dieselbe Entscheidung wiederholt triffst. Markiere außerdem, welche Ansicht dir tatsächlich hilft, den nächsten Schritt zu erkennen. So wird sichtbar, ob ein Werkzeug Orientierung schafft oder lediglich eine weitere Ablage ist.",
        "Eine hilfreiche App sollte mindestens einen dieser Wege verkürzen: Termine sammeln, Aufgaben priorisieren, Lernzeit passend verteilen oder Rückmeldung in eine Folgeaufgabe übersetzen. Funktionen ohne klaren Beitrag dürfen im Hintergrund bleiben.",
      ],
      bullets: [
        "Welche Information trage ich mehrfach ein?",
        "Welche Entscheidung kostet mich vor jeder Einheit Zeit?",
        "Wo sehe ich nur Aktivität, aber keinen Lernfortschritt?",
        "Was müsste eine App verbinden, damit ein Schritt entfällt?",
      ],
    },
  ],
  "feedback-das-dich-wirklich-weiterbringt": [
    {
      title: "Die Vier-Schritte-Feedbackschleife",
      paragraphs: [
        "Wähle eine falsche oder unsichere Antwort und beschreibe zuerst deinen ursprünglichen Gedankengang. Vergleiche ihn anschließend mit dem Ziel der Aufgabe. Benenne genau eine Stelle, die du verändern willst, und prüfe diese Veränderung an einer ähnlichen Aufgabe. So bleibt Feedback klein genug, um sofort angewendet zu werden.",
      ],
      bullets: [
        "Versuch rekonstruieren, ohne ihn nachträglich schöner zu machen.",
        "Abweichung zwischen Ziel und Denkweg konkret benennen.",
        "Eine veränderbare Handlung für den nächsten Versuch auswählen.",
        "Mit einer leicht veränderten Aufgabe erneut selbst antworten.",
      ],
    },
  ],
  "ein-lernplan-der-in-deinen-alltag-passt": [
    {
      title: "Die 15-Minuten-Wochenplanung",
      paragraphs: [
        "Trage zuerst Prüfungen, Abgaben und feste Termine ein. Markiere danach drei bis fünf realistische Lernfenster und ordne ihnen jeweils nur einen klaren ersten Schritt zu. Beginne mit Grundlagen, von denen spätere Aufgaben abhängen, und lasse mindestens ein Zeitfenster als Puffer frei.",
        "Am Ende jedes Lerntages genügen zwei Fragen: Was ist jetzt sicherer als vorher und was muss im Plan angepasst werden? Dadurch bleibt die Woche beweglich, ohne dass jeden Abend alles neu organisiert werden muss.",
      ],
      bullets: [
        "Feste Termine und verfügbare Zeiten sichtbar machen.",
        "Aufgaben nach Bedeutung statt nach Bequemlichkeit ordnen.",
        "Jede Einheit mit einem überprüfbaren Ergebnis formulieren.",
        "Puffer bewusst frei lassen und nicht vorab füllen.",
      ],
    },
  ],
  "vertraut-ist-noch-nicht-verstanden": [
    {
      title: "Ein Transfer-Test für jedes Schulfach",
      paragraphs: [
        "In Mathematik kann eine bekannte Aufgabe neue Zahlen oder eine andere Fragestellung erhalten. In Geschichte wird ein Begriff auf eine zweite Epoche angewendet, in Biologie ein Ablauf an einer veränderten Bedingung erklärt. In Sprachen lässt sich eine Regel in einem eigenen Satz verwenden. Solche kleinen Veränderungen prüfen, ob das Prinzip verfügbar ist oder nur die ursprüngliche Vorlage wiedererkannt wird.",
        "Wer dabei stockt, kehrt nicht zum vollständigen Kapitel zurück. Es reicht, die fehlende Verbindung nachzuschlagen, die eigene Erklärung zu verbessern und den Transfer anschließend mit einer weiteren Aufgabe erneut zu versuchen.",
      ],
    },
  ],
  "warum-fortschritt-unsichtbar-bleibt": [
    {
      title: "Warum Rückschritte zum Lernverlauf gehören",
      paragraphs: [
        "Nach einer Pause kann der Abruf schlechter ausfallen als am Vortag. Das bedeutet nicht, dass die vorherige Arbeit wertlos war. Der zeitliche Abstand zeigt vielmehr, welche Verbindung noch nicht stabil ist. Auch der Wechsel zu schwierigeren Aufgaben lässt die Trefferquote zunächst sinken. Fortschritt sollte deshalb über mehrere Messpunkte und vergleichbare Bedingungen betrachtet werden.",
        "Dayova kann solche Verläufe bündeln: nicht nur erledigte Einheiten, sondern Veränderungen in Antworten, benötigten Hilfen und wiederkehrenden Lücken. So bleibt Entwicklung sichtbar, auch wenn einzelne Tage schwanken.",
      ],
    },
  ],
  "lernen-ohne-plan-erzeugt-stress": [
    {
      title: "Wenn der Plan nicht aufgeht",
      paragraphs: [
        "Ein Plan ist eine Annahme darüber, wie lange Aufgaben dauern und welche Reihenfolge sinnvoll ist. Neue Informationen dürfen ihn verändern. Dauert ein Grundlagenthema länger, wird nicht alles nach hinten gequetscht. Stattdessen werden Prioritäten neu bewertet, weniger wichtige Aufgaben verschoben und der nächste Tag angepasst.",
        "Diese Haltung verhindert, dass Planung selbst zum Druckmittel wird. Dayova kann Termine, Lernzeiten und Rückmeldungen zusammenführen und daraus eine aktualisierte Reihenfolge bilden. Der Plan dient dem Lernen – nicht umgekehrt.",
      ],
    },
  ],
  "wiederholen-allein-reicht-nicht": [
    {
      title: "Rückmeldung entscheidet über den nächsten Durchgang",
      paragraphs: [
        "Nach einem Abruf sollte die Lösung nicht nur gelesen, sondern mit dem eigenen Denkweg verglichen werden. Welche Information fehlte? Welche falsche Annahme führte zur Antwort? Wurde die richtige Regel zu spät erkannt? Diese Diagnose bestimmt, ob als Nächstes eine Erklärung, ein einfacheres Beispiel oder eine weitere Anwendung gebraucht wird.",
        "Ohne diese Entscheidung wird Wiederholen schnell mechanisch. Mit ihr entsteht eine Folge gezielter Versuche, deren Abstand und Schwierigkeit sich am tatsächlichen Stand orientieren.",
      ],
    },
  ],
  "ich-kann-das-nicht": [
    {
      title: "Wann zusätzliche Unterstützung sinnvoll ist",
      paragraphs: [
        "Wenn negative Selbsturteile häufig auftreten, zu starkem Rückzug führen oder Schule den gesamten Familienalltag belastet, reicht eine einzelne Lernstrategie möglicherweise nicht. Ein Gespräch mit Lehrkraft, Schulsozialarbeit, Beratung oder psychologischer Fachperson kann helfen, fachliche Hürden, Prüfungsangst und Selbstwertfragen auseinanderzuhalten.",
        "Frühe Unterstützung ist kein Beleg für mangelnde Fähigkeit. Sie verhindert, dass wiederholte Misserfolge zu einem immer festeren Urteil über die eigene Person werden.",
      ],
    },
  ],
  "was-hinter-dem-aufschieben-steckt": [
    {
      title: "Belohnung nach dem Start statt vor dem Start",
      paragraphs: [
        "Ablenkung vor der Aufgabe belohnt das Vermeiden. Eine bewusst geplante angenehme Handlung nach einem kleinen Arbeitsblock kann dagegen den Einstieg stützen. Wichtig ist, dass Umfang und Ende vorher feststehen. Sonst wird aus der Pause ein neuer Aufschub.",
        "Eltern können diesen Ablauf unterstützen, ohne mit Strafen zu arbeiten: gemeinsam die erste Handlung festlegen, während des Versuchs nicht kontrollieren und danach kurz auswerten, ob die gewählte Einstiegshürde gepasst hat.",
      ],
    },
  ],
  "wenn-stress-das-lernen-blockiert": [
    {
      title: "Prüfungssituationen schrittweise üben",
      paragraphs: [
        "Wer ausschließlich in entspannter Umgebung mit offenen Unterlagen lernt, begegnet Zeitdruck und geschlossenem Material erst in der Prüfung. Sinnvoller ist eine behutsame Annäherung: zunächst eine Aufgabe ohne Hilfe, später ein kurzer Block mit Zeitrahmen und schließlich ein vollständiger Probedurchlauf. Nach jedem Schritt folgt eine Auswertung und ausreichend Erholung.",
        "Diese Übung soll nicht Angst provozieren, sondern Vorhersagbarkeit schaffen. Bei starker Prüfungsangst gehört sie in eine fachlich begleitete Unterstützung.",
      ],
    },
  ],
  "wie-dein-lernplatz-mitentscheidet": [
    {
      title: "Gemeinsame Räume brauchen Absprachen",
      paragraphs: [
        "Am Küchentisch oder in einem geteilten Zimmer lassen sich Störungen nicht vollständig entfernen. Dann helfen sichtbare Signale und feste Zeitfenster: Kopfhörer bedeuten zwanzig Minuten Ruhe, Gespräche werden auf die Pause verschoben und benötigtes Material liegt in einer transportablen Tasche bereit.",
        "Eltern können den Rahmen mitgestalten, ohne einen perfekten Lernort vorauszusetzen. Entscheidend ist eine wiederholbare Vereinbarung, die konzentrierte Phasen wahrscheinlicher macht und anschließend wieder gemeinsame Nutzung erlaubt.",
      ],
    },
  ],
  "raus-aus-der-vergleichsfalle": [
    {
      title: "Soziale Medien erweitern den Vergleich",
      paragraphs: [
        "Online werden meist Ergebnisse gezeigt: eine gute Note, ein voller Lernplan oder besonders ordentliche Notizen. Unsichtbar bleiben Fehlversuche, Unterstützung und Auswahl. Dadurch entsteht ein verzerrter Maßstab, der den eigenen Alltag mit den sorgfältig ausgewählten Momenten anderer vergleicht.",
        "Eine hilfreiche Grenze kann sein, Lerninhalte online nur mit einer konkreten Absicht zu öffnen und danach wieder zur eigenen Aufgabe zurückzukehren. Inspiration ist nützlich, solange sie nicht den persönlichen Lernstand ersetzt.",
      ],
    },
  ],
  "bewegung-bringt-denken-in-gang": [
    {
      title: "Lernen kann selbst bewegter werden",
      paragraphs: [
        "Nicht jede Wiederholung muss im Sitzen stattfinden. Vokabeln lassen sich beim Gehen abrufen, ein Vortrag kann im Stehen erklärt und eine mündliche Zusammenfassung während eines Spaziergangs aufgenommen werden. Für Schreib- und Rechenaufgaben bleibt der Tisch sinnvoll; Abruf und Erklärung können dagegen den Ort wechseln.",
        "Der Wechsel sollte zum Lernziel passen. Bewegung hilft nicht, wenn sie die fachliche Handlung verhindert. Sie ist eine Möglichkeit, Aufmerksamkeit und Tagesrhythmus zu unterstützen, kein Pflichtprogramm.",
      ],
    },
  ],
  "warum-schlaf-beim-lernen-gewinnt": [
    {
      title: "Schlaf lässt sich nicht am Wochenende vollständig nachholen",
      paragraphs: [
        "Längeres Schlafen nach mehreren kurzen Nächten kann Müdigkeit reduzieren, stellt aber nicht automatisch jeden beeinträchtigten Lernmoment wieder her. Bereits während der müden Tage wurden Informationen unaufmerksamer aufgenommen und Entscheidungen impulsiver getroffen. Prävention ist deshalb hilfreicher als regelmäßiges Nachholen.",
        "Ein Lernplan sollte Schlaf als feste Grenze behandeln. Wenn die verfügbare Zeit nicht reicht, müssen Umfang und Prioritäten verändert werden – nicht die Nacht immer weiter verkürzt.",
      ],
    },
  ],
  "gewohnheiten-tragen-weiter-als-motivation": [
    {
      title: "Eine Gewohnheit braucht sichtbaren Abschluss",
      paragraphs: [
        "Ein kurzer Abschluss erleichtert die Wiederholung am nächsten Tag. Markiere die bearbeitete Einheit, räume das Material für die nächste Aufgabe zurecht und notiere einen Satz zum Einstieg. Dadurch endet Lernen nicht in einem offenen Zustand, der beim nächsten Mal erneut sortiert werden muss.",
        "Dayova kann diesen Übergang unterstützen, indem erledigte Schritte und die nächste geplante Einheit nebeneinanderstehen. Der Fortschritt wird sichtbar, während der neue Start bereits vorbereitet ist.",
      ],
    },
  ],
  "wie-dein-selbstbild-lernen-praegt": [
    {
      title: "Erwartungen von Erwachsenen wirken mit",
      paragraphs: [
        "Kinder und Jugendliche beobachten, wie Erwachsene über Fähigkeit sprechen. Aussagen wie „In unserer Familie konnte niemand Mathe“ oder dauerhafte Etiketten können den Eindruck verstärken, Entwicklung sei begrenzt. Auch gut gemeintes Lob für Begabung macht Fehler manchmal bedrohlicher, weil sie nicht zum Bild passen.",
        "Hilfreicher ist präzise Rückmeldung zu Strategie, Verständnis und Veränderung. Sie würdigt Leistung, ohne die Person auf ein festes Talent festzulegen.",
      ],
    },
  ],
  "fehler-als-werkzeuge-nutzen": [
    {
      title: "Ein persönliches Fehlermuster-Archiv",
      paragraphs: [
        "Sammle nicht jede falsche Aufgabe, sondern wiederkehrende Muster auf einer übersichtlichen Seite. Zu jedem Muster gehören ein typisches Beispiel, die Ursache, ein hilfreicher Prüfschritt und eine neue Aufgabe. Vor der nächsten Prüfung wird nicht die ganze alte Arbeit gelesen, sondern genau diese Sammlung aktiv abgerufen.",
        "Mit der Zeit verschwinden einige Muster und neue kommen hinzu. Das Archiv beschreibt damit Entwicklung und verhindert, dass dieselbe Korrektur immer wieder bei null beginnt.",
      ],
    },
  ],
  "was-noten-zeigen-und-verschweigen": [
    {
      title: "Noten sinnvoll in Gespräche einordnen",
      paragraphs: [
        "Eine Note darf Freude oder Enttäuschung auslösen. Danach sollte das Gespräch jedoch zu den Informationen zurückkehren, die eine nächste Handlung ermöglichen. Eltern können fragen, was überraschend war und welche Vorbereitung geholfen hat. Lehrkräfte können Anforderungen und Fehlerschwerpunkte benennen.",
        "So bleibt die Note ein wichtiges Ergebnis, wird aber nicht zur vollständigen Beschreibung von Fähigkeit, Einsatz oder Zukunft. Genau diese Trennung schützt Motivation und ermöglicht zugleich anspruchsvolle Rückmeldung.",
      ],
    },
  ],
  "kleine-erfolge-halten-dich-im-lernen": [
    {
      title: "Mini-Erfolge dürfen anspruchsvoll bleiben",
      paragraphs: [
        "Kleine Schritte bedeuten nicht, Aufgaben künstlich leicht zu machen. Eine gute Teilaufgabe liegt knapp über dem sicheren Stand und enthält eine erkennbare Hürde. Der Erfolg entsteht durch deren Bearbeitung, nicht durch eine bedeutungslose Beschäftigung.",
        "Lehrkräfte können anspruchsvolle Aufgaben in diagnostische Zwischenziele teilen. Eltern sollten nicht jedes Ergebnis feiern müssen, sondern konkrete Veränderungen wahrnehmen. Dadurch bleibt Anerkennung glaubwürdig und fachlich verbunden.",
      ],
    },
  ],
  "multitasking-kostet-fokus": [
    {
      title: "Musik, Videos und individuelle Unterschiede",
      paragraphs: [
        "Instrumentale Hintergrundmusik kann bei routinierten Aufgaben für manche Lernende angenehm sein. Sprache konkurriert dagegen besonders bei Lesen, Schreiben und Auswendiglernen mit der Aufgabe. Entscheidend ist nicht das Gefühl allein, sondern der Vergleich von Fehlern, Tempo und Erinnerung nach der Einheit.",
        "Wer Musik nutzen möchte, kann dieselbe Aufgabe einmal mit und einmal ohne Hintergrund bearbeiten. Diese kleine Messung ersetzt pauschale Regeln durch eine Entscheidung, die zum Aufgabentyp und zur Person passt.",
      ],
    },
  ],
  "eltern-begleiten-ohne-druck": [
    {
      title: "Konflikte aus der Lernzeit heraushalten",
      paragraphs: [
        "Wenn Planung, Kontrolle und fachliche Hilfe spontan am Nachmittag zusammenkommen, eskalieren Gespräche schnell. Ein fester wöchentlicher Termin von zehn bis fünfzehn Minuten schafft einen anderen Rahmen. Dort werden Termine, Belastung und gewünschte Unterstützung besprochen. Während der Lernzeit gelten die vorher vereinbarten Zuständigkeiten.",
        "Dayova kann die gemeinsame Informationsgrundlage liefern, ohne dass Eltern jede Aufgabe einzeln nachhalten. Das spart Nachfragen und lässt mehr Raum für Beziehung außerhalb schulischer Leistung.",
      ],
    },
  ],
  "fehlende-lust-als-schutz": [
    {
      title: "Interesse entsteht manchmal erst während der Handlung",
      paragraphs: [
        "Motivation muss nicht vollständig vor dem Start vorhanden sein. Eine überschaubare Aufgabe kann Kompetenz spürbar machen und dadurch Interesse oder zumindest Bereitschaft erhöhen. Deshalb ist ein kleiner Versuch oft hilfreicher als eine lange Diskussion darüber, warum Lernen wichtig sein sollte.",
        "Bleibt Widerstand über längere Zeit bestehen, sollten fachliche Überforderung, Konflikte, Erschöpfung und psychische Belastung geprüft werden. Nicht jedes Problem lässt sich durch bessere Planung lösen.",
      ],
    },
  ],
  "abstrakten-lernstoff-greifbar-machen": [
    {
      title: "Selbst Beispiele erfinden als Verständnistest",
      paragraphs: [
        "Ein vorgegebenes Beispiel kann nachvollzogen werden, ohne dass das Prinzip vollständig verstanden ist. Wer ein eigenes passendes Beispiel erzeugt, muss dagegen entscheiden, welche Merkmale unverzichtbar sind. Ein Gegenbeispiel verlangt zusätzlich zu erkennen, an welcher Bedingung das Prinzip scheitert.",
        "Diese beiden Aufgaben eignen sich für nahezu jedes Fach und liefern Lehrkräften wie Lernenden eine schnelle Rückmeldung über die Tiefe des Verständnisses.",
      ],
    },
  ],
  "bilder-und-woerter-gemeinsam-nutzen": [
    {
      title: "Darstellungen aus dem Gedächtnis rekonstruieren",
      paragraphs: [
        "Eine schön gestaltete Mindmap kann beim Betrachten verständlich wirken und trotzdem kaum abrufbar sein. Lege die Vorlage weg und rekonstruiere zunächst nur die Hauptbeziehungen. Ergänze danach Details in einer zweiten Farbe und vergleiche mit dem Original.",
        "So wird die Grafik vom Lernprodukt zum Abrufwerkzeug. Die Unterschiede zeigen, welche Verbindungen noch fehlen und welche Teile bereits ohne visuelle Hilfe verfügbar sind.",
      ],
    },
  ],
  "mit-lernplanung-pruefungsdruck-senken": [
    {
      title: "Puffer sind ein fachlicher Bestandteil des Plans",
      paragraphs: [
        "Ein Plan ohne freie Zeit setzt voraus, dass jede Schätzung stimmt und keine Rückfrage auftaucht. Das ist unrealistisch. Puffer erlauben, eine unerwartete Lücke erneut zu bearbeiten oder einen ausgefallenen Tag aufzufangen, ohne sofort Schlaf und Erholung zu kürzen.",
        "Bleibt der Puffer ungenutzt, dient er für gemischten Abruf oder eine Pause. Er ist keine verschwendete Zeit, sondern schützt die Qualität der Vorbereitung vor gewöhnlichen Abweichungen.",
      ],
    },
  ],
  "abrufen-statt-passiv-lesen": [
    {
      title: "Warum schwieriges Abrufen produktiv sein kann",
      paragraphs: [
        "Eine Antwort, die mühsam aus dem Gedächtnis entsteht, fühlt sich schlechter an als flüssiges Lesen. Gerade dieser Aufwand kann den späteren Zugriff stärken. Voraussetzung ist, dass die Aufgabe grundsätzlich erreichbar bleibt und eine Korrektur folgt.",
        "Wenn keinerlei Ansatz vorhanden ist, hilft ein kleiner Hinweis besser als sofort die vollständige Lösung. Danach wird der Hinweis entfernt und der Abruf erneut versucht. So bleibt die entscheidende Denkarbeit bei der lernenden Person.",
      ],
    },
  ],
  "feynman-technik-komplexes-erklaeren": [
    {
      title: "Die Erklärung durch Rückfragen belasten",
      paragraphs: [
        "Eine Erklärung kann flüssig klingen und trotzdem wichtige Lücken enthalten. Bitte eine andere Person um Rückfragen: Warum passiert dieser Schritt? Gilt das immer? Was wäre anders, wenn eine Bedingung entfällt? Ohne Lernpartner lassen sich solche Fragen auch selbst vorbereiten.",
        "Die stärkste Version der Technik endet deshalb nicht mit einem Monolog, sondern mit der Prüfung, ob die Erklärung Rückfragen, Beispiele und Grenzen aushält.",
      ],
    },
  ],
  "pomodoro-25-minuten-passen-nicht-immer": [
    {
      title: "Pausen sollen Aufmerksamkeit erneuern",
      paragraphs: [
        "Eine Pause voller Kurzvideos oder Nachrichten liefert dem Gehirn viele neue Reize und kann den Rückweg zur Aufgabe erschweren. Erholsamer sind Tätigkeiten mit einem eindeutigen Ende: Wasser holen, lüften, kurz gehen oder den Blick in die Ferne richten.",
        "Auch die Pause darf zum Aufgabentyp passen. Nach intensiver Problemlösung kann sie länger sein als nach einer kurzen Vokabeleinheit. Entscheidend ist, dass Beginn und Rückkehr bewusst bleiben.",
      ],
    },
  ],
  "was-fruehere-generationen-anders-machten": [
    {
      title: "Digitale Werkzeuge bewusst begrenzen",
      paragraphs: [
        "Die stärkste digitale Lernumgebung bietet genau die Funktionen, die für den aktuellen Schritt gebraucht werden. Während eines Selbsttests sind Lösungen zunächst verborgen; während der Planung bleiben Unterhaltung und Nachrichten geschlossen; nach einer Antwort erscheint gezielte Rückmeldung.",
        "Diese Begrenzung ahmt nicht die Vergangenheit nach. Sie nutzt moderne Möglichkeiten, ohne jede verfügbare Funktion gleichzeitig in den Lernmoment zu holen.",
      ],
    },
  ],
  "wenn-selbstvertrauen-wissen-vortaeuscht": [
    {
      title: "Selbsteinschätzung lässt sich trainieren",
      paragraphs: [
        "Nach mehreren Runden aus Vorhersage, Antwort und Rückmeldung werden Einschätzungen genauer. Lernende erkennen beispielsweise, dass bekannte Überschriften bei ihnen zu viel Sicherheit erzeugen oder dass Nervosität nicht automatisch eine schlechte Antwort bedeutet.",
        "Eine bessere Kalibrierung hilft bei der Planung: Zeit fließt nicht nur in Themen, die sich schwierig anfühlen, sondern in Inhalte, deren tatsächlicher Abruf unsicher ist.",
      ],
    },
  ],
  "gemischtes-ueben-statt-blocklernen": [
    {
      title: "Warum gemischtes Üben sich zunächst schlechter anfühlt",
      paragraphs: [
        "Die Trefferquote sinkt häufig, sobald unterschiedliche Aufgabentypen gemischt werden. Das ist erwartbar, weil die passende Strategie nicht mehr durch die Reihenfolge verraten wird. Das subjektive Gefühl von Schwierigkeit ist hier kein Beweis für eine schlechte Methode.",
        "Beurteile den Effekt mit einem späteren Test, in dem ebenfalls gemischte Aufgaben vorkommen. Oft zeigt sich der Vorteil erst dort, weil das Erkennen und Auswählen der Strategie mitgelernt wurde.",
      ],
    },
  ],
  "selbsttests-staerken-das-lernen": [
    {
      title: "Fragen selbst schreiben vertieft die Vorbereitung",
      paragraphs: [
        "Wer eine gute Frage formuliert, muss entscheiden, welche Idee zentral ist, welche falschen Antworten plausibel wären und woran eine vollständige Lösung erkennbar ist. Dieser Prozess verarbeitet den Stoff tiefer als das bloße Markieren wichtiger Sätze.",
        "Tausche Fragen mit Mitschülern und besprecht anschließend nicht nur die Lösung, sondern auch die Qualität der Frage. So entsteht zusätzlich ein Blick für typische Prüfungsanforderungen.",
      ],
    },
  ],
  "lernpause-macht-wissen-haltbarer": [
    {
      title: "Pausen und Wiederholungsabstände unterscheiden",
      paragraphs: [
        "Eine kurze Pause innerhalb eines Nachmittags dient vor allem der Erholung. Ein Wiederholungsabstand von Tagen oder Wochen fordert dagegen den erneuten Gedächtnisabruf. Beide Unterbrechungen sind wichtig, erfüllen aber verschiedene Funktionen.",
        "Ein guter Plan enthält daher bewusste Erholung zwischen Arbeitsblöcken und zeitlich verteilte Begegnungen mit dem Stoff. Nur mehr Pausen am selben Tag ersetzen keine spätere Wiederholung.",
      ],
    },
  ],
  "gute-noten-und-verstaendnis": [
    {
      title: "Erfolg darf Ausgangspunkt für Vertiefung sein",
      paragraphs: [
        "Nach einer guten Note wird ein Thema häufig vollständig abgeschlossen. Dabei ist gerade jetzt eine günstige Grundlage für Transfer vorhanden. Eine einzige anspruchsvolle Folgefrage einige Wochen später kann zeigen, ob das Wissen erhalten blieb und in einem neuen Kontext funktioniert.",
        "Dieser spätere Abruf soll den Erfolg nicht relativieren. Er macht ihn langfristig nutzbar und verhindert, dass jedes Schuljahr bei ähnlichen Grundlagen erneut beginnt.",
      ],
    },
  ],
  "uebungszeit-allein-genuegt-nicht": [
    {
      title: "Gezielte Übung braucht eine passende Schwierigkeit",
      paragraphs: [
        "Zu leichte Aufgaben liefern viele richtige Antworten, verändern aber wenig. Zu schwere Aufgaben erzeugen ohne Hilfen kaum verwertbare Versuche. Die produktive Zone liegt dort, wo ein Lösungsansatz vorhanden ist und Rückmeldung eine konkrete Verbesserung ermöglicht.",
        "Dayova kann Aufgaben anhand bisheriger Antworten auswählen und die Schwierigkeit anpassen. Damit wird nicht einfach mehr geübt, sondern an der Hürde gearbeitet, die den nächsten Fortschritt begrenzt.",
      ],
    },
  ],
  "warum-gute-vorsaetze-scheitern": [
    {
      title: "Fortschritt über Verhalten statt Identität bewerten",
      paragraphs: [
        "Ein ausgelassener Tag bedeutet nicht, dass jemand undiszipliniert ist. Prüfe stattdessen, welcher Teil des Ablaufs nicht gepasst hat: War der Auslöser unzuverlässig, das Material nicht bereit oder die Mindesthandlung zu groß? Jede Antwort führt zu einer veränderbaren Anpassung.",
        "Diese sachliche Auswertung verhindert, dass aus kleinen Abweichungen Selbstvorwürfe und schließlich vollständiger Abbruch entstehen.",
      ],
    },
  ],
  "warum-lernen-erst-spaet-beginnt": [
    {
      title: "Frühe Einheiten dürfen sehr kurz sein",
      paragraphs: [
        "Ein früher Start muss nicht wie die intensive letzte Prüfungswoche aussehen. Zehn Minuten für Themenübersicht und zwei Abruffragen können genügen. Ihr Wert liegt in der Information: Welche Bereiche sind bereits sicher und welche brauchen mehrere Begegnungen?",
        "Dayova kann aus diesem frühen Stand kleine Einheiten verteilen. Dadurch wächst die Vorbereitung im Alltag, statt erst durch akuten Zeitdruck sichtbar zu werden.",
      ],
    },
  ],
  "wenn-lernen-nicht-zur-note-passt": [
    {
      title: "Die nächste Vorbereitung als überprüfbare Veränderung",
      paragraphs: [
        "Ändere nach einer enttäuschenden Note nicht zehn Dinge gleichzeitig. Wähle eine begründete Veränderung, etwa mehr offene Abruffragen oder einen Probedurchlauf mit Zeitrahmen. Vergleiche danach, ob sich genau die zugehörige Fehlerart reduziert hat.",
        "So wird Lernen zu einem überprüfbaren Prozess. Erfolg und Misserfolg liefern Informationen über Methoden, statt pauschal über Fleiß oder Begabung zu urteilen.",
      ],
    },
  ],
};
