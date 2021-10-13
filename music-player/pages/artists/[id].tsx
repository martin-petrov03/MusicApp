import type { NextPage } from "next";
import { useState } from "react";
import { getArtists, getArtist } from "../../utils/db";
import { MetaTags } from "../../components/index";
import ArtistDetailsInterface from "../../utils/interfaces/ArtistDetails";
import styles from "./Artist.module.scss";

interface IProps extends React.ClassAttributes<ArtistDetailsInterface> {
  artist: ArtistDetailsInterface;
}

const Artist: NextPage<IProps> = (props: IProps) => {
  const artist = props.artist;

  return (
    <div>
      <MetaTags title="Artist Details" description="Artist details page" />
      <div className={styles.container}>
        <div key={artist.id}>
          <h2>Name: {artist.name}</h2>
          {artist?.artistsNames?.map((n) => (
            <li>{n}</li>
          ))}
          {artist.age ? <h4>Age: {artist.age}</h4> : null}
          <img src={artist.url} alt={artist.name} />
          <h4>Top 5 songs:</h4>
          <ol className={styles.topSongs}>
            {artist?.top5Songs?.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

interface IContext {
  params: { id: number };
}
export async function getStaticProps(context: IContext) {
  const id = Number(context.params.id);
  const artist = await getArtist(id);
  return { props: { artist } };
  // const artist = JSON.stringify({
  //   id,
  //   name: "Alice Johnson",
  //   age: 28,
  //   url: "https://www.masteroilpainting.com/wp-content/uploads/2018/01/AdobeStock_179466839-1024x683.jpeg",
  //   top5Songs: ["dsad", "dsadas", "dsada", "dsada", "sdad"],
  // });
  // return {
  //   props: {
  //     artist,
  //   },
  // };
}

export async function getStaticPaths() {
  const artists = await getArtists();
  const paths = artists?.map((artist) => ({
    params: { id: artist.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export default Artist;
