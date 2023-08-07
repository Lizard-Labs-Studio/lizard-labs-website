import Image from "next/image";
import Button from "../Button/Button";
import styles from "./About.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const About = ({ aboutTitle, aboutSubtitle, aboutCards }) => {
  console.log(aboutCards);
  return (
    <div className="container">
      <div className={styles.about}>
        <div className={styles.titles}>
          <h3 className={styles.title}>
            <span className={styles.gradientText}>
              {aboutTitle.split(" ")[0]}
            </span>{" "}
            {aboutTitle.split(" ").slice(1).join(" ")}
          </h3>
          <h4 className={styles.subtitle}>
            {documentToReactComponents(aboutSubtitle)}
          </h4>
        </div>

        <div className={styles.skillsWrapper}>
          <div className={styles.skills}>
            {aboutCards.map((card) => (
              <div key={card.fields.slug} className={styles.skillBlock}>
                <div className={styles.skillImage}>
                  <Image
                    src={`https:${card.fields.image.fields.file.url}`}
                    alt={card.fields.image.fields.title}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <div className={styles.skillBody}>
                  <h5 className={styles.skillTitle}>{card.fields.title}</h5>
                  <div className={styles.skillDescription}>
                    {documentToReactComponents(card.fields.subtitle)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button type="simple">Read More</Button>
      </div>
    </div>
  );
};

export default About;
