import type { NextPage } from "next";
import Head from "next/head";
import { SongsList } from "../components/index";
import { getSongs } from "../utils/db";
import SongInterface from "../utils/interfaces/Song";
import styles from "../styles/Home.module.scss";

interface Props {
  songs: SongInterface[];
}

const Home: NextPage<Props> = (props) => {
  const songs = props.songs;

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
          <h1>Trending Songs</h1>
        </div>
      </div>
      <SongsList songs={props.songs} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const songs = await getSongs();

  return {
    props: {
      songs: songs.map((song) => ({
        name: song.name,
        url: song.url,
      })),
    },
    revalidate: 1,
  };
}
