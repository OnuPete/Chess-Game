import React, { Component } from 'react';
import './Rows.css';
import Box from './Box.js';

class Row extends Component {

  render() {
    return (<div className="Board">
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 0)} piece={this.props.piece[0]}/>
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 1)} piece={this.props.piece[1]}/>
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 2)} piece={this.props.piece[2]}/>
    </div>);
  }
}

export default Row;
