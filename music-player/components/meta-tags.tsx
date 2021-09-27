import Head from "next/head";

const MetaTags = ({ title, description }: any) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Martin Petrov" />
    <meta name="description" content={description} />
    <meta
      name="keywords"
      content="NextJS, Next, Firebase, SPA, Music Player, Music-Player, music player, music-player"
    />
  </Head>
);

MetaTags.getInitialProps = async function () {
  const link: string = process.env.CLIENT_API as string;
  const res = await fetch(link);
  const { title, description } = await res.json();
  return { title, description };
};

export default MetaTags;
