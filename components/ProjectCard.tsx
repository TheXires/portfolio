import React from 'react';
import Image from 'next/image';
import image from '../public/background.jpg';
import styles from '../styles/projectCard.module.css';

interface Props {
  reverse?: boolean;
}

function ProjectCard({ reverse = false }: Props) {
  return (
    <div className={styles.container} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      <div style={reverse ? { marginLeft: '1rem' } : { marginRight: '1rem' }}>
        <Image src={image} alt="Projekt Bild" height={300} width={450} />
      </div>
      <div>
        <div className={styles.title}>Wetter App</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in ipsam vel fuga quod
          excepturi placeat error voluptatem quos aliquid? Aspernatur commodi nostrum eos nam quia
          iusto necessitatibus reprehenderit ullam?
        </div>
        <div>
          <ul>
            <li>React Native</li>
            <li>Cloudflare Workers</li>
            <li>Open Weather Api</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
