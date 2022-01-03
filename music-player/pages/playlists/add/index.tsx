import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { MetaTags } from "../../../components/index";
import { getSongs, addPlaylist, getPlaylistsCount } from "../../../utils/db";
import PlaylistInterface from "../../../utils/interfaces/Playlist";
import SongInterface from "../../../utils/interfaces/Song";
import validate from "./validate";
import styles from "./AddPlaylist.module.scss";

interface Props {
  songs: SongInterface[];
}

const AddPlaylist: NextPage<Props> = (props) => {
  // let songs = props.songs;

  const router = useRouter();
  const [title, setTitle] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>();
  const [songs, setSongs] = useState<Array<SongInterface>>(props.songs);
  const [selectedSongIds, setSelectedSongIds] = useState<Array<number>>();

  function handleSelectionChange(e: any) {
    const currentId = Number(e.target.value);
    if (selectedSongIds) {
      setSelectedSongIds([...selectedSongIds, currentId]);
    } else {
      setSelectedSongIds([currentId]);
    }

    const updatedSongsArray = songs?.filter(function (value) {
      return value.id !== currentId;
    });
    setSongs(updatedSongsArray);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const currentId = await getPlaylistsCount();
    console.log(selectedSongIds);
    const newPlaylist: PlaylistInterface = {
      id: currentId ? currentId + 1 : Math.random(),
      title: title || "",
      imageUrl: imageUrl || "",
      songIds: selectedSongIds ? selectedSongIds : [],
    };

    const message = validate(newPlaylist);
    if (message.length) {
      setErrorMessage(message);
      return;
    }
    addPlaylist(newPlaylist);
    setIsSubmitted(true);
    router.push("/playlists");
  };

  return (
    <div className={styles.container}>
      <MetaTags title="Add Playlist" description="App playlist page" />
      <h1>Add Playlist</h1>
      <form className={styles.form}>
        {errorMessage ? (
          <div className={styles.message}>{errorMessage}</div>
        ) : null}
        <label htmlFor="title">Title:</label>
        <input
          placeholder="Title"
          id="title"
          name="title"
          autoComplete="off"
          className={styles.inputField}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="url">Image url:</label>
        <input
          placeholder="Url"
          id="imageUrl"
          name="imageUrl"
          autoComplete="off"
          className={styles.inputField}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label htmlFor="songs" className={styles.selectionLabel}>
          Choose songs:
        </label>
        <p>Number of songs: {selectedSongIds?.length}</p>
        <select id="songs" multiple onChange={handleSelectionChange}>
          {songs?.map((s) => (
            <option value={s.id} key={s.id}>
              {s.title}
            </option>
          ))}
        </select>
        <br />

        <button
          type="submit"
          disabled={isSubmitted}
          id="submit"
          className={styles.btn}
          onClick={handleSubmit}
        >
          <label>Create</label>
        </button>
      </form>
    </div>
  );
};

export default AddPlaylist;

export async function getStaticProps() {
  const songs = await getSongs();

  return {
    props: {
      songs: songs?.map((song) => ({
        id: song.id,
        title: song.title,
        imageUrl: song.imageUrl,
        artistId: song.artistId,
      })),
    },
    revalidate: 5,
  };
}
