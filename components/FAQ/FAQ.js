import Dropdown from "../Dropdown/Dropdown";
import styles from "./FAQ.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const myData = {
  id: 1,
  title: "Title",
  text: "Text",
};

const FAQ = ({ faqTitle, faqSubtitle, faq }) => {
  return (
    <div className="container">
      <div className={styles.faq}>
        <div className={styles.titles}>
          <h3 className={styles.title}>
            <span className={styles.gradientText}>
              {faqTitle.split(" ")[0]}
            </span>{" "}
            {faqTitle.split(" ").slice(1).join(" ")}
          </h3>
          <h4 className={styles.subtitle}>
            {documentToReactComponents(faqSubtitle)}
          </h4>
        </div>

        <div className={styles.dropdownWrapper}>
          {faq.map((faqItem, index) => (
            <Dropdown
              faqItem={faqItem}
              length={faq.length}
              key={faqItem.fields.slug}
              index={index}
            />
          ))}
          {/* <Dropdown myData />
          <div className={styles.line} />
          <Dropdown myData />
          <div className={styles.line} />
          <Dropdown myData />
          <div className={styles.line} />
          <Dropdown myData /> */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
