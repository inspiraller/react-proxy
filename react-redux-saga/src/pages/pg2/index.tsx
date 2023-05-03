import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Count from "@/components/ProxyCount";
export default function Pg2() {
  return (
    <>
      <Head>
        <title>Page2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          Count1
          <Count />
        </div>
        <div>
          Count2
          <Count />
        </div>
        <Link href="/">Go to Home</Link>
      </main>
    </>
  );
}
