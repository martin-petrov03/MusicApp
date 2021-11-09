import { app } from "./firebase";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import PlaylistInterface from "./interfaces/Playlist";

const db = getFirestore(app);

const getSongs = async () => {
  const songsCol = collection(db, "songs");
  const songSnapshot = await getDocs(songsCol);
  const songList = songSnapshot.docs.map((doc) => doc.data());
  return songList;
};

const getSong = async (id: number) => {
  const songs = await getSongs();
  const song = songs?.find((s) => s.id === id);
  return song;
};

const getSongUrl = async () => {
  const storage = getStorage();
  const storageRef = ref(
    storage,
    "songs/Nirvana - Smells Like Teen Spirit (Official Music Video).mp3"
  );

  try {
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    return "";
  }
};

const getArtists = async () => {
  const artistsCol = collection(db, "artists");
  try {
    const artistsSnapshot = await getDocs(artistsCol);
    const artists = artistsSnapshot.docs.map((doc) => doc.data());
    return artists;
  } catch (error) {
    console.log(error);
  }
};

const getArtist = async (id: number) => {
  const artists = await getArtists();
  const artist = artists?.find((a) => a.id === id);
  return artist;
};

const addPlaylist = async (newPlaylist: PlaylistInterface) => {
  const playlistsCol = collection(db, "playlists");
  try {
    await addDoc(playlistsCol, newPlaylist);
  } catch (error) {
    console.log(error);
  }
};

const getPlaylists = async () => {
  const playlistsCol = collection(db, "playlists");
  try {
    const playlistsSnapshot = await getDocs(playlistsCol);
    const playlists = playlistsSnapshot.docs.map((doc) => doc.data());
    return playlists;
  } catch (error) {
    console.log(error);
  }
};

const getPlaylist = async (id: string) => {
  const playlists = await getPlaylists();
  const playlist = await playlists?.find((p) => p.id === id);
  return playlist;
};

const getSongsDetailsInPlaylist = async (id: string) => {
  const playlist = await getPlaylist(id);
  const result: any = {};

  for (let i = 0; i < playlist?.songIds.length; i++) {
    const songDetails = await getSong(playlist?.songIds[i]);
    result[i + 1] = songDetails;
  }

  return result;
};

const getItemsBySearch = async (input: string) => {
  const inputToLower = input?.toLowerCase();
  const songs = (await getSongs())?.filter((s) =>
    s.title.toLowerCase().includes(inputToLower)
  );
  //TODO add better search artist sensitivity
  const artists = (await getArtists())?.filter((a) =>
    a.name.toLowerCase().includes(inputToLower)
  );
  const playlists = (await getPlaylists())?.filter((p) =>
    p.title.toLowerCase().includes(inputToLower)
  );

  return {
    songs,
    artists,
    playlists,
  };
};

export {
  getSongs,
  getSong,
  getSongUrl,
  getArtists,
  getArtist,
  addPlaylist,
  getPlaylists,
  getPlaylist,
  getSongsDetailsInPlaylist,
  getItemsBySearch,
};
