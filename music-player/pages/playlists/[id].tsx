import type { NextPage } from "next";
import { MetaTags } from "../../components/index";
import { getPlaylists } from "../../utils/db";
import PlaylistInterface from "../../utils/interfaces/Playlist";
import styles from "./Playlists.module.scss";

interface IProps extends React.ClassAttributes<PlaylistInterface> {
  playlist: string;
}

const Artist: NextPage<IProps> = (props: IProps) => {
  const playlist = JSON.parse(props.playlist);

  return (
    <div>
      <MetaTags title="Artist Details" description="Artist details page" />
      <div className={styles.container}>
        <div key={playlist.id}>
          <h2>Name: {playlist.name}</h2>
          <h4>Age: {playlist.age}</h4>
          <img src={playlist.url} alt={playlist.name} />
          <h4>Top 5 songs:</h4>
        </div>
      </div>
    </div>
  );
};

interface IContext {
  params: { id: number };
}
export async function getStaticProps(context: IContext) {
  const playlists = getPlaylists();
  return { props: { playlists } };
}

export async function getStaticPaths() {
  const playlists = await getPlaylists();
  const paths = playlists?.map((playlist) => ({
    params: { id: playlist.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export default Artist;
