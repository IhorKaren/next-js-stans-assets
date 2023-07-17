import {
  BsGeoAltFill,
  BsTelephone,
  BsWhatsapp,
  BsSkype,
  BsEnvelope,
  BsFacebook,
} from "react-icons/bs";

import styles from "./contactsLinks.module.scss";

const ContactsLinks = ({ columns }) => {
  return (
    <ul className={columns ? styles.list_columns : styles.list_default}>
      <li>
        <a href="#" className={styles.link}>
          <BsGeoAltFill className={styles.icon} />
          <address className={styles.address}>
            Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188
          </address>
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BsTelephone className={styles.icon} />
          +38 (093) 345 56 76
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BsWhatsapp className={styles.icon} />
          +38 (093) 345 56 77
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BsSkype className={styles.icon} />
          Stanassets
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BsEnvelope className={styles.icon} />
          stanAssets@gmail.com
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <BsFacebook className={styles.icon} />
          facebook.com/Stanassets
        </a>
      </li>
    </ul>
  );
};

export default ContactsLinks;
