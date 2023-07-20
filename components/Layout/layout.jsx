import styles from "./layout.module.scss";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
