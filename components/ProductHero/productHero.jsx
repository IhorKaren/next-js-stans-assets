import Image from "next/image";
import Link from "next/link";
import {
  BsAndroid2,
  BsApple,
  BsUnity,
  BsSteam,
  BsNintendoSwitch,
  BsXbox,
  BsPlaystation,
} from "react-icons/bs";
import styles from "./productHero.module.scss";

const ProductHero = ({
  img,
  title,
  text,
  android = false,
  ios = false,
  unity = false,
  nintendo = false,
  xbox = false,
  steam = false,
  playstation = false,
}) => {
  return (
    <section className={styles.section}>
      <Image
        src={img}
        alt={title}
        placeholder="blur"
        className={styles.image}
      />
      <div className={styles.container}>
        <div className={styles.thumb}>
          <div className={styles.route}>
            <span>
              <Link href="/">Home</Link>
              <span> {">"} </span>
              <Link href="/portfolio">Portfolio</Link>
              <span> {">"} </span>
              <span>{title}</span>
            </span>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
        <div>
          <ul className={styles.list}>
            {nintendo && (
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  <BsNintendoSwitch className={styles.icon} />
                </a>
              </li>
            )}
            {playstation && (
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  <BsPlaystation className={styles.icon} />
                </a>
              </li>
            )}
            {steam && (
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  <BsSteam className={styles.icon} />
                </a>
              </li>
            )}
            {android && (
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  <BsAndroid2 fill="transparent" className={styles.icon} />
                </a>
              </li>
            )}
            {ios && (
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  <BsApple className={styles.icon} />
                </a>
              </li>
            )}
            {unity && (
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  <BsUnity className={styles.icon} />
                </a>
              </li>
            )}
            {xbox && (
              <li className={styles.item}>
                <a href="/" className={styles.link}>
                  <BsXbox className={styles.icon} />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
