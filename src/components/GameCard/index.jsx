export const GameCard = ({ game }) => {
  return (
    <div
      //   onClick={() => {
      //     clickHandler(<Detail id={game['id']} changeSection={clickHandler} />);
      //   }}
      className="card"
    >
      <img src={game['background_image']} />
      <p>{game['name']}</p>
      <div className="values">
        <div className="discount">-20%</div>
        <div className="prices">
          <del className="previous">$10</del>
          <span className="current">$5</span>
        </div>
      </div>
    </div>
  );
};
