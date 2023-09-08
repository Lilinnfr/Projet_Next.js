import React from 'react'

export default function ssr(props) {
  return (
    <div>
        Le BTC est à : {props.results.bpi.EUR.rate}
    </div>
  )
}

export async function getServerSideProps() {
    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const results = await data.json()

    return {
        props: {
            results
        }
    }
}
