import React from 'react';
import { Layout } from '../general/Layout';
import styles from '../../styles/about.module.css';

function About() {
  return (
    <section className={styles.container}>
      <Layout>
        <div className={styles.heading}>Über</div>
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <div>
              <span>2022</span> Bachelor of Science
              <div>
                <span>2021</span> Praxissemester Frontend Entwicklung
              </div>
              <div>
                <span>2020</span> SHK zur Unterstützung beim Aufbau eines hochschuleigenen Podcasts
              </div>
              <div>
                <span>2019</span> SHK zur Unterstützung bei der Organisation und Durchführung einer
                wissenschaftlichen Konferenz
              </div>
            </div>
            <div>
              <span>2018</span> Abitur
              <div>
                <span>2015</span> Schülerpraktikum (IT - Unternehmen)
              </div>
            </div>
            <div>
              <span>2015</span> Realschulabschluss
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div>
              <span>Sprachen</span>
              <ul>
                <li>Deutsch</li>
                <li>Englisch</li>
              </ul>
            </div>
            <div>
              <span>Technologien</span>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>React Native</li>
                <li>Expo + EAS</li>
                <li>Node.js</li>
                <li>Firebase</li>
                <li>Cloudflare</li>
              </ul>
            </div>
            <div>
              <span>Tools</span>
              <ul>
                <li>VS Code</li>
                <li>Git</li>
                <li>Framer</li>
                <li>Jira</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default About;
