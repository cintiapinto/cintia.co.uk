import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cintia</title>
        <meta name="description" content="cintia.co.uk" />
      </Head>
      <h1>Cintia Fortes Pinto is a frontend developer based in Melbourne.</h1>
    </div>
  )
}

export default Home
