import type { NextPage } from "next";
import Head from "next/head";
import { Search } from "../components/index";
import { SongsList } from "../components/index";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
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
        <Search />
        <div>
          <h1>Trending Song</h1>
        </div>
      </div>
      <SongsList />
    </div>
  );
};

export default Home;
