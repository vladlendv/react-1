import styles from './Header.module.css';
import logo from './png-g714c85673_640.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="logo-img"
      />
    </header>
  );
}
