import { Image } from "antd";
import Title from "../Title/Title";
import { css } from "@emotion/css";
import useDeviceSize from "../../hooks/useDeviceSize";
import ImageMask from "./ImageMask";
import { useTranslation } from "react-i18next";

const OurWorks = () => {
  const [width] = useDeviceSize();
  const { t } = useTranslation();
  return (
    <div className={style}>
      <Title main={t("ourworks.title.p2")} sub={t("ourworks.title.p1")} />
      <div className={`${width < 1000 ? "block" : "flex"} wrapper`}>
        <div className={`${width < 1000 ? "full" : "col2"}`}>
          <div className="flex">
            <div className="half">
              <Image
                src="./works1.jpg"
                preview={{
                  mask: (
                    <ImageMask
                      video={"./works1.mp4"}
                      img={"./works1.jpg"}
                    />
                  ),
                  destroyOnClose: true,
                  visible: false,
                }}
              />
            </div>
            <div className="half">
              <div>
                <div>
                  <Image
                    src="./works2.jpg"
                    preview={{
                      mask: (
                        <ImageMask
                          video={"./works2.mp4"}
                          img={"./works2.jpg"}
                        />
                      ),
                      visible: false,
                    }}
                  />
                </div>
                <div>
                  <Image
                    src="./works3.jpg"
                    preview={{
                      mask: (
                        <ImageMask
                          video={"./works3.mp4"}
                          img={"./works3.jpg"}
                        />
                      ),
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
              src="./works6.jpg"
              preview={{
                mask: <ImageMask video={"./works6.mp4"} img={"./works6.jpg"} />,
                visible: false,
              }}
            />
          </div>
          <div>
            <Image
              src="./works5.jpg"
              preview={{
                mask: <ImageMask video={"./works5.mp4"} img={"./works5.jpg"} />,
                visible: false,
              }}
            />
          </div>
        </div>
        <div className={`${width < 1000 ? "full" : "col2"}`}>
          <Image
            src="./works4.jpg"
            preview={{
              mask: <ImageMask video={"./works4.mp4"} img={"./works4.jpg"} />,
              visible: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
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
