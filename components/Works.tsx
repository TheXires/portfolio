import React from 'react';
import styles from '../styles/works.module.css';
import { Layout } from './Layout';
import ProjectCard from './ProjectCard';

function Works() {
  return (
    <section className={styles.container}>
      <Layout>
        <h1>Arbeiten</h1>

        <div className={styles.projectContainer}>
          {Array.from({ length: 5 }).map((item, index) => {
            return <ProjectCard reverse={index % 2 === 1} />;
          })}
        </div>
      </Layout>
    </section>
  );
}

export default Works;
