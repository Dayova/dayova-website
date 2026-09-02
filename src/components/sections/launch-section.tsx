import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { StoreDownloadLink } from "@/components/store-download-link";
import { DayovaIcon } from "@/components/ui/huge-icon";

const downloadBenefits = [
  "Try every feature free for 14 days",
  "Available for iOS and Android",
  "Start your personal learning plan in the app",
] as const;

export function LaunchSection() {
  return (
    <section className="section waitlist-section" id="download" aria-labelledby="download-title">
      <div className="dayova-container">
        <div className="waitlist-panel">
          <div className="waitlist-copy">
            <span className="waitlist-status">Available for iOS and Android</span>
            <h2 className="dayova-section-title" id="download-title">
              Download Dayova and start learning.
            </h2>
            <p>
              Get Dayova from the App Store or Google Play and try every
              feature free for 14 days.
            </p>
            <StoreDownloadLink>Download Dayova</StoreDownloadLink>
            <p className="waitlist-data-note">
              The button automatically opens the right store for your device.
            </p>
          </div>

          <ul className="waitlist-benefits" aria-label="Download benefits">
            {downloadBenefits.map((benefit) => (
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
