import Image from "next/image";
import partnersList from "../../resources/partners";
import styles from "./partners.module.scss";

const Partners = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <h3 className={styles.title}>PARTNERS</h3>
        <ul className={styles.list}>
          {partnersList.map(({ id, img, alt }) => (
            <li key={id} className={styles.item}>
              <Image
                src={img}
                alt={alt}
                className={styles.image}
                placeholder="blur"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
