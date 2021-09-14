import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Artists.module.scss";

interface Artist {
  id: number;
  name: string;
  url: string;
}

const ArtistsList = () => {
  const [artists, setArtists] = useState<Artist[]>([
    {
      id: 1,
      name: "Alice",
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    },
    {
      id: 2,
      name: "Lena",
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    },
    {
      id: 3,
      name: "Emi",
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    },
  ]);

  return (
    <div className={styles.artists}>
      {artists.map(function (s, idx) {
        const artistLink = `/artists/${s.id}`;
        return (
          <div className={styles.artist} key={idx}>
            <Link href={artistLink}>
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
