import Song from "./Song";

interface Playlist {
  id: string;
  title: string;
  imageUrl: string;
  songIds: Array<number>;
}

export default Playlist;
