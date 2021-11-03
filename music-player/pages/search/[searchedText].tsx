import type { NextPage } from "next";
import SongInterface from "../../utils/interfaces/Song";
import ArtistInterface from "../../utils/interfaces/Artists";
import PlaylistInterface from "../../utils/interfaces/Playlist";
// import styles from "./Search.module.scss";

interface IProps extends React.ClassAttributes<PlaylistInterface> {
  songs: Array<SongInterface>;
  artists: Array<ArtistInterface>;
  playlists: Array<PlaylistInterface>;
}

const SearchedItems: NextPage<IProps> = (props: IProps) => {
  const search = () => {
    //TODO: extract data
  };

  return (
    <div>
      Items Found:
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
        <li>Artist 1</li>
        <li>Artist 2</li>
      </ul>
    </div>
  );
};

interface IContext {
  params: { searchedText: string };
}
export async function getServerSideProps(context: IContext) {
  const searchedText = context.params.searchedText;
  //TODO

  return { props: { songs: [], artists: [], playlists: [] } };
}

export default SearchedItems;
