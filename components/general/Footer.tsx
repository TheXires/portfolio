import Link from 'next/link';
import React from 'react';
import styles from '../../styles/general/footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>&copy; 2022 Robin Beckmann</div>
        <Link href={'/imprint'}>
          <span className={styles.link}>Impressum</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
