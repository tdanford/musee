import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Muse&eacute; Example</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Muse&eacute; Examples
        </h1>

        <div className={styles.grid}>
          <Link href="/documentation">
            <a className={styles.card}>
              <h2>Three Simple Steps</h2>
              <p>An example of three steps.</p>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
