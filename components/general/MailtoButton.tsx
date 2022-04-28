import { HiMail } from 'react-icons/hi';
import styles from '../../styles/general/button.module.css';

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
