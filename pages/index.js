
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar/Navbar'


export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Next.js</h1>
      </div>
    </>
  )
}
