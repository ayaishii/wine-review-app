import { useState } from "react";
import { Modal } from "./components/Modal/Modal";
import "./styles.css";
import { WineList } from "./components/WineList";

export const App = () => {
  const [wineItem, setWineItem] = useState([]);

  // ワインの削除
  const onClickDelete = (index) => {
    const newWineItems = [...wineItem];
    newWineItems.splice(index, 1);
    setWineItem(newWineItems);
  };

  const wineItemNumber = () => {
    return <p className="wine-item-number">{wineItem.length}件</p>;
  };

  return (
    <>
      <div className="container">
        <h1>一覧</h1>
        <Modal wineItem={wineItem} setWineItem={setWineItem} />
        {wineItemNumber()}
        <WineList list={wineItem} onClick={onClickDelete} />
      </div>
    </>
  );
};
