import type { NextPage } from "next";
import { useState } from "react";
import { ArtistsList } from "../../components/index";
import ArtistDetailsInterface from "../../utils/interfaces/ArtistDetails";
import styles from "../../styles/Artist.module.scss";

interface IProps extends React.ClassAttributes<ArtistDetailsInterface> {
  artist: string;
}

const Artist: NextPage<IProps> = (props: IProps) => {
  const artistObj = JSON.parse(props.artist);
  const [artist, setArtist] = useState<ArtistDetailsInterface>(artistObj);

  return (
    <div>
      <div className={styles.container}>
        <div key={artist.id}>
          <h2>Name: {artist.name}</h2>
          <h4>Age: {artist.age}</h4>
          <img src={artist.url} alt={artist.name} />
          <h4>Top 5 songs:</h4>
          <ol className={styles.topSongs}>
            {artist.top5Songs.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

interface IContext {
  params: { id: string };
}
export async function getStaticProps(context: IContext) {
  //const artist = getArtist();
  //return { props: { artist } };
  const id = context.params.id;
  const artist = JSON.stringify({
    id,
    name: "Alice Johnson",
    age: 28,
    url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    top5Songs: ["dsad", "dsadas", "dsada", "dsada", "sdad"],
  });
  return {
    props: {
      artist,
    },
  };
}

export async function getStaticPaths() {
  //const artists = getArtists();
  const artists = [
    {
      id: "1",
      name: "Alice",
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    },
    {
      id: "2",
      name: "Lena",
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    },
    {
      id: "3",
      name: "Emi",
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    },
  ];
  const paths = artists.map((artist) => ({
    params: { id: artist.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export default Artist;
