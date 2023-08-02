import Dropdown from "../Dropdown/Dropdown";
import styles from "./FAQ.module.scss";

const myData = {
  id: 1,
  title: "Title",
  text: "Text",
};

const FAQ = () => {
  return (
    <div className="container">
      <div className={styles.faq}>
        <div className={styles.titles}>
          <h3 className={styles.title}>
            <span className={styles.gradientText}>FAQ</span>
          </h3>
          <h4 className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet nisi faucibus, pretium dui quis, tempus ex.
          </h4>
        </div>

        <div className={styles.dropdownWrapper}>
          <Dropdown myData />
          <div className={styles.line} />
          <Dropdown myData />
          <div className={styles.line} />
          <Dropdown myData />
          <div className={styles.line} />
          <Dropdown myData />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
