"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import Modal from "../Modal/modal";
import Form from "../Form/form";

import styles from "./vacancyItem.module.scss";

import animations from "../../resources/animations";

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
      document.body.style.overflow = "hidden";
      document.body.classList.add("no-scroll");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("no-scroll");
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
            <BsChevronDown
              className={`${styles.icon} ${
                isVacancyOpen ? styles.iconOpen : styles.iconClose
              }`}
            />
            <h3 className={styles.main_title}>{title}</h3>
          </button>
          <motion.button
            type="button"
            onClick={openModal}
            className={styles.modal_btn}
          >
            APPLY
          </motion.button>
        </div>

        <motion.ul
          initial={false}
          animate={isVacancyOpen ? "open" : "closed"}
          variants={animations.vacancyMenuVariants}
          className={styles.criterion_list}
        >
          <motion.li variants={animations.vacrncyMenuItemVariants}>
            <h4 className={styles.requirements_title}>Requirements</h4>
            {isVacancyOpen && (
              <ul className={styles.requirements_list}>
                {requirements.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
          <motion.li variants={animations.vacrncyMenuItemVariants}>
            <h4 className={styles.requirements_title}>Preferences</h4>
            {isVacancyOpen && (
              <ul className={styles.requirements_list}>
                {preferences.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
          <motion.li variants={animations.vacrncyMenuItemVariants}>
            <h4 className={styles.requirements_title}>Responsibilities</h4>
            {responsibilities && (
              <ul className={styles.requirements_list}>
                {preferences.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
        </motion.ul>
      </li>

      {isModalOpen && (
        <Modal closeModal={closeModal} isModalOpen={isModalOpen}>
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
