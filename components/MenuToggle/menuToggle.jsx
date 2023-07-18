import { motion } from "framer-motion";
import styles from "./menuToggle.module.scss";

const Path = ({ d, variants, className }) => (
  <motion.path
    strokeWidth="3"
    stroke="#ffffff"
    strokeLinecap="round"
    d={d}
    variants={variants}
    className={className}
  />
);

const MenuToggle = ({ isOpen, toggle }) => {
  const menuVariants = {
    closed: {
      top: { d: "M 2 2.5 L 20 2.5" },
      middle: { opacity: 1 },
      bottom: { d: "M 2 16.346 L 20 16.346" },
    },
    open: {
      top: { d: "M 3 16.5 L 17 2.5" },
      middle: { opacity: 0 },
      bottom: { d: "M 3 2.5 L 17 16.346" },
    },
    transition: {
      duration: 0.3,
      ease: [0.08, 0.65, 0.53, 0.96],
    },
  };

  return (
    <button
      onClick={toggle}
      className={styles.button}
      aria-label="Navigation menu"
    >
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
          variants={menuVariants}
          transition="transition"
          className="top"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          d={isOpen ? "" : "M 2 9.423 L 20 9.423"}
          opacity="1"
          className="middle"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
          variants={menuVariants}
          transition="transition"
          className="bottom"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
