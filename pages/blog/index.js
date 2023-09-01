import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
      <h1>Le blog</h1>
      <Link href={`/blog/Top 10 plats d'hiver`}>Top 10 plats d'hiver</Link>
    </div>
  )
}
