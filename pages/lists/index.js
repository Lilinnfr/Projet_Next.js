import React from 'react'
import Link from 'next/link';

export default function index(props) {

console.log(props);

  return (
    <div className="container">
      <h1 className="my-4">Listes de vocabulaire</h1>
      <ul className="list-group">
        {props.array.map(item => (
          <li className="list-group-item">
            <Link href={Object.keys(item)[0]}>{Object.keys(item)[0]}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const data = await import(`/data/lists.json`) 
  const array = data.englishList; 

  return { 

    props: {
      array
    }

  }
}