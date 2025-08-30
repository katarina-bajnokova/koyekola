import styles from "./Header.module.scss";
import logo from "@/assets/images/landing/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Koyekola" className={styles.logo} />
      <nav className={styles.nav} aria-label="primary">
        <a href="#jeux">jeux</a>
        <a href="#livre">livre</a>
        <a href="#contact">contact</a>
        <a href="#connexion">connexion</a>
      </nav>
    </header>
  );
}
