interface Playlist {
  id?: number;
  title: string;
  imageUrl: string;
  songIds: Array<number>;
}

export default Playlist;
