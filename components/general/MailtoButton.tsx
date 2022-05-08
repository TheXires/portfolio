import { HiMail } from 'react-icons/hi';
import styles from '../../styles/general/button.module.css';

function MailtoButton() {
  return (
    <a
      href="mailto:robin-beckmann@mailbox.org"
      className={styles.container}
      style={{ backgroundColor: 'gray' }}
    >
      <HiMail color="white" />
      <div className={styles.text}>Kontakt</div>
    </a>
  );
}

export default MailtoButton;
