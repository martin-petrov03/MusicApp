import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getSongs, getSong, getSongUrl } from "../../utils/db";
import {
  MetaTags,
  PauseButton,
  RewindButton,
  ForwardButton,
} from "../../components/index";
import SongDetailsInterface from "../../utils/interfaces/SongDetails";
import styles from "./Song.module.scss";

interface Props {
  song: SongDetailsInterface;
}

const Song: NextPage<Props> = (props) => {
  const song = props.song;
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [songUrl, setSongUrl] = useState<string>(song.songUrl);

  function ToggleSongPlaying() {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setSongUrl("");
    } else {
      setSongUrl(song.songUrl);
    }
  }

  return (
    <div className={styles.container}>
      <MetaTags title="Song Details" description="Song details page" />
      <div className={styles.content}>
        <div className={styles.card}>
          <h2>{song.title}</h2>
          <img src={song.imageUrl} alt={song.title} />
          <audio controls src={songUrl} autoPlay>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <div className={styles.controlPanel}>
            <div className={styles.songBtn}>
              <RewindButton />
            </div>
            <div className={styles.songBtn} onClick={ToggleSongPlaying}>
              <PauseButton />
            </div>
            <div className={styles.songBtn}>
              <ForwardButton />
            </div>
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
  const song = await getSong(id);
  const songUrl = await getSongUrl(song?.title);

  return {
    props: {
      song: { ...song, songUrl },
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const songs = await getSongs();
  const paths = songs?.map((song) => ({
    params: { id: song.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}
