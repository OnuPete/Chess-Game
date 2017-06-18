import React from 'react';
import Pawn from './Pawn';
import Rook from './Rook';
import './Pawn.css';
import './King.css';

function King(props) {
  return (
    <div className="king">
      <Rook player={props.player} />
      <div className={"ball " + (props.player ? "black" : "white")}> </div>


    </div>
  )
}

export default King
