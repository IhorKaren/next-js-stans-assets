import Link from "next/link";

import styles from "./looking.module.scss";

const Looking = () => {
  return (
    <div className={styles.looking_thumb}>
      <section className={styles.looking_container}>
        <h3 className={styles.looking_title}>
          LOOKING FOR A PARTNER IN BUILDING A SOLUTION?
        </h3>
        <p className={styles.looking_text}>
          We are ready to discuss your project requirements
        </p>
        <Link href="contacts" className={styles.looking_button}>
          LET’S TALK
        </Link>
      </section>
    </div>
  );
};

export default Looking;
