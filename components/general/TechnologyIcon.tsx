import React from 'react';
import styles from '../../styles/general/technologyIcon.module.css';

const icon = {
  cloudflare: '/icons/cloudflare.png',
  electron: '/icons/electron.png',
  expo: '/icons/expo.png',
  firebase: '/icons/firebase.png',
  react: '/icons/react.png',
  reactNative: '/icons/react.png',
  typescript: '/icons/typescript.png',
};

export type IconName = keyof typeof icon;

interface Props {
  iconName: IconName;
}

function TechnologyIcon({ iconName }: Props) {
  return <img src={icon[iconName]} alt={iconName} title={iconName} className={styles.img} />;
}

export default TechnologyIcon;
