import HeroSlider, { Overlay, Slide } from "hero-slider";
import { css } from "@emotion/css";
import useDeviceSize from "../../hooks/useDeviceSize";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const TopBanner = () => {
  const [width] = useDeviceSize();
  const { t, i18n } = useTranslation();
  const responsivTxt =
    width < 600 ? "s" : width < 900 ? "md" : width < 1200 ? "lg" : "xl";
  return (
    <div className={style(i18n.language)}>
      <div className="placeHolder">
        <img src="./mainPlaceHolderi.jpg" width={"100%"} height={"100%"} />
      </div>
      <HeroSlider
        className="slider"
        height={"100vh"}
        accessibility={{
          shouldDisplayButtons: false,
        }}
      >
        <Overlay className="textsSlider">
          <motion.div
            className={`innerWrapper ${width < 750 ? "left" : "right"} ${
              i18n.language === "ir" ? "ar-lang" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className={`thin primary txt ${responsivTxt}`}>
              {t("home.topBannerSec1")}
            </p>
            <p className={`bold txt white ${responsivTxt}`}>
              {t("home.topBannerSec2")}
            </p>
            <p className={`thin txt white ${responsivTxt}`}>
              {t("home.topBannerSec3")}
            </p>
            <p className={`bold primary txt ${responsivTxt}`}>
              {t("home.topBannerSec4")}
            </p>
            <p className={`bold primary txt border ${responsivTxt}`}>
              {t("home.topBannerSec5")}
            </p>
          </motion.div>
        </Overlay>

        <Slide
          background={{
            backgroundImageSrc: "./mainbanner.jpg",
          }}
        />
      </HeroSlider>
    </div>
  );
};

export default TopBanner;
const style = (lang) => css`
  .thin {
    font-weight: 300;
  }
  .bold {
    font-weight: 700;
  }
  .primary {
    color: var(--primary-color);
  }

  .white {
    color: white;
  }
  .border {
    width: fit-content;
    border-bottom: 1px solid var(--primary-color);
  }
  .innerWrapper {
    position: absolute;

    padding-left: 40px;
    padding-right: 40px;
  }
  .right {
    top:${lang === "ir" ? "20%" : "30%"} ;
    right: 10rem;
  }
  .left {
    top: 40%;
    left: ${lang === "ir" ? "unset" : "0rem"};
    right: ${lang === "ir" ? "0rem" : "unset"};
  }

  .placeHolder {
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
      filter: blur(5px);
    }
  }
`;
