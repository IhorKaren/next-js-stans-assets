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
    <div onClick={handleBackdropClick} className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <button type="button" onClick={closeModal} className={styles.close_btn}>
          <BsXCircle className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
