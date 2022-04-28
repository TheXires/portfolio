import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/index/projectCard.module.css';
import { Project } from '../../types/project';
import GithubButton from '../general/GithubButton';

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <div className={styles.container}>
      <div>
        <Link href={`/projects/${project.id}`}>
          <div className={styles.imageContainer}>
            <Image
              src={project.thumbnail}
              alt="Projekt Bild"
              height={400}
              width={500}
              objectFit="cover"
            />
          </div>
        </Link>
        <div className={styles.descriptionContainer}>
          <Link href={`/projects/${project.id}`}>
            <a className={styles.title}>{project.title}</a>
          </Link>
          <div className={styles.text}>
            {project.short}{' '}
            <Link href={`/projects/${project.id}`}>
              <a>Mehr...</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <GithubButton link={project.github} />
      </div>
    </div>
  );
}

export default ProjectCard;
