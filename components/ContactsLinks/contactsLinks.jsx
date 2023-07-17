import {
  BiMap,
  BiPhone,
  BiLogoWhatsapp,
  BiLogoSkype,
  BiEnvelope,
  BiLogoFacebookCircle,
} from "react-icons/bi";

import styles from "./contactsLinks.module.scss";

const ContactsLinks = ({ columns }) => {
  return (
    <ul className={columns ? styles.list_columns : styles.list_default}>
      <li>
        <a href="#" className={styles.link}>
          <BiMap size="cssSize" className={styles.icon} />
          <address className={styles.address}>
            Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188
          </address>
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BiPhone size="cssSize" className={styles.icon} />
          +38 (093) 345 56 76
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BiLogoWhatsapp size="cssSize" className={styles.icon} />
          +38 (093) 345 56 77
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BiLogoSkype size="cssSize" className={styles.icon} />
          Stanassets
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BiEnvelope size="cssSize" className={styles.icon} />
          stanAssets@gmail.com
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BiLogoFacebookCircle size="cssSize" className={styles.icon} />
          facebook.com/Stanassets
        </a>
      </li>
    </ul>
  );
};

export default ContactsLinks;
