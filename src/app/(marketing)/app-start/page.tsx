import {
  DiscordIcon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dayova App-Start",
  description:
    "Dayova erscheint am 17. August 2026 im App Store. Folge Dayova auf Instagram oder komm in den Discord-Chat.",
};

export default function AppStartPage() {
  return (
    <>
      <section className="section" aria-labelledby="app-start-title">
        <div className="dayova-container">
          <div className="mx-auto grid max-w-3xl justify-items-center gap-6 text-center">
            <span className="rounded-dayova-pill bg-brand-soft px-4 py-2 text-dayova-small font-semibold text-brand-deep">
              App-Start
            </span>
            <h1 className="text-balance" id="app-start-title">
              Dayova ist ab dem {siteConfig.launch.displayDate} im App Store
              verfügbar.
            </h1>
            <p className="max-w-2xl text-dayova-body-lg text-muted">
              Damit du den Start und wichtige Updates nicht verpasst, folge
              Dayova auf Instagram oder komm direkt in unseren Discord-Chat.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink
                external
                href={siteConfig.links.instagram}
                variant="primary"
              >
                <DayovaIcon
                  aria-hidden="true"
                  icon={InstagramIcon}
                  size={19}
                />
                Auf Instagram folgen
              </ButtonLink>
              <ButtonLink
                external
                href={siteConfig.links.discord}
                variant="secondary"
              >
                <DayovaIcon
                  aria-hidden="true"
                  icon={DiscordIcon}
                  size={19}
                />
                Discord beitreten
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="launch-next-title">
        <div className="dayova-container">
          <article className="section-card section-card-xl mx-auto max-w-3xl p-6 text-center lg:p-8">
            <h2 className="dayova-section-title" id="launch-next-title">
              Was bis zum Start passiert
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-dayova-body text-muted">
              Wir teilen Einblicke in Dayova, beantworten Fragen und erinnern
              dich rechtzeitig, sobald der Download verfügbar ist.
            </p>
            <div className="mt-6">
              <ButtonLink href="/" variant="text">
                Zurück zur Startseite
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
