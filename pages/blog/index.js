import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function index() {

  const restaurant = "/assets/restaurant.jpg"

  return (
    <div>
      <h1>Le blog</h1>
      <Link href={`/blog/Top 10 plats d'hiver`}>Top 10 plats d'hiver</Link>
      <Image src={restaurant} width={2400} height={1600} />
    </div>
  )
}
