import React from 'react';
import styles from '../../styles/projectHeader.module.css';
import TechnologyIcon, { IconName } from '../general/TechnologyIcon';

interface Props {
  heading: string;
  icons: IconName[];
  imgUrl: string;
}

function ProjectHeader({ imgUrl, heading, icons }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `url(${imgUrl})` }} />
      <div className={styles.bottom}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.iconContainer}>
          {icons.map((icon) => {
            return (
              <div className={styles.icon}>
                <TechnologyIcon iconName={icon} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectHeader;
