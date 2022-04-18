import React from 'react';
import styles from '../styles/navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Left</div>
      <div className={styles.navContainer}>
        <div>Home</div>
        <div>Arbeiten</div>
        <div>Über</div>
        <div>Kontakt</div>
      </div>
    </div>
  );
}

export default Navbar;
