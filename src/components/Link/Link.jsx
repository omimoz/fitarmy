import { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { PageContext } from "../../context/PageContext";
const Link = ({ page }) => {
  const { selectedPage, setSelectedPage } = useContext(PageContext);
  return (
    <AnchorLink
      onClick={() => setSelectedPage(page)}
      href={`#${page}`}
      className={` transition duration-500 hover:text-primary-300 ${
        page === selectedPage ? "text-primary-500" : "text-inherit"
      }`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
