import { useEffect } from "react";
import { motion } from "framer-motion";
import { BsXCircle } from "react-icons/bs";
import styles from "./modal.module.scss";

import animations from "../../resources/animations";

const Modal = ({ closeModal, isModalOpen, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const fixOverlayFlash = isModalOpen ? { opacity: 1 } : { opacity: 0 };

  return (
    <motion.div
      variants={animations.overlayModal}
      animate={isModalOpen ? "open" : "closed"}
      onClick={handleBackdropClick}
      className={styles.overlay}
      style={fixOverlayFlash}
    >
      <div className={styles.modal}>
        {children}
        <button type="button" onClick={closeModal} className={styles.close_btn}>
          <BsXCircle className={styles.icon} />
        </button>
      </div>
    </motion.div>
  );
};

export default Modal;
