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
          <div key={s.id}>
            <img src={s.imageUrl} alt={s.title} />
            <div>
              <p>Title: {s.title}</p>
              <p>Author: {s.artistId}</p>
            </div>
          </div>
        );
      })}
      {items.songs.length === 0 ? <p>Nothing was found</p> : null}

      <h4>Artists</h4>
      {items.artists.map(function (a) {
        const artistLink = `/artists`;
        return (
          <div key={a.id}>
            <img src={a.url} alt={a.name} />
            <div>
              <p>{a.name}</p>
              <p>Artists Names: {a.name.length}</p>
            </div>
          </div>
        );
      })}
      {items.artists.length === 0 ? <p>Nothing was found</p> : null}

      <h4>Playlists</h4>
      {items.playlists.map(function (p) {
        const playlistLink = `/playlists`;

        return (
          <div key={p.id}>
            <img src={p.imageUrl} alt={p.title} />
            <div>
              <p>{p.title}</p>
              <p>Songs count: {p.songIds?.length}</p>
            </div>
          </div>
        );
      })}
      {items.playlists.length === 0 ? <p>Nothing was found</p> : null}
    </div>
  );
};

export default FoundItemsList;
