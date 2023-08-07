import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import About from "../components/About/About";
import Reptarium from "../components/Reptarium/Reptarium";
import FAQ from "../components/FAQ/FAQ";
import client from "../contentful";

export default function Home({ home, faq, aboutCards }) {
  const {
    heroTitle,
    heroSubtitle,
    aboutTitle,
    aboutSubtitle,
    reptariumTitle,
    reptariumSubtitle,
    faqTitle,
    faqSubtitle,
    ytVideoLink,
  } = home.fields;

  console.log(faq);

  return (
    <div className="container-max">
      <div className={styles.circeBg1} />
      <div className={styles.circeBg2} />
      <div className={styles.circeBg3} />

      <div className="container-global">
        <Head>
          <title>Lizard Labs | Home</title>
        </Head>

        <HeroBlock heroTitle={heroTitle} heroSubtitle={heroSubtitle} />

        <About
          aboutTitle={aboutTitle}
          aboutSubtitle={aboutSubtitle}
          aboutCards={aboutCards}
        />

        <Reptarium
          reptariumTitle={reptariumTitle}
          reptariumSubtitle={reptariumSubtitle}
          ytVideoLink={ytVideoLink}
        />

        <FAQ faqTitle={faqTitle} faqSubtitle={faqSubtitle} faq={faq} />

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

export const getServerSideProps = async () => {
  const home = await client.getEntries({
    content_type: "homePage",
    limit: 1,
  });

  const faq = await client.getEntries({
    content_type: "faqList",
  });

  const aboutCards = await client.getEntries({
    content_type: "homePageAboutCards",
  });

  const [homePage] = home.items;

  return {
    props: {
      home: homePage,
      faq: faq.items,
      aboutCards: aboutCards.items,
    },
  };
};
