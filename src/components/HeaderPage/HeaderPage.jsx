import useDeviceSize from "../../hooks/useDeviceSize";
import { css } from "@emotion/css";
import { Image } from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const HeaderPage = ({ video, title, img, placeholder }) => {
  const [width] = useDeviceSize();
  const { t } = useTranslation();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className={style(width)}>
        <div className="TopBanner">
          <div className="textWrapp">
            <div className="subTitle">{t("services.singlePage.qout")}</div>
            <div className="title">{title}</div>
          </div>
          <div className="video">
            {video && (
              <video
                autoPlay="true"
                loop="true"
                src={video}
                width={"100%"}
                muted={"true"}
                placeholder={placeholder}
              />
            )}
            {img && <Image src={img} preview={false} />}
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderPage;
const style = (width) => css`
  .TopBanner {
    overflow: hidden;
    position: relative;
  }
  .textWrapp {
    padding-top: ${width / 10}px;
    padding-bottom: ${width / 14}px;
    position: relative;
    z-index: 1;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000b3;
  }
  .subTitle {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #caba9c;
    font-weight: 300;
    font-size: ${width / 50}px;
    margin-bottom: ${width / 100}px;
  }
  .title {
    color: #ffffff;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: ${width / 20}px;
    font-weight: bold;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .ant-image {
      height: 100%;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
