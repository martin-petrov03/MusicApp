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
  const song = songs.find((s) => s.id === id);
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

const addPlaylist = async (newPlaylist: PlaylistInterface) => {
  const playlistsCol = collection(db, "playlists");
  try {
    await addDoc(playlistsCol, newPlaylist);
  } catch (error) {
    console.log(error);
  }
};

export { getSongs, getSong, getSongUrl, addPlaylist };
