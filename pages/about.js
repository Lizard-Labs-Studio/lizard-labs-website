import Dropdown from "../components/Dropdown/Dropdown";
import styles from "../styles/About.module.scss";

const about = () => {
  return (
    <div className="container-max">
      <div className={styles.circeBg1} />
      <div className={styles.circeBg2} />
      <div className={styles.circeBg3} />

      <div className="container">
        <div className={styles.about}>
          {/* <div className={styles.heroBlock}>
          <div className={styles.titles}>
            <h3 className={styles.title}>
              <span className={styles.gradientText}>Explore</span> Us
            </h3>
            <h4 className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet nisi faucibus, pretium dui quis, tempus ex.{" "}
            </h4>

            <div className={styles.shadow} />
          </div>
        </div> */}

          <div className={styles.strengthsBlock}>
            <div className={styles.titles}>
              <h3 className={styles.title}>
                <span className={styles.gradientText}>Our </span> Strengths
              </h3>
              <h4 className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sit amet nisi faucibus, pretium dui quis, tempus ex.{" "}
              </h4>
            </div>

            <div className={styles.strengthsListWrapper}>
              <div className={styles.strengthsImage} />
              <div className={styles.strengthsList}>
                <Dropdown />
                <div className={styles.line} />
                <Dropdown />
                <div className={styles.line} />
                <Dropdown />
                <div className={styles.line} />
                <Dropdown />
                <div className={styles.line} />
                <Dropdown />
              </div>
            </div>
          </div>

          <div className={styles.teamBlock}>
            <div className={styles.titles}>
              <h3 className={styles.title}>
                <span className={styles.gradientText}>Our </span> Strengths
              </h3>
              <h4 className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sit amet nisi faucibus, pretium dui quis, tempus ex.{" "}
              </h4>
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardImage} />
                <div className={styles.cardinfo}>
                  <h5 className={styles.cardName}>Name</h5>
                  <p className={styles.cardPosition}>Position</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardImage} />
                <div className={styles.cardinfo}>
                  <h5 className={styles.cardName}>Name</h5>
                  <p className={styles.cardPosition}>Position</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardImage} />
                <div className={styles.cardinfo}>
                  <h5 className={styles.cardName}>Name</h5>
                  <p className={styles.cardPosition}>Position</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardImage} />
                <div className={styles.cardinfo}>
                  <h5 className={styles.cardName}>Name</h5>
                  <p className={styles.cardPosition}>Position</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardImage} />
                <div className={styles.cardinfo}>
                  <h5 className={styles.cardName}>Name</h5>
                  <p className={styles.cardPosition}>Position</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardImage} />
                <div className={styles.cardinfo}>
                  <h5 className={styles.cardName}>Name</h5>
                  <p className={styles.cardPosition}>Position</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
