import { PageContext } from "../../context/PageContext";
import { MenuFoldOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Image, Menu, Switch } from "antd";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "../Link/Link";
import useDeviceSize from "../../hooks/useDeviceSize";

const Nav = () => {
  const [scroll, setScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const { setSelectedPage } = useContext(PageContext);
  const { t, i18n } = useTranslation();
  const [width] = useDeviceSize();
  const handleWindowResize = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleWindowResize);
    return () => window.removeEventListener("scroll", handleWindowResize);
  }, []);

  const items = [
    {
      label: <Link page={t("nav.home")} />,
      key: "home",
      onClick: () => {
        setSelectedPage(t("nav.home"));
      },
    },
    {
      label: <Link page={t("nav.services")} />,
      key: "services",
      onClick: () => {
        setSelectedPage(t("nav.services"));
      },
    },
    {
      label: <Link page={t("nav.myWorks")} />,
      key: "myWorks",
      onClick: () => {
        setSelectedPage(t("nav.myWorks"));
      },
    },

    {
      label: <Link page={t("nav.contactUs")} />,
      key: "contactUs",
      onClick: () => {
        setSelectedPage(t("nav.contactUs"));
      },
    },
    {
      label: (
        <>
          <Switch
            className="lang"
            checkedChildren="EN"
            unCheckedChildren="IR"
            defaultChecked={i18n.language === "ir" ? true : false}
            onChange={(e) =>
              e === true ? i18n.changeLanguage("ir") : i18n.changeLanguage("en")
            }
          />
        </>
      ),
      key: "lang",
    },
  ];
  return (
    <>
      <div className={style(width, i18n.language)}>
        <div className={`Wrapper ${scroll > 100 && "bgNav"}`}>
          {width && width > 950 ? (
            <Menu
              className={
                i18n.language === "ir" ? "ar-lang menuAntd" : "en-lang menuAntd"
              }
              mode="horizontal"
              items={items}
            />
          ) : width && width < 949 ? (
            <div className="ar-lang">
              <div className="icon" onClick={() => setOpen(true)}>
                <MenuFoldOutlined />
              </div>
              {open && (
                <>
                  <div onClick={() => setOpen(false)} className="mask"></div>
                  <motion.div
                    className="mobileMenu"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 0 },
                      visible: { opacity: 1, x: -50 },
                    }}
                  >
                    <Menu mode="inline" items={items} className="menuMob" />
                  </motion.div>
                </>
              )}
            </div>
          ) : (
            ""
          )}
          <div className="logo">
            <Image
              src="./logo.png"
              preview={false}
              width={width < 700 ? 40 : width < 1200 ? 55 : 70}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
const style = (width, lang) => css`
  position: relative;
  .Wrapper {
    display: flex;
    position: fixed;
    flex-direction: ${width < 700 && lang === "ir" ? "row" : "row-reverse"};
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    color: aliceblue;
  }
  .bgNav {
    background-color: #000;
  }
  .logo {
    padding: 12px;
  }
  .menu {
    ul {
      display: flex;
      gap: 2rem;
      align-items: baseline;
    }
  }

  li {
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
  }
  .icon {
    font-size: 20px;
  }
  .mobileMenu {
    position: fixed;
    right: -50px;
    background: #fff;
    z-index: 1000;
    height: 100%;
    top: 0;
    min-width: 50%;
  }
  .menuMob {
    max-height: 100vh;
    overflow-y: scroll;
  }
  .mask {
    position: fixed;
    right: 0;
    background: #00000066;
    width: 100%;
    height: 100%;
    z-index: 999;
    top: 0;
  }
  .lang {
    .ant-switch-handle:before {
      background: url(${lang === "ir" ? "./en.jpg" : "./ir.jpg"});
      background-size: cover;
      background-position: center;
    }
  }
  .menuAntd {
    width: inherit;
    background: transparent;
    color: white;
    justify-content: end;
    span,
    div,
    li {
      &:hover {
        color: var(--primary-color) !important;
      }
    }
  }
  .limit {
    text-overflow: ellipsis;
    max-width: 200px;
  }
  .ar-lang {
    justify-content: start;
  }
`;
