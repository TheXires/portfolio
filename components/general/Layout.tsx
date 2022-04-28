import styles from '../../styles/general/layout.module.css';

export const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
