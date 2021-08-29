import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Navigation } from "../components/index";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [songs, setSongs] = useState([]);
  const songsArr = [
    { title: "dsadad", url: "dasdad" },
    { title: "dsadad", url: "dasdad" },
    { title: "dsadad", url: "dasdad" },
  ];
  setSongs(songsArr);

  return (
    <div className={styles.container}>
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
      <Navigation />
      <div>
        <h2>Trending Song</h2>
        {songs.map(function (s, idx) {
          return (
            <div>
              <img src={s.url} alt={s.title} />
              <p>{s.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
