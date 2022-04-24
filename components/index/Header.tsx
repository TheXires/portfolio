import { motion } from 'framer-motion';
import React from 'react';
import styles from '../../styles/header.module.css';
import GithubButton from '../general/GithubButton';
import MailtoButton from '../general/MailtoButton';

function Header() {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeInOut' }}
          className={styles.heading}
        >
          Hallo,
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
          className={styles.text}
        >
          mein Name ist Robin und ich bin Web und Mobile Entwickler.
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
          className={styles.buttonContainer}
        >
          <GithubButton link="https://github.com/TheXires" />
          <MailtoButton />
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
