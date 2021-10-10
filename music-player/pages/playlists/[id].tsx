import type { NextPage } from "next";
import { MetaTags } from "../../components/index";
import { getPlaylists, getPlaylist } from "../../utils/db";
import PlaylistInterface from "../../utils/interfaces/Playlist";
import styles from "./Playlists.module.scss";

interface IProps extends React.ClassAttributes<PlaylistInterface> {
  playlist: string;
}

const Artist: NextPage<IProps> = (props: IProps) => {
  const playlist = props.playlist;

  return (
    <div>
      <MetaTags title="Artist Details" description="Artist details page" />
      <div className={styles.container}>
        <div key={playlist.id}>
          <h2>Name: {playlist.title}</h2>
          <img src={playlist.imageUrl} alt={playlist.title} />
        </div>
      </div>
    </div>
  );
};

interface IContext {
  params: { id: number };
}
export async function getStaticProps(context: IContext) {
  const id = Number(context.params.id);
  const playlist = await getPlaylist(id);
  return { props: { playlist } };
}

export async function getStaticPaths() {
  const playlists = await getPlaylists();
  const paths = playlists?.map((playlist) => ({
    params: { id: playlist.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export default Artist;
