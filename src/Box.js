import React, { Component } from 'react';
import './Box.css';
import Pawn from './Pawn';
import Rook from './Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import King from './King';

class Box extends Component {
  render() {
    let color = this.props.color === 'black' ? ' black': '';
    // console.log(this.props);
    return (<div className={"box" +  color} onClick={(piece, row, col)=>this.props.onClick(this.props.piece, row, col)}>
    {this.props.piece.kind === 'P' && <Pawn player={this.props.piece.player} />}
    {this.props.piece.kind === 'R' && <Rook player={this.props.piece.player} />}
    {this.props.piece.kind === 'K' && <King player={this.props.piece.player} />}
    {this.props.piece.kind === 'Kn' && <Knight player={this.props.piece.player} />}
    {this.props.piece.kind === 'B' && <Bishop player={this.props.piece.player} />}
    </div>);
  }
}

export default Box;
