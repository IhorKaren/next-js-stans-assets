import Image from "next/image";
import partnersList from "../../../resources/partners";
import styles from "./partners.module.scss";

const Partners = () => {
  return (
    <section className={styles.section}>
      <div className={styles.partners_background}></div>
      <div className={styles.partners_container}>
        <h3 className={styles.partners_title}>PARTNERS</h3>
        <ul className={styles.partners_list}>
          {partnersList.map(({ id, img, alt }) => (
            <li key={id} className={styles.partners_list_item}>
              <Image
                src={img}
                alt={alt}
                className={styles.partners_list_image}
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
