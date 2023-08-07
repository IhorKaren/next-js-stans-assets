import { motion } from "framer-motion";
import styles from "./menuToggle.module.scss";

const MenuToggle = ({ isOpen, toggle, checkHeaderColor }) => {
  const iconColorChange = () => {
    if (isOpen || !checkHeaderColor) {
      return "#FFFFFF";
    }

    return "#194484";
  };

  const Path = ({ d, variants }) => (
    <motion.path
      strokeWidth="3"
      stroke={iconColorChange()}
      strokeLinecap="round"
      d={d}
      variants={variants}
    />
  );

  return (
    <button
      onClick={toggle}
      className={styles.button}
      aria-label="Navigation menu"
    >
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
          className="top"
        />
        <Path
          d={isOpen ? "" : "M 2 9.423 L 20 9.423"}
          opacity="1"
          className="middle"
        />
        <Path
          d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
          className="bottom"
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
