import Meta from "./Meta/Meta";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "../../styles/Main.module.scss";

export default function MainTemplate({ children, keywords, headTitle }) {
  return (
    <>
      <Meta title={headTitle} keywords={keywords} />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
