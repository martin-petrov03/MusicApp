import Link from "next/link";
import SearchItemInterface from "../../utils/interfaces/SearchItem";
import styles from "./FoundItems.module.scss";

interface IProps {
  items: SearchItemInterface;
}

const FoundItemsList = ({ items }: IProps) => {
  return (
    <div className={styles.items}>
      <h4>Songs</h4>
      {items.songs.map(function (s) {
        const songLink = `/songs/${s.id}`;
        return (
          <Link href={songLink} key={s.id}>
            <img src={s.imageUrl} alt={s.title} />
            <p>Title: {s.title}</p>
            <p>Author: {s.artistId}</p>
          </Link>
        );
      })}

      <h4>Artists</h4>
      {items.artists.map(function (a) {
        const artistLink = `/artists/${a.id}`;
        return (
          <Link href={artistLink} key={a.id}>
            <img src={a.url} alt={a.name} />
            <p>{a.name}</p>
          </Link>
        );
      })}

      <h4>Playlists</h4>
      {items.playlists.map(function (p) {
        const playlistLink = `/playlists/${p.id}`;
        return (
          <Link href={playlistLink} key={p.id}>
            <img src={p.imageUrl} alt={p.title} />
            <p>{p.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default FoundItemsList;
