import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { checkout } from "../checkout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Servicing Packages: </h1>

        <br />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Shell Service Package</h2>
            <h3>$128.00</h3>
            <p>Fully synthetic 5W30 Engine oil 4L (Basic)</p>
            <p>Oil filter- OEM</p>
            <p>33 points check</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Mobil-one Service Package</h2>
            <h3>$138.00</h3>
            <p>Fully synthetic 5W30 Engine oil 4L (Made in USA)</p>
            <p>Oil filter- OEM</p>
            <p>33 points check</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Castrol Service Package</h2>
            <h3>$148.00</h3>
            <p>Fully synthetic 5W30 Engine oil 4L (Made in France)</p>
            <p>Oil filter- OEM</p>
            <p>33 points check</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>LiquidMoly Service Package</h2>
            <h3>$158.00</h3>
            <p>Fully synthetic 5W40 Engine oil 4L (Made in Germany) </p>
            <p>Oil filter</p>
            <p>50 points check</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
