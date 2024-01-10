import Image from "next/image";
import { BsUnity, BsGithub } from "react-icons/bs";
import plugins from "../../../resources/pluginsList";

import styles from "./pluginsList.module.scss";

const PluginsList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <ul className={styles.list}>
          {plugins.map(({ id, img, title, text }) => {
            return (
              <li key={id} className={styles.item}>
                <div className={styles.image_thumb}>
                  <Image src={img} alt={title} />
                  <div className={styles.overlay}>
                    <ul className={styles.links_thumb}>
                      <li className={styles.links_thumb_item}>
                        <a href="#" className={styles.link}>
                          <BsGithub className={styles.icon} />
                        </a>
                      </li>
                      <li className={styles.links_thumb_item}>
                        <a href="#" className={styles.link}>
                          <BsUnity className={styles.icon} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.text_thumb}>
                  <h2 className={styles.title}>{title}</h2>
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

export default PluginsList;
