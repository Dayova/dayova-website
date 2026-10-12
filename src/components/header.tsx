"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { Brand } from "@/components/brand";
import { HeaderNavigation } from "@/components/header-navigation";
import { StoreDownloadLink } from "@/components/store-download-link";
import { primaryNavigation } from "@/content/navigation";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const header = headerRef.current;
      const interacting = header?.contains(document.activeElement) ||
        header?.querySelector('[aria-expanded="true"]');
      if (y < 24 || interacting) {
        setHidden(false);
        previousY = y;
      } else if (Math.abs(y - previousY) >= 8) {
        setHidden(y > previousY && y > 96);
        previousY = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header} data-hidden={hidden} inert={hidden} onFocusCapture={() => setHidden(false)}>
      <div className={styles.bar}>
        <Link className={styles.brand} href="/" aria-label="Dayova Startseite">
          <Brand />
        </Link>
        <nav className={styles.desktopNavigation} aria-label="Hauptnavigation">
          {primaryNavigation.map((link) => (
            <Link className={styles.navigationLink} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <StoreDownloadLink className={styles.download} variant="primary">
            App herunterladen
          </StoreDownloadLink>
          <div className={styles.mobileNavigation}>
            <HeaderNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
