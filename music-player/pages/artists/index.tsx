import type { NextPage } from "next";
import { ArtistsList, MetaTags } from "../../components/index";
import styles from "./Artists.module.scss";
import { getArtists } from "../../utils/db";
import ArtistsInterface from "../../utils/interfaces/Artist";

interface Props {
  artists: ArtistsInterface[];
}

const Artists: NextPage<Props> = (props) => {
  const artists = props.artists;

  return (
    <div>
      <MetaTags title="Artists" description="Artists page" />
      <div className={styles.container}>
        <div>
          <h1>Artists</h1>
        </div>
      </div>
      <ArtistsList artists={artists} />
    </div>
  );
};

export default Artists;

export async function getStaticProps() {
  const artists = await getArtists();

  return {
    props: {
      artists: artists?.map((artist) => ({
        id: artist.id,
        name: artist.name,
        url: artist.url,
      })),
    },
    revalidate: 5,
  };
}
