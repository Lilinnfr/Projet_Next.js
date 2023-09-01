
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Les bons p'tits plats</title>
      </Head>
      <div className={styles.container}>
        <h1>Next.js</h1>
        <button class="btn btn-primary">Bouton</button>
      </div>
    </>
  )
}
