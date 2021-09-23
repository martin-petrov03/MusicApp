import type { NextPage } from "next";
import { getSongs, getSong, getSongUrl } from "../../utils/db";
import SongDetailsInterface from "../../utils/interfaces/SongDetailsInterface";
import styles from "../../styles/Song.module.scss";

interface Props {
  song: SongDetailsInterface;
}

const Song: NextPage<Props> = (props) => {
  const song = props.song;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <h2>{song.name} &rarr;</h2>
          <p>Content</p>
          <img src={song.imageUrl} alt={song.name} />
          <audio controls src={song.songUrl} autoPlay>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <div className={styles.controlPanel}>
            <button className={styles.songBtn}>
              <svg viewBox="0 0 24 24">
                <path d="M10.42,20.656a3.77,3.77,0,0,1-2.233-.735l-6.641-4.87a3.784,3.784,0,0,1,0-6.1l6.641-4.87A3.783,3.783,0,0,1,14.2,6.853l3.782-2.774A3.784,3.784,0,0,1,24,7.13v9.74a3.784,3.784,0,0,1-6.021,3.051L14.2,17.147a3.79,3.79,0,0,1-3.777,3.509Zm2.787-6.475a1,1,0,0,1,.592.194l5.363,3.933A1.784,1.784,0,0,0,22,16.87V7.13a1.785,1.785,0,0,0-2.839-1.438L13.8,9.625a1,1,0,0,1-1.592-.806V7.13A1.784,1.784,0,0,0,9.369,5.692l-6.64,4.87a1.783,1.783,0,0,0,0,2.876l6.64,4.87a1.784,1.784,0,0,0,2.838-1.438V15.181a1,1,0,0,1,1-1Z" />
              </svg>
            </button>
            <button className={styles.songBtn}>
              <svg viewBox="0 0 24 24">
                <path d="M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0ZM8,20.5a1.5,1.5,0,0,1-3,0V3.5a1.5,1.5,0,0,1,3,0Z" />
                <path d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0ZM19,20.5a1.5,1.5,0,0,1-3,0V3.5a1.5,1.5,0,0,1,3,0Z" />
              </svg>
            </button>
            <button className={styles.songBtn}>
              <svg viewBox="0 0 24 24">
                <path d="M3.787,20.656A3.789,3.789,0,0,1,0,16.87V7.13A3.783,3.783,0,0,1,6.021,4.079L9.8,6.853a3.783,3.783,0,0,1,6.01-2.774l6.641,4.87a3.784,3.784,0,0,1,0,6.1l-6.641,4.87A3.783,3.783,0,0,1,9.8,17.147L6.021,19.921A3.775,3.775,0,0,1,3.787,20.656Zm7.006-6.475a1,1,0,0,1,1,1V16.87a1.784,1.784,0,0,0,2.838,1.438l6.64-4.87a1.783,1.783,0,0,0,0-2.876l-6.64-4.87A1.784,1.784,0,0,0,11.793,7.13V8.819a1,1,0,0,1-1.591.806L4.838,5.692A1.784,1.784,0,0,0,2,7.13v9.74a1.784,1.784,0,0,0,2.838,1.438L10.2,14.375A1,1,0,0,1,10.793,14.181Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;

interface IContext {
  params: { id: number };
}

export async function getStaticProps(context: IContext) {
  const id = Number(context.params.id);
  const songUrl = await getSongUrl();
  const song = await getSong(id);
  console.log(song);

  return {
    props: {
      song: { ...song, songUrl },
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const songs = await getSongs();
  const paths = songs.map((song) => ({
    params: { id: song.id.toString() },
  }));
  return { paths, fallback: 'blocking' };
}
