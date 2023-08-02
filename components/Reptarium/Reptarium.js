import styles from "./Reptarium.module.scss";

const Reptarium = () => {
  return (
    <div className="container">
      <div className={styles.reptarium}>
        <div className={styles.titles}>
          <h3 className={styles.title}>
            <span className={styles.gradientText}>Reptarium</span>
          </h3>
          <h4 className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet nisi faucibus, pretium dui quis, tempus ex.
          </h4>
        </div>

        <iframe
          src="https://www.youtube.com/embed/cFXO-82Eodo"
          class="youtube-video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Reptarium;
