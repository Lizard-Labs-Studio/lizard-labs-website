import styles from "./Dropdown.module.scss";
import { useState } from "react";

const Dropdown = ({ data, width }) => {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className={styles.dropdownBranch}>
      <div className={styles.head}>
        <h5 className={styles.question}>Question</h5>
        <div
          className={styles.arrow}
          style={{
            transform: `rotate(-${open ? 0 : 90}deg)`,
          }}
        />
      </div>

      <div className={open ? styles.bodyActive : styles.body}>
        <p className={styles.answer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea
          nobis, ipsam at accusamus odit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas ea nobis, ipsam at accusamus odit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea nobis,
          ipsam at accusamus odit.
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
