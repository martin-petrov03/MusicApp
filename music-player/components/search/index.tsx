import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Search.module.scss";

const Search = () => {
  const router = useRouter();
  const [searchedText, setSearchedText] = useState<string>("");

  const search = () => {
    router.push({
      pathname: "/search",
      query: { input: searchedText },
    });
  };

  return (
    <div className={styles.searchSection}>
      <div className={styles.icon} onClick={search}>
        <svg id="Outline">
          <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search"
        className={styles.search}
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
      />
    </div>
  );
};

export default Search;
