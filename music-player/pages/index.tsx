import type { NextPage } from "next";
import Head from "next/head";
import { SongsList } from "../components/index";
import { getSongs, getSongUrl } from "../utils/db";
import SongInterface from "../utils/interfaces/Song";
import styles from "../styles/Home.module.scss";

interface Props {
  songs: SongInterface[];
  downloadUrl: string;
}

const Home: NextPage<Props> = (props) => {
  const songs = props.songs;
  const downloadUrl = props.downloadUrl;

  return (
    <div>
      <Head>
        <title>Music Player</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Martin Petrov" />
        <meta name="description" content="Music Player" />
        <meta name="keywords" content="Next, Music-Player, music-player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div>
          <h1>Trending Songs</h1>
        </div>
      </div>
      <audio controls src={downloadUrl} autoPlay>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <SongsList songs={props.songs} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const songs = await getSongs();
  const songUrl = await getSongUrl();

  return {
    props: {
      songs: songs.map((song) => ({
        name: song.name,
        url: song.url,
      })),
      downloadUrl: songUrl,
    },
    revalidate: 5,
  };
}
