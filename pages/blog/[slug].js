import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'

export default function article() {

  const router = useRouter()

  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);

  const pushFunction = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{router.query.slug}</title>
      </Head>
      <div>
          <h1>{router.query.slug}</h1>
          <button onClick={pushFunction}>Accueil</button>
      </div>
    </>
  )
}
