import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import { getPlaylist, getSongsDetailsInPlaylist } from "../../utils/db";
import { MetaTags } from "../../components/index";
import PlaylistInterface from "../../utils/interfaces/Playlist";
import SongDetailsInterface from "../../utils/interfaces/SongDetails";
import styles from "./PlaylistDetails.module.scss";

interface IProps extends React.ClassAttributes<PlaylistInterface> {
  playlist: PlaylistInterface;
  songDetails: Array<SongDetailsInterface>;
}

const PlaylistDetails: NextPage<IProps> = (props: IProps) => {
  const [currentPlayingUrl, setCurrentPlayingUrl] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [songUrls, setSongUrls] = useState<Array<string>>([]);

  const playlist = props.playlist;
  const songDetails = props.songDetails;

  const playPlaylist = (isShuffle: boolean) => {
    const urls: Array<string> = [];

    songDetails.forEach((s) => {
      urls.push(s.songUrl);
    });
    setSongUrls(urls);
    setCurrentPlayingUrl(urls[index]);
  };

  const nextSong = (idx: number) => {
    setCurrentPlayingUrl(songUrls[idx + 1]);
    setIndex(idx + 1);
  };

  return (
    <div>
      <MetaTags title="Playlist Details" description="Playlist details page" />
      <div className={styles.container}>
        <div className={styles.player}>
          <audio
            controls
            src={currentPlayingUrl}
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
            <button onClick={() => playPlaylist(false)}>
              <svg
                id="Bold"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>79 play</title>
                <path d="M20.463,7.713l-9.1-6.677A5.317,5.317,0,0,0,2.9,5.323V18.677a5.311,5.311,0,0,0,8.46,4.287l9.105-6.677a5.315,5.315,0,0,0,0-8.574Zm-1.774,6.155-9.1,6.677A2.317,2.317,0,0,1,5.9,18.677V5.323a2.276,2.276,0,0,1,1.27-2.066A2.328,2.328,0,0,1,8.223,3a2.3,2.3,0,0,1,1.362.455l9.1,6.677a2.316,2.316,0,0,1,0,3.736Z" />
              </svg>
            </button>
            <button onClick={() => playPlaylist(true)}>
              <svg
                id="Bold"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>147 shuffle</title>
                <path d="M18.414,7.9V9.586a1,1,0,0,0,1.707.707l3.586-3.586a1,1,0,0,0,0-1.414L20.121,1.707a1,1,0,0,0-1.707.707v2.4c-3.35.732-5.6,2.781-7.51,4.911C8.718,7.316,6.08,5.021,1.83,4.586c-.046-.01-.311-.039-.33-.039a1.5,1.5,0,0,0-.131,2.994h0c3.464.3,5.5,2.159,7.549,4.458-2.046,2.3-4.087,4.166-7.552,4.462h0A1.5,1.5,0,0,0,1.5,19.453c.038,0,.073,0,.111-.008h0C6.84,19,9.649,15.753,12.148,12.86,14.059,10.65,15.792,8.7,18.414,7.9Z" />
                <path d="M20.121,13.707a1,1,0,0,0-1.707.707v1.7a9.186,9.186,0,0,1-3.452-2,1.466,1.466,0,0,0-2.062.157l-.025.028a1.49,1.49,0,0,0,.165,2.111A11.977,11.977,0,0,0,18.414,19.2v2.391a1,1,0,0,0,1.707.707l3.586-3.586a1,1,0,0,0,0-1.414Z" />
              </svg>
            </button>
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
