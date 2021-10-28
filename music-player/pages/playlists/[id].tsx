import type { NextPage } from "next";
import { getPlaylist, getSongsDetailsInPlaylist } from "../../utils/db";
import { MetaTags } from "../../components/index";
import PlaylistInterface from "../../utils/interfaces/Playlist";
import SongInterface from "../../utils/interfaces/Song";
import styles from "./Playlists.module.scss";

interface IProps extends React.ClassAttributes<PlaylistInterface> {
  playlist: PlaylistInterface;
  songDetails: Array<SongInterface>;
}

const PlaylistDetails: NextPage<IProps> = (props: IProps) => {
  const playlist = props.playlist;
  const songDetails = props.songDetails;
  let result = { playlist, ...songDetails };

  songDetails.map((s) => console.log(s));
  // console.log(playlist);
  console.log(songDetails);
  // console.log(result);

  return (
    <div>
      <MetaTags title="Playlist Details" description="Playlist details page" />
      <div className={styles.container}>
        <div key={playlist.id}>
          <h2>{playlist.title}</h2>
          <img src={playlist.imageUrl} alt={playlist.title} />
          <ol>
            {songDetails.map((s) => (
              <li className={styles.song} key={s.id}>
                <img src={s.imageUrl} alt={s.title} />
                {s.title}
              </li>
            ))}
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
  var songDetailsArray = Object.entries(songDetails).map((e) => e[1]);

  return { props: { playlist, songDetails: songDetailsArray } };
}

export default PlaylistDetails;
