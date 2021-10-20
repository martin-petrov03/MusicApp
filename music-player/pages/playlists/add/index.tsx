import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import uniqueString from "unique-string";
import { MetaTags } from "../../../components/index";
import { addPlaylist } from "../../../utils/db";
import PlaylistInterface from "../../../utils/interfaces/Playlist";
import validate from "./validate";
import styles from "./AddPlaylist.module.scss";

const AddPlaylist: NextPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newPlaylist: PlaylistInterface = {
      id: uniqueString(),
      title: title || "",
      imageUrl: imageUrl || "",
    };

    const message = validate(newPlaylist);
    if (message.length) {
      setErrorMessage(message);
      return;
    }
    addPlaylist(newPlaylist);
    setIsSubmitted(true);
    router.back();
  };

  return (
    <div className={styles.container}>
      <MetaTags title="Add Playlist" description="App playlist page" />
      <h2>Add Playlist</h2>
      <form className={styles.form}>
        {errorMessage ? <div>{errorMessage}</div> : null}
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

        <button
          type="submit"
          disabled={isSubmitted}
          id="submit"
          className={styles.submitBtn}
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddPlaylist;
