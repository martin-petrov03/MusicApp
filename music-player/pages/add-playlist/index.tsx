import type { NextPage } from "next";
import styles from "../../styles/AddPlaylist.module.scss";

const AddPlaylist: NextPage = () => {
  return (
    <div className={styles.container}>
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
