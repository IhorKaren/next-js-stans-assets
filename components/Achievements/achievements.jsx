"use client";
import LazyLoad from "react-lazy-load";
import styles from "./achievements.module.scss";

const Achievements = () => {
  return (
    <section className={styles.container}>
      <div>
        <h3 className={styles.title}>ACHIEVEMENTS</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <LazyLoad height={290} offset={150}>
              <div className={styles.decoration}></div>
            </LazyLoad>
            <p>
              Collaboration with <strong>Moon Studios</strong> on WotW AAA Unity
              game
            </p>
          </li>
          <li className={styles.item}>
            <LazyLoad height={290} offset={150}>
              <div className={styles.decoration}></div>
            </LazyLoad>
            <p className={styles.text}>
              <span className={styles.accent}>50+</span> successfully launched
              projects on the market
            </p>
          </li>
          <li className={styles.item}>
            <LazyLoad height={290} offset={150}>
              <div className={styles.decoration}></div>
            </LazyLoad>
            <p className={styles.text}>
              Asset store publisher since
              <span className={styles.accent}> 2013</span>
            </p>
          </li>
          <li className={styles.item}>
            <LazyLoad height={290} offset={150}>
              <div className={styles.decoration}></div>
            </LazyLoad>
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
