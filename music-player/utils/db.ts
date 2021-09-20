import { app } from "./firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);

const getSongs = async () => {
  const songsCol = collection(db, "songs");
  const songSnapshot = await getDocs(songsCol);
  const songList = songSnapshot.docs.map((doc) => doc.data());

  return songList;
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

export { getSongs, getSongUrl };
