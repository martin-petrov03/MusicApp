import type { NextPage } from "next";
import { ArtistsList } from "../../components/index";
import styles from "../../styles/Artists.module.scss";

const Artists: NextPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Artists</h1>
        </div>
      </div>
      <ArtistsList />
    </div>
  );
};

export default Artists;
