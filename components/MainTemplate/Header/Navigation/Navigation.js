import Link from "next/link";
import styles from "../../../../styles/Header.module.scss";

export default function Navigation() {
  const sections = ["users", "posts", "images", "monsters"];

  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <Link href="/">
            <a className={styles.menu__link}>Home</a>
          </Link>
        </li>

        {sections.map((section, i) => (
          <li className={styles.menu__item} key={i}>
            <Link href={"/" + section}>
              <a className={styles.menu__link}>{section}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
