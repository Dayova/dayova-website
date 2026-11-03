import { BrandMark } from "@/components/brand-mark";
import styles from "./brand.module.css";

type BrandProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function Brand({ compact = false, inverse = false }: BrandProps) {
  return (
    <span
      className={`${styles.brand} ${compact ? styles.compact : ""} ${inverse ? styles.inverse : ""}`}
    >
      <BrandMark className={styles.mark} />
      <span className={styles.wordmark}>dayova.</span>
    </span>
  );
}
