import { useEffect } from "react";
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
    <div onClick={handleBackdropClick} className={styles.overlay}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
