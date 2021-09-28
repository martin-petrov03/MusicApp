import type { NextPage } from "next";
import Link from "next/link";
import { MetaTags } from "../../components/index";
import { Playlist } from "../../components/index";
import styles from "./Playlists.module.scss";

const Playlists: NextPage = () => {
  return (
    <div>
      <Link href="/playlists/add">Add Playlist</Link>
      <MetaTags title="Playlists" description="Playlists page" />
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
