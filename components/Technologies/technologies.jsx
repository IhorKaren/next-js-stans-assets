import Link from "next/link";
import styles from "./technologies.module.scss";

import { BsAndroid2, BsApple, BsUnity } from "react-icons/bs";

const Technologies = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.thumb}>
          <h3 className={styles.title}>TECHNOLOGIES</h3>
          <p className={styles.text}>
            <span className={styles.accent}>Stan’s </span>
            <span className={styles.accent}>Assets</span> is a team of
            developers that are committed to developing <br />
            high quality and engaging entertainment software
          </p>
          <ul className={styles.link_list}>
            <li className={styles.link_item}>
              <Link
                href="/android"
                aria-label="Navigate to android page"
                className={styles.link}
              >
                <BsAndroid2 className={styles.icon} />
              </Link>
            </li>
            <li className={styles.link_item}>
              <Link
                href="/ios"
                aria-label="Navigate to ios page"
                className={styles.link}
              >
                <BsApple className={styles.icon} />
              </Link>
            </li>
            <li className={styles.link_item}>
              <Link
                href="/unity"
                aria-label="Navigate to unity page"
                className={styles.link}
              >
                <BsUnity className={styles.icon} />
              </Link>
            </li>
          </ul>
          <p>We build apps for the leading platforms.</p>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
