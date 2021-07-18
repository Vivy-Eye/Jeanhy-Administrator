import Meta from "./Meta/Meta";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function MainTemplate({ children, keywords, headTitle }) {
  return (
    <>
      <Meta title={headTitle} keywords={keywords} />
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
