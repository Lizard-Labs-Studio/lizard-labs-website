import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lizard Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* <Navbar /> */}
        <h1>Hello</h1>
      </div>
    </div>
  );
}
