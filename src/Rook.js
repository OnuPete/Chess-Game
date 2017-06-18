import React from 'react';
import Cube from './Cube';
import './Rook.css';

function Rook(props) {
  return (
    <div className="rook">
      <Cube player={props.player}/>
    </div>
  )
}

export default Rook;
