import React from 'react';
import Rook from './Rook';
import './Pawn.css';
import './Queen.css';

function Queen(props) {
  return (
    <div className="queen">
      <Rook player={props.player} />
      <div className={"ball " + (props.player ? "black" : "white")}> </div>
    </div>
  )
}

export default Queen;
