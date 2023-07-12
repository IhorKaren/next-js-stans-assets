import Link from "next/link";
import styles from "./technologies.module.scss";
import { BiLogoAndroid, BiLogoApple, BiLogoUnity } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className={styles.container}>
      <section>
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
              <Link href="/android" className={styles.link}>
                <BiLogoAndroid size="cssSize" className={styles.icon} />
              </Link>
            </li>
            <li className={styles.link_item}>
              <Link href="/ios" className={styles.link}>
                <BiLogoApple size="cssSize" className={styles.icon} />
              </Link>
            </li>
            <li className={styles.link_item}>
              <Link href="/unity" className={styles.link}>
                <BiLogoUnity size="cssSize" className={styles.icon} />
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
