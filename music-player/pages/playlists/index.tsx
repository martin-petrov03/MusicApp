import type { NextPage } from "next";
import { Playlist } from "../../components/index";
import styles from "../../styles/Playlists.module.scss";

const Playlists: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Playlists</h1>
      <Playlist />
    </div>
  );
};

export default Playlists;
