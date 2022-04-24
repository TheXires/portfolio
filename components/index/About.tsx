import React from 'react';
import { Layout } from '../general/Layout';
import styles from '../../styles/about.module.css';

function About() {
  return (
    <section className={styles.container}>
      <Layout>
        <div className={styles.heading}>Über</div>
        <div>
          <div>Right</div>
          <div>Left</div>
        </div>
      </Layout>
    </section>
  );
}

export default About;
