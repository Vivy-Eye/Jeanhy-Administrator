import styles from "../../../../styles/Header.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.container}>
        <div className={styles.side, styles.back}></div>
        <div className={styles.side, styles.left}></div>
        <div className={styles.side, styles.right}></div>
        <div className={styles.side, styles.top}></div>
        <div className={styles.side, styles.bottom}></div>
        <div className={styles.side, styles.front}></div>
      </div>
    </div>
  )
}