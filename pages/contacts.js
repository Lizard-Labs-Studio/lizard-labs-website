import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contacts.module.scss";
import { toast } from "react-toastify";

const Contacts = () => {
  const form = useRef();
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            setFormInfo({
              name: "",
              email: "",
              message: "",
            });
            toast.success("Email has been sent", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      toast.warn("One of the fields is empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const validate = () => {
    if (
      formInfo.name !== "" &&
      formInfo.email !== "" &&
      formInfo.message !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <div className={styles.contacts}>
        <div className={styles.titles}>
          <h3 className={styles.title}>
            <span className={styles.gradientText}>Contact </span> Us
          </h3>
          <h4 className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet nisi faucibus, pretium dui quis, tempus ex.{" "}
          </h4>
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles.formWrapper}>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Send</button>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.formHead}>
              <div className={styles.textFieldWrapper}>
                <div className={styles.textFieldBody}>
                  <input
                    className={styles.textField}
                    type="text"
                    autoComplete="on"
                    placeholder=" "
                    name="user_name"
                    value={formInfo.name}
                    onChange={(event) =>
                      setFormInfo({ ...formInfo, name: event.target.value })
                    }
                  />

                  <label className={styles.label}>Name</label>
                </div>
                {/* <p className={styles.errorMsg}>Error</p> */}
              </div>
              <div className={styles.textFieldWrapper}>
                <div className={styles.textFieldBody}>
                  <input
                    className={styles.textField}
                    type="email"
                    autoComplete="on"
                    placeholder=" "
                    name="user_email"
                    value={formInfo.email}
                    onChange={(event) =>
                      setFormInfo({ ...formInfo, email: event.target.value })
                    }
                  />

                  <label className={styles.label}>Email</label>
                </div>

                {/* <p className={styles.errorMsg}>Error</p> */}
              </div>
            </div>
            <div className={styles.textFieldWrapper}>
              <div className={styles.textFieldBodyFull}>
                <textarea
                  className={styles.textField}
                  type="text"
                  autoComplete="on"
                  placeholder=" "
                  name="message"
                  value={formInfo.message}
                  onChange={(event) =>
                    setFormInfo({ ...formInfo, message: event.target.value })
                  }
                />

                <label className={styles.labelTop}>Message</label>
              </div>

              {/* <p className={styles.errorMsg}>Error</p> */}
            </div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactInfoWrapper}>
              <div className={styles.socialsBlock}>
                <div className={styles.socialTitle}>Follow</div>
                <div className={styles.socialLinks}>
                  <div className={styles.facebookIcon} />
                  <div className={styles.instagramIcon} />
                  <div className={styles.linkedinIcon} />
                </div>
              </div>

              <div className={styles.mailBlock}>
                <div className={styles.mailTitle}>Write</div>
                <p className={styles.mail}>lizardlab@gmail.com</p>
              </div>
            </div>

            <button className={styles.button}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
