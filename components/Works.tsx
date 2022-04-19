import React from 'react';
import styles from '../styles/works.module.css';
import { Project } from '../types/project';
import { Layout } from './Layout';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

function Works({ projects }: Props) {
  return (
    <section className={styles.container}>
      <Layout>
        <div className={styles.heading}>Arbeiten</div>

        <div className={styles.projectContainer}>
          {projects.map((project, index) => {
            return <ProjectCard project={project} reverse={index % 2 === 1} key={project.id} />;
          })}
        </div>
      </Layout>
    </section>
  );
}

export default Works;
