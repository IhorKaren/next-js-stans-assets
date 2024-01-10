import Image from "next/image";
import Link from "next/link";
import styles from "./heroBlock.module.scss";

const HeroBlock = ({
  title,
  text,
  img,
  alt,
  lastRoute = "Home",
  routeName,
  children,
}) => {
  const toLowerCaseRoute = lastRoute.split(" ").join("-").toLowerCase();

  return (
    <section className={styles.section}>
      <div className={styles.hero_block_container}>
        <div className={styles.hero_block_thumb}>
          <span className={styles.hero_block_navigate}>
            <Link href={lastRoute === "Home" ? "/" : `/${toLowerCaseRoute}`}>
              {lastRoute}
            </Link>
            {" > "}
            {routeName ? routeName : title}
          </span>
          <h1 className={styles.hero_block_title}>{title}</h1>
          {text && <p className={styles.hero_block_text}>{text}</p>}
        </div>
        {img && (
          <div className={styles.hero_block_image}>
            <Image src={img} alt={alt} placeholder="blur" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroBlock;
