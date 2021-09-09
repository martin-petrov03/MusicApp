import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Playlists.module.scss";

interface Playlist {
  title: string;
  url: string;
}

const Playlist = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([
    {
      title: "sda",
      url: "https://media.gq.com/photos/5ae3925b3fb87856d8a5cdf6/16:9/w_2560%2Cc_limit/Road-Trip-Playlist-GQ-April-2018-042718-3x2.png",
    },
    {
      title: "sda",
      url: "https://media.gq.com/photos/5ae3925b3fb87856d8a5cdf6/16:9/w_2560%2Cc_limit/Road-Trip-Playlist-GQ-April-2018-042718-3x2.png",
    },
    {
      title: "sda",
      url: "https://media.gq.com/photos/5ae3925b3fb87856d8a5cdf6/16:9/w_2560%2Cc_limit/Road-Trip-Playlist-GQ-April-2018-042718-3x2.png",
    },
  ]);
  return (
    <div className={styles.playlists}>
      {playlists.map(function (p, idx) {
        return (
          <div className={styles.playlist} key={idx}>
            <Link href="/playlist">
              <img src={p.url} alt={p.title} />
            </Link>
            <p>{p.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
