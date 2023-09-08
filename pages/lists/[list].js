import React from 'react'
import styles from '@/styles/Home.module.css'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

export default function list(props) {

    console.log(props);

    const router = useRouter()

  return (
    <div className='container'>
      <h1 className={styles.titre}>{router.query.list.charAt(0).toUpperCase() + router.query.list.slice(1)}</h1>
        <table className={styles.tableau}>
          <tbody>
            {props.currentList.map(el => ( 
              <tr key={uuidv4()}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export async function getStaticProps(context) {
    const slug = context.params.list
    const data = await import('/data/lists.json')

    const currentList = data.englishList.find(list => list.name === slug)

    return {
        props: {
            currentList: currentList.data
        }
    }
}

export async function getStaticPaths() {
    const data = await import('/data/lists.json')

    const paths = data.englishList.map(list => ({
        params: { list: list.name }
      }));

    return {
    paths,
    fallback: false
    };
}