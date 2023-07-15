"use client";
import { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

import styles from "./faqItem.module.scss";

const FaqItem = ({ title, text }) => {
  const [isFaqOpen, setFaqOpen] = useState(false);

  const toggleFaq = () => {
    setFaqOpen(!isFaqOpen);
  };

  return (
    <li className={styles.item}>
      <button type="button" onClick={toggleFaq} className={styles.button}>
        <BiChevronDown
          size="cssSize"
          className={`${styles.icon} ${
            isFaqOpen ? styles.iconOpen : styles.iconClose
          }`}
        />
        <h5 className={styles.title}>{title}</h5>
      </button>
      {isFaqOpen && <p className={styles.text}>{text}</p>}
    </li>
  );
};

export default FaqItem;
