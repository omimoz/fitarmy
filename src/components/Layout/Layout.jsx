import Footer from "../Footer";
import { useTranslation } from "react-i18next";
import Nav from "../Nav";
const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <div className={i18n.language === "ir" ? "ar-lang" : "en-lang"}>
        <Nav />

        {children}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
