import styles from '../styles/githubButton.module.css';
import { AiFillGithub } from 'react-icons/ai';

function GithubButton() {
  return (
    <div className={styles.container}>
      <AiFillGithub color="white" />
      <div className={styles.text}>Github</div>
    </div>
  );
}

export default GithubButton;
