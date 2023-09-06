import  { useState } from "react";
import { PlayCircleOutlined, EyeOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Image, Modal } from "antd";
const ImageMask = ({ video, img }) => {
  const [isModalOpen, setIsModalOpen] = useState({ type: "", status: false });
  const showModal = (type) => {
    setIsModalOpen({ type: type, status: true });
  };

  const handleCancel = () => {
    setIsModalOpen({ type: "", status: false });
  };
  return (
    <div className={style}>
      <div
        className="icon"
        onClick={() => {
          showModal("video");
        }}
      >
        <PlayCircleOutlined />
      </div>
      <div
        className="icon"
        onClick={() => {
          showModal("img");
        }}
      >
        <EyeOutlined />
      </div>
      <Modal
        destroyOnClose={true}
        width={"100%"}
        style={{ maxWidth: 700 }}
        className="modal"
        title=""
        open={isModalOpen.status}
        onCancel={handleCancel}
        footer={[]}
      >
        {isModalOpen.type === "video" ? (
          <video width={"100%"} height={500} controls>
            <source src={video} />
          </video>
        ) : (
          <Image src={img} preview={false} width={"100%"} />
        )}
      </Modal>
    </div>
  );
};

export default ImageMask;
const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    background-color: #f0f8ffb0;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 199999px;
    svg {
      font-size: 32px;
    }
  }
  .modal {
    max-width: 700px;
    video {
      max-height: 500px;
    }
  }
`;
