
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function Home(props) { // on n'oublie pas d'ajouter nos props ici sinon inutilisable

  const [state, setState] = useState(false)

  useEffect(() => {
    newWord()
  }, [])

  const newWord = () => {
    fetch('/api/vocapi')
    .then(response => response.json())
    .then(data => setState(data))
  }

  let randomWord;
  if(state){
    const array = state.englishList[0].data
    randomWord = array[Math.floor(Math.random() * array.length)].en
  }

  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Vocabulaire</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.titre}>Mot au hasard</h1>
        {/* <table className={styles.tableau}>
          <tbody>
            {props.array.map(el => ( 
              <tr key={uuidv4()}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
          <button
          onClick={newWord}
          className='btn btn-primary d-block m-auto'>Obtenir un mot au hasard</button>
          <h2 className='text-center'>{randomWord}</h2>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`) 
  const array = data.vocabulary; 

  return { 

    props: {
      array
    }

  }
}