import Button from "../Button/Button";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className="container">
      <div className={styles.about}>
        <div className={styles.titles}>
          <h3 className={styles.title}>
            <span className={styles.gradientText}>About</span> Us
          </h3>
          <h4 className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet nisi faucibus, pretium dui quis, tempus ex.{" "}
          </h4>
        </div>

        <div className={styles.skillsWrapper}>
          <div className={styles.skills}>
            <div className={styles.skillBlock}>
              <div className={styles.skillImage} />
              <div className={styles.skillBody}>
                <h5 className={styles.skillTitle}>3D Environments</h5>
                <p className={styles.skillDescription}>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className={styles.skillBlock}>
              <div className={styles.skillImage} />
              <div className={styles.skillBody}>
                <h5 className={styles.skillTitle}>3D Environments</h5>
                <p className={styles.skillDescription}>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className={styles.skillBlock}>
              <div className={styles.skillImage} />
              <div className={styles.skillBody}>
                <h5 className={styles.skillTitle}>3D Environments</h5>
                <p className={styles.skillDescription}>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button type="simple">Read More</Button>
      </div>
    </div>
  );
};

export default About;
