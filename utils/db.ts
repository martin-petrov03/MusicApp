import { app } from "./firebase";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import PlaylistInterface from "./interfaces/Playlist";
import SongDetailsInterface from "./interfaces/SongDetails";

const db = getFirestore(app);

const getAllSongsFiles = async () => {
  const storage = getStorage();
  const storageRef = ref(storage, `songs`);
  const files = await listAll(storageRef);
  return files;
};

const getSongsCount = async () => {
  const songs = await getSongs();
  return songs?.length;
};

const getSongs = async () => {
  const songsCol = collection(db, "songs");
  const songSnapshot = await getDocs(songsCol);
  const songList = songSnapshot.docs.map((doc) => doc.data());

  return songList.sort((a, b) => a.id - b.id);
};

const getSong = async (id: number) => {
  const songs = await getSongs();
  const song = songs?.find((s) => s.id === id);
  return song;
};

const getSongUrl = async (title: string) => {
  try {
    const storage = getStorage();
    const files = await getAllSongsFiles();
    const currentSong = await files.items.find((i) =>
      i.toString().includes(title)
    );

    const currentSongFullPath = currentSong?.fullPath;
    const songRef = ref(storage, currentSongFullPath);
    const url = await getDownloadURL(songRef);
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
    return artists.sort((a, b) => a.id - b.id);
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

const getPlaylistsCount = async () => {
  const playlists = await getPlaylists();
  return playlists?.length;
};

const getPlaylists = async () => {
  const playlistsCol = collection(db, "playlists");
  try {
    const playlistsSnapshot = await getDocs(playlistsCol);
    const playlists = playlistsSnapshot.docs.map((doc) => doc.data());
    return playlists.sort((a, b) => a.id - b.id);
  } catch (error) {
    console.log(error);
  }
};

const getPlaylist = async (id: number) => {
  const playlists = await getPlaylists();
  const playlist = await playlists?.find((p) => p.id === id);
  return playlist;
};

const getSongsDetailsInPlaylist = async (id: number) => {
  const playlist = await getPlaylist(id);
  const result: any = {};

  for (let i = 0; i < playlist?.songIds.length; i++) {
    const song = await getSong(playlist?.songIds[i]);
    const currentSongUrl = await getSongUrl(song?.title);

    const songDetails = song as SongDetailsInterface;
    songDetails.songUrl = currentSongUrl;
    result[i + 1] = songDetails;
  }
  return result;
};

const getItemsBySearch = async (input: string) => {
  const inputToLower = input?.toLowerCase();
  const songs = (await getSongs())?.filter((s) =>
    s.title.toLowerCase().includes(inputToLower)
  );
  const artists = (await getArtists())?.filter(
    (a) =>
      a.name.toLowerCase().includes(inputToLower) ||
      a.artistsNames.some((e: any) => e.toLowerCase().includes(inputToLower)) ||
      a.top5Songs.some((s: any) => s.toLowerCase().includes(inputToLower))
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
  getSongsCount,
  getSong,
  getSongUrl,
  getArtists,
  getArtist,
  addPlaylist,
  getPlaylistsCount,
  getPlaylists,
  getPlaylist,
  getSongsDetailsInPlaylist,
  getItemsBySearch,
};
