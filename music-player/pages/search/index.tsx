import type { NextPage } from "next";
import SearhItemInterface from "../../utils/interfaces/SearchItem";
import { getItemsBySearch } from "../../utils/db";
import { FoundItemsList } from "../../components/index";
import styles from "./Search.module.scss";

const SearchedItems: NextPage<SearhItemInterface> = (
  props: SearhItemInterface
) => {
  console.log(props);

  return (
    <div className={styles.container}>
      <div>
        <h1>Found Items:</h1>
      </div>
      <FoundItemsList items={props} />
    </div>
  );
};

interface IContext {
  params: { searchedText: string };
}
export async function getServerSideProps(context: IContext) {
  const searchedText = context.params.searchedText;
  const resultObject = await getItemsBySearch(searchedText);

  return {
    props: {
      songs: resultObject.songs,
      artists: resultObject.artists,
      playlists: resultObject.playlists,
    },
  };
}

export default SearchedItems;
