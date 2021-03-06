import Link from "next/link";
import SongInterface from "../../utils/interfaces/Song";
import styles from "./SongsList.module.scss";

interface Props extends React.ClassAttributes<any> {
  songs: SongInterface[];
}

const SongsList = (songs: Props) => {
  return (
    <div className={styles.songs}>
      {songs.songs.map(function (s, idx) {
        const songLink = `/songs/${s.id}`;

        return (
          <div className={styles.song} key={idx}>
            <Link href={songLink}>
              <img src={s.imageUrl} alt={s.title} />
            </Link>
            <p>{s.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SongsList;
