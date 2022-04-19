import styles from '../styles/button.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';

function MailtoButton() {
  return (
    <a
      href="mailto:xires.dev@gmail.com"
      className={styles.container}
      style={{ backgroundColor: 'gray' }}
    >
      <HiMail color="white" />
      <div className={styles.text}>Kontakt</div>
    </a>
  );
}

export default MailtoButton;
