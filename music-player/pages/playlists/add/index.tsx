import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import uniqueString from "unique-string";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { MetaTags } from "../../../components/index";
import { addPlaylist } from "../../../utils/db";
import styles from "./AddPlaylist.module.scss";

interface ErrorInterface {
  message: string;
}

const AddPlaylist: NextPage = () => {
  const router = useRouter();
  const [titleError, setTitleError] = useState<ErrorInterface>();
  const [urlError, setUrlErrors] = useState<ErrorInterface>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("dasd");
    //const newPlaylist = { id: uniqueString(), register.title, register.imageUrl };
    //addPlaylist(newPlaylist);
    setIsSubmitted(true);
    // router.back();
  };

  return (
    <div className={styles.container}>
      <MetaTags title="Add Playlist" description="App playlist page" />
      <h2>Add Playlist</h2>
      <form className={styles.form}>
        <label htmlFor="title">Title:</label>
        <input
          placeholder="Title"
          id="title"
          name="title"
          autoComplete="off"
          className={styles.inputField}
        />
        {titleError?.message ? <div>{titleError.message}</div> : null}

        <label htmlFor="url">Image url:</label>
        <input
          placeholder="Url"
          id="imageUrl"
          name="imageUrl"
          autoComplete="off"
          className={styles.inputField}
        />
        {urlError?.message ? <div>{urlError.message}</div> : null}

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
