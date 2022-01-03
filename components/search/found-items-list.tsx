import Link from "next/link";
import SearchItemInterface from "../../utils/interfaces/SearchItem";
import styles from "./FoundItems.module.scss";

interface IProps {
  items: SearchItemInterface;
}

const FoundItemsList = ({ items }: IProps) => {
  return (
    <div className={styles.items}>
      <h3>Songs</h3>
      {items.songs.map(function (s) {
        const songLink = `/songs/${s.id}`;
        return (
          <Link href={songLink} key={s.id}>
            <div>
              <img src={s.imageUrl} alt={s.title} />
              <div>
                <p>Title: {s.title}</p>
                <p>Author: {s.artistId}</p>
              </div>
            </div>
          </Link>
        );
      })}
      {items.songs.length === 0 ? <NotFound /> : null}

      <h3>Artists</h3>
      {items.artists.map(function (a) {
        const artistLink = `/artists/${a.id}`;
        return (
          <Link href={artistLink} key={a.id}>
            <div>
              <img src={a.url} alt={a.name} />
              <div>
                <h4>{a.name}</h4>
              </div>
            </div>
          </Link>
        );
      })}
      {items.artists.length === 0 ? <NotFound /> : null}

      <h3>Playlists</h3>
      {items.playlists.map(function (p) {
        const playlistLink = `/playlists/${p.id}`;
        return (
          <Link href={playlistLink} key={p.id}>
            <div>
              <img src={p.imageUrl} alt={p.title} />
              <div>
                <p>{p.title}</p>
                <p>Songs count: {p.songIds?.length}</p>
              </div>
            </div>
          </Link>
        );
      })}
      {items.playlists.length === 0 ? <NotFound /> : null}
    </div>
  );
};

const NotFound = () => {
  return (
    <div id={styles.notFound}>
      <img src="/images/not-found.png" alt="not-found" />
    </div>
  );
};

export default FoundItemsList;
