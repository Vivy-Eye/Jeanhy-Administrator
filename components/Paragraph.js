import styles from '../styles/Paragraph.module.css'

export default function Paragraph({title, text}) {
  return (
    <div className={styles.paragraph}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  )
}