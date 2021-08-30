import Link from "next/link";
import { useState } from "react";
import styles from "../styles/SongsList.module.scss";

const SongsList = () => {
  interface Song {
    title: string;
    url: string;
  }

  let songs: Song[];
  let setSongs: any;
  [songs, setSongs] = useState([
    {
      title: "Nirvana ",
      url: "https://www.nme.com/wp-content/uploads/2020/10/GettyImages-86132259-696x442.jpg",
    },
    {
      title: "Nirvana ",
      url: "https://www.nme.com/wp-content/uploads/2020/10/GettyImages-86132259-696x442.jpg",
    },
    {
      title: "Nirvana ",
      url: "https://www.nme.com/wp-content/uploads/2020/10/GettyImages-86132259-696x442.jpg",
    },
    {
      title: "Nirvana ",
      url: "https://www.nme.com/wp-content/uploads/2020/10/GettyImages-86132259-696x442.jpg",
    },
  ]);

  return (
    <div className={styles.container}>
      {songs.map(function (s, idx) {
        return (
          <div className={styles.song} key={idx}>
            <Link href="/song">
              <img src={s.url} alt={s.title} />
            </Link>
            <p>{s.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SongsList;
