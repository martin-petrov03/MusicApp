import SongInterface from "./Song";
import ArtistInterface from "./Artist";
import PlaylistInterface from "./Playlist";

interface SearchItemInterface {
  songs: Array<SongInterface>;
  artists: Array<ArtistInterface>;
  playlists: Array<PlaylistInterface>;
}

export default SearchItemInterface;
