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
        const songLink = `/songs`;
        return (
          <div>
            <img src={s.imageUrl} alt={s.title} />
            <p>Title: {s.title}</p>
            <p>Author: {s.artistId}</p>
          </div>
        );
      })}
      {items.songs.length === 0 ? <p>Nothing was found</p> : null}

      <h4>Artists</h4>
      {items.artists.map(function (a) {
        const artistLink = `/artists`;
        return (
          <div>
            <img src={a.url} alt={a.name} />
            <p>{a.name}</p>
          </div>
        );
      })}
      {items.artists.length === 0 ? <p>Nothing was found</p> : null}

      <h4>Playlists</h4>
      {items.playlists.map(function (p) {
        const playlistLink = `/playlists`;
        return (
          <div>
            <img src={p.imageUrl} alt={p.title} />
            <p>{p.title}</p>
          </div>
        );
      })}
      {items.playlists.length === 0 ? <p>Nothing was found</p> : null}
    </div>
  );
};

export default FoundItemsList;
