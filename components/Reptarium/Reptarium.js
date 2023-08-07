import styles from "./Reptarium.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Reptarium = ({ reptariumTitle, reptariumSubtitle, ytVideoLink }) => {
  console.log(ytVideoLink);
  return (
    <div className="container">
      <div className={styles.reptarium}>
        <div className={styles.titles}>
          <h3 className={styles.title}>
            <span className={styles.gradientText}>
              {reptariumTitle.split(" ")[0]}
            </span>{" "}
            {reptariumTitle.split(" ").slice(1).join(" ")}
          </h3>
          <h4 className={styles.subtitle}>
            {documentToReactComponents(reptariumSubtitle)}
          </h4>
        </div>

        {ytVideoLink ? (
          <iframe
            src={ytVideoLink}
            class="youtube-video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Reptarium;
