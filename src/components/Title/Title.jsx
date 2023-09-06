import { css } from "@emotion/css";
import { motion } from "framer-motion";
const Title = ({ sub, main, bg }) => {
  return (
    <div className={style(bg)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="sub">{sub}</p>
        <p className="main">{main}</p>
        <div className="devider"></div>
      </motion.div>
    </div>
  );
};

export default Title;
const style = (bg) => css`
  display: flex;
  background-color: ${bg ? bg : "#262626"};
  padding: 4rem;
  text-align: center;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
  .sub {
    color: var(--primary-color);
    font-weight: 300;
    font-size: 1.5em;
  }
  .main {
    color: white;
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 1em;
  }
  .devider {
    width: 75px;
    height: 1px;
    text-indent: 9999px;
    margin: 0 auto;
    background: #caba9c;
  }
`;
