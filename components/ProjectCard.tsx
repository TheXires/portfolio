import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/projectCard.module.css';
import { Project } from '../types/project';
import GithubButton from './GithubButton';

interface Props {
  project: Project;
  reverse?: boolean;
}

function ProjectCard({ project, reverse = false }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={project.thumbnail}
          alt="Projekt Bild"
          height={400}
          width={500}
          objectFit="cover"
        />
      </div>
      <div className={styles.bottomContainer}>
        <Link href={`/projects/${project.id}`}>
          <a className={styles.title}>{project.title}</a>
        </Link>
        <div className={styles.text}>
          {project.short}{' '}
          <Link href={`/projects/${project.id}`}>
            <a>Mehr...</a>
          </Link>
        </div>
        <div style={{}}>
          <GithubButton link={project.github} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
