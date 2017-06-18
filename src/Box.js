import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {

    // console.log(this.props);
    return (<div className="box" onClick={(piece, row, col)=>this.props.onClick(this.props.piece, row, col)}>
    {this.props.piece.kind}
    </div>);
  }
}

export default Box;
