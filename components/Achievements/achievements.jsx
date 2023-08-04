import Image from "next/image";

import styles from "./achievements.module.scss";

import achievements1 from "../../public/achievements/achievements1.webp";
import achievements2 from "../../public/achievements/achievements2.webp";
import achievements3 from "../../public/achievements/achievements3.webp";
import achievements4 from "../../public/achievements/achievements4.webp";

const Achievements = () => {
  return (
    <section className={styles.container}>
      <div>
        <h3 className={styles.achievements_title}>ACHIEVEMENTS</h3>
        <ul className={styles.achievements_list}>
          <li className={styles.achievements_list_item}>
            <Image
              src={achievements1}
              alt="puzzles"
              className={styles.image}
              placeholder="blur"
              loading="lazy"
            />
            <p>
              Collaboration with <strong>Moon Studios</strong> on WotW AAA Unity
              game
            </p>
          </li>
          <li className={styles.achievements_list_item}>
            <Image
              src={achievements2}
              alt="rocket"
              className={styles.image}
              placeholder="blur"
              loading="lazy"
            />
            <p className={styles.text}>
              <span className={styles.accent}>50+</span> successfully launched
              projects on the market
            </p>
          </li>
          <li className={styles.achievements_list_item}>
            <Image
              src={achievements3}
              alt="phone"
              width="214"
              className={styles.image_centered}
              placeholder="blur"
              loading="lazy"
            />
            <p className={styles.text}>
              Asset store publisher since
              <span className={styles.accent}> 2013</span>
            </p>
          </li>
          <li className={styles.achievements_list_item}>
            <Image
              src={achievements4}
              alt="box"
              width="260"
              className={styles.image_centered}
              placeholder="blur"
              loading="lazy"
            />
            <p className={styles.text}>
              Our products (packages) used by
              <span className={styles.accent}> 100k+</span> devs in
              <span className={styles.accent}> 5k+</span> commercial projects
              worldwide
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
