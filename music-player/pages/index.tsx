import type { NextPage } from 'next'
import Head from 'next/head'
import { Navigation } from '../components/index'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music Player</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Martin Petrov" />
        <meta name="description" content="Free Web tutorials for HTML and CSS" />
        <meta name="keywords" content="Next, Music-Player, music-player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Music Player!</a>
        </h1>
        <div className={styles.content}>
          <Navigation />
          <div className={styles.card}>
            <h2>Song title &rarr;</h2>
            <p>Content</p>

            <div className={styles.controlPanel}>
              <button>Previous</button>
              <button>Play</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </main>
    </div >
  )
}

export default Home
