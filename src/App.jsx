import TopBanner from "./components/Banners/TopBanner";
import Layout from "./components/Layout/Layout";
import OurWorks from "./components/OurWorks";
import { PageContext } from "./context/PageContext";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Services from "./components/Banners/Services";
export default function App() {
  const { t } = useTranslation();
  const { setSelectedPage } = useContext(PageContext);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(t("nav.home"));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <section id={t("nav.home")}>
        <TopBanner />
      </section>
      <section id={t("nav.services")}>
        <Services />
      </section>
      <section id={t("nav.myWorks")}>
        <OurWorks />
      </section>
    </Layout>
  );
}
