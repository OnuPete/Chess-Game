import React from 'react';
import './Knight.css';

function Knight(props) {
  return (
    <div className={"knight " + (props.player ? 'black': 'white')}>
    </div>
  )
}

export default Knight;
