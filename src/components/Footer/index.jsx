import { css } from "@emotion/css";
import { Col, Image, Row } from "antd";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section id={t("nav.contactUs")}>
      <Row className={style}>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          className="logoCol box"
        >
          <Image
            preview={false}
            src={"./logo.png"}
            width={166}
            className="logo"
          />
          <p className="txt">{t("footer.sec1.about")}</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          className="box addressCol"
        >
          <div className="title">
            <span className="sec1">{t("footer.sec2.title1")} </span>
            <span className="sec2">{t("footer.sec2.title2")}</span>
          </div>
          <p className="txt2">
            {t("footer.sec2.p1")}
            <br /> {t("footer.sec2.p2")}
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          className="box phoneCol"
        >
          <div className="title">
            <span className="sec1">{t("footer.sec3.title1")} </span>
            <span className="sec2">{t("footer.sec3.title2")}</span>
          </div>
          <p className="txt2">{t("footer.sec3.p1")}</p>
          <p className="txt2">{t("footer.sec3.p2")}</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          className="box workCol"
        >
          <div className="title">
            <span className="sec1">{t("footer.sec4.title1")} </span>
            <span className="sec2">{t("footer.sec4.title2")}</span>
          </div>
          <p className="txt2">{t("footer.sec4.p1")}</p>
          <p className="txt2">{t("footer.sec4.p2")}</p>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
const style = css`
  .box {
    justify-content: center;
    flex-direction: column;
    display: flex;
    padding-left: 65px;
    height: 380px;
    padding-right: 30px;
    p {
      line-height: 25px;
    }
  }
  .logoCol {
    background: #262626;
    .logo {
      margin-bottom: 1.421em;
    }
  }
  .addressCol {
    background: #e6e1d5;
  }
  .phoneCol {
    background: #d4cec1;
  }
  .workCol {
    background: #ccbea5;
  }
  .txt {
    color: #8b8b8b;
  }
  .txt2 {
    color: #5a5a5a;
  }
  .sec1 {
    font-weight: 200;
    font-size: 24px;
    margin-bottom: 1.1em;
  }
  .sec2 {
    font-weight: 700;
    font-size: 24px;
  }
  .title {
    margin-bottom: 1.1em;
  }
`;
