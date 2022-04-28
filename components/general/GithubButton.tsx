import styles from '../../styles/general/button.module.css';
import { AiFillGithub } from 'react-icons/ai';

interface Props {
  link: string;
}

function GithubButton({ link }: Props) {
  return (
    <a href={link} className={styles.container}>
      <AiFillGithub color="white" />
      <div className={styles.text}>GitHub</div>
    </a>
  );
}

export default GithubButton;
