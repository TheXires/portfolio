import React from 'react';
import styles from '../styles/header.module.css';
import GithubButton from './GithubButton';
import Link from 'next/link';
import MailtoButton from './MailtoButton';

function Header() {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.heading}>Hallo,</div>
        <div className={styles.text}>
          mein Name ist Robin und ich bin Web und Mobile Entwickler.
        </div>
        <div className={styles.buttonContainer}>
          <GithubButton link="https://github.com/TheXires" />
          <MailtoButton />
        </div>
      </div>
    </section>
  );
}

export default Header;
