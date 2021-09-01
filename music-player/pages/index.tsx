import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Navigation } from "../components/index";
import { SongsList } from "../components/index";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [searchedText, setSearchedText] = useState<string>("");

  const search = () => {
    console.log(searchedText);
    setSearchedText("");
  };

  return (
    <div>
      <Head>
        <title>Music Player</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Martin Petrov" />
        <meta
          name="description"
          content="Free Web tutorials for HTML and CSS"
        />
        <meta name="keywords" content="Next, Music-Player, music-player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
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
        <div>
          <Navigation />
          <h1>Trending Song</h1>
        </div>
      </div>
      <SongsList />
    </div>
  );
};

export default Home;
