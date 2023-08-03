import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import About from "../components/About/About";
import Reptarium from "../components/Reptarium/Reptarium";
import FAQ from "../components/FAQ/FAQ";

export default function Home() {
  return (
    <div className="container-global">
      <Head>
        <title>Lizard Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBlock />

      <About />

      <Reptarium />

      <FAQ />

      <div className={styles.hero} />
      
    </div>
  );
}

