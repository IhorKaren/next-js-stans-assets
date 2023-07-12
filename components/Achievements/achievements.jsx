import Image from "next/image";

import styles from "./achievements.module.scss";

import achievements1 from "../../public/achievements/achievements1.png";
import achievements2 from "../../public/achievements/achievements2.png";
import achievements3 from "../../public/achievements/achievements3.png";
import achievements4 from "../../public/achievements/achievements4.png";

const Achievements = () => {
  return (
    <section className={styles.container}>
      <div>
        <h3 className={styles.title}>ACHIEVEMENTS</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image src={achievements1} alt="puzzles" className={styles.image} />
            <p>
              Collaboration with <strong>Moon Studios</strong> on WotW AAA Unity
              game
            </p>
          </li>
          <li className={styles.item}>
            <Image src={achievements2} alt="rocket" className={styles.image} />
            <p className={styles.text}>
              <span className={styles.accent}>50+</span> successfully launched
              projects on the market
            </p>
          </li>
          <li className={styles.item}>
            <Image
              src={achievements3}
              alt="phone"
              width="204"
              className={styles.image_centered}
            />
            <p className={styles.text}>
              Asset store publisher since{" "}
              <span className={styles.accent}>2013</span>
            </p>
          </li>
          <li className={styles.item}>
            <Image
              src={achievements4}
              alt="box"
              width="210"
              className={styles.image_centered}
            />
            <p className={styles.text}>
              Our products (packages) used by{" "}
              <span className={styles.accent}>100k+</span> devs in
              <span className={styles.accent}>5k+</span> commercial projects
              worldwide
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;