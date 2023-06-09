import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

import Count from "@/components/ProxyCount";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Count />
        
        <Link href="/pg2">Go to page 2</Link>
      </main>
    </>
  );
}
