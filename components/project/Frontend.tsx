import React from 'react';
import styles from '../../styles/project/frontend.module.css';
import ImageSlider from './ImageSlider';

interface Props {
  description: string;
  images: string[];
}

function Frontend({ description, images }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Frontend</div>
      <div>
        <div>{description}</div>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default Frontend;
