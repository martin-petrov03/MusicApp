import type { NextPage } from "next";
import { getPlaylist, getSongsDetailsInPlaylist } from "../../utils/db";
import { MetaTags } from "../../components/index";
import PlaylistInterface from "../../utils/interfaces/Playlist";
import styles from "./Playlists.module.scss";

interface IProps extends React.ClassAttributes<PlaylistInterface> {
  playlist: PlaylistInterface;
  songDetails: object;
}

const PlaylistDetails: NextPage<IProps> = (props: IProps) => {
  const playlist = props.playlist;
  const songDetails = props.songDetails;

  console.log(playlist);
  console.log(songDetails);

  return (
    <div>
      <MetaTags title="Playlist Details" description="Playlist details page" />
      <div className={styles.container}>
        <div key={playlist.id}>
          <h2>Name: {playlist.title}</h2>
          <img src={playlist.imageUrl} alt={playlist.title} />
          <ol>
            {/* {playlist.songIds.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))} */}
          </ol>
        </div>
      </div>
    </div>
  );
};

interface IContext {
  params: { id: string };
}

export async function getServerSideProps(context: IContext) {
  const id = context.params.id;
  const playlist = await getPlaylist(id);
  const songDetails = await getSongsDetailsInPlaylist(playlist?.id);

  return { props: { playlist, songDetails } };
}

export default PlaylistDetails;
