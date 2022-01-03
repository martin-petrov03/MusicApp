import type { NextPage } from "next";
import { useState, useRef } from "react";
import Link from "next/link";
import { getPlaylist, getSongsDetailsInPlaylist } from "../../utils/db";
import {
  MetaTags,
  PauseButton,
  ShuffleButton,
  PlayButton,
  RewindButton,
  ForwardButton,
} from "../../components/index";
import PlaylistInterface from "../../utils/interfaces/Playlist";
import SongDetailsInterface from "../../utils/interfaces/SongDetails";
import styles from "./PlaylistDetails.module.scss";

interface IProps extends React.ClassAttributes<PlaylistInterface> {
  playlist: PlaylistInterface;
  songDetails: Array<SongDetailsInterface>;
}

const PlaylistDetails: NextPage<IProps> = (props: IProps) => {
  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>;
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentPlayingUrl, setCurrentPlayingUrl] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [songUrls, setSongUrls] = useState<Array<string>>([]);

  const playlist = props.playlist;
  let songDetails = props.songDetails;

  const startPlaylist = (isShuffle: boolean) => {
    if (isShuffle) songDetails = songDetails.sort(() => 0.5 - Math.random());
    setIsStarted(true);
    const urls: Array<string> = [];

    songDetails.forEach((s) => {
      urls.push(s.songUrl);
    });
    setSongUrls(urls);
    setCurrentPlayingUrl(urls[index]);
  };

  const previousSong = (idx: number) => {
    const previousSongIndex = idx - 1;

    if (previousSongIndex >= 0) {
      setCurrentPlayingUrl(songUrls[idx - 1]);
      setIndex(idx - 1);
    }
  };

  const nextSong = (idx: number) => {
    const nextSongIndex = idx + 1;

    if (nextSongIndex >= songUrls.length) {
      setCurrentPlayingUrl(songUrls[0]);
      setIndex(0);
    } else {
      setCurrentPlayingUrl(songUrls[idx + 1]);
      setIndex(idx + 1);
    }
  };

  const toggleSongPlaying = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <MetaTags title="Playlist Details" description="Playlist details page" />
      <div className={styles.container}>
        <div className={styles.player}>
          <audio
            controls
            src={currentPlayingUrl}
            ref={audioRef}
            onEnded={() => nextSong(index)}
            autoPlay
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>

        <div key={playlist.id}>
          <h2>{playlist.title}</h2>
          <img src={playlist.imageUrl} alt={playlist.title} />

          <div className={styles.buttonSection}>
            <div>
              {isStarted ? (
                <div className={styles.buttonSection}>
                  <div onClick={() => previousSong(index)}>
                    <RewindButton />
                  </div>
                  {isPlaying ? (
                    <div onClick={() => toggleSongPlaying()}>
                      <PauseButton />
                    </div>
                  ) : (
                    <div onClick={() => toggleSongPlaying()}>
                      <PlayButton />
                    </div>
                  )}
                  <div onClick={() => nextSong(index)}>
                    <ForwardButton />
                  </div>
                </div>
              ) : (
                <div className={styles.buttonSection}>
                  <div onClick={() => startPlaylist(false)}>
                    <PlayButton />
                  </div>
                  <div onClick={() => startPlaylist(true)}>
                    <ShuffleButton />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.row}>
              <li key="-2">
                <b>#</b>
              </li>
              <li key="-1">
                <b>Title</b>
              </li>
              <li key="0">
                <b>Duration</b>
              </li>
            </div>
            <ol>
              {songDetails.map((song, idx) => {
                const classStr = idx === index ? styles.playing : "";
                return (
                  <Link href={`/songs/${song.id}`} key={song.id}>
                    <div className={classStr}>
                      <div className={styles.row}>
                        <div>
                          <p>{idx + 1}</p>
                        </div>
                        <div className={styles.group}>
                          <img src={song.imageUrl} alt={song.title} />
                          <p>{song.title}</p>
                        </div>
                        <div>
                          <p>{song.duration}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IContext {
  params: { id: string };
}

export async function getServerSideProps(context: IContext) {
  const id = context.params.id;
  const playlist = await getPlaylist(id);
  const songDetails = await getSongsDetailsInPlaylist(playlist?.id);
  const songDetailsArray = Object.entries(songDetails).map((e) => e[1]);

  return {
    props: {
      playlist,
      songDetails: songDetailsArray,
    },
  };
}

export default PlaylistDetails;
