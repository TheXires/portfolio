import { useRouter } from 'next/router';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import styles from '../../styles/project/projectHeader.module.css';
import TechnologyIcon, { IconName } from '../general/TechnologyIcon';

interface Props {
  heading: string;
  icons: IconName[];
  imgUrl: string;
}

function ProjectHeader({ imgUrl, heading, icons }: Props) {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className={styles.backButton} onClick={() => router.back()}>
          <FiArrowLeft size={26} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.iconContainer}>
          {icons.map((icon) => {
            return (
              <div className={styles.icon} key={icon}>
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
