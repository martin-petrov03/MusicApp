import type { NextPage } from "next";
import { ArtistsList, MetaTags } from "../../components/index";
import styles from "./Artists.module.scss";

const Artists: NextPage = () => {
  return (
    <div>
      <MetaTags description="Artists page" />
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
