import React from 'react';
import Jail from './Jail';
import './OutPieces.css';


function OutPieces(props) {
  return (
    <div className="out-pieces">
      <div>
        {props.isWin ? (<div className="player">Player {props.player + 1} wins</div>):
        <div className="player">Current Player {props.player + 1}</div>}
        <button onClick={props.newGame}>New Game</button>
      </div>
      <Jail jail={props.jail} />
    </div>
  )
}

export default OutPieces;
