
import styles from '@/styles/Home.module.css'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Titre</title>
      </Head>
      <div className={styles.container}>
        <h1>Next.js</h1>
      </div>
    </>
  )
}
