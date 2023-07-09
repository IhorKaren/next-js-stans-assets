import styles from "./layout.module.scss";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
