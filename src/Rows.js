import React, { Component } from 'react';
import './Rows.css';
import Box from './Box.js';

class Row extends Component {

  render() {
    const colors = this.props.even ? ['white', 'black']: ['black', 'white'];
    return (<div className="row">
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 0)} color={colors[0]} piece={this.props.piece[0]}/>
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 1)} color={colors[1]} piece={this.props.piece[1]}/>
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 2)} color={colors[0]} piece={this.props.piece[2]}/>
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 3)} color={colors[1]} piece={this.props.piece[3]}/>
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 4)} color={colors[0]} piece={this.props.piece[4]}/>
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 5)} color={colors[1]} piece={this.props.piece[5]}/>
      <Box onClick={(piece, row, col) => this.props.onClick(piece, row, 6)} color={colors[0]} piece={this.props.piece[6]}/>
    </div>);
  }
}

export default Row;
