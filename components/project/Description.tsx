import React from 'react';
import styles from '../../styles/project/description.module.css';

interface Props {
  description: string;
}

function Description({ description }: Props) {
  return <div className={styles.container}>{description}</div>;
}

export default Description;
