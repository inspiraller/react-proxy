import Head from 'next/head'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import useCount from '@/store-proxy/data/counter/useCount';

export default function Pg2() {
  const {state, dispatch} = useCount()

  const triggerProxyChange = () => {
    dispatch(state.count + 1);
  }

  return (
    <>
      <Head>
        <title>Page2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        count:{state.count}
        <button onClick={triggerProxyChange}>Trigger count increase</button>
        <Link href="/">Go to Home</Link>
      </main>
    </>
  )
}
