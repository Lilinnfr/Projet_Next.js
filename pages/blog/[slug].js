import { useRouter } from 'next/router'
import React from 'react'

export default function article() {

  const router = useRouter()

  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);

  return (
    <div>Plats</div>
  )
}
