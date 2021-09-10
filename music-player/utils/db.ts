import { app } from "./firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const db = getFirestore(app);

const getSongs = async () => {
  const songsCol = collection(db, "songs");
  const songSnapshot = await getDocs(songsCol);
  const songList = songSnapshot.docs.map((doc) => doc.data());
  return songList;
};

export { getSongs };
