export const WineList = (props) => {
  const { list, onClick } = props;
  return (
    <div>
      <ul className="wine-list">
        {list.map((wine, index) => {
          return (
            <li key={wine} className="wine-item">
              <img
                src="https://img.freepik.com/premium-photo/a-bottle-of-wine-with-a-label-that-says-dummie-on-it_655090-279078.jpg?w=1380"
                alt=""
                className="wine-image"
              />
              <p className="wine-name">{wine.name}</p>
              <p className="wine-price">{wine.price}</p>
              <p className="wine-comment">{wine.comment}</p>
              <button onClick={() => onClick(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
