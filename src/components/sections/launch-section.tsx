import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";

const waitlistBenefits = [
  "14 days free when Dayova launches",
  "Early launch updates",
  "A place in the limited first launch wave",
] as const;

export function LaunchSection() {
  const waitlistHref = `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(
    "Dayova waitlist",
  )}&body=${encodeURIComponent(
    "Hi Dayova team,\n\nPlease add me to the Dayova launch waitlist.\n\nName:\n",
  )}`;

  return (
    <section className="section waitlist-section" id="waitlist" aria-labelledby="waitlist-title">
      <div className="dayova-container">
        <div className="waitlist-panel">
          <div className="waitlist-copy">
            <span className="waitlist-status">Launching August 17, 2026</span>
            <h2 className="dayova-section-title" id="waitlist-title">
              Be there when Dayova launches.
            </h2>
            <p>
              Join the waitlist for early launch updates and 14 days of free
              access when the app goes live. The first launch wave is limited.
            </p>
            <ButtonLink href={waitlistHref}>Secure my waitlist spot</ButtonLink>
            <p className="waitlist-data-note">
              This opens your email app. We only use your email to contact you
              about the Dayova launch and early access.
            </p>
          </div>

          <ul className="waitlist-benefits" aria-label="Waitlist benefits">
            {waitlistBenefits.map((benefit) => (
              <li key={benefit}>
                <span aria-hidden="true">
                  <DayovaIcon icon={CheckmarkCircle02Icon} size={22} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
