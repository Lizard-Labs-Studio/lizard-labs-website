import Button from "../Button/Button";
import styles from "./HeroBlock.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

const HeroBlock = () => {
  return (
    <div className="container">
      <div className={styles.heroBlock}>
        <div className={styles.titles}>
          <h1 className={styles.title}>
            <span className={styles.gradientText}>Discover</span> the <br /> world in a new <br /> way
          </h1>
          <h2 className={styles.subtitle}>
            Development of games of any complexity
          </h2>
        </div>

        <Button type="simple">Contact Us</Button>

      </div>
    </div>
  );
};

export default HeroBlock;
