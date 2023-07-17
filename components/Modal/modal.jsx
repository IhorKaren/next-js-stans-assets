import { useEffect } from "react";
import { motion } from "framer-motion";
import { BsXCircle } from "react-icons/bs";
import styles from "./modal.module.scss";

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleBackdropClick}
      className={styles.overlay}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        close={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.2,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={styles.modal}
      >
        {children}
        <button type="button" onClick={closeModal} className={styles.close_btn}>
          <BsXCircle className={styles.icon} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
