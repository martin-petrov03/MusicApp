import type { NextPage } from "next";
import Head from "next/head";
import { Playlist } from "../../components/index";
import styles from "../../styles/Playlists.module.scss";

const Playlists: NextPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Playlists</h1>
        </div>
      </div>
      <Playlist />
    </div>
  );
};

export default Playlists;
