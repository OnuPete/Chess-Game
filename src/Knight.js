import React from 'react';
import './Knight.css';

function Knight(props) {
  return (
    <div className={"outer-knight " + (props.player ? 'black': 'white')}>
      <div className={"knight " + (props.player ? 'black': 'white')}>
      </div>
    </div>
  )
}

export default Knight;
