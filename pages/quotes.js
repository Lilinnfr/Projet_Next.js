import React from 'react'

export default function quotes(props) {

  console.log(props);

  return (
      <div>
          <h1>{props.data[0].q}</h1>
      </div>
  )
}

export async function getStaticProps() {

  const quote = await fetch("https://zenquotes.io/api/quotes")
  const data = await quote.json()

  return {
    props: {
      data
    },
    revalidate: 10
  }
}



