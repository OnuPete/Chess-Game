import React from 'react';
import './Cube.css';

function Cube(props) {
  return (
    <section className="container">
      <div id="cube">

        <figure className={"back show-front " + (props.player ? "black": "white")}></figure>
        <figure className={"right show-left " + (props.player ? "black": "white")}></figure>
        <figure className={"left show-right " +  + (props.player ? "black": "white")}></figure>
        <figure className={"top show-bottom " + (props.player ? "black": "white")}></figure>
        <figure className={"bottom show-top " + (props.player ? "black": "white")}></figure>
      </div>
    </section>);
}


export default Cube;
