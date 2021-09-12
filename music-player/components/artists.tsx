import Link from "next/link";
import { useState } from "react";
import styles from "../styles/ArtistsList.module.scss";

interface Artist {
  name: string;
  url: string;
}

const ArtistsList = () => {
  const [artists, setArtists] = useState<Artist[]>([
    {
      name: "sda",
      url: "https://media.gq.com/photos/5ae3925b3fb87856d8a5cdf6/16:9/w_2560%2Cc_limit/Road-Trip-Playlist-GQ-April-2018-042718-3x2.png",
    },
    {
      name: "sda",
      url: "https://media.gq.com/photos/5ae3925b3fb87856d8a5cdf6/16:9/w_2560%2Cc_limit/Road-Trip-Playlist-GQ-April-2018-042718-3x2.png",
    },
    {
      name: "sda",
      url: "https://media.gq.com/photos/5ae3925b3fb87856d8a5cdf6/16:9/w_2560%2Cc_limit/Road-Trip-Playlist-GQ-April-2018-042718-3x2.png",
    },
  ]);

  return (
    <div className={styles.container}>
      {artists.map(function (s, idx) {
        return (
          <div className={styles.song} key={idx}>
            <Link href="/artist">
              <img src={s.url} alt={s.name} />
            </Link>
            <p>{s.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistsList;
