"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { CookieSettingsButton } from "@/components/analytics-consent";
import { footerNavigation } from "@/content/navigation";
import styles from "./footer.module.css";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const animations: Animation[] = [];
    const groups = Array.from(footer.querySelectorAll<HTMLElement>("[data-footer-reveal]"));
    groups.forEach(group => group.dataset.revealReady = "true");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const group = entry.target as HTMLElement;
        observer.unobserve(group);
        const elements = group.dataset.footerReveal === "wordmark"
          ? [group.firstElementChild as HTMLElement]
          : Array.from(group.querySelectorAll<HTMLElement>("a, button"));
        if (!elements.length) { group.removeAttribute("data-reveal-ready"); return; }
        const wordmark = group.dataset.footerReveal === "wordmark";
        const batch = elements.map((element, index) => element.animate([
          { opacity: 0, transform: wordmark ? "translate3d(0, 90%, 0)" : "translate3d(0, 24px, 0)" },
          { opacity: 1, transform: "translate3d(0, 0, 0)" },
        ], { duration: wordmark ? 1100 : 650, delay: index * 60, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" }));
        animations.push(...batch);
        batch.at(-1)!.onfinish = () => {
          group.removeAttribute("data-reveal-ready");
          batch.forEach(animation => animation.cancel());
        };
      });
    }, { threshold: .18 });
    groups.forEach(group => observer.observe(group));
    const showAll = () => {
      if (!preference.matches) return;
      observer.disconnect();
      groups.forEach(group => group.removeAttribute("data-reveal-ready"));
      animations.forEach(animation => animation.cancel());
    };
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      groups.forEach(group => group.removeAttribute("data-reveal-ready"));
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener("change", showAll);
    };
  }, []);

  const legalLinks = footerNavigation.find((group) => group.title === "Rechtliches")!.links;

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.container}>
        <nav data-footer-reveal="links" className={styles.navigation} aria-label="Footer Navigation">
          {legalLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
          <CookieSettingsButton />
        </nav>
        <div data-footer-reveal="social" className={styles.social}>
          <SocialLinks iconsOnly />
        </div>
        <div data-footer-reveal="wordmark" className={styles.wordmarkMask}><Link className={styles.wordmark} href="/" aria-label="Dayova Startseite">dayova</Link></div>
        <p className={styles.copyright}>Copyright © 2026 Dayova</p>
      </div>
    </footer>
  );
}
