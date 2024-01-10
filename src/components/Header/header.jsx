import styles from "./header.module.scss";
import Navbar from "../Navbar/navbar";

const Header = ({ isScrolled, whiteHeaderColor }) => {
  return (
    <header
      className={`${styles.header} ${whiteHeaderColor && styles.header_white} ${
        isScrolled && styles.header_shadow
      }`}
    >
      <Navbar isScrolled={isScrolled} whiteHeaderColor={whiteHeaderColor} />
    </header>
  );
};

export default Header;
