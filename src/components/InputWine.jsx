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

  const handleNameChange = (event) => {
    onChangeWineName(event.target.value);
  };

  const handlePriceChange = (event) => {
    onChangeWinePrice(event.target.value);
  };

  const handleCommentChange = (event) => {
    onChangeWineComment(event.target.value);
  };

  return (
    <div>
      <div className="input-item">
        <input
          placeholder="名前を入力"
          value={wineName}
          onChange={handleNameChange}
        ></input>
      </div>
      <div className="input-item">
        <input
          type="number"
          placeholder="価格を入力"
          value={winePrice}
          onChange={handlePriceChange}
        ></input>
        <p className="input-disc">数字のみ</p>
      </div>
      <div className="input-item">
        <input
          placeholder="コメントを入力"
          value={wineComment}
          onChange={handleCommentChange}
        ></input>
      </div>
      <button className="btn-full" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
