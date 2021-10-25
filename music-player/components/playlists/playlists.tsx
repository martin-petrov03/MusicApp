import Link from "next/link";
import PlaylistInterface from "../../utils/interfaces/Playlist";
import styles from "./Playlists.module.scss";

interface Props extends React.ClassAttributes<any> {
  playlists: PlaylistInterface[];
}

const Playlist = ({ playlists }: Props) => {
  return (
    <div className={styles.playlists}>
      {playlists.map(function (p, idx) {
        const playlistLink = `/playlists/${p.id}`;

        return (
          <div className={styles.playlist} key={idx}>
            <Link href={playlistLink}>
              <img src={p.imageUrl} alt={p.title} />
            </Link>
            <p>{p.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
