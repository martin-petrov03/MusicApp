import Link from "next/link";
import { useState } from "react";
import ArtistsInterface from "../../utils/interfaces/Artists";
import styles from "./ArtistsList.module.scss";

interface Props extends React.ClassAttributes<any> {
  artists: ArtistsInterface[];
}

const ArtistsList = (artists: Props) => {
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
