import React from 'react';
import './Pawn.css';

function Pawn(props) {
  return (
    <section className="stage">
      <figure className={"ball " + (props.player ? "black": "white")}><span className="shadow"></span></figure>
    </section>
  );
}

export default Pawn
