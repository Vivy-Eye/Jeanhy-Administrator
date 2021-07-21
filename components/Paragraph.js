import Image from "next/image";
import styles from "../styles/Paragraph.module.scss";

export default function Paragraph({ children, title, imageUrl }) {
  return (
    <div className={styles.paragraph}>
      {title ? <h2 className={styles.title}>{title}</h2> : false}

      {imageUrl ? (
        <div className={styles.image}>
          <Image src={imageUrl} alt=" - " width={72} height={16} />
        </div>
      ) : (
        false
      )}
      
      {children ? <div className={styles.body}>{children}</div> : false}
    </div>
  );
}
