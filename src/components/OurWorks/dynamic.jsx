import { Image } from "antd";
import Title from "../Title/Title";
import { css } from "@emotion/css";
import ImageMask from "./ImageMask";
import { useTranslation } from "react-i18next";
import useDeviceSize from "../../hooks/useDeviceSize";
const OurWorksD = ({ data }) => {
  const [width] = useDeviceSize();
  const { t } = useTranslation();
  return (
    <div className={style}>
      <Title main={t(data?.title)} sub={t(data?.sub)} />
      <div className={`${width < 1000 ? "block" : "flex"} wrapper`}>
        <div className={`${width < 1000 ? "full" : "col2"}`}>
          <div className="flex">
            <div className="half">
              <Image
                src={data?.img1}
                preview={{
                  mask: <ImageMask video={data?.video} img={data?.img1} />,
                  visible: false,
                }}
              />
            </div>
            <div className="half">
              <div>
                <div>
                  <Image
                    src={data?.img2}
                    preview={{
                      mask: <ImageMask video={data?.video} img={data?.img2} />,
                      visible: false,
                    }}
                  />
                </div>
                <div>
                  <Image
                    src={data?.img3}
                    preview={{
                      mask: <ImageMask video={data?.video} img={data?.img3} />,
                      visible: false,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${width < 1000 ? "flex" : "culomn"}`}>
          <div>
            <Image
              src={data?.img6}
              preview={{
                mask: <ImageMask video={data?.video} img={data?.img6} />,
                visible: false,
              }}
            />
          </div>
          <div>
            <Image
              src={data?.img5}
              preview={{
                mask: <ImageMask video={data?.video} img={data?.img5} />,
                visible: false,
              }}
            />
          </div>
        </div>
        <div className={`${width < 1000 ? "full" : "col2"}`}>
          <Image
            src={data?.img4}
            preview={{
              mask: <ImageMask video={data?.video} img={data?.img4} />,
              visible: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurWorksD;
const style = css`
  .culomn {
    width: 20%;
  }
  .col2 {
    width: 40%;
  }
  .half {
    width: 50%;
    display: inline-block;
  }
  .block {
    display: block;
  }
  .full {
    width: 100%;
  }
  .wrapper {
    background: #262626;
  }
`;
