import Dropdown from "../components/Dropdown/Dropdown";
import styles from "../styles/About.module.scss";
import client from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
};

const about = ({ about, strengths, team }) => {
  const {
    heroTitle,
    heroSubtitle,
    strengthsTitle,
    strengthsImage,
    strengthsSubtitle,
    teamTitle,
    teamSubtitle,
  } = about.fields;

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="container-max">
      <Head>
        <title>Lizard Labs | About Us</title>
      </Head>
      <div className={styles.circeBg1} />
      <div className={styles.circeBg2} />
      <div className={styles.circeBg3} />

      <div className={styles.about}>
        <div className={styles.heroBlock}>
          <div className={styles.titles}>
            <div className={styles.titleWrapper}>
              <div className={styles.titleMainWrapper}>
                <h3 className={styles.titleMain}>
                  <span className={styles.gradientText}>
                    {heroTitle.split(" ")[0]}
                  </span>{" "}
                  {heroTitle.split(" ").slice(1).join(" ")}
                </h3>
              </div>

              <div className={styles.scrollText}>
                {[...Array(9)].map((item, index) => (
                  <h3 key={index} className={styles.scrollTitle}>
                    {heroTitle}
                  </h3>
                ))}
              </div>
            </div>

            <h4 className={styles.subtitle}>
              {documentToReactComponents(heroSubtitle)}
            </h4>
          </div>
        </div>
        <div className="container">
          <div className={styles.strengthsBlock}>
            <div className={styles.titles}>
              <h3 className={styles.title}>
                <span className={styles.gradientText}>
                  {strengthsTitle.split(" ")[0]}
                </span>{" "}
                {strengthsTitle.split(" ").slice(1).join(" ")}
              </h3>
              <h4 className={styles.subtitle}>
                {documentToReactComponents(strengthsSubtitle)}
              </h4>
            </div>

            <div className={styles.strengthsListWrapper}>
              <div className={styles.strengthsImage}>
                <Image
                  src={`https:${strengthsImage.fields.file.url}`}
                  alt={strengthsImage.title}
                  objectFit="cover"
                  layout="fill"
                />
              </div>

              <div className={styles.strengthsList}>
                {strengths.map((strengthItem, index) => (
                  <Dropdown
                    faqItem={strengthItem}
                    length={strengths.length}
                    key={strengthItem.fields.slug}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.teamBlock}>
            <div className={styles.titles}>
              <h3 className={styles.title}>
                <span className={styles.gradientText}>
                  {teamTitle.split(" ")[0]}
                </span>{" "}
                {teamTitle.split(" ").slice(1).join(" ")}
              </h3>
              <h4 className={styles.subtitle}>
                {documentToReactComponents(teamSubtitle)}
              </h4>
            </div>

            <div className={styles.cards}>
              {team ? (
                team.map((card) => (
                  <div key={card.fields.slug} className={styles.card}>
                    <div className={styles.cardImage}>
                      <Image
                        src={`https:${card.fields.employeeImage.fields.file.url}`}
                        alt={card.fields.employeeImage.fields.title}
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>

                    <div className={styles.cardinfo}>
                      <h5 className={styles.cardName}>
                        {card.fields.fullName}
                      </h5>
                      <p className={styles.cardPosition}>
                        {card.fields.position}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <h1>Load</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default about;

export const getServerSideProps = async () => {
  const about = await client.getEntries({
    content_type: "aboutPage",
    limit: 1,
  });

  const strengths = await client.getEntries({
    content_type: "strengthsList",
  });

  const team = await client.getEntries({
    content_type: "studioTeam",
  });

  const [aboutPage] = about.items;

  return {
    props: {
      about: aboutPage,
      strengths: strengths.items,
      team: team.items,
    },
  };
};
