import useDeviceSize from "../../hooks/useDeviceSize";
import { css } from "@emotion/css";
import { Col, Image, Row } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ServicesMobile = () => {
  const { t } = useTranslation();
  const [width] = useDeviceSize();
  const responsivLargeTxt = width < 1150 ? "s" : "md";
  const cart = [
    {
      img: "./beauty_salon_features_1_mini.jpg",
      title1: t("services.sec1.p1"),
      title2: t("services.sec1.p2"),
      title3: t("services.sec1.p3"),
      placeHolde: "./1-holderi.jpg",
    },
    {
      img: "./beauty_salon_features_2_mini.jpg",
      title1: t("services.sec2.p1"),
      title2: t("services.sec2.p2"),
      title3: t("services.sec2.p3"),
      placeHolde: "./2-holderi.jpg",
    },
    {
      img: "./beauty_salon_features_3_mini.jpg",
      title1: t("services.sec3.p1"),
      title2: t("services.sec3.p2"),
      title3: t("services.sec3.p3"),
      placeHolde: "./3-holderi.jpg",
    },
    {
      img: "./beauty_salon_features_4_mini.jpg",
      title1: t("services.sec4.p1"),
      title2: t("services.sec4.p2"),
      title3: t("services.sec4.p3"),
      placeHolde: "./4-holderi.jpg",
    },
  ];

  return (
    <Row className={style}>
      {cart.map((item) => (
        <motion.div
          key={item.title2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <Col span={24} key={item.title2} className="cart">
            <Image
              src={item.img}
              preview={false}
              className="img"
              placeholder={
                <Image preview={false} src={item.placeHolde} width={"100%"} />
              }
            />
            <div className="wrappTxt">
              <p className={`s primarytxt bold`}>{item.title1}</p>
              <p className={`${responsivLargeTxt} primarytxt`}>{item.title2}</p>
              <p className={`${responsivLargeTxt} primaryColor thin`}>
                {item.title3}
              </p>
            </div>
          </Col>
        </motion.div>
      ))}
    </Row>
  );
};

export default ServicesMobile;
const style = css`
  margin: 1rem;
  .cart {
    align-items: center;
    display: flex;
    border-radius: 7px;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 1px solid var(--primary-color);
  }
  .wrappTxt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 5%;
  }
  .img {
    object-fit: cover;
    object-position: center;
    height: 100%;
  }
`;
