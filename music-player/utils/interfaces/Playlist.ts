import SongsInterface from "./Song";

interface Playlist {
  id: string;
  title: string;
  imageUrl: string;
  songs: Array<SongsInterface>;
}

export default Playlist;
