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
    <Layout>
      <section className={styles.container}>
        <div className={styles.heading}>Projekte</div>

        <div className={styles.projectContainer}>
          {projects.map((project, index) => {
            return (
              <div style={{ width: '100%' }}>
                <ProjectCard project={project} reverse={index % 2 === 1} key={project.id} />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default Works;
