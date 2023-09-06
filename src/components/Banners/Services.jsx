import useDeviceSize from "../../hooks/useDeviceSize";
import { Col, Image, Row } from "antd";
import ServicesMobile from "./ServicesMobile";
import { css } from "@emotion/css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [width] = useDeviceSize();
  const { t } = useTranslation();
  const responsivLargeTxt = width < 1150 ? "s" : "md";
  return width < 750 ? (
    <>
      <ServicesMobile />
    </>
  ) : (
    <Row className={style}>
      <Col md={{ span: 16 }}>
        <Row>
          <Col md={{ span: 12 }}>
            <Image
              src="./beauty_salon_features_1_mini.jpg"
              preview={false}
              placeholder={
                <Image preview={false} src="./1-holderi.jpg" width={"100%"} />
              }
            />
          </Col>
          <Col md={{ span: 12 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="wrappTxt"
            >
              <p className={`s primarytxt bold`}>{t("services.sec1.p1")}</p>
              <p className={`${responsivLargeTxt} primarytxt`}>
                {t("services.sec1.p2")}
              </p>
              <p className={`${responsivLargeTxt} primaryColor thin`}>
                {t("services.sec1.p3")}
              </p>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 12 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="wrappTxt"
            >
              <p className={`s primarytxt bold`}>{t("services.sec2.p1")}</p>
              <p className={`${responsivLargeTxt} primarytxt`}>
                {t("services.sec2.p2")}
              </p>
              <p className={`${responsivLargeTxt} primaryColor thin`}>
                {t("services.sec2.p3")}
              </p>
            </motion.div>
          </Col>
          <Col md={{ span: 12 }}>
            <Image
              src="./beauty_salon_features_2_mini.jpg"
              preview={false}
              placeholder={
                <Image preview={false} src="./2-holderi.jpg" width={"100%"} />
              }
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 12 }}>
            <Image
              src="./beauty_salon_features_3_mini.jpg"
              preview={false}
              placeholder={
                <Image preview={false} src="./3-holderi.jpg" width={"100%"} />
              }
            />
          </Col>
          <Col md={{ span: 12 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="wrappTxt"
            >
              <p className={`s primarytxt bold`}>{t("services.sec3.p1")}</p>
              <p className={`${responsivLargeTxt} primarytxt`}>
                {t("services.sec3.p2")}
              </p>
              <p className={`${responsivLargeTxt} primaryColor thin`}>
                {t("services.sec3.p3")}
              </p>
            </motion.div>
          </Col>
        </Row>
      </Col>
      <Col md={{ span: 8 }} className="bg-black flex col flex-start">
        <div>
          <Image
            src="./beauty_salon_features_4_mini.jpg"
            preview={false}
            placeholder={
              <Image preview={false} src="./4-holderi.jpg" width={"100%"} />
            }
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="wrappTxt"
        >
          <p className={`s white bold`}>{t("services.sec4.p1")}</p>
          <p className={`${responsivLargeTxt} white`}>
            {t("services.sec4.p2")}
          </p>
          <p className={`${responsivLargeTxt} primaryColor thin`}>
            {t("services.sec4.p3")}
          </p>
        </motion.div>
      </Col>
    </Row>
  );
};

export default Services;
const style = css`
  overflow: hidden;
  .wrappTxt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 5%;
  }
  .bg-black {
    background-color: rgb(22, 22, 22);
  }
`;
