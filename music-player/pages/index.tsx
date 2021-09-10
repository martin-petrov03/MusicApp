import type { NextPage } from "next";
import Head from "next/head";
import { SongsList } from "../components/index";
import { getSongs } from "../utils/db";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const getItems = async () => {
    const songs = await getSongs();
    console.log(songs);
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
        <div>
          <h1>Trending Song</h1>
        </div>
      </div>
      <button onClick={getItems}>+</button>
      <SongsList />
    </div>
  );
};

export default Home;
