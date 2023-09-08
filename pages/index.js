
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';


export default function Home(props) { // on n'oublie pas d'ajouter nos props ici sinon inutilisable

  // console.log(props);

  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Titre</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.titre} >Vocabulaire</h1>
        <table className={styles.tableau}>
          <tbody>
            {props.array.map(el => ( 
              <tr key={uuidv4()}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
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