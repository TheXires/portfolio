import React from 'react';
import styles from '../../styles/project/wireframes.module.css';
import Image from 'next/image';

interface Props {
  description: string;
  image: string;
}

function Wireframes({ description, image }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Wireframes</div>
      <div className={styles.innerContainer}>
        <div className={styles.image}>
          <Image src={image} width={1920} height={1080} quality={100} />
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default Wireframes;
