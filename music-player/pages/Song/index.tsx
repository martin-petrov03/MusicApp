import type { NextPage } from "next";
import { Navigation } from "../../components/index";
import styles from "../../styles/Song.module.scss";

const Song: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Music Player!</a>
        </h1>
        <div className={styles.content}>
          <Navigation />
          <div className={styles.card}>
            <h2>Song title &rarr;</h2>
            <p>Content</p>

            <div className={styles.controlPanel}>
              <button>Previous</button>
              <button>Play</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
