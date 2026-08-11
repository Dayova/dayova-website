import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/",
        has: [
          {
            type: "query",
            key: "reset-cache",
            value: "1",
          },
        ],
        headers: [
          {
            key: "Clear-Site-Data",
            value: '"cache"',
          },
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/kontakt",
        destination: "/#kontakt",
        permanent: true,
      },
      {
        source: "/ueberuns",
        destination: "/#about-title",
        permanent: true,
      },
      {
        source: "/warteliste",
        destination: "/preise",
        permanent: true,
      },
      {
        source: "/pricingpage",
        destination: "/preise",
        permanent: true,
      },
      {
        source: "/parents",
        destination: "/eltern",
        permanent: true,
      },
      {
        source: "/schools",
        destination: "/schulen",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/preise",
        permanent: true,
      },
      {
        source: "/checkout/success",
        destination: "/kasse/erfolgreich",
        permanent: true,
      },
      {
        source: "/checkout/cancel",
        destination: "/kasse/abgebrochen",
        permanent: true,
      },
      {
        source: "/checkout",
        destination: "/kasse",
        permanent: true,
      },
      {
        source: "/elementor-5509",
        destination: "/blog/wiederholen-allein-reicht-nicht",
        permanent: true,
      },
      {
        source:
          "/der-testing-effekt-warum-pruefungen-die-beste-lernmethode-sind",
        destination: "/blog/selbsttests-staerken-das-lernen",
        permanent: true,
      },
      {
        source:
          "/aktives-abrufen-statt-passives-lesen-warum-fragen-die-beste-lernmethode-sind",
        destination: "/blog/abrufen-statt-passiv-lesen",
        permanent: true,
      },
      {
        source: "/warum-mia-trotz-guter-vorsaetze-immer-wieder-scheitert",
        destination: "/blog/warum-gute-vorsaetze-scheitern",
        permanent: true,
      },
      {
        source: "/gelernt-aber-wirklich-verstanden",
        destination: "/blog/vertraut-ist-noch-nicht-verstanden",
        permanent: true,
      },
      {
        source: "/lerntyp",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/startseite",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/feedback-das-dich-wirklich-weiterbringt",
        destination: "/blog/feedback-das-dich-weiterbringt",
        permanent: true,
      },
      {
        source: "/umbaupage",
        destination: "/",
        permanent: true,
      },
      {
        source: "/zeitmanagment",
        destination: "/blog/lernen-ohne-plan-erzeugt-stress",
        permanent: true,
      },
      {
        source: "/die-spacing-revolution-warum-das-gehirn-luecken-liebt",
        destination: "/blog/lernpause-macht-wissen-haltbarer",
        permanent: true,
      },
      {
        source: "/der-vorlesungs-paradox-warum-gute-noten-manchmal-taeuschen",
        destination: "/blog/gute-noten-und-verstaendnis",
        permanent: true,
      },
      {
        source: "/der-10000-stunden-irrtum-warum-quantitaet-allein-nicht-zum-lernprofi-macht",
        destination: "/blog/uebungszeit-allein-genuegt-nicht",
        permanent: true,
      },
      {
        source: "/warum-du-trotzdem-erst-um-23-uhr-fuer-den-test-anfaengst-zu-lernen",
        destination: "/blog/warum-lernen-erst-spaet-beginnt",
        permanent: true,
      },
      {
        source: "/warum-du-trotz-lernen-schlechte-noten-schreibst",
        destination: "/blog/wenn-lernen-nicht-zur-note-passt",
        permanent: true,
      },
      {
        source: "/warum-lernen-ohne-plan-oft-mehr-stress-macht-als-fortschritt",
        destination: "/blog/lernen-ohne-plan-erzeugt-stress",
        permanent: true,
      },
      {
        source: "/warum-du-beim-lernen-nur-selten-fortschritte-spuerst-und-was-kleine-lernschritte-daran-aendern",
        destination: "/blog/warum-fortschritt-unsichtbar-bleibt",
        permanent: true,
      },
      {
        source: "/warum-wiederholen-allein-nicht-reicht-und-wie-dein-gehirn-wissen-wirklich-behaelt",
        destination: "/blog/wiederholen-allein-reicht-nicht",
        permanent: true,
      },
      {
        source: "/warum-du-immer-wieder-aufschiebst-und-was-wirklich-dahintersteckt-prokrastination",
        destination: "/blog/was-hinter-dem-aufschieben-steckt",
        permanent: true,
      },
      {
        source: "/wenn-der-kopf-dichtmacht-wie-stress-und-angst-dein-lernen-blockieren",
        destination: "/blog/wenn-stress-das-lernen-blockiert",
        permanent: true,
      },
      {
        source: "/struktur-statt-stress-wie-ein-lernplan-dir-vor-klassenarbeiten-den-druck-nimmt",
        destination: "/blog/mit-lernplanung-pruefungsdruck-senken",
        permanent: true,
      },
      {
        source: "/die-interleaving-falle-warum-gemischtes-ueben-besser-ist-als-blocklernen",
        destination: "/blog/gemischtes-ueben-statt-blocklernen",
        permanent: true,
      },
      {
        source: "/ich-kann-das-einfach-nicht-wie-negative-gedanken-dein-lernen-sabotieren",
        destination: "/blog/ich-kann-das-nicht",
        permanent: true,
      },
      {
        source: "/dein-lernplatz-als-heimlicher-mitspieler-wie-deine-umgebung-deine-konzentration-sabotiert",
        destination: "/blog/wie-dein-lernplatz-mitentscheidet",
        permanent: true,
      },
      {
        source: "/die-vergleichsfalle-warum-dich-die-noten-der-anderen-klein-machen",
        destination: "/blog/raus-aus-der-vergleichsfalle",
        permanent: true,
      },
      {
        source: "/bewegung-im-kopf-warum-sport-dein-lernen-leichter-macht",
        destination: "/blog/bewegung-bringt-denken-in-gang",
        permanent: true,
      },
      {
        source: "/schlaf-statt-nachtschicht-warum-ausreichender-schlaf-bessere-noten-bringt",
        destination: "/blog/warum-schlaf-beim-lernen-gewinnt",
        permanent: true,
      },
      {
        source: "/warum-lerngewohnheiten-wichtiger-sind-als-motivation",
        destination: "/blog/gewohnheiten-tragen-weiter-als-motivation",
        permanent: true,
      },
      {
        source: "/selbstbild-mindset",
        destination: "/blog/wie-dein-selbstbild-lernen-praegt",
        permanent: true,
      },
      {
        source: "/fehlerkultur-aus-tests-werden-werkzeuge",
        destination: "/blog/fehler-als-werkzeuge-nutzen",
        permanent: true,
      },
      {
        source: "/was-noten-wirklich-messen-und-was-nicht",
        destination: "/blog/was-noten-zeigen-und-verschweigen",
        permanent: true,
      },
      {
        source: "/kleine-siege-warum-mini-erfolge-deine-lernmotivation-retten-koennen",
        destination: "/blog/kleine-erfolge-halten-dich-im-lernen",
        permanent: true,
      },
      {
        source: "/der-fokus-fehler-warum-multitasking-dein-gehirn-austrickst",
        destination: "/blog/multitasking-kostet-fokus",
        permanent: true,
      },
      {
        source: "/eltern-als-lernpartner-wie-du-dein-kind-unterstuetzt-ohne-druck-zu-machen",
        destination: "/blog/eltern-begleiten-ohne-druck",
        permanent: true,
      },
      {
        source: "/motivation-statt-selbstvorwurf-warum-ich-hab-einfach-keine-lust-oft-ein-schutzmechanismus-ist",
        destination: "/blog/fehlende-lust-als-schutz",
        permanent: true,
      },
      {
        source: "/konkrete-beispiele-so-machst-du-abstrakte-ideen-greifbar",
        destination: "/blog/abstrakten-lernstoff-greifbar-machen",
        permanent: true,
      },
      {
        source: "/dual-coding-warum-bilder-woerter-dein-gedaechtnis-verdoppeln",
        destination: "/blog/bilder-und-woerter-gemeinsam-nutzen",
        permanent: true,
      },
      {
        source: "/die-feynman-technik-wie-ein-nobelpreistraeger-komplexe-themen-simplifizierte",
        destination: "/blog/feynman-technik-komplexes-erklaeren",
        permanent: true,
      },
      {
        source: "/der-pomodoro-mythen-warum-25-minuten-nicht-fuer-jeden-optimal-sind",
        destination: "/blog/pomodoro-25-minuten-passen-nicht-immer",
        permanent: true,
      },
      {
        source: "/die-generationen-luecke-warum-deine-grosseltern-besser-lernen-konnten",
        destination: "/blog/was-fruehere-generationen-anders-machten",
        permanent: true,
      },
      {
        source: "/der-dunning-kruger-effekt-im-klassenzimmer-warum-schlechte-schueler-ihre-leistung-ueberschaetzen",
        destination: "/blog/wenn-selbstvertrauen-wissen-vortaeuscht",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
