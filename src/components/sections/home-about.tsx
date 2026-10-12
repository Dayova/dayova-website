import { ArrowDown01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { DayovaIcon } from "@/components/ui/huge-icon";
import Link from "next/link";
import { SectionReveal } from "./section-reveal";
import styles from "./home-about.module.css";

function LearningPhone() {
  return (
    <svg className={styles.phone} viewBox="0 0 280 400" role="img" aria-label="Dayova Lernplan im iPhone: abgeschlossener Lernschritt, aktuelle Übung und Wiederholung">
      <defs>
        <linearGradient id="about-phone-body" x2="1" y2="1"><stop stopColor="#f0f1f5"/><stop offset="1" stopColor="#e7ebf0"/></linearGradient>
        <linearGradient id="about-blue-step" x2=".8" y2="1"><stop stopColor="#00b8ef"/><stop offset="1" stopColor="#43d4f6"/></linearGradient>
      </defs>
      <rect x="1" y="1" width="278" height="398" rx="48" fill="url(#about-phone-body)"/>
      <rect x="12" y="12" width="256" height="376" rx="38" fill="white"/>
      <rect x="105" y="19" width="70" height="20" rx="10" fill="#f0f1f5"/>
      <circle cx="165" cy="29" r="3" fill="#dce8ef"/>
      <path d="M133 98H174Q220 98 220 142V209Q220 252 178 252H132" fill="none" stroke="#d7dce3" strokeWidth="4" strokeLinecap="round"/>
      <path d="M133 98H174Q220 98 220 142V161" fill="none" stroke="#00b8ef" strokeWidth="4" strokeLinecap="round"/>
      <path d="M111 252H82Q51 252 51 284V305" fill="none" stroke="#3acdf4" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 7"/>
      <circle cx="51" cy="310" r="4" fill="#00b8ef"/>
      <g transform="translate(127 98)">
        <rect x="-25" y="-20" width="50" height="49" rx="22" fill="#009ed6"/>
        <rect x="-25" y="-26" width="50" height="49" rx="22" fill="url(#about-blue-step)"/>
        <ellipse cx="10" cy="-7" rx="10" ry="18" transform="rotate(25)" fill="#9bedff" opacity=".35"/>
        <path d="m-10-1 7 7 15-18" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g transform="translate(220 178)">
        <circle r="34" fill="white" stroke="#7b8794" strokeWidth="3"/>
        <ellipse cy="4" rx="25" ry="24" fill="#aab2bd"/>
        <circle r="24" fill="#dbe0e7" stroke="#aab2bd" strokeWidth="3"/>
        <ellipse cx="10" cy="-7" rx="9" ry="16" fill="#eef1f5" opacity=".6"/>
        <g fill="none" stroke="#89939e" strokeWidth="4" strokeLinecap="round"><path d="m-7 7 14-14M-11 2-2 11M2-11 11-2M-14 6-6 14M6-14 14-6"/></g>
      </g>
      <rect x="106" y="380" width="68" height="4" rx="2" fill="#dce2e8"/>
      <g transform="translate(127 252)">
        <ellipse cy="4" rx="23" ry="22" fill="#aab2bd"/><circle r="22" fill="#dbe0e7" stroke="#aab2bd" strokeWidth="3"/>
        <g stroke="#939da8" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M-9 1v-3a6 6 0 0 1 6-6H9l-4-4M9-8 5-4M9 0v3a6 6 0 0 1-6 6H-9l4 4M-9 9-5 5"/></g>
      </g>
    </svg>
  );
}

export function HomeAboutSection() {
  return (
    <SectionReveal className={styles.section}>
      <div className={`dayova-container ${styles.container}`}>
        <div data-reveal-item>
        <span className={styles.eyebrow}>Das steckt hinter Dayova</span>
        <h2 id="about-title" className={styles.heading}>Wir kennen den Lernstress.<br /><span>Deshalb gibt es Dayova.</span></h2>
        </div>
        <div className={styles.grid}>
          <article data-reveal-item className={`${styles.card} ${styles.planningCard}`}>
            <div className={styles.copy}><h3>Wir kennen den Kopf<br />voller Aufgaben.</h3><p>Aus unserer Lernbegleitung entstand Dayova – damit du deinen Lernalltag leichter planen kannst.</p><Link href="/about" className={styles.link}><span aria-hidden="true"><DayovaIcon icon={ArrowUpRight01Icon} size={18} /></span> Unsere Geschichte</Link></div>
          </article>
          <article data-reveal-item className={`${styles.card} ${styles.learningCard}`}>
            <div className={styles.copy}><h3>Du weißt, was als<br />Nächstes dran ist.</h3><p>Dayova macht aus deinem Stoff einen Lernplan, der zu deinem Alltag passt.</p><a href="#so-funktioniert-dayova" className={styles.link}><span aria-hidden="true"><DayovaIcon icon={ArrowDown01Icon} size={18} /></span> So funktioniert Dayova</a></div>
            <div className={styles.appPreview}><LearningPhone /></div>
          </article>
        </div>
      </div>
    </SectionReveal>
  );
}
