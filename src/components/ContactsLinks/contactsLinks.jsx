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
    <ul
      className={
        columns ? styles.contacts_list_columns : styles.contacts_list_default
      }
    >
      <li>
        <a href="#" className={styles.contacts_link}>
          <BsGeoAltFill className={styles.contacts_icon} />
          <address className={styles.contacts_address}>
            Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188
          </address>
        </a>
      </li>
      <li>
        <a href="#" className={styles.contacts_link}>
          <BsTelephone className={styles.contacts_icon} />
          +38 (093) 345 56 76
        </a>
      </li>
      <li>
        <a href="#" className={styles.contacts_link}>
          <BsWhatsapp className={styles.contacts_icon} />
          +38 (093) 345 56 77
        </a>
      </li>
      <li>
        <a href="#" className={styles.contacts_link}>
          <BsSkype className={styles.contacts_icon} />
          Stanassets
        </a>
      </li>
      <li>
        <a href="#" className={styles.contacts_link}>
          <BsEnvelope className={styles.contacts_icon} />
          stanAssets@gmail.com
        </a>
      </li>
      <li>
        <a href="#" className={styles.contacts_link}>
          <BsFacebook className={styles.contacts_icon} />
          facebook.com/Stanassets
        </a>
      </li>
    </ul>
  );
};

export default ContactsLinks;
