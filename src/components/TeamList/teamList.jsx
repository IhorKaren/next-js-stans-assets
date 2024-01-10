import Link from "next/link";
import Image from "next/image";

import styles from "./teamList.module.scss";

const TeamList = ({ team }) => {
  return (
    <section>
      <div className={styles.container}>
        <span className={styles.route}>
          <Link href="/about-us">About us</Link> {">"} Team
        </span>
        <h1 className={styles.title}>Core team</h1>
        <ul className={styles.list}>
          {team.map(({ id, img, name, text }) => {
            return (
              <li key={id} className={styles.item}>
                <div>
                  <Image src={img} alt={name} />
                </div>
                <div className={styles.text_thumb}>
                  <h2 className={styles.name}>{name}</h2>
                  <p>{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TeamList;
