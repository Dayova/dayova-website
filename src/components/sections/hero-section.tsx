import {
  BookOpen02Icon,
  Calendar03Icon,
  ChartHistogramIcon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  DownloadCircle01Icon,
} from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/button-link";
import { DayovaIcon } from "@/components/ui/huge-icon";

export function HeroSection() {
  return (
    <section className="dayova-hero" aria-labelledby="hero-title">
      <div className="dayova-hero-frame">
        <div className="dayova-hero-copy">
          <h1 className="dayova-hero-claim text-balance" id="hero-title">
            A learning plan that finally adapts to you.
          </h1>
          <p className="text-dayova-body-lg">
            Dayova turns your exams, tasks, available time, and learning
            progress into one clear plan—so you always know what to work on
            next.
          </p>

          <div className="dayova-hero-actions">
            <ButtonLink href="#waitlist" variant="primary">
              <DayovaIcon
                aria-hidden="true"
                icon={DownloadCircle01Icon}
                size={19}
              />
              Join the waitlist
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              How Dayova works
            </ButtonLink>
          </div>

          <p className="dayova-hero-proof">
            Built from real tutoring experience · 150+ students supported
          </p>
        </div>

        <div
          className="dayova-hero-showcase"
          role="img"
          aria-label="Dayova app preview showing a personalized learning plan, upcoming study block, and progress"
        >
          <div className="dayova-floating-card dayova-floating-card-schedule">
            <span className="dayova-floating-icon">
              <DayovaIcon
                aria-hidden="true"
                icon={Calendar03Icon}
                size={20}
              />
            </span>
            <span>
              <strong>Next learning block</strong>
              <small>Math · today, 16:00</small>
            </span>
            <span className="dayova-floating-meta">
              <DayovaIcon
                aria-hidden="true"
                icon={Clock01Icon}
                size={14}
              />
              30 min
            </span>
          </div>

          <div className="dayova-floating-card dayova-floating-card-progress">
            <span className="dayova-floating-icon">
              <DayovaIcon
                aria-hidden="true"
                icon={ChartHistogramIcon}
                size={20}
              />
            </span>
            <span>
              <strong>Your progress</strong>
              <small>This week</small>
            </span>
            <b>72%</b>
          </div>

          <div className="dayova-phone">
            <div className="dayova-phone-speaker" />
            <div className="dayova-phone-screen">
              <div className="dayova-phone-status">
                <span>9:41</span>
                <span className="dayova-phone-status-dots">•••</span>
              </div>

              <div className="dayova-phone-greeting">
                <span>
                  <strong>Hi Mia,</strong>
                  <small>your next step is ready</small>
                </span>
                <span className="dayova-phone-avatar">M</span>
              </div>

              <div className="dayova-phone-focus-card">
                <div className="dayova-phone-focus-top">
                  <span>
                    <small>Today</small>
                    <strong>16:00 – 16:30</strong>
                  </span>
                  <span className="dayova-phone-focus-check">
                    <DayovaIcon
                      aria-hidden="true"
                      icon={CheckmarkCircle02Icon}
                      size={22}
                    />
                  </span>
                </div>
                <div>
                  <strong>Fractions &amp; brackets</strong>
                  <small>Your next useful step</small>
                </div>
              </div>

              <div className="dayova-phone-plan">
                <div className="dayova-phone-section-title">
                  <strong>Your learning plan</strong>
                  <small>This week</small>
                </div>
                <div className="dayova-phone-days">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span className="is-active">Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                </div>
                <div className="dayova-phone-timeline">
                  <span className="dayova-phone-timeline-line" />
                  <span className="dayova-phone-lesson dayova-phone-lesson-math">
                    <DayovaIcon
                      aria-hidden="true"
                      icon={BookOpen02Icon}
                      size={15}
                    />
                    <span>
                      <strong>Math</strong>
                      <small>30 minutes</small>
                    </span>
                  </span>
                  <span className="dayova-phone-lesson dayova-phone-lesson-german">
                    <DayovaIcon
                      aria-hidden="true"
                      icon={CheckmarkCircle02Icon}
                      size={15}
                    />
                    <span>
                      <strong>English</strong>
                      <small>complete</small>
                    </span>
                  </span>
                </div>
              </div>

              <div className="dayova-phone-nav">
                <span className="is-active" />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="dayova-floating-card dayova-floating-card-insight">
            <span className="dayova-floating-icon">
              <DayovaIcon
                aria-hidden="true"
                icon={BookOpen02Icon}
                size={20}
              />
            </span>
            <span>
              <strong>3 learning goals</strong>
              <small>clearly prioritized</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
