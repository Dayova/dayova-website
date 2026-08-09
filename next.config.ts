import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: process.cwd(),
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
    ];
  },
};

export default nextConfig;
