import React from 'react';
import './Board.css';
import Row from './Rows.js';


function Board(props) {
    return (
      <div className="board">
        <Row onClick={(piece, row, col) => props.update(piece, 0, col)} even={false} piece={props.board[0]}/>
        <Row onClick={(piece, row, col) => props.update(piece, 1, col)} even={true} piece={props.board[1]}/>
        <Row onClick={(piece, row, col) => props.update(piece, 2, col)} even={false} piece={props.board[2]}/>
        <Row onClick={(piece, row, col) => props.update(piece, 3, col)} even={true} piece={props.board[3]}/>
        <Row onClick={(piece, row, col) => props.update(piece, 4, col)} even={false} piece={props.board[4]}/>
        <Row onClick={(piece, row, col) => props.update(piece, 5, col)} even={true} piece={props.board[5]}/>
        <Row onClick={(piece, row, col) => props.update(piece, 6, col)} even={false} piece={props.board[6]}/>
        <Row onClick={(piece, row, col) => props.update(piece, 7, col)} even={true} piece={props.board[7]}/>
      </div>
  );
}

export default Board;
