import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contacts.module.scss";
import { toast } from "react-toastify";
import client from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
};

const Contacts = ({ contacts, socials }) => {
  const form = useRef();
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { heroTitle, heroSubtitle, email } = contacts.fields;

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
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="container">
      <Head>
        <title>Lizard Labs | Contact Us</title>
      </Head>

      <div className={styles.contacts}>
        <div className={styles.titles}>
          <h3 className={styles.title}>
            <span className={styles.gradientText}>
              {heroTitle.split(" ")[0]}{" "}
            </span>{" "}
            {heroTitle.split(" ").slice(1).join(" ")}
          </h3>
          <h4 className={styles.subtitle}>
            {documentToReactComponents(heroSubtitle)}
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
            </div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactInfoWrapper}>
              <div className={styles.socialsBlock}>
                <div className={styles.socialTitle}>Follow</div>
                <div className={styles.socialLinks}>
                  {socials.items.map((social) => (
                    <div
                      key={social.fields.slug}
                      className={styles.facebookIcon}
                      style={{
                        backgroundImage: `url(${social.fields.icon.fields.file.url})`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.mailBlock}>
                <div className={styles.mailTitle}>Write</div>
                <p className={styles.mail}>{email}</p>
              </div>
            </div>

            <button className={styles.button}>Send</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contacts;

export const getServerSideProps = async () => {
  const contacts = await client.getEntries({
    content_type: "contactsPage",
    limit: 1,
  });

  const socials = await client.getEntries({
    content_type: "socialsList",
  });

  const [contactsPage] = contacts.items;

  return {
    props: {
      contacts: contactsPage,
      socials,
    },
  };
};
