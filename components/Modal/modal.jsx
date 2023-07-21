import { useEffect } from "react";
import { motion } from "framer-motion";
import { BsXCircle } from "react-icons/bs";
import styles from "./modal.module.scss";

const Modal = ({ closeModal, children }) => {
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
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onClick={handleBackdropClick}
      className={styles.overlay}
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
