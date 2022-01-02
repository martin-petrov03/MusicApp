import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { getSongs, getSongsCount, getSong, getSongUrl } from "../../utils/db";
import {
  MetaTags,
  PauseButton,
  PlayButton,
  RewindButton,
  ForwardButton,
} from "../../components/index";
import SongDetailsInterface from "../../utils/interfaces/SongDetails";
import styles from "./Song.module.scss";

interface Props {
  song: SongDetailsInterface;
}

const Song: NextPage<Props> = (props) => {
  const router = useRouter();
  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>;
  const song = props.song;
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [songUrl, setSongUrl] = useState<string>("");

  useEffect(() => {
    setSongUrl(song.songUrl);
  });

  function playPrevious() {
    if (song.id > 1) {
      setSongUrl("");
      router.push(`/songs/${song.id - 1}`);
    }
  }

  function toggleSongPlaying() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  async function playNext() {
    const songsCount = await getSongsCount();
    if (song.id < songsCount) {
      setSongUrl("");
      router.push(`/songs/${song.id + 1}`);
    }
  }

  return (
    <div className={styles.container}>
      <MetaTags title="Song Details" description="Song details page" />
      <div className={styles.content}>
        <div className={styles.card}>
          <h2>{song.title}</h2>
          <img src={song.imageUrl} alt={song.title} />
          <audio
            controls
            src={songUrl}
            ref={audioRef}
            onEnded={() => playNext()}
            autoPlay
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <div className={styles.controlPanel}>
            <div className={styles.songBtn} onClick={playPrevious}>
              <RewindButton />
            </div>
            {isPlaying ? (
              <div className={styles.songBtn} onClick={toggleSongPlaying}>
                <PauseButton />
              </div>
            ) : (
              <div className={styles.songBtn} onClick={toggleSongPlaying}>
                <PlayButton />
              </div>
            )}
            <div className={styles.songBtn} onClick={playNext}>
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
