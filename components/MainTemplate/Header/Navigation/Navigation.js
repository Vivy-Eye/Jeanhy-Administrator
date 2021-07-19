import Link from "next/link";
import styles from "../../../../styles/Header.module.scss";

export default function Navigation() {
  const sections = ["users", "posts", "monsters"];

  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <Link href="/">
            <a className={styles.menu__link}>Home</a>
          </Link>
        </li>

        {sections.map((section) => (
          <li className={styles.menu__item} key={sections}>
            <Link href={"/" + section}>
              <a className={styles.menu__link}>{section}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
