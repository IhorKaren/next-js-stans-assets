import { BsChevronUp } from "react-icons/bs";
import styles from "./goTopButton.module.scss";

const GoTopButton = ({ isBtnShow, scrollToTop }) => {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`${styles.button} ${!isBtnShow && styles.button_hide}`}
    >
      <BsChevronUp className={styles.icon} />
    </button>
  );
};

export default GoTopButton;
