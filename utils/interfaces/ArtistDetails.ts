interface ArtistDetails {
  id: string;
  name: string;
  artistsNames?: Array<string>; // for groups
  age?: number;
  url: string;
  top5Songs: Array<string>;
}

export default ArtistDetails;
