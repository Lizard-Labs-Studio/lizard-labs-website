import Button from "../Button/Button";
import styles from "./HeroBlock.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const HeroBlock = ({ heroTitle, heroSubtitle }) => {
  console.log(heroTitle);

  return (
    <div className="container">
      <div className={styles.heroBlock}>
        <div className={styles.titles}>
          <h1 className={styles.title}>
            <span className={styles.gradientText}>
              {heroTitle.split(" ")[0]}
            </span>{" "}
            {heroTitle.split(" ").slice(1).join(" ")}
          </h1>
          <h2 className={styles.subtitle}>
            {documentToReactComponents(heroSubtitle)}
          </h2>
        </div>

        <Button link="/contacts" type="simple">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default HeroBlock;
