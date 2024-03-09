import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [wineList, setWineList] = useState([]);
  const [wineName, setWineName] = useState("");
  const [winePrice, setWinePrice] = useState("");
  const [wineComment, setWineComment] = useState("");

  const onChangeWineName = (event) => setWineName(event.target.value);

  const onChangeWinePrice = (event) => setWinePrice(event.target.value);

  const onChangeWineComment = (event) => setWineComment(event.target.value);

  // 新規のワインを追加
  const onClickAdd = () => {
    if (wineName === "" || winePrice === "" || wineComment === "") return;
    const newWineItems = {
      name: wineName,
      price: winePrice,
      comment: wineComment,
    };
    setWineList([...wineList, newWineItems]);
    setWineName("");
    setWinePrice("");
    setWineComment("");
  };

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
      <div>
        <h1>一覧</h1>
        <div>
          <input
            placeholder="名前を入力"
            value={wineName}
            onChange={onChangeWineName}
          ></input>
          <input
            placeholder="価格を入力"
            value={winePrice}
            onChange={onChangeWinePrice}
          ></input>
          <input
            placeholder="コメントを入力"
            value={wineComment}
            onChange={onChangeWineComment}
          ></input>
          <button onClick={onClickAdd}>追加</button>
          {wineItemNumber()} {/* アイテム数を表示 */}
        </div>
        <ul className="wine-list">
          {wineList.map((wine, index) => {
            return (
              <li key={wine} className="wine-item">
                <img
                  src="https://doodleipsum.com/800x800/flat?i=7877005830df351b1e37f3769d479f63"
                  alt=""
                  className="wine-image"
                />
                <p className="wine-name">{wine.name}</p>
                <p className="wine-price">{wine.price}</p>
                <p className="wine-comment">{wine.comment}</p>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
