import { Link } from 'react-router-dom';
import styles from './GoBackBtn.module.css';

export const GoBackBtn = ({ path, children }) => {
  return (
    <Link to={path} className={styles.link}>
      {children}
    </Link>
  );
};
