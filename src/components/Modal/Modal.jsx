import { useState } from "react";
import "./Modal.css";
import { InputWine } from "../InputWine";

export const Modal = (props) => {
  const { wineItem, setWineItem } = props;

  // ワインの情報（名前、価格、説明文）
  const [wineInfo, setWineInfo] = useState({
    name: "",
    price: "",
    comment: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    document.body.classList.toggle("active-modal");
    setModalOpen(!modalOpen);
  };

  const onChange = (fieldName, value) => {
    setWineInfo((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  // 新規のワインを追加
  const onClickAdd = () => {
    const { name, price, comment } = wineInfo;
    if (!name || !price || !comment) return;
    const newWineItem = { ...wineInfo };
    setWineItem([...wineItem, newWineItem]);
    setWineInfo({
      name: "",
      price: "",
      comment: "",
    });
    toggleModal();
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        追加
      </button>
      {/* ワインの追加モーダル */}
      {modalOpen && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>ワインを追加する</h2>
            {/* 入力フィールド */}
            <InputWine
              wineName={wineInfo.name}
              onChangeWineName={(value) => onChange("name", value)}
              winePrice={wineInfo.price}
              onChangeWinePrice={(value) => onChange("price", value)}
              wineComment={wineInfo.comment}
              onChangeWineComment={(value) => onChange("comment", value)}
              onClick={onClickAdd}
            />
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};
