import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic - web3 database</title>
        <meta name="description" content="Basic - a web3 database for user owned data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Basic
        </h1>

        <p className={styles.description}>
          a web3 database for self-sovereign data
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Self-soveriegn data</h2>
            <p>Data is private, encrypted, and owned by the user</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Serverless APIs</h2>
            <p>Get started in minutes with auto-generated APIs, and scale effortlessly</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Composable</h2>
            <p>Build open protocols, and let data flow easily between apps</p>
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Open Source</h2>
            <p>
              Open ecosystem with clients to integrate and deploy anywhere
            </p>
          </a>
        </div>
      </main>
    {/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
