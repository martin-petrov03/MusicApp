import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Search.module.scss";

const Search = () => {
  const router = useRouter();
  const [searchedText, setSearchedText] = useState<string>("");

  const search = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { input: searchedText },
    });
  };

  return (
    <div className={styles.searchSection}>
      <form onSubmit={(e) => search(e)}>
        <label htmlFor="search-box">
          <input type="submit" className={styles.submit} />
          <div onClick={(e) => search(e)} className={styles.icon}>
            <svg
              id="Bold"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.561,21.439,18.9,16.776A10.54,10.54,0,1,0,16.776,18.9l4.663,4.663a1.5,1.5,0,0,0,2.122-2.122ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.508,7.508,0,0,1,10.5,18Z" />
            </svg>
          </div>
        </label>
        <input
          type="text"
          placeholder="Search"
          className={styles.search}
          id="search-box"
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
