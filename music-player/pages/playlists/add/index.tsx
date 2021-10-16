import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { MetaTags } from "../../../components/index";
import { addPlaylist } from "../../../utils/db";
import PlaylistInterface from "../../../utils/interfaces/Playlist";
import styles from "./AddPlaylist.module.scss";

const AddPlaylist: NextPage = () => {
  const router = useRouter();
  const [playlist, setPlaylist] = useState<PlaylistInterface>();

  const [imageUrl, setImageUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const newPlaylist = { title, imageUrl };
    addPlaylist(newPlaylist);
    router.back();
  };

  return (
    <div onSubmit={(e) => handleSubmit(e)} className={styles.container}>
      <MetaTags title="Add Playlist" description="App playlist page" />
      <h2>Add Playlist</h2>
      <form className={styles.form}>
        <label htmlFor="title"></label>
        <input
          type="text"
          placeholder="Title"
          id="title"
          autoComplete="off"
          className={styles.inputField}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Url"
          id="url"
          autoComplete="off"
          className={styles.inputField}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <br />
        <input
          type="submit"
          id="submit"
          className={styles.submitBtn}
          value="Create"
        />
      </form>
    </div>
  );
};

export default AddPlaylist;
