import Link from "next/link";
import { useState } from "react";
import styles from "../styles/SongsList.module.scss";

interface Song {
  title: string;
  url: string;
}

const SongsList = () => {
  const [songs, setSongs] = useState<Song[]>([
    {
      title: "Nirvana",
      url: "https://www.nme.com/wp-content/uploads/2020/10/GettyImages-86132259-696x442.jpg",
    },
    {
      title: "Queen Bohemian Rhapsody",
      url: "https://muzikercdn.com/uploads/products/3733/373332/thumb_d_gallery_base_c48ba6c3.jpg",
    },
    {
      title: "Eagles - Hotel California",
      url: "https://i.ytimg.com/vi/EqPtz5qN7HM/maxresdefault.jpg",
    },
    {
      title: "Nirvana",
      url: "https://www.nme.com/wp-content/uploads/2020/10/GettyImages-86132259-696x442.jpg",
    },
    {
      title: "Queen Bohemian Rhapsody",
      url: "https://muzikercdn.com/uploads/products/3733/373332/thumb_d_gallery_base_c48ba6c3.jpg",
    },
    {
      title: "Eagles - Hotel California",
      url: "https://i.ytimg.com/vi/EqPtz5qN7HM/maxresdefault.jpg",
    },
    {
      title: "Nirvana",
      url: "https://www.nme.com/wp-content/uploads/2020/10/GettyImages-86132259-696x442.jpg",
    },
    {
      title: "Queen Bohemian Rhapsody",
      url: "https://muzikercdn.com/uploads/products/3733/373332/thumb_d_gallery_base_c48ba6c3.jpg",
    },
    {
      title: "Eagles - Hotel California",
      url: "https://i.ytimg.com/vi/EqPtz5qN7HM/maxresdefault.jpg",
    },
    {
      title: "Eagles - Hotel California",
      url: "https://i.ytimg.com/vi/EqPtz5qN7HM/maxresdefault.jpg",
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
