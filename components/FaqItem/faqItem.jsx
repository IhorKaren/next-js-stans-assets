"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

import styles from "./faqItem.module.scss";

import animations from "../../resources/animations";

const FaqItem = ({ title, text }) => {
  const [isFaqOpen, setFaqOpen] = useState(false);

  const toggleFaq = () => {
    setFaqOpen(!isFaqOpen);
  };

  return (
    <li className={styles.faq_item}>
      <button type="button" onClick={toggleFaq} className={styles.faq_item_button}>
        <BsChevronDown
          className={`${styles.faq_item_icon} ${
            isFaqOpen ? styles.iconOpen : styles.iconClose
          }`}
        />
        <h5 className={styles.faq_item_title}>{title}</h5>
      </button>
      <motion.div
        variants={animations.faqVariants}
        initial="hidden"
        animate={isFaqOpen ? "visible" : "hidden"}
      >
        <p>{text}</p>
      </motion.div>
    </li>
  );
};

export default FaqItem;
