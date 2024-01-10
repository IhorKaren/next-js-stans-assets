import Link from "next/link";
import Looking from "../components/Looking/looking";
import Contacts from "../components/Contacts/contacts";

import styles from "./not-found.module.scss";

const ErrorPage = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.background}></div>
        <div className={styles.container}>
          <div className={styles.thumb}>
            <h1 className={styles.title}>It looks like you are lost</h1>
            <Link href="/" className={styles.link}>
              Return to homepage
            </Link>
          </div>
        </div>
      </section>
      <Looking />
      <Contacts />
    </>
  );
};

export default ErrorPage;
