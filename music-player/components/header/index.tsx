import { Search } from "../index";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className={styles.searchBox}>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
