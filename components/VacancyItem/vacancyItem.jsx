"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import Modal from "../Modal/modal";
import Form from "../Form/form";

import styles from "./vacancyItem.module.scss";

//Animation
const containerVariants = {
  hidden: {
    opacity: 0,
    maxHeight: 0,
    overflow: "hidden",
  },
  visible: {
    opacity: 1,
    maxHeight: "100vh",
    overflow: "visible",
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    maxHeight: 0,
    overflow: "hidden",
    transition: {
      duration: 1,
    },
  },
};
//

const VacancyItem = ({
  title,
  requirements,
  preferences,
  responsibilities,
}) => {
  const [isVacancyOpen, setVacancyOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isModalOpen]);

  const toggleVacancy = () => {
    setVacancyOpen(!isVacancyOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <li className={styles.item}>
        <div className={styles.buttons_thumb}>
          <button
            type="button"
            onClick={toggleVacancy}
            className={styles.button}
          >
            <BiChevronDown
              size="cssSize"
              className={`${styles.icon} ${
                isVacancyOpen ? styles.iconOpen : styles.iconClose
              }`}
            />
            <h3 className={styles.main_title}>{title}</h3>
          </button>
          <button
            type="button"
            onClick={openModal}
            className={styles.modal_btn}
          >
            APPLY
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVacancyOpen ? "visible" : "hidden"}
        >
          <ul className={styles.criterion_list}>
            <li>
              <h4 className={styles.requirements_title}>Requirements</h4>
              <ul className={styles.requirements_list}>
                {requirements.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <h4 className={styles.requirements_title}>Preferences</h4>
              <ul className={styles.requirements_list}>
                {preferences.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <h4 className={styles.requirements_title}>Responsibilities</h4>
              <ul className={styles.requirements_list}>
                {responsibilities.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </motion.div>
      </li>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <Form
            btnText="SUBMIT"
            title="join the team"
            text={title}
            optionalPortfolio
            optionalFile
          />
        </Modal>
      )}
    </>
  );
};

export default VacancyItem;
