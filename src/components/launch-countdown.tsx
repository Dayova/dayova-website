"use client";

import { useEffect, useState } from "react";

type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

const EMPTY_COUNTDOWN: CountdownValue = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  complete: false,
};

function getCountdown(targetDate: string): CountdownValue {
  const difference = Math.max(
    new Date(targetDate).getTime() - Date.now(),
    0,
  );

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    complete: difference === 0,
  };
}

const countdownUnits = [
  ["days", "Tage"],
  ["hours", "Stunden"],
  ["minutes", "Minuten"],
  ["seconds", "Sekunden"],
] as const;

export function LaunchCountdown({ targetDate }: { targetDate: string }) {
  const [countdown, setCountdown] =
    useState<CountdownValue>(EMPTY_COUNTDOWN);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    const updateCountdown = () => {
      const nextCountdown = getCountdown(targetDate);

      setCountdown(nextCountdown);
      setIsReady(true);

      if (nextCountdown.complete && intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }

      return nextCountdown.complete;
    };

    const timeoutId = window.setTimeout(() => {
      if (!updateCountdown()) {
        intervalId = window.setInterval(updateCountdown, 1_000);
      }
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [targetDate]);

  if (isReady && countdown.complete) {
    return (
      <p className="home-launch-live" role="status">
        Dayova ist gestartet.
      </p>
    );
  }

  return (
    <div
      className="home-launch-countdown"
      role="timer"
      aria-label="Countdown bis zum Dayova App-Start"
    >
      {countdownUnits.map(([key, label]) => (
        <div className="home-launch-countdown-item" key={key}>
          <strong className="home-launch-countdown-value">
            {isReady ? String(countdown[key]).padStart(2, "0") : "--"}
          </strong>
          <span className="home-launch-countdown-unit">{label}</span>
        </div>
      ))}
    </div>
  );
}
