import Link from "next/link";
import Image from "next/image";
import styles from "./portfolioList.module.scss";

import data from "../../resources/productsData";

const PortfolioList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <ul className={styles.list}>
          {data.projectsData.map(({ id, img, path, title, mainText }) => {
            return (
              <li key={id} className={styles.item}>
                <div className={styles.image_thumb}>
                  <Image src={img} alt={title} />
                </div>
                <div className={styles.text_thumb}>
                  <h2 className={styles.title}>{title}</h2>
                  <p className={styles.text}>{mainText}</p>
                  <Link href={path} className={styles.button}>
                    READ MORE
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioList;
