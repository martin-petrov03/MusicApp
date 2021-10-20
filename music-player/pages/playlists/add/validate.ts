import PlaylistInterface from "../../../utils/interfaces/Playlist";

const validate = (playlist: PlaylistInterface) => {
  let message = "";

  if (playlist.imageUrl.length <= 8) {
    message = "Image url should be more than 8 characters.";
  } else if (!playlist.imageUrl.startsWith("http")) {
    message = "Image url should be valid.";
  }
  if (playlist.title.length <= 4) {
    message = "Title should be more than 4 characters.";
  }

  return message;
};

export default validate;
