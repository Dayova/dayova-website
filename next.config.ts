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
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/pricingpage",
        destination: "/pricing",
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
    ];
  },
};

export default nextConfig;
