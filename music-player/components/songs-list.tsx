import Link from "next/link";
import SongInterface from "../utils/interfaces/Song";
import styles from "../styles/SongsList.module.scss";

interface Props extends React.ClassAttributes<any> {
  songs: SongInterface[];
}

const SongsList = (songs: Props) => {
  return (
    <div className={styles.songs}>
      {songs.songs.map(function (s, idx) {
        return (
          <div className={styles.song} key={idx}>
            <Link href="/song">
              <img src={s.url} alt={s.name} />
            </Link>
            <p>{s.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SongsList;
