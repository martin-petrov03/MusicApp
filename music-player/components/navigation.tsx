import Link from "next/link";
import styles from "../styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <div>
      <ul className={styles.links}>
        <Link href="/">
          <div className={styles.link}>
            <div className={styles.icon}>
              <svg viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"
                ></path>
              </svg>
            </div>
            <li>Songs</li>
          </div>
        </Link>
        <Link href="/artists">
          <div className={styles.link}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24">
                <path d="M7.5,13A4.5,4.5,0,1,1,12,8.5,4.505,4.505,0,0,1,7.5,13Zm0-7A2.5,2.5,0,1,0,10,8.5,2.5,2.5,0,0,0,7.5,6ZM15,23v-.5a7.5,7.5,0,0,0-15,0V23a1,1,0,0,0,2,0v-.5a5.5,5.5,0,0,1,11,0V23a1,1,0,0,0,2,0Zm9-5a7,7,0,0,0-11.667-5.217,1,1,0,1,0,1.334,1.49A5,5,0,0,1,22,18a1,1,0,0,0,2,0ZM17.5,9A4.5,4.5,0,1,1,22,4.5,4.505,4.505,0,0,1,17.5,9Zm0-7A2.5,2.5,0,1,0,20,4.5,2.5,2.5,0,0,0,17.5,2Z" />
              </svg>
            </div>
            <li>Artists</li>
          </div>
        </Link>
        <Link href="/playlists">
          <div className={styles.link}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24">
                <path d="M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z" />
                <path d="M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
                <path d="M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
                <circle cx="2" cy="5" r="2" />
                <circle cx="2" cy="12" r="2" />
                <circle cx="2" cy="19" r="2" />
              </svg>
            </div>
            <li>Playlists</li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
