import React from 'react';
import './King.css'

function King(props) {
  return (
    <div className="king">

      <div className={"rings " + (props.player? 'black' : 'white')}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <section className="stage">
        <figure className={"ball "+ (props.player? 'black' : 'white')}></figure>
      </section>
    </div>
  );
}

export default King;
