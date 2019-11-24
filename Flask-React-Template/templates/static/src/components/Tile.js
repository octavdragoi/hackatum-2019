import React from 'react';

const Tile = ({weight, count, type}) => {
  return (
    <div className="tile">
      <div className="icon"><img src={`/public/img/weight/${type}.png`}/></div>
      <div className="weight">{weight}</div>
      <div className="count">{count}</div>
    </div>
  )
};

export default Tile;
