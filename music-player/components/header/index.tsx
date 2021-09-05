import { Search } from "../index";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://thumbs.dreamstime.com/z/music-concept-vector-linear-icon-isolated-transparent-backgro-background-transparency-outline-style-130079162.jpg"
            alt="logo"
          />
        </div>
        <div className={styles.searchBox}>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
