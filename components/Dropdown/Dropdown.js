import styles from "./Dropdown.module.scss";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Dropdown = ({ faqItem, width, length, index }) => {
  const [open, setOpen] = useState(false);
  const { question, answer, slug } = faqItem.fields;

  return (
    <div className={styles.dropdownWrapper}>
      <div onClick={() => setOpen(!open)} className={styles.dropdownBranch}>
        <div className={styles.head}>
          <h5 className={styles.question}>{question}</h5>
          <div
            className={styles.arrow}
            style={{
              transform: `rotate(-${open ? 0 : 90}deg)`,
            }}
          />
        </div>

        <div className={open ? styles.bodyActive : styles.body}>
          {documentToReactComponents(answer)}
        </div>
      </div>
      {index !== length - 1 ? <div className={styles.line} /> : ""}
    </div>
  );
};

export default Dropdown;
