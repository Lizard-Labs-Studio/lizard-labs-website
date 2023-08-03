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
    <div className="container-max">
      <div className={styles.circeBg1} />
      <div className={styles.circeBg2} />
      <div className={styles.circeBg3} />

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
        <div className={styles.hero2} />

        <div className={styles.bgAnim}>
          {/* <div className={styles.shadow}></div> */}
          <div className={styles.saturnWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.dot}>
              <p>React.js & Next.js</p>
            </div>
          </div>

          <div className={styles.saturnWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.dot}>
              <p>UX/UI</p>
            </div>
          </div>

          <div className={styles.saturnWrapper}>
            <div className={styles.circle}></div>
            <div className={styles.dot}>
              <p>Express.js</p>
            </div>
          </div>
          <div className={styles.saturn}></div>
        </div>
      </div>
    </div>
  );
}
