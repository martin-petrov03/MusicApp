import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navigation.module.scss";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <div>
      <ul className={styles.links}>
        <Link href="/">
          <div>
            <div className={styles.icon}>
              <Image
                src="/icons/music.svg"
                alt="music-icon"
                className={styles.icon}
                width={20}
                height={20}
              />
            </div>
            <li className={styles.link}>Songs</li>
          </div>
        </Link>
        <Link href="/artists">
          <div>
            <div className={styles.icon}>
              <Image
                src="/icons/users.svg"
                alt="music-icon"
                className={styles.icon}
                width={20}
                height={20}
              />
            </div>
            <li className={styles.link}>Artists</li>
          </div>
        </Link>
        <Link href="/playlists">
          <div>
            <div className={styles.icon}>
              <Image
                src="/icons/list.svg"
                alt="music-icon"
                className={styles.icon}
                width={20}
                height={20}
              />
            </div>
            <li className={styles.link}>Playlists</li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
