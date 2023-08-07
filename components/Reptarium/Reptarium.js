import styles from "./Reptarium.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Reptarium = ({ reptariumTitle, reptariumSubtitle, ytVideoLink }) => {
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
        {/* <iframe
          src={ytVideoLink}
          className="youtube-video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe> */}

        {ytVideoLink ? (
          <div className={styles.youtubeVideoWrapper}>
            <div className={styles.youtubeVideo}>
              <iframe
                src={ytVideoLink}
                loading="lazy"
                srcDoc={`<style>
                * {
                padding: 0;
                margin: 0;
                overflow: hidden;
                }
                
                body, html {
                  height: 100%;
                }
                
                img, .yt-btn {
                  position: absolute;
                  width: 100%;
                  top: 0;
                  bottom: 0;
                  margin: auto;
                }

                .yt-btn {
                  width: 100px;
                  height: 100px;
                  left: 50%;
                  background: rgba(36,36,36, .28);
                  border-radius: 50%;
                  backdrop-filter: blur(8px);
                  transform: translateX(-50%) scale(1);
                  border: 0.5px solid rgba(255, 255, 255, .2);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  transition: all 250ms ease-in-out;
                }

                .yt-arrow {
                    background-image: url(https://svgur.com/i/wEc.svg);
                    width: 50px;
                    height: 50px;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    transform: translateX(5px);
                }
            
                
                body:hover .yt-btn {
                  transform: translateX(-50%) scale(1.2);
                  transition: all 250ms ease-in-out;
                }
                </style>
                <a href="https://www.youtube.com/embed/cFXO-82Eodo?autoplay=1">
                  <img style="background-size:cover;width: 100%;" src="https://img.youtube.com/vi/cFXO-82Eodo/maxresdefault.jpg" alt="Reptarium">
                  <div class="yt-btn">
                    <div class="yt-arrow"></div>
                  </div>
                </a>
                `}
                className="youtube-video"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
            
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Reptarium;
