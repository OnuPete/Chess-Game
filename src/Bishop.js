import React from 'react';
import './Bishop.css';

function Bishop(props) {
  return (
    <div className={"bishop " + (props.player ? 'black': 'white')}>
    </div>
  )
}

export default Bishop;
