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
          Basic Network
        </h1>

        <p className={styles.description}>
          a decentralized database network, for the user-owned web
        <br/>
     

        </p>

        <a href="https://airtable.com/shr5ALU6Ha9uBzErA" target="_blank" rel="noreferrer" style={{

          color: 'white', 
          fontSize: 20,
          backgroundColor: '#0070f3',
          padding: 10, 
          borderRadius: 10,
        }}>Early Access</a>



        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Self-soveriegn data</h2>
            <p>Data is always private, encrypted, and owned by the user</p>
          </div>

          <div className={styles.card}>
            <h2>Serverless APIs</h2>
            <p>Get started in minutes with auto-generated APIs, and scale effortlessly</p>
          </div>

          <div className={styles.card}>
            <h2>Composable</h2>
            <p>Build open protocols, and let data flow easily between apps</p>
          </div>

          <div className={styles.card}>
            <h2>Open Source</h2>
            <p>
              Open ecosystem with clients to integrate and deploy anywhere
            </p>
          </div>
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
