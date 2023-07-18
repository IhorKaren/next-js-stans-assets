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
      <div className={styles.container}>
        <div className={styles.thumb}>
          <span className={styles.navigate}>
            <Link href={lastRoute ? `/${toLowerCaseRoute}` : "/"}>
              {lastRoute}
            </Link>
            {" > "}
            {routeName ? routeName : title}
          </span>
          <h1 className={styles.title}>{title}</h1>
          {text && <p className={styles.text}>{text}</p>}
        </div>
        {img && (
          <div>
            <Image src={img} alt={alt} placeholder="blur" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroBlock;
