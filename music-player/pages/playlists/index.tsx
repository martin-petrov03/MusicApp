import type { NextPage } from "next";
import Head from "next/head";
import { Playlist } from "../../components/index";
import styles from "../../styles/Playlists.module.scss";

const Playlists: NextPage = () => {
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
          <h1>Trending Playlists</h1>
        </div>
      </div>
      <Playlist />
    </div>
  );
};

export default Playlists;
