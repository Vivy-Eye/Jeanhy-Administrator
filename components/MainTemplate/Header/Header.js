// import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import styles from "../../../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <Logo /> */}
      <Navigation />
    </header>
  );
}
