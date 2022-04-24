import { motion } from 'framer-motion';
import React from 'react';
import styles from '../../styles/works.module.css';
import { Project } from '../../types/project';
import { Layout } from '../general/Layout';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

function Works({ projects }: Props) {
  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.heading}>Projekte</div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className={styles.projectContainer}
        >
          {projects.map((project) => {
            return (
              <motion.div
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
              >
                <ProjectCard project={project} key={project.id} />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </Layout>
  );
}

export default Works;
