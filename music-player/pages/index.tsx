import type { NextPage } from "next";
import { MetaTags, SongsList } from "../components/index";
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
      <MetaTags title="Home Page" description="Music Player Home Page" />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Trending Songs</h1>
        </div>
        <SongsList songs={songs} />
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const songs = await getSongs();

  return {
    props: {
      songs: songs?.map((song) => ({
        id: song.id,
        title: song.title,
        imageUrl: song.imageUrl,
        artistId: song.artistId,
      })),
    },
    revalidate: 5,
  };
}
