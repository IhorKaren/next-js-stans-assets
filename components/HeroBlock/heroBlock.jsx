import Image from "next/image";
import Link from "next/link";
import styles from "./heroBlock.module.scss";

const HeroBlock = ({ title, img, alt, route }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
          <span className={styles.navigate}>
            <Link href="/">Home</Link> {">"} {route ? route : title}
          </span>
          <h1 className={styles.title}>{title}</h1>
        </div>
        {img && (
          <div>
            <Image src={img} alt={alt} placeholder="blur" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBlock;
