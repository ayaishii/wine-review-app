import { useState } from "react";
import { Modal } from "./components/Modal/Modal";
import "./styles.css";
import { WineList } from "./components/WineList";

export const App = () => {
  const [wineList, setWineList] = useState([]);

  const onClickDelete = (index) => {
    const newWineItems = [...wineList];
    newWineItems.splice(index, 1);
    setWineList(newWineItems);
  };

  const wineItemNumber = () => {
    return <p className="wine-item-number">{wineList.length}件</p>;
  };

  return (
    <>
      <div className="container">
        <h1>一覧</h1>
        <Modal wineList={wineList} setWineList={setWineList} />
        {wineItemNumber()}
        <WineList list={wineList} onClick={onClickDelete} />
      </div>
    </>
  );
};
