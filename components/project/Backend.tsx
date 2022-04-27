import React from 'react';
import styles from '../../styles/backend.module.css';

interface Props {
  description: string;
}

function Backend({ description }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Backend</div>
      <div className={styles.textContainer}>{description}</div>
    </div>
  );
}

export default Backend;
