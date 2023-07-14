import Link from "next/link";
import Image from "next/image";

import styles from "./servicesLinks.module.scss";

import mobile from "../../public/ServicesLinks/mobile.png";
import game from "../../public/ServicesLinks/game.png";
import vr from "../../public/ServicesLinks/vr.png";
import sdk from "../../public/ServicesLinks/sdk.png";
import threeD from "../../public/ServicesLinks/3d.png";

const ServicesLinks = () => {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>SERVICES</h2>
        <ul className={styles.list}>
          <li>
            <Link href="/mobile-development" className={styles.link}>
              <Image src={mobile} alt="Smartphone" />
              <h3>Mobile Application Development</h3>
            </Link>
          </li>
          <li>
            <Link href="/game-development" className={styles.link}>
              <Image src={game} alt="Gamepad" />
              <h3>Game development outsourcing</h3>
            </Link>
          </li>
          <li>
            <Link href="/vr-development" className={styles.link}>
              <Image src={vr} alt="VR helmet" />
              <h3>vr app development</h3>
            </Link>
          </li>
          <li>
            <Link href="/sdk-development" className={styles.link}>
              <Image src={sdk} alt="Tools" />
              <h3>sdk development</h3>
            </Link>
          </li>
          <li>
            <Link href="/3d-modeling" className={styles.link}>
              <Image src={threeD} alt="Cube" />
              <h3>sdk 3d modeling </h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesLinks;
