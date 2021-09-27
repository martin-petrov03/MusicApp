import type { NextPage } from "next";
import { MetaTags } from "../../components/index";
import styles from "./AddPlaylist.module.scss";

const AddPlaylist: NextPage = () => {
  return (
    <div className={styles.container}>
      <MetaTags title="Add Playlist" description="App playlist page" />
      <h2>Add Playlist</h2>
      <form action="POST" className={styles.form}>
        <label htmlFor="title"></label>
        <input
          type="text"
          placeholder="Title"
          id="title"
          className={styles.titleField}
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
