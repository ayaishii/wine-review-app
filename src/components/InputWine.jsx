export const InputWine = (props) => {
  const {
    wineName,
    onChangeWineName,
    winePrice,
    onChangeWinePrice,
    wineComment,
    onChangeWineComment,
    onClick,
  } = props;

  const handleChange = (event, onChangeFunction) => {
    onChangeFunction(event.target.value);
  };

  return (
    <div>
      <div className="input-wine">
        <input
          type="text"
          placeholder="名前を入力"
          value={wineName}
          onChange={(event) => handleChange(event, onChangeWineName)}
        ></input>
      </div>
      <div className="input-wine">
        <input
          type="number"
          placeholder="価格を入力"
          value={winePrice}
          onChange={(event) => handleChange(event, onChangeWinePrice)}
        ></input>
        <p className="input-disc">数字のみ</p>
      </div>
      <div className="input-wine">
        <input
          type="text"
          placeholder="コメントを入力"
          value={wineComment}
          onChange={(event) => handleChange(event, onChangeWineComment)}
        ></input>
      </div>
      <button className="btn-full" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
