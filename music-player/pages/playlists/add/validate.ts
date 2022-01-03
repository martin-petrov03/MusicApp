import PlaylistInterface from "../../../utils/interfaces/Playlist";

const validate = (playlist: PlaylistInterface) => {
  let message = "";

  if (playlist.imageUrl.length <= 6) {
    message = "Image url should be more than 6 characters.";
  } else if (!playlist.imageUrl.startsWith("http")) {
    message = "Image url should be valid.";
  }
  if (playlist.title.length < 2) {
    message = "Title should be at least 2 characters long.";
  }

  return message;
};

export default validate;
