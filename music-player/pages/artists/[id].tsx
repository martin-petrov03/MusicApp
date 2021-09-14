import type { NextPage } from "next";
import { useState } from "react";
import { ArtistsList } from "../../components/index";
import ArtistInterface from "../../utils/interfaces/Artist";
import styles from "../../styles/Artists.module.scss";

interface Props extends React.ClassAttributes<any> {
  songs: ArtistInterface;
}

const Artist: NextPage = (props: any) => {
  console.log(props);
  const [artist, setArtist] = useState({
    id: 1,
    name: "Alice Johnson",
    age: 28,
    url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    top5Songs: ["dsad", "dsadas", "dsada", "dsada", "sdad"],
  });
  //setArtist(props);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>{artist.name}</h1>
          <h4>{artist.age}</h4>
          <img src={artist.url} alt={artist.name} />
          <ul>
            {artist.top5Songs.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <ArtistsList />
    </div>
  );
};

export async function getStaticPaths({ params }) {
  //const artists = getArtists();
  const artists = [
    {
      id: 1,
      name: "Alice",
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    },
    {
      id: 2,
      name: "Lena",
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    },
    {
      id: 3,
      name: "Emi",
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
    },
  ];
  const paths = artists.map((artist) => ({
    params: { id: artist.id.toString() },
  }));
  console.log(params);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  //const artist = getArtist();
  //return { props: { artist } };
  console.log(params);
  return {
    props: {
      id: params.id,
      name: "Alice Johnson",
      age: 28,
      url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
      top5Songs: ["dsad", "dsadas", "dsada", "dsada", "sdad"],
    },
  };
}

export default Artist;
