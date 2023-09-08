import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link href="/">Accueil</Link>
        <Link href="/lists">Catégories</Link>
        <Link href="/quotes">Citations</Link>
        <Link href="/ssr">BTC</Link>
    </nav>
  )
}

