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
    <div className={styles.container} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      <div className={styles.image}>
        <Image
          src={project.thumbnail}
          alt="Projekt Bild"
          height={400}
          width={500}
          objectFit="cover"
        />
      </div>
      <div className={styles.right}>
        <Link href={`/projects/${project.id}`}>
          <a className={styles.title}>{project.title}</a>
        </Link>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in ipsam vel fuga quod
          excepturi placeat error voluptatem quos aliquid? Aspernatur commodi nostrum eos nam quia
          iusto necessitatibus reprehenderit ullam?
        </div>
        <GithubButton link={project.github} />
      </div>
    </div>
  );
}

export default ProjectCard;
