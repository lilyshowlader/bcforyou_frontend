import styles from './Landing.module.css';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className={styles.container}>
      <p className={styles.logoTextOne}>birth control</p>
      <p className={styles.logoText}>for you.</p>
      <div className={styles.imageContainer}>
        <img className={styles.mainImage} src='src/images/main.png' alt='main'></img>
      </div>
      <div className={styles.enter}>
        <Link to='/auth/login' className={styles.enterSpace}>log in</Link>
        <Link to='/auth/signup' className={styles.enter}>sign up</Link>
      </div>
    </div>
  );
}



