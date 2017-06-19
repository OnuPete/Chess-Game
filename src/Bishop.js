import React from 'react';
import './Bishop.css';

function Bishop(props) {
  return (
    <div className={"outer " + (props.player ? 'black': 'white')}>
    <div className={"bishop " + (props.player ? 'black': 'white')}>
    </div>
    </div>
  )
}

export default Bishop;
