import styles from "./header.module.scss";
import Navbar from "../Navbar/navbar";

const Header = ({ isScrolled, isHeaderWhite }) => {
  return (
    <header
      className={`${styles.header} ${isHeaderWhite && styles.header_white} ${
        isScrolled && styles.header_shadow
      }`}
    >
      <Navbar isScrolled={isScrolled} isHeaderWhite={isHeaderWhite} />
    </header>
  );
};

export default Header;
