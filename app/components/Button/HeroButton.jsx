import styles from './HeroButton.module.css';
import Link from 'next/link';

export default function HeroButton({ children }) {
  return <Link href="/themes">
      <div className={styles.className}>
        {children}
      </div>
    </Link>;
}