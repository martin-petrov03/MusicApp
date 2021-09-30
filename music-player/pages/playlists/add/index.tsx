import type { NextPage } from "next";
import { useState } from "react";
import { MetaTags } from "../../../components/index";
import styles from "./AddPlaylist.module.scss";

const AddPlaylist: NextPage = () => {
  const [playlist, setPlaylist] = useState<Object>({});
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setPlaylist({ title });
    console.log(playlist);
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
          className={styles.titleField}
          onChange={(e) => setTitle(e.target.value)}
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
