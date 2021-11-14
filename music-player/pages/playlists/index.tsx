import type { NextPage } from "next";
import Link from "next/link";
import { MetaTags } from "../../components/index";
import { Playlist } from "../../components/index";
import { getPlaylists } from "../../utils/db";
import PlaylistInterface from "../../utils/interfaces/Playlist";
import styles from "./Playlists.module.scss";

interface Props {
  playlists: PlaylistInterface[];
}

const Playlists: NextPage<Props> = (props) => {
  const playlists = props.playlists;

  return (
    <div>
      <MetaTags title="Playlists" description="Playlists page" />
      <div className={styles.container}>
        <div className="link">
          <Link href="/playlists/add">
            <svg viewBox="0 0 24 24" width="3em" height="3em">
              <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Zm5-10a1,1,0,0,1-1,1H13v3a1,1,0,0,1-2,0V13H8a1,1,0,0,1,0-2h3V8a1,1,0,0,1,2,0v3h3A1,1,0,0,1,17,12Z" />
            </svg>
          </Link>
        </div>
        <div>
          <h1>Playlists</h1>
        </div>

        <Playlist playlists={playlists} />
      </div>
    </div>
  );
};

export default Playlists;

export async function getStaticProps() {
  const playlists = await getPlaylists();

  return {
    props: {
      playlists: playlists?.map((playlist) => ({
        id: playlist.id,
        title: playlist.title,
        imageUrl: playlist.imageUrl,
      })),
    },
    revalidate: 5,
  };
}
