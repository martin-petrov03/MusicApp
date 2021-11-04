import type { NextPage } from "next";
import SongInterface from "../../utils/interfaces/Song";
import ArtistInterface from "../../utils/interfaces/Artists";
import PlaylistInterface from "../../utils/interfaces/Playlist";
import { FoundItemsList } from "../../components/index";
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
      <div>
        <h1>Trending Songs</h1>
      </div>
      <FoundItemsList />
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
